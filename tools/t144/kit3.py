# t144 v3: Konzept 1:1 (K=2.95 Welt/Konzept-px bei 3770 breit). Vier Quadranten (weich überblendet) + Lücken-Einheiten
# (entzerrt entlang des Laufpolygons) für andere Arenagrößen + Requisiten (freigestellt, aus Basis entfernt) + Dekal.
import sys, json, os, numpy as np, cv2
from PIL import Image, ImageDraw
D='/workspace/arena-roguelite/work/t144/'; SPEC=json.load(open(D+'spec.json'))
K=3770/1280; WPX=1.0; PPC=K*WPX; M=24; OV=10; OVF=28
def bnd(poly):
    P=np.array(poly+[poly[0]],np.float64)
    def hits(c,axis):  # Schnittpunkte der Linie (y=c bzw. x=c) mit dem Polygon
        o=[]
        for (x0,y0),(x1,y1) in zip(P[:-1],P[1:]):
            a0,a1,b0,b1=(y0,y1,x0,x1) if axis==1 else (x0,x1,y0,y1)
            if (a0-c)*(a1-c)<=0 and a0!=a1: o.append(b0+(c-a0)/(a1-a0)*(b1-b0))
        return o
    ys=P[:,1]; xs=P[:,0]; cy=lambda y:min(max(y,ys.min()+0.01),ys.max()-0.01); cx=lambda x:min(max(x,xs.min()+0.01),xs.max()-0.01)
    xl=lambda y:min(hits(cy(y),1)); xr=lambda y:max(hits(cy(y),1)); yt=lambda x:min(hits(cx(x),0)); yb=lambda x:max(hits(cx(x),0))
    return xl,xr,yt,yb
    xl=lambda y:min(hits(y,1)); xr=lambda y:max(hits(y,1)); yt=lambda x:min(hits(x,0)); yb=lambda x:max(hits(x,0))
    return xl,xr,yt,yb
def procwall(style,side,xref,width,CW=1280,rows=80):
    # sauber gezeichnete Seitenwand (4x überabgetastet), Außenseite links; rechts gespiegelt
    SS=4; px=PPC*SS; Wc=width+OVF; H=rows+2*OV
    W=round(Wc*px); Hh=round(H*px); im=Image.new('RGBA',(W,Hh),(0,0,0,0)); d=ImageDraw.Draw(im)
    xw=(xref if side=='L' else CW-xref)*px  # Wandlinie
    hexc=lambda h:tuple(int(h[i:i+2],16) for i in (1,3,5))+(255,)
    if style=='halle':
        # wie die Konzeptwand von außen nach innen: dunkle Kappe, Klinker hell, roter Sockel, grauer Fußleistenstreifen
        cap,capl,face,mort,base,based,basel,foot,ol=map(hexc,('#4b4f57','#6c717a','#e8dcc6','#cdbfa7','#b4452f','#8f3524','#c75a40','#77736f','#3a2e2a'))
        d.rectangle((0,0,xw*0.12,Hh),fill=cap); d.rectangle((xw*0.10,0,xw*0.13,Hh),fill=capl)
        d.rectangle((xw*0.13,0,xw*0.46,Hh),fill=face)
        step=22*SS
        for i,y in enumerate(range(0,Hh,step)):
            d.rectangle((xw*0.13,y,xw*0.46,y+2*SS),fill=mort)
            xx=xw*0.13+((i%2)*0.5+0.25)*(xw*0.33); d.rectangle((xx,y,xx+2*SS,y+step),fill=mort)
        d.rectangle((xw*0.46,0,xw*0.90,Hh),fill=base); d.rectangle((xw*0.46,0,xw*0.50,Hh),fill=basel)
        for i,y in enumerate(range(0,Hh,step)):
            d.rectangle((xw*0.50,y,xw*0.88,y+2*SS),fill=based)
        d.rectangle((xw*0.86,0,xw*0.90,Hh),fill=based)
        d.rectangle((xw*0.90,0,xw*0.99,Hh),fill=foot)
        d.rectangle((xw-2*SS,0,xw+1*SS,Hh),fill=ol)
    else:  # giesserei: wie die Konzeptwand – dunkle Mauer, große rote Ziegelkante, dunkler Steinsockel
        dark,brick,brick2,mort,hl,stone,stone2,ol=map(hexc,('#2e2727','#a8483a','#b95a42','#5a2c22','#d27a5a','#4b4140','#5a4e4b','#231a18'))
        d.rectangle((0,0,xw*0.22,Hh),fill=dark)
        rh=34*SS
        for i,y in enumerate(range(0,Hh,rh)):
            d.rectangle((xw*0.22,y,xw*0.62,y+rh),fill=brick if i%2 else brick2)
            d.rectangle((xw*0.22,y,xw*0.62,y+2*SS),fill=mort); d.rectangle((xw*0.22,y+2*SS,xw*0.26,y+rh),fill=hl)
        d.rectangle((xw*0.60,0,xw*0.63,Hh),fill=mort)
        bs=58*SS
        for i,y in enumerate(range(0,Hh,bs)):
            d.rectangle((xw*0.63,y,xw*0.97,y+bs),fill=stone if i%2 else stone2); d.rectangle((xw*0.63,y,xw*0.97,y+2*SS),fill=ol)
        d.rectangle((xw-3*SS,0,xw+1*SS,Hh),fill=ol)
    a=np.array(im).astype(np.float32)
    sh=int(14*px); 
    for i in range(sh): a[:,int(xw)+SS+i,:3]=0; a[:,int(xw)+SS+i,3]=110*(1-i/sh)
    im=Image.fromarray(np.uint8(a)).resize((round(Wc*PPC),round(H*PPC)),Image.LANCZOS); a=np.array(im)
    out=np.array(im); k=round(OV*PPC); r=(np.arange(k)+0.5)/k; al=out[...,3].astype(np.float32); al[:k]*=r[:,None]; al[-k:]*=r[::-1,None]; out[...,3]=np.uint8(al)
    if side=='R': out=out[:,::-1].copy(); n=[CW-width,0,CW,rows]
    else: n=[0,0,width,rows]
    return out,n
