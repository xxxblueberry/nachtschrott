# Zerlegt den Vite-Build (index.html) in bearbeitbare Teile unter src/.
import re, json, os, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
s = open(os.path.join(root, 'index.html'), encoding='utf8').read()
a = s.index('<script type="module" crossorigin>') + len('<script type="module" crossorigin>')
b = s.index('</script>', a)
c = s.index('<style rel="stylesheet" crossorigin>', b) + len('<style rel="stylesheet" crossorigin>')
d = s.index('</style>', c)
assets = []
pat = re.compile(r'data:[a-zA-Z0-9.+/-]+;base64,[A-Za-z0-9+/=]{200,}')
def sub(m):
    assets.append(m.group())
    return f'__ASSET_{len(assets)-1}__'
head = pat.sub(sub, s[:a]); js = pat.sub(sub, s[a:b]); mid = s[b:c]; css = pat.sub(sub, s[c:d]); tail = pat.sub(sub, s[d:])
os.makedirs(os.path.join(root, 'src', 'assets'), exist_ok=True)
for i, x in enumerate(assets):
    open(os.path.join(root, 'src', 'assets', f'{i}.txt'), 'w', encoding='utf8').write(x)
w = lambda n, t: open(os.path.join(root, 'src', n), 'w', encoding='utf8', newline='\n').write(t)
w('head.html', head); w('main.js', js); w('mid.html', mid); w('style.css', css); w('tail.html', tail)
print(len(assets), 'assets;', len(js), 'js bytes;', len(css), 'css bytes')
