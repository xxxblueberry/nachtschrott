import json, os, io, base64
from PIL import Image
D='/workspace/arena-roguelite/work/t144/'; A='/workspace/arena-public/src/assets/'
ORDER=['a1-sonnenhof','a2-gleishof','a3-gartenhof','b1-montagehalle','b2-giesserei','b3-lokschuppen','c1-hafenkai','c2-steinbruch','c3-leuchtturm']
idx=182; defs=[]; tot=0
def put(im,q=84,lossless=False):
    global idx,tot
    b=io.BytesIO(); im.save(b,'WEBP',quality=q,method=6,alpha_quality=90,lossless=lossless); s='data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
    open(A+f'{idx}.txt','w').write(s); tot+=len(s); r=f'__ASSET_{idx}__'; idx+=1; return r
for n in ORDER:
    k=json.load(open(D+f'kit/{n}/kit.json')); o=D+f'kit/{n}/'
    img={}
    img['quads']=put(Image.open(o+'quads.png'),84)
    img['units']=put(Image.open(o+'units.png'),84)
    img['occ']=put(Image.open(o+'occ.png'),88)
    img['under']=put(Image.open(o+'under.png').convert('RGB'),80)
    img['floor']=put(Image.open(o+'floor.png').convert('RGB'),86)
    for f in ('fx-quads','fx-units'):
        if os.path.exists(o+f+'.png'):
            im=Image.open(o+f+'.png'); im=im.resize((im.width//2,im.height//2),Image.LANCZOS); img[f]=put(im,70)
    th=Image.open(f'/workspace/arena-roguelite/work/t142/plates/{n}.png').convert('RGB').resize((400,225),Image.LANCZOS); img['thumb']=put(th,82)
    k['img']=img; defs.append(k)
    print(n,idx,round(tot/1e6,2),'MB')
js='const ARKDEF='+json.dumps(defs,separators=(',',':'))+';\n'
open(D+'ark_defs.js','w').write(js); print('defs',len(js),'next idx',idx)
