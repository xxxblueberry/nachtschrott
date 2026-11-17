// Run against a local build: node tools/tests/nightshift.cjs [base URL]
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium', args:['--no-sandbox']});
 try {
 const page = await browser.newPage({viewport:{width:1920,height:1080}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.argv[2] || 'http://localhost:5178');
 await page.waitForFunction(()=>window.nachtschrott);
 const result = await page.evaluate(() => {
   const n=window.nachtschrott, g=n.game, ui=n.ui, check=(v,m)=>{if(!v)throw Error(m)}, results=[];
   const update=g.update.bind(g);g.update=()=>{};
   const start=(wave=1)=>{g.climb=0;g.map=0;g.start(0,'nailer',0);g.wave=wave;g.waveLength=g.waveLen(wave);g.god=true;g.pendingLevels=0;g.eventWave=0;g.updateNightEvents(0);};
   start();
   for(const wave of [1,4,10,19]) {
     g.wave=wave;g.enemies.clear();g.storm=null;
     for(let i=0;i<500;i++) g.spawn(0);
     check(g.enemies.count===g.enemyLimit,'spawn cap '+wave);
     g.spawnFormation();check(g.enemies.count<=g.enemyLimit,'formation cap '+wave);
   }
   results.push('Enemy and formation caps');
   start(4);g.waveTime=10;g.updateNightEvents(0);
   check(!!g.storm,'storm starts');const z=g.storm;
   g.player.x=z.x+z.start+20;g.player.invuln=0;g.god=false;const hp=g.player.hp;
   g.updateNightEvents(2);check(g.player.hp===hp,'warning must not damage');
   const enemy=g.spawn(0,z.x+z.start+30,z.y,true);const eh=enemy.hp;
   g.updateNightEvents(2);check(g.player.hp<hp,'outside must damage');check(enemy.hp===eh,'enemies immune');
   g.player.x=z.x;g.player.y=z.y;g.player.invuln=0;const safeHp=g.player.hp;
   g.updateNightEvents(1);check(g.player.hp===safeHp,'inside safe');
   g.updateNightEvents(8);check(Math.abs(z.r-z.end)<.01,'shrinks to final radius');
   g.updateNightEvents(6);check(!g.storm,'storm clears');g.updateNightEvents(1);check(!g.storm,'only once per wave');
   results.push('Warning, shrinking, player damage, immunity, expiry');
   start(4);g.waveTime=10;g.updateNightEvents(0);const age=g.storm.age;g.setPhase('pause');update(.04);check(g.storm.age===age,'pause freezes storm');
   g.setPhase('combat');g.endWave();check(!g.storm,'wave clear removes storm');g.clearHold=0;g.clearHoldDone=null;
   results.push('Pause and wave cleanup');
   start(1);g.map=4;g.envTime=0;g.updateEnvironment(1);check(g.zones.length===0,'no early foundry hazard');
   g.wave=3;g.updateEnvironment(1);check(g.zones.length===2,'two early vents');
   const heatLife=g.zones[0].life;g.zones=[];g.map=7;g.envTime=0;g.updateEnvironment(1);
   check(g.zones.length===1 && g.zones[0].r===140,'single visible quarry blast');
   check(g.zones[0].life<heatLife && g.zones[0].delay>=1.8,'quarry warning and short explosion');
   results.push('Arena introduction and distinct hazards');
   start(5);g.waveTime=8;g.updateNightEvents(0);const count=g.enemies.count;
   g.updateNightEvents(1);check(g.enemies.count===count,'elite only once');check(g.enemies.objects.some(e=>e.active&&e.type===7),'elite exists');
   results.push('Scheduled elite');
   start(20);g.waveTime=4;g.spawnTimer=0;g.formationTimer=0;update(.04);
   const bosses=g.enemies.objects.filter(e=>e.active&&e.type>=8);check(bosses.length===1,'one boss');
   check(g.enemies.count===1,'no normal spawn in boss wave');check(!g.storm,'no boss storm');
   const zoneCount=g.zones.length;g.envTime=0;g.updateEnvironment(10);check(g.zones.length===zoneCount,'no arena hazards during boss');
   g.kill(bosses[0]);g.pendingLevels=0;update(.04);check(g.phase==='victory','boss death ends run without waiting for timer');
   results.push('Boss isolation and immediate victory');
   start(4);g.waveTime=15;g.updateNightEvents(0);g.god=false;g.saveCheckpoint();
   check(!!g.save.data.checkpoint,'checkpoint exists');g.restoreCheckpoint();check(g.wave===4&&g.waveTime===0,'checkpoint wave restores');check(!g.storm,'restore clears stale storm');
   results.push('Checkpoint restore');
   g.startCoop([0,1],['nailer','fork']);g.wave=4;g.waveTime=10;g.updateNightEvents(0);check(!!g.storm,'coop storm');
   check(g.storm.end>=360,'coop larger refuge');g.god=false;
   const center=g.storm;g.forActors(()=>{g.player.x=center.x+center.start+50;g.player.y=center.y;g.player.invuln=0;},true);
   const before=g.coop.snapshot().map(a=>a.player.hp);g.updateNightEvents(4);const after=g.coop.snapshot().map(a=>a.player.hp);
   check(after.every((hp,i)=>hp<before[i]),'both coop players take outside damage');
   results.push('Coop shared zone and both players damaged');
   start(16);g.waveTime=15;g.updateNightEvents(0);g.updateNightEvents(9);g.god=true;ui.updateHUD(true);
   return results;
 });
 console.log(result.join('\n'));
 await page.waitForTimeout(2200);
 if (process.env.SCREENSHOT_PATH) await page.screenshot({path:process.env.SCREENSHOT_PATH});
 assert.deepEqual(errors,[]);console.log('No browser errors');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
