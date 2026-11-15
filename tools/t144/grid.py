import sys
from PIL import Image, ImageDraw, ImageFont
n=sys.argv[1]; x0,y0,x1,y1=map(int,(sys.argv[2] if len(sys.argv)>2 else '0,0,1280,720').split(',')); step=int(sys.argv[3]) if len(sys.argv)>3 else 40
im=Image.open(f'/workspace/arena-roguelite/work/t142/plates/{n}.png').convert('RGB').crop((x0,y0,x1,y1))
s=min(1600/(x1-x0),1000/(y1-y0)); im=im.resize((int((x1-x0)*s),int((y1-y0)*s)),Image.LANCZOS); d=ImageDraw.Draw(im)
F=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',12)
for x in range((x0//step+1)*step,x1,step):
    X=(x-x0)*s; d.line((X,0,X,im.height),fill=(255,0,255) if x%(step*4)==0 else (255,255,0),width=1); d.text((X+2,2),str(x),font=F,fill=(255,255,255),stroke_width=2,stroke_fill=(0,0,0))
for y in range((y0//step+1)*step,y1,step):
    Y=(y-y0)*s; d.line((0,Y,im.width,Y),fill=(255,0,255) if y%(step*4)==0 else (255,255,0),width=1); d.text((2,Y+2),str(y),font=F,fill=(255,255,255),stroke_width=2,stroke_fill=(0,0,0))
im.save(f'/tmp/t142/g-{n}.png')