def build(name):
    s=SPEC[name]; X4=cv2.cvtColor(cv2.imread(D+f'x4/{name}.png'),cv2.COLOR_BGR2RGB); H4,W4=X4.shape[:2]
    CW,CH=W4//4,H4//4; out=D+f'kit/{name}/'; os.makedirs(out,exist_ok=True)
    mx,my=s['mx'],s['my']; xl,xr,yt,yb=bnd(s['poly'])
    # Requisiten
    props=[]; emask=np.zeros((H4//2,W4//2),np.float32)
    for pr in s.get('props',[]):
        x0,y0,x1,y1=pr['r']; Mg=12
        cx0,cy0,cx1,cy1=max(0,x0-Mg),max(0,y0-Mg),min(CW,x1+Mg),min(CH,y1+Mg)
        a4=X4[cy0*4:cy1*4,cx0*4:cx1*4]
        small=cv2.resize(a4,None,fx=0.5,fy=0.5,interpolation=cv2.INTER_AREA); ms=np.zeros(small.shape[:2],np.uint8)
        rect=((x0-cx0)*2,(y0-cy0)*2,(x1-x0)*2,(y1-y0)*2)
        cv2.grabCut(small,ms,rect,np.zeros((1,65)),np.zeros((1,65)),6,cv2.GC_INIT_WITH_RECT)
        mk=np.where((ms==1)|(ms==3),1,0).astype(np.uint8)
        n_,lb,st,_=cv2.connectedComponentsWithStats(mk)
        if n_>1:
            keep=np.zeros_like(mk)
            for j in range(1,n_):
                if st[j,4]>0.05*mk.sum(): keep[lb==j]=1
            mk=keep
        mk=cv2.morphologyEx(mk,cv2.MORPH_CLOSE,np.ones((5,5),np.uint8)).astype(np.float32)
        sl=emask[cy0*2:cy0*2+mk.shape[0],cx0*2:cx0*2+mk.shape[1]]; np.maximum(sl,mk,out=sl)
        w=round((cx1-cx0)*K); h=round((cy1-cy0)*K)
        rgb=cv2.resize(a4,(w,h),interpolation=cv2.INTER_AREA)
        al=cv2.resize(cv2.GaussianBlur(mk,(0,0),1.2),(w,h),interpolation=cv2.INTER_LINEAR); al=np.clip((al-0.2)/0.6,0,1)
        props.append(dict(rgba=np.dstack([rgb,np.uint8(al*255)]),n=[cx0,cy0,cx1,cy1],pr=pr))
    half=cv2.resize(X4,(W4//2,H4//2),interpolation=cv2.INTER_AREA)
    # Dekal-Maske (wird aus der Basis entfernt und mittig neu gezeichnet)
    dec=None
    if 'decal' in s:
        x0,y0,x1,y1=s['decal']['r']; a=half[y0*2:y1*2,x0*2:x1*2]; fr=s['floor']['r']
        f=half[fr[1]*2:fr[3]*2,fr[0]*2:fr[2]*2]
        lab=cv2.cvtColor(a,cv2.COLOR_RGB2LAB).astype(np.float32); med=np.median(cv2.cvtColor(f,cv2.COLOR_RGB2LAB).reshape(-1,3).astype(np.float32),0)
        d=np.sqrt(((cv2.GaussianBlur(lab,(0,0),1.5)-med)**2).sum(-1)); th=s['decal'].get('th',10)
        al=np.clip((d-th)/(th*0.8),0,1); al=cv2.GaussianBlur(al,(0,0),1.2)
        h,w=al.shape; yy,xx=np.mgrid[0:h,0:w]; e=np.minimum(np.minimum(xx,w-1-xx),np.minimum(yy,h-1-yy))/(0.06*min(w,h)); al*=np.clip(e,0,1)
        sl=emask[y0*2:y1*2,x0*2:x1*2]; np.maximum(sl,(al>0.25).astype(np.float32),out=sl)
        dec=(x0,y0,x1,y1,al)
    base=X4.copy()
    m8=np.uint8(cv2.dilate((emask>0.3).astype(np.uint8),np.ones((7,7),np.uint8))*255)
    n_,lb,st,_=cv2.connectedComponentsWithStats(m8); hp=half.copy()
    for j in range(1,n_):
        x,y,w,h,_a=st[j]; P0=24; xa,ya,xb,yb_=max(0,x-P0),max(0,y-P0),min(W4//2,x+w+P0),min(H4//2,y+h+P0)
        hp[ya:yb_,xa:xb]=cv2.inpaint(half[ya:yb_,xa:xb],m8[ya:yb_,xa:xb],7,cv2.INPAINT_TELEA)
    up=cv2.resize(hp,(W4,H4),interpolation=cv2.INTER_CUBIC)
    mf=cv2.resize(cv2.GaussianBlur(m8.astype(np.float32)/255,(0,0),1.5),(W4,H4))[...,None]
    base=np.uint8(X4*(1-mf)+up*mf)
    for (x0,y0,x1,y1) in s.get('erase',[]):
        w=x1-x0; sx=w+16; src=base[y0*4:y1*4,(x0-sx)*4:(x1-sx)*4].astype(np.float32)
        h4,w4=src.shape[:2]; yy,xx=np.mgrid[0:h4,0:w4]; e=np.minimum(np.minimum(xx,w4-1-xx),np.minimum(yy,h4-1-yy))/(0.25*min(w4,h4)); m=np.clip(e,0,1)[...,None]
        base[y0*4:y1*4,x0*4:x1*4]=np.uint8(base[y0*4:y1*4,x0*4:x1*4]*(1-m)+src*m)
    BSF=min(4.0,PPC*1.5); BS=cv2.resize(base,(round(W4*BSF/4),round(H4*BSF/4)),interpolation=cv2.INTER_AREA)
    OS=cv2.resize(X4,(round(W4*BSF/4),round(H4*BSF/4)),interpolation=cv2.INTER_AREA)
    def crop(x0,y0,x1,y1,dxf=None,dyf=None,src=None,ppc=PPC):
        w=max(1,round((x1-x0)*ppc)); h=max(1,round((y1-y0)*ppc))
        XX,YY=np.meshgrid(x0+(np.arange(w)+0.5)/ppc,y0+(np.arange(h)+0.5)/ppc)
        if dyf: YY=YY-np.vectorize(dyf)(XX[0])[None,:]
        if dxf: XX=XX-np.vectorize(dxf)(YY[:,0])[:,None] if not dyf else XX-np.vectorize(dxf)(YY)
        return cv2.remap(BS if src is None else src,(XX*BSF-0.5).astype(np.float32),(YY*BSF-0.5).astype(np.float32),cv2.INTER_LINEAR,borderMode=cv2.BORDER_REPLICATE)
    def ramp(n): return (np.arange(n)+0.5)/n
    def feath(a,ml=0,mt=0,mr=0,mb=0):
        h,w=a.shape[:2]; al=np.ones((h,w),np.float32)
        for m_,sl in ((ml,'l'),(mt,'t'),(mr,'r'),(mb,'b')):
            if not m_: continue
            k=round(m_*PPC)
            if sl=='l': al[:,:k]*=ramp(k)[None,:]
            if sl=='t': al[:k,:]*=ramp(k)[:,None]
            if sl=='r': al[:,w-k:]*=ramp(k)[None,::-1]
            if sl=='b': al[h-k:,:]*=ramp(k)[::-1,None]
        return np.dstack([a,np.uint8(al*255)])
    Q={}
    Q['tl']=(feath(crop(0,0,mx+M,my+M),mr=M,mb=M),[0,0,mx+M,my+M])
    Q['tr']=(feath(crop(mx-M,0,CW,my+M),ml=M,mb=M),[mx-M,0,CW,my+M])
    Q['bl']=(feath(crop(0,my-M,mx+M,CH),mr=M,mt=M),[0,my-M,mx+M,CH])
    Q['br']=(feath(crop(mx-M,my-M,CW,CH),ml=M,mt=M),[mx-M,my-M,CW,CH])
    # Lücken-Einheiten, entzerrt: Rand an der Stelle mx/my
    U={}
    def vunit(side,rows,xref,width):
        b0,b1=rows
        if side=='L': dxf=lambda y:xref-xl(y); a=crop(0,b0-OV,width,b1+OV,dxf=dxf); a=feath(a,mt=OV,mb=OV,mr=OVF); n=[0,b0,width,b1]
        else: dxf=lambda y:xref-xr(y); a=crop(width,b0-OV,CW,b1+OV,dxf=dxf); a=feath(a,mt=OV,mb=OV,ml=OVF); n=[width,b0,CW,b1]
        return a,n
    def hunit(side,cols,yref,depth):
        a0,a1=cols
        if side=='T': dyf=lambda x:yref-yt(x); a=crop(a0-OV,0,a1+OV,depth,dyf=dyf); a=feath(a,ml=OV,mr=OV,mb=OVF); n=[a0,0,a1,depth]
        else: dyf=lambda x:yref-yb(x); a=crop(a0-OV,depth,a1+OV,CH,dyf=dyf); a=feath(a,ml=OV,mr=OV,mt=OVF); n=[a0,depth,a1,CH]
        return a,n
    HS=s.get('HS',90)
    def xw(f,ref): return lambda y:ref-f(y)
    U['hAl']=(feath(crop(0,my,mx+M,my+HS+OV,dxf=xw(xl,xl(my))),mr=M,mb=OV),[0,my,mx+M,my+HS+OV])
    U['hAr']=(feath(crop(mx-M,my,CW,my+HS+OV,dxf=xw(xr,xr(my))),ml=M,mb=OV),[mx-M,my,CW,my+HS+OV])
    U['hBl']=(feath(crop(0,my-HS-OV,mx+M,my,dxf=xw(xl,xl(my))),mr=M,mt=OV),[0,my-HS-OV,mx+M,my])
    U['hBr']=(feath(crop(mx-M,my-HS-OV,CW,my,dxf=xw(xr,xr(my))),ml=M,mt=OV),[mx-M,my-HS-OV,CW,my])
    U['vAt']=(feath(crop(mx,0,mx+HS+OV,my+M,dyf=xw(yt,yt(mx))),mb=M,mr=OV),[mx,0,mx+HS+OV,my+M])
    U['vAb']=(feath(crop(mx,my-M,mx+HS+OV,CH,dyf=xw(yb,yb(mx))),mt=M,mr=OV),[mx,my-M,mx+HS+OV,CH])
    U['vBt']=(feath(crop(mx-HS-OV,0,mx,my+M,dyf=xw(yt,yt(mx))),mb=M,ml=OV),[mx-HS-OV,0,mx,my+M])
    U['vBb']=(feath(crop(mx-HS-OV,my-M,mx,CH,dyf=xw(yb,yb(mx))),mt=M,ml=OV),[mx-HS-OV,my-M,mx,CH])
    ext={}
    if s.get('gap')=='stretch':
        S_=s['S']; FE=16
        U['sl']=(feath(crop(0,my-S_,mx+M,my+S_),mr=M,mt=FE,mb=FE),[0,my-S_,mx+M,my+S_])
        U['sr']=(feath(crop(mx-M,my-S_,CW,my+S_),ml=M,mt=FE,mb=FE),[mx-M,my-S_,CW,my+S_])
    for sd,e in s.get('ext',{}).items():
        if e.get('proc'): U['e'+sd]=procwall(e['proc'],sd,e['x'],s['UL'] if sd=='L' else CW-s['UR'],CW)
        else: U['e'+sd]=vunit(sd,s['left' if sd=='L' else 'right']['u'],e['x'],s['UL' if sd=='L' else 'UR'])
        ext[sd]=e
    if dec:
        x0,y0,x1,y1,al=dec; a=crop(x0,y0,x1,y1,src=OS); al=cv2.resize(al,(a.shape[1],a.shape[0]))
        U['decal']=(np.dstack([a,np.uint8(np.clip(al,0,1)*255)]),[x0,y0,x1,y1])
    # Boden
    fr=s['floor']['r']; f=crop(*fr).astype(np.float32); h,w=f.shape[:2]
    rr=np.roll(np.roll(f,h//2,0),w//2,1); yy,xx=np.mgrid[0:h,0:w]
    m=np.clip(np.minimum(np.minimum(xx,w-1-xx)/(w*0.25),np.minimum(yy,h-1-yy)/(h*0.25)),0,1)[...,None]
    Image.fromarray(np.uint8(np.clip(f*m+rr*(1-m),0,255))).save(out+'floor.png')
    # Atlanten: Quadranten (2x2) und Einheiten (Regal)
    tw=max(Q['tl'][0].shape[1],Q['bl'][0].shape[1]); th=max(Q['tl'][0].shape[0],Q['tr'][0].shape[0])
    QW=tw+max(Q['tr'][0].shape[1],Q['br'][0].shape[1]); QH=th+max(Q['bl'][0].shape[0],Q['br'][0].shape[0])
    qa=np.zeros((QH,QW,4),np.uint8); qpos={}
    for k,(x,y) in dict(tl=(0,0),tr=(tw,0),bl=(0,th),br=(tw,th)).items():
        a=Q[k][0]; qa[y:y+a.shape[0],x:x+a.shape[1]]=a; qpos[k]=[x,y,a.shape[1],a.shape[0]]
    Image.fromarray(qa).save(out+'quads.png')
    items=sorted(U.items(),key=lambda kv:-kv[1][0].shape[0]); AW=max(2048,max(a.shape[1] for a,n in U.values())); x=y=rowh=0; upos={}
    for k,(a,n) in items:
        h,w=a.shape[:2]
        if x+w>AW: x=0; y+=rowh+2; rowh=0
        upos[k]=[x,y,w,h]; x+=w+2; rowh=max(rowh,h)
    ua=np.zeros((y+rowh,AW,4),np.uint8)
    for k,(a,n) in U.items(): x,y,w,h=upos[k]; ua[y:y+h,x:x+w]=a
    Image.fromarray(ua).save(out+'units.png')
    an=s.get('anim',{})
    def fxmask(img,ph,reg=None):
        hsv=cv2.cvtColor(img[...,:3],cv2.COLOR_RGB2HSV).astype(np.float32); Hh,Ss,Vv=hsv[...,0],hsv[...,1],hsv[...,2]
        if an.get('water'): mk=((Hh>80)&(Hh<112)&(Ss>60)&(Vv>80)).astype(np.float32)
        else: mk=(((Hh<30)|(Hh>170))&(Ss>100)&(Vv>150)).astype(np.float32)
        if reg is not None: mk*=reg
        mk=cv2.GaussianBlur(cv2.erode(mk,np.ones((3,3),np.uint8)),(0,0),2)*(img[...,3]/255.)
        h,w=mk.shape; yy,xx=np.mgrid[0:h,0:w].astype(np.float32); rng=np.random.default_rng(7)
        if an.get('water'):
            n1=cv2.resize(cv2.GaussianBlur(rng.random((h//8+1,w//8+1)).astype(np.float32),(0,0),1.2),(w,h),interpolation=cv2.INTER_CUBIC)
            wv=np.sin(xx*0.035+yy*0.09+n1*10+ph*3.14)*0.5+0.5; pat=np.clip((wv-0.8)/0.2,0,1)**1.3; col=(238,252,255)
        else:
            n1=cv2.resize(cv2.GaussianBlur(rng.random((h//12+1,w//12+1)).astype(np.float32),(0,0),1.5),(w,h),interpolation=cv2.INTER_CUBIC)
            wv=np.sin(xx*0.016+n1*11+ph*3.14)*0.5+0.5; pat=np.clip((wv-0.5)/0.5,0,1); col=(255,238,150)
        A=np.clip(pat*mk,0,1)
        o=np.zeros((h,w,4),np.uint8); o[...,0],o[...,1],o[...,2]=col; o[...,3]=np.uint8(A*255); return o
    if an:
        rq=None; ru=None
        if an.get('lava'):
            ly=an.get('y',612); rq=np.zeros(qa.shape[:2],np.float32); ru=np.zeros(ua.shape[:2],np.float32)
            for k_ in ('bl','br'):
                x,y,w,h=qpos[k_]; n0=Q[k_][1][1]; r0=max(0,int((ly-n0)*PPC)); rq[y+r0:y+h,x:x+w]=1
        for nm,img,rg in (('quads',qa,rq),('units',ua,ru)):
            Image.fromarray(np.concatenate([fxmask(img,0,rg),fxmask(img,1,rg)],0)).save(out+f'fx-{nm}.png')
    # Requisiten
    occ=[]
    for p in props:
        pr=p['pr']; fx_,fy_=pr['f'][0],pr['f'][1]; x0,y0,x1,y1=p['n']
        und=crop(x0,y0,x1,y1,ppc=K)
        if und.shape[:2]!=p['rgba'].shape[:2]: und=cv2.resize(und,(p['rgba'].shape[1],p['rgba'].shape[0]))
        meta=dict(n=[x0,y0,x1,y1],f=list(pr['f']),q=('l' if fx_<mx else 'r')+('t' if fy_<my else 'b'))
        if pr['f'][2]==0: meta['flat']=1
        if pr.get('glow'): meta['glow']=pr['glow']
        occ.append((p['rgba'],und,meta))
    OW=sum(o[0].shape[1]+2 for o in occ); OH=max(o[0].shape[0] for o in occ)
    oa=np.zeros((OH,OW,4),np.uint8); uu=np.zeros((OH,OW,3),np.uint8); x=0
    for a,u,meta in occ:
        h,w=a.shape[:2]; oa[:h,x:x+w]=a; uu[:h,x:x+w]=u; meta['a']=[x,0,w,h]; x+=w+2
    Image.fromarray(oa).save(out+'occ.png'); Image.fromarray(uu).save(out+'under.png')
    # Polygon mit Teilungspunkten (Tags: -1 links/oben, 1 rechts/unten)
    poly=s['poly']; P2=[]
    for i in range(len(poly)):
        a=poly[i]; b=poly[(i+1)%len(poly)]
        P2.append(a)
        ts=[]
        for c,ax in ((mx,0),(my,1)):
            if (a[ax]-c)*(b[ax]-c)<0: ts.append((c-a[ax])/(b[ax]-a[ax]))
        for t in sorted(ts):
            q=[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]; P2.append(q)
    tp=[]
    for i,q in enumerate(P2):
        pv=P2[i-1]; nx=P2[(i+1)%len(P2)]
        def tag(v,c,o1,o2):
            if abs(v-c)>1e-6: return -1 if v<c else 1
            return None
        tx_=tag(q[0],mx,0,0); ty_=tag(q[1],my,0,0)
        if tx_ is None or ty_ is None:
            # Punkt auf Teilungslinie: zweimal einfügen (Seite des Vorgängers, dann des Nachfolgers)
            for nb in (pv,nx):
                tp.append([q[0],q[1],tx_ if tx_ is not None else (-1 if nb[0]<mx else 1),ty_ if ty_ is not None else (-1 if nb[1]<my else 1)])
        else: tp.append([q[0],q[1],tx_,ty_])
    kitj=dict(id=name,K=K,cw=CW,ch=CH,mx=mx,my=my,M=M,OV=OV,OVF=OVF,poly=tp,
              quads={k:dict(a=qpos[k],n=Q[k][1]) for k in Q},units={k:dict(a=upos[k],n=U[k][1]) for k in U},
              ext=ext,gap=s.get('gap','strip'),S=s.get('S',0),xl=xl(my),xr=xr(my),yt=yt(mx),yb=yb(mx),decal=s.get('decal'),props=[o[2] for o in occ],anim=an,fx=s.get('fx',{}),
              qh=QH,uh=ua.shape[0],HS=HS)
    json.dump(kitj,open(out+'kit.json','w'))
    return kitj
def layout(kj,Wo,Ho):
    K=kj['K']; CW,CH,mx,my=kj['cw'],kj['ch'],kj['mx'],kj['my']
    gx=Wo-K*CW; gy=Ho-K*CH; X0=-Wo/2; Y0=-Ho/2
    def MX(x,t): return X0+K*x+(gx if t>0 else 0)
    S_=kj.get('S',0)
    def MY(y,t):
        if kj.get('gap')=='stretch':
            if y<=my-S_: return Y0+K*y
            if y>=my+S_: return Y0+K*y+gy
            return Y0+K*(my-S_)+(y-(my-S_))/(2*S_)*(2*S_*K+gy)
        return Y0+K*y+(gy if t>0 else 0)
    MYQ=lambda y,t:Y0+K*y+(gy if t>0 else 0)
    return dict(X0=X0,Y0=Y0,X1=-X0,Y1=-Y0,gx=gx,gy=gy,MX=MX,MY=MY,MYQ=MYQ)
def preview(name,Wo=3770,Ho=2640,sc=0.25,walk=True,ph=None,fn='preview.png'):
    out=D+f'kit/{name}/'; kj=json.load(open(out+'kit.json')); L=layout(kj,Wo,Ho); K=kj['K']; MX,MY=L['MX'],L['MY']
    Qa=Image.open(out+'quads.png'); Ua=Image.open(out+'units.png'); fl=Image.open(out+'floor.png').convert('RGB')
    W=int(Wo*sc); H=int(Ho*sc); C=Image.new('RGBA',(W,H))
    tw=max(1,int(fl.width/WPX*sc)); th=max(1,int(fl.height/WPX*sc)); ft=fl.resize((tw,th),Image.LANCZOS)
    for yy in range(0,H,th):
        for xx in range(0,W,tw): C.paste(ft,(xx,yy))
    tx=lambda X:(X-L['X0'])*sc; ty=lambda Y:(Y-L['Y0'])*sc
    def put(img,a,X,Y,w,h):
        ax,ay,aw,ah=a; im=img.crop((ax,ay,ax+aw,ay+ah)).resize((max(1,round(w*sc)),max(1,round(h*sc))),Image.LANCZOS); C.alpha_composite(im,(round(tx(X)),round(ty(Y))))
    OV,OVF,mx,my=kj['OV'],kj['OVF'],kj['mx'],kj['my']; U=kj['units']
    # Lücken: Streifen A/B (A schließt oben/links nahtlos an, B unten/rechts)
    HS=kj['HS']; G=L['gy']
    if G>1 and kj['gap']!='stretch':
        n=max(2,2*round(G/(2*HS*K))); dh=G/n; s_=dh/(HS*K)
        for i in range(n):
            Y=MY(my,-1)+i*dh; t='A' if i%2==0 else 'B'
            for hs in ('l','r'):
                u=U['h'+t+hs]; nn=u['n']; X=MX(nn[0],-1 if hs=='l' else 1); w=K*(nn[2]-nn[0])
                Y=L['MYQ'](my,-1)+i*dh
                if t=='A': put(Ua,u['a'],X,Y,w,dh+K*OV*s_)
                else: put(Ua,u['a'],X,Y-K*OV*s_,w,dh+K*OV*s_)
    G=L['gx']
    if G>1:
        n=max(2,2*round(G/(2*HS*K))); dw=G/n; s_=dw/(HS*K)
        for i in range(n):
            X=MX(mx,-1)+i*dw; t='A' if i%2==0 else 'B'
            for vs in ('t','b'):
                u=U['v'+t+vs]; nn=u['n']; Y=MY(nn[1],-1 if vs=='t' else 1); h=K*(nn[3]-nn[1])
                if t=='A': put(Ua,u['a'],X,Y,dw+K*OV*s_,h)
                else: put(Ua,u['a'],X-K*OV*s_,Y,dw+K*OV*s_,h)
    for k in ('tl','tr','bl','br'):
        q=kj['quads'][k]; n=q['n']; X=MX(n[0],-1 if k[1]=='l' else 1); Y=L['MYQ'](n[1],-1 if k[0]=='t' else 1)
        put(Qa,q['a'],X,Y,K*(n[2]-n[0]),K*(n[3]-n[1]))
    if kj['gap']=='stretch' and abs(L['gy'])>0.5:
        S_=kj['S']
        for hs in ('l','r'):
            u=U['s'+hs]; nn=u['n']; X=MX(nn[0],-1 if hs=='l' else 1); put(Ua,u['a'],X,L['MYQ'](my-S_,-1),K*(nn[2]-nn[0]),K*2*S_+L['gy'])
    for sd,e in kj['ext'].items():
        u=U['e'+sd]; n=u['n']; uh=K*(n[3]-n[1]); y0,y1=e['r']; ty0=MY(y0,-1 if y0<my else 1); ty1=MY(y1,-1 if y1<my else 1)
        cnt=max(1,int(round((ty1-ty0)/uh))); dh=(ty1-ty0)/cnt
        for i in range(cnt):
            s_=dh/uh; X=MX(n[0],-1 if sd=='L' else 1)-(0 if sd=='L' else K*OVF); Y=ty0+i*dh
            put(Ua,u['a'],X,Y-K*OV*s_,K*(n[2]-n[0]+OVF),dh+2*K*OV*s_)
    if 'decal' in U:
        n=U['decal']['n']; cx=(n[0]+n[2])/2; cy=(n[1]+n[3])/2
        X=MX(n[0],-1)+(L['gx']/2 if n[0]<mx<n[2] else (L['gx'] if n[0]>=mx else 0)); Y=L['MYQ'](n[1],-1)+(L['gy']/2 if n[1]<my<n[3] else (L['gy'] if n[1]>=my else 0))
        put(Ua,U['decal']['a'],X,Y,K*(n[2]-n[0]),K*(n[3]-n[1]))
    O=Image.open(out+'occ.png'); d=ImageDraw.Draw(C)
    for pr in sorted(kj['props'],key=lambda p:(0 if p.get('flat') else 1,p['f'][1])):
        tg=(-1 if pr['q'][0]=='l' else 1,-1 if pr['q'][1]=='t' else 1)
        X=MX(pr['f'][0],tg[0])+K*(pr['n'][0]-pr['f'][0]); Y=MY(pr['f'][1],tg[1])+K*(pr['n'][1]-pr['f'][1]); put(O,pr['a'],X,Y,pr['a'][2],pr['a'][3])  # wie im Spiel: am Fußpunkt
        if walk and not pr.get('flat'):
            fx,fy,r,ry=pr['f']; FX=MX(fx,tg[0]); FY=MY(fy,tg[1]); d.ellipse((tx(FX-K*r),ty(FY-K*ry),tx(FX+K*r),ty(FY+K*ry)),outline=(0,255,255,255),width=2)
    if walk:
        pts=[(tx(MX(p[0],p[2])),ty(MY(p[1],p[3]))) for p in kj['poly']]; d.line(pts+[pts[0]],fill=(255,0,255,255),width=2)
    C.convert('RGB').save(out+fn); return out+fn
if __name__=='__main__':
    for n in sys.argv[1:]:
        build(n); print(preview(n))
