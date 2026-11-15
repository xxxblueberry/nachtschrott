// t144u: Stufe 16.0 – neun Konzept-Arenen: Platte gebaut (3770×2640), Kamera nie über den Plattenrand,
// Held und Gegner bleiben genau im sichtbaren Laufpolygon (alle 8 Richtungen), Kollision an hoher Deckung,
// Ausschnitt hinter Deckung, Name im HUD, Arenagröße-Regler baut neu, Aufstieg/Abstieg unverändert, keine Konsolenfehler.
import { chromium } from 'playwright';
import { VIEWS, BASE } from './t116-lib.mjs';
const NAMES = ['SONNENHOF', 'GLEISHOF', 'GARTENHOF', 'MONTAGEHALLE', 'GIESSEREI', 'LOKSCHUPPEN', 'HAFENKAI', 'KALKSTEINBRUCH', 'LEUCHTTURMKLIPPE'];
const views = (process.env.VIEWS || '1280,iphone-quer').split(',');
const b = await chromium.launch(); const fails = []; const res = [];
const ok = (c, m) => { if (!c) fails.push(m); };
for (const vn of views) {
  const [w, h, touch] = VIEWS[vn];
  const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: touch, isMobile: touch });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto(BASE); await p.waitForFunction(() => window.nachtschrott?.game); await p.waitForTimeout(500);
  const start = (map, climb = 0) => p.evaluate(({ map, climb }) => { const n = window.nachtschrott, g = n.game; g.save.data.tutorialSeen = true; g.climb = climb; g.map = map; g.start(0, 'pistol'); if (!climb) g.map = map;
    g.god = true; g.testRun = true; g.enemies.clear(); g.spawnTimer = g.formationTimer = g.envTime = 1e6; n.ui.screen = 'combat'; n.ui.render(); }, { map, climb });
  for (let m = 0; m < 9; m++) {
    await start(m);
    await p.waitForFunction((map) => window.nachtschrott.ark.ARK.built.has(map) && window.nachtschrott.renderer.paintedPlate?.id === 'k' + map, m, { timeout: 15000 });
    await p.waitForTimeout(400);
    const r = await p.evaluate(() => { const n = window.nachtschrott, R = n.renderer, P = R.paintedPlate;
      return { plate: [P.x, P.y, P.w, P.h], cam: [R.camX, R.camY, R.viewWidth, R.viewHeight], name: document.querySelector('.nh-night')?.textContent?.trim() }; });
    ok(r.plate[2] === 3770 && r.plate[3] === 2640, `${vn} map${m}: Größe ${r.plate}`);
    ok(r.name === NAMES[m], `${vn} map${m}: HUD-Name ${r.name}`);
    // 8 Richtungen: Held weit hinaus setzen -> wird auf den Rand geklemmt; danach Taste halten -> bleibt drin
    for (const [dx, dy, key] of [[1, 0, 'KeyD'], [-1, 0, 'KeyA'], [0, 1, 'KeyS'], [0, -1, 'KeyW'], [1, 1, 'KeyD'], [-1, -1, 'KeyA'], [1, -1, 'KeyW'], [-1, 1, 'KeyS']]) {
      await p.evaluate(([dx, dy]) => { const g = window.nachtschrott.game; g.player.x = dx * 4000; g.player.y = dy * 3000; }, [dx, dy]);
      await p.keyboard.down(key); await p.waitForTimeout(250); await p.keyboard.up(key);
      const q = await p.evaluate(() => { const n = window.nachtschrott, g = n.game, P = n.renderer.paintedPlate.poly;
        // Abstand zum nächsten Polygonrand
        let dmin = 1e9; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], vx = b[0] - a[0], vy = b[1] - a[1], L = vx * vx + vy * vy || 1;
          const t = Math.max(0, Math.min(1, ((g.player.x - a[0]) * vx + (g.player.y - a[1]) * vy) / L)); dmin = Math.min(dmin, Math.hypot(g.player.x - a[0] - t * vx, g.player.y - a[1] - t * vy)); }
        const near = n.renderer.paintedPlate.colliders.some((c) => Math.hypot(c.x - g.player.x, c.y - g.player.y) < (c.rx || c.r || 0) + (c.ry || 0) + 60);
        return { x: g.player.x, y: g.player.y, inside: n.ark.inside(g.player.x, g.player.y, 8), d: near ? 0 : dmin }; });
      ok(q.inside, `${vn} map${m} dir ${dx},${dy}: Held außerhalb (${q.x.toFixed(0)},${q.y.toFixed(0)})`);
      ok(q.d < 60, `${vn} map${m} dir ${dx},${dy}: Held stoppt zu früh (${q.d.toFixed(0)} vom Rand)`);
    }
    const cam = await p.evaluate(() => { const R = window.nachtschrott.renderer, P = R.paintedPlate; return [R.camX - R.viewWidth / 2 - P.x, P.x + P.w - R.camX - R.viewWidth / 2, R.camY - R.viewHeight / 2 - P.y, P.y + P.h - R.camY - R.viewHeight / 2]; });
    ok(cam.every((v) => v >= -2), `${vn} map${m}: Kamera über Plattenrand ${cam.map((v) => v.toFixed(0))}`);
    // Gegner bleiben drin
    const en = await p.evaluate(() => { const g = window.nachtschrott.game; g.player.x = 0; g.player.y = 0; for (let i = 0; i < 12; i++) g.spawn(i % 4, 0, 0, true); let k = 0; g.enemies.each((e) => { const a = (k++ / 12) * Math.PI * 2; e.x = Math.cos(a) * 5000; e.y = Math.sin(a) * 4000; }); return k; });
    await p.waitForTimeout(400);
    const eo = await p.evaluate(() => { const n = window.nachtschrott, g = n.game; let out = 0; g.enemies.each((e) => { n.ark.inside(e.x, e.y, 2) || out++; }); g.enemies.clear(); return out; });
    ok(en > 0 && eo === 0, `${vn} map${m}: ${eo} Gegner außerhalb`);
    // hohe Deckung: Kollision + Ausschnitt
    const t = await p.evaluate(() => { const g = window.nachtschrott.game, P = window.nachtschrott.renderer.paintedPlate;
      const cs = P.colliders.filter((q) => q.spr && q.h > 90 && window.nachtschrott.ark.inside(q.x, q.y + q.ry + 60, 30)); if (!cs.length) return null; const q = cs[0];
      g.player.x = q.x; g.player.y = q.y + q.ry + 40; return q; });
    if (t) {
      await p.keyboard.down('KeyW'); await p.waitForTimeout(900); await p.keyboard.up('KeyW');
      const y = await p.evaluate(() => window.nachtschrott.game.player.y);
      ok(y > t.y - 2, `${vn} map${m}: läuft durch Deckung (y ${y.toFixed(0)} vs ${t.y})`);
      // Stellen hinter hoher Deckung, die der Held wirklich erreicht (innerhalb Laufpolygon)
      const spots = await p.evaluate(() => { const n = window.nachtschrott, A = n.ark, out = [];
        for (const q of n.renderer.paintedPlate.colliders.filter((q) => q.spr && q.h > 90)) {
          const [, , w, h, x0, y0] = q.spr;
          for (let yy = q.y - (q.ry || 10) - 22; yy > y0 + 40; yy -= 40) { let best = null; for (let xx = x0 + 20; xx < x0 + w - 20; xx += 20)
            if (A.inside(xx, yy, 20) && (!best || Math.abs(xx - q.x) < Math.abs(best[0] - q.x))) best = [xx, yy]; if (best) { out.push(best); break; } }
          if (out.length > 12) break; }
        return out; });
      let cut = 0;
      for (const [x, y] of spots) { if (cut) break;
        await p.evaluate(([x, y]) => { const g = window.nachtschrott.game; g.player.x = x; g.player.y = y; }, [x, y]); await p.waitForTimeout(250);
        cut = await p.evaluate(() => window.nachtschrott.renderer.arenaCut); }
      if (!spots.length) cut = -1;
      ok(cut !== 0, `${vn} map${m}: kein Ausschnitt hinter Deckung`); res.push([vn, m, 'cut', cut]);
    } else res.push([vn, m, 'keine hohe Deckung erreichbar']);
  }
  // Regler: Arenagröße 120 % (Dev-Menü, F1) -> Platte neu gebaut, Polygon größer; zurück auf 100 %
  if (vn === views[0]) {
    await start(0); await p.waitForFunction(() => window.nachtschrott.ark.ARK.built.has(0)); await p.waitForTimeout(300);
    await p.keyboard.press('F1'); await p.waitForTimeout(300);
    ok(await p.locator('#dev-arena-groesse').count() === 1, `${vn}: Regler Arenagröße fehlt`);
    await p.evaluate(() => { const d = document.querySelector('[data-dev-group=arena]'); d && (d.open = true); });
    await p.locator('#dev-arena-groesse').scrollIntoViewIfNeeded();
    await p.locator('#dev-arena-groesse').fill('1.2');
    await p.waitForFunction(() => window.nachtschrott.renderer.paintedPlate?.w === 4524, null, { timeout: 15000 }).catch(() => {});
    const r12 = await p.evaluate(() => { const n = window.nachtschrott, P = n.renderer.paintedPlate; return { w: P.w, h: P.h, in: n.ark.inner, hero: n.ark.inside(n.game.player.x, n.game.player.y, 4) }; });
    ok(r12.w === 4524 && r12.h === 3168 && r12.in[0] > 1800 && r12.hero, `${vn}: Regler 1.2 -> ${JSON.stringify(r12)}`);
    await p.locator('#dev-arena-groesse').fill('1');
    await p.waitForFunction(() => window.nachtschrott.renderer.paintedPlate?.w === 3770, null, { timeout: 15000 }).catch(() => {});
    ok(await p.evaluate(() => window.nachtschrott.renderer.paintedPlate.w) === 3770, `${vn}: Regler zurück auf 1`);
    await p.keyboard.press('F1'); await p.waitForTimeout(200);
    res.push([vn, 'regler', r12]);
  }
  for (const cl of [1, 2]) {
    await start(0, cl); await p.waitForTimeout(600);
    const r = await p.evaluate(() => { const n = window.nachtschrott, g = n.game; g.player.x = 900; return { pp: !!n.renderer.paintedPlate, half: g.climbState.def.half ?? 1000 }; });
    await p.keyboard.down('KeyD'); await p.waitForTimeout(400); await p.keyboard.up('KeyD');
    const px = await p.evaluate(() => window.nachtschrott.game.player.x);
    ok(!r.pp, `${vn} Schacht${cl}: Arena-Platte aktiv`);
    ok(Math.abs(px) <= r.half, `${vn} Schacht${cl}: Held außerhalb (${px})`);
  }
  ok(errs.length === 0, `${vn}: Konsolenfehler ${errs.slice(0, 3).join(' | ')}`);
  res.push([vn, 'errs', errs.length]); await ctx.close();
}
await b.close();
console.log(JSON.stringify(res)); console.log(fails.length ? 'FEHLER:\n' + fails.join('\n') : 'ALLES OK'); process.exit(fails.length ? 1 : 0);
