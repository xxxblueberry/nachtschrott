# Vergleichsbilder + Kontaktbogen aus /tmp/t144s (tests/t144-shots.mjs)
from PIL import Image, ImageDraw, ImageFont
S='/tmp/t144s/'; O='/workspace/arena-roguelite/screenshots/t144/'; C='/workspace/arena-roguelite/work/t142/plates/'
ORDER=['a1-sonnenhof','a2-gleishof','a3-gartenhof','b1-montagehalle','b2-giesserei','b3-lokschuppen','c1-hafenkai','c2-steinbruch','c3-leuchtturm']
NAMES=['A1 Sonnenhof','A2 Gleishof','A3 Gartenhof','B1 Montagehalle','B2 Gießerei','B3 Lokschuppen','C1 Hafenkai','C2 Kalksteinbruch','C3 Leuchtturmklippe']
F=lambda s:ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',s)
def fit(im,w,h):
    im=im.convert('RGB'); r=min(w/im.width,h/im.height); im=im.resize((round(im.width*r),round(im.height*r)),Image.LANCZOS)
    c=Image.new('RGB',(w,h),(24,22,20)); c.paste(im,((w-im.width)//2,(h-im.height)//2)); return c
def label(d,x,y,t,s=24):
    f=F(s); b=d.textbbox((x,y),t,font=f); d.rectangle((b[0]-8,b[1]-6,b[2]+8,b[3]+6),fill=(0,0,0)); d.text((x,y),t,font=f,fill=(255,255,255))
CW,CH=960,560
for i,n in enumerate(ORDER):
    k=NAMES[i].split()[0]
    cells=[('Konzept',Image.open(C+n+'.png')),('Spiel: ganze Arena 3770×2640',Image.open(S+f'plate-{i}.png')),
           ('Spiel: Desktop 1600×900',Image.open(S+f'game-{i}-desktop.png')),('Spiel: iPhone quer',Image.open(S+f'game-{i}-iphone-quer.png'))]
    out=Image.new('RGB',(CW*2+30,CH*2+90),(16,15,14)); d=ImageDraw.Draw(out); label(d,12,14,NAMES[i]+' – Konzept vs. Spiel',30)
    for j,(t,im) in enumerate(cells):
        x=10+(j%2)*(CW+10); y=70+(j//2)*(CH+10); out.paste(fit(im,CW,CH),(x,y)); label(d,x+12,y+10,t,20)
    out.save(O+f'arena-{k}-vergleich.png',optimize=True)
TW,TH=640,448
out=Image.new('RGB',(TW*3+40,TH*3+40),(16,15,14)); d=ImageDraw.Draw(out)
for i,n in enumerate(ORDER):
    x=10+(i%3)*(TW+10); y=10+(i//3)*(TH+10); out.paste(fit(Image.open(S+f'plate-{i}.png'),TW,TH),(x,y)); label(d,x+10,y+8,NAMES[i],20)
out.save(O+'arenen-kontaktbogen.png',optimize=True)
for i,k in ((0,'a1'),(4,'b2'),(6,'c1')):
    for v in ('desktop','iphone-quer'): Image.open(S+f'game-{i}-{v}.png').save(O+f'spiel-{k}-{v}.png',optimize=True)
print('ok')
