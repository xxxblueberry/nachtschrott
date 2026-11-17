// Boss mechanics, warning geometry and save-compatible tuning regression checks.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try {
 const page=await browser.newPage({viewport:{width:1920,height:1080}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.argv[2]||'http://localhost:5178');await page.waitForFunction(()=>window.nachtschrott);
 console.log(await page.evaluate(()=>{
  const n=nachtschrott,g=n.game,step=g.update.bind(g),assert=(v,m)=>{if(!v)throw Error(m)};g.update=()=>{};g.audio.sound=()=>{};
  const start=type=>{g.start(0,'nailer',0);g.wave=20;g.bossSpawned=true;g.god=true;g.weapons=[];const b=g.spawn(type,200,0,true);b.spawn=0;b.cd=0;return b};
  const results=[];
  for(const [type,pattern] of [[8,'scrapcross'],[9,'furnace'],[10,'moonhunt'],[11,'crossbeam']]){
   const b=start(type);g.updateEnemy(b,.01); // initial phase transition then first warning
   b.cd=0;g.updateEnemy(b,.01);
   assert(b.bossMode===1&&b.bossPattern===pattern,'distinct opening '+type);
   assert(b.windupMax>=1.4,'warning duration '+type);
   for(let i=0;i<80;i++)g.updateEnemy(b,1/60);
   assert(b.bossMode===1,'no early attack '+type);
   for(let i=0;i<10;i++)g.updateEnemy(b,1/60);
   assert(b.bossMode===4,'special active '+type);
   for(let i=0;i<190;i++)g.updateEnemy(b,1/60);
   assert(b.bossMode!==4,'finite attack '+type);
   b.hp=b.maxHp*.6;g.updateEnemy(b,.01);assert(b.state===2,'phase 2 '+type);
   b.hp=b.maxHp*.3;g.updateEnemy(b,.01);assert(b.state===3,'phase 3 '+type);
  }
  results.push('All four distinct openings, warnings, active phases and phase transitions');
  let b=start(8);b.windupMax=1.4;b.bossPattern='scrapcross';g.prepareBossSignature(b,1);
  const marks=g.zones.filter(z=>z.sourceBoss===b);assert(marks.length===13,'cross mark count');assert(marks.every(z=>z.delay>=1.4&&z.r===54),'exact warning areas');
  g.player.x=150;g.player.y=150;assert(marks.every(z=>Math.hypot(g.player.x-z.x,g.player.y-z.y)>z.r+11),'escape quadrant');
  b.hp=b.maxHp*.6;g.updateEnemy(b,.01);assert(!g.zones.some(z=>z.sourceBoss===b&&z.delay>0),'cancel old phase warnings');results.push('Cross shape, reachable safe quadrant, phase cleanup');
  b=start(9);b.bossPattern='furnace';b.signaturePhase=3;b.signatureAge=0;b.signatureStep=0;b.timer=2.8;b.aim=.7;
  g.updateBossSignature(b,.01);let first=g.projectiles.count;assert(first>15&&first<34,'ring with gap');
  g.projectiles.each(p=>{let a=Math.atan2(p.vy,p.vx)-b.aim;a=Math.atan2(Math.sin(a),Math.cos(a));assert(Math.abs(a)>=.42,'escape gap unobstructed')});
  g.updateBossSignature(b,2);assert(b.signatureStep===5&&g.projectiles.count>first,'staggered rings');results.push('Staggered fire rings with a real escape gap');
  b=start(10);b.bossPattern='moonhunt';b.signaturePhase=1;b.signatureAge=0;b.signatureStep=0;b.timer=2.8;
  g.player.x=0;g.updateBossSignature(b,.01);const oldX=g.zones[0].x;g.player.x=250;g.updateBossSignature(b,.6);
  assert(g.zones[0].x===oldX&&g.zones[1].x===250,'marks lock and new marks track');assert(g.zones.every(z=>z.delay===.9),'each curse warns');results.push('Moon marks lock independently and warn before damage');
  b=start(11);b.bossPattern='crossbeam';b.signaturePhase=1;b.signatureAge=0;b.signatureStep=0;b.timer=2.8;b.aim=0;b.beamTick=0;
  g.god=false;g.player.x=b.x+200;g.player.y=b.y;g.player.invuln=0;let hp=g.player.hp;g.updateBossSignature(b,.001);assert(g.player.hp<hp,'laser damages on its ray');
  g.player.x=b.x+160;g.player.y=b.y+160;g.player.invuln=0;hp=g.player.hp;g.updateBossSignature(b,.07);assert(g.player.hp===hp,'laser quadrant safe');assert(g.beams.length<=8,'bounded beam effects');results.push('Crossbeam collision matches rays and leaves safe quadrants');
  b=start(8);g.stats.crit=0;g.procBudget=100;b.bossMode=4;let hp0=b.hp;g.hit(b,100,0,0,false);const active=hp0-b.hp;
  b.bossMode=3;hp0=b.hp;g.hit(b,100,0,0,false);const exposed=hp0-b.hp;
  assert(Math.abs(active-75)<.001&&Math.abs(exposed-115)<.001,'armour and punish window');results.push('75% active damage and 115% exhaustion damage');
  b=start(11);g.updateEnemy(b,.01);b.cd=0;g.updateEnemy(b,.01);n.ui.updateHUD(true);g.setPhase('pause');let timer=b.timer;step(.04);assert(b.timer===timer,'pause freezes special');g.setPhase('combat');
  return results;
 }));
 await page.waitForTimeout(900);if(process.env.SCREENSHOT_PATH)await page.screenshot({path:process.env.SCREENSHOT_PATH});assert.deepEqual(errors,[]);console.log('No browser errors');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
