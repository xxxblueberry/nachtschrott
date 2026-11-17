// Opt-in vehicle rules. Classic URLs and their original save keys remain unchanged.
const NS_VEHICLE = new URLSearchParams(location.search).get('mode') === 'vehicle';
const NS_SAVE = NS_VEHICLE ? 'nachtschrott-vehicle-v1' : 'nachtschrott-v1';
const NS_DEV = NS_VEHICLE ? 'nachtschrott-vehicle-dev-v1' : 'nachtschrott-dev-v1';
const vehicleArt = new Image();
if (NS_VEHICLE) vehicleArt.src = './assets/vehicle-bodo.png';
const vehicleWeaponIds = ["pistol", "nailer", "thunder", "riveter", "crank", "saw", "fork", "poison"];
const vehicleMounts = [[13,-29],[-25,-13],[25,12],[-25,20],[0,-38],[0,33]];
function vehicleSlot(game, weapon) {
  const index = Math.max(0, game.weapons.indexOf(weapon));
  const [x,y] = vehicleMounts[index % vehicleMounts.length], a = (game.player.driveAngle ?? -Math.PI/2) + Math.PI/2;
  return {x:game.player.x+x*Math.cos(a)-y*Math.sin(a),y:game.player.y+x*Math.sin(a)+y*Math.cos(a),a};
}
function vehicleHome(ui) {
  const cp=ui.g.save.data.checkpoint;
  return `<section class="screen vehicle-home"><div class="vehicle-copy"><div class="eyebrow">NACHTSCHROTT / MOTOR NACHT</div><h1>ROST.<br>RÜCKSTOSS.<br>VOLLGAS.</h1><p>Bodo am Steuer. Eine angeschraubte Pistole.<br>Was aus dieser Karre wird, entscheidest du.</p><div class="row wrap">${cp?ui.button('continueRun','Fortsetzen · Welle '+cp.wave,'primary'):''}${ui.button('vehicleStart',cp?'Neue Fahrt':'Motor starten','primary')}</div><div class="row wrap vehicle-options">${ui.button('settings','Einstellungen','secondary')}${ui.button('talents','Werkbank','secondary')}${ui.button('collection','Waffen & Regeln','secondary')}${ui.button('stats','Fahrtenbuch','secondary')}</div><p class="vehicle-controls"><b>WASD / PFEILE</b> Fahren · <b>LEER</b> Boost<br><b>E</b> Überlastung · <b>Q</b> Auto / manuell zielen<br>Auch mit Controller oder Touch spielbar.</p><a class="vehicle-classic" href="?mode=classic">← Klassische Version spielen</a><small>Beide Versionen haben getrennte Spielstände.<br>Fortsetzen beginnt am gespeicherten Wellenanfang.</small></div><div class="vehicle-showcase"><div class="vehicle-stamp">01 / DIE ERSTE KARRE</div><div class="vehicle-home-body"><img src="./assets/vehicle-bodo.png" alt="Bodo sitzt am Steuer einer rostigen Schrottkarre"><span class="vehicle-home-gun">${x("pistol")}</span></div><div class="vehicle-spec"><b>BAUSTELLENKARRE</b><span>1 PISTOLE · 6 MONTAGEPLÄTZE</span></div></div></section>`;
}
function vehicleMotion(game, dt) {
  const p=game.player, reduced=game.save.data.settings.reducedMotion;
  const blend=1-Math.exp(-dt*13);
  p.driveVX=(p.driveVX??0)+(p.vx-(p.driveVX??0))*blend;
  p.driveVY=(p.driveVY??0)+(p.vy-(p.driveVY??0))*blend;
  if(game.dashTime<=0){p.vx=p.driveVX;p.vy=p.driveVY;}
  const speed=Math.hypot(p.vx,p.vy);
  p.driveAngle??=-Math.PI/2;
  if(speed>12){const target=Math.atan2(p.vy,p.vx),diff=Math.atan2(Math.sin(target-p.driveAngle),Math.cos(target-p.driveAngle));p.driveAngle+=diff*(1-Math.exp(-dt*15));}
  p.driveSpeed=speed;p.wheelPhase=(p.wheelPhase||0)+speed*dt*.12;
  p.exhaustClock=(p.exhaustClock||0)-dt;
  if(!reduced&&p.exhaustClock<=0&&speed>30){
    p.exhaustClock=.09;
    const x=p.x-Math.cos(p.driveAngle)*35,y=p.y-Math.sin(p.driveAngle)*35;
    game.fx.smoke(x,y,1,5,game.dashTime>0?'#d9b078':'#6c6254','#39352e',.35,12,0,-8);
  }
  p.trackClock=(p.trackClock||0)-dt;
  if(!reduced&&speed>50&&p.trackClock<=0){
    p.trackClock=.065;
    const tracks=game.vehicleTracks||(game.vehicleTracks=[]);
    tracks.push({x:p.x,y:p.y,a:p.driveAngle,t:game.time});
    if(tracks.length>100)tracks.shift();
  }
}
function vehicleTracks(renderer){
  const g=renderer.game,c=renderer.c;
  c.save();c.strokeStyle='#322a22';c.lineWidth=5;
  for(const t of g.vehicleTracks||[]){const age=g.time-t.t;if(age>3)continue;c.globalAlpha=.2*(1-age/3);const dx=Math.cos(t.a+Math.PI/2)*23,dy=Math.sin(t.a+Math.PI/2)*23;
    for(const side of [-1,1]){c.beginPath();c.moveTo(t.x+dx*side,t.y+dy*side);c.lineTo(t.x+dx*side-Math.cos(t.a)*8,t.y+dy*side-Math.sin(t.a)*8);c.stroke();}}
  c.restore();
}
function drawVehicle(renderer){
  const g=renderer.game,p=g.player,c=renderer.c,reduced=g.save.data.settings.reducedMotion;
  const a=(p.driveAngle??-Math.PI/2)+Math.PI/2,speed=p.driveSpeed||0;
  c.save();c.translate(p.x,p.y);c.rotate(a);
  c.fillStyle='#0005';c.beginPath();c.ellipse(0,5,35,45,0,0,Math.PI*2);c.fill();
  if(g.dashTime>0||g.overdrive>0){
    c.fillStyle=g.dashTime>0?'#ffb14b':'#e87937';
    for(const x of [-7,7]){c.beginPath();c.moveTo(x-4,37);c.lineTo(x,52+(reduced?0:Math.sin(g.time*48)*7));c.lineTo(x+4,37);c.fill();}}
  if(p.invuln>0&&Math.sin(g.time*35)>0)c.globalAlpha=.65;
  const bob=reduced?0:Math.sin(p.wheelPhase||0)*Math.min(1.1,speed/250);
  c.translate(0,bob);
  if(vehicleArt.complete&&vehicleArt.naturalWidth)c.drawImage(vehicleArt,-40,-45,80,90);
  else{c.fillStyle='#a66b2d';c.fillRect(-24,-34,48,68);c.fillStyle='#ffc637';c.beginPath();c.arc(0,0,10,0,Math.PI*2);c.fill();}
  // Small animated tread marks keep the baked material texture stable.
  c.strokeStyle='#c5b39655';c.lineWidth=1.3;
  for(const x of [-28,28])for(const y of [-21,22]){const k=((p.wheelPhase||0)%3)-1.5;c.beginPath();c.moveTo(x-5,y+k);c.lineTo(x+5,y+k);c.stroke();}
  if(g.stats.armor>=3){c.fillStyle='#596168';c.strokeStyle='#17191b';c.lineWidth=2;for(const x of [-21,21]){c.fillRect(x-4,-6,8,23);c.strokeRect(x-4,-6,8,23);c.fillStyle='#b7a791';c.fillRect(x-1,-3,2,2);c.fillStyle='#596168';}}
  if(p.flash>0){c.strokeStyle='#ffd6a4';c.lineWidth=2;c.strokeRect(-25,-32,50,65);}
  c.restore();
  // Physical mounting brackets share exact coordinates with projectile origins.
  for(const w of g.weapons){if(['turret','summon'].includes(w.id))continue;const m=vehicleSlot(g,w);c.save();c.fillStyle='#33383b';c.strokeStyle='#aa9680';c.lineWidth=1.5;c.beginPath();c.arc(m.x,m.y,7,0,Math.PI*2);c.fill();c.stroke();c.restore();}
}
let vehicleEngine;
function vehicleAudio(game){
  const audio=game.audio,ctx=audio.ctx;if(!ctx||!audio.sfxBus)return;
  if(!vehicleEngine){
    const gain=ctx.createGain(),filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=350;filter.Q.value=.7;gain.gain.value=0;filter.connect(gain);gain.connect(audio.sfxBus);
    const low=ctx.createOscillator(),high=ctx.createOscillator();low.type='sawtooth';high.type='triangle';low.connect(filter);high.connect(filter);low.start();high.start();vehicleEngine={gain,filter,low,high};
    document.addEventListener('visibilitychange',()=>{if(document.hidden)gain.gain.setTargetAtTime(0,ctx.currentTime,.02)});
  }
  const e=vehicleEngine,t=ctx.currentTime,moving=Math.min(1,(game.player.driveSpeed||0)/350),boost=game.dashTime>0||game.overdrive>0;
  const active=game.phase==='combat'&&game.player.hp>0&&!document.hidden;
  e.gain.gain.setTargetAtTime(active?.012+moving*.014:0,t,.08);
  e.low.frequency.setTargetAtTime(38+moving*34+(boost?32:0),t,.08);
  e.high.frequency.setTargetAtTime(77+moving*69+(boost?57:0),t,.08);
  e.filter.frequency.setTargetAtTime(190+moving*260+(boost?160:0),t,.1);
}
// Restrained night wash and headlights are drawn below telegraphs/enemies.
function vehicleGround(renderer){
 const c=renderer.c,g=renderer.game,p=g.player;
 c.save();c.fillStyle='#14202b66';c.fillRect(renderer.camX-renderer.viewWidth/2-30,renderer.camY-renderer.viewHeight/2-30,renderer.viewWidth+60,renderer.viewHeight+60);
 c.translate(p.x,p.y);c.rotate((p.driveAngle??-Math.PI/2)+Math.PI/2);
 const beam=c.createLinearGradient(0,-25,0,-260);beam.addColorStop(0,'#ffe0a52b');beam.addColorStop(1,'#ffe0a500');c.fillStyle=beam;
 for(const x of [-16,16]){c.beginPath();c.moveTo(x-5,-28);c.lineTo(x-60,-260);c.lineTo(x+60,-260);c.lineTo(x+5,-28);c.closePath();c.fill();}c.restore();
}
