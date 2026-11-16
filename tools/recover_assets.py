# Stellt src/assets/ aus index.html wieder her, passend zu den Platzhaltern in src/.
# Voraussetzung: index.html wurde aus genau diesem src/ gebaut.
import re, os, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
r = lambda n: open(os.path.join(root, 'src', n), encoding='utf8').read()
src = r('head.html') + r('main.js') + r('mid.html') + r('style.css') + r('noir.css') + r('tail.html')
html = open(os.path.join(root, 'index.html'), encoding='utf8').read()
parts = re.split(r'__ASSET_(\d+)__', src)
pos = 0
if not html.startswith(parts[0]):
    sys.exit('index.html passt nicht zu src/ (Anfang weicht ab)')
pos = len(parts[0])
assets = {}
for i in range(1, len(parts), 2):
    aid, lit = parts[i], parts[i + 1]
    if i + 2 >= len(parts):
        if not html.endswith(lit): sys.exit('index.html passt nicht zu src/ (Ende weicht ab)')
        end = len(html) - len(lit)
    else:
        end = html.find(lit, pos) if lit else None
        if end is None: sys.exit(f'leeres Stueck nach Asset {aid}')
        if end < 0: sys.exit(f'index.html passt nicht zu src/ (nach Asset {aid})')
    val = html[pos:end]
    if aid in assets and assets[aid] != val: sys.exit(f'Asset {aid} uneinheitlich')
    assets[aid] = val
    pos = end + len(lit)
os.makedirs(os.path.join(root, 'src', 'assets'), exist_ok=True)
for aid, val in assets.items():
    open(os.path.join(root, 'src', 'assets', aid + '.txt'), 'w', encoding='utf8', newline='').write(val)
print(len(assets), 'Assets wiederhergestellt')
