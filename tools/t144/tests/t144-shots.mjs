// t144: Screenshots – Gesamtansicht (Platte), Spielszene Desktop + iPhone quer je Karte
import { chromium } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE || 'http://127.0.0.1:5197/';
const OUT = process.env.OUT || '/tmp/t144s/'; fs.mkdirSync(OUT, { recursive: true });
const maps = (process.env.MAPS || '0,1,2,3,4,5,6,7,8').split(',').map(Number);
const VIEWS = { desktop: [1600, 900, 1, false], 'iphone-quer': [844, 390, 3, true] };
const POS = { 0: [-1100, -620], 1: [1100, -600], 2: [-1100, 650], 3: [-1050, -500], 4: [-1050, 600], 5: [1000, -550], 6: [1000, -600], 7: [-1050, -600], 8: [950, -560] };
const b = await chromium.launch();
for (const vn of (process.env.VIEWS || 'desktop,iphone-quer').split(',')) {
  const [w, h, dsf, mob] = VIEWS[vn];
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: dsf, isMobile: mob, hasTouch: mob });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(BASE); await p.waitForFunction(() => window.nachtschrott?.game); await p.waitForTimeout(500);
  for (const m of maps) {
    await p.evaluate((map) => { const n = window.nachtschrott, g = n.game; g.save.data.tutorialSeen = true; g.climb = 0; g.map = map; g.wave = 4; g.start(0, 'pistol'); g.map = map;
      g.god = true; g.testRun = true; n.ui.screen = 'combat'; n.ui.render(); }, m);
    await p.waitForFunction((map) => window.nachtschrott.ark.ARK.built.has(map) && window.nachtschrott.renderer.paintedPlate?.id === 'k' + map, m, { timeout: 15000 });
    if (vn === 'desktop') {
      const url = await p.evaluate(() => { const P = window.nachtschrott.renderer.paintedPlate, c = document.createElement('canvas'); c.width = 1280; c.height = Math.round(1280 * P.h / P.w);
        const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(P.canvas, 0, 0, c.width, c.height); return c.toDataURL('image/png'); });
      fs.writeFileSync(`${OUT}plate-${m}.png`, Buffer.from(url.split(',')[1], 'base64'));
    }
    await p.evaluate((pos) => { const g = window.nachtschrott.game; g.player.x = pos[0]; g.player.y = pos[1]; }, POS[m]);
    await p.waitForTimeout(1500);
    // mitten im Kampf: Waffen + ein Ring Gegner um den Helden
    await p.evaluate(() => { const g = window.nachtschrott.game, P = g.player; 
      [['nailer', 2], ['crank', 2]].forEach(([id, t]) => g.weapons.push(g.weapon(id, t))); g.recalc();
      for (let i = 0; i < 18; i++) { const e = g.spawn(i === 5 || i === 13 ? 7 : i % 4), a = i * 0.35 + 0.2, r = 330 + (i % 3) * 110; e.x = P.x + r * Math.cos(a); e.y = P.y + r * 0.7 * Math.sin(a); } });
    await p.waitForTimeout(1600);
    await p.screenshot({ path: `${OUT}game-${m}-${vn}.png` });
  }
  console.log(vn, 'errs', errs.slice(0, 3)); await ctx.close();
}
await b.close();
