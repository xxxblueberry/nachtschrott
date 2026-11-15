# t144: iPhone-quer-Video aus Rohaufnahme + echtem Spielton, fünf Arenen mitten in der Welle
import json,subprocess,os
os.chdir('/workspace/arena-roguelite/work/t144/video')
d=json.load(open('log.json')); nav=d['navOffset']
t0=d['pcmInfo']['t'][0]-4096/48000*1000; a0=(t0+nav)/1000
S={l:(t+nav)/1000 for t,l in d['seg']}
webm=[f for f in os.listdir('.') if f.endswith('.webm')][0]
font='/usr/share/fonts/truetype/sand-box/google/Barlow Condensed/BarlowCondensed-Bold.ttf'.replace(' ','\\ ')
NM={0:'A1 SONNENHOF',4:'B2 GIESSEREI',5:'B3 LOKSCHUPPEN',6:'C1 HAFENKAI',8:'C3 LEUCHTTURMKLIPPE'}
fc=[];n=0
for m,name in NM.items():
    st=S[f'm{m}']; du=S[f'e{m}']-st
    fc.append(f"[0:v]trim=start={st:.3f}:duration={du:.3f},setpts=PTS-STARTPTS,fps=30,scale=1688:780:flags=lanczos,drawtext=fontfile={font}:text='STUFE 16.0 · {name}':x=(w-tw)/2:y=h-86:fontsize=46:fontcolor=0xf2ead8:box=1:boxcolor=0x14110ecc:boxborderw=12:enable='lt(t,2.6)',format=yuv420p[v{n}]")
    fc.append(f"[1:a]atrim=start={st-a0:.3f}:duration={du:.3f},asetpts=PTS-STARTPTS,aformat=channel_layouts=stereo,afade=t=in:d=0.08[a{n}]"); n+=1
fc.append(''.join(f'[v{i}][a{i}]' for i in range(n))+f'concat=n={n}:v=1:a=1[vo][ao]')
out='/workspace/arena-roguelite/screenshots/t144/stufe16-0-arenen-iphone-quer.mp4'
cmd=['ffmpeg','-y','-v','error','-i',webm,'-f','f32le','-ar','48000','-ac','2','-i','game.f32','-filter_complex',';'.join(fc),'-map','[vo]','-map','[ao]',
 '-c:v','libx264','-profile:v','high','-level','4.1','-preset','slow','-crf','20','-pix_fmt','yuv420p','-tag:v','avc1','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart',out]
subprocess.run(cmd,check=True); print('ok',out)
