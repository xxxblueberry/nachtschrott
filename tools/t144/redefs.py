# ersetzt ARKDEF in src/main.js durch work/t144/ark_defs.js (+Sonnenstrahlen)
import json,re
P='/workspace/arena-public/src/main.js'; s=open(P,encoding='utf8').read(); W='/workspace/arena-roguelite/work/t144/'
defs=open(W+'ark_defs.js',encoding='utf8').read().strip(); D=json.loads(defs[len('const ARKDEF='):-1])
SUN={'b1-montagehalle':[[250,40,95],[444,40,95],[825,40,95],[1025,40,95]],'b2-giesserei':[[347,12,95],[581,12,95],[831,12,95]],'b3-lokschuppen':[[290,25,100],[970,25,100]]}
for d in D:
    if d['id'] in SUN: d['sun']=SUN[d['id']]
new='const ARKDEF='+json.dumps(D,separators=(',',':'),ensure_ascii=False)+';'
i=s.index('const ARKDEF='); j=s.index('\n',i); assert s[j-1]==';'
s=s[:i]+new+s[j:]; open(P,'w',encoding='utf8').write(s); print('ok')
