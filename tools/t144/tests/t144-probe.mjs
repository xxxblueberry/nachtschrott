// t144: Probe – jede Arena starten, Platte gebaut, Screenshot (Desktop)
import { chromium } from 'playwright';
const BASE = process.env.BASE || 'http://127.0.0.1:5197/';
const W = +(process.env.W || 1600), H = +(process.env.H || 900), touch = !!process.env.TOUCH;
const out = process.env.OUT || '/tmp/t144p/';
const maps = (process.env.MAPS || '0,1,2,3,4,5,6,7,8').split(',').map(Number);
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: W, height: H }, hasTouch: touch, isMobile: touch });
const p = await ctx.newPage(); const errs = [];
p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
await p.goto(BASE); await p.waitForFunction(() => window.nachtschrott?.game); await p.waitForTimeout(500);
for (const m of maps) {
  await p.evaluate((map) => { const n = window.nachtschrott, g = n.game; g.save.data.tutorialSeen = true; g.climb = 0; g.map = map; g.start(0, 'pistol'); g.map = map;
    g.god = true; g.testRun = true; g.enemies.clear(); g.spawnTimer = g.formationTimer = g.envTime = 1e6; n.ui.screen = 'combat'; n.ui.render(); }, m);
  await p.waitForFunction((map) => window.nachtschrott.ark.ARK.built.has(map) && window.nachtschrott.renderer.paintedPlate, m, { timeout: 15000 });
  const pos = (process.env.POS || '0,0').split(',').map(Number);
  await p.evaluate(([x, y]) => { const g = window.nachtschrott.game; g.player.x = x; g.player.y = y; }, pos);
  await p.waitForTimeout(900);
  const r = await p.evaluate(() => { const n = window.nachtschrott, P = n.renderer.paintedPlate; return { id: P.id, w: P.w, h: P.h, cols: P.colliders.length, inner: n.ark.inner, poly: P.poly.length, name: document.querySelector('.nh-night')?.textContent }; });
  console.log(m, JSON.stringify(r));
  await p.screenshot({ path: out + `game-${m}.png` });
}
console.log('errs', errs.slice(0, 5)); await b.close();
