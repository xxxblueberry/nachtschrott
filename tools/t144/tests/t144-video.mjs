// t144: iPhone-quer-Video Stufe 16.0 – Kampf mitten in der Welle durch fünf neue Arenen (A1, B2, B3, C1, C3). Echter Spielton per Abgriff hinter dem Limiter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const BASE = process.env.BASE || 'http://127.0.0.1:5197/', OUT = '/workspace/arena-roguelite/work/t144/video'; fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
const ctx = await b.newContext({ viewport: { width: 844, height: 390 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, recordVideo: { dir: OUT, size: { width: 844, height: 390 } } });
const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
const T0 = Date.now();
await p.goto(BASE); await p.waitForFunction(() => window.nachtschrott);
await p.evaluate(() => { localStorage.removeItem('nachtschrott-dev-v1'); const n = window.nachtschrott, s = n.game.save.data; s.tutorialSeen = true; s.checkpoint = null; n.ui.render();
  window.__snd = []; window.__leg = []; const a = n.game.audio, o = a.sound.bind(a), L = a.legacySound.bind(a);
  a.legacySound = (...x) => { window.__leg.push([performance.now(), ...x.map(String)]); return L(...x); };
  if (a.ctx) { const cg = a.ctx.createGain.bind(a.ctx); a.ctx.createGain = () => (window.__lastGain = cg()); }
  a.sound = (name, rate = 1, gain = 1, pan = 0) => { const n0 = a.active.length, r = o(name, rate, gain, pan); if (r === true) { const v = a.active[a.active.length - 1], arr = a.buffers.get(v.name) || []; window.__snd.push([performance.now(), v.name, arr.indexOf(v.src.buffer), v.src.playbackRate.value, window.__lastGain ? window.__lastGain.gain.value : gain, Math.max(-1, Math.min(1, pan)) * 0.7, v.name && a.uiBus && 0]); } return r; }; });
await p.evaluate(() => window.nachtschrott.game.audio.init());
await p.waitForFunction(() => { const a = window.nachtschrott.game.audio; return a.ctx && a.ctx.state === 'running' && a.banks.combat === 'ready'; }, null, { timeout: 20000 });
await p.evaluate(() => { const a = window.nachtschrott.game.audio, c = a.ctx; window.__pcm = []; window.__pcmT = null; window.__sr = c.sampleRate;
  const sp = c.createScriptProcessor(4096, 2, 2), z = c.createGain(); z.gain.value = 0; a.limiter.connect(sp); sp.connect(z); z.connect(c.destination); window.__sp = sp;
  sp.onaudioprocess = (e) => { if (window.__pcmT === null) window.__pcmT = [performance.now(), e.playbackTime, c.currentTime, c.baseLatency || 0, c.outputLatency || 0]; const L = e.inputBuffer.getChannelData(0), R = e.inputBuffer.getChannelData(1); window.__pcm.push(new Float32Array(L), new Float32Array(R)); }; });
const navOffset = await p.evaluate(() => performance.timeOrigin) - T0; // ms: Seitenstart relativ zum Videostart (≈)
await p.waitForTimeout(600);
const seg = []; const mark = async (label) => seg.push([await p.evaluate(() => performance.now()), label]);
const MAPS = [[0, -900, -450, 'KeyD'], [4, -900, 450, 'KeyD'], [5, 900, -350, 'KeyA'], [6, 950, -500, 'KeyA'], [8, -900, 300, 'KeyD']];
for (const [m, x, y, key] of MAPS) {
  await p.evaluate(([m, x, y]) => { const n = window.nachtschrott, g = n.game; g.climb = 0; g.map = m; g.wave = 5; g.start(0, 'nailer'); g.map = m; g.god = true; g.testRun = true; n.ui.screen = 'combat'; n.ui.render();
    g.xpNeed = 1e5; g.player.x = x; g.player.y = y; [['thunder', 2], ['crank', 2], ['pistol', 2]].forEach(([id, t]) => g.weapons.push(g.weapon(id, t))); g.recalc(); }, [m, x, y]);
  await p.waitForFunction((m) => window.nachtschrott.renderer.paintedPlate?.id === 'k' + m, m, { timeout: 15000 });
  await p.evaluate(() => { const g = window.nachtschrott.game; let i = 0; window.__ft && clearInterval(window.__ft);
    window.__ft = setInterval(() => { const P = g.player, a = i * 0.9, r = 380 + (i % 3) * 90, e = g.spawn(i % 9 === 4 ? 7 : i % 4); if (e) { e.x = P.x + r * Math.cos(a); e.y = P.y + r * 0.7 * Math.sin(a); } if (++i > 70) clearInterval(window.__ft); }, 110); });
  await p.waitForTimeout(900); await mark('m' + m);
  await p.keyboard.down(key); await p.waitForTimeout(1800); await p.keyboard.up(key);
  await p.keyboard.down('KeyS'); await p.waitForTimeout(1200); await p.keyboard.up('KeyS');
  await p.keyboard.down(key === 'KeyD' ? 'KeyA' : 'KeyD'); await p.waitForTimeout(1300); await p.keyboard.up(key === 'KeyD' ? 'KeyA' : 'KeyD');
  await p.waitForTimeout(1200); await mark('e' + m);
}
await mark('ENDE');
const pcmInfo = await p.evaluate(() => ({ t: window.__pcmT, n: window.__pcm.length, sr: window.__sr }));
{ const fd = fs.openSync(OUT + '/game.f32', 'w'); for (let i = 0; i < pcmInfo.n; i += 40) { const b64 = await p.evaluate(([i]) => { const out = []; for (let k = i; k < Math.min(i + 40, window.__pcm.length); k += 2) { const L = window.__pcm[k], R = window.__pcm[k + 1], f = new Float32Array(L.length * 2); for (let j = 0; j < L.length; j++) { f[2 * j] = L[j]; f[2 * j + 1] = R[j]; } out.push(f); } const tot = out.reduce((s, f) => s + f.length, 0), all = new Float32Array(tot); let o = 0; for (const f of out) { all.set(f, o); o += f.length; } const u = new Uint8Array(all.buffer); let s = ''; for (let j = 0; j < u.length; j += 0x8000) s += String.fromCharCode.apply(null, u.subarray(j, j + 0x8000)); return btoa(s); }, [i]); fs.writeSync(fd, Buffer.from(b64, 'base64')); } fs.closeSync(fd); }
const snd = await p.evaluate(() => window.__snd), leg = [], bus = await p.evaluate(() => { const a = window.nachtschrott.game.audio; return { sfx: a.sfxBus?.gain.value, ui: a.uiBus?.gain.value, master: a.master?.gain?.value, state: a.ctx?.state }; });
fs.writeFileSync(OUT + '/log.json', JSON.stringify({ navOffset, seg, snd, leg, bus, pcmInfo }));
await ctx.close(); await b.close();
console.log(errs.length ? 'ERR ' + errs.slice(0, 3).join(' | ') : 'ok', 'navOffset', navOffset, 'snd', snd.length, 'leg', leg.length, JSON.stringify(bus), fs.readdirSync(OUT));
