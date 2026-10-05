import os
import math
import re
import numpy as np
from PIL import Image

# ── BlurHash Encoder Implementation ──────────────────────────────────────
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

def encode_blurhash(img, comp_x=3, comp_y=4):
    img_rgb = img.convert('RGB')
    img_rgb.thumbnail((64, 64), Image.Resampling.LANCZOS)
    w, h = img_rgb.size
    pixels = np.array(img_rgb, dtype=float)
    
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
    print("=== PROCESSING NEW ASSETS FROM Resource/ ===")
    
    os.makedirs("public/images/books", exist_ok=True)
    os.makedirs("public/images/author", exist_ok=True)

    book_hashes = {}

    # 1. PROCESS 15 BOOK COVERS
    print("\n--- 1. Processing 15 Book Covers ---")
    for i in range(1, 16):
        src_path = f"Resource/All Book covers/BOOK{i}.jpg"
        if not os.path.exists(src_path):
            print(f"ERROR: Source file {src_path} missing!")
            continue
            
        img = Image.open(src_path)
        
        # Calculate max size for retina display (height ~1000px)
        max_h = 1000
        w, h = img.size
        new_w = int(w * (max_h / h))
        img_resized = img.resize((new_w, max_h), Image.Resampling.LANCZOS)
        
        # Save JPG
        jpg_out = f"public/images/books/book{i}.jpg"
        img_resized.convert('RGB').save(jpg_out, format='JPEG', quality=88, optimize=True)
        
        # Save WebP
        webp_out = f"public/images/books/book{i}.webp"
        img_resized.convert('RGB').save(webp_out, format='WEBP', quality=85)
        
        # Generate BlurHash
        bh = encode_blurhash(img_resized, 3, 4)
        book_hashes[i] = bh
        
        jpg_size = os.path.getsize(jpg_out) / 1024
        webp_size = os.path.getsize(webp_out) / 1024
        print(f"Book {i:2d}: JPG={jpg_size:.1f}KB, WebP={webp_size:.1f}KB, BlurHash='{bh}'")

    # 2. PROCESS AUTHOR IMAGE
    print("\n--- 2. Processing Author Image ---")
    author_src = "Resource/Author image/Author Image.jpeg"
    author_bh = ""
    if os.path.exists(author_src):
        img = Image.open(author_src)
        max_h = 1200
        w, h = img.size
        new_w = int(w * (max_h / h))
        img_resized = img.resize((new_w, max_h), Image.Resampling.LANCZOS)
        
        jpg_out = "public/images/author/author.jpg"
        img_resized.convert('RGB').save(jpg_out, format='JPEG', quality=88, optimize=True)
        
        webp_out = "public/images/author/author.webp"
        img_resized.convert('RGB').save(webp_out, format='WEBP', quality=85)
        
        author_bh = encode_blurhash(img_resized, 3, 4)
        print(f"Author photo: JPG={os.path.getsize(jpg_out)/1024:.1f}KB, WebP={os.path.getsize(webp_out)/1024:.1f}KB, BlurHash='{author_bh}'")

    # 3. PROCESS LOGO & FAVICONS
    print("\n--- 3. Processing Logo & Favicons ---")
    logo_src = "Resource/Logo/COLOR LOGO.png"
    if os.path.exists(logo_src):
        logo_img = Image.open(logo_src)
        
        w, h = logo_img.size
        max_w = 800
        if w > max_w:
            new_h = int(h * (max_w / w))
            logo_resized = logo_img.resize((max_w, new_h), Image.Resampling.LANCZOS)
        else:
            logo_resized = logo_img
            
        q_img = logo_resized.quantize(colors=256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
        q_img.save("public/logo.png", format='PNG', optimize=True)
        q_img.save("public/logo-without-bg.png", format='PNG', optimize=True)
        q_img.save("public/logo without bg.png", format='PNG', optimize=True)
        print(f"Logo saved: public/logo.png ({os.path.getsize('public/logo.png')/1024:.1f}KB)")
        
        sizes = [
            (16, 16, "public/favicon-16x16.png"),
            (32, 32, "public/favicon-32x32.png"),
            (48, 48, "public/favicon-48x48.png"),
            (192, 192, "public/favicon-192x192.png"),
            (512, 512, "public/favicon-512x512.png"),
            (180, 180, "public/apple-touch-icon.png"),
            (64, 64, "public/favicon.png"),
        ]
        
        ico_images = []
        for width, height, path in sizes:
            fav = logo_img.resize((width, height), Image.Resampling.LANCZOS)
            fav.save(path, format='PNG', optimize=True)
            if width in (16, 32, 48):
                ico_images.append(fav)
                
        ico_images[0].save("public/favicon.ico", format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
        print("Favicons updated successfully.")

    # 4. REMOVE OBSOLETE BOOK 14 & 15 PNGs FROM public/images/books/
    print("\n--- 4. Cleaning Obsolete Assets ---")
    for obsolete_file in ["public/images/books/book14.png", "public/images/books/book15.png"]:
        if os.path.exists(obsolete_file):
            os.remove(obsolete_file)
            print(f"Removed obsolete file: {obsolete_file}")

    # 5. UPDATE src/data/books.ts DIRECTLY BY ARRAY ITEM / ORDER
    print("\n--- 5. Updating src/data/books.ts ---")
    with open("src/data/books.ts", "r", encoding="utf-8") as f:
        books_content = f.read()

    # Split content by book objects in books array
    header, array_body = books_content.split("export const books: Book[] = [", 1)

    items = array_body.split("\n  {\n")
    new_items = [items[0]] # preamble before first item

    for idx in range(1, len(items)):
        item = items[idx]
        book_num = idx  # 1 to 15 in sequential collection order
        bh = book_hashes[book_num]
        
        # Replace id to "book-XX"
        item = re.sub(r'id:\s*["\'][^"\']+["\']', f'id: "book-{book_num:02d}"', item, count=1)
        # Replace order to book_num
        item = re.sub(r'order:\s*\d+', f'order: {book_num}', item, count=1)
        # Replace coverImage
        item = re.sub(r'coverImage:\s*["\'][^"\']+["\']', f'coverImage: "/images/books/book{book_num}.jpg"', item, count=1)
        # Replace webpImage
        item = re.sub(r'webpImage:\s*["\'][^"\']+["\']', f'webpImage: "/images/books/book{book_num}.webp"', item, count=1)
        # Replace blurHash
        item = re.sub(r'blurHash:\s*["\'][^"\']+["\']', f'blurHash: "{bh}"', item, count=1)
        
        new_items.append(item)

    updated_array_body = "\n  {\n".join(new_items)
    updated_books_content = header + "export const books: Book[] = [" + updated_array_body

    with open("src/data/books.ts", "w", encoding="utf-8") as f:
        f.write(updated_books_content)
    print("src/data/books.ts updated with corrected IDs, cover images, WebP paths, and BlurHashes for all 15 books.")

    # 6. UPDATE src/data/author.ts
    print("\n--- 6. Updating src/data/author.ts ---")
    with open("src/data/author.ts", "r", encoding="utf-8") as f:
        author_content = f.read()

    if author_bh:
        author_content = re.sub(
            r'blurHash:\s*["\'][^"\']+["\']',
            f'blurHash: "{author_bh}"',
            author_content
        )

    with open("src/data/author.ts", "w", encoding="utf-8") as f:
        f.write(author_content)
    print("src/data/author.ts updated with new BlurHash.")

    print("\n=== ASSET PROCESSING COMPLETE ===")

if __name__ == '__main__':
    main()
