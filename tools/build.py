# Baut index.html aus src/ zurück (Assets wieder einsetzen).
import re, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
r = lambda n: open(os.path.join(root, 'src', n), encoding='utf8').read()
out = r('head.html') + r('main.js') + r('mid.html') + r('style.css') + r('noir.css') + r('tail.html')
def sub(m):
    return open(os.path.join(root, 'src', 'assets', m.group(1) + '.txt'), encoding='utf8').read()
out = re.sub(r'__ASSET_(\d+)__', sub, out)
open(os.path.join(root, 'index.html'), 'w', encoding='utf8', newline='').write(out)
print('index.html', len(out), 'bytes')
