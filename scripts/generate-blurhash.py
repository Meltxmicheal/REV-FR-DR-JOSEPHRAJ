import os
import math
import numpy as np
from PIL import Image

CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~'

def encode83(val, length):
    res = ''
    for i in range(1, length + 1):
        digit = (val // (83 ** (length - i))) % 83
        res += CHARS[digit]
    return res

def srgb_to_linear(value):
    v = value / 255.0
    if v <= 0.04045:
        return v / 12.92
    return math.pow((v + 0.055) / 1.055, 2.4)

def linear_to_srgb(value):
    v = max(0.0, min(1.0, value))
    if v <= 0.0031308:
        return int(v * 12.92 * 255 + 0.5)
    return int((1.055 * math.pow(v, 1 / 2.4) - 0.055) * 255 + 0.5)

def sign_pow(v, exp):
    return math.copysign(math.pow(abs(v), exp), v)

def encode_blurhash(img_path, comp_x=3, comp_y=4):
    img = Image.open(img_path).convert('RGB')
    img.thumbnail((64, 64), Image.Resampling.LANCZOS)
    w, h = img.size
    pixels = np.array(img, dtype=float)
    
    linear_pixels = np.zeros_like(pixels)
    for y in range(h):
        for x in range(w):
            for c in range(3):
                linear_pixels[y, x, c] = srgb_to_linear(pixels[y, x, c])
                
    factors = []
    for j in range(comp_y):
        for i in range(comp_x):
            normalisation = 1.0 if (i == 0 and j == 0) else 2.0
            r, g, b = 0.0, 0.0, 0.0
            for y in range(h):
                for x in range(w):
                    basis = math.cos(math.pi * i * x / w) * math.cos(math.pi * j * y / h)
                    r += basis * linear_pixels[y, x, 0]
                    g += basis * linear_pixels[y, x, 1]
                    b += basis * linear_pixels[y, x, 2]
            scale = normalisation / (w * h)
            factors.append((r * scale, g * scale, b * scale))
            
    dc = factors[0]
    ac = factors[1:]
    
    hash_str = ''
    size_flag = (comp_x - 1) + (comp_y - 1) * 9
    hash_str += encode83(size_flag, 1)
    
    if len(ac) > 0:
        max_ac = max(max(abs(r), abs(g), abs(b)) for r, g, b in ac)
        quant_max_ac = int(max(0, min(82, math.floor(max_ac * 166 - 0.5))))
        max_ac_val = (quant_max_ac + 1) / 166
        hash_str += encode83(quant_max_ac, 1)
    else:
        max_ac_val = 1
        hash_str += encode83(0, 1)
        
    dc_r = linear_to_srgb(dc[0])
    dc_g = linear_to_srgb(dc[1])
    dc_b = linear_to_srgb(dc[2])
    dc_val = (dc_r << 16) + (dc_g << 8) + dc_b
    hash_str += encode83(dc_val, 4)
    
    for r, g, b in ac:
        qr = int(max(0, min(18, math.floor(sign_pow(r / max_ac_val, 0.5) * 9 + 9.5))))
        qg = int(max(0, min(18, math.floor(sign_pow(g / max_ac_val, 0.5) * 9 + 9.5))))
        qb = int(max(0, min(18, math.floor(sign_pow(b / max_ac_val, 0.5) * 9 + 9.5))))
        val = qr * 19 * 19 + qg * 19 + qb
        hash_str += encode83(val, 2)
        
    return hash_str

def main():
    print("Generating BlurHashes...")
    author_path = "public/images/author/author.jpg"
    if os.path.exists(author_path):
        bh = encode_blurhash(author_path, 3, 4)
        print(f'author: "{bh}"')

    for i in range(1, 16):
        found = False
        for ext in ['jpg', 'png', 'jpeg']:
            p = f"public/images/books/book{i}.{ext}"
            if os.path.exists(p):
                bh = encode_blurhash(p, 3, 4)
                print(f'book-{i:02d} ({p}): "{bh}"')
                found = True
                break
        if not found:
            print(f"Warning: book {i} not found")

if __name__ == '__main__':
    main()

