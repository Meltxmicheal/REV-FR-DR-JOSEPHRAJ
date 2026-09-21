import re

blurhashes = {
    1: {'webp': '/images/books/book1.webp', 'hash': 'TdHeI8R-Ip~qa}oeElj[xan$WBNH'},
    2: {'webp': '/images/books/book2.webp', 'hash': 'ThJal%xtE1_4xZt6S*axozjcR*fl'},
    3: {'webp': '/images/books/book3.webp', 'hash': 'TzHe%+t7og.Toft7IVj?WVD%WVae'},
    4: {'webp': '/images/books/book4.webp', 'hash': 'TbJ%:*aeD*_4jYV@Elaxs,RPs.of'},
    5: {'webp': '/images/books/book5.webp', 'hash': 'TfIrBEx]E3.AR+R-9aMxxZM~s+V@'},
    6: {'webp': '/images/books/book6.webp', 'hash': 'TeGt{4WY4;~Va}IVOGj[s+bcjZoc'},
    7: {'webp': '/images/books/book7.webp', 'hash': 'TUKwRaxZXA_4oeNHE,kCV@x]floe'},
    8: {'webp': '/images/books/book8.webp', 'hash': 'TlJ*Fx-;M{~qxuRj9bR,afD*j]Rk'},
    9: {'webp': '/images/books/book9.webp', 'hash': 'ThK18g-:IV~pt7Rk4=NIoyIUofR+'},
    10: {'webp': '/images/books/book10.webp', 'hash': 'ToJ@Bw%1WB~Vt6soI[RlkCD+R*W='},
    11: {'webp': '/images/books/book11.webp', 'hash': 'TRGu2Kxa0L?Fs:NG4:WC%MxZa#Rk'},
    12: {'webp': '/images/books/book12.webp', 'hash': 'TzJ@wNoLof~pa#oeo#j]M|V@s.ae'},
    13: {'webp': '/images/books/book13.webp', 'hash': 'T.K0{Ej[M{~pj[V@T1j[o0Rkj@W='},
    14: {'webp': '/images/books/book14.webp', 'hash': 'TkKm,@f+Io.8jsn~~qs:xVRkWVof'},
    15: {'webp': '/images/books/book15.webp', 'hash': 'TcJQ}~%1D%yFWVV@.Ts:n~4=WB%M'}
}

with open('src/data/books.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for i in range(1, 16):
    info = blurhashes[i]
    target_id = f'book-{i:02d}'
    
    # Match id: "book-XX" ... coverImage: "..."
    pattern = re.compile(r'(id:\s*["\']' + target_id + r'["\'][\s\S]*?coverImage:\s*["\'][^"\']+["\'],)')
    
    # Check if webpImage or blurHash already present
    sub = f'\\1\n    webpImage: "{info["webp"]}",\n    blurHash: "{info["hash"]}",'
    content = pattern.sub(sub, content, count=1)

with open('src/data/books.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully injected webpImage and blurHash into src/data/books.ts for all 15 books.")
