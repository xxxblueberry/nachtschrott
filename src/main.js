(function () {
  const A = document.createElement("link").relList;
  if (A && A.supports && A.supports("modulepreload")) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) B(E);
  new MutationObserver((E) => {
    for (const o of E)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && B(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function g(E) {
    const o = {};
    return (
      E.integrity && (o.integrity = E.integrity),
      E.referrerPolicy && (o.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : E.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function B(E) {
    if (E.ep) return;
    E.ep = !0;
    const o = g(E);
    fetch(E.href, o);
  }
})();
const fB = {
    w: 2280,
    h: 1920,
    x: -1140,
    y: -960,
    colliders: [
      { x: 540, y: -29, r: 69, ry: 20, h: 102, spr: [0, 0, 166, 102, 457, -108] },
      { x: -970, y: 291, r: 44, ry: 16, h: 84, spr: [168, 0, 105, 84, -1023, 226] },
      { x: -770, y: 315, r: 76, ry: 22, h: 111, spr: [275, 0, 182, 111, -861, 229] },
      { x: -593, y: -900, r: 57, ry: 10, h: 52, spr: [459, 0, 138, 52, -662, -939] },
      { x: 558, y: -812, r: 68, ry: 16, h: 82, spr: [599, 0, 162, 82, 477, -875] },
      { x: -884, y: -718, r: 92, ry: 18, h: 93, spr: [763, 0, 220, 93, -994, -790] },
      { x: 883, y: -601, r: 105, ry: 23, h: 115, spr: [985, 0, 250, 115, 758, -690] },
      { x: 346, y: -633, r: 21, ry: 10, h: 40, spr: [1237, 0, 51, 40, 321, -660] },
      { x: 313, y: -550, r: 56, ry: 22, h: 113, spr: [1290, 0, 134, 113, 246, -638] },
      { x: -1105, y: -419, r: 44, ry: 145, h: 90 },
      { x: -1035, y: -423, r: 44, ry: 146, h: 90 },
      { x: -965, y: -428, r: 44, ry: 139, h: 90 },
      { x: -895, y: -425, r: 44, ry: 132, h: 90 },
      { x: -825, y: -428, r: 44, ry: 138, h: 90 },
      { x: -755, y: -426, r: 44, ry: 143, h: 90 },
      { x: -685, y: -414, r: 44, ry: 146, h: 90 },
      { x: -615, y: -418, r: 44, ry: 136, h: 90 },
      { x: -545, y: -419, r: 44, ry: 112, h: 90 },
      { x: -475, y: -422, r: 44, ry: 60, h: 90 },
      { x: -405, y: -424, r: 44, ry: 33, h: 90 },
      { x: -335, y: -421, r: 44, ry: 14, h: 90 },
      { x: -181, y: -530, r: 54, ry: 11, h: 59, spr: [1426, 0, 130, 59, -246, -575] },
      { x: 317, y: -253, r: 58, ry: 30, h: 151, spr: [1558, 0, 140, 151, 247, -371] },
      { x: -152, y: -305, r: 83, ry: 18, h: 94, spr: [1700, 0, 199, 94, -252, -378] },
      { x: 889, y: -211, r: 104, ry: 23, h: 119, spr: [0, 153, 248, 119, 765, -304] },
      { x: -439, y: -216, r: 48, ry: 11, h: 56, spr: [250, 153, 116, 56, -497, -258] },
      { x: -880, y: -126, r: 41, ry: 11, h: 55, spr: [368, 153, 99, 55, -930, -167] },
      { x: -876, y: -93, r: 91, ry: 19, h: 96, spr: [469, 153, 218, 96, -985, -167] },
      { x: -606, y: 71, r: 62, ry: 16, h: 82, spr: [689, 153, 148, 82, -680, 8] },
      { x: -1111, y: 66, r: 21, ry: 10, h: 47, spr: [839, 153, 51, 47, -1137, 32] },
      { x: -328, y: 280, r: 63, ry: 31, h: 156, spr: [892, 153, 150, 156, -403, 158] },
      { x: 541, y: 431, r: 44, ry: 64, h: 90 },
      { x: 611, y: 422, r: 44, ry: 81, h: 90 },
      { x: 681, y: 445, r: 44, ry: 110, h: 90 },
      { x: 751, y: 438, r: 44, ry: 192, h: 90 },
      { x: 821, y: 448, r: 44, ry: 229, h: 90 },
      { x: 891, y: 445, r: 44, ry: 247, h: 90 },
      { x: 961, y: 448, r: 44, ry: 229, h: 90 },
      { x: 1031, y: 433, r: 44, ry: 189, h: 90 },
      { x: 1101, y: 455, r: 44, ry: 99, h: 90 },
      { x: 1171, y: 447, r: 44, ry: 67, h: 90 },
      { x: 334, y: 300, r: 92, ry: 15, h: 79, spr: [1044, 153, 220, 79, 224, 239] },
      { x: -974, y: 335, r: 53, ry: 25, h: 127, spr: [1266, 153, 127, 127, -1038, 236] },
      { x: -1105, y: 448, r: 44, ry: 24, h: 90 },
      { x: -1035, y: 440, r: 44, ry: 42, h: 90 },
      { x: -965, y: 445, r: 44, ry: 58, h: 90 },
      { x: -895, y: 446, r: 44, ry: 71, h: 90 },
      { x: -825, y: 442, r: 44, ry: 66, h: 90 },
      { x: -755, y: 442, r: 44, ry: 41, h: 90 },
      { x: -685, y: 438, r: 44, ry: 39, h: 90 },
      { x: -615, y: 445, r: 44, ry: 21, h: 90 },
      { x: -750, y: 622, r: 97, ry: 27, h: 137, spr: [1395, 153, 232, 137, -866, 515] },
      { x: -969, y: 603, r: 27, ry: 13, h: 69, spr: [1629, 153, 66, 69, -1002, 550] },
      { x: -310, y: 684, r: 90, ry: 32, h: 163, spr: [1697, 153, 216, 163, -418, 556] },
      { x: 374, y: 624, r: 54, ry: 11, h: 57, spr: [1915, 153, 130, 57, 309, 581] },
      { x: -583, y: 858, r: 75, ry: 16, h: 81, spr: [0, 318, 180, 81, -673, 796] },
      { x: 130, y: 904, r: 70, ry: 20, h: 101, spr: [182, 318, 169, 101, 46, 826] },
      { x: 165, y: 909, r: 61, ry: 17, h: 88, spr: [353, 318, 146, 88, 92, 841] },
      { x: 542, y: 942, r: 53, ry: 12, h: 61, spr: [501, 318, 128, 61, 478, 896] },
    ],
  },
  zB = {
    w: 2280,
    h: 1920,
    x: -1140,
    y: -960,
    colliders: [
      { x: -520, y: -163, r: 41, ry: 15, h: 75, spr: [0, 0, 99, 75, -570, -220] },
      { x: -141, y: -306, r: 49, ry: 10, h: 47, spr: [101, 0, 117, 47, -200, -340] },
      { x: 333, y: 263, r: 47, ry: 14, h: 70, spr: [220, 0, 113, 70, 277, 210] },
      { x: 616, y: -394, r: 28, ry: 10, h: 37, spr: [335, 0, 67, 37, 583, -418] },
      { x: -146, y: -564, r: 42, ry: 11, h: 55, spr: [404, 0, 102, 55, -197, -605] },
      { x: -531, y: -698, r: 32, ry: 10, h: 48, spr: [508, 0, 77, 48, -570, -733] },
      { x: -329, y: 303, r: 16, ry: 10, h: 25, spr: [587, 0, 29, 25, -344, 291] },
      { x: -322, y: 574, r: 23, ry: 10, h: 46, spr: [618, 0, 55, 46, -350, 541] },
      { x: 362, y: 629, r: 47, ry: 10, h: 54, spr: [675, 0, 114, 54, 305, 588] },
      { x: -402, y: 636, r: 69, ry: 20, h: 104, spr: [791, 0, 166, 104, -485, 555] },
      { x: 372, y: -260, r: 94, ry: 27, h: 138, spr: [959, 0, 225, 138, 260, -368] },
      { x: 384, y: -575, r: 80, ry: 22, h: 110, spr: [1186, 0, 192, 110, 288, -660] },
      { x: -402, y: 280, r: 77, ry: 22, h: 110, spr: [1380, 0, 185, 110, -495, 195] },
    ],
  },
  Og = { erde: fB, wiese: zB },
  ZB = "__ASSET_1__",
  LB = "__ASSET_2__",
  yB = "__ASSET_3__",
  NB = "__ASSET_4__",
  bB = "__ASSET_5__",
  vB = "__ASSET_6__",
  MB = { 4: { id: "wiese", ...Og.wiese }, 5: { id: "erde", ...Og.erde } },
  XB = {
    "arena-erde": ZB,
    "arena-erde-occ": LB,
    "arena-erde-under": yB,
    "arena-wiese": NB,
    "arena-wiese-occ": bB,
    "arena-wiese-under": vB,
  };
function cB(e) {
  return MB[e];
}
function Hg(e) {
  const A = MB[e];
  return A.colliders.map((g) => ({
    x: g.x,
    y: g.y,
    r: g.r,
    ry: g.ry,
    h: g.h,
    kind: 6,
    color: "",
    light: "",
    low: !g.spr,
    spr: g.spr,
    plate: A.id,
  }));
}
const TB = [
    [-460, -220],
    [-150, -310],
    [300, -270],
    [550, -20],
    [380, 300],
    [-300, 290],
    [-570, 80],
    [50, 470],
  ],
  vA = Array.from({ length: 5 }, (e, A) =>
    TB.map(([g, B], E) => ({
      x: g + (A === 2 ? Math.sign(g) * 50 : 0),
      y: B,
      r: A === 2 ? 34 : 36 + (E % 3) * 8,
      h: A === 2 ? 85 : 42 + (E % 3) * 22,
      kind: A,
      color: ["#bd874d", "#526b83", "#8479a3", "#b77a67", "#8d8a7c"][A],
      light: ["#ffcb79", "#82cce7", "#d1b8fc", "#d5a9c4", "#a9c76a"][A],
    })),
  ),
  Gg = [vA[0], vA[1], vA[2], vA[3], Hg(4), Hg(5)],
  sA = { active: !1, list: [] };
function FA(e) {
  return sA.active ? sA.list : Gg[e];
}
function PB(e, A, g, B) {
  const E = e - B.x,
    o = A - B.y;
  if (B.kind === 0) {
    const i = Math.max(-B.r, Math.min(B.r, E)),
      I = Math.max(-9, Math.min(8, o));
    return (E - i) ** 2 + (o - I) ** 2 < g ** 2;
  }
  return (E / (B.r + g)) ** 2 + (o / ((B.ry ?? 10) + g)) ** 2 < 1;
}
function HA(e, A, g) {
  let B = !1;
  for (const E of FA(g)) {
    if (!PB(e.x, e.y, A, E)) continue;
    const o = e.x - E.x,
      i = e.y - E.y;
    if (E.kind === 0) {
      const I = Math.max(-E.r, Math.min(E.r, o)),
        C = Math.max(-9, Math.min(8, i)),
        Q = o - I,
        a = i - C,
        t = Math.hypot(Q, a);
      if (t > 0) (e.x = E.x + I + (Q / t) * A), (e.y = E.y + C + (a / t) * A);
      else {
        const h = [
          { d: o + E.r, x: -E.r - A, y: i },
          { d: E.r - o, x: E.r + A, y: i },
          { d: i + 9, x: o, y: -9 - A },
          { d: 8 - i, x: o, y: 8 + A },
        ].sort((s, U) => s.d - U.d);
        (e.x = E.x + h[0].x), (e.y = E.y + h[0].y);
      }
    } else {
      const I = E.r + A,
        C = (E.ry ?? 10) + A,
        Q = Math.hypot(o / I, i / C);
      Q > 0 ? ((e.x = E.x + o / Q), (e.y = E.y + i / Q)) : (e.y = E.y + C);
    }
    B = !0;
  }
  return B;
}
function PA(e, A, g, B, E, o) {
  for (const i of FA(o)) {
    if (i.low) continue;
    const I = i.ry ?? 10,
      C = i.r + E,
      Q = (i.kind === 0 ? -9 : -I) - E,
      a = (i.kind === 0 ? 8 : I) + E;
    if (
      !(
        Math.max(e, g) < i.x - C ||
        Math.min(e, g) > i.x + C ||
        Math.max(A, B) < i.y + Q ||
        Math.min(A, B) > i.y + a
      )
    )
      if (i.kind !== 0) {
        const t = (e - i.x) / C,
          h = (A - i.y) / (I + E),
          s = (g - e) / C,
          U = (B - A) / (I + E),
          M = Math.max(0, Math.min(1, -(t * s + h * U) / (s * s + U * U || 1)));
        if ((t + s * M) ** 2 + (h + U * M) ** 2 <= 1) return !0;
      } else {
        let t = 0,
          h = 1,
          s = !0;
        for (const [U, M, r, Y] of [
          [e, g, i.x - C, i.x + C],
          [A, B, i.y + Q, i.y + a],
        ]) {
          const c = M - U;
          if (Math.abs(c) < 1e-8) {
            if (U < r || U > Y) {
              s = !1;
              break;
            }
          } else {
            let R = (r - U) / c,
              G = (Y - U) / c;
            if ((R > G && ([R, G] = [G, R]), (t = Math.max(t, R)), (h = Math.min(h, G)), t > h)) {
              s = !1;
              break;
            }
          }
        }
        if (s) return !0;
      }
  }
  return !1;
}
const WA = 300,
  wA = 32,
  YA = { x0: 0, y0: 0, x1: 1672, y1: 941 },
  Rg = { x: 816, y: 514 },
  FB = [
    [92, 534],
    [487, 534],
    [492, 386],
    [560, 370],
    [650, 346],
    [700, 338],
    [712, 322],
    [950, 322],
    [962, 338],
    [1016, 344],
    [1100, 380],
    [1168, 388],
    [1168, 546],
    [1566, 546],
    [1566, 560],
    [1420, 648],
    [1236, 654],
    [1100, 690],
    [978, 704],
    [890, 702],
    [890, 846],
    [968, 941],
    [700, 941],
    [762, 846],
    [762, 702],
    [676, 702],
    [600, 714],
    [500, 708],
    [400, 702],
    [300, 684],
    [200, 660],
    [96, 628],
    [64, 616],
    [36, 606],
    [18, 592],
    [14, 562],
    [26, 548],
    [90, 546],
  ],
  yA = [
    {
      id: "werkstatt",
      name: "Werkstatt",
      verb: "Talentbaum öffnen",
      x: 356,
      y: 566,
      r: 95,
      exit: { x: 360, y: 592 },
      mark: { x: 352, y: 574 },
    },
    {
      id: "unterkunft",
      name: "Unterkunft",
      verb: "Held wählen",
      x: 1331,
      y: 580,
      r: 95,
      exit: { x: 1331, y: 604 },
      mark: { x: 1344, y: 586 },
    },
    {
      id: "tor",
      name: "Die Brücke",
      verb: "Raus in die Nacht",
      x: 826,
      y: 800,
      r: 110,
      exit: { x: 826, y: 660 },
      walkIn: { x0: 700, y0: 884, x1: 970, y1: 941 },
    },
  ],
  $B = [
    { x: 173, y: 86 },
    { x: 1555, y: 94 },
  ];
function fg(e, A, g, B = 0) {
  return A > e.x0 - B && A < e.x1 + B && g > e.y0 - B && g < e.y1 + B;
}
function _B(e, A, g) {
  let B = !1;
  for (let E = 0, o = g.length - 1; E < g.length; o = E++) {
    const [i, I] = g[E],
      [C, Q] = g[o];
    I > A != Q > A && e < ((C - i) * (A - I)) / (Q - I) + i && (B = !B);
  }
  return B;
}
function gg(e, A, g = 16) {
  const B = A + wA,
    E = g * 0.5;
  for (const [o, i] of [
    [0, 0],
    [g, 0],
    [-g, 0],
    [0, E],
    [0, -E],
    [g * 0.7, E * 0.7],
    [-g * 0.7, E * 0.7],
    [g * 0.7, -E * 0.7],
    [-g * 0.7, -E * 0.7],
  ])
    if (!_B(e + o, B + i, FB)) return !0;
  return !1;
}
function zg(e, A, g, B = 16) {
  gg(e.x + A, e.y, B) || (e.x += A), gg(e.x, e.y + g, B) || (e.y += g);
}
function Zg(e, A) {
  const g = A + wA;
  let B,
    E = 1 / 0;
  for (const o of yA) {
    const i = Math.hypot(e - o.x, g - o.y);
    i < o.r && i < E && ((E = i), (B = o));
  }
  return B;
}
function wg(e) {
  return yA.find((A) => A.id === e);
}
const xA = 78;
let MA;
const Kg = { layers: 0, holes: 0 };
function AE(e, A) {
  (MA ??= document.createElement("canvas")),
    (MA.width < e || MA.height < A) &&
      ((MA.width = Math.max(MA.width, e)), (MA.height = Math.max(MA.height, A)));
  const g = MA.getContext("2d");
  return (
    g.setTransform(1, 0, 0, 1, 0, 0),
    (g.globalCompositeOperation = "source-over"),
    (g.globalAlpha = 1),
    g.clearRect(0, 0, e, A),
    g
  );
}
function GB(e, A, g) {
  if (A.length) {
    e.save(), e.beginPath();
    for (const B of A) e.moveTo(B.x + B.r, B.y), e.arc(B.x, B.y, B.r, 0, Math.PI * 2);
    e.clip("nonzero"), g(e), e.restore();
  }
}
function gE(e, A, g, B, E) {
  return e.filter((o) => o.x + o.r > A && o.x - o.r < A + B && o.y + o.r > g && o.y - o.r < g + E);
}
function Lg(e, A, g, B, E, o, i, I) {
  return e + B > E && e - B < E + i && A > o && A - g < o + I;
}
function RB(e, A, g, B, E, o, i) {
  const I = gE(o, A, g, B, E);
  if (!I.length || B <= 0 || E <= 0) return i(e), !1;
  const C = e.getTransform(),
    Q = Math.min(3, Math.hypot(C.a, C.b) || 1),
    a = Math.max(1, Math.ceil(B * Q)),
    t = Math.max(1, Math.ceil(E * Q)),
    h = AE(a, t);
  h.setTransform(Q, 0, 0, Q, -A * Q, -g * Q),
    i(h),
    (h.globalCompositeOperation = "destination-out"),
    (h.globalAlpha = 1),
    (h.fillStyle = "#000"),
    h.beginPath();
  for (const s of I) h.moveTo(s.x + s.r, s.y), h.arc(s.x, s.y, s.r, 0, Math.PI * 2);
  return h.fill("nonzero"), e.drawImage(MA, 0, 0, a, t, A, g, B, E), Kg.layers++, (Kg.holes += I.length), !0;
}
const tg = new WeakMap();
function BE(e) {
  if (tg.has(e)) return tg.get(e);
  let A = null;
  try {
    const g = e.width,
      B = e.height;
    if (g > 0 && B > 0) {
      const E = document.createElement("canvas");
      (E.width = g), (E.height = B);
      const o = E.getContext("2d", { willReadFrequently: !0 });
      o.drawImage(e, 0, 0);
      const i = o.getImageData(0, 0, g, B).data,
        I = new Uint8Array(g * B);
      for (let C = 0; C < I.length; C++) I[C] = i[C * 4 + 3];
      A = { w: g, h: B, a: I };
    }
  } catch {
    A = null;
  }
  return (A || e.complete !== !1) && tg.set(e, A), A;
}
function qg(e, A, g, B, E, o, i, I, C, Q, a, t = 80, h = 22) {
  const s = Math.max(o, Q - h),
    U = Math.min(o + I, Q + h),
    M = Math.max(i, a - t),
    r = Math.min(i + C, a);
  if (U <= s || r <= M) return 0;
  const Y = e && BE(e),
    c = B / I,
    R = E / C;
  let G = 0;
  for (let n = Math.ceil(M / 5) * 5; n < r; n += 5)
    for (let D = Math.ceil(s / 5) * 5; D < U; D += 5) {
      if (!Y) {
        G++;
        continue;
      }
      const k = Math.floor(A + (D - o) * c),
        l = Math.floor(g + (n - i) * R);
      k >= 0 && l >= 0 && k < Y.w && l < Y.h && Y.a[l * Y.w + k] > 60 && G++;
    }
  return G;
}
function wB(e, A = 80, g = 22) {
  return e >= Math.max(3, Math.round(((2 * g) / 5) * (A / 5) * 0.08));
}
const EE = "Neue Version bereit – wird nach der Runde geladen",
  yg = "nachtschrott-sw-reload";
class KB {
  constructor(A, g) {
    (this.hooks = A), (this.hadController = g);
  }
  hooks;
  hadController;
  pending = !1;
  reloading = !1;
  checks = 0;
  get now() {
    return (this.hooks.now ?? Date.now)();
  }
  guarded() {
    try {
      const A = Number(this.hooks.storage?.getItem(yg) || 0);
      return this.now - A < 15e3;
    } catch {
      return !1;
    }
  }
  onControllerChange() {
    return this.hadController
      ? this.reloading
        ? "guarded"
        : this.hooks.runActive()
          ? (this.pending || this.hooks.toast(EE), (this.pending = !0), "deferred")
          : this.guarded()
            ? ((this.pending = !0), "guarded")
            : (this.doReload(), "reloaded")
      : ((this.hadController = !0), "claimed");
  }
  tick() {
    return this.pending && !this.reloading && !this.hooks.runActive() && !this.guarded()
      ? ((this.pending = !1), this.doReload(), !0)
      : !1;
  }
  doReload() {
    this.reloading = !0;
    try {
      this.hooks.storage?.setItem(yg, String(this.now));
    } catch {}
    (this.hooks.reload ?? (() => location.reload()))();
  }
}
function oE(e) {
  if (!("serviceWorker" in navigator)) return;
  const A = new KB({ storage: sessionStorage, ...e }, !!navigator.serviceWorker.controller);
  return (
    navigator.serviceWorker
      .register("./sw.js", { updateViaCache: "none" })
      .then((g) => {
        const B = () => {
          A.checks++, g.update().catch(() => {});
        };
        B(),
          document.addEventListener("visibilitychange", () => {
            document.visibilityState === "visible" && B();
          });
      })
      .catch(() => {}),
    navigator.serviceWorker.addEventListener("controllerchange", () => A.onControllerChange()),
    A
  );
}
const iE = "__ASSET_7__",
  CE = "__ASSET_8__",
  IE = "__ASSET_9__",
  QE = "__ASSET_10__",
  eE = "__ASSET_11__",
  mA = [
    {
      name: "spark",
      id: "impacts/hit-spark",
      frames: 8,
      dt: 0.0667,
      cw: 250,
      ch: 150,
      ax: 74,
      ay: 118,
      k: 2,
    },
    {
      name: "bullet",
      id: "impacts/bullet-impact",
      frames: 14,
      dt: 0.0667,
      cw: 236,
      ch: 158,
      ax: 166,
      ay: 128,
      k: 2,
    },
    {
      name: "boom",
      id: "explosions/small-explosion",
      frames: 16,
      dt: 0.1,
      cw: 424,
      ch: 396,
      ax: 204,
      ay: 308,
      k: 2,
    },
    { name: "poof", id: "spawn/poof", frames: 13, dt: 0.1, cw: 188, ch: 156, ax: 92, ay: 132, k: 2 },
    {
      name: "zap",
      id: "lightning/zap-hit",
      frames: 14,
      dt: 0.0667,
      cw: 266,
      ch: 220,
      ax: 152,
      ay: 110,
      k: 2,
    },
  ],
  aE = Object.fromEntries(mA.map((e, A) => [e.name, A])),
  sE = { spark: iE, bullet: CE, boom: IE, poof: QE, zap: eE },
  hg = [],
  Ng = [];
function Vg(e) {
  const A = Ng[e];
  if (A) return A;
  if (typeof Image > "u") return;
  let g = hg[e];
  if (
    (g || ((g = hg[e] = new Image()), (g.decoding = "async"), (g.src = sE[mA[e].name])),
    !g.complete || !g.naturalWidth)
  )
    return;
  const B = mA[e],
    E = [];
  for (let o = 0; o < B.frames; o++) {
    const i = document.createElement("canvas");
    (i.width = B.cw),
      (i.height = B.ch),
      i.getContext("2d").drawImage(g, o * B.cw, 0, B.cw, B.ch, 0, 0, B.cw, B.ch),
      E.push(i);
  }
  return (hg[e] = void 0), (Ng[e] = E);
}
function tE() {
  mA.forEach((A, g) => Vg(g));
  const e = () => mA.every((A, g) => Vg(g)) || setTimeout(e, 150);
  setTimeout(e, 150);
}
const hE = "__ASSET_12__",
  lE = "__ASSET_13__",
  UE = "__ASSET_14__",
  rE = "__ASSET_15__",
  YE = "__ASSET_16__",
  ME = "__ASSET_17__",
  cE = "__ASSET_18__",
  FE = "__ASSET_19__",
  GE = "__ASSET_20__",
  RE = "__ASSET_21__",
  wE = "__ASSET_22__",
  KE = "__ASSET_23__",
  qE = "__ASSET_24__",
  VE = "__ASSET_25__",
  nE = "__ASSET_26__",
  SE = "__ASSET_27__",
  DE = "__ASSET_28__",
  pE = "__ASSET_29__",
  mE = "__ASSET_30__",
  WE = "__ASSET_31__",
  dE = "__ASSET_32__",
  kE = "__ASSET_33__",
  xE = "__ASSET_34__",
  JE = "__ASSET_35__",
  jE = "__ASSET_36__",
  uE = "__ASSET_37__",
  OE = "__ASSET_38__",
  HE = "__ASSET_39__",
  fE = "__ASSET_40__",
  zE = "__ASSET_41__",
  ZE = "__ASSET_42__",
  LE = "__ASSET_43__",
  yE = "__ASSET_44__",
  NE = "__ASSET_45__",
  bE = "__ASSET_46__",
  vE = "__ASSET_47__",
  XE = "__ASSET_48__",
  TE = "__ASSET_49__",
  PE = "__ASSET_50__",
  $E = "__ASSET_51__",
  _E = "__ASSET_52__",
  Ao = "__ASSET_53__",
  go = "__ASSET_54__",
  Bo = "__ASSET_55__",
  Eo = "__ASSET_56__",
  oo = "__ASSET_57__",
  io = "__ASSET_58__",
  Co = "__ASSET_59__",
  Io = "__ASSET_60__",
  Qo = "__ASSET_61__",
  eo = "__ASSET_62__",
  ao = "__ASSET_63__",
  so = "__ASSET_64__",
  to = "__ASSET_65__",
  ho = "__ASSET_66__",
  lo = "__ASSET_67__",
  Uo = "__ASSET_68__",
  ro = "__ASSET_69__",
  Yo = "__ASSET_70__",
  Mo = "__ASSET_71__",
  co = "__ASSET_72__",
  Fo = "__ASSET_73__",
  Go = "__ASSET_74__",
  Ro = "__ASSET_75__",
  wo = "__ASSET_76__",
  Ko = "__ASSET_77__",
  qo = "__ASSET_78__",
  Vo = "__ASSET_79__",
  no = "__ASSET_80__",
  So = "__ASSET_81__",
  Do = "__ASSET_82__",
  po = "__ASSET_83__",
  mo = "__ASSET_84__",
  Wo = "__ASSET_85__",
  ko = "__ASSET_86__",
  xo = "__ASSET_87__",
  Jo = "__ASSET_88__",
  jo = "__ASSET_89__",
  uo = "__ASSET_90__",
  Oo = "__ASSET_91__",
  Ho = "__ASSET_92__",
  fo = "__ASSET_93__",
  zo = "__ASSET_94__",
  Z = new Map(),
  Bg = {
    "hero-0": OE,
    "hero-atlas-0": HE,
    "hero-1": fE,
    "hero-atlas-1": zE,
    "hero-2": ZE,
    "hero-atlas-2": LE,
    "hero-3": yE,
    "hero-atlas-3": NE,
    "hero-4": bE,
    "hero-atlas-4": vE,
    "hero-5": XE,
    "hero-atlas-5": TE,
    "foe-0": hE,
    "foe-idle-0": lE,
    "foe-1": UE,
    "foe-idle-1": rE,
    "foe-2": YE,
    "foe-idle-2": ME,
    "foe-3": cE,
    "foe-idle-3": FE,
    "foe-4": GE,
    "foe-idle-4": RE,
    "foe-5": wE,
    "foe-idle-5": KE,
    "foe-6": qE,
    "foe-idle-6": VE,
    "foe-7": nE,
    "foe-idle-7": SE,
    "foe-8": DE,
    "foe-idle-8": pE,
    "foe-9": mE,
    "foe-idle-9": WE,
    "foe-10": dE,
    "foe-idle-10": kE,
    "foe-11": xE,
    "foe-idle-11": JE,
    "foe-12": jE,
    "foe-idle-12": uE,
    "floor-0": Ao,
    "floor-4": go,
    "floor-1": Bo,
    "floor-2": Eo,
    "floor-3": oo,
    "floor-up": io,
    "floor-down": Co,
    "ui-leather": Io,
    "ui-metal": Qo,
    "weapon-pistol": Go,
    "weapon-fork": ko,
    "weapon-fork-frames": xo,
    "fx-fork-beam": Jo,
    "fx-fork-hit": jo,
    "mine-torch": uo,
    "mine-pillar": Oo,
    "weapon-shotgun": Ro,
    "weapon-axe": wo,
    "weapon-lightning": Ko,
    "weapon-flame": qo,
    "weapon-turret": Vo,
    "weapon-poison": no,
    "weapon-summon": So,
    "weapon-saw": Do,
    "saw-body": PE,
    "saw-blade": $E,
    "saw-hub": _E,
    "weapon-laser": po,
    "weapon-frost": mo,
    "weapon-boomerang": Wo,
    "ground-metal": Ho,
    "ground-stone": fo,
    "panel-material": zo,
    "enemy-0": eo,
    "enemy-1": ao,
    "enemy-2": so,
    "enemy-3": to,
    "enemy-4": ho,
    "enemy-5": lo,
    "enemy-6": Uo,
    "enemy-7": ro,
    "enemy-8": Yo,
    "enemy-9": Mo,
    "enemy-10": co,
    "enemy-11": Fo,
    ...XB,
  };
async function Zo() {
  await Promise.all(
    Object.entries(Bg).map(async ([e, A]) => {
      const g = new Image();
      await new Promise((r) => {
        (g.onload = g.onerror = r), (g.src = A);
      }),
        Z.set(e, g);
    }),
  );
}
const $A = [
    {
      id: 0,
      source: "concept/heroes-v2/01-bauarbeiter.png",
      provenance: "user-supplied",
      sha256: "26023a78859b66d03f9ec24d3bf908dbe36da70fd2b15cda601cde7cec0535eb",
      sourceSize: [1254, 1254],
      cell: 448,
      anchor: [224, 416],
      maxWidth: 268,
      maxHeight: 345,
      frames: [
        { index: 0, bounds: [90, 76, 354, 417], foot: [224, 416] },
        { index: 1, bounds: [81, 74, 346, 417], foot: [224, 416] },
        { index: 2, bounds: [82, 80, 347, 417], foot: [224, 416] },
        { index: 3, bounds: [106, 84, 342, 417], foot: [224, 416] },
        { index: 4, bounds: [85, 73, 353, 417], foot: [224, 416] },
        { index: 5, bounds: [94, 75, 341, 417], foot: [224, 416] },
        { index: 6, bounds: [94, 75, 342, 417], foot: [224, 416] },
        { index: 7, bounds: [92, 75, 342, 418], foot: [224, 416] },
        { index: 8, bounds: [84, 72, 343, 417], foot: [224, 416] },
      ],
    },
    {
      id: 1,
      source: "concept/heroes-v2/02-kapuze.png",
      provenance: "user-supplied",
      sha256: "7204caa9ee9cc18ec902bb3da13952f0ae64423a1189fb60f43f59aabb2bcf3c",
      sourceSize: [1254, 1254],
      cell: 448,
      anchor: [224, 416],
      maxWidth: 284,
      maxHeight: 349,
      frames: [
        { index: 0, bounds: [91, 93, 361, 417], foot: [224, 416] },
        { index: 1, bounds: [87, 92, 361, 417], foot: [224, 416] },
        { index: 2, bounds: [86, 94, 361, 417], foot: [224, 416] },
        { index: 3, bounds: [82, 87, 357, 417], foot: [224, 416] },
        { index: 4, bounds: [80, 74, 364, 417], foot: [224, 416] },
        { index: 5, bounds: [84, 85, 358, 417], foot: [224, 416] },
        { index: 6, bounds: [82, 72, 359, 418], foot: [224, 416] },
        { index: 7, bounds: [86, 83, 360, 417], foot: [224, 416] },
        { index: 8, bounds: [85, 69, 362, 418], foot: [224, 416] },
      ],
    },
    {
      id: 2,
      source: "concept/heroes-v2/03-steingolem.png",
      provenance: "user-supplied",
      sha256: "ce5f5b05be3f8a076166c84335de21c664f758bb468dd78e04b0c2497a2d32ee",
      sourceSize: [1254, 1254],
      cell: 448,
      anchor: [224, 416],
      maxWidth: 336,
      maxHeight: 329,
      frames: [
        { index: 0, bounds: [56, 112, 371, 417], foot: [224, 416] },
        { index: 1, bounds: [56, 113, 370, 417], foot: [224, 416] },
        { index: 2, bounds: [58, 120, 383, 417], foot: [224, 416] },
        { index: 3, bounds: [50, 110, 371, 417], foot: [224, 416] },
        { index: 4, bounds: [46, 98, 382, 417], foot: [224, 416] },
        { index: 5, bounds: [58, 96, 387, 417], foot: [224, 416] },
        { index: 6, bounds: [54, 96, 375, 417], foot: [224, 416] },
        { index: 7, bounds: [55, 93, 371, 417], foot: [224, 416] },
        { index: 8, bounds: [49, 88, 385, 417], foot: [224, 416] },
      ],
    },
    {
      id: 3,
      source: "concept/heroes-v2/04-zombie.png",
      provenance: "user-supplied",
      sha256: "0bc82890f785c6ab067af8c4980ceff772d8c3f690a0f81691b2b561bb1c88ea",
      sourceSize: [1254, 1254],
      cell: 448,
      anchor: [224, 416],
      maxWidth: 285,
      maxHeight: 354,
      frames: [
        { index: 0, bounds: [84, 92, 343, 417], foot: [224, 416] },
        { index: 1, bounds: [70, 91, 344, 417], foot: [224, 416] },
        { index: 2, bounds: [74, 91, 352, 417], foot: [224, 416] },
        { index: 3, bounds: [77, 77, 350, 417], foot: [224, 416] },
        { index: 4, bounds: [74, 73, 359, 417], foot: [224, 416] },
        { index: 5, bounds: [94, 75, 328, 417], foot: [224, 416] },
        { index: 6, bounds: [102, 64, 338, 417], foot: [224, 416] },
        { index: 7, bounds: [81, 69, 360, 417], foot: [224, 416] },
        { index: 8, bounds: [84, 63, 364, 417], foot: [224, 416] },
      ],
    },
    {
      id: 4,
      source: "concept/heroes-v2/05-bandit.png",
      provenance: "user-supplied",
      sha256: "294982dd7d7b7b394b4a50be43b51d5f6173c73759742c83cad1c7ef9d7fcbd0",
      sourceSize: [1254, 1254],
      cell: 448,
      anchor: [224, 416],
      maxWidth: 281,
      maxHeight: 346,
      frames: [
        { index: 0, bounds: [77, 105, 347, 418], foot: [224, 416] },
        { index: 1, bounds: [78, 93, 354, 417], foot: [224, 416] },
        { index: 2, bounds: [80, 104, 355, 418], foot: [224, 416] },
        { index: 3, bounds: [73, 87, 353, 417], foot: [224, 416] },
        { index: 4, bounds: [74, 81, 355, 417], foot: [224, 416] },
        { index: 5, bounds: [78, 84, 352, 417], foot: [224, 416] },
        { index: 6, bounds: [78, 71, 352, 417], foot: [224, 416] },
        { index: 7, bounds: [78, 78, 357, 417], foot: [224, 416] },
        { index: 8, bounds: [76, 71, 356, 417], foot: [224, 416] },
      ],
    },
    {
      id: 5,
      source: "concept/heroes-v2/06-roboter.png",
      provenance: "user-supplied",
      sha256: "a2cf7cbb0f7902caf944b3c84993ec60d174eefdffffdc2f62ac7c94f8474b4b",
      sourceSize: [1254, 1254],
      cell: 448,
      anchor: [224, 416],
      maxWidth: 280,
      maxHeight: 333,
      frames: [
        { index: 0, bounds: [90, 109, 356, 417], foot: [224, 416] },
        { index: 1, bounds: [85, 108, 360, 417], foot: [224, 416] },
        { index: 2, bounds: [94, 114, 355, 418], foot: [224, 416] },
        { index: 3, bounds: [84, 98, 362, 417], foot: [224, 416] },
        { index: 4, bounds: [82, 94, 362, 417], foot: [224, 416] },
        { index: 5, bounds: [86, 93, 364, 417], foot: [224, 416] },
        { index: 6, bounds: [92, 94, 363, 417], foot: [224, 416] },
        { index: 7, bounds: [92, 90, 359, 417], foot: [224, 416] },
        { index: 8, bounds: [91, 84, 366, 417], foot: [224, 416] },
      ],
    },
  ],
  _A = {
    range: "Reichweite",
    poison: "Giftschaden",
    dash: "Sprint-Aufladung",
    ability: "Fähigkeitskraft",
    hp: "Max. Leben",
    damage: "Schaden",
    speed: "Bewegung",
    attackSpeed: "Angriffstempo",
    crit: "Krit. Chance",
    armor: "Rüstung",
    pickup: "Sammelradius",
    regen: "Regeneration / Sek.",
    lifesteal: "Lebensraub",
    bleed: "Blutung",
    burn: "Brandschaden",
    chain: "Blitzsprünge",
    bounce: "Abpraller",
    projectiles: "Projektile",
    economy: "Ernte / Welle",
    luck: "Glück",
    engineering: "Technik",
    knockback: "Rückstoß",
  },
  j = [
    {
      id: "pistol",
      name: "Nietenspucker",
      tag: "Präzision · Fernkampf",
      desc: "Schnelle Nieten, hohe Reichweite. Kritische Treffer verursachen doppelten Schaden.",
      damage: 13,
      cooldown: 0.55,
      range: 520,
      color: "#ffda80",
      price: 26,
      kind: "bullet",
    },
    {
      id: "shotgun",
      name: "Krawalltüte",
      tag: "Schrot · Rückstoß",
      desc: "Vier räumliche Projektile drücken Gegner kräftig weg. In der Nähe besonders wirksam.",
      damage: 7,
      cooldown: 1.1,
      range: 285,
      color: "#fa9e64",
      price: 32,
      kind: "shotgun",
    },
    {
      id: "axe",
      name: "Mondspalter",
      tag: "Nahkampf · Flächentreffer",
      desc: "Ein weiter, schwerer Hieb trifft alle Gegner im sichtbaren Bogen. Hoher Rückstoß. Die Klinge wächst sichtbar mit: Waffenstufe und Reichweite (zählt 1,6-fach) verlängern den Hieb von 108 bis 340. Deckung blockt weite Hiebe.",
      damage: 33,
      cooldown: 1.15,
      range: 108,
      color: "#e3eff0",
      price: 30,
      kind: "axe",
    },
    {
      id: "lightning",
      name: "Wetterstab",
      tag: "Blitz · Ketten",
      desc: "Blitze springen auf zwei weitere Gegner. Jeder Sprung behält 75 % Schaden.",
      damage: 16,
      cooldown: 0.95,
      range: 360,
      color: "#b7a3ff",
      price: 36,
      kind: "lightning",
    },
    {
      id: "flame",
      name: "Glutkanne",
      tag: "Feuer · Bodenflächen",
      desc: "Kurze Flammenstöße hinterlassen brennende Pfützen. Feuer tickt viermal pro Sekunde.",
      damage: 5,
      cooldown: 0.17,
      range: 190,
      color: "#ff936b",
      price: 32,
      kind: "flame",
    },
    {
      id: "turret",
      name: "Schraubenknecht",
      tag: "Technik · Geschütz",
      desc: "Platziert automatisch ein Bodengeschütz. Ein Exemplar pro Waffe; bleibt stehen; zerbricht nach 18 Sek. und wird nach 3,5 Sek. ersetzt. Technik verstärkt es.",
      damage: 15,
      cooldown: 8.5,
      range: 430,
      color: "#8ed9e4",
      price: 38,
      kind: "turret",
    },
  ],
  _ = [
    {
      id: "edge",
      name: "Scharfe Kante",
      desc: "+18 % Schaden",
      color: "#e6c38d",
      price: 22,
      stats: { damage: 0.18 },
      benefits: "Alle Waffen",
    },
    {
      id: "coffee",
      name: "Grabkaffee",
      desc: "+18 % Angriffstempo",
      color: "#ddb994",
      price: 25,
      stats: { attackSpeed: 0.18 },
      benefits: "Alle Waffen & Geschütze",
    },
    {
      id: "heart",
      name: "Ersatzherz",
      desc: "+15 max. Leben, heilt 15",
      color: "#f18d94",
      price: 24,
      stats: { hp: 15 },
      benefits: "Überlebensfähigkeit",
    },
    {
      id: "boots",
      name: "Fluchtsohlen",
      desc: "+9 % Bewegung",
      color: "#92d9bd",
      price: 22,
      stats: { speed: 0.09 },
      benefits: "Direkte Bewegung",
    },
    {
      id: "lens",
      name: "Schiefe Linse",
      desc: "+8 % krit. Chance",
      color: "#ffd788",
      price: 25,
      stats: { crit: 0.08 },
      benefits: "Alle direkten Treffer · Nietenspucker-Mutation",
    },
    {
      id: "armor",
      name: "Kesseldeckel",
      desc: "+4 Rüstung",
      color: "#a9bcca",
      price: 26,
      stats: { armor: 4 },
      benefits: "Reduziert eingehenden Schaden",
    },
    {
      id: "magnet",
      name: "Taschenmagnet",
      desc: "+50 Sammelradius",
      color: "#a4e4dc",
      price: 20,
      stats: { pickup: 50 },
      benefits: "Erfahrung & Schrott",
    },
    {
      id: "moss",
      name: "Heilmoos",
      desc: "+0,8 Regeneration / Sek.",
      color: "#b1dc9b",
      price: 28,
      stats: { regen: 0.8 },
      benefits: "Heilt auch zwischen Angriffen",
    },
    {
      id: "fang",
      name: "Vampirzahn",
      desc: "+6 % Lebensraub",
      color: "#ff96af",
      price: 30,
      stats: { lifesteal: 0.06 },
      benefits: "Direkte Treffer heilen nach verursachtem Schaden",
    },
    {
      id: "wire",
      name: "Stacheldraht",
      desc: "+4 Blutung, stapelt bis 5",
      color: "#f6a6a6",
      price: 26,
      stats: { bleed: 4 },
      benefits: "Nahkampf & Projektile · Mondspalter-Mutation",
    },
    {
      id: "oil",
      name: "Geisteröl",
      desc: "+35 % Brandschaden",
      color: "#ffa479",
      price: 24,
      stats: { burn: 0.35 },
      benefits: "Glutkanne & Brandflächen",
    },
    {
      id: "ember",
      name: "Zündfunke",
      desc: "Brennende Gegner explodieren beim Tod und entzünden Nachbarn.",
      color: "#ffbd73",
      price: 42,
      stats: { burn: 0.1 },
      special: "explosion",
      benefits: "Glutkanne · 2 Kettengenerationen",
    },
    {
      id: "coil",
      name: "Kupferspule",
      desc: "+1 Blitzsprung",
      color: "#b9adff",
      price: 31,
      stats: { chain: 1 },
      benefits: "Wetterstab",
    },
    {
      id: "rubber",
      name: "Gummimond",
      desc: "+1 Abpraller",
      color: "#d3b0e4",
      price: 30,
      stats: { bounce: 1 },
      benefits: "Nietenspucker & Krawalltüte",
    },
    {
      id: "barrel",
      name: "Doppelboden",
      desc: "+1 Projektil, −8 % Schaden",
      color: "#e8d49e",
      price: 40,
      stats: { projectiles: 1, damage: -0.08 },
      benefits: "Nietenspucker & Krawalltüte",
    },
    {
      id: "pig",
      name: "Schrottschwein",
      desc: "+8 Schrott nach jeder Welle",
      color: "#d8b1c4",
      price: 24,
      stats: { economy: 8 },
      benefits: "Wirtschaft · stapelbare Wellenernte",
    },
    {
      id: "glass",
      name: "Glaskrone",
      desc: "+35 % Schaden, −12 max. Leben",
      color: "#a9eaf2",
      price: 30,
      stats: { damage: 0.35, hp: -12 },
      benefits: "Alle Waffen · riskant",
    },
    {
      id: "tool",
      name: "Werkzeugkeks",
      desc: "+25 % Technik",
      color: "#8dc5e9",
      price: 24,
      stats: { engineering: 0.25 },
      benefits: "Schraubenknecht",
    },
    {
      id: "repair",
      name: "Reparaturkäfer",
      desc: "In Geschütznähe: +2 Leben / Sek.",
      color: "#84d1c5",
      price: 32,
      stats: { engineering: 0.1 },
      special: "repair",
      benefits: "Stationäre Geschütze im Radius 100",
    },
    {
      id: "spring",
      name: "Sprungfeder",
      desc: "+35 % Rückstoß",
      color: "#c0dbba",
      price: 23,
      stats: { knockback: 0.35 },
      benefits: "Krawalltüte & Mondspalter",
    },
    {
      id: "clover",
      name: "Nachtklee",
      desc: "+15 % Glück: mehr Magnet- und Heilbeute",
      color: "#99d6a3",
      price: 20,
      stats: { luck: 0.15 },
      benefits: "Seltene Beute",
    },
    {
      id: "fury",
      name: "Letzter Funke",
      desc: "Unter 35 % Leben: +45 % Schaden.",
      color: "#f4a3ae",
      price: 32,
      stats: {},
      special: "fury",
      benefits: "Alle Waffen · riskant",
    },
  ],
  J = [
    {
      id: "builder",
      name: "Bodo Bolz",
      title: "Der Baustellenheld",
      desc: "Helm auf. Säge raus. Ein standfester Alleskönner für jede Nachtschicht.",
      color: "#e5b85c",
      stats: { hp: 15, armor: 2, damage: 0.05 },
      weapon: "saw",
      perk: "+15 Leben · +2 Rüstung · +5 % Schaden",
    },
    {
      id: "hood",
      name: "Nachtfalter",
      title: "Der flinke Schatten",
      desc: "Schnelle Schritte und ein Schwarm treuer Motten. Entkommt jeder brenzligen Lage.",
      color: "#baa8e1",
      stats: { hp: -5, speed: 0.15, ability: 0.3 },
      weapon: "summon",
      perk: "+15 % Bewegung · +30 % Fähigkeitskraft · −5 Leben",
    },
    {
      id: "golem",
      name: "Brocken",
      title: "Die lebende Mauer",
      desc: "Viel Stein, wenig Eile. Hält die Front und schlägt Schneisen in die Horde.",
      color: "#d38d6f",
      stats: { hp: 45, armor: 6, speed: -0.16, damage: 0.08 },
      weapon: "axe",
      perk: "+45 Leben · +6 Rüstung · +8 % Schaden · −16 % Bewegung",
    },
    {
      id: "zombie",
      name: "Moderich",
      title: "Der Unverwüstliche",
      desc: "Totgesagte überleben länger. Gift, Regeneration und Lebensraub halten ihn im Rennen.",
      color: "#c6c9a2",
      stats: { hp: 10, lifesteal: 0.06, regen: 1.1, speed: -0.04, damage: -0.08, poison: 0.2 },
      weapon: "poison",
      perk: "+10 Leben · +1,1 Regeneration · +6 % Lebensraub · +20 % Gift · −4 % Tempo · −8 % Schaden",
    },
    {
      id: "bandit",
      name: "Rotfuchs",
      title: "Der Schrottbandit",
      desc: "Schnelle Hände, scharfer Blick. Kritische Treffer und volle Taschen.",
      color: "#e6a279",
      stats: { hp: -8, crit: 0.15, economy: 4, speed: 0.07 },
      weapon: "pistol",
      perk: "+15 % Kritchance · +4 Ernte · +7 % Bewegung · −8 Leben",
    },
    {
      id: "robot",
      name: "K-80",
      title: "Der Nachtmonteur",
      desc: "Stählerne Nerven. Baut Geschütze und holt mit Überbrückung alles aus ihnen heraus.",
      color: "#a6c5df",
      stats: { hp: 5, engineering: 0.4, speed: -0.05, ability: 0.1 },
      weapon: "turret",
      perk: "+40 % Technik · +10 % Fähigkeitskraft · +5 Leben · −5 % Bewegung",
    },
  ],
  b = [
    { id: "root", name: "Nachtwache", desc: "Max. Leben", stat: "hp", value: 3, cost: 1, max: 3, x: 0, y: 0 },
    {
      id: "might",
      name: "Schlagkraft",
      desc: "Schaden",
      stat: "damage",
      value: 0.025,
      cost: 1,
      max: 3,
      x: -230,
      y: -130,
      parent: "root",
    },
    {
      id: "haste",
      name: "Schnelle Hände",
      desc: "Angriffstempo",
      stat: "attackSpeed",
      value: 0.025,
      cost: 1,
      max: 3,
      x: 0,
      y: -175,
      parent: "root",
    },
    {
      id: "wealth",
      name: "Altmetall",
      desc: "Ernte / Welle",
      stat: "economy",
      value: 2,
      cost: 1,
      max: 3,
      x: 230,
      y: -130,
      parent: "root",
    },
    {
      id: "vigor",
      name: "Zähes Gemüse",
      desc: "Max. Leben",
      stat: "hp",
      value: 4,
      cost: 2,
      max: 3,
      x: -310,
      y: -300,
      parent: "might",
    },
    {
      id: "crit",
      name: "Adlerauge",
      desc: "Krit. Chance",
      stat: "crit",
      value: 0.02,
      cost: 2,
      max: 3,
      x: -135,
      y: -330,
      parent: "might",
    },
    {
      id: "feet",
      name: "Leichtfüßig",
      desc: "Bewegung",
      stat: "speed",
      value: 0.025,
      cost: 2,
      max: 3,
      x: 45,
      y: -355,
      parent: "haste",
    },
    {
      id: "collect",
      name: "Lange Arme",
      desc: "Sammelradius",
      stat: "pickup",
      value: 15,
      cost: 2,
      max: 3,
      x: 220,
      y: -320,
      parent: "wealth",
    },
    {
      id: "tech",
      name: "Schraubenkopf",
      desc: "Technik",
      stat: "engineering",
      value: 0.07,
      cost: 2,
      max: 3,
      x: 380,
      y: -270,
      parent: "wealth",
    },
    {
      id: "armor",
      name: "Hartschale",
      desc: "Rüstung",
      stat: "armor",
      value: 1,
      cost: 3,
      max: 3,
      x: -330,
      y: -500,
      parent: "vigor",
    },
    {
      id: "leech",
      name: "Nachtzahn",
      desc: "Lebensraub",
      stat: "lifesteal",
      value: 0.015,
      cost: 3,
      max: 3,
      x: -155,
      y: -530,
      parent: "crit",
    },
    {
      id: "regen",
      name: "Frisches Grün",
      desc: "Regeneration / Sek.",
      stat: "regen",
      value: 0.25,
      cost: 3,
      max: 3,
      x: 20,
      y: -540,
      parent: "feet",
    },
    {
      id: "luck",
      name: "Glückspilz",
      desc: "Glück",
      stat: "luck",
      value: 0.05,
      cost: 3,
      max: 3,
      x: 195,
      y: -515,
      parent: "collect",
    },
    {
      id: "coil",
      name: "Hochspannung",
      desc: "Blitzsprünge",
      stat: "chain",
      value: 1,
      cost: 4,
      max: 1,
      x: 365,
      y: -470,
      parent: "tech",
    },
    {
      id: "crown",
      name: "Morgenstern",
      desc: "Schaden",
      stat: "damage",
      value: 0.1,
      cost: 5,
      max: 1,
      x: 0,
      y: -730,
      parent: "regen",
    },
  ],
  z = [
    { id: "swarm", name: "Krabbelkohl", color: "#b5becd", hp: 23, speed: 83, radius: 17, damage: 6, xp: 1 },
    { id: "brute", name: "Kesselbauch", color: "#c4a1a8", hp: 125, speed: 43, radius: 29, damage: 14, xp: 4 },
    { id: "charge", name: "Sturmrüpel", color: "#e0a27b", hp: 46, speed: 64, radius: 20, damage: 10, xp: 2 },
    { id: "ranged", name: "Spuckling", color: "#a7b6e0", hp: 35, speed: 61, radius: 18, damage: 8, xp: 2 },
    { id: "buffer", name: "Nachtkantor", color: "#c4a4e2", hp: 66, speed: 44, radius: 22, damage: 7, xp: 3 },
    {
      id: "splitter",
      name: "Doppelknopf",
      color: "#c6a8dc",
      hp: 67,
      speed: 58,
      radius: 24,
      damage: 9,
      xp: 3,
    },
    { id: "hazard", name: "Sumpfkoch", color: "#c0bd7a", hp: 68, speed: 49, radius: 22, damage: 8, xp: 3 },
    { id: "elite", name: "Rostritter", color: "#eb9cac", hp: 260, speed: 72, radius: 40, damage: 16, xp: 12 },
    {
      id: "boss",
      name: "Der Schrottkönig",
      color: "#dca978",
      hp: 7e3,
      speed: 36,
      radius: 84,
      damage: 22,
      xp: 100,
    },
  ],
  Wg = [
    { stat: "damage", amount: 0.15, name: "Härter zuschlagen", benefits: "Alle Waffen" },
    { stat: "attackSpeed", amount: 0.16, name: "Keine Pause", benefits: "Alle Waffen & Geschütze" },
    { stat: "hp", amount: 12, name: "Zweite Schale", benefits: "Überleben · heilt 12" },
    { stat: "crit", amount: 0.07, name: "Schwachstelle", benefits: "Alle direkten Treffer" },
    { stat: "speed", amount: 0.08, name: "Schnelle Sohlen", benefits: "Bewegung & Ausweichen" },
    { stat: "pickup", amount: 45, name: "Alles meins", benefits: "Erfahrung & Schrott" },
    { stat: "lifesteal", amount: 0.04, name: "Durstige Klinge", benefits: "Direkte Treffer aller Waffen" },
    { stat: "bleed", amount: 3, name: "Offene Wunde", benefits: "Mondspalter & Projektile" },
    { stat: "chain", amount: 1, name: "Übersprung", benefits: "Wetterstab" },
    { stat: "engineering", amount: 0.25, name: "Meisterstück", benefits: "Schraubenknecht" },
    { stat: "burn", amount: 0.3, name: "Feuer frei", benefits: "Glutkanne" },
    { stat: "economy", amount: 7, name: "Schrottdividende", benefits: "Ernte nach jeder Welle" },
  ],
  Lo =
    "Gleiche Werte addieren sich. Tempo und Schaden skalieren multiplikativ mit der Basis. Rüstung: Schaden × 100 / (100 + 5 × Rüstung). Kritisch: ×2. Lebensraub nur auf direkte Treffer (max. 4 LP pro Treffer). Blutung: max. 5 Stapel, 3 Sek.; Feuer erneuert 2 Sek. Brandschaden. Abpraller: max. 5, Blitzsprünge: max. 12, Projektile: max. 12. Explosionsketten: max. 2 Generationen, max. 90 ausgelöste Treffer pro Simulationsschritt. Statuseffekte lösen keinen Lebensraub, keine Krits und keine Blutung aus. Mehrere Flammenflächen stapeln ihren Bodenschaden nicht. Spieltempo und Kameraimpulse sind unabhängig voneinander.";
j.push(
  {
    id: "poison",
    name: "Seuchenspritze",
    tag: "Gift · Infektion",
    desc: "Giftspritzen infizieren Ziele für 4 Sek. Beim Tod springt die Infektion auf zwei Nachbarn über. Maximal zwei Generationen.",
    damage: 8,
    cooldown: 0.65,
    range: 410,
    color: "#b8e37c",
    price: 32,
    kind: "poison",
  },
  {
    id: "summon",
    name: "Mottenlaterne",
    tag: "Beschwörung · Begleiter",
    desc: "Nur Motten kreisen sichtbar um dich. Stufen I–IV: 2/3/4/6 Tiere, mehr Schaden. Reichweite vergrößert Orbit und Jagdradius.",
    damage: 15,
    cooldown: 1,
    range: 380,
    color: "#f8d995",
    price: 38,
    kind: "summon",
  },
  {
    id: "saw",
    name: "Kreissäge",
    tag: "Wurf · Zielsuchend",
    desc: "Wirft ein reines Sägeblatt und fängt es wieder. Stufen I–IV: 1/2/3/3 Blätter, 1/2/3/4 Kettenziele. Reichweite verlängert den Flug.",
    damage: 22,
    cooldown: 0.65,
    range: 380,
    color: "#e8be7b",
    price: 32,
    kind: "saw",
  },
  {
    id: "laser",
    name: "Sternenlanze",
    tag: "Präzision · Durchschlag",
    desc: "Ein gebündelter Lichtstrahl durchschlägt alle Ziele auf seiner sichtbaren Bahn.",
    damage: 42,
    cooldown: 1.5,
    range: 610,
    color: "#9ce9ef",
    price: 40,
    kind: "laser",
  },
  {
    id: "frost",
    name: "Frostglocke",
    tag: "Frost · Kontrolle",
    desc: "Ein ringförmiger Klang trifft nahe Gegner und verlangsamt sie für 2 Sek. um 40 %.",
    damage: 18,
    cooldown: 1.8,
    range: 220,
    color: "#b6d9ff",
    price: 34,
    kind: "frost",
  },
  {
    id: "boomerang",
    name: "Mondsichel",
    tag: "Wurf · Rückkehr",
    desc: "Fliegt im Bogen zum Ziel und zurück. Stufen I–IV: 1/2/3/3 Sicheln mit 1/2/3/4 Kettenzielen. Reichweite verlängert den Flug.",
    damage: 20,
    cooldown: 1.15,
    range: 430,
    color: "#dcc0f8",
    price: 36,
    kind: "boomerang",
  },
  {
    id: "fork",
    name: "Lichtgabel",
    tag: "Lichtblitz · Überladung",
    desc: "Lädt sich zwischen den Gabelzinken auf und schießt einen Lichtblitz ins nächste Ziel; der Einschlag springt auf Nahe über. Jeder dritte Schuss ist überladen: größerer Einschlag und lähmt Gegner kurz.",
    damage: 19,
    cooldown: 0.95,
    range: 470,
    color: "#7fe9ff",
    price: 36,
    kind: "fork",
  },
);
_.push(
  {
    id: "phase",
    name: "Phasensohlen",
    desc: "+1 Sprintladung (max. 3), +20 % Sprint-Aufladung",
    color: "#8ee5dc",
    price: 42,
    stats: { dash: 0.2 },
    special: "charges",
    benefits: "Ausweichsprint · stapelbar bis 3 Ladungen",
  },
  {
    id: "core",
    name: "Herzfunke",
    desc: "+25 % Fähigkeitskraft und schnellere Aufladung",
    color: "#ffd59c",
    price: 32,
    stats: { ability: 0.25 },
    benefits: "Deine aktive Charakterfähigkeit",
  },
  {
    id: "spore",
    name: "Sporenprobe",
    desc: "+35 % Giftschaden",
    color: "#b2e37c",
    price: 26,
    stats: { poison: 0.35 },
    benefits: "Seuchenspritze & Infektionsketten",
  },
  {
    id: "moth",
    name: "Mondstaub",
    desc: "+15 % Schaden, +12 % Bewegung",
    color: "#d4bcf7",
    price: 36,
    stats: { damage: 0.15, speed: 0.12 },
    benefits: "Alle Waffen & Motten",
  },
);
Wg.push(
  { stat: "poison", amount: 0.3, name: "Ansteckend gut", benefits: "Seuchenspritze & Infektionen" },
  { stat: "dash", amount: 0.25, name: "Durch die Lücke", benefits: "25 % schnellere Sprint-Aufladung" },
  {
    stat: "ability",
    amount: 0.25,
    name: "Erwachter Kern",
    benefits: "Mehr Kraft & kürzere Abklingzeit deiner aktiven Fähigkeit",
  },
);
z.push(
  { id: "furnace", name: "Ofenherz", color: "#ed9b6c", hp: 7900, speed: 22, radius: 86, damage: 24, xp: 100 },
  {
    id: "moonmother",
    name: "Die Mondmutter",
    color: "#cbb6ef",
    hp: 6800,
    speed: 46,
    radius: 82,
    damage: 20,
    xp: 100,
  },
);
z.push({
  id: "zero",
  name: "Nullpunkt",
  color: "#abd7f1",
  hp: 7350,
  speed: 39,
  radius: 84,
  damage: 22,
  xp: 100,
});
b.push(
  {
    id: "dash",
    name: "Phasenschritt",
    desc: "Sprint-Aufladung",
    stat: "dash",
    value: 0.1,
    cost: 2,
    max: 3,
    x: -465,
    y: -320,
    parent: "might",
  },
  {
    id: "spark",
    name: "Kernflamme",
    desc: "Fähigkeitskraft",
    stat: "ability",
    value: 0.1,
    cost: 2,
    max: 3,
    x: 485,
    y: -390,
    parent: "tech",
  },
);
const IA = [
    {
      id: "scrap",
      name: "Rosthof",
      subtitle: "ASPHALT. STAHL. SCHLECHTE AUSSICHTEN.",
      desc: "Warmer Schrottplatz mit gebrochenem Ockerpflaster, hohen Materialkisten als Deckung und rot angekündigten Dampfventilen.",
      boss: 8,
      color: "#f1ad72",
      floor: ["#333337", "#4b4240", "#171a20"],
      mechanic: "Deckung & rote Dampfventile",
    },
    {
      id: "forge",
      name: "Versunkenes Pumpwerk",
      subtitle: "DIE NACHT HAT EINEN HOCHOFEN",
      desc: "Ein überflutetes Pumpwerk aus dunklem Schiefer, Kobalt-Pfützen, erhöhten Drucktanks und roten Druckentladungen.",
      boss: 9,
      color: "#edac7d",
      floor: ["#3c3033", "#4a3a36", "#2e2930"],
      mechanic: "Druckventile · rote Vorwarnung",
    },
    {
      id: "moon",
      name: "Mondkathedrale",
      subtitle: "DAS MONDLICHT HAT ZÄHNE.",
      desc: "Zersprungener Marmor, silberne Intarsien und kaltes Mondlicht. Wandernde Mondblüten öffnen alle 10 Sek. eine heilende Zone. Bezwinge die Mondmutter.",
      boss: 10,
      color: "#c8b2ed",
      floor: ["#292f45", "#363c50", "#242b3d"],
      mechanic: "Mondblüten · heilen 4 LP / Sek.",
    },
    {
      id: "frost",
      name: "Kupfersternwarte",
      subtitle: "HIER ERFRIERT SOGAR DER LÄRM.",
      desc: "Kupferne Sternwarte mit staubvioletten Keramikplatten, erhöhten Geräten und roten Störfeldern. Sprint durchbricht ihre Verlangsamung. Endgegner: Nullpunkt.",
      boss: 11,
      color: "#9bcff5",
      floor: ["#52677b", "#7590a4", "#1f2e40"],
      mechanic: "Rote Störfelder · Sprint kontert",
    },
    {
      id: "wiese",
      name: "Nachtwiese",
      subtitle: "GRAS, MATSCH UND NIEMAND HÖRT DICH.",
      desc: "Offene Wiese hinter dem Hof: weiches Gras, Trampelpfade und Wildblumen. Moosige Findlinge sind die einzige Deckung. Endgegner: Der Schrottkönig.",
      boss: 8,
      color: "#b6cf72",
      floor: ["#4d5a2c", "#6f7d3d", "#1d2414"],
      mechanic: "Offenes Feld · Findlinge als Deckung",
    },
    {
      id: "erde",
      name: "Erzgrube",
      subtitle: "STAUB, GLEISE UND ALTE MAUERN.",
      desc: "Aufgelassene Erzgrube am Minenschacht: festgefahrene Erde, ein Stück Grubengleis, Felsplateaus und eingestürzte Mauern. Plateaus versperren den Weg, Felsen und Mauern schlucken Schüsse. Endgegner: Ofenherz.",
      boss: 9,
      color: "#e2b27a",
      floor: ["#8a6440", "#a87a4e", "#3a2a1c"],
      mechanic: "Felsplateaus · Mauern als Deckung",
    },
  ],
  yo = [
    { name: "Sturmläufer", color: "#f0b07c", sigil: "➤" },
    { name: "Artillerist", color: "#d8a6f1", sigil: "✦" },
    { name: "Wildwuchs", color: "#a4da9a", sigil: "✚" },
    { name: "Eisenhaut", color: "#a2d3ed", sigil: "⬡" },
    { name: "Phasenspringer", color: "#f3d78e", sigil: "◈" },
  ],
  CA = [
    {
      name: "Abrissbirne",
      desc: "Eine Abrissbirne kreist einmal um Bodo (60 Schaden, gewaltiger Rückstoß) und kracht dann als Beben vor ihm in den Boden (45 Flächenschaden). Heilt 10.",
      cooldown: 15,
      color: "#ffba79",
      power: 3,
    },
    {
      name: "Mondfinsternis",
      desc: "4 Sek. Finsternis-Kuppel: Gegner darin stark verlangsamt und geschwächt, 14 Schaden/Sek.; am Ende zerplatzt der Mond (55 Schaden). 1,5 Sek. Schutz, Sprint und Motten sofort bereit.",
      cooldown: 18,
      color: "#bea8e8",
      power: 3.6,
    },
    {
      name: "Meteorfaust",
      desc: "Brocken ruft fünf Felsbrocken auf die dichtesten Gegnergruppen: je 95 Schaden, Betäubung und Krater. 1 Sek. Schutz.",
      cooldown: 20,
      color: "#edaa7d",
      power: 4,
    },
    {
      name: "Seuchenwoge",
      desc: "Eine Giftwelle rollt 340 weit: starkes Gift auf allen Getroffenen, danach 5 Sek. Seuchenfeld. Jeder vergiftete Gegner heilt Moderich.",
      cooldown: 17,
      color: "#b9d36a",
      power: 3.4,
    },
    {
      name: "Kugelhagel",
      desc: "2 Sek. Revolver-Fächern: 36 gezielte Schüsse auf die nächsten Gegner (kritfähig), Waffen sofort bereit, 0,8 Sek. Schutz.",
      cooldown: 14,
      color: "#edc384",
      power: 2.8,
    },
    {
      name: "Orbitalschlag",
      desc: "Markiert die dichteste Gruppe; nach kurzer Warnung brennt ein Orbitalstrahl 2,4 Sek. lang und folgt den Gegnern. Geschütze 7 Sek. übertaktet, 15 % Reparatur.",
      cooldown: 22,
      color: "#a3e7ec",
      power: 4.6,
    },
  ],
  dg = {
    fork: [
      {
        name: "Gabelsturm",
        desc: "Jeder Blitz gabelt sich am Ziel in zwei weitere Blitze (je 60 % Schaden).",
      },
      { name: "Überspannung", desc: "Jeder Schuss ist überladen. Dafür lädt die Gabel 25 % langsamer." },
    ],
    pistol: [
      { name: "Dornsalve", desc: "+2 Projektile pro Schuss. Aus Nieten wird eine Stachelsalve." },
      { name: "Irrläufer", desc: "+2 zusätzliche Abpraller. Der Schuss sucht sich eine neue Bahn." },
    ],
    axe: [
      { name: "Blutmond", desc: "Vollständiger Rundumschlag und +45 Reichweite." },
      { name: "Schlächter", desc: "Jeder Hieb verursacht starke, erneuerbare Blutung." },
    ],
    turret: [
      {
        name: "Wanderknecht",
        desc: "Standfestes Geschütz: 24 statt 18 Sek. Laufzeit. Nach dem Zerbrechen folgt ein neues.",
      },
      {
        name: "Belagerer",
        desc: "Stationäre Kanone: +100 % Schaden, 550 Reichweite, langsamerer Feuertakt.",
      },
    ],
  };
Wg.push({
  stat: "range",
  amount: 0.15,
  name: "Reichweite",
  benefits: "+15 % Reichweite · alle Waffen, Würfe & Mottenorbit · Nahkampf-Hiebe 1,6-fach (bis 340)",
});
_.push({
  id: "scope",
  name: "Weitblick-Linse",
  desc: "+20 % Reichweite für alle Waffen, Wurfklingen und den Mottenorbit.",
  color: "#e5c789",
  price: 30,
  stats: { range: 0.2 },
  benefits: "Alle Waffen · sichtbare Flug- und Angriffsreichweite",
});
const F = "#0c101a";
class X {
  constructor(A) {
    this.c = A;
  }
  c;
  grad(A, g, B = -30, E = 65) {
    const o = this.c.createLinearGradient(-15, B, 25, B + E);
    return o.addColorStop(0, A), o.addColorStop(1, g), o;
  }
  shape(A, g, B = F, E = 2.5) {
    const o = new Path2D(A);
    (this.c.fillStyle = g),
      this.c.fill(o),
      E && ((this.c.strokeStyle = B), (this.c.lineWidth = E), (this.c.lineJoin = "round"), this.c.stroke(o));
  }
  rect(A, g, B, E, o, i, I = F, C = 2.5) {
    this.c.beginPath(),
      this.c.roundRect(A, g, B, E, o),
      (this.c.fillStyle = i),
      this.c.fill(),
      C && ((this.c.strokeStyle = I), (this.c.lineWidth = C), this.c.stroke());
  }
  ellipse(A, g, B, E, o, i = F, I = 2.5) {
    this.c.beginPath(),
      this.c.ellipse(A, g, Math.max(0.1, B), Math.max(0.1, E), 0, 0, Math.PI * 2),
      (this.c.fillStyle = o),
      this.c.fill(),
      I && ((this.c.strokeStyle = i), (this.c.lineWidth = I), this.c.stroke());
  }
  line(A, g, B, E, o, i = 2) {
    this.c.beginPath(),
      this.c.moveTo(A, g),
      this.c.lineTo(B, E),
      (this.c.strokeStyle = o),
      (this.c.lineWidth = i),
      (this.c.lineCap = "round"),
      this.c.stroke();
  }
  bolt(A, g, B = 2) {
    this.ellipse(A, g, B, B, "#d9d7b4", F, 0.8), this.line(A - B * 0.6, g, A + B * 0.6, g, "#667571", 0.7);
  }
  eye(A, g, B = "#f4dfb1", E = !1, o = !1, i = 3) {
    if (o) {
      this.line(A - i, g, A + i, g, F, 2);
      return;
    }
    this.ellipse(A, g, i, i * 1.3, F, F, 0),
      this.ellipse(A + 0.2, g - 0.6, i * 0.52, i * 0.7, B, F, 0),
      this.ellipse(A - 0.4, g - 1.3, i * 0.24, i * 0.3, "#ffffff", F, 0),
      E && this.line(A - i * 1.4, g - i * 1.8, A + i * 0.8, g - i * 0.8, F, 2.5);
  }
}
class No {
  cache = new Map();
  thumbs = new Map();
  make(A, g, B, E, o, i = g / 2, I = B / 2) {
    let C = this.cache.get(A);
    if (C) return C;
    const Q = document.createElement("canvas");
    (Q.width = Math.ceil(g * E)), (Q.height = Math.ceil(B * E));
    const a = Q.getContext("2d");
    (a.imageSmoothingEnabled = !0),
      (a.imageSmoothingQuality = "high"),
      a.scale(E, E),
      a.translate(i, I),
      o(new X(a)),
      a.save(),
      (a.globalCompositeOperation = "source-atop");
    const t = a.createLinearGradient(-g * 0.35, -B * 0.48, g * 0.4, B * 0.5);
    if (
      (t.addColorStop(0, "#e4eeff20"),
      t.addColorStop(0.32, "#ffffff00"),
      t.addColorStop(1, "#03051025"),
      (a.fillStyle = t),
      a.fillRect(-i, -I, g, B),
      A.startsWith("weapon") || A.startsWith("mob7") || A.startsWith("hero1"))
    ) {
      (a.strokeStyle = "#ecf5ff0a"), (a.lineWidth = 0.4);
      for (let h = 0; h < 24; h++) {
        const s = -B * 0.4 + (h * B) / 28;
        a.beginPath(), a.moveTo(-g * 0.4, s), a.lineTo(g * 0.4, s - 2), a.stroke();
      }
    }
    return (
      A.endsWith(":true") && ((a.fillStyle = "#fff3df"), (a.globalAlpha = 0.9), a.fillRect(-i, -I, g, B)),
      a.restore(),
      (C = { canvas: Q, w: g, h: B, ox: i, oy: I }),
      this.cache.set(A, C),
      C
    );
  }
  image(A, g, B = 0, E = 0) {
    A.drawImage(g.canvas, B - g.ox, E - g.oy, g.w, g.h);
  }
  hasPainted(A) {
    return Z.has(A);
  }
  paintedSprite(A, g, B, E = !1, o = 0, i = g / 2, I = B / 2) {
    const C = Z.get(A);
    if (C)
      return this.make(
        `painted:${A}:${o}:${E}`,
        g,
        B,
        A.startsWith("enemy-") ? 1.7 : A.startsWith("hero-") ? 4 : 2.5,
        (Q) => {
          const a = Math.min((g - 4) / C.width, (B - 4) / C.height),
            t = C.width * a,
            h = C.height * a,
            s = Q.c;
          if ((s.save(), A.startsWith("enemy-"))) {
            const U = Number(A.slice(6)),
              M = (o * Math.PI) / 2,
              r = [0.04, 0.012, 0.045, 0.02, 0.035, 0.025, 0.03, 0.012, 0.012, 0.008, 0.04, 0.025][U];
            s.translate(0, Math.sin(M) * (U === 4 || U === 10 ? 2 : 1)),
              s.rotate(Math.sin(M) * r),
              s.scale(1 + Math.cos(M) * 0.018, 1 - Math.cos(M) * 0.018);
          }
          s.drawImage(C, -i + (g - t) / 2, -I + (B - h) / 2, t, h), s.restore();
        },
        i,
        I,
      );
  }
  heroSource(A, g = !1, B = !1, E = 0) {
    const o = Z.get(`hero-${A}`),
      i = Z.get(`hero-atlas-${A}`);
    if (!o || !i) return;
    const I = Math.max(0, Math.min(8, Math.floor(E)));
    if (!I && !B) return o;
    const C = $A[A].cell,
      Q = `hero-frame-v2:${A}:${I}:${B}`,
      a = this.cache.get(Q);
    if (a) return a.canvas;
    const t = document.createElement("canvas");
    t.width = t.height = C;
    const h = t.getContext("2d");
    return (
      (h.imageSmoothingEnabled = !0),
      (h.imageSmoothingQuality = "high"),
      h.drawImage(i, (I % 3) * C, Math.floor(I / 3) * C, C, C, 0, 0, C, C),
      B && ((h.globalCompositeOperation = "source-in"), (h.fillStyle = "#fff3df"), h.fillRect(0, 0, C, C)),
      this.cache.set(Q, { canvas: t, w: C, h: C, ox: C / 2, oy: C / 2 }),
      t
    );
  }
  sawFrame(A) {
    const g = ((Math.floor(A * 32) % 32) + 32) % 32;
    return this.make("saw-disc-stage7:" + g, 104, 104, 2.5, (B) => {
      const E = B.c,
        o = Z.get("weapon-saw");
      o &&
        ((E.imageSmoothingEnabled = !0),
        (E.imageSmoothingQuality = "high"),
        E.rotate((g / 32) * Math.PI * 2),
        E.drawImage(o, -46, -46, 92, 92));
    });
  }
  turretBase() {
    return this.make(
      "turret-base-v5",
      88,
      70,
      2,
      (A) => {
        A.ellipse(0, 18, 35, 13, "#080b1377", F, 0),
          A.rect(-31, 1, 62, 20, 8, A.grad("#897964", "#3d3d43"), F, 3),
          A.ellipse(0, 1, 31, 16, "#a59a85", F, 3),
          A.ellipse(0, 0, 23, 10, "#3f464c", F, 2);
        for (const g of [-24, 24]) for (const B of [2, 15]) A.bolt(g, B, 2);
        A.line(-24, 19, 24, 19, "#1f252c", 3);
      },
      44,
      41,
    );
  }
  turretHead(A) {
    return this.make(
      "turret-head-v5:" + A,
      126,
      126,
      2,
      (g) => {
        const B = g.c,
          E = (A * Math.PI) / 8;
        B.save(),
          B.rotate(E),
          Math.cos(E) < -0.08 && B.scale(1, -1),
          g.rect(-7, -8, 52, 16, 5, g.grad("#b2bec1", "#556574"), F, 3),
          g.rect(35, -10, 12, 20, 3, "#788e9d", F, 3),
          g.line(40, -6, 40, 6, "#e7e1c3", 2),
          g.rect(46, -6, 5, 12, 2, "#1a2832", F, 1),
          B.restore(),
          g.ellipse(0, 0, 22, 22, g.grad("#9ca3a1", "#4c5c67"), F, 3),
          g.ellipse(0, 0, 12, 12, "#b2a481", F, 2),
          g.ellipse(0, 0, 6, 6, "#efe3a2", F, 1);
        for (let o = 0; o < 4; o++)
          g.bolt(Math.cos((o * Math.PI) / 2) * 17, Math.sin((o * Math.PI) / 2) * 17, 1.8);
      },
      63,
      63,
    );
  }
  warm() {
    for (let A = 0; A < J.length; A++) {
      this.player(A);
      for (let g = 0; g < 9; g++) this.heroSource(A, !1, !1, g), this.heroSource(A, !1, !0, g);
    }
    for (let A = 0; A < 32; A++) this.sawFrame(A / 32);
    this.turretBase();
    for (let A = 0; A < 16; A++) this.turretHead(A);
    for (const A of j) this.weapon(A.id);
    for (let A = 0; A < z.length; A++)
      for (let g = 0; g < 4; g++) this.enemy(A, 0, g, !1), this.enemy(A, 0, g, !0);
    for (let A = 1; A < 5; A++) for (let g = 0; g < 4; g++) this.enemy(7, A, g, !1);
  }
  player(A) {
    const g = this.paintedSprite("hero-" + A, 78, 104, !1, 0, 39, 70);
    return (
      g ||
      this.make(
        "hero" + A,
        90,
        112,
        4.5,
        (B) => {
          const E = B.grad.bind(B);
          if (A === 0)
            B.shape("M-16-21Q-29-40-18-50Q-7-52-6-25Z", E("#e8d1a9", "#b4815f")),
              B.shape("M-3-27Q-5-57 12-55Q27-47 10-26Z", E("#f3dcc0", "#aa735b")),
              B.line(-14, -44, -8, -29, "#fff1d2", 1.5),
              B.line(10, -49, 3, -28, "#fff1d2", 1.5),
              B.rect(-21, -5, 44, 35, 13, E("#636c83", "#343e59")),
              B.shape(
                "M-27-14Q-25-38 0-35Q27-32 27-12L22 10Q10 26-10 22Q-28 16-27-14Z",
                E("#f1dec3", "#c29878"),
              ),
              B.shape("M-23-17Q-22-32-4-33L-13-23-15-4Q-23 1-23-17Z", "#fff1d9", F, 0),
              B.shape("M-22 11Q2 22 25 10L20 23Q2 32-18 23Z", E("#f1ad74", "#a45d48")),
              B.shape("M14 21L33 29 22 33 9 25Z", "#c67d50"),
              B.ellipse(-19, 5, 4, 2.5, "#c583a4", F, 0),
              B.ellipse(18, 6, 4, 2.5, "#c583a4", F, 0),
              B.line(-1, 12, 5, 11, F, 1.8),
              B.line(-18, 29, -16, 37, "#9eacc2", 1.2),
              B.line(18, 28, 17, 37, "#9eacc2", 1.2),
              B.rect(-25, 16, 9, 13, 3, B.grad("#8793a9", "#3d4c67"), F, 1.3),
              B.line(-23, 18, -18, 18, "#d1dced", 0.8),
              B.rect(-14, 26, 29, 6, 2, E("#b99d6d", "#7f684f")),
              B.rect(-3, 25, 9, 8, 2, "#d8c38f", F, 1.5),
              B.bolt(-15, -12),
              B.line(-10, -19, -8, -16, "#9571ad", 1.4);
          else if (A === 1) {
            B.rect(-25, -17, 50, 46, 13, E("#a0adbf", "#48566f")),
              B.rect(-30, -11, 12, 29, 5, E("#d3a377", "#916649")),
              B.rect(20, -12, 13, 29, 5, E("#cf9b71", "#8c604d")),
              B.rect(-25, -32, 50, 39, 11, E("#d8e4ef", "#788da6")),
              B.rect(-21, -27, 42, 10, 4, "#f1f6fa", F, 0),
              B.rect(-20, -17, 40, 18, 7, E("#25334a", "#121c30")),
              B.line(-9, -33, -9, -45, F, 3),
              B.ellipse(-9, -47, 5, 5, "#f0bb77", F, 2),
              B.rect(-13, 12, 26, 14, 4, E("#d0b183", "#8c7057"));
            for (let o = 0; o < 3; o++) B.line(-7 + o * 7, 15, -7 + o * 7, 23, "#45565a", 2);
            B.bolt(-21, -22),
              B.bolt(21, -22),
              B.bolt(-23, 21),
              B.bolt(23, 21),
              B.rect(-4, 3, 8, 5, 2, "#e9bc83", F, 1),
              B.line(24, -9, 30, -3, "#f3ce94", 1.5),
              B.rect(-18, -25, 9, 3, 1, "#f9fdff", F, 0),
              B.line(-25, 7, -25, 19, "#dfe8f2", 1.1),
              B.line(25, 7, 25, 19, "#dfe8f2", 1.1),
              B.rect(-7, 16, 14, 2, 1, "#253a55", F, 0);
          } else
            B.rect(-18, -4, 36, 34, 13, E("#f4dfb6", "#bc927a")),
              B.shape("M-31-12Q-29-37-9-42Q10-50 28-28L34-13Q8-2-31-12Z", E("#ffb17d", "#c45e65")),
              B.shape("M-26-17Q-22-33-9-36L-14-21Z", "#ffd3a4", F, 0),
              B.ellipse(-8, -30, 7, 5, "#fff0c9", F, 1),
              B.ellipse(14, -22, 6, 4, "#ffe9bd", F, 1),
              B.ellipse(24, -13, 3, 2, "#ffe9bd", F, 0),
              B.shape("M-20 10Q0 20 22 9L18 23Q1 28-17 22Z", E("#7c7a91", "#3d4059")),
              B.shape("M-12 22L-25 34-14 31-5 23Z", "#bc705f"),
              B.rect(-14, 27, 30, 7, 3, E("#8d7c74", "#514c58")),
              B.ellipse(2, 28, 4, 5, "#f5b875", F, 1.5),
              B.line(-1, 14, 5, 14, F, 1.5),
              B.line(-17, 19, -13, 25, "#ead5ba", 1),
              B.line(18, 18, 14, 25, "#ead5ba", 1),
              B.rect(-6, 21, 12, 7, 2, "#a7afbf", F, 1),
              B.line(-3, 24, 3, 24, "#f9cf8b", 1);
        },
        45,
        65,
      )
    );
  }
  forkFrame(A) {
    const g = Z.get("weapon-fork-frames");
    if (!g) return this.weapon("fork");
    const B = Math.max(0, Math.min(5, A | 0)),
      E = g.width / 6,
      o = g.height;
    return this.make(
      `fork-frame:${B}`,
      104,
      88,
      2.5,
      (i) => {
        const I = Math.min(100 / E, 84 / o),
          C = E * I,
          Q = o * I;
        i.c.drawImage(g, B * E, 0, E, o, -C / 2, -Q / 2, C, Q);
      },
      52,
      44,
    );
  }
  weapon(A) {
    if (A === "turret")
      return (
        this.paintedSprite("weapon-turret", 86, 78),
        this.make(
          "weapon-turret-v5",
          86,
          78,
          2,
          (B) => {
            this.image(B.c, this.turretBase(), 0, 10), this.image(B.c, this.turretHead(14), 0, -3);
          },
          43,
          39,
        )
      );
    const g = this.paintedSprite("weapon-" + A, 104, 88);
    return (
      g ||
      this.make(
        "weapon" + A,
        104,
        86,
        2.5,
        (B) => {
          const E = B.grad("#edf2da", "#7899a2", -20, 45),
            o = B.grad("#778c9a", "#344657", -15, 35),
            i = B.grad("#c79b70", "#70564d", -10, 45),
            I = B.grad("#ffe2a3", "#b68157", -20, 45),
            C = B.grad("#e6cbfc", "#8a74bb", -25, 50);
          if (A === "pistol")
            B.rect(-14, 1, 15, 23, 4, i),
              B.rect(-19, -12, 38, 21, 6, I),
              B.rect(9, -11, 29, 13, 3, E),
              B.rect(30, -10, 10, 12, 2, o),
              B.rect(-9, -18, 15, 6, 2, o),
              B.rect(-16, -8, 17, 6, 2, "#f7d7a0", F, 0),
              B.bolt(-10, -2),
              B.line(18, -8, 28, -8, "#f7f8dd", 1.5),
              B.rect(-12, 13, 8, 3, 1, "#4a5357", F, 0);
          else if (A === "shotgun") {
            B.shape("M-34-5L-15-10-6 0-15 12-31 13Z", i),
              B.rect(-15, -12, 38, 23, 5, I),
              B.rect(6, -17, 36, 12, 3, E),
              B.rect(6, -2, 36, 12, 3, E),
              B.rect(35, -16, 9, 10, 2, o),
              B.rect(35, -1, 9, 10, 2, o),
              B.rect(-6, 10, 12, 16, 3, i),
              B.rect(-6, -10, 18, 9, 3, "#cf9d6d", F, 1);
            for (let Q = 0; Q < 3; Q++) B.line(-2 + Q * 5, -8, -2 + Q * 5, -3, "#6d6258", 1.5);
            B.bolt(18, 5);
          } else if (A === "axe")
            B.rect(-36, -3, 68, 7, 3, i),
              B.line(-30, -2, -25, 3, "#e9bd8c", 1.5),
              B.line(-23, -2, -18, 3, "#e9bd8c", 1.5),
              B.shape("M12-5L7-30Q26-39 44-13L38 13 23 9 19-4Z", E),
              B.shape("M15-28Q30-28 39-13L36 0Q34-18 15-20Z", "#f5f5dc", F, 0),
              B.rect(19, -8, 12, 17, 3, I),
              B.bolt(25, 0),
              B.line(9, -29, 15, -15, "#7e979c", 1.5);
          else if (A === "lightning") {
            B.rect(-37, -4, 65, 8, 4, i);
            for (let Q = 0; Q < 4; Q++) B.rect(-17 + Q * 7, -6, 3, 12, 1, I, F, 1);
            B.shape("M19-8L17-22 28-28 42-15 42 13 28 24 18 12Z", o),
              B.shape("M25-17L34-17 28-2 36-2 23 17 26 3 20 3Z", C, F, 1.5),
              B.line(21, -20, 26, -24, "#eff3dd", 2),
              B.ellipse(31, -5, 3, 5, "#efdefc", F, 0);
          } else if (A === "flame")
            B.rect(-27, -18, 21, 35, 7, I),
              B.rect(-19, -17, 5, 31, 2, "#f2d4a2", F, 0),
              B.rect(-10, -9, 36, 21, 5, i),
              B.rect(15, -7, 25, 13, 3, E),
              B.rect(33, -10, 9, 18, 3, o),
              B.rect(-4, 10, 11, 16, 3, i),
              B.line(-23, 11, -9, 17, "#444d57", 5),
              B.ellipse(-17, -4, 5, 7, "#e4926d", F, 1.5),
              B.line(-23, -22, -12, -22, F, 3),
              B.ellipse(37, -1, 2, 4, "#ffcd8d", F, 0);
          else if (A === "turret") {
            B.rect(-24, 6, 47, 19, 8, o), B.rect(-21, 11, 40, 7, 3, "#243e49", F, 0);
            for (let Q = 0; Q < 5; Q++) B.bolt(-15 + Q * 8, 15, 2.8);
            B.ellipse(0, 0, 23, 17, E),
              B.rect(-13, -14, 31, 21, 6, B.grad("#afe7df", "#568691")),
              B.rect(11, -12, 31, 13, 3, o),
              B.rect(32, -13, 10, 15, 3, E),
              B.rect(0, -21, 9, 7, 3, I),
              B.ellipse(-14, -2, 4, 4, "#9febd4", F, 1.5),
              B.bolt(1, -6),
              B.line(-22, -8, -29, -19, F, 3),
              B.ellipse(-30, -21, 3, 3, "#ebc783", F, 1);
          } else if (A === "poison")
            B.rect(-21, -11, 43, 23, 6, o),
              B.rect(-17, -9, 22, 18, 5, B.grad("#def89c", "#79a76d")),
              B.line(-10, -7, -10, 5, "#effcc7", 2),
              B.rect(17, -5, 23, 9, 2, E),
              B.shape("M37-1L47-1 40 3Z", "#ecf3d2", F, 1),
              B.rect(-18, 10, 13, 16, 3, i),
              B.ellipse(-7, 0, 4, 4, "#a9d783", F, 1),
              B.line(-26, -5, -26, 5, "#d2e4ba", 5),
              B.line(-30, 0, -21, 0, "#a3b7ac", 4);
          else if (A === "summon")
            B.shape("M-15-22Q-18-36 0-36Q17-36 15-22", I),
              B.rect(-21, -23, 42, 48, 8, o),
              B.rect(-16, -17, 32, 35, 5, B.grad("#f9dd91", "#b58865")),
              B.shape("M-12 13L-12-13 12-13 12 13Z", "#f6db9f", F, 1),
              B.ellipse(0, -1, 6, 11, "#fff0bf", F, 1),
              B.ellipse(-6, -2, 6, 4, "#edc6f7", F, 1),
              B.ellipse(6, -2, 6, 4, "#edc6f7", F, 1),
              B.rect(-24, 21, 48, 7, 3, I),
              B.line(-18, -20, -18, 19, "#f2c888", 2),
              B.line(17, -20, 17, 19, "#f2c888", 2);
          else if (A === "saw") {
            B.rect(-31, -3, 26, 17, 4, i);
            const Q = B.c;
            Q.save(), Q.translate(10, 0);
            for (let a = 0; a < 12; a++) Q.rotate(Math.PI / 6), B.shape("M18-5L31-8 27 3 17 6Z", E);
            B.ellipse(0, 0, 23, 23, E),
              B.ellipse(0, 0, 14, 14, o),
              B.ellipse(0, 0, 8, 8, I),
              B.bolt(0, 0),
              Q.restore();
          } else if (A === "laser") {
            B.rect(-30, -8, 26, 19, 5, o),
              B.rect(-16, -16, 44, 30, 6, E),
              B.rect(-10, -12, 27, 21, 4, B.grad("#c7fcf2", "#67b7bf"));
            for (let Q = 0; Q < 3; Q++) B.rect(-6 + Q * 7, -10, 3, 17, 1, "#effce4", F, 0);
            B.rect(23, -8, 21, 12, 3, o),
              B.rect(35, -10, 9, 16, 3, I),
              B.rect(-18, 11, 11, 14, 3, i),
              B.line(-29, -3, -22, -3, "#d7efe5", 2);
          } else
            A === "frost"
              ? (B.shape("M-19-9Q-18-31 0-32Q18-31 19-9L27 9-27 9Z", E),
                B.ellipse(0, 10, 27, 8, o),
                B.ellipse(0, 8, 19, 5, "#b1e0ef", F, 1),
                B.ellipse(0, 17, 5, 7, I),
                B.ellipse(0, -33, 5, 5, I),
                B.shape("M0-25L5-12 0-3-5-12Z", "#e4f8fb", F, 1),
                B.line(-12, -14, -15, 0, "#ecf4df", 2))
              : (B.shape("M-31-22Q27-39 39 15Q8-3-11 23Q0-3-31-22Z", E),
                B.shape("M-25-23Q21-32 36 8Q21-9-6-1Z", C, F, 0),
                B.line(-7, -7, 12, 2, F, 7),
                B.line(-6, -7, 13, 2, "#c6a176", 4),
                B.ellipse(3, -2, 3, 3, I, F, 1));
        },
        52,
        43,
      )
    );
  }
  enemy(A, g = 0, B = 0, E = !1) {
    const o = z[A].radius,
      i = this.paintedSprite(
        `enemy-${A}`,
        o * (A < 7 ? 3 : 2.6),
        o * (A < 7 ? 3.4 : 3),
        E,
        B,
        o * (A < 7 ? 1.5 : 1.3),
        o * (A < 7 ? 1.7 : 1.5) + 4,
      );
    if (i) return i;
    const I = z[A],
      C = I.radius,
      Q = C * 2 + (A === 11 ? 160 : A >= 8 ? 70 : 32),
      a = C * 2 + (A === 11 ? 175 : A >= 8 ? 100 : 48),
      t = Q / 2,
      h = a / 2 + (A >= 8 ? 10 : 4);
    return this.make(
      `mob${A}:${g}:${B}:${E}`,
      Q,
      a,
      1.25,
      (s) => {
        const U = s.c;
        U.save();
        const M = C / (A >= 8 ? 31 : 23);
        U.scale(M, M);
        const r = E ? "#f4eed9" : I.color,
          Y = E
            ? "#d6deca"
            : [
                "#687b95",
                "#735661",
                "#9c594f",
                "#5c729e",
                "#77598e",
                "#8c6d98",
                "#807d4a",
                "#805575",
                "#8e645a",
                "#8e4944",
                "#75628d",
                "#537b9d",
              ][A],
          c = s.grad(r, Y);
        s.ellipse(0, 20, 25, 8, "#07182066", F, 0);
        const R = B ? 2 : -2;
        if (
          (s.ellipse(-12, 19 + R, 8, 5, s.grad("#607578", "#304754"), F, 2),
          s.ellipse(13, 19 - R, 8, 5, s.grad("#607578", "#304754"), F, 2),
          A === 0)
        )
          s.shape("M-22-5Q-21-27 2-27Q25-24 22 1L18 15Q3 25-15 17Z", c),
            s.shape("M-9-24L-18-40 0-31 14-39 11-20Z", s.grad("#d0d5df", "#7183a0")),
            s.line(-14, -12, -7, -17, "#f3e7cc", 2),
            s.eye(-7, -2, "#f4dfa3", !0),
            s.eye(8, -2, "#f4dfa3", !0),
            s.shape("M-6 10L-2 14 6 10Z", "#49536a", F, 1);
        else if (A === 1) {
          s.rect(-27, -25, 54, 48, 13, c),
            s.rect(-33, -14, 16, 31, 6, s.grad("#c8b5a0", "#706772")),
            s.rect(18, -14, 16, 31, 6, s.grad("#b7a293", "#706271")),
            s.rect(-22, -21, 44, 12, 5, "#6e616a"),
            s.eye(-9, -10, "#f3c792", !0, !1, 3.3),
            s.eye(10, -10, "#f3c792", !0, !1, 3.3),
            s.rect(-14, 4, 28, 17, 5, s.grad("#929091", "#5f5b68"));
          for (let G = 0; G < 4; G++) s.line(-9 + G * 6, 8, -9 + G * 6, 16, "#c3b8a2", 1.5);
          s.bolt(-21, -17), s.bolt(21, -17), s.line(-19, 0, 19, 0, "#eed2be", 1);
        } else if (A === 2)
          s.shape("M-23-10Q0-33 23-10L19 18Q0 24-19 18Z", c),
            s.shape("M-20-13L-30-36-6-23 3-28 27-36 22-10Z", s.grad("#f1c393", "#8f5751")),
            s.line(-23, -29, -14, -21, "#f5d5a1", 2),
            s.eye(-8, -3, "#f9e7b0", !0),
            s.eye(8, -3, "#f9e7b0", !0),
            s.shape("M-8 10L0 15 8 9 5 19-5 19Z", "#543e40", F, 1.5);
        else if (A === 3)
          s.ellipse(0, -1, 23, 24, c),
            s.ellipse(-21, -3, 8, 13, s.grad("#aebee1", "#607ca4")),
            s.ellipse(21, -3, 8, 13, s.grad("#aebee1", "#607ca4")),
            s.rect(-13, -22, 26, 10, 5, s.grad("#d6e1e7", "#8fa5c8")),
            s.eye(-8, -9, "#dbf4dc", !0),
            s.eye(8, -9, "#dbf4dc", !0),
            s.ellipse(0, 9, 13, 9, "#425671"),
            s.ellipse(0, 9, 7, 5, s.grad("#dee7be", "#a8ba9f")),
            s.ellipse(2, 8, 3, 2, "#f0f4cf", F, 0);
        else if (A === 4)
          s.shape("M0-37Q27-26 27 21Q0 33-27 21Q-25-20 0-37Z", c),
            s.shape("M0-32L-17 17 0 25 17 17Z", "#614e80", F, 1),
            s.ellipse(0, -7, 14, 12, "#302d4c"),
            s.eye(-5, -8, "#f4e5b7"),
            s.eye(6, -8, "#f4e5b7"),
            s.line(-26, 19, -31, -25, "#b29bca", 4),
            s.ellipse(-31, -29, 7, 8, s.grad("#efdbf9", "#9d85bf")),
            s.ellipse(0, 13, 4, 6, "#d6b9ed", F, 1),
            s.line(-17, 18, -4, 23, "#ccb1df", 1);
        else if (A === 5)
          s.ellipse(-9, -2, 19, 24, c),
            s.ellipse(12, 2, 17, 21, s.grad("#e0bfdf", "#927aa5")),
            s.shape("M-5-26L-17-37 2-30 14-35 12-22Z", "#d7b2e4"),
            s.line(2, -19, -1, 19, "#766083", 2),
            s.eye(-13, -4, "#f6e8a8", !0, !1, 2.5),
            s.eye(-3, -4, "#f6e8a8", !0, !1, 2.5),
            s.eye(11, 1, "#f6e8a8", !0, !1, 2.2),
            s.eye(20, 1, "#f6e8a8", !0, !1, 2.2),
            s.ellipse(-13, 9, 3, 2, "#d3ad8e", F, 0);
        else if (A === 6)
          s.ellipse(0, 1, 24, 25, c),
            s.rect(-27, -24, 54, 15, 6, s.grad("#e8d8ac", "#a0a078")),
            s.shape("M-17-25Q-25-38-10-40Q0-50 10-39Q24-39 19-25Z", s.grad("#f2e7c6", "#b5b58b")),
            s.eye(-8, -4, "#e4efbc", !0),
            s.eye(8, -4, "#e4efbc", !0),
            s.ellipse(0, 10, 9, 5, "#5d684c"),
            s.line(20, 10, 29, 24, "#c7b590", 4),
            s.ellipse(30, 26, 9, 7, s.grad("#afd2a1", "#668b73")),
            s.line(-13, -18, 15, -18, "#f2e6c1", 1.5);
        else if (A === 7) {
          s.rect(-25, -21, 50, 45, 11, c),
            s.rect(-31, -10, 13, 24, 6, s.grad("#b99baa", "#655673")),
            s.rect(19, -10, 13, 24, 6, s.grad("#b99baa", "#655673")),
            s.shape("M-27-9L-23-32-12-37-2-26 11-37 24-31 28-9Z", s.grad("#c0c8d9", "#58617c")),
            s.rect(-20, -11, 40, 12, 4, "#322c43"),
            s.eye(-8, -5, "#ffe5ad", !0),
            s.eye(8, -5, "#ffe5ad", !0),
            s.rect(-12, 9, 24, 10, 3, "#785c76");
          for (let G = 0; G < 3; G++) s.line(-7 + G * 7, 11, -7 + G * 7, 16, "#d2b1bd", 1.5);
          s.ellipse(0, 24, 5, 5, ["#efb184", "#cfb1f2", "#b2dfa4", "#b0ddf4", "#f8dc92"][g], F, 1.5),
            s.line(-16, -26, -13, -30, "#e0d0d6", 1.5);
        } else if (A === 8) {
          s.rect(-27, -23, 54, 48, 11, c),
            s.ellipse(-28, 0, 11, 19, s.grad("#b7a58c", "#76665d")),
            s.ellipse(28, 0, 11, 19, s.grad("#b7a58c", "#76665d")),
            s.rect(-23, -25, 46, 12, 5, s.grad("#c7b69a", "#746b65")),
            s.shape("M-20-23L-23-40-10-34 0-46 10-34 23-40 20-23Z", s.grad("#ffe1a0", "#a5784c")),
            s.ellipse(0, -28, 3, 4, "#d4a8e9", F, 1),
            s.eye(-9, -8, "#f4d8a2", !0, !1, 3.6),
            s.eye(9, -8, "#f4d8a2", !0, !1, 3.6),
            s.rect(-11, 7, 22, 12, 4, "#524a49");
          for (let G = 0; G < 4; G++) s.line(-7 + G * 4.7, 10, -7 + G * 4.7, 15, "#dcb988", 1.5);
          s.bolt(-19, 15), s.bolt(19, 15);
        } else if (A === 9) {
          s.rect(-30, -24, 60, 52, 12, s.grad("#b7a69a", "#5b5964")),
            s.rect(-19, -32, 14, 19, 3, "#6d6265"),
            s.rect(7, -36, 13, 22, 3, "#6d6265"),
            s.rect(-22, -17, 44, 39, 8, "#382f3b"),
            s.ellipse(0, 1, 15, 18, s.grad("#ffe8a2", "#e4795d")),
            s.shape("M-8 10Q-14-6 0-16Q-2-5 9-3Q16 7 6 13Z", "#ffe6a4", F, 1),
            s.eye(-17, -21, "#ffd295", !0, !1, 3),
            s.eye(17, -21, "#ffd295", !0, !1, 3),
            s.rect(-35, -4, 12, 31, 4, s.grad("#d5ad84", "#926d5c")),
            s.rect(24, -4, 12, 31, 4, s.grad("#d5ad84", "#926d5c"));
          for (let G = 0; G < 3; G++) s.bolt(-27, 2 + G * 8), s.bolt(28, 2 + G * 8);
          s.line(-17, -8, -17, 15, "#c5b29b", 2), s.line(17, -8, 17, 15, "#c5b29b", 2);
        } else if (A === 11) {
          for (let G = 0; G < 6; G++)
            U.save(),
              U.rotate((G * Math.PI) / 3 + (B ? 0.025 : -0.025)),
              s.shape("M-8-20L-18-49-5-66 6-41 17-34 7-17Z", s.grad("#dcecf8", "#547797", -65, 60), F, 2),
              s.shape("M-5-61L2-39-5-23Z", "#edf9ff", F, 0),
              U.restore();
          s.ellipse(0, -2, 24, 27, s.grad("#99b9d1", "#354861")),
            s.ellipse(0, -4, 18, 19, s.grad("#182a44", "#07131f")),
            s.ellipse(0, -5, 9, 10, s.grad("#e2f9ff", "#82c8f1"), F, 1.5),
            s.ellipse(-2, -8, 3, 3, "#ffffff", F, 0),
            s.rect(-17, 12, 34, 8, 3, "#c5d8e5", F, 1.5),
            s.line(-12, 15, 12, 15, "#516f90", 1),
            s.bolt(-20, 0),
            s.bolt(20, 0);
        } else {
          for (let G = 0; G < 7; G++)
            U.save(),
              U.rotate((G * Math.PI * 2) / 7),
              s.shape("M0 4Q-25-2-18-24Q-1-40 7-11Z", s.grad("#e3c5ed", "#6f7594")),
              U.restore();
          s.ellipse(0, 0, 23, 26, s.grad("#e3d5f2", "#9484af")),
            s.ellipse(0, -2, 16, 18, "#453e65"),
            s.eye(-7, -5, "#f7e5b7", !0, !1, 3),
            s.eye(7, -5, "#f7e5b7", !0, !1, 3),
            s.shape("M-7 7L0 14 7 7Z", "#ddc9f1", F, 1.5),
            s.ellipse(0, -28, 5, 8, "#e9d4f8", F, 1.5),
            s.line(-16, 15, -27, 28, "#aa94cb", 4),
            s.line(16, 15, 27, 28, "#aa94cb", 4);
        }
        (A === 1 || A === 7 || A === 8 || A === 9) &&
          (s.line(-18, -18, -7, -18, "#edf1f15c", 1),
          s.line(12, -18, 20, -18, "#edf1f15c", 1),
          s.shape("M-3 3L0 0 3 3 0 6Z", A === 9 ? "#ffbe6b" : "#f3c58d", F, 0.7)),
          U.restore();
      },
      t,
      h,
    );
  }
  thumb(A) {
    if (A.startsWith("hero")) {
      const E = Bg["hero-" + A.slice(4)];
      if (E) return E;
    }
    let g = this.thumbs.get(A);
    return (
      g ||
      ((g = (
        A.startsWith("hero")
          ? this.player(Number(A.slice(4)))
          : A.startsWith("mob")
            ? this.enemy(Number(A.slice(3)))
            : this.weapon(A)
      ).canvas.toDataURL()),
      this.thumbs.set(A, g),
      g)
    );
  }
}
const d = new No(),
  bo = {
    sounds: {
      tb_chalk: { bank: "core", files: ["tb_chalk-0", "tb_chalk-1", "tb_chalk-2"] },
      tb_stamp: { bank: "core", files: ["tb_stamp-0", "tb_stamp-1"] },
      tb_locked: { bank: "core", files: ["tb_locked-0", "tb_locked-1"] },
      tb_paper: { bank: "core", files: ["tb_paper-0", "tb_paper-1", "tb_paper-2"] },
      tb_reset: { bank: "core", files: ["tb_reset-0"] },
      tb_flicker: { bank: "core", files: ["tb_flicker-0", "tb_flicker-1", "tb_flicker-2"] },
      tb_open: { bank: "core", files: ["tb_open-0"] },
      shot: { bank: "combat", files: ["shot-0", "shot-1", "shot-2", "shot-3"] },
      shotgun: { bank: "combat", files: ["shotgun-0", "shotgun-1", "shotgun-2", "shotgun-3"] },
      turret: { bank: "combat", files: ["turret-0", "turret-1", "turret-2"] },
      axe: { bank: "combat", files: ["axe-0", "axe-1", "axe-2"] },
      saw_throw: { bank: "combat", files: ["saw_throw-0", "saw_throw-1", "saw_throw-2"] },
      saw_hit: { bank: "combat", files: ["saw_hit-0", "saw_hit-1", "saw_hit-2", "saw_hit-3"] },
      saw_catch: { bank: "combat", files: ["saw_catch-0", "saw_catch-1"] },
      crescent: { bank: "combat", files: ["crescent-0", "crescent-1", "crescent-2"] },
      moth: { bank: "combat", files: ["moth-0", "moth-1", "moth-2"] },
      poison: { bank: "combat", files: ["poison-0", "poison-1"] },
      laser: { bank: "combat", files: ["laser-0", "laser-1", "laser-2"] },
      fork_fire: { bank: "combat", files: ["fork_fire-0", "fork_fire-1", "fork_fire-2", "fork_fire-3"] },
      fork_hit: { bank: "combat", files: ["fork_hit-0", "fork_hit-1", "fork_hit-2", "fork_hit-3"] },
      fork_over: { bank: "combat", files: ["fork_over-0", "fork_over-1"] },
      frost: { bank: "combat", files: ["frost-0", "frost-1", "frost-2"] },
      lightning: { bank: "combat", files: ["lightning-0", "lightning-1", "lightning-2"] },
      flame: { bank: "combat", files: ["flame-0", "flame-1", "flame-2", "flame-3"] },
      deploy: { bank: "combat", files: ["deploy-0", "deploy-1"] },
      turret_break: { bank: "combat", files: ["turret_break-0", "turret_break-1"] },
      explosion: { bank: "combat", files: ["explosion-0", "explosion-1", "explosion-2"] },
      hit_flesh: { bank: "core", files: ["hit_flesh-0", "hit_flesh-1", "hit_flesh-2", "hit_flesh-3"] },
      hit_metal: { bank: "core", files: ["hit_metal-0", "hit_metal-1", "hit_metal-2", "hit_metal-3"] },
      hit_stone: { bank: "core", files: ["hit_stone-0", "hit_stone-1", "hit_stone-2", "hit_stone-3"] },
      crit: { bank: "core", files: ["crit-0", "crit-1", "crit-2"] },
      death_flesh: {
        bank: "core",
        files: ["death_flesh-0", "death_flesh-1", "death_flesh-2", "death_flesh-3"],
      },
      death_metal: { bank: "core", files: ["death_metal-0", "death_metal-1", "death_metal-2"] },
      death_stone: { bank: "core", files: ["death_stone-0", "death_stone-1", "death_stone-2"] },
      hurt: { bank: "core", files: ["hurt-0", "hurt-1", "hurt-2"] },
      elite: { bank: "core", files: ["elite-0", "elite-1", "elite-2"] },
      pickup: { bank: "core", files: ["pickup-0", "pickup-1", "pickup-2", "pickup-3"] },
      pickup_xp: { bank: "core", files: ["pickup_xp-0", "pickup_xp-1", "pickup_xp-2"] },
      click: { bank: "core", files: ["click-0", "click-1", "click-2"] },
      hover: { bank: "core", files: ["hover-0", "hover-1"] },
      buy: { bank: "core", files: ["buy-0", "buy-1"] },
      level: { bank: "core", files: ["level-0", "level-1"] },
      wave_clear: { bank: "core", files: ["wave_clear-0"] },
      wave_start: { bank: "core", files: ["wave_start-0"] },
      magnet: { bank: "core", files: ["magnet-0"] },
      upgrade: { bank: "core", files: ["upgrade-0", "upgrade-1"] },
      acquire: { bank: "core", files: ["acquire-0", "acquire-1"] },
      mutate: { bank: "core", files: ["mutate-0", "mutate-1"] },
      ability: { bank: "combat", files: ["ability-0", "ability-1"] },
      dash_0: { bank: "combat", files: ["dash_0-0", "dash_0-1"] },
      dash_1: { bank: "combat", files: ["dash_1-0", "dash_1-1"] },
      dash_2: { bank: "combat", files: ["dash_2-0", "dash_2-1"] },
      dash_3: { bank: "combat", files: ["dash_3-0", "dash_3-1"] },
      dash_4: { bank: "combat", files: ["dash_4-0", "dash_4-1"] },
      dash_5: { bank: "combat", files: ["dash_5-0", "dash_5-1"] },
      ult_0: { bank: "combat", files: ["ult_0-0"] },
      ult_1: { bank: "combat", files: ["ult_1-0"] },
      ult_2: { bank: "combat", files: ["ult_2-0"] },
      ult_3: { bank: "combat", files: ["ult_3-0"] },
      ult_4: { bank: "combat", files: ["ult_4-0"] },
      ult_5: { bank: "combat", files: ["ult_5-0"] },
      boss_roar: { bank: "boss", files: ["boss_roar-0", "boss_roar-1", "boss_roar-2"] },
      boss_warn: { bank: "boss", files: ["boss_warn-0", "boss_warn-1"] },
      boss_slam: { bank: "boss", files: ["boss_slam-0", "boss_slam-1", "boss_slam-2"] },
      boss_ring: { bank: "boss", files: ["boss_ring-0", "boss_ring-1"] },
      boss_laser: { bank: "boss", files: ["boss_laser-0", "boss_laser-1"] },
      boss_charge: { bank: "boss", files: ["boss_charge-0", "boss_charge-1"] },
      boss_summon: { bank: "boss", files: ["boss_summon-0", "boss_summon-1"] },
      boss_death: { bank: "boss", files: ["boss_death-0"] },
    },
  },
  vo = {
    tb_chalk: { gain: 0.34, prio: 5, max: 2, gap: 0.08, bus: "ui", legacy: "hover" },
    tb_stamp: { gain: 0.85, prio: 5, max: 1, gap: 0.12, bus: "ui", duck: 0.2, legacy: "buy" },
    tb_locked: { gain: 0.6, prio: 5, max: 1, gap: 0.15, bus: "ui", legacy: "click" },
    tb_paper: { gain: 0.42, prio: 5, max: 1, gap: 0.06, bus: "ui", legacy: "hover" },
    tb_reset: { gain: 0.75, prio: 5, max: 1, gap: 0.4, bus: "ui", legacy: "upgrade" },
    tb_flicker: { gain: 0.16, prio: 2, max: 1, gap: 0.3, bus: "ui", legacy: "" },
    tb_open: { gain: 0.5, prio: 5, max: 1, gap: 0.5, bus: "ui", legacy: "" },
    shot: { gain: 0.42, prio: 3, max: 3, gap: 0.045, legacy: "shot" },
    shotgun: { gain: 0.5, prio: 3, max: 2, gap: 0.07, legacy: "shotgun" },
    turret: { gain: 0.3, prio: 2, max: 2, gap: 0.06, legacy: "shot" },
    axe: { gain: 0.55, prio: 3, max: 2, gap: 0.06, legacy: "axe" },
    saw_throw: { gain: 0.38, prio: 2, max: 2, gap: 0.08, legacy: "axe" },
    saw_hit: { gain: 0.32, prio: 2, max: 3, gap: 0.05, legacy: "hit" },
    saw_catch: { gain: 0.3, prio: 1, max: 2, gap: 0.08, legacy: "pickup" },
    crescent: { gain: 0.4, prio: 2, max: 2, gap: 0.08, legacy: "axe" },
    moth: { gain: 0.22, prio: 1, max: 2, gap: 0.09, legacy: "pickup" },
    poison: { gain: 0.36, prio: 2, max: 2, gap: 0.06, legacy: "poison" },
    laser: { gain: 0.45, prio: 3, max: 2, gap: 0.08, legacy: "laser" },
    fork_fire: { gain: 0.42, prio: 3, max: 2, gap: 0.07, legacy: "laser" },
    fork_hit: { gain: 0.3, prio: 2, max: 3, gap: 0.05, legacy: "hit" },
    fork_over: { gain: 0.5, prio: 3, max: 1, gap: 0.12, legacy: "lightning" },
    frost: { gain: 0.42, prio: 3, max: 2, gap: 0.12, legacy: "frost" },
    lightning: { gain: 0.42, prio: 3, max: 2, gap: 0.07, legacy: "lightning" },
    flame: { gain: 0.26, prio: 1, max: 2, gap: 0.08, legacy: "flame" },
    deploy: { gain: 0.42, prio: 3, max: 2, gap: 0.1, legacy: "deploy" },
    turret_break: { gain: 0.5, prio: 3, max: 2, gap: 0.1, legacy: "death" },
    explosion: { gain: 0.55, prio: 3, max: 3, gap: 0.06, duck: 0.25, legacy: "shotgun" },
    hit_flesh: { gain: 0.3, prio: 1, max: 4, gap: 0.035, legacy: "hit" },
    hit_metal: { gain: 0.28, prio: 1, max: 4, gap: 0.035, legacy: "hit" },
    hit_stone: { gain: 0.3, prio: 1, max: 4, gap: 0.035, legacy: "hit" },
    crit: { gain: 0.42, prio: 2, max: 3, gap: 0.04, legacy: "crit" },
    death_flesh: { gain: 0.34, prio: 2, max: 4, gap: 0.03, legacy: "death" },
    death_metal: { gain: 0.36, prio: 2, max: 3, gap: 0.04, legacy: "death" },
    death_stone: { gain: 0.36, prio: 2, max: 3, gap: 0.04, legacy: "death" },
    hurt: { gain: 0.6, prio: 5, max: 1, gap: 0.12, duck: 0.2, legacy: "hurt" },
    elite: { gain: 0.55, prio: 4, max: 2, gap: 0.1, duck: 0.25, legacy: "elite" },
    pickup: { gain: 0.22, prio: 1, max: 3, gap: 0.04, legacy: "pickup" },
    pickup_xp: { gain: 0.2, prio: 1, max: 3, gap: 0.035, legacy: "pickup" },
    click: { gain: 0.5, prio: 5, max: 2, gap: 0.02, bus: "ui", legacy: "click" },
    hover: { gain: 0.32, prio: 5, max: 1, gap: 0.03, bus: "ui", legacy: "hover" },
    buy: { gain: 0.6, prio: 5, max: 2, gap: 0.04, bus: "ui", legacy: "buy" },
    level: { gain: 0.6, prio: 5, max: 1, gap: 0.08, duck: 0.2, legacy: "level" },
    wave_clear: { gain: 0.5, prio: 5, max: 1, gap: 0.2, duck: 0.15, legacy: "upgrade" },
    wave_start: { gain: 0.5, prio: 5, max: 1, gap: 0.2, legacy: "deploy" },
    magnet: { gain: 0.5, prio: 4, max: 1, gap: 0.2, legacy: "pickup" },
    ult_0: { gain: 0.75, prio: 5, max: 1, gap: 0.2, duck: 0.35, legacy: "ability" },
    ult_1: { gain: 0.75, prio: 5, max: 1, gap: 0.2, duck: 0.35, legacy: "ability" },
    ult_2: { gain: 0.75, prio: 5, max: 1, gap: 0.2, duck: 0.35, legacy: "ability" },
    ult_3: { gain: 0.75, prio: 5, max: 1, gap: 0.2, duck: 0.35, legacy: "ability" },
    ult_4: { gain: 0.75, prio: 5, max: 1, gap: 0.2, duck: 0.35, legacy: "ability" },
    ult_5: { gain: 0.75, prio: 5, max: 1, gap: 0.2, duck: 0.35, legacy: "ability" },
    upgrade: { gain: 0.6, prio: 5, max: 1, gap: 0.1, duck: 0.45, legacy: "upgrade" },
    acquire: { gain: 0.65, prio: 5, max: 1, gap: 0.1, duck: 0.5, legacy: "acquire" },
    mutate: { gain: 0.5, prio: 5, max: 1, gap: 0.1, legacy: "mutate" },
    ability: { gain: 0.6, prio: 4, max: 1, gap: 0.1, duck: 0.3, legacy: "ability" },
    dash_0: { gain: 0.5, prio: 4, max: 1, gap: 0.05, legacy: "dash" },
    dash_1: { gain: 0.55, prio: 4, max: 1, gap: 0.05, legacy: "dash" },
    dash_2: { gain: 0.55, prio: 4, max: 1, gap: 0.05, legacy: "dash" },
    dash_3: { gain: 0.5, prio: 4, max: 1, gap: 0.05, legacy: "dash" },
    dash_4: { gain: 0.5, prio: 4, max: 1, gap: 0.05, legacy: "dash" },
    dash_5: { gain: 0.5, prio: 4, max: 1, gap: 0.05, legacy: "dash" },
    boss_roar: { gain: 0.75, prio: 5, max: 1, gap: 0.3, duck: 0.6, legacy: "boss" },
    boss_warn: { gain: 0.5, prio: 4, max: 2, gap: 0.2, legacy: "deploy" },
    boss_slam: { gain: 0.7, prio: 5, max: 2, gap: 0.1, duck: 0.35, legacy: "shotgun" },
    boss_ring: { gain: 0.55, prio: 4, max: 1, gap: 0.2, legacy: "elite" },
    boss_laser: { gain: 0.55, prio: 4, max: 1, gap: 0.3, legacy: "laser" },
    boss_charge: { gain: 0.6, prio: 4, max: 1, gap: 0.3, legacy: "elite" },
    boss_summon: { gain: 0.55, prio: 4, max: 1, gap: 0.3, legacy: "elite" },
    boss_death: { gain: 0.85, prio: 5, max: 1, gap: 0.5, duck: 0.9, legacy: "boss" },
  },
  Xo = { hit: "hit_flesh", death: "death_flesh", boss: "boss_roar", dash: "dash_0" };
class To {
  constructor(A) {
    this.settings = A;
  }
  settings;
  ctx;
  out;
  sfxBus;
  duckBus;
  ambBus;
  limiter;
  musicBus;
  uiBus;
  focused = !0;
  reverbBus;
  musicSource;
  synthGain;
  musicKind = "";
  musicTrack;
  musicBuffers = new Map();
  voices = 0;
  active = [];
  last = {};
  samples = new Map();
  buffers = new Map();
  banks = {};
  ext = "ogg";
  combat = !1;
  maxVoices = 26;
  played = 0;
  dropped = 0;
  stolen = 0;
  fallbackPlays = 0;
  ambienceMap = -1;
  ambienceSource;
  ambienceGain;
  ambienceBuffers = new Map();
  loadErrors = [];
  get baseUrl() {
    return new URL("audio/", document.baseURI).href;
  }
  init() {
    if (!this.ctx) {
      const A = (this.ctx = new AudioContext()),
        g = typeof matchMedia == "function" && matchMedia("(pointer:coarse)").matches;
      this.maxVoices = g ? 16 : 26;
      try {
        const I = document.createElement("audio");
        this.ext = I.canPlayType('audio/ogg; codecs="opus"') ? "ogg" : "m4a";
      } catch {
        this.ext = "m4a";
      }
      const B = A.createDynamicsCompressor();
      (B.threshold.value = -16),
        (B.knee.value = 10),
        (B.ratio.value = 6),
        (B.attack.value = 0.002),
        (B.release.value = 0.16);
      const E = A.createDynamicsCompressor();
      (E.threshold.value = -3),
        (E.knee.value = 0),
        (E.ratio.value = 20),
        (E.attack.value = 0.001),
        (E.release.value = 0.08),
        (this.out = A.createGain()),
        (this.sfxBus = A.createGain()),
        (this.duckBus = A.createGain()),
        (this.ambBus = A.createGain()),
        (this.musicBus = A.createGain()),
        (this.uiBus = A.createGain()),
        (this.reverbBus = A.createGain()),
        this.out.connect(B),
        B.connect(E),
        E.connect(A.destination),
        (this.limiter = E),
        this.sfxBus.connect(this.out),
        this.musicBus.connect(this.duckBus),
        this.ambBus.connect(this.duckBus),
        this.duckBus.connect(this.out),
        this.uiBus.connect(this.out);
      const o = A.createConvolver(),
        i = A.createBuffer(2, Math.floor(A.sampleRate * 0.55), A.sampleRate);
      for (let I = 0; I < 2; I++) {
        const C = i.getChannelData(I);
        for (let Q = 0; Q < C.length; Q++)
          C[Q] = (Math.random() * 2 - 1) * Math.pow(1 - Q / C.length, 3) * 0.25;
      }
      (o.buffer = i),
        (this.reverbBus.gain.value = 0.07),
        this.sfxBus.connect(this.reverbBus),
        this.reverbBus.connect(o),
        o.connect(this.out),
        this.createMusic(),
        this.update(),
        this.loadBank("core").then(() => this.loadBank("combat"));
    }
    this.ctx.state === "suspended" && this.ctx.resume().catch(() => {});
  }
  update() {
    if (!this.ctx) return;
    const A = this.settings(),
      g = this.ctx.currentTime,
      B = (E, o) => (typeof E == "number" && Number.isFinite(E) ? Math.max(0, Math.min(1, E)) : o);
    this.out?.gain.setTargetAtTime(A.muteUnfocused && !this.focused ? 0 : B(A.master, 0.65), g, 0.04),
      this.uiBus?.gain.setTargetAtTime(B(A.uiVolume, 0.65), g, 0.04),
      this.sfxBus?.gain.setTargetAtTime(B(A.sfx, 0.7), g, 0.04),
      this.ambBus?.gain.setTargetAtTime(B(A.sfx, 0.7) * 0.55, g, 0.1),
      this.musicBus?.gain.setTargetAtTime(B(A.music, 0.32) * (this.combat ? 1 : 0.72), g, 0.1);
  }
  async loadBank(A) {
    if (!this.ctx || this.banks[A] === "loading" || this.banks[A] === "ready") return;
    if (location.protocol === "file:") {
      this.banks[A] = "failed";
      return;
    }
    this.banks[A] = "loading";
    const g = Object.entries(bo.sounds).filter(([, E]) => E.bank === A);
    let B = 0;
    await Promise.all(
      g.map(async ([E, o]) => {
        const i = [];
        for (const I of o.files) {
          const C = await this.fetchBuffer(I);
          C ? i.push(C) : B++;
        }
        i.length && this.buffers.set(E, i);
      }),
    ),
      (this.banks[A] = B && !g.some(([E]) => this.buffers.has(E)) ? "failed" : "ready");
  }
  async fetchBuffer(A) {
    if (location.protocol === "file:") return;
    const g = this.ext === "ogg" ? ["ogg", "m4a"] : ["m4a"];
    for (const B of g)
      try {
        const E = await fetch(this.baseUrl + A + "." + B);
        if (!E.ok) throw new Error(String(E.status));
        const o = await E.arrayBuffer(),
          i = await new Promise((I, C) => this.ctx.decodeAudioData(o, I, C));
        return B === "m4a" && this.ext === "ogg" && (this.ext = "m4a"), i;
      } catch (E) {
        B === g[g.length - 1] && this.loadErrors.length < 8 && this.loadErrors.push(A + ": " + String(E));
      }
  }
  setMusic(A) {
    if (!this.ctx || !this.musicBus || A === this.musicKind) return;
    this.musicKind = A;
    const g = this.ctx,
      B = g.currentTime,
      E = this.musicTrack;
    E && (E.gain.gain.setTargetAtTime(0, B, 0.6), E.src.stop(B + 3), (this.musicTrack = void 0)),
      this.synthGain?.gain.setTargetAtTime(0, B, 0.5);
    const o = (i) => {
      if (this.musicKind !== A || !this.ctx) return;
      if (!i) {
        A === "combat" && this.synthGain?.gain.setTargetAtTime(1, this.ctx.currentTime, 0.5);
        return;
      }
      const I = g.createBufferSource(),
        C = g.createGain();
      (I.buffer = i),
        (I.loop = !0),
        (I.loopStart = 0.03),
        (I.loopEnd = Math.max(0.1, i.duration - 0.03)),
        (C.gain.value = 0),
        C.gain.setTargetAtTime(A === "hub" ? 0.8 : 0.85, g.currentTime, 0.9),
        I.connect(C),
        C.connect(this.musicBus),
        I.start(),
        (this.musicTrack = { kind: A, src: I, gain: C });
    };
    this.musicBuffers.has(A)
      ? o(this.musicBuffers.get(A))
      : this.fetchBuffer("music_" + A).then((i) => {
          this.musicBuffers.set(A, i ?? null), o(i);
        });
  }
  setAmbience(A, g = 1) {
    if (!this.ctx || !this.ambBus) return;
    if (A === this.ambienceMap) {
      this.ambienceGain?.gain.setTargetAtTime(0.9 * g, this.ctx.currentTime, 0.4);
      return;
    }
    this.ambienceMap = A;
    const B = this.ctx,
      E = this.ambienceSource,
      o = this.ambienceGain;
    if (
      (E && o && (o.gain.setTargetAtTime(0, B.currentTime, 0.5), E.stop(B.currentTime + 2.5)),
      (this.ambienceSource = this.ambienceGain = void 0),
      A < 0)
    )
      return;
    const i = (C) => {
        if (this.ambienceMap !== A || !this.ctx) return;
        const Q = B.createBufferSource(),
          a = B.createGain();
        (Q.buffer = C),
          (Q.loop = !0),
          (Q.loopStart = 0.05),
          (Q.loopEnd = Math.max(0.1, C.duration - 0.05)),
          (a.gain.value = 0),
          a.gain.setTargetAtTime(0.9 * g, B.currentTime, 0.8),
          Q.connect(a),
          a.connect(this.ambBus),
          Q.start(0, Math.random() * C.duration * 0.8),
          (this.ambienceSource = Q),
          (this.ambienceGain = a);
      },
      I = this.ambienceBuffers.get(A);
    I
      ? i(I)
      : this.fetchBuffer("amb_" + A).then((C) => {
          C && (this.ambienceBuffers.set(A, C), i(C));
        });
  }
  duck(A) {
    if (!this.ctx || !this.duckBus) return;
    const g = this.ctx.currentTime,
      B = this.duckBus.gain;
    B.cancelScheduledValues(g),
      B.setValueAtTime(B.value, g),
      B.linearRampToValueAtTime(1 - 0.55 * Math.min(1, A), g + 0.03),
      B.setTargetAtTime(1, g + 0.08 + A * 0.5, 0.25);
  }
  sound(A, g = 1, B = 1, E = 0) {
    const o = this.ctx;
    if (!o || !this.sfxBus) return !1;
    const i = Xo[A] ?? A,
      I = vo[i],
      C = this.buffers.get(i);
    if (!I || !C) return this.fallbackPlays++, this.legacySound(I?.legacy ?? A, g, B);
    const Q = o.currentTime;
    if (Q - (this.last[i] ?? -1) < I.gap) return this.dropped++, !1;
    this.active = this.active.filter((Y) => Y.start + 4 > Q);
    let a = 0;
    for (const Y of this.active) Y.name === i && a++;
    if (a >= I.max) return this.dropped++, !1;
    if (this.active.length >= this.maxVoices) {
      let Y;
      for (const c of this.active) c.prio < I.prio && (!Y || c.prio < Y.prio || c.start < Y.start) && (Y = c);
      if (!Y) return this.dropped++, !1;
      try {
        Y.src.stop();
      } catch {}
      this.active.splice(this.active.indexOf(Y), 1), this.stolen++;
    }
    this.last[i] = Q;
    const t = C[Math.floor(Math.random() * C.length)],
      h = o.createBufferSource(),
      s = o.createGain();
    (h.buffer = t), (h.playbackRate.value = g * (0.955 + Math.random() * 0.09));
    const U = 1 / Math.sqrt(1 + this.active.length / 8);
    (s.gain.value = I.gain * B * (0.88 + Math.random() * 0.2) * U), h.connect(s);
    let M = s;
    if (E && o.createStereoPanner) {
      const Y = o.createStereoPanner();
      (Y.pan.value = Math.max(-1, Math.min(1, E)) * 0.7), s.connect(Y), (M = Y);
    }
    M.connect(I.bus === "ui" ? this.uiBus : this.sfxBus);
    const r = { src: h, name: i, prio: I.prio, start: Q };
    return (
      this.active.push(r),
      (this.voices = this.active.length),
      (h.onended = () => {
        const Y = this.active.indexOf(r);
        Y >= 0 && this.active.splice(Y, 1),
          (this.voices = this.active.length),
          h.disconnect(),
          s.disconnect(),
          M !== s && M.disconnect();
      }),
      h.start(),
      I.duck && this.duck(I.duck),
      this.played++,
      !0
    );
  }
  make(A, g) {
    const B = this.ctx,
      E = 24e3;
    let o = 0.2,
      i = 0.32;
    const I = [
      "pickup",
      "hover",
      "click",
      "buy",
      "level",
      "mutate",
      "acquire",
      "upgrade",
      "elite",
      "boss",
      "ability",
      "frost",
    ].includes(A);
    ["boss", "mutate", "level", "ability", "acquire", "upgrade"].includes(A)
      ? (o = 0.85)
      : A === "pickup"
        ? (o = 0.16)
        : A === "hover" || A === "click"
          ? (o = 0.055)
          : A === "shotgun"
            ? (o = 0.28)
            : A === "dash" || A === "axe"
              ? (o = 0.26)
              : A === "flame" && (o = 0.14),
      A === "hover" && (i = 0.08),
      (A === "hit" || A === "death") && (i = 0.14),
      A === "flame" && (i = 0.1),
      A === "pickup" && (i = 0.17);
    const C = B.createBuffer(1, Math.floor(o * E), E),
      Q = C.getChannelData(0);
    let a = 0,
      t = 0;
    const h = 1 + (g - 1) * 0.055;
    for (let s = 0; s < Q.length; s++) {
      const U = s / E,
        M = U / o,
        r = Math.random() * 2 - 1;
      a += 0.19 * (r - a);
      let Y = 0;
      const c = Math.exp(-M * 8) * (1 - Math.exp(-U * 1800));
      if (A === "level") {
        const R = [392, 493.9, 587.3, 784];
        for (let G = 0; G < 4; G++) {
          const n = U - G * 0.075;
          if (n < 0) continue;
          const D = R[G] * h,
            k = 1 - Math.exp(-n * 260);
          Y +=
            (Math.sin(n * 2 * Math.PI * D) +
              Math.sin(n * 2 * Math.PI * D * 2.76) * 0.18 * Math.exp(-n * 9) +
              Math.sin(n * 2 * Math.PI * D * 2) * 0.12) *
            Math.exp(-n * (G === 3 ? 3.2 : 5)) *
            k *
            0.2;
        }
        Y += Math.sin(U * 2 * Math.PI * 98) * Math.exp(-U * 9) * (1 - Math.exp(-U * 400)) * 0.35;
      } else if (A === "acquire" || A === "upgrade") {
        const R = A === "acquire" ? 220 : 294,
          G = [1, 1.25, 1.5, 2];
        for (let n = 0; n < 4; n++) {
          const D = U - n * 0.09;
          D < 0 ||
            (Y +=
              (Math.sin(D * 2 * Math.PI * R * G[n]) + Math.sin(D * 2 * Math.PI * R * G[n] * 2.004) * 0.25) *
              Math.exp(-D * 6.5) *
              0.23);
        }
        Y +=
          Math.sin(U * 2 * Math.PI * (62 - 18 * U)) * Math.exp(-U * 17) * 0.8 + a * Math.exp(-U * 30) * 0.25;
      } else if (I) {
        const R =
          (A === "pickup"
            ? 620
            : A === "hover"
              ? 430
              : A === "click"
                ? 640
                : A === "frost"
                  ? 1e3
                  : A === "boss"
                    ? 110
                    : A === "buy"
                      ? 520
                      : 350) * h;
        let G = 1;
        ["mutate", "ability", "elite"].includes(A) && (G = [1, 1.25, 1.5, 2][Math.min(3, Math.floor(M * 5))]),
          (Y =
            (Math.sin(2 * Math.PI * R * G * U) + 0.28 * Math.sin(2 * Math.PI * R * G * 2.005 * U)) *
            Math.exp(-M * (A === "pickup" ? 6 : 4)) *
            0.55),
          A === "boss" && (Y += a * Math.exp(-M * 5) * 1.4),
          A === "frost" && (Y += Math.sin(U * 2 * Math.PI * 1731) * Math.exp(-M * 11) * 0.3);
      } else if (A === "shot" || A === "shotgun" || A === "laser") {
        const R = A === "shotgun",
          G = (R ? 88 : A === "laser" ? 340 : 155) * h;
        (t += (2 * Math.PI * (G * Math.exp(-U * 14) + 35)) / E),
          (Y =
            a * Math.exp(-U * (R ? 32 : 75)) * 2.2 +
            r * Math.exp(-U * 190) * 0.3 +
            Math.sin(t) * Math.exp(-U * (R ? 19 : 50)) * 0.65 +
            Math.sin(2 * Math.PI * 1850 * h * U) * Math.exp(-U * 95) * 0.12);
      } else if (A === "axe" || A === "dash") {
        const R = A === "axe" ? 0.11 : 0.055,
          G = Math.exp(-Math.pow((U - R) / 0.065, 2));
        (Y = (r - a) * G * 0.45 + a * G * 0.65),
          A === "axe" &&
            U > 0.12 &&
            (Y += Math.sin((U - 0.12) * Math.PI * 2 * 84) * Math.exp(-(U - 0.12) * 40) * 0.7);
      } else
        A === "deploy"
          ? (Y =
              a * Math.exp(-U * 34) +
              Math.sin(2 * Math.PI * 430 * h * U) * Math.exp(-U * 28) * 0.35 +
              Math.sin(2 * Math.PI * 720 * U) * Math.exp(-Math.abs(U - 0.07) * 85) * 0.2)
          : A === "poison"
            ? (Y =
                a * Math.exp(-M * 3) * 0.7 +
                Math.sin(U * (630 + 400 * Math.sin(U * 80))) * Math.exp(-M * 5) * 0.25)
            : A === "lightning"
              ? (Y = (r - a) * c * 0.7 + Math.sin(U * 2 * Math.PI * Po(g, 230, 500)) * c * 0.2)
              : A === "flame"
                ? (Y = a * Math.pow(1 - M, 1.4) * 0.9 + r * Math.exp(-M * 12) * 0.13)
                : A === "hurt"
                  ? (Y = a * c * 1.5 + Math.sin(2 * Math.PI * (72 * U + 32 * U * U)) * c * 0.5)
                  : (Y =
                      a * c * 1.5 +
                      Math.sin(2 * Math.PI * (A === "crit" ? 230 : 110) * h * U) * c * 0.4 +
                      r * Math.exp(-U * 260) * 0.3);
      Q[s] = Math.tanh(Y * 1.2) * Math.min(1, U * 150) * Math.min(1, (o - U) * 80);
    }
    return { buffer: C, volume: i };
  }
  legacySound(A, g = 1, B = 1) {
    const E = this.ctx;
    if (!E || !this.sfxBus) return !1;
    const o = E.currentTime;
    if (
      this.active.length >= this.maxVoices ||
      o - (this.last[A] ?? -1) < (A === "pickup" ? 0.035 : A === "hit" ? 0.05 : A === "flame" ? 0.08 : 0.025)
    )
      return !1;
    this.last[A] = o;
    let i = this.samples.get(A);
    i || ((i = [0, 1, 2].map((t) => this.make(A, t))), this.samples.set(A, i));
    const I = i[Math.floor(Math.random() * 3)],
      C = E.createBufferSource(),
      Q = E.createGain();
    (C.buffer = I.buffer),
      (C.playbackRate.value = g * (0.965 + Math.random() * 0.07)),
      (Q.gain.value = I.volume * B),
      C.connect(Q),
      Q.connect(["hover", "click", "buy"].includes(A) ? this.uiBus : this.sfxBus);
    const a = { src: C, name: A, prio: 1, start: o };
    return (
      this.active.push(a),
      (this.voices = this.active.length),
      (C.onended = () => {
        const t = this.active.indexOf(a);
        t >= 0 && this.active.splice(t, 1),
          (this.voices = this.active.length),
          C.disconnect(),
          Q.disconnect();
      }),
      C.start(),
      !0
    );
  }
  createMusic() {
    const A = this.ctx,
      g = 24e3,
      B = 104,
      E = 60 / B / 4,
      o = 8,
      i = E * 16 * o,
      I = A.createBuffer(2, Math.ceil(i * g), g),
      C = I.getChannelData(0),
      Q = I.getChannelData(1),
      a = (U, M, r, Y, c, R = 0) => {
        const G = Math.floor(U * g),
          n = Math.floor(M * g);
        let D = 0;
        for (let k = 0; k < n && G + k < C.length; k++) {
          const l = k / g,
            w = l / M,
            q = Math.min(1, l * 130) * Math.pow(1 - w, c === 2 ? 1.5 : 3);
          let m = 0;
          if (c === 0) m = Math.sin(2 * Math.PI * r * l) * 0.8 + Math.sin(2 * Math.PI * r * 2 * l) * 0.12;
          else if (c === 1)
            m = Math.sin(2 * Math.PI * (52 * l + 4 * (1 - Math.exp(-l * 30)))) * Math.exp(-l * 18);
          else if (c === 2) m = Math.sin(2 * Math.PI * r * l) + Math.sin(2 * Math.PI * r * 2.003 * l) * 0.18;
          else {
            const S = Math.random() * 2 - 1;
            (D += 0.35 * (S - D)), (m = (S - D) * Math.exp(-l * 80));
          }
          (m *= Y * q), (C[G + k] += m * (1 - R * 0.3)), (Q[G + k] += m * (1 + R * 0.3));
        }
      },
      t = [45, 45, 41, 41, 48, 48, 43, 43],
      h = [0, 7, 12, 10, 7, 3, 7, 14];
    for (let U = 0; U < o; U++) {
      const M = t[U],
        r = (Y) => 440 * Math.pow(2, (Y - 69) / 12);
      for (let Y = 0; Y < 16; Y++) {
        const c = (U * 16 + Y) * E;
        Y % 4 === 0 && a(c, 0.18, 0, 0.19, 1),
          Y % 2 === 1 && a(c, 0.06, 0, 0.055, 3, Y % 4 === 1 ? -0.5 : 0.5),
          (Y === 4 || Y === 12) && a(c, 0.1, 0, 0.11, 3),
          Y % 2 === 0 && a(c, E * 1.7, r(M + (Y === 14 ? 7 : 0)), 0.105, 0),
          Y % 4 === 2 && a(c, E * 3, r(M + 24 + h[(U * 2 + Y / 2) % 8]), 0.042, 2, U % 2 ? 0.45 : -0.45);
      }
      for (const Y of [0, 3, 7]) a(U * 16 * E, E * 15, r(M + 12 + Y), 0.018, 2, Y === 0 ? -0.7 : 0.7);
    }
    for (let U = 0; U < C.length; U++) (C[U] = Math.tanh(C[U])), (Q[U] = Math.tanh(Q[U]));
    const s = A.createBufferSource();
    (s.buffer = I),
      (s.loop = !0),
      (this.synthGain = A.createGain()),
      (this.synthGain.gain.value = 0),
      s.connect(this.synthGain),
      this.synthGain.connect(this.musicBus),
      s.start(),
      (this.musicSource = s);
  }
}
function Po(e, A, g) {
  return A + (g - A) * ((e * 0.37 + 0.17) % 1);
}
const p = (e, A) => e + Math.random() * (A - e),
  V = (e, A, g) => Math.max(A, Math.min(g, e)),
  H = (e, A) => Math.hypot(e.x - A.x, e.y - A.y),
  fA = (e, A) => Math.atan2(Math.sin(e - A), Math.cos(e - A));
class DA {
  constructor(A, g = 3e3) {
    (this.factory = A), (this.max = g);
  }
  factory;
  max;
  objects = [];
  get() {
    let A = this.objects.find((g) => !g.active);
    return (
      !A && this.objects.length < this.max && ((A = this.factory()), this.objects.push(A)),
      A && (A.active = !0),
      A
    );
  }
  each(A) {
    for (const g of this.objects) g.active && A(g);
  }
  clear() {
    this.objects.forEach((A) => (A.active = !1));
  }
  get count() {
    let A = 0;
    for (const g of this.objects) g.active && A++;
    return A;
  }
}
class $o {
  cells = new Map();
  size = 96;
  clear() {
    for (const A of this.cells.values()) A.length = 0;
  }
  key(A, g) {
    return (A + 32) * 1e3 + (g + 32);
  }
  add(A) {
    const g = this.key(Math.floor(A.x / this.size), Math.floor(A.y / this.size));
    let B = this.cells.get(g);
    B || this.cells.set(g, (B = [])), B.push(A);
  }
  query(A, g, B, E = []) {
    E.length = 0;
    for (let o = Math.floor((A - B) / this.size); o <= Math.floor((A + B) / this.size); o++)
      for (let i = Math.floor((g - B) / this.size); i <= Math.floor((g + B) / this.size); i++) {
        const I = this.cells.get(this.key(o, i));
        if (I) for (const C of I) C.active && E.push(C);
      }
    return E;
  }
}
const qB = () => ({
    version: 1,
    heroRosterVersion: 2,
    points: 3,
    talents: {},
    settings: {
      master: 0.65,
      sfx: 0.7,
      music: 0.32,
      uiVolume: 0.65,
      reducedMotion:
        typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches,
      dangerContrast: !1,
      muteUnfocused: !0,
      quality: "auto",
      cameraZoom: 0.75,
      cameraZoomVersion: 2,
      shake: 0.45,
      flashes: 0.4,
      particles: 0.8,
      numbers: !0,
      manual: !1,
      uiTheme: "a",
    },
    history: [],
    seen: [],
    bestWave: 0,
    kills: 0,
    challenges: [],
    difficultyClears: {},
    tutorialSeen: !1,
  }),
  tA = (e) => (e && typeof e == "object" && !Array.isArray(e) ? e : {}),
  P = (e, A, g = 0, B = 1e9) => (typeof e == "number" && Number.isFinite(e) ? V(e, g, B) : A),
  N = (e, A = 0, g = 0, B = 1e9) => Math.floor(P(e, A, g, B)),
  lg = (e, A = 100) => (typeof e == "string" ? e.replace(/[<>&"'\u0000-\u001f]/g, "").slice(0, A) : "");
function Ug(e) {
  const A = tA(e),
    g = qB();
  if (A.version !== 1) throw new Error("Unbekanntes Spielstandformat.");
  const B = tA(A.settings);
  for (const Q of ["master", "sfx", "music", "uiVolume", "shake", "flashes", "particles"])
    g.settings[Q] = P(B[Q], g.settings[Q], 0, 1);
  (g.settings.cameraZoom =
    B.cameraZoom === 1 && B.cameraZoomVersion !== 2 ? 0.75 : P(B.cameraZoom, 0.75, 0.6, 1.2)),
    (g.settings.cameraZoomVersion = 2),
    ["auto", "high", "low"].includes(B.quality) && (g.settings.quality = B.quality),
    (g.settings.uiTheme = "a");
  for (const Q of ["numbers", "manual", "reducedMotion", "dangerContrast", "muteUnfocused"])
    typeof B[Q] == "boolean" && (g.settings[Q] = B[Q]);
  (g.points = N(A.points, 3)), (g.kills = N(A.kills)), (g.bestWave = N(A.bestWave, 0, 0, 1e4));
  const E = tA(A.talents);
  for (const Q of b) N(E[Q.id], 0, 0, Q.max) && (g.talents[Q.id] = N(E[Q.id], 0, 0, Q.max));
  for (let Q = 0; Q < b.length; Q++)
    for (const a of b) a.parent && !g.talents[a.parent] && delete g.talents[a.id];
  const o = A.heroRosterVersion === 2,
    i = tA(A.difficultyClears);
  for (let Q = 0; Q < J.length; Q++)
    typeof i[Q] == "number" &&
      Number.isInteger(i[Q]) &&
      i[Q] >= 0 &&
      i[Q] <= 2 &&
      (o
        ? (g.difficultyClears[Q] = i[Q])
        : (g.difficultyClears[0] = Math.max(g.difficultyClears[0] ?? -1, i[Q])));
  const I = new Set([...j, ..._].map((Q) => Q.id));
  Array.isArray(A.seen) &&
    (g.seen = [...new Set(A.seen.filter((Q) => typeof Q == "string" && I.has(Q)))].slice(0, 64)),
    Array.isArray(A.challenges) &&
      (g.challenges = [
        ...new Set(A.challenges.filter((Q) => ["hundred", "crown", "risk", "six"].includes(String(Q)))),
      ]),
    (g.tutorialSeen = A.tutorialSeen === !0),
    Array.isArray(A.history) &&
      (g.history = A.history
        .slice(0, 20)
        .filter((Q) => Q && typeof Q == "object")
        .map((Q) => {
          const a = tA(Q),
            t = new Date(typeof a.date == "string" ? a.date : "");
          return {
            wave: N(a.wave, 1, 1, 1e4),
            kills: N(a.kills),
            time: P(a.time, 0),
            won: a.won === !0,
            character: lg(a.character, 40),
            damage: N(a.damage),
            date: Number.isFinite(t.getTime()) ? t.toISOString() : new Date(0).toISOString(),
            weapons: Array.isArray(a.weapons) ? a.weapons.slice(0, 6).map((h) => lg(h, 60)) : [],
            difficulty:
              typeof a.difficulty == "number" &&
              Number.isInteger(a.difficulty) &&
              a.difficulty >= 0 &&
              a.difficulty <= 2
                ? a.difficulty
                : void 0,
            map: lg(a.map, 60),
          };
        }));
  const C = tA(A.checkpoint);
  if (
    C.version === 1 &&
    Array.isArray(C.weapons) &&
    C.weapons.length > 0 &&
    C.weapons.length <= 6 &&
    Number.isInteger(C.character) &&
    C.character >= 0 &&
    C.character < (o ? J.length : 3) &&
    Number.isInteger(C.map) &&
    C.map >= 0 &&
    C.map < 6 &&
    Number.isInteger(C.difficulty) &&
    C.difficulty >= 0 &&
    C.difficulty <= 2 &&
    C.hp > 0
  ) {
    const Q = [];
    for (const a of C.weapons) {
      const t = tA(a);
      !j.some((h) => h.id === t.id) ||
        Q.some((h) => h.id === t.id) ||
        Q.push({
          id: t.id,
          tier: N(t.tier, 1, 1, 4),
          mutation: (dg[t.id] || []).some((h) => h.name === t.mutation) ? t.mutation : "",
        });
    }
    if (Q.length === C.weapons.length) {
      const a = {},
        t = {};
      for (const s of Object.keys(_A))
        typeof tA(C.bonus)[s] == "number" && (a[s] = P(C.bonus[s], 0, -1e3, 1e5));
      for (const s of _) {
        const U = N(tA(C.items)[s.id], 0, 0, 100);
        U && (t[s.id] = U);
      }
      const h = {};
      for (const s of b) {
        const U = N(tA(C.talents ?? g.talents)[s.id], 0, 0, s.max);
        U && (h[s.id] = U);
      }
      for (let s = 0; s < b.length; s++) for (const U of b) U.parent && !h[U.parent] && delete h[U.id];
      g.checkpoint = {
        version: 1,
        character: o ? C.character : 0,
        map: C.map,
        difficulty: C.difficulty,
        wave: N(C.wave, 1, 1, 1e4),
        hp: P(C.hp, 1, 1, 1e6),
        x: P(C.x, 0, -940, 940),
        y: P(C.y, 0, -660, 660),
        money: P(C.money, 0),
        xp: P(C.xp, 0),
        xpNeed: P(C.xpNeed, 8, 1),
        level: N(C.level, 1, 1, 1e4),
        runTime: P(C.runTime, 0),
        kills: N(C.kills),
        runDamage: P(C.runDamage, 0),
        maxKillStreak: N(C.maxKillStreak),
        talents: h,
        bonus: a,
        items: t,
        weapons: Q,
        risks: N(C.risks),
        riskBonus: P(C.riskBonus, 0),
        danger: C.danger === !0,
        endless: C.endless === !0,
        climb: Math.max(0, Math.min(2, N(C.climb))),
        climbY: P(C.climbY, 0),
      };
    }
  }
  return g;
}
class JA {
  data = qB();
  error = "";
  constructor() {
    try {
      const A = localStorage.getItem("nachtschrott-v1");
      if (A)
        try {
          this.data = JA.parse(A);
          return;
        } catch {}
      const g = localStorage.getItem("nachtschrott-v1-backup");
      if (g)
        try {
          (this.data = JA.parse(g)),
            (this.error = "Beschädigter Spielstand: lokale Sicherung wiederhergestellt.");
          return;
        } catch {}
      A &&
        (this.error =
          "Spielstand beschädigt. Neue Sitzung; eine exportierte Sicherung kann importiert werden.");
    } catch {
      this.error = "Speichern nicht verfügbar: Fortschritt bleibt nur in dieser Sitzung.";
    }
  }
  static parse(A) {
    if (A.length > 1e6) throw new Error("Spielstanddatei ist zu groß.");
    return Ug(JSON.parse(A));
  }
  export() {
    return JSON.stringify(Ug(this.data), null, 2);
  }
  write() {
    try {
      const A = localStorage.getItem("nachtschrott-v1");
      if (A)
        try {
          const g = JA.parse(A);
          localStorage.setItem("nachtschrott-v1-backup", JSON.stringify(g));
        } catch {}
      localStorage.setItem("nachtschrott-v1", JSON.stringify(Ug(this.data))), (this.error = "");
    } catch {
      this.error =
        "Speicher ist voll oder gesperrt. Fortschritt bleibt in dieser Sitzung. Bitte Sicherung exportieren.";
    }
  }
}
function bg(e, A) {
  const g = {
    hp: 65,
    damage: 1,
    speed: 1,
    attackSpeed: 1,
    crit: 0.05,
    armor: 0,
    pickup: 100,
    regen: 0,
    lifesteal: 0,
    bleed: 0,
    burn: 1,
    chain: 0,
    bounce: 0,
    projectiles: 0,
    economy: 0,
    luck: 0,
    engineering: 1,
    knockback: 1,
    poison: 1,
    dash: 0,
    ability: 1,
    range: 1,
  };
  for (const [B, E] of Object.entries(J[e].stats)) g[B] += E;
  for (const B of b) g[B.stat] += B.value * (A.talents[B.id] || 0);
  return g;
}
const _o = [
  "range",
  "poison",
  "dash",
  "ability",
  "damage",
  "attackSpeed",
  "crit",
  "lifesteal",
  "burn",
  "luck",
  "engineering",
  "knockback",
  "speed",
];
function lA(e, A, g = !1) {
  return _o.includes(e)
    ? `${g && A > 0 ? "+" : ""}${Math.round(A * 100)} %`
    : `${g && A > 0 ? "+" : ""}${Number(A.toFixed(1)).toLocaleString("de-DE")}`;
}
const Ai = "#0c101a";
var u = ((e) => (
    (e[(e.Smoke = 0)] = "Smoke"),
    (e[(e.Glow = 1)] = "Glow"),
    (e[(e.Light = 2)] = "Light"),
    (e[(e.Spark = 3)] = "Spark"),
    (e[(e.Casing = 4)] = "Casing"),
    (e[(e.Chip = 5)] = "Chip"),
    (e[(e.Ring = 6)] = "Ring"),
    (e[(e.Splat = 7)] = "Splat"),
    (e[(e.Star = 8)] = "Star"),
    (e[(e.Tracer = 9)] = "Tracer"),
    (e[(e.Decal = 10)] = "Decal"),
    (e[(e.Twinkle = 11)] = "Twinkle"),
    (e[(e.Ember = 12)] = "Ember"),
    (e[(e.Sheet = 13)] = "Sheet"),
    e
  ))(u || {}),
  aA = ((e) => (
    (e[(e.Crack = 0)] = "Crack"),
    (e[(e.Scrape = 1)] = "Scrape"),
    (e[(e.Goo = 2)] = "Goo"),
    (e[(e.Scorch = 3)] = "Scorch"),
    e
  ))(aA || {});
const AA = Math.PI * 2,
  W = (e, A) => e + Math.random() * (A - e),
  hA = new Map();
function NA(e) {
  const A = document.createElement("canvas");
  return (A.width = A.height = e), A;
}
function EA(e, A) {
  return (
    (e.length === 4 ? e.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3") : e.slice(0, 7)) +
    Math.round(Math.max(0, Math.min(1, A)) * 255)
      .toString(16)
      .padStart(2, "0")
  );
}
function dA(e) {
  const A = "g" + e;
  let g = hA.get(A);
  if (!g) {
    g = NA(64);
    const B = g.getContext("2d"),
      E = B.createRadialGradient(32, 32, 0, 32, 32, 32);
    E.addColorStop(0, EA(e, 1)),
      E.addColorStop(0.25, EA(e, 0.55)),
      E.addColorStop(0.6, EA(e, 0.14)),
      E.addColorStop(1, EA(e, 0)),
      (B.fillStyle = E),
      B.fillRect(0, 0, 64, 64),
      hA.set(A, g);
  }
  return g;
}
function vg(e, A, g) {
  const B = `s${e}${A}${g}`;
  let E = hA.get(B);
  if (!E) {
    E = NA(96);
    const o = E.getContext("2d");
    let i = g * 9301 + 49297;
    const I = () => (i = (i * 9301 + 49297) % 233280) / 233280,
      C = [];
    for (let a = 0; a < 7; a++) {
      const t = I() * AA,
        h = I() * 18;
      C.push([48 + Math.cos(t) * h, 50 + Math.sin(t) * h * 0.8, 14 + I() * 14]);
    }
    for (const [a, t, h] of C) {
      const s = o.createRadialGradient(a, t, h * 0.1, a, t, h);
      s.addColorStop(0, EA(e, 0.95)),
        s.addColorStop(0.7, EA(e, 0.6)),
        s.addColorStop(1, EA(e, 0)),
        (o.fillStyle = s),
        o.beginPath(),
        o.arc(a, t, h, 0, AA),
        o.fill();
    }
    o.globalCompositeOperation = "source-atop";
    const Q = o.createLinearGradient(20, 18, 70, 78);
    Q.addColorStop(0, EA(A, 0.75)),
      Q.addColorStop(0.35, EA(A, 0)),
      (o.fillStyle = Q),
      o.fillRect(0, 0, 96, 96),
      hA.set(B, E);
  }
  return E;
}
function gi(e, A) {
  const g = `p${e}${A}`;
  let B = hA.get(g);
  if (!B) {
    B = NA(72);
    const E = B.getContext("2d");
    E.translate(36, 36);
    const o = 7 + A;
    E.beginPath();
    for (let i = 0; i <= o * 2; i++) {
      const I = (i / (o * 2)) * AA + A,
        C = i % 2 ? 11 + ((i * 7 + A * 3) % 5) : 25 + ((i * 13 + A * 5) % 9);
      E.lineTo(Math.cos(I) * C, Math.sin(I) * C);
    }
    E.closePath(),
      (E.fillStyle = e),
      E.fill(),
      (E.lineWidth = 3),
      (E.strokeStyle = Ai),
      (E.lineJoin = "round"),
      E.stroke(),
      (E.fillStyle = "#fff6dd"),
      E.beginPath(),
      E.arc(-3, -3, 7, 0, AA),
      E.fill(),
      hA.set(g, B);
  }
  return B;
}
function Bi(e) {
  const A = "m" + e;
  let g = hA.get(A);
  if (!g) {
    g = NA(96);
    const B = g.getContext("2d");
    B.translate(48, 48);
    const E = B.createRadialGradient(0, 0, 0, 0, 0, 46);
    E.addColorStop(0, "#ffffff"),
      E.addColorStop(0.18, EA(e, 1)),
      E.addColorStop(1, EA(e, 0)),
      (B.fillStyle = E),
      B.beginPath();
    for (let o = 0; o <= 16; o++) {
      const i = (o / 16) * AA,
        I = o % 2 ? 12 : o % 4 === 0 ? 46 : 28;
      B.lineTo(Math.cos(i) * I * (o % 8 === 0 ? 1 : 0.8), Math.sin(i) * I * 0.62);
    }
    B.fill(), hA.set(A, g);
  }
  return g;
}
function Ei(e, A, g = "#6f7a45") {
  const B = `d${e}${A}${g}`;
  let E = hA.get(B);
  if (!E) {
    E = NA(128);
    const o = E.getContext("2d");
    o.translate(64, 64);
    let i = A * 733 + e * 97 + 11;
    const I = () => (i = (i * 9301 + 49297) % 233280) / 233280;
    if (e === 0) {
      const C = o.createRadialGradient(0, 0, 0, 0, 0, 58);
      C.addColorStop(0, "#0c0a0c88"),
        C.addColorStop(1, "#0c0a0c00"),
        (o.fillStyle = C),
        o.beginPath(),
        o.ellipse(0, 0, 58, 40, 0, 0, AA),
        o.fill();
      for (let Q = 0; Q < 9; Q++) {
        let a = 0,
          t = 0,
          h = (Q / 9) * AA + I() * 0.5;
        o.beginPath(), o.moveTo(0, 0);
        const s = 3 + Math.floor(I() * 3);
        for (let U = 0; U < s; U++) {
          h += (I() - 0.5) * 0.9;
          const M = 8 + I() * 12;
          (a += Math.cos(h) * M), (t += Math.sin(h) * M * 0.7), o.lineTo(a, t);
        }
        (o.lineCap = "round"),
          (o.lineJoin = "round"),
          (o.strokeStyle = "#d8c3a066"),
          (o.lineWidth = 4.5 - Q * 0.2),
          o.stroke(),
          (o.strokeStyle = "#08070a"),
          (o.lineWidth = 2.6 - Q * 0.12),
          o.stroke();
      }
    } else if (e === 1)
      for (let C = 0; C < 5; C++) {
        const Q = -14 + C * 7 + I() * 3;
        (o.strokeStyle = C % 2 ? "#0b090b55" : "#d9c39a33"),
          (o.lineWidth = 3 + I() * 3),
          (o.lineCap = "round"),
          o.beginPath(),
          o.moveTo(-56 + I() * 10, Q),
          o.lineTo(50 - I() * 18, Q + (I() - 0.5) * 4),
          o.stroke();
      }
    else if (e === 2) {
      (o.fillStyle = EA(g, 0.85)), (o.strokeStyle = "#1c1f12"), (o.lineWidth = 2.5), o.beginPath();
      const C = 10;
      for (let Q = 0; Q <= C; Q++) {
        const a = (Q / C) * AA,
          t = 26 + I() * 16;
        o.lineTo(Math.cos(a) * t, Math.sin(a) * t * 0.55);
      }
      o.closePath(),
        o.fill(),
        o.stroke(),
        (o.fillStyle = "#c9cf8a88"),
        o.beginPath(),
        o.ellipse(-8, -5, 9, 3.5, -0.3, 0, AA),
        o.fill();
      for (let Q = 0; Q < 4; Q++)
        (o.fillStyle = EA(g, 0.85)),
          o.beginPath(),
          o.arc((I() - 0.5) * 100, (I() - 0.5) * 50, 3 + I() * 5, 0, AA),
          o.fill(),
          o.stroke();
    } else {
      const C = o.createRadialGradient(0, 0, 4, 0, 0, 60);
      C.addColorStop(0, "#050304cc"),
        C.addColorStop(0.5, "#14090655"),
        C.addColorStop(1, "#14090600"),
        (o.fillStyle = C),
        o.beginPath(),
        o.ellipse(0, 0, 60, 42, 0, 0, AA),
        o.fill();
    }
    hA.set(B, E);
  }
  return E;
}
class oi {
  constructor(A = 1400) {
    this.capacity = A;
    for (let g = 0; g < A; g++)
      this.items.push({
        active: !1,
        kind: 0,
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        life: 0,
        max: 1,
        size: 1,
        grow: 0,
        rot: 0,
        vr: 0,
        color: "#fff",
        alpha: 1,
        tx: 0,
        ty: 0,
        variant: 0,
        drag: 0,
        rise: 0,
        rim: "",
      }),
        this.free.push(A - 1 - g);
  }
  capacity;
  items = [];
  free = [];
  count = 0;
  spawned = 0;
  rejected = 0;
  peak = 0;
  sheets = !0;
  sheetCount = 0;
  get sheetCap() {
    const A = this.settings;
    return Math.round(
      (A.mobile ? 5 : 10) *
        (A.quality === "low" ? 0.5 : 1) *
        (A.enemies > 300 ? 0.6 : 1) *
        (A.reduced ? 0.6 : 1) *
        ((A.views ?? 1) > 1 ? 0.6 : 1),
    );
  }
  settings = { particles: 1, flashes: 1, reduced: !1, mobile: !1, enemies: 0, quality: "auto" };
  get budget() {
    const A = this.settings;
    let g = A.mobile ? 360 : 1100;
    return (
      A.quality === "low" && (g *= 0.5),
      A.enemies > 300 ? (g *= 0.55) : A.enemies > 180 && (g *= 0.75),
      A.reduced && (g *= 0.4),
      (A.views ?? 1) > 1 && (g *= 0.25),
      Math.min(this.capacity, Math.floor(g * Math.max(0.15, A.particles)))
    );
  }
  get density() {
    const A = this.settings;
    return (
      A.particles *
      (A.reduced ? 0.4 : 1) *
      (A.enemies > 300 ? 0.6 : 1) *
      (A.mobile ? 0.7 : 1) *
      ((A.views ?? 1) > 1 ? 0.6 : 1)
    );
  }
  spawn(A, g, B, E, o, i, I = !1) {
    if (this.settings.particles <= 0 && !I) return;
    const C = this.budget;
    if (!this.free.length || this.count >= (I ? C * 1.3 + 24 : C)) {
      this.rejected++;
      return;
    }
    const Q = this.items[this.free.pop()];
    return (
      (Q.active = !0),
      (Q.kind = A),
      (Q.x = g),
      (Q.y = B),
      (Q.z = 0),
      (Q.vx = Q.vy = Q.vz = 0),
      (Q.life = Q.max = E),
      (Q.size = o),
      (Q.grow = 0),
      (Q.rot = 0),
      (Q.vr = 0),
      (Q.color = i),
      (Q.alpha = 1),
      (Q.tx = Q.ty = 0),
      (Q.variant = 0),
      (Q.drag = 4),
      (Q.rise = 0),
      (Q.rim = ""),
      this.count++,
      this.spawned++,
      this.count > this.peak && (this.peak = this.count),
      Q
    );
  }
  n(A) {
    return Math.max(A > 0 ? 1 : 0, Math.round(A * this.density));
  }
  update(A) {
    for (let g = 0; g < this.items.length; g++) {
      const B = this.items[g];
      if (!B.active) continue;
      if (((B.life -= A), B.life <= 0)) {
        (B.active = !1), this.free.push(g), this.count--, B.kind === 13 && this.sheetCount--;
        continue;
      }
      const E = Math.exp(-A * B.drag);
      (B.vx *= E),
        (B.vy *= E),
        (B.x += B.vx * A),
        (B.y += B.vy * A),
        (B.rot += B.vr * A),
        (B.size += B.grow * A),
        B.kind === 4 || B.kind === 5
          ? ((B.z += B.vz * A),
            (B.vz -= 900 * A),
            B.z < 0 &&
              ((B.z = 0),
              (B.vz = Math.abs(B.vz) > 90 ? -B.vz * 0.38 : 0),
              (B.vx *= 0.55),
              (B.vy *= 0.55),
              (B.vr *= 0.5)))
          : B.rise && (B.y -= B.rise * A);
    }
  }
  clear() {
    for (let A = 0; A < this.items.length; A++)
      this.items[A].active && ((this.items[A].active = !1), this.free.push(A));
    (this.count = 0), (this.sheetCount = 0);
  }
  smoke(A, g, B, E, o = "#5b5452", i = "#e8c79a", I = 0.9, C = 22, Q = 0, a = 0) {
    for (let t = 0; t < this.n(B); t++) {
      const h = this.spawn(0, A + W(-C, C) * 0.5, g + W(-C, C) * 0.35, I * W(0.75, 1.25), E * W(0.7, 1.2), o);
      if (!h) return;
      (h.tx = i.length ? 1 : 0),
        (h.ty = 0),
        (h.vx = Q + W(-30, 30)),
        (h.vy = a + W(-24, 14)),
        (h.grow = E * 1.4),
        (h.rise = 14),
        (h.drag = 3),
        (h.variant = Math.floor(Math.random() * 3)),
        (h.vr = W(-1, 1)),
        (h.rot = W(0, AA)),
        (h.alpha = W(0.55, 0.85)),
        (h.rim = i);
    }
  }
  blackSmoke(A, g, B, E, o = 1.6, i = 30, I = 0, C = 0, Q = 1) {
    for (let a = 0; a < this.n(B); a++) {
      const t = a % 3 === 0,
        h = this.spawn(
          0,
          A + W(-i, i) * 0.5,
          g + W(-i, i) * 0.35,
          o * W(0.8, 1.25),
          E * W(0.8, 1.25) * (t ? 0.8 : 1),
          t ? "#040306" : "#0a090d",
        );
      if (!h) return;
      (h.tx = 1),
        (h.ty = 1),
        (h.vx = I + W(-40, 40)),
        (h.vy = C + W(-30, 16)),
        (h.grow = E * 1.15),
        (h.rise = 14),
        (h.drag = 2.6),
        (h.variant = Math.floor(Math.random() * 3)),
        (h.vr = W(-1.4, 1.4)),
        (h.rot = W(0, AA)),
        (h.alpha = (t ? W(0.95, 1) : W(0.85, 0.97)) * Q),
        (h.rim = t ? "#3e3b45" : "#878390");
    }
  }
  sheet(A, g, B, E = 1, o = 0, i = 0.5) {
    if (!this.sheets || this.settings.particles <= 0) return;
    const I = A === "boom";
    if (!I && this.sheetCount >= this.sheetCap) return;
    const C = aE[A],
      Q = mA[C],
      a = this.spawn(13, g, B, Q.frames * Q.dt, E, "#fff", I);
    a &&
      (this.sheetCount++,
      (a.variant = C),
      (a.rot = o),
      (a.tx = Math.cos(o) < 0 ? -1 : 1),
      (a.alpha = i * this.settings.flashes),
      (a.drag = 0));
  }
  light(A, g, B, E, o = 0.12) {
    if (this.settings.flashes <= 0) return;
    const i = this.spawn(2, A, g, o, B, E, !0);
    i && (i.alpha = Math.min(1, this.settings.flashes));
  }
  glow(A, g, B, E, o = 0.1) {
    if (this.settings.flashes <= 0) return;
    const i = this.spawn(1, A, g, o, B, E);
    i && (i.alpha = Math.min(1, this.settings.flashes));
  }
  sparks(A, g, B, E, o, i, I = "#ffd27a", C = 0.28) {
    for (let Q = 0; Q < this.n(o); Q++) {
      const a = B + W(-E, E),
        t = i * W(0.45, 1.15),
        h = this.spawn(3, A, g, C * W(0.6, 1.2), W(1.4, 2.6), I);
      if (!h) return;
      (h.vx = Math.cos(a) * t), (h.vy = Math.sin(a) * t - W(0, 60)), (h.drag = 5.5);
    }
  }
  embers(A, g, B, E = "#ffb066", o = 20) {
    for (let i = 0; i < this.n(B); i++) {
      const I = this.spawn(12, A + W(-o, o), g + W(-o, o) * 0.6, W(0.5, 1.1), W(1.2, 2.4), E);
      if (!I) return;
      (I.vx = W(-25, 25)), (I.vy = W(-10, 10)), (I.rise = W(25, 60)), (I.drag = 2);
    }
  }
  trail(A, g, B, E = 2.2, o = 0.35, i = 8) {
    const I = this.spawn(12, A, g, o, E, B);
    I && (I.rise = i);
  }
  ring(A, g, B, E, o, i = 0.3, I = 4) {
    const C = this.spawn(6, A, g, i, B, o, !0);
    C && ((C.grow = (E - B) / i), (C.tx = I));
  }
  splat(A, g, B, E = 1, o = 0.22) {
    const i = this.spawn(7, A, g, o, 22 * E, B);
    i && ((i.variant = Math.floor(Math.random() * 3)), (i.rot = W(0, AA)), (i.grow = 40 * E));
  }
  star(A, g, B, E, o, i = 0.06) {
    if (this.settings.flashes <= 0) return;
    const I = this.spawn(8, A, g, i, E, o, !0);
    I && ((I.rot = B), (I.alpha = Math.min(1, 0.4 + this.settings.flashes * 0.6)));
  }
  tracer(A, g, B, E, o, i = 0.07, I = 2.2) {
    const C = this.spawn(9, A, g, i, I, o);
    C && ((C.tx = B), (C.ty = E));
  }
  casing(A, g, B, E = "#e2b35c") {
    const o = this.spawn(4, A, g, W(0.9, 1.4), 1, E);
    if (!o) return;
    const i = Math.cos(B) >= 0 ? -1 : 1,
      I = B + i * Math.PI * 0.5 + W(-0.4, 0.4);
    (o.vx = Math.cos(I) * W(90, 150) - Math.cos(B) * 30),
      (o.vy = Math.sin(I) * W(40, 80)),
      (o.z = 18),
      (o.vz = W(170, 260)),
      (o.vr = W(14, 24) * i),
      (o.drag = 1.2);
  }
  chips(A, g, B, E, o = 1, i = 4) {
    for (let I = 0; I < this.n(B); I++) {
      const C = W(0, AA),
        Q = W(60, 220) * o,
        a = this.spawn(5, A, g, W(0.6, 1.1), i * W(0.6, 1.4), E);
      if (!a) return;
      (a.vx = Math.cos(C) * Q),
        (a.vy = Math.sin(C) * Q * 0.6),
        (a.z = W(6, 20)),
        (a.vz = W(140, 320) * o),
        (a.vr = W(-18, 18)),
        (a.variant = Math.floor(Math.random() * 3)),
        (a.drag = 1.5);
    }
  }
  twinkle(A, g, B, E = "#ffe08a", o = 18) {
    for (let i = 0; i < this.n(B); i++) {
      const I = this.spawn(11, A + W(-o, o), g + W(-o, o) * 0.7, W(0.3, 0.6), W(3, 6), E);
      if (!I) return;
      (I.rise = W(10, 30)), (I.vr = W(-4, 4));
    }
  }
  decal(A, g, B, E, o = 0, i = 3, I) {
    const C = this.spawn(10, g, B, i, E, I ?? "#6f7a45", !0);
    C && ((C.variant = (Math.random() * 3) | 0), (C.tx = A), (C.rot = o));
  }
  muzzle(A, g, B, E, o = 1, i = !0) {
    this.star(A, g, B, 32 * o, E, 0.065),
      this.star(A + Math.cos(B) * 5, g + Math.sin(B) * 5, B, 17 * o, "#fff6dc", 0.045),
      this.glow(A, g, 32 * o, E, 0.08),
      this.light(A, g + 18, 90 * o, E, 0.1),
      i &&
        this.smoke(
          A + Math.cos(B) * 12,
          g + Math.sin(B) * 12,
          2 + o,
          11 * o,
          "#6c6560",
          "#f2d2a0",
          0.6,
          10,
          Math.cos(B) * 80,
          Math.sin(B) * 80,
        ),
      this.sparks(A, g, B, 0.4, 4 + o * 3, 440, "#ffe1a0", 0.17);
  }
  impact(A, g, B, E, o, i = !1, I = 1) {
    const C = I * (i ? 1.6 : 1);
    this.star(A, g, B + Math.PI, 15 * C, "#fff1cf", 0.045),
      E === 1
        ? (this.sheet("spark", A, g, 0.7 * C, B + Math.PI, 0),
          this.sparks(A, g, B + Math.PI, 1.3, 6 * C, 400 * C, "#ffe3a1", 0.28),
          this.glow(A, g, 38 * C, "#ffd27a", 0.08))
        : E === 2
          ? (this.sheet("bullet", A, g, 0.5 * C, B, 0),
            this.chips(A, g, 5 * C, "#9c948c", 1 * C, 4.5),
            this.smoke(A, g, 2, 13 * C, "#8e857c", "#e9dcc6", 0.5, 8))
          : (this.splat(A, g, o, 0.95 * C, 0.2), this.sparks(A, g, B, 0.8, 4 * C, 280, o, 0.22)),
      i && (this.ring(A, g, 8, 64, "#ffe2a0", 0.24, 4), this.glow(A, g, 64, "#ffcf86", 0.11));
  }
  explosion(A, g, B, E = "#ff9a4f") {
    this.sheet("boom", A, g + B * 0.45, B / 44, 0, 0.55),
      this.glow(A, g, B * 1.1, "#fff1c4", 0.1),
      this.light(A, g, B * 2.4, E, 0.3),
      this.ring(A, g, B * 0.3, B * 1.4, "#ffe0b0", 0.32, 5),
      this.smoke(A, g, 3, B * 0.4, "#ff9b52", "#fff1c8", 0.3, B * 0.6, 0, -20),
      this.smoke(A, g, 6, B * 0.5, "#3e3634", "#d89c6c", 1.2, B * 0.8, 0, -30),
      this.sparks(A, g, 0, Math.PI, 14, 520, "#ffd28a", 0.45),
      this.chips(A, g, 6, "#4a3f3a", 1.2, 4),
      this.embers(A, g, 8, "#ffb066", B * 0.5),
      this.decal(3, A, g + 4, B * 1.3, 0, 4);
  }
}
const GA = [
    {
      id: "up",
      name: "Aufstieg",
      short: "Endloser Turmschacht",
      desc: "Endlos nach oben: Jede Welle schiebt die Kampffläche weiter den Turm hinauf. Die Kante unter dir bröckelt – bleib vorn. Alle 10 Wellen ein Endgegner, Werkstatt zwischen den Wellen.",
      dir: -1,
      unit: "HÖHE",
      theme: 0,
      floor: "floor-up",
      edge: "#ffb36a",
    },
    {
      id: "down",
      name: "Abstieg",
      short: "Endloser Minenschacht",
      desc: "Endlos nach unten: Jede Welle führt tiefer in die Mine. Über dir stürzt der Stollen ein – bleib in Bewegung. Alle 10 Wellen ein Endgegner, Werkstatt zwischen den Wellen.",
      dir: 1,
      unit: "TIEFE",
      theme: 1,
      floor: "floor-down",
      edge: "#9fd0ff",
    },
  ],
  Xg = 660,
  kA = 360;
function ii(e) {
  return () => {
    e = (e + 1831565813) | 0;
    let A = Math.imul(e ^ (e >>> 15), 1 | e);
    return (A ^= A + Math.imul(A ^ (A >>> 7), 61 | A)), ((A ^ (A >>> 14)) >>> 0) / 4294967296;
  };
}
const Ci = [
  { kind: 0, color: "#bd874d", light: "#ffcb79" },
  { kind: 1, color: "#526b83", light: "#82cce7" },
];
class Ii {
  mode = 0;
  y = 0;
  pool = [];
  crumbled = new Set();
  keys = [];
  lo = 1e9;
  hi = -1e9;
  fresh = [];
  get def() {
    return GA[Math.max(0, this.mode - 1)];
  }
  get covers() {
    return sA.list;
  }
  get active() {
    return this.mode > 0;
  }
  get metres() {
    return Math.max(0, Math.round((this.def.dir * this.y) / 10));
  }
  reset(A) {
    (this.mode = A),
      (this.y = 0),
      this.crumbled.clear(),
      (this.lo = 1e9),
      (this.hi = -1e9),
      (sA.active = A > 0),
      (sA.list.length = 0),
      A && this.refresh(!0);
  }
  speed(A) {
    return 24 + Math.min(34, A * 1.4);
  }
  advance(A, g) {
    this.mode && ((this.y += this.def.dir * this.speed(g) * A), this.refresh(!1));
  }
  trailing() {
    return this.y - this.def.dir * Xg;
  }
  leading() {
    return this.y + this.def.dir * Xg;
  }
  refresh(A) {
    const g = Math.floor((this.y - 1e3) / kA),
      B = Math.floor((this.y + 1e3) / kA);
    this.fresh.length = 0;
    const E = this.trailing(),
      o = this.def.dir;
    for (let Q = sA.list.length - 1; Q >= 0; Q--) {
      const a = sA.list[Q];
      (E - a.y) * o > -(a.r + 60) &&
        (this.crumbled.add(a.key), this.fresh.push({ ...a }), sA.list.splice(Q, 1));
    }
    if (!A && g === this.lo && B === this.hi) return;
    (this.lo = g), (this.hi = B), (sA.list.length = 0);
    let i = 0;
    const I = Ci[this.def.theme],
      C = this.def.id === "down";
    for (let Q = g; Q <= B; Q++) {
      if (Math.abs(Q) < 1) continue;
      let a = 0,
        t = 0;
      if (C) {
        const U = "p" + Q;
        if (
          ((a = ((Q + (Q < 0 ? 1 : 0)) % 2 ? -1 : 1) * 215),
          (t = Q * kA + kA / 2),
          !this.crumbled.has(U) && (E - t) * o <= -110)
        ) {
          const M = (this.pool[i] ??= { x: 0, y: 0, r: 40, h: 50, kind: 0, color: "", light: "" });
          i++,
            Object.assign(M, { x: a, y: t, r: 24, h: 196, kind: 5, color: "#6b5a4a", light: "", key: U }),
            sA.list.push(M);
        }
      }
      const h = ii(9137 + Q * 7919 + this.mode * 104729),
        s = h() < 0.25 ? 1 : 2;
      for (let U = 0; U < s; U++) {
        const M = Q + ":" + U;
        if (this.crumbled.has(M)) continue;
        const r = U === 0 ? -1 : 1,
          Y = Q * kA + 60 + h() * (kA - 120);
        let c = r * (180 + h() * 600);
        if (
          (C &&
            Math.sign(c) === Math.sign(a) &&
            Math.abs(c - a) < 150 &&
            Math.abs(Y - t) < 150 &&
            (c = a + r * 200),
          (E - Y) * o > -110)
        )
          continue;
        const R = (this.pool[i] ??= { x: 0, y: 0, r: 40, h: 50, kind: 0, color: "", light: "" });
        i++;
        const G = Math.floor(h() * 3);
        Object.assign(R, {
          x: c,
          y: Y,
          r: 36 + G * 8,
          h: 42 + G * 22,
          kind: I.kind,
          color: I.color,
          light: I.light,
          key: M,
        }),
          sA.list.push(R);
      }
    }
  }
}
const y = {
  base: 108,
  tierScale: [1, 1, 1.22, 1.46, 1.72],
  rangeGain: 1.6,
  rangeCap: 2.4,
  reachMax: 340,
  blutmond: 45,
  halfArc: 1.15,
  swing: 0.34,
  windup: 0.14,
  safeReach: 100,
};
function Qi(e) {
  return Math.min(y.rangeCap, Math.max(0.6, 1 + (e - 1) * y.rangeGain));
}
function ei(e, A, g) {
  const B = Math.max(1, Math.min(4, Math.floor(e || 1)));
  return Math.min(y.reachMax, y.base * y.tierScale[B] * Qi(A)) + (g === "Blutmond" ? y.blutmond : 0);
}
const ai = (e) => 1 + 2.4 * (e - 1) ** 3 + 1.4 * (e - 1) ** 2,
  si = (e) => e * e;
function ti(e, A, g) {
  if (g) {
    const I = Math.max(0, Math.min(1, e));
    return { angle: -1 + 2 * I, stretch: 1, smearFrom: -1, smearTo: -1 + 2 * I, alpha: e > 0 ? 1 - I : 0 };
  }
  if (e <= 0) {
    const I = si(Math.max(0, Math.min(1, A)));
    return { angle: -1.7 * I, stretch: 1 - 0.08 * I, smearFrom: 0, smearTo: 0, alpha: 0 };
  }
  const B = Math.min(1, e / 0.32),
    E = Math.max(0, (e - 0.32) / 0.68),
    o = -1.7 + 3.05 * ai(B) - 0.2 * E,
    i = 1 + 0.22 * Math.sin(Math.PI * B) * (1 - E);
  return { angle: o, stretch: i, smearFrom: -1.15, smearTo: Math.min(y.halfArc, o), alpha: 1 - E };
}
function Tg(e, A, g, B, E, o) {
  const i = [],
    I = e.grid.query(A, g, B, []).filter((a) => a.active && a.spawn <= 0);
  for (const a of I) {
    let t = a.type >= 7 ? 4 : 1;
    for (const h of I) h !== a && Math.abs(h.x - a.x) < 120 && Math.abs(h.y - a.y) < 120 && t++;
    i.push({ x: a.x, y: a.y, score: t });
  }
  i.sort((a, t) => t.score - a.score);
  const C = [];
  for (const a of i) {
    if (C.length >= E) break;
    C.every((t) => Math.hypot(t.x - a.x, t.y - a.y) > o) && C.push(a);
  }
  const Q = C.length;
  for (let a = 0; Q && C.length < E; a++) {
    const t = C[a % Q];
    C.push({ x: t.x + p(-45, 45), y: t.y + p(-30, 30) });
  }
  for (; C.length < E; ) {
    const a = (C.length / E) * Math.PI * 2 + p(-0.3, 0.3);
    C.push({ x: A + Math.cos(a) * p(140, 260), y: g + Math.sin(a) * p(100, 200) });
  }
  return C;
}
function hi(e, A) {
  const g = e.player,
    B = e.stats.ability,
    E = {
      hero: A,
      owner: e.actorIndex,
      t: 0,
      dur: [1.25, 4, 1.6, 5, 2.1, 3.2][A],
      x: g.x,
      y: g.y,
      power: B,
      a: 0,
      tick: 0,
      shots: 0,
      targets: [],
      hitSet: new Set(),
    },
    o = e.fx;
  switch (
    (e.audio.sound("ult_" + A, 1, 1, e.pan(g.x)), (e.shake = Math.max(e.shake, [4, 3, 3, 3, 2, 3][A])), A)
  ) {
    case 0:
      e.heal(10 * B),
        (g.invuln = Math.max(g.invuln, 0.5)),
        (E.a = g.face < 0 ? Math.PI : 0),
        o.ring(g.x, g.y + 20, 20, 120, "#ffd9a8", 0.3, 5);
      break;
    case 1:
      (g.invuln = Math.max(g.invuln, 1.5)), (e.dashCharges = e.dashMax), (e.dashRecharge = 0);
      for (const i of e.companions) i.cd = 0;
      o.blackSmoke(g.x, g.y, 8, 26, 1.1, 120, 0, -10, 0.7),
        o.ring(g.x, g.y, 30, 300, "#d9ccff", 0.5, 4),
        o.light(g.x, g.y, 380, "#7a66c8", 0.45);
      break;
    case 2:
      (g.invuln = Math.max(g.invuln, 1)),
        (E.targets = Tg(e, g.x, g.y, 520, 5, 130).map((i, I) => ({ ...i, t: 0.45 + I * 0.16, done: !1 }))),
        o.ring(g.x, g.y + 20, 20, 160, "#edaa7d", 0.35, 6),
        o.chips(g.x, g.y + 20, 10, "#7d746c", 1.4, 5);
      break;
    case 3:
      o.splat(g.x, g.y + 10, "#9fbf4a", 2.2, 0.4), o.ring(g.x, g.y + 12, 20, 80, "#cfe58a", 0.25, 6);
      break;
    case 4:
      g.invuln = Math.max(g.invuln, 0.8);
      for (const i of e.weapons) i.cd = 0;
      o.twinkle(g.x, g.y - 20, 14, "#ffd774", 40);
      break;
    default: {
      e.heal(e.stats.hp * 0.15 * B),
        (e.overdrive = 7),
        (g.invuln = Math.max(g.invuln, 0.6)),
        e.turrets.forEach((I) => {
          I.broken <= 0 && ((I.life = I.owner.mutation === "Wanderknecht" ? 24 : 18), (I.hp = I.maxHp)),
            (I.cd = 0);
        });
      for (const I of e.weapons) I.id === "turret" && (I.cd = 0);
      const i = Tg(e, g.x, g.y, 600, 1, 0)[0];
      (E.x = i.x), (E.y = i.y), o.tracer(g.x, g.y - 40, g.x, g.y - 900, "#bff6ff", 0.25, 6);
    }
  }
  return e.ults.push(E), E;
}
function UA(e, A, g, B, E) {
  for (const o of e.grid.query(A, g, B + e.maxEnemyRadius, []))
    o.active && o.spawn <= 0 && H(o, { x: A, y: g }) < B + o.r && E(o);
}
function li(e, A, g) {
  const B = e.player,
    E = e.fx,
    o = A.power * e.damageScale(),
    i = A.t;
  A.t += g;
  const I = (C) => i < C && A.t >= C;
  switch (((e.procBudget = Math.max(e.procBudget, 60)), A.hero)) {
    case 0: {
      if (A.t > 0.15 && A.t < 0.85) {
        const Q = (A.t - 0.15) / 0.7,
          a = Q < 0.5 ? 2 * Q * Q : 1 - (-2 * Q + 2) ** 2 / 2;
        A.a = (B.face < 0 ? Math.PI : 0) + a * Math.PI * 2 * (B.face < 0 ? -1 : 1);
        const t = B.x + Math.cos(A.a) * 190,
          h = B.y - 10 + Math.sin(A.a) * 190 * 0.62;
        UA(e, t, h, 58, (s) => {
          A.hitSet.has(s) ||
            (A.hitSet.add(s),
            e.hit(s, 60 * o, Math.atan2(s.y - B.y, s.x - B.x), s.type >= 8 ? 120 : 760, !0, !0),
            E.impact(s.x, s.y, A.a + Math.PI / 2, 1, "#ffd9a8", !0, 1.4));
        }),
          E.smoke(t, h + 20, 1, 12, "#8f7a5c", "#f3dfb8", 0.5, 10, 0, -10),
          Math.random() < 0.6 && E.sparks(t, h, A.a + Math.PI / 2, 0.5, 2, 300, "#ffd27a", 0.2);
      }
      if (I(1)) {
        const Q = B.x + (B.face < 0 ? -1 : 1) * 70,
          a = B.y + 12;
        UA(e, Q, a, 230, (t) =>
          e.hit(t, 45 * o, Math.atan2(t.y - a, t.x - Q), t.type >= 8 ? 100 : 520, !0, !0),
        ),
          E.explosion(Q, a, 90, "#ffb36a"),
          E.decal(aA.Crack, Q, a + 6, 300, p(0, 6), 5),
          E.ring(Q, a, 30, 240, "#ffe0b0", 0.45, 8),
          E.chips(Q, a, 16, "#7d6a52", 1.6, 6),
          E.smoke(Q, a, 8, 26, "#8f7a5c", "#f3dfb8", 1.1, 140, 0, -20),
          (e.shake = Math.max(e.shake, 12)),
          e.audio.sound("boss_slam", 0.85, 1.15, e.pan(Q));
      }
      break;
    }
    case 1: {
      if (
        ((A.tick -= g),
        UA(e, A.x, A.y, 300, (Q) => {
          Q.slow = Math.max(Q.slow, 0.4);
        }),
        A.tick <= 0)
      ) {
        (A.tick = 0.25),
          UA(e, A.x, A.y, 300, (Q) => e.hit(Q, 3.5 * o, Math.atan2(Q.y - A.y, Q.x - A.x), 0, !1, !1));
        for (let Q = 0; Q < 3; Q++) {
          const a = p(0, Math.PI * 2),
            t = p(0, 300);
          E.twinkle(A.x + Math.cos(a) * t, A.y + Math.sin(a) * t * 0.62, 1, "#d9ccff", 8);
        }
      }
      I(3.85) &&
        (UA(e, A.x, A.y, 300, (Q) => e.hit(Q, 55 * o, Math.atan2(Q.y - A.y, Q.x - A.x), 260, !0, !0)),
        E.ring(A.x, A.y, 40, 340, "#efe8ff", 0.5, 9),
        E.light(A.x, A.y, 460, "#bfaeff", 0.4),
        E.star(A.x, A.y - 30, 0, 90, "#ffffff", 0.18),
        E.twinkle(A.x, A.y - 30, 24, "#e7defc", 160),
        (e.shake = Math.max(e.shake, 8)),
        e.audio.sound("frost", 0.7, 0.7, e.pan(A.x)));
      break;
    }
    case 2: {
      for (const C of A.targets)
        C.done ||
          A.t < C.t ||
          ((C.done = !0),
          UA(e, C.x, C.y, 110, (Q) => {
            e.hit(Q, 95 * o, Math.atan2(Q.y - C.y, Q.x - C.x), Q.type >= 8 ? 80 : 420, !0, !0),
              (Q.slow = Math.max(Q.slow, 2));
          }),
          E.explosion(C.x, C.y, 70, "#ff9a4f"),
          E.decal(aA.Crack, C.x, C.y + 6, 200, p(0, 6), 6),
          E.chips(C.x, C.y, 14, "#6f655c", 1.6, 6),
          E.smoke(C.x, C.y, 6, 22, "#7d746c", "#e7dccb", 1, 90, 0, -18),
          (e.shake = Math.max(e.shake, 9)),
          e.audio.sound("boss_slam", 0.6, 1.3, e.pan(C.x)));
      break;
    }
    case 3: {
      const C = Math.min(340, (A.t / 0.8) * 340);
      if (A.t < 0.85) {
        UA(e, A.x, A.y, C, (Q) => {
          A.hitSet.has(Q) ||
            (A.hitSet.add(Q),
            (Q.poisonTime = Math.max(Q.poisonTime, 6)),
            (Q.poisonOwner = e.actorIndex),
            (Q.poison = Math.max(Q.poison, 26 * A.power * e.stats.poison * e.damageScale())),
            e.hit(Q, 20 * o, Math.atan2(Q.y - A.y, Q.x - A.x), 220, !0, !1));
        });
        for (let Q = 0; Q < 4; Q++) {
          const a = p(0, Math.PI * 2);
          E.smoke(
            A.x + Math.cos(a) * C,
            A.y + Math.sin(a) * C * 0.62,
            1,
            18,
            "#5d7a2e",
            "#d7ee8a",
            0.8,
            10,
            Math.cos(a) * 40,
            Math.sin(a) * 25,
          );
        }
      }
      if (((A.tick -= g), A.tick <= 0 && A.t > 0.8)) {
        A.tick = 0.5;
        let Q = 0;
        UA(e, A.x, A.y, 340, (a) => {
          (a.poisonTime = Math.max(a.poisonTime, 1.2)), Q < 12 && Q++;
        }),
          e.heal(e.stats.hp * 0.004 * Q * A.power);
        for (let a = 0; a < 3; a++) {
          const t = p(0, Math.PI * 2),
            h = p(0, 320);
          E.splat(A.x + Math.cos(t) * h, A.y + Math.sin(t) * h * 0.62, "#86a83c", 0.7, 0.4);
        }
      }
      break;
    }
    case 4: {
      for (A.tick -= g; A.tick <= 0 && A.shots < 36 && A.t < 2; ) {
        (A.tick += 2 / 36), A.shots++;
        const C = e.closest(B.x, B.y, 640),
          Q = C ? Math.atan2(C.y - B.y, C.x - B.x) + p(-0.06, 0.06) : (A.shots / 36) * Math.PI * 2,
          a = B.x + Math.cos(Q) * 34,
          t = B.y - 14 + Math.sin(Q) * 22;
        e.shoot(a, t, Q, 980, 26 * o, 0.9, !1, "#ffe1a0"),
          E.muzzle(a, t, Q, "#ffd27a", 1.1, A.shots % 3 === 0),
          E.casing(B.x, B.y - 10, Q, "#e2b35c"),
          A.shots % 4 === 0 && e.audio.sound("shot", 0.45, 1.1 + Math.random() * 0.1, e.pan(B.x));
      }
      break;
    }
    default: {
      if (A.t < 0.6) {
        Math.random() < 0.5 && E.twinkle(A.x, A.y, 1, "#bff6ff", 60);
        break;
      }
      I(0.6) && (E.explosion(A.x, A.y, 80, "#9fe9ff"), (e.shake = Math.max(e.shake, 10)));
      const C = e.closest(A.x, A.y, 420);
      if (C) {
        const Q = Math.max(1, H(C, A)),
          a = Math.min(Q, 150 * g);
        (A.x += ((C.x - A.x) / Q) * a), (A.y += ((C.y - A.y) / Q) * a);
      }
      (A.tick -= g),
        A.tick <= 0 &&
          ((A.tick = 0.1),
          UA(e, A.x, A.y, 95, (Q) => e.hit(Q, 38 * o, Math.atan2(Q.y - A.y, Q.x - A.x), 60, !1, !1)),
          E.decal(aA.Scorch, A.x + p(-20, 20), A.y + p(-12, 12), 90, p(0, 6), 2.5),
          E.sparks(A.x, A.y, p(0, 6.28), 3.14, 4, 420, "#c9fbff", 0.3),
          E.light(A.x, A.y, 260, "#7fe6ff", 0.12));
    }
  }
  return A.t < A.dur;
}
const Pg = [
  {
    name: "Schulterramme",
    desc: "Tiefer Schulterstoß mit Staub, Splittern und Schleifspur – stößt Gegner am Ende kurz weg.",
    ghost: "#c9a46a",
    ghostAlpha: 0.22,
    ghostEvery: 0.05,
  },
  {
    name: "Rauchschritt",
    desc: "Sein Körper wird kurz selbst zur schwarzen Rauchwolke, gleitet so über den Boden und formt sich aus einem Wirbel wieder.",
    ghost: "",
    ghostAlpha: 0,
    ghostEvery: 1,
  },
  {
    name: "Felsrolle",
    desc: "Rollt als Felsbrocken und schlägt mit Bodenriss, Gesteinssplittern und Erschütterung auf.",
    ghost: "#8a8079",
    ghostAlpha: 0.2,
    ghostEvery: 0.045,
  },
  {
    name: "Torkelsprung",
    desc: "Ruckartiger, torkelnder Satz mit fauliger Schleimspur (schadet dir nicht).",
    ghost: "#8c9a5a",
    ghostAlpha: 0.2,
    ghostEvery: 0.05,
  },
  {
    name: "Staubrutsche",
    desc: "Flache Rutsche mit wehendem Schal, Staubfahne und Münzglitzern.",
    ghost: "#d9653b",
    ghostAlpha: 0.24,
    ghostEvery: 0.04,
  },
  {
    name: "Düsenschub",
    desc: "Schubdüsen zünden: Stichflamme, Funken, Hitzeflimmern und Dampf.",
    ghost: "#ffb35a",
    ghostAlpha: 0.22,
    ghostEvery: 0.04,
  },
];
function VB(e, A, g, B, E, o = 0) {
  const i = { sx: 1, sy: 1, rot: 0, ox: 0, oy: 0, alpha: 1, pivot: 0 },
    I = E ? 0.35 : 1;
  if (A >= 0) {
    const C = Math.sin(Math.PI * Math.min(1, A));
    switch (e) {
      case 0:
        (i.rot = B * 0.34 * C * I), (i.sx = 1 + 0.16 * C * I), (i.sy = 1 - 0.12 * C * I), (i.oy = 3 * C);
        break;
      case 1:
        (i.alpha = E ? 0.25 : A < 0.12 ? 1 - A / 0.12 : 0),
          (i.sx = 1 - 0.35 * Math.min(1, A / 0.12)),
          (i.sy = 1 + 0.12 * Math.min(1, A / 0.12));
        break;
      case 2:
        (i.pivot = 30),
          (i.rot = E ? B * 0.2 * C : B * Math.PI * 2 * A),
          (i.sx = i.sy = 1 - 0.1 * C),
          (i.oy = -5 * C);
        break;
      case 3:
        (i.rot = B * (0.42 * C + 0.09 * Math.sin(A * 19)) * I),
          (i.sx = 1 + 0.2 * C * I),
          (i.sy = 1 - 0.14 * C * I),
          (i.oy = -12 * C * I);
        break;
      case 4:
        (i.rot = -B * 0.16 * C * I), (i.sx = 1 + 0.24 * C * I), (i.sy = 1 - 0.34 * C * I), (i.oy = 3 * C);
        break;
      default:
        (i.rot = B * (0.18 * C + 0.03 * Math.sin(o * 70) * C) * I),
          (i.sx = 1 + 0.1 * C * I),
          (i.sy = 1 - 0.07 * C * I),
          (i.oy = -9 * C * I);
    }
  } else if (g > 0 && e === 1)
    (i.alpha = E ? 1 - 0.75 * g : 1 - Math.min(1, g * 1.35)),
      (i.sx = 1 - 0.3 * g * I),
      (i.sy = 1 + 0.12 * g * I);
  else if (g > 0) {
    const C = g * g,
      Q = [0.12, 0.06, 0.2, 0.15, 0.08, 0.1][e] ?? 0.1,
      a = e === 3 ? Math.cos((1 - g) * 14) : 1;
    (i.sy = 1 - Q * C * a * I), (i.sx = 1 + Q * 0.8 * C * a * I);
  }
  return i;
}
const f = (e, A) => e + Math.random() * (A - e),
  Eg = 30;
function og(e, A, g, B, E, o, i, I, C, Q = 4) {
  const a = e.spawn(u.Smoke, A, g, E, B, Math.random() < 0.4 ? "#030303" : "#0a0909");
  return a
    ? ((a.tx = 1),
      (a.ty = 1),
      (a.vx = o),
      (a.vy = i),
      (a.grow = I),
      (a.rise = 4),
      (a.drag = Q),
      (a.variant = Math.floor(Math.random() * 3)),
      (a.rot = f(0, 6.28)),
      (a.vr = f(-2, 2)),
      (a.alpha = C),
      (a.rim = "#4d4b49"),
      a)
    : null;
}
function Ui(e, A, g) {
  const { x: B, y: E, dx: o, dy: i } = g,
    I = Math.atan2(-i, -o),
    C = E + Eg;
  switch (A) {
    case 0:
      e.smoke(B - o * 10, C, 5, 13, "#b59a76", "#f3dfb8", 0.75, 26, -o * 70, -i * 40),
        e.chips(B, C, 5, "#8f7a5c", 0.7, 3.5),
        e.decal(aA.Scrape, B + o * 60, C + 2, 110, Math.atan2(i, o), 2.4);
      break;
    case 1: {
      const Q = g.reduced ? 1 : 3;
      for (let a = 0; a < Q; a++)
        og(e, B + f(-8, 8), E + f(-12, 12), f(14, 18), f(0.26, 0.34), o * 120, i * 80, 12, 0.85);
      break;
    }
    case 2:
      e.chips(B, C, 6, "#7d746c", 0.9, 4.5),
        e.smoke(B, C, 4, 14, "#8a8178", "#e7dccb", 0.8, 20, -o * 50, -i * 30);
      break;
    case 3: {
      e.decal(aA.Goo, B, C + 2, 54, f(0, 6), 3.2, "#6f7744"), e.splat(B - o * 8, E + 8, "#7d8a4e", 0.55, 0.2);
      break;
    }
    case 4:
      e.smoke(B - o * 8, C, 4, 11, "#b8946c", "#f6dfba", 0.6, 20, -o * 80, -i * 50),
        e.twinkle(B, E - 10, 4, "#ffd774", 16);
      break;
    default:
      e.glow(B - o * 14, C - 6, 46, "#ff9b45", 0.12),
        e.light(B, C, 120, "#ff8a3a", 0.18),
        e.sparks(B - o * 14, C - 6, I, 0.5, 8, 380, "#ffcf7a", 0.25),
        e.smoke(B - o * 12, C, 3, 12, "#8d8d93", "#ffe2b6", 0.7, 16, -o * 60, -i * 40);
  }
}
function ri(e, A, g, B) {
  const { x: E, y: o, dx: i, dy: I } = g,
    C = o + Eg,
    Q = Math.atan2(-I, -i),
    a = (t) => Math.random() < t * (g.reduced ? 0.4 : 1);
  switch (A) {
    case 0:
      a(0.8) && e.smoke(E - i * 14, C, 1, 10, "#b59a76", "#f3dfb8", 0.6, 12, -i * 40, -I * 25),
        a(0.35) && e.chips(E - i * 10, C, 1, "#8f7a5c", 0.5, 3);
      break;
    case 1:
      for (let t = 0; t < (g.reduced ? 1 : 2); t++)
        og(
          e,
          E - i * f(4, 16) + f(-7, 7),
          o + 2 + f(-16, 12),
          f(18, 24),
          f(0.2, 0.28),
          i * 110,
          I * 70,
          26,
          0.72,
        );
      break;
    case 2:
      a(0.9) && e.smoke(E - i * 10, C, 1, 12, "#8a8178", "#e7dccb", 0.7, 14, -i * 30, -I * 20),
        a(0.4) && e.chips(E, C, 1, "#6f665e", 0.5, 3.5);
      break;
    case 3:
      a(0.55) && e.decal(aA.Goo, E - i * 6 + f(-6, 6), C + 2 + f(-4, 4), f(26, 40), f(0, 6), 2.6, "#6f7744"),
        a(0.4) && e.splat(E - i * 10, o + 10, "#7d8a4e", 0.3, 0.16);
      break;
    case 4:
      a(0.9) && e.smoke(E - i * 10, C, 1, 9, "#b8946c", "#f6dfba", 0.5, 10, -i * 60, -I * 40);
      {
        const t = e.spawn(u.Tracer, E - i * 4, o - 22, 0.22, 7, "#c8402e");
        t && ((t.tx = E - i * 26 + f(-3, 3)), (t.ty = o - 18 + Math.sin(B * 20) * 5), (t.variant = 1));
      }
      break;
    default: {
      const t = E - i * 16,
        h = C - 8;
      if (
        (e.star(t, h, Q, f(15, 22), "#ff9b45", 0.05),
        e.star(t, h, Q, f(8, 11), "#9fd4ff", 0.04),
        e.glow(t, h, 28, "#ffae5c", 0.06),
        a(0.8) && e.sparks(t, h, Q, 0.4, 2, 300, "#ffd28a", 0.22),
        a(0.6) && e.smoke(t - i * 8, h + 4, 1, 9, "#8d8d93", "#ffe2b6", 0.6, 8, -i * 50, -I * 30),
        a(0.5))
      ) {
        const s = e.spawn(u.Ring, t - i * 10, h, 0.18, 8, "#ffffff");
        s && ((s.grow = 60), (s.tx = 6), (s.alpha = 0.12), (s.variant = 1));
      }
    }
  }
}
function Yi(e, A, g) {
  const { x: B, y: E, dx: o, dy: i } = g,
    I = E + Eg;
  switch (A) {
    case 0:
      e.ring(B + o * 18, I - 6, 10, 70, "#f3dfb8", 0.22, 4),
        e.smoke(B + o * 12, I, 3, 12, "#b59a76", "#f3dfb8", 0.6, 20, o * 60, i * 40),
        e.chips(B + o * 16, I, 4, "#8f7a5c", 0.8, 3.5);
      break;
    case 1: {
      const C = g.reduced ? 4 : 9;
      for (let Q = 0; Q < C; Q++) {
        const a = (Q / C) * Math.PI * 2,
          t = 30;
        og(
          e,
          B + Math.cos(a) * t,
          E - 4 + Math.sin(a) * t * 0.7,
          f(13, 17),
          0.26,
          -Math.cos(a) * 150 - Math.sin(a) * 110,
          -Math.sin(a) * 105 + Math.cos(a) * 75,
          -40,
          0.9,
          3,
        );
      }
      og(e, B - o * 10, E + Eg - 4, 12, 0.45, -o * 18, -4, 10, 0.35);
      break;
    }
    case 2:
      e.decal(aA.Crack, B, I + 2, 120, f(0, 6), 3.5),
        e.chips(B, I, 10, "#7d746c", 1.2, 5),
        e.ring(B, I - 2, 14, 92, "#e7dccb", 0.28, 5),
        e.smoke(B, I, 6, 16, "#8a8178", "#e7dccb", 0.9, 40, 0, -10);
      break;
    case 3:
      e.decal(aA.Goo, B + o * 6, I + 2, 64, f(0, 6), 3.4, "#6f7744"),
        e.splat(B + o * 6, E + 10, "#7d8a4e", 0.7, 0.22);
      break;
    case 4:
      e.smoke(B + o * 6, I, 3, 11, "#b8946c", "#f6dfba", 0.6, 18, o * 50, i * 30),
        e.twinkle(B, E - 14, 5, "#ffd774", 18);
      break;
    default:
      e.smoke(B, I, 4, 14, "#c9c9cf", "#ffffff", 0.9, 22, 0, -20),
        e.sparks(B, I - 6, -Math.PI / 2, 1.4, 5, 220, "#ffd28a", 0.25);
  }
}
const Mi = 128;
function rg(e, A = 1) {
  return e < -12 ? -1 : e > 12 ? 1 : A < 0 ? -1 : 1;
}
function Yg(e, A) {
  return (e + (Math.max(0, A) / Mi) * Math.PI * 2) % (Math.PI * 2);
}
function $g(e) {
  return 1 + Math.floor(((((e / (Math.PI * 2)) % 1) + 1) % 1) * 8);
}
const ng = [
    "player",
    "stats",
    "runTalents",
    "bonus",
    "items",
    "weapons",
    "character",
    "startWeapon",
    "money",
    "xp",
    "xpNeed",
    "level",
    "pendingLevels",
    "dashTime",
    "dashCharges",
    "dashRecharge",
    "dashX",
    "dashY",
    "dashDur",
    "dashLand",
    "ghostTimer",
    "abilityCd",
    "abilityFlash",
    "overdrive",
    "input",
    "companions",
    "turrets",
    "levelOptions",
    "shopOffers",
    "rerolls",
    "mutationWeapon",
    "mutationOptions",
    "combo",
    "pickupAt",
    "pendingShowcase",
  ],
  _g = (e) => Object.fromEntries(ng.map((A) => [A, e[A]]));
class ci {
  constructor(A, g) {
    (this.game = A), (this.actors = g), this.load(0);
  }
  game;
  actors;
  current = 0;
  intermission = !1;
  advancing = !1;
  ready = [!1, !1];
  revive = [0, 0];
  save() {
    const A = this.actors[this.current];
    for (const g of ng) A[g] = this.game[g];
  }
  load(A) {
    const g = this.game,
      B = this.actors[A];
    for (const E of ng) g[E] = B[E];
    this.current = A;
  }
  activate(A) {
    A !== this.current && (this.save(), this.load(A));
  }
  with(A, g) {
    const B = this.current;
    this.activate(A);
    try {
      return g();
    } finally {
      this.activate(B);
    }
  }
  snapshot() {
    return this.save(), this.actors;
  }
  nearest(A) {
    let g = 1 / 0,
      B = 0;
    for (let E = 0; E < 2; E++) {
      const o = this.actors[E];
      if (o.player.hp <= 0) continue;
      const i = (o.player.x - A.x) ** 2 + (o.player.y - A.y) ** 2;
      i < g && ((g = i), (B = E));
    }
    return B;
  }
  tickRevive(A) {
    this.save();
    for (let g = 0; g < 2; g++) {
      const B = this.actors[g],
        E = this.actors[1 - g];
      if (B.player.hp > 0) {
        this.revive[g] = 0;
        continue;
      }
      E.player.hp > 0 && H(B.player, E.player) < 78
        ? (this.revive[g] += A)
        : (this.revive[g] = Math.max(0, this.revive[g] - A * 2)),
        this.revive[g] >= 3 &&
          ((B.player.hp = B.stats.hp * 0.4),
          (B.player.invuln = 2),
          (this.revive[g] = 0),
          this.game.audio.sound("level", 1.25),
          this.game.onToast(`Spieler ${g + 1} ist wieder auf den Beinen!`),
          this.game.particle(B.player.x, B.player.y, "#f5d18b", 18, 1));
    }
    this.actors.every((g) => g.player.hp <= 0) && this.game.finish(!1);
  }
  beginShop() {
    (this.intermission = !0), (this.ready = [!1, !1]), this.activate(0), this.game.setPhase("shop");
  }
  advanceShop() {
    if (!this.intermission || this.advancing) return !1;
    this.save(), (this.ready[this.current] = !0);
    const A = this.ready.findIndex((g) => !g);
    return A >= 0
      ? (this.activate(A), this.game.setPhase("shop"), !0)
      : ((this.intermission = !1), this.activate(0), !1);
  }
}
const AB = {
    pistol: { length: 40, longest: 100, muzzleX: 49, muzzleY: -13 },
    shotgun: { length: 47, longest: 100, muzzleX: 49, muzzleY: -10 },
    axe: { length: 49, longest: 100, muzzleX: 43, muzzleY: 0 },
    lightning: { length: 46, longest: 100, muzzleX: 46, muzzleY: 0 },
    flame: { length: 45, longest: 100, muzzleX: 49, muzzleY: -7 },
    poison: { length: 46, longest: 100, muzzleX: 49, muzzleY: -10 },
    saw: { length: 47, longest: 100, muzzleX: 0, muzzleY: 0 },
    laser: { length: 48, longest: 100, muzzleX: 49, muzzleY: -4 },
    fork: { length: 44, longest: 100, muzzleX: 38, muzzleY: -23 },
    boomerang: { length: 43, longest: 100, muzzleX: 0, muzzleY: 0 },
    summon: { length: 40, longest: 84, muzzleX: 0, muzzleY: 8, upright: !0 },
    frost: { length: 40, longest: 84, muzzleX: 0, muzzleY: 25, upright: !0 },
    turret: { length: 66, longest: 100, muzzleX: 53, muzzleY: -13 },
  },
  jA = (e) => AB[e] ?? AB.pistol,
  zA = (e) => {
    const A = jA(e);
    return (A.length / A.longest) * (e === "turret" ? 1 : 0.88);
  },
  nB = (e, A, g = 0, B = 1) => (jA(e).upright ? (e === "frost" ? Math.sin(g * 8) * g * 0.12 * B : 0) : A),
  gB = 0.08,
  SB = (e, A, g) => {
    const B = Math.cos(A);
    return B < -gB ? -1 : B > gB ? 1 : g === -1 ? -1 : g === 1 ? 1 : B < 0 ? -1 : 1;
  };
function ig(e) {
  return (e.mirrorY = SB(e.id, e.angle, e.mirrorY)), e.mirrorY;
}
function Fi(e, A, g = 0, B, E, o = SB(e, A)) {
  const i = jA(e),
    I = zA(e),
    C = nB(e, A, g, o),
    Q = i.muzzleX * I * (i.upright ? o : 1),
    a = i.muzzleY * I * (i.upright ? 1 : o);
  return { x: Math.cos(C) * Q - Math.sin(C) * a, y: Math.sin(C) * Q + Math.cos(C) * a };
}
const Cg = 0.8,
  DB = (e) => ((Math.round(e / (Math.PI / 8)) % 16) + 16) % 16;
function Gi(e) {
  const A = (DB(e.angle) * Math.PI) / 8;
  return {
    x: e.x + Cg * (Math.cos(A) * 53 - Math.cos(e.angle) * e.kick * 4),
    y: e.y + Cg * (-13 + Math.sin(A) * 53 - Math.sin(e.angle) * e.kick * 4),
  };
}
const SA = ["", "#a9b4c5", "#70b1ff", "#b995ff", "#ffc36f"],
  BB = ["", "Standard", "Veredelt", "Prototyp", "Meisterwerk"],
  iA = ["", "I", "II", "III", "IV"],
  ZA = (e) => 1 + (e - 1) * 0.7;
function pB(e) {
  const A = Math.min(0.38, 0.1 + 0.012 * e),
    g = e >= 4 ? Math.min(0.26, (e - 3) * 0.013) : 0,
    B = e >= 9 ? Math.min(0.12, (e - 8) * 0.0075) : 0;
  return [1 - A - g - B, A, g, B];
}
function Ri(e, A = Math.random()) {
  const g = pB(e);
  let B = 0;
  for (let E = 0; E < 4; E++) if (((B += g[E]), A < B)) return E + 1;
  return 4;
}
const wi = {
    8: ["slam", "ring", "charge", "summon"],
    9: ["laser", "slam", "ring", "charge"],
    10: ["summon", "ring", "laser", "slam"],
    11: ["charge", "ring", "slam", "laser"],
  },
  mB = {
    ring: "SALVENRING",
    slam: "BODENBRUCH",
    charge: "ANSTURM",
    summon: "VERSTÄRKUNG",
    laser: "LASERFÄCHER",
  },
  EB = Math.PI * 2;
function Ki(e, A, g) {
  const B = e.player,
    E = Math.atan2(B.y - A.y, B.x - A.x),
    o = A.hp / A.maxHp < 0.35 ? 3 : A.hp / A.maxHp < 0.68 ? 2 : 1,
    i = z[A.type].color;
  if (((A.phaseFlash = Math.max(0, A.phaseFlash - g)), A.state !== o)) {
    const a = A.state;
    (A.state = o),
      (A.phaseFlash = 1),
      (A.bossMode = 0),
      (A.timer = 0),
      (A.cd = a ? 1.2 : Math.max(A.cd, 1)),
      a &&
        ((e.shake = Math.max(e.shake, 6)),
        (e.pulse = Math.max(e.pulse, 0.2)),
        e.audio.sound("boss_roar", 1.05, 1, e.pan(A.x)),
        e.fx.explosion(A.x, A.y, A.r * 1.2, i),
        e.zones.push({
          x: A.x,
          y: A.y,
          r: 260,
          life: 0.8,
          max: 0.8,
          delay: 0,
          damage: 0,
          enemy: !1,
          tick: 2,
          color: i,
          style: "pulse",
        }),
        e.particle(A.x, A.y, i, 26, 1.2, 1));
  }
  let I = A.speed * (o === 3 ? 1.2 : 1),
    C = Math.cos(E),
    Q = Math.sin(E);
  if (A.bossMode === 0 && A.cd <= 0) {
    const a = wi[A.type];
    if (
      ((A.bossPattern = a[A.patternIndex++ % a.length]),
      (A.bossMode = 1),
      (A.aim = E - (A.bossPattern === "laser" ? 0.36 : 0)),
      (A.timer = A.bossPattern === "laser" ? 1.45 : A.bossPattern === "summon" ? 1.4 : 1.15),
      (A.windupMax = A.timer),
      e.audio.sound("boss_warn", 1, 1, e.pan(A.x)),
      A.bossPattern === "charge" && e.audio.sound("boss_charge", 1, 1, e.pan(A.x)),
      A.bossPattern === "laser" && e.fx.glow(A.x, A.y - A.r * 0.5, A.r, "#ff4d5e", A.timer),
      A.bossPattern === "slam")
    ) {
      const t = o + 1;
      for (let h = 0; h < t; h++) {
        const s = E + (h - 1) * 1.9,
          U = h === 0 ? B.x : V(B.x + Math.cos(s) * 165, -880, 880),
          M = h === 0 ? B.y : V(B.y + Math.sin(s) * 165, e.yMid - 600, e.yMid + 600),
          r = 1.2 + h * 0.28;
        e.zones.push({
          x: U,
          y: M,
          r: ((72 + o * 3) * A.r) / 67,
          delay: r,
          life: r + 0.4,
          max: r + 0.4,
          damage: A.damage * 0.8,
          enemy: !0,
          tick: 0,
          color: i,
          style: "boss-slam",
        });
      }
    }
  }
  if (A.bossMode === 1) {
    if (((I = 0), (A.timer -= g), A.timer <= 0)) {
      e.shake = Math.max(e.shake, 3);
      const a = A.bossPattern;
      if (
        (e.audio.sound(
          a === "ring"
            ? "boss_ring"
            : a === "summon"
              ? "boss_summon"
              : a === "laser"
                ? "boss_laser"
                : a === "charge"
                  ? "boss_charge"
                  : "boss_warn",
          A.type === 9 ? 0.85 : 1,
          1,
          e.pan(A.x),
        ),
        a === "ring" &&
          (e.fx.ring(A.x, A.y, A.r, 300, "#ff6a7a", 0.45, 6),
          e.fx.glow(A.x, A.y, A.r * 1.6, "#ff8a7a", 0.14),
          e.fx.light(A.x, A.y, 320, "#ff4a5a", 0.3)),
        a === "ring")
      ) {
        const t = 14 + o * 4;
        for (let h = 0; h < t; h++) {
          const s = (h * EB) / t + A.age * 0.12;
          Math.abs(fA(s, A.aim)) < 0.34 ||
            e.shoot(
              A.x + Math.cos(s) * (A.r + 12),
              A.y + Math.sin(s) * (A.r + 12),
              s,
              155 + o * 17,
              A.damage * 0.65,
              5,
              !0,
              i,
              0,
              7,
            );
        }
        e.zones.push({
          x: A.x,
          y: A.y,
          r: 280,
          delay: 0,
          life: 0.65,
          max: 0.65,
          damage: 0,
          enemy: !1,
          tick: 2,
          color: i,
          style: "pulse",
        });
      } else if (a === "summon")
        for (let t = 0; t < 3 + o; t++) {
          const h = (t * EB) / (3 + o) + A.age,
            s = A.x + Math.cos(h) * (A.r + 115),
            U = A.y + Math.sin(h) * (A.r + 115);
          e.spawn(t === 0 && o > 1 ? 7 : t % 3 === 0 ? 3 : 0, s, U),
            e.fx.smoke(s, U, 4, 20, "#2a2230", "#ff7a8a", 1.1, 30, 0, -16),
            e.fx.ring(s, U + 10, 8, 60, "#ff6a7a", 0.3, 3);
        }
      else a === "slam" && e.particle(A.x, A.y, i, 22, 1, 1);
      e.bossExtraPattern(A, o),
        a === "charge" || a === "laser"
          ? ((A.bossMode = 2), (A.timer = a === "charge" ? 0.67 : 1.6), (A.beamTick = 0))
          : ((A.bossMode = 3), (A.timer = 0.7));
    }
  } else if (A.bossMode === 2) {
    if (((A.timer -= g), A.bossPattern === "charge"))
      (I = 620),
        (C = Math.cos(A.aim)),
        (Q = Math.sin(A.aim)),
        Math.floor(A.age * 22) !== Math.floor((A.age - g) * 22) &&
          (e.particle(A.x, A.y, i, 3, 0.5, 3),
          e.fx.smoke(
            A.x - C * A.r,
            A.y + A.r * 0.6,
            2,
            A.r * 0.4,
            "#6d625b",
            "#f2cfa8",
            0.9,
            A.r * 0.8,
            -C * 60,
            -Q * 40,
          ),
          e.fx.chips(A.x, A.y + A.r * 0.6, 1, "#5d544e", 0.8, 4));
    else if (((I = 0), (A.aim += g * 0.46), (A.beamTick -= g), A.beamTick <= 0)) {
      A.beamTick = 0.07;
      const a = Math.cos(A.aim),
        t = Math.sin(A.aim);
      B.x - A.x,
        B.y - A.y,
        e.beam(A.x + a * (A.r + 4), A.y + t * (A.r + 4), A.x + a * 780, A.y + t * 780, "#ff3e58", 15, 0.095),
        e.fx.light(A.x + a * 260, A.y + t * 260 + 20, 150, "#ff3e58", 0.1),
        e.fx.light(A.x + a * 560, A.y + t * 560 + 20, 150, "#ff3e58", 0.1),
        e.fx.sparks(A.x + a * 780, A.y + t * 780, Math.atan2(-t, -a), 0.9, 3, 300, "#ffb0a0", 0.25),
        e.forActors(() => {
          const h = e.player.x - A.x,
            s = e.player.y - A.y,
            U = h * a + s * t;
          U > A.r && U < 780 && Math.abs(h * t - s * a) < 31 && e.hurt(A.damage * 0.65);
        });
    }
    A.timer <= 0 &&
      ((A.bossMode = 3),
      (A.timer = 0.8),
      A.bossPattern === "charge" &&
        (e.zones.push({
          x: A.x,
          y: A.y,
          r: (145 * A.r) / 67,
          delay: 1,
          life: 1.4,
          max: 1.4,
          damage: A.damage * 0.7,
          enemy: !0,
          tick: 0,
          color: i,
          style: "boss-slam",
        }),
        (e.shake = Math.max(e.shake, 4)),
        e.fx.ring(A.x, A.y + A.r * 0.5, A.r * 0.6, A.r * 1.8, "#ffd2b0", 0.3, 5),
        e.fx.smoke(A.x, A.y + A.r * 0.5, 5, A.r * 0.4, "#6d625b", "#f2cfa8", 1, A.r, 0, -10)));
  } else
    A.bossMode === 3 &&
      ((I = 0), (A.timer -= g), A.timer <= 0 && ((A.bossMode = 0), (A.cd = 2.3 - o * 0.25)));
  return { speed: I, mx: C, my: Q };
}
const $ = [
    {
      id: "panzerkaefer",
      name: "Panzerkäfer",
      desc: "Gepanzerter Schrottkäfer mit Hauern. Langsam, sehr zäh, schnappt kurz nach vorn.",
      base: 1,
      unlock: 2,
      hp: 150,
      speed: 42,
      damage: 12,
      radius: 25,
      xp: 4,
      h: 57,
      fly: 0,
      mat: 1,
      attack: "melee",
      range: 70,
      windup: 0.42,
      strike: 0.2,
      recover: 0.45,
      cd: 2.4,
      power: 34,
      size: 28,
      walkFps: 8,
      frames: { windup: [6, 7], strike: [8], recover: [9, 10, 11] },
      sound: "hit_metal",
    },
    {
      id: "keiler",
      name: "Rotkeiler",
      desc: "Scharrt mit den Hufen, senkt den Kopf – und stürmt geradeaus. Seitlich ausweichen.",
      base: 2,
      unlock: 4,
      hp: 54,
      speed: 62,
      damage: 12,
      radius: 22,
      xp: 2,
      h: 57,
      fly: 0,
      mat: 0,
      attack: "charge",
      range: 430,
      windup: 0.75,
      strike: 0.6,
      recover: 0.4,
      cd: 3.2,
      power: 540,
      size: 0,
      walkFps: 11,
      frames: { windup: [6, 7, 6, 7], strike: [8, 9, 10], recover: [11] },
      sound: "death_flesh",
    },
    {
      id: "wolf",
      name: "Streuner",
      desc: "Narbiger Hofhund der Nachtschicht. Schnell, kommt im Rudel und springt mit offenem Maul.",
      base: 0,
      unlock: 1,
      hp: 20,
      speed: 98,
      damage: 6,
      radius: 19,
      xp: 1,
      h: 53,
      fly: 0,
      mat: 0,
      attack: "melee",
      range: 92,
      windup: 0.3,
      strike: 0.24,
      recover: 0.4,
      cd: 2,
      power: 40,
      size: 24,
      walkFps: 13,
      frames: { windup: [6], strike: [7, 8], recover: [9, 10, 11] },
      sound: "hit_flesh",
    },
    {
      id: "sprengfass",
      name: "Sprengfass",
      desc: "Läuft auf dich zu, die Lunte faucht auf – dann fliegt es in die Luft. Wenig Leben, großer Knall.",
      base: 0,
      unlock: 4,
      hp: 14,
      speed: 94,
      damage: 24,
      radius: 18,
      xp: 1,
      h: 57,
      fly: 0,
      mat: 1,
      attack: "explode",
      range: 72,
      windup: 0.85,
      strike: 0.36,
      recover: 0,
      cd: 0,
      power: 96,
      size: 0,
      walkFps: 11,
      frames: { windup: [6, 7, 8], strike: [9, 10, 11], recover: [] },
      sound: "explosion",
    },
    {
      id: "drohne",
      name: "Spähdrohne",
      desc: "Schwebt auf Abstand. Wenn ihr Auge hell aufglüht, feuert sie einen cyanfarbenen Strahlbolzen.",
      base: 3,
      unlock: 6,
      hp: 32,
      speed: 64,
      damage: 8,
      radius: 19,
      xp: 2,
      h: 53,
      fly: 26,
      mat: 1,
      attack: "shoot",
      range: 520,
      windup: 0.6,
      strike: 0.15,
      recover: 0.35,
      cd: 2.4,
      power: 250,
      size: 9,
      walkFps: 10,
      frames: { windup: [6, 7, 8], strike: [9], recover: [10, 11] },
      sound: "laser",
    },
    {
      id: "fledermaus",
      name: "Zwielicht",
      desc: "Flattert schnell heran und stößt im Sturzflug herab.",
      base: 0,
      unlock: 2,
      hp: 16,
      speed: 104,
      damage: 5,
      radius: 16,
      xp: 1,
      h: 46,
      fly: 34,
      mat: 0,
      attack: "charge",
      range: 190,
      windup: 0.32,
      strike: 0.34,
      recover: 0.35,
      cd: 2.4,
      power: 430,
      size: 0,
      walkFps: 14,
      frames: { windup: [6, 7], strike: [8, 9], recover: [10, 11] },
      sound: "crescent",
    },
    {
      id: "pilzkopf",
      name: "Giftkappe",
      desc: "Watschelt auf Stummelbeinen und wirft sich mit dem ganzen Hut auf dich.",
      base: 0,
      unlock: 2,
      hp: 30,
      speed: 70,
      damage: 8,
      radius: 20,
      xp: 1,
      h: 57,
      fly: 0,
      mat: 0,
      attack: "melee",
      range: 80,
      windup: 0.5,
      strike: 0.22,
      recover: 0.5,
      cd: 2.6,
      power: 30,
      size: 32,
      walkFps: 9,
      frames: { windup: [6, 7, 8], strike: [9], recover: [10, 11] },
      sound: "hit_flesh",
    },
    {
      id: "hammergolem",
      name: "Hammerwache",
      desc: "Steinerner Wächter. Hebt den Hammer weit an und schmettert ihn vor sich in den Boden.",
      base: 1,
      unlock: 5,
      hp: 175,
      speed: 36,
      damage: 19,
      radius: 28,
      xp: 5,
      h: 80,
      fly: 0,
      mat: 2,
      attack: "melee",
      range: 96,
      windup: 0.8,
      strike: 0.26,
      recover: 0.6,
      cd: 3.2,
      power: 50,
      size: 40,
      walkFps: 7,
      frames: { windup: [6, 7], strike: [8, 9], recover: [10, 11] },
      sound: "hit_stone",
    },
    {
      id: "schleimauge",
      name: "Schleimauge",
      desc: "Weicher Glibber mit einem Auge. Duckt sich flach und platscht dann mit Stacheln auseinander.",
      base: 0,
      unlock: 3,
      hp: 18,
      speed: 66,
      damage: 7,
      radius: 19,
      xp: 1,
      h: 39,
      fly: 0,
      mat: 0,
      attack: "splash",
      range: 62,
      windup: 0.55,
      strike: 0.22,
      recover: 0.4,
      cd: 2.4,
      power: 64,
      size: 0,
      walkFps: 9,
      frames: { windup: [6, 7, 8], strike: [9], recover: [10, 11] },
      sound: "poison",
    },
    {
      id: "massband",
      name: "Rollmaß",
      desc: "Maßband auf Beinchen. Hält Abstand auf Höhe des Ziels und peitscht das Band weit nach vorn.",
      base: 1,
      unlock: 4,
      hp: 90,
      speed: 54,
      damage: 11,
      radius: 20,
      xp: 4,
      h: 64,
      fly: 0,
      mat: 1,
      attack: "whip",
      range: 0,
      windup: 0.6,
      strike: 0.24,
      recover: 0.5,
      cd: 2.6,
      power: 0,
      size: 20,
      walkFps: 9,
      frames: { windup: [6, 7, 8], strike: [9], recover: [10, 11] },
      sound: "crescent",
    },
    {
      id: "leitkegel",
      name: "Warnkegel",
      desc: "Ein angeknackster Leitkegel auf Lenkrolle. Wackelt kurz – und rammt dann mit Vollgas geradeaus.",
      base: 2,
      unlock: 3,
      hp: 42,
      speed: 70,
      damage: 10,
      radius: 19,
      xp: 2,
      h: 62,
      fly: 0,
      mat: 1,
      attack: "charge",
      range: 400,
      windup: 0.62,
      strike: 0.55,
      recover: 0.4,
      cd: 3,
      power: 580,
      size: 0,
      walkFps: 12,
      frames: { windup: [6, 7, 6, 7], strike: [8, 9], recover: [10, 11] },
      sound: "hit_metal",
    },
    {
      id: "laternenhand",
      name: "Grablicht",
      desc: "Eine Laterne auf knochigen Fingern. Kriecht heran und greift mit weit gespreizten Fingern zu.",
      base: 0,
      unlock: 3,
      hp: 28,
      speed: 76,
      damage: 7,
      radius: 18,
      xp: 1,
      h: 64,
      fly: 0,
      mat: 2,
      attack: "melee",
      range: 84,
      windup: 0.42,
      strike: 0.24,
      recover: 0.42,
      cd: 2.4,
      power: 34,
      size: 28,
      walkFps: 10,
      frames: { windup: [6, 7], strike: [8, 9], recover: [10, 11] },
      sound: "hit_stone",
    },
    {
      id: "skelett",
      name: "Knochenboxer",
      desc: "Kleiner Skelettboxer. Tänzelt heran, holt aus und schlägt eine harte Gerade.",
      base: 0,
      unlock: 1,
      hp: 26,
      speed: 80,
      damage: 7,
      radius: 18,
      xp: 1,
      h: 60,
      fly: 0,
      mat: 2,
      attack: "melee",
      range: 74,
      windup: 0.4,
      strike: 0.18,
      recover: 0.4,
      cd: 2.2,
      power: 32,
      size: 22,
      walkFps: 10,
      frames: { windup: [6, 7, 8], strike: [9], recover: [10, 11] },
      sound: "hit_stone",
    },
  ],
  qi = (e) => Math.min(0.6, 0.34 + e * 0.02),
  Ig = [
    {
      id: 0,
      name: "panzerkaefer",
      source: "concept/enemies-v2/01-panzerkaefer.jpg",
      provenance: "user-supplied",
      sha256: "59c062b82bb11c3004e0905d0b5b7ce4a88d62534e36aecb37b638530d5fd8d6",
      fw: 239,
      fh: 171,
      ax: 108.6,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.664, r: 0.663, t: -0.947, b: 0.047 },
        { l: -0.611, r: 0.656, t: -0.98, b: 0.033 },
        { l: -0.611, r: 0.676, t: -1.02, b: 0.033 },
        { l: -0.604, r: 0.656, t: -0.953, b: 0.027 },
        { l: -0.657, r: 0.663, t: -0.913, b: 0.053 },
        { l: -0.631, r: 0.676, t: -0.927, b: 0.047 },
        { l: -0.691, r: 0.656, t: -0.893, b: 0.107 },
        { l: -0.697, r: 0.749, t: -0.9, b: 0.087 },
        { l: -0.717, r: 0.863, t: -0.907, b: 0.08 },
        { l: -0.677, r: 0.616, t: -0.907, b: 0.073 },
        { l: -0.664, r: 0.616, t: -0.907, b: 0.067 },
        { l: -0.657, r: 0.656, t: -0.907, b: 0.1 },
      ],
    },
    {
      id: 1,
      name: "keiler",
      source: "concept/enemies-v2/02-keiler.jpg",
      provenance: "user-supplied",
      sha256: "1c2b528fbaceb78e17d6f5d467bad066d3474eb9a7c0931aa75414fae9a22eb7",
      fw: 251,
      fh: 175,
      ax: 126.3,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.682, r: 0.712, t: -0.96, b: 0.04 },
        { l: -0.662, r: 0.685, t: -0.993, b: -0 },
        { l: -0.608, r: 0.678, t: -1.02, b: -0.04 },
        { l: -0.668, r: 0.692, t: -1.007, b: 0.027 },
        { l: -0.668, r: 0.705, t: -0.953, b: 0.04 },
        { l: -0.688, r: 0.678, t: -0.947, b: 0.04 },
        { l: -0.702, r: 0.745, t: -0.92, b: 0.127 },
        { l: -0.655, r: 0.605, t: -0.86, b: 0.113 },
        { l: -0.822, r: 0.672, t: -0.947, b: 0.067 },
        { l: -0.835, r: 0.825, t: -0.847, b: -0.013 },
        { l: -0.715, r: 0.798, t: -0.847, b: 0.133 },
        { l: -0.688, r: 0.672, t: -0.913, b: 0.067 },
      ],
    },
    {
      id: 2,
      name: "wolf",
      source: "concept/enemies-v2/03-wolf.jpg",
      provenance: "user-supplied",
      sha256: "1a0a1b7d1158b172188ce6dc3e1763831570632be11707845f5b604884773bc9",
      fw: 222,
      fh: 172,
      ax: 110.5,
      ay: 158.3,
      body: 150,
      ext: [
        { l: -0.617, r: 0.663, t: -0.916, b: 0.038 },
        { l: -0.643, r: 0.69, t: -0.976, b: -0.009 },
        { l: -0.73, r: 0.737, t: -1.022, b: -0.076 },
        { l: -0.643, r: 0.683, t: -0.889, b: 0.044 },
        { l: -0.657, r: 0.683, t: -0.869, b: 0.038 },
        { l: -0.61, r: 0.677, t: -0.896, b: 0.031 },
        { l: -0.703, r: 0.677, t: -0.769, b: 0.084 },
        { l: -0.663, r: 0.677, t: -0.856, b: 0.004 },
        { l: -0.723, r: 0.71, t: -1.049, b: -0.042 },
        { l: -0.71, r: 0.71, t: -0.889, b: -0.029 },
        { l: -0.643, r: 0.71, t: -0.856, b: 0.031 },
        { l: -0.643, r: 0.71, t: -0.836, b: 0.044 },
      ],
    },
    {
      id: 3,
      name: "sprengfass",
      source: "concept/enemies-v2/04-sprengfass.jpg",
      provenance: "user-supplied",
      sha256: "a9380a75fc6bc47d5420dfa4719358d86fd44b36251a715dca82aceb2efa4fbe",
      fw: 166,
      fh: 168,
      ax: 88.1,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.42, r: 0.413, t: -0.987, b: 0.027 },
        { l: -0.44, r: 0.42, t: -1, b: 0.033 },
        { l: -0.42, r: 0.446, t: -0.987, b: -0.027 },
        { l: -0.38, r: 0.386, t: -0.98, b: 0.027 },
        { l: -0.42, r: 0.44, t: -1.02, b: 0.013 },
        { l: -0.387, r: 0.386, t: -0.947, b: 0.027 },
        { l: -0.374, r: 0.38, t: -0.887, b: 0.047 },
        { l: -0.36, r: 0.413, t: -0.913, b: 0.053 },
        { l: -0.58, r: 0.513, t: -1.013, b: 0.06 },
        { l: -0.54, r: 0.493, t: -0.88, b: 0.087 },
        { l: -0.4, r: 0.333, t: -0.78, b: -0.033 },
        { l: -0.267, r: 0.133, t: -0.6, b: -0.14 },
      ],
    },
    {
      id: 4,
      name: "drohne",
      source: "concept/enemies-v2/05-drohne.jpg",
      provenance: "user-supplied",
      sha256: "8ca5322bd2fadd4e6a217348fa2d10040faca83f71c9843e6e6e495a50cfc448",
      fw: 192,
      fh: 170,
      ax: 97.2,
      ay: 160.1,
      body: 150,
      ext: [
        { l: -0.615, r: 0.625, t: -0.907, b: 0.026 },
        { l: -0.608, r: 0.592, t: -0.967, b: -0.054 },
        { l: -0.615, r: 0.585, t: -1.021, b: -0.107 },
        { l: -0.615, r: 0.585, t: -0.967, b: -0.061 },
        { l: -0.622, r: 0.578, t: -0.894, b: -0.001 },
        { l: -0.622, r: 0.592, t: -0.861, b: 0.059 },
        { l: -0.602, r: 0.598, t: -1.027, b: -0.094 },
        { l: -0.595, r: 0.585, t: -1.061, b: -0.141 },
        { l: -0.642, r: 0.572, t: -1.014, b: -0.041 },
        { l: -0.602, r: 0.592, t: -0.894, b: -0.041 },
        { l: -0.608, r: 0.572, t: -0.947, b: -0.034 },
        { l: -0.622, r: 0.592, t: -0.927, b: -0.014 },
      ],
    },
    {
      id: 5,
      name: "fledermaus",
      source: "concept/enemies-v2/06-fledermaus.jpg",
      provenance: "user-supplied",
      sha256: "6fc913035b67aa148cbe1a074ee3151804cc32a4bd839b8876f535a5e405f8d0",
      fw: 251,
      fh: 191,
      ax: 124.8,
      ay: 157.6,
      body: 150,
      ext: [
        { l: -0.826, r: 0.834, t: -0.77, b: 0.07 },
        { l: -0.772, r: 0.821, t: -0.777, b: -0.09 },
        { l: -0.732, r: 0.761, t: -0.784, b: -0.09 },
        { l: -0.752, r: 0.701, t: -0.904, b: -0.09 },
        { l: -0.706, r: 0.668, t: -1.024, b: -0.09 },
        { l: -0.812, r: 0.774, t: -0.977, b: -0.09 },
        { l: -0.719, r: 0.821, t: -1.044, b: -0.084 },
        { l: -0.646, r: 0.708, t: -0.824, b: -0.084 },
        { l: -0.786, r: 0.781, t: -0.704, b: 0.05 },
        { l: -0.706, r: 0.754, t: -0.664, b: 0.216 },
        { l: -0.826, r: 0.688, t: -0.79, b: -0.077 },
        { l: -0.806, r: 0.828, t: -0.79, b: -0.084 },
      ],
    },
    {
      id: 6,
      name: "pilzkopf",
      source: "concept/enemies-v2/07-pilzkopf.jpg",
      provenance: "user-supplied",
      sha256: "903162382f12321e4be97316586f3c657be0e8c1dfe3530068d194019cd50d23",
      fw: 189,
      fh: 167,
      ax: 90.1,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.547, r: 0.553, t: -1, b: 0.033 },
        { l: -0.527, r: 0.539, t: -1.02, b: 0.027 },
        { l: -0.534, r: 0.539, t: -0.98, b: 0.033 },
        { l: -0.534, r: 0.533, t: -0.98, b: 0.033 },
        { l: -0.527, r: 0.533, t: -1.02, b: 0.02 },
        { l: -0.534, r: 0.553, t: -1.02, b: 0.033 },
        { l: -0.554, r: 0.546, t: -0.8, b: 0.08 },
        { l: -0.534, r: 0.539, t: -0.993, b: 0.073 },
        { l: -0.521, r: 0.619, t: -0.96, b: 0.06 },
        { l: -0.594, r: 0.653, t: -0.707, b: 0.08 },
        { l: -0.494, r: 0.593, t: -0.853, b: 0.08 },
        { l: -0.534, r: 0.553, t: -0.947, b: 0.08 },
      ],
    },
    {
      id: 7,
      name: "hammergolem",
      source: "concept/enemies-v2/08-hammergolem.jpg",
      provenance: "user-supplied",
      sha256: "2cd3c632dd11e58006c39962f74af252816673ef6888d6b1a384638fa8c80492",
      fw: 205,
      fh: 200,
      ax: 99.9,
      ay: 171.1,
      body: 150,
      ext: [
        { l: -0.606, r: 0.621, t: -1.021, b: 0.033 },
        { l: -0.646, r: 0.614, t: -1.021, b: 0.033 },
        { l: -0.586, r: 0.634, t: -1.021, b: 0.033 },
        { l: -0.633, r: 0.654, t: -0.974, b: 0.033 },
        { l: -0.559, r: 0.647, t: -1.021, b: 0.039 },
        { l: -0.586, r: 0.621, t: -1.021, b: 0.019 },
        { l: -0.639, r: 0.621, t: -0.954, b: 0.053 },
        { l: -0.659, r: 0.467, t: -1.134, b: 0.053 },
        { l: -0.586, r: 0.681, t: -0.907, b: 0.053 },
        { l: -0.659, r: 0.694, t: -0.794, b: 0.186 },
        { l: -0.599, r: 0.621, t: -0.894, b: 0.059 },
        { l: -0.593, r: 0.621, t: -0.987, b: 0.053 },
      ],
    },
    {
      id: 8,
      name: "schleimauge",
      source: "concept/enemies-v2/09-schleimauge.jpg",
      provenance: "user-supplied",
      sha256: "0c0c7ece14b6bb32c4782bcaba23409ecb7fa904bec10a2d37012bb3b2670fd6",
      fw: 255,
      fh: 167,
      ax: 125.5,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.71, r: 0.71, t: -0.853, b: 0.06 },
        { l: -0.703, r: 0.717, t: -0.687, b: 0.06 },
        { l: -0.676, r: 0.69, t: -0.907, b: 0.047 },
        { l: -0.676, r: 0.664, t: -1.02, b: -0.16 },
        { l: -0.69, r: 0.717, t: -0.867, b: 0.02 },
        { l: -0.723, r: 0.71, t: -0.807, b: 0.06 },
        { l: -0.723, r: 0.75, t: -0.447, b: 0.08 },
        { l: -0.596, r: 0.624, t: -0.787, b: 0.06 },
        { l: -0.703, r: 0.704, t: -0.853, b: 0 },
        { l: -0.83, r: 0.857, t: -0.58, b: 0.08 },
        { l: -0.643, r: 0.67, t: -0.84, b: 0.047 },
        { l: -0.696, r: 0.71, t: -0.8, b: 0.06 },
      ],
    },
    {
      id: 9,
      name: "massband",
      source: "concept/enemies-v2/10-massband.jpg",
      provenance: "user-supplied",
      sha256: "afb493c9ce999c01610063293113ed004a62eb4f18c8def06233191cba6cfd66",
      fw: 189,
      fh: 160,
      ax: 91.4,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.41, r: 0.384, t: -0.907, b: 0.033 },
        { l: -0.41, r: 0.41, t: -0.993, b: 0.02 },
        { l: -0.43, r: 0.424, t: -1.02, b: 0.013 },
        { l: -0.396, r: 0.424, t: -0.947, b: 0.033 },
        { l: -0.396, r: 0.39, t: -0.88, b: 0.013 },
        { l: -0.403, r: 0.384, t: -0.887, b: 0.033 },
        { l: -0.496, r: 0.384, t: -0.767, b: 0.033 },
        { l: -0.503, r: 0.33, t: -1, b: 0.033 },
        { l: -0.463, r: 0.317, t: -0.933, b: 0.033 },
        { l: -0.603, r: 0.644, t: -0.78, b: 0.033 },
        { l: -0.45, r: 0.31, t: -0.84, b: 0.033 },
        { l: -0.396, r: 0.377, t: -0.88, b: 0.033 },
      ],
    },
    {
      id: 10,
      name: "leitkegel",
      source: "concept/enemies-v2/11-leitkegel.jpg",
      provenance: "user-supplied",
      sha256: "f61ffa5f5083f23ce3908e981028e8ab82db19a234b97962f0f1a79ab4634e15",
      fw: 165,
      fh: 164,
      ax: 101.9,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.372, r: 0.354, t: -1.02, b: 0.04 },
        { l: -0.346, r: 0.354, t: -1, b: 0.033 },
        { l: -0.346, r: 0.361, t: -0.973, b: 0.027 },
        { l: -0.346, r: 0.354, t: -0.973, b: 0.02 },
        { l: -0.332, r: 0.368, t: -0.973, b: 0.04 },
        { l: -0.346, r: 0.388, t: -0.98, b: 0.033 },
        { l: -0.419, r: 0.308, t: -0.967, b: 0.033 },
        { l: -0.466, r: 0.328, t: -0.967, b: 0.033 },
        { l: -0.452, r: 0.301, t: -0.967, b: 0.033 },
        { l: -0.652, r: 0.394, t: -0.833, b: 0.033 },
        { l: -0.672, r: 0.414, t: -0.86, b: 0.06 },
        { l: -0.366, r: 0.361, t: -0.98, b: 0.033 },
      ],
    },
    {
      id: 11,
      name: "laternenhand",
      source: "concept/enemies-v2/12-laternenhand.jpg",
      provenance: "user-supplied",
      sha256: "cbcce3db1238886bf01888e5e252177a4ff7c07e7c19e7877de1b1f67bc7040f",
      fw: 133,
      fh: 166,
      ax: 68.4,
      ay: 155.4,
      body: 150,
      ext: [
        { l: -0.409, r: 0.364, t: -0.996, b: 0.044 },
        { l: -0.369, r: 0.364, t: -1.023, b: 0.017 },
        { l: -0.383, r: 0.337, t: -1.023, b: 0.011 },
        { l: -0.396, r: 0.357, t: -0.969, b: 0.037 },
        { l: -0.343, r: 0.344, t: -0.976, b: 0.044 },
        { l: -0.316, r: 0.404, t: -0.976, b: 0.044 },
        { l: -0.416, r: 0.351, t: -0.769, b: 0.044 },
        { l: -0.336, r: 0.397, t: -0.976, b: 0.017 },
        { l: -0.396, r: 0.424, t: -1.029, b: 0.017 },
        { l: -0.449, r: 0.357, t: -0.929, b: 0.064 },
        { l: -0.416, r: 0.311, t: -0.956, b: 0.017 },
        { l: -0.416, r: 0.351, t: -0.769, b: 0.064 },
      ],
    },
    {
      id: 12,
      name: "skelett",
      source: "concept/enemies-v2/13-skelett.jpg",
      provenance: "user-supplied",
      sha256: "be6e514374846f3cc7c90f3b24e58ed0f39b311b490a00a68eabb1a1b31c5733",
      fw: 176,
      fh: 160,
      ax: 73.4,
      ay: 154,
      body: 150,
      ext: [
        { l: -0.449, r: 0.491, t: -0.993, b: 0.027 },
        { l: -0.416, r: 0.484, t: -1.02, b: 0.027 },
        { l: -0.469, r: 0.471, t: -0.927, b: 0.033 },
        { l: -0.423, r: 0.464, t: -0.993, b: 0.027 },
        { l: -0.396, r: 0.451, t: -1.013, b: 0.02 },
        { l: -0.463, r: 0.477, t: -0.9, b: 0.033 },
        { l: -0.449, r: 0.464, t: -0.98, b: 0.027 },
        { l: -0.483, r: 0.464, t: -0.993, b: 0.027 },
        { l: -0.456, r: 0.404, t: -0.98, b: 0.027 },
        { l: -0.416, r: 0.677, t: -0.967, b: 0.027 },
        { l: -0.443, r: 0.484, t: -0.987, b: 0.027 },
        { l: -0.443, r: 0.477, t: -0.987, b: 0.027 },
      ],
    },
  ],
  uA = 10,
  pA = 11,
  Sg = 12,
  Vi = (e) => Math.max(0, Math.min(1, e));
function ni(e, A) {
  const g =
      A.state === uA
        ? e.frames.windup
        : A.state === pA
          ? e.frames.strike
          : A.state === Sg
            ? e.frames.recover
            : null,
    B = A.state === uA ? e.windup : A.state === pA ? e.strike : e.recover;
  if (g && g.length && B > 0) {
    const E = Vi(1 - A.timer / B);
    return g[Math.min(g.length - 1, Math.floor(E * g.length))];
  }
  return Math.floor(A.age * e.walkFps) % 6;
}
const oB = (e) => $[e].h / Ig[e].body,
  QA = (e) => $[e].radius * 0.8;
function Si(e, A) {
  return Ig[e].ext[A].r * $[e].h;
}
const Dg = (e) => Si(e, 9) - 4,
  gA = [
    {
      scrapBase: 32,
      scrapPerWave: 10,
      xpBase: 20,
      xpPerWave: 12,
      name: "Normal",
      subtitle: "Schon die erste Nacht beißt.",
      color: "#b6c7de",
      hp: 1.12,
      damage: 1.12,
      speed: 1.18,
      density: 1.22,
      elites: 1.5,
      bossHp: 1.35,
      healing: 0.9,
      economy: 0.92,
      prices: 1,
      waveHeal: 0.08,
      formationInterval: 12,
      patterns: 1,
    },
    {
      scrapBase: 30,
      scrapPerWave: 9,
      xpBase: 20,
      xpPerWave: 11,
      name: "Schwer",
      subtitle: "Kein Platz für schlechte Entscheidungen.",
      color: "#edb581",
      hp: 1.35,
      damage: 1.35,
      speed: 1.28,
      density: 1.43,
      elites: 2,
      bossHp: 1.65,
      healing: 0.7,
      economy: 0.82,
      prices: 1.08,
      waveHeal: 0.06,
      formationInterval: 10,
      patterns: 2,
    },
    {
      scrapBase: 26,
      scrapPerWave: 8,
      xpBase: 16,
      xpPerWave: 10,
      name: "Albtraum",
      subtitle: "Für Builds, die die Nacht bezwingen.",
      color: "#d7a9ee",
      hp: 1.65,
      damage: 1.6,
      speed: 1.4,
      density: 1.68,
      elites: 2.7,
      bossHp: 2,
      healing: 0.55,
      economy: 0.72,
      prices: 1.16,
      waveHeal: 0.04,
      formationInterval: 8,
      patterns: 3,
    },
  ],
  rA = (e) => Math.round((e - 1) * 100);
function Qg(e, A) {
  const g = e[String(A)];
  return Number.isInteger(g) && g >= 0 ? Math.min(2, g) : -1;
}
function Di(e, A) {
  return Math.min(2, Qg(e, A) + 1);
}
const pi = [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1],
  iB = (e) => ((e.foe ?? -1) >= 0 ? $[e.foe].mat : (pi[e.type] ?? 0)),
  CB = ["flesh", "metal", "stone"],
  XA = { x: 760, y: 470 };
class mi {
  constructor(A, g) {
    (this.save = A),
      (this.audio = g),
      (this.runTalents = { ...A.data.talents }),
      (this.stats = bg(0, A.data));
  }
  save;
  audio;
  phase = "menu";
  coop;
  blades = new DA(
    () => ({
      active: !1,
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      vx: 0,
      vy: 0,
      age: 0,
      traveled: 0,
      ownerIndex: 0,
      returning: !1,
      budget: 1,
      damage: 0,
      hits: new Set(),
      sharedHits: new Set(),
      curve: 1,
      trailX: new Float32Array(8),
      trailY: new Float32Array(8),
      trailHead: 0,
    }),
    48,
  );
  previous = "combat";
  onChange = () => {};
  onToast = (A) => {};
  enemies = new DA(
    () => ({
      active: !1,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      type: 0,
      hp: 1,
      maxHp: 1,
      r: 1,
      speed: 0,
      damage: 0,
      flash: 0,
      age: 0,
      cd: 1,
      state: 0,
      timer: 0,
      aim: 0,
      burn: 0,
      burnDamage: 0,
      bleed: 0,
      bleedTime: 0,
      tick: 0,
      buff: 0,
      elite: 0,
      spawn: 0,
      depth: 0,
      poison: 0,
      poisonTime: 0,
      poisonGen: 0,
      slow: 0,
      flank: Math.random() < 0.5 ? -1 : 1,
      bossMode: 0,
      bossPattern: "ring",
      patternIndex: 0,
      windupMax: 1,
      phaseFlash: 0,
      beamTick: 0,
      foe: -1,
      face: 1,
    }),
    1400,
  );
  projectiles = new DA(
    () => ({
      active: !1,
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      vx: 0,
      vy: 0,
      life: 0,
      damage: 0,
      r: 3,
      enemy: !1,
      bounce: 0,
      color: "",
      hit: new Set(),
      poison: 0,
      returning: !1,
      age: 0,
      pierce: !1,
    }),
    1600,
  );
  particles = new DA(
    () => ({ active: !1, x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 0, size: 1, color: "", kind: 0 }),
    2200,
  );
  loot = new DA(
    () => ({
      active: !1,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      z: 0,
      vz: 0,
      value: 1,
      kind: 0,
      age: 0,
      magnet: !1,
      trail: 0,
    }),
    1500,
  );
  numbers = new DA(() => ({ active: !1, x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 0, text: "", crit: !1, color: "" }), 200);
  deaths = new DA(
    () => ({ active: !1, x: 0, y: 0, type: 0, elite: 0, foe: -1, face: 1, life: 0, max: 0.32, angle: 0 }),
    64,
  );
  killStreak = 0;
  streakTime = 0;
  maxKillStreak = 0;
  lastCrateWave = -4;
  purchaseSerial = 0;
  showcase;
  pendingShowcase;
  grid = new $o();
  near = [];
  zones = [];
  ults = [];
  climb = 0;
  climbState = new Ii();
  get yMid() {
    return this.climbState.active ? this.climbState.y : 0;
  }
  turrets = [];
  companions = [];
  map = 0;
  difficulty = 0;
  runDifficulty = 0;
  formationTimer = 8;
  formations = 0;
  scrapDropped = 0;
  xpDropped = 0;
  lastFormation = "";
  envTime = 4;
  dashTime = 0;
  dashDur = 0.17;
  dashLand = 0;
  ghostTimer = 0;
  fx = new oi();
  ghosts = [];
  dashCharges = 1;
  dashRecharge = 0;
  dashX = 1;
  dashY = 0;
  abilityCd = 0;
  abilityFlash = 0;
  overdrive = 0;
  mobile = !1;
  fxCount = 0;
  beams = [];
  forkBolts = [];
  forkHits = [];
  forkShots = 0;
  player = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    hp: 65,
    invuln: 0,
    face: 1,
    walk: 0,
    moveBlend: 0,
    flash: 0,
    pullX: 0,
    pullY: 0,
  };
  stats;
  runTalents = {};
  bonus = {};
  items = {};
  weapons = [];
  character = 0;
  startWeapon = J[0].weapon;
  wave = 1;
  waveTime = 0;
  waveLength = 40;
  runTime = 0;
  kills = 0;
  runDamage = 0;
  money = 35;
  xp = 0;
  xpNeed = 8;
  level = 1;
  pendingLevels = 0;
  spawnTimer = 0;
  time = 0;
  deathAt = 0;
  shake = 0;
  pulse = 0;
  heavyStop = 0;
  procBudget = 90;
  combo = 0;
  pickupAt = 0;
  banner = "";
  bannerTime = 0;
  bossSpawned = !1;
  bossDead = !1;
  maxEnemyRadius = z[7].radius;
  ended = !1;
  endless = !1;
  danger = !1;
  riskBonus = 0;
  risks = 0;
  highEnemies = 0;
  levelOptions = [];
  shopOffers = [];
  rerolls = 0;
  mutationWeapon;
  mutationOptions = [];
  debug = !1;
  god = !1;
  testRun = !1;
  input = { x: 0, y: 0, aimX: 1, aimY: 0, aimActive: !1 };
  hubNear;
  hubReturn = 0;
  hubGuard = 0;
  hubWelcome = "";
  hubPaused = !1;
  hubPartner;
  onHubStation = (A) => {};
  get actorIndex() {
    return this.coop?.current ?? 0;
  }
  pan(A) {
    return V((A - this.player.x) / 520, -1, 1);
  }
  get dashStyle() {
    return Pg[this.character] ?? Pg[0];
  }
  dashCtx(A = 0) {
    return {
      x: this.player.x,
      y: this.player.y,
      dx: this.dashX,
      dy: this.dashY,
      dt: A,
      reduced: this.save.data.settings.reducedMotion,
    };
  }
  pushGhost(A, g) {
    const B = this.player,
      E = this.dashDur > 0 ? 1 - this.dashTime / this.dashDur : 1,
      o = VB(
        this.character,
        E,
        0,
        Math.sign(this.dashX) || B.face,
        this.save.data.settings.reducedMotion,
        this.time,
      );
    this.ghosts.length > 40 && this.ghosts.shift(),
      this.ghosts.push({
        x: B.x + o.ox,
        y: B.y + o.oy,
        hero: this.character,
        frame: 0,
        face: B.face,
        life: 0.32,
        max: 0.32,
        tint: g,
        alpha: A,
        sx: o.sx,
        sy: o.sy,
        rot: o.rot,
        pivot: o.pivot,
      });
  }
  withActor(A, g) {
    return this.coop ? this.coop.with(A, g) : g();
  }
  forActors(A, g = !1) {
    if (!this.coop) {
      A();
      return;
    }
    for (let B = 0; B < 2; B++) (g || this.coop.actors[B].player.hp > 0) && this.withActor(B, A);
  }
  nearestActor(A) {
    return this.coop?.nearest(A) ?? 0;
  }
  actorPlayer(A) {
    return this.coop?.actors[A].player ?? this.player;
  }
  hurtActor(A, g) {
    this.withActor(A, () => this.hurt(g));
  }
  get allTurrets() {
    return this.coop ? (this.coop.save(), this.coop.actors.flatMap((A) => A.turrets)) : this.turrets;
  }
  get allCompanions() {
    return this.coop ? (this.coop.save(), this.coop.actors.flatMap((A) => A.companions)) : this.companions;
  }
  startCoop(A, g = ["pistol", "saw"]) {
    (this.coop = void 0), g.forEach((o) => this.discover(o)), this.start(A[0], g[0]);
    const B = _g(this);
    this.start(A[1], g[1]);
    const E = _g(this);
    (B.input = { ...B.input, aimActive: !1 }),
      (E.input = { ...E.input, aimActive: !1 }),
      (B.player.hp = B.stats.hp),
      (this.coop = new ci(this, [B, E])),
      (B.player.x = -95),
      (E.player.x = 95),
      (this.difficulty = this.runDifficulty =
        Math.min(this.runDifficulty, this.maxDifficulty(A[0]), this.maxDifficulty(A[1]))),
      delete this.save.data.checkpoint,
      this.save.write(),
      this.setPhase("combat");
  }
  weaponRange(A) {
    return A.id === "axe"
      ? this.meleeReach(A)
      : j.find((g) => g.id === A.id).range * Math.max(0.5, this.stats.range);
  }
  meleeReach(A) {
    return ei(A.tier, this.stats.range, A.mutation);
  }
  bladeCount(A) {
    return Math.min(3, A.tier);
  }
  bladesOut(A) {
    let g = 0;
    return (
      this.blades.each((B) => {
        B.owner === A && g++;
      }),
      g
    );
  }
  mothCount(A) {
    return [2, 3, 4, 6][Math.max(0, Math.min(3, A.tier - 1))];
  }
  enterHub(A = {}) {
    if (this.coop) {
      const E = this.coop.snapshot().map((o) => o.character);
      this.coop.activate(0), (this.character = E[0]), (this.hubPartner = this.makePartner(E[1], 0, 0, !1));
    }
    A.partner !== void 0 && (this.hubPartner = this.makePartner(A.partner, 0, 0, !0)),
      (this.coop = void 0),
      this.blades.clear(),
      this.enemies.clear(),
      this.projectiles.clear(),
      this.loot.clear(),
      (this.zones = []),
      (this.ults = []),
      (this.beams = []),
      (this.forkBolts = []),
      (this.forkHits = []),
      (this.dashTime = 0),
      (this.shake = 0),
      (this.pulse = 0),
      (this.showcase = void 0),
      (this.character = Math.max(0, Math.min(J.length - 1, Math.floor(this.character) || 0)));
    const g = A.at ? wg(A.at).exit : Rg,
      B = this.player;
    if (
      ((B.x = g.x),
      (B.y = g.y - wA),
      (B.vx = B.vy = 0),
      (B.face = 1),
      (B.walk = 0),
      (B.moveBlend = 0),
      (B.flash = 0),
      (B.invuln = 0),
      (B.hp = Math.max(1, this.stats?.hp ?? 65)),
      this.hubPartner)
    ) {
      const E = this.hubPartner;
      E.hero === this.character && (E.hero = this.randomPartnerHero()),
        (E.x = g.x + (g.x > 1300 ? -58 : 58)),
        (E.y = g.y - wA),
        gg(E.x, E.y) && (E.x = g.x),
        (E.vx = E.vy = 0),
        (E.input.x = E.input.y = 0);
    }
    (this.hubNear = void 0),
      (this.hubGuard = 0.6),
      (this.hubReturn = A.fromRun ? 3.2 : A.at ? 0 : 2.4),
      (this.hubWelcome = A.fromRun ? "Zurück im Hof" : A.at ? "" : "Der Hof"),
      this.setPhase("hub");
  }
  updateHub(A) {
    const g = this.player;
    if (this.hubPaused) {
      (g.vx = g.vy = 0), (g.moveBlend = 0);
      return;
    }
    (this.hubReturn = Math.max(0, this.hubReturn - A)), (this.hubGuard = Math.max(0, this.hubGuard - A));
    const B = g.x,
      E = g.y;
    zg(g, this.input.x * WA * A, this.input.y * WA * A);
    const o = Math.hypot(g.x - B, g.y - E);
    (g.vx = A > 0 ? (g.x - B) / A : 0),
      (g.vy = A > 0 ? (g.y - E) / A : 0),
      (g.face = rg(this.input.x * WA, g.face)),
      (g.walk = Yg(g.walk, o)),
      (g.moveBlend += ((o > 0.01 ? 1 : 0) - g.moveBlend) * Math.min(1, A * 22)),
      g.moveBlend < 0.01 && (g.moveBlend = 0),
      g.moveBlend > 0.99 && (g.moveBlend = 1);
    const i = this.hubPartner;
    if (i) {
      i.spawn = Math.max(0, i.spawn - A);
      const t = i.x,
        h = i.y;
      i.spawn < 0.35 && zg(i, i.input.x * WA * A, i.input.y * WA * A);
      const s = Math.hypot(i.x - t, i.y - h);
      (i.vx = A > 0 ? (i.x - t) / A : 0),
        (i.vy = A > 0 ? (i.y - h) / A : 0),
        (i.face = rg(i.input.x * WA, i.face)),
        (i.walk = Yg(i.walk, s)),
        (i.moveBlend += ((s > 0.01 ? 1 : 0) - i.moveBlend) * Math.min(1, A * 22)),
        i.moveBlend < 0.01 && (i.moveBlend = 0),
        i.moveBlend > 0.99 && (i.moveBlend = 1);
    }
    const I = Zg(g.x, g.y),
      C = i && !i.spawn ? Zg(i.x, i.y) : void 0,
      Q = (I ?? C)?.id;
    Q !== this.hubNear && ((this.hubNear = Q), this.onChange());
    const a = wg("tor").walkIn;
    !this.hubGuard && this.input.y > 0.2 && fg(a, g.x, g.y + wA)
      ? this.hubInteract("tor")
      : i && !this.hubGuard && i.input.y > 0.2 && fg(a, i.x, i.y + wA) && this.hubInteract("tor");
  }
  randomPartnerHero() {
    const A = J.map((g, B) => B).filter((g) => g !== this.character);
    return A[Math.floor(Math.random() * A.length)];
  }
  makePartner(A, g, B, E) {
    return {
      hero: A,
      x: g,
      y: B,
      vx: 0,
      vy: 0,
      face: -1,
      walk: 0,
      moveBlend: 0,
      spawn: E ? 0.9 : 0,
      input: { x: 0, y: 0 },
    };
  }
  hubJoin(A) {
    if (this.phase !== "hub" || this.hubPartner) return !1;
    const g = this.player,
      B = A !== void 0 && A !== this.character ? A : this.randomPartnerHero(),
      E = this.makePartner(B, g.x, g.y, !0);
    for (const [o, i] of [
      [62, 0],
      [-62, 0],
      [0, 44],
      [0, -44],
      [90, 30],
      [-90, 30],
      [40, 40],
      [-40, -40],
    ])
      if (!gg(g.x + o, g.y + i)) {
        (E.x = g.x + o), (E.y = g.y + i);
        break;
      }
    return (
      (E.face = E.x > g.x ? -1 : 1),
      (this.hubPartner = E),
      this.audio.sound("level", 1.15),
      this.onToast(`Spieler 2 ist da: ${J[B].name}`),
      this.onChange(),
      !0
    );
  }
  hubLeave() {
    this.hubPartner && ((this.hubPartner = void 0), this.onChange());
  }
  hubInteract(A = this.hubNear) {
    return this.phase !== "hub" || !A || this.hubGuard > 0
      ? !1
      : ((this.hubGuard = 0.5),
        (this.input.x = this.input.y = 0),
        this.audio.sound("click", 0.9),
        this.onHubStation(A),
        !0);
  }
  setPhase(A) {
    (this.phase = A), this.onChange();
  }
  recalc() {
    this.stats = bg(this.character, { ...this.save.data, talents: this.runTalents });
    for (const [A, g] of Object.entries(this.bonus)) this.stats[A] += g;
    for (const [A, g] of Object.entries(this.items)) {
      const B = _.find((E) => E.id === A);
      for (const [E, o] of Object.entries(B.stats)) this.stats[E] += o * g;
    }
    (this.stats.hp = Math.max(10, this.stats.hp)),
      (this.stats.damage = Math.max(0.1, this.stats.damage)),
      (this.stats.attackSpeed = V(this.stats.attackSpeed, 0.2, 5)),
      (this.stats.speed = V(this.stats.speed, 0.35, 2.4)),
      (this.stats.crit = V(this.stats.crit, 0, 1)),
      (this.stats.range = V(this.stats.range, 0.5, 3)),
      (this.player.hp = Math.min(this.player.hp, this.stats.hp));
  }
  get rules() {
    return gA[this.runDifficulty];
  }
  enemyFactor(A) {
    const g = V((this.wave - 1) / 7, 0, 1);
    return gA[0][A] + (this.rules[A] - gA[0][A]) * g;
  }
  maxDifficulty(A = this.character) {
    return Di(this.save.data.difficultyClears, A);
  }
  selectDifficulty(A) {
    return !Number.isInteger(A) || A < 0 || A > this.maxDifficulty() ? !1 : ((this.difficulty = A), !0);
  }
  heal(A) {
    if (this.coop && this.player.hp <= 0) return 0;
    const g = this.player.hp;
    return (
      (this.player.hp = Math.min(this.stats.hp, this.player.hp + Math.max(0, A) * this.rules.healing)),
      this.player.hp - g
    );
  }
  start(A = this.character, g = this.startWeapon, B = this.difficulty) {
    (this.coop = void 0),
      this.blades.clear(),
      (this.runTalents = { ...this.save.data.talents }),
      (A = V(Math.floor(Number.isFinite(A) ? A : 0), 0, J.length - 1)),
      (this.character = A),
      (this.difficulty = V(Math.floor(Number.isFinite(B) ? B : 0), 0, this.maxDifficulty(A))),
      (this.runDifficulty = this.difficulty),
      (this.formations = 0),
      (this.scrapDropped = 0),
      (this.xpDropped = 0),
      (this.formationTimer = 8),
      (this.lastFormation = ""),
      (this.killStreak = 0),
      (this.streakTime = 0),
      (this.maxKillStreak = 0),
      (this.lastCrateWave = -4),
      (this.showcase = void 0),
      (this.pendingShowcase = void 0),
      this.deaths.clear(),
      (this.startWeapon = g),
      (this.bonus = {}),
      (this.items = {}),
      this.recalc(),
      (this.player = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        hp: this.stats.hp,
        invuln: 0,
        face: 1,
        walk: 0,
        moveBlend: 0,
        flash: 0,
        pullX: 0,
        pullY: 0,
      }),
      (this.weapons = [this.weapon(g)]),
      (this.companions = []),
      (this.dashTime = 0),
      (this.dashCharges = 1),
      (this.dashRecharge = 0),
      (this.abilityCd = 0),
      (this.abilityFlash = 0),
      (this.overdrive = 0),
      (this.envTime = 5),
      this.enemies.clear(),
      (this.foeBursts = []),
      (this.maxEnemyRadius = z[7].radius),
      this.projectiles.clear(),
      this.loot.clear(),
      this.particles.clear(),
      this.fx.clear(),
      (this.ghosts = []),
      (this.dashLand = 0),
      this.numbers.clear(),
      (this.zones = []),
      (this.ults = []),
      (this.turrets = []),
      (this.beams = []),
      (this.forkBolts = []),
      (this.forkHits = []),
      (this.wave = 1),
      (this.waveLength = 41),
      (this.waveTime = 0),
      (this.runTime = 0),
      (this.kills = 0),
      (this.runDamage = 0),
      (this.money = 35),
      (this.xp = 0),
      (this.level = 1),
      (this.xpNeed = 8),
      (this.pendingLevels = 0),
      (this.spawnTimer = 0.2),
      (this.ended = !1),
      (this.testRun = !1),
      (this.god = !1),
      (this.endless = !1),
      (this.climb = V(Math.floor(this.climb || 0), 0, GA.length)),
      this.climbState.reset(this.climb),
      this.climb && ((this.map = GA[this.climb - 1].theme), (this.endless = !0)),
      (this.bossDead = !1),
      (this.bossSpawned = !1),
      (this.danger = !1),
      (this.riskBonus = 0),
      (this.risks = 0),
      (this.shopOffers = []),
      (this.combo = 0),
      (this.heavyStop = 0),
      (this.shake = 0),
      (this.pulse = 0),
      this.setPhase("combat"),
      this.audio.init(),
      this.audio.sound("wave_start", 0.8),
      this.saveCheckpoint();
  }
  weapon(A, g = 1) {
    return {
      id: A,
      tier: g,
      cd: 0.15,
      angle: 0,
      mirrorY: 1,
      kick: 0,
      swing: 0,
      mutation: "",
      aimTimer: 0,
      glow: 0,
    };
  }
  damageScale() {
    return (
      this.stats.damage *
      (this.items.fury && this.player.hp < this.stats.hp * 0.35 ? 1 + 0.45 * this.items.fury : 1)
    );
  }
  spawn(A, g, B, E = !1, o) {
    const i = this.enemies.get();
    if (!i) return;
    let I = p(0, Math.PI * 2),
      C = p(550, 780);
    const Q = z[A];
    let a = g ?? V(this.player.x + Math.cos(I) * C, -930, 930),
      t = B ?? V(this.player.y + Math.sin(I) * C, this.yMid - 650, this.yMid + 650);
    if (
      (g === void 0 &&
        Math.hypot(a - this.player.x, t - this.player.y) < 300 &&
        ((a = V(this.player.x - Math.cos(I) * 480, -930, 930)),
        (t = V(this.player.y - Math.sin(I) * 480, this.yMid - 650, this.yMid + 650))),
      !E)
    ) {
      const U = A >= 8 ? 420 : g === void 0 ? 340 : 180;
      if (Math.hypot(a - this.player.x, t - this.player.y) < U)
        for (let M = 0; M < 16; M++) {
          const r = M * 2.399963,
            Y = U + 190;
          if (
            ((a = V(this.player.x + Math.cos(r) * Y, -930, 930)),
            (t = V(this.player.y + Math.sin(r) * Y, this.yMid - 650, this.yMid + 650)),
            Math.hypot(a - this.player.x, t - this.player.y) >= U)
          )
            break;
        }
    }
    if (this.coop && !E) {
      const U = A >= 8 ? 420 : g === void 0 ? 340 : 180;
      if (this.coop.actors.some((M) => M.player.hp > 0 && Math.hypot(M.player.x - a, M.player.y - t) < U)) {
        let M = -1;
        for (let r = 0; r < 24; r++) {
          const Y = r * 2.399963,
            c = V(Math.cos(Y) * 900, -930, 930),
            R = V(this.yMid + Math.sin(Y) * 620, this.yMid - 650, this.yMid + 650),
            G = Math.min(
              ...this.coop.actors
                .filter((n) => n.player.hp > 0)
                .map((n) => Math.hypot(n.player.x - c, n.player.y - R)),
            );
          G > M && ((M = G), (a = c), (t = R));
        }
      }
    }
    this.maxEnemyRadius = Math.max(this.maxEnemyRadius, Q.radius);
    const h = 1 + Math.max(0, this.wave - 1) * 0.14;
    Object.assign(i, {
      x: a,
      y: t,
      vx: 0,
      vy: 0,
      type: A,
      hp: Q.hp * h * this.enemyFactor("hp"),
      maxHp: Q.hp * h * this.enemyFactor("hp"),
      r: Q.radius,
      speed: Q.speed * (1 + this.wave * 0.012) * this.enemyFactor("speed"),
      damage: Q.damage * (1 + this.wave * 0.045) * this.enemyFactor("damage"),
      flash: 0,
      age: 0,
      cd: p(1, 3),
      state: 0,
      timer: 0,
      aim: 0,
      burn: 0,
      burnDamage: 0,
      bleed: 0,
      bleedTime: 0,
      tick: 0.25,
      buff: 0,
      elite: A === 7 ? Math.floor(p(0, 5)) : 0,
      foe: -1,
      face: 1,
      spawn: E ? 0 : 0.85,
      depth: 0,
      poison: 0,
      poisonTime: 0,
      poisonGen: 0,
      slow: 0,
      flank: Math.random() < 0.5 ? -1 : 1,
      bossMode: 0,
      bossPattern: "ring",
      patternIndex: 0,
      windupMax: 1,
      phaseFlash: 0,
      beamTick: 0,
    });
    let s = o ?? -1;
    if (o === void 0 && A < 7) {
      const U = [];
      $.forEach((M, r) => M.base === A && M.unlock <= Math.max(1, this.wave) && U.push(r)),
        U.length && Math.random() < qi(this.wave) && (s = U[Math.floor(Math.random() * U.length)]);
    }
    if (s >= 0) {
      const U = $[s];
      (i.foe = s),
        (i.hp = i.maxHp = U.hp * h * this.enemyFactor("hp")),
        (i.speed = U.speed * (1 + this.wave * 0.012) * this.enemyFactor("speed")),
        (i.damage = U.damage * (1 + this.wave * 0.045) * this.enemyFactor("damage")),
        (i.r = U.radius),
        (i.cd = p(0.8, 1.8)),
        (this.maxEnemyRadius = Math.max(this.maxEnemyRadius, U.radius));
    }
    return (
      A >= 8 &&
        ((i.hp = i.maxHp = Q.hp * (1 + Math.max(0, this.wave - 20) * 0.2) * this.rules.bossHp),
        (i.cd = 2),
        (i.spawn = E ? 0 : 1.8)),
      i
    );
  }
  get bossWave() {
    return this.climb ? this.wave % 10 === 0 : this.wave >= 20;
  }
  eliteChance() {
    return Math.min(
      0.24,
      (0.025 + this.wave * 0.001) * this.enemyFactor("elites") * (this.wave >= 12 ? 1.35 : 1),
    );
  }
  spawnFormation() {
    const A = this.player,
      B =
        Math.abs(A.x) > 650 || Math.abs(A.y - this.yMid) > 430
          ? Math.atan2(this.yMid - A.y, -A.x)
          : Math.hypot(this.input.x, this.input.y) > 0.1
            ? Math.atan2(this.input.y, this.input.x)
            : Math.atan2(this.yMid - A.y || 1, -A.x),
      E = this.formations % 2 === 1,
      o = Math.min(18, 4 + Math.floor(this.wave * 0.45) + this.runDifficulty * 2);
    let i = 0;
    for (let I = 0; I < o; I++) {
      const C = E
          ? B + 0.8 + (I / Math.max(1, o - 1)) * (Math.PI * 2 - 1.6)
          : B + (I % 2 ? 1 : -1) * (1.15 + (I / o) * 0.65),
        Q = p(470, 590),
        a = V(A.x + Math.cos(C) * Q, -930, 930),
        t = V(A.y + Math.sin(C) * Q, this.yMid - 650, this.yMid + 650);
      if (Math.hypot(a - A.x, t - A.y) < 340 || Math.abs(fA(Math.atan2(t - A.y, a - A.x), B)) < 0.7) continue;
      const h = I % 5 === 0 && this.wave >= 7 ? 2 : I % 4 === 0 && this.wave >= 5 ? 3 : 0;
      this.spawn(h, a, t), i++;
    }
    return (
      this.formations++,
      (this.lastFormation = E ? "UMZINGELUNG · LÜCKE SUCHEN" : "ZANGENANGRIFF"),
      { spawned: i, gap: B, surround: E }
    );
  }
  bossImpact(A, g, B, E) {
    this.fx.decal(aA.Crack, A, g, B * 1.9, p(0, Math.PI * 2), 4),
      this.fx.ring(A, g, B * 0.4, B * 1.25, "#ffd2b0", 0.3, E ? 6 : 4),
      this.fx.smoke(A, g, E ? 7 : 4, B * 0.32, "#6d625b", "#f2cfa8", 1.1, B, 0, -14),
      this.fx.chips(A, g, E ? 12 : 6, "#5d544e", E ? 1.4 : 1, 5),
      this.fx.light(A, g, B * 2.2, "#ff6a4a", 0.22),
      this.fx.glow(A, g - 10, B * 0.9, "#ffd9b0", 0.08),
      (this.shake = Math.max(this.shake, E ? 8 : 5)),
      this.audio.sound("boss_slam", E ? 1 : 1.15, E ? 1 : 0.7, this.pan(A));
  }
  bossExtraPattern(A, g) {
    const B = this.player,
      E = Math.atan2(B.y - A.y, B.x - A.x),
      o = [];
    if (A.type === 8)
      for (const i of [-1, 1])
        o.push({ x: B.x - Math.sin(E) * i * 165, y: B.y + Math.cos(E) * i * 165, delay: 1.25, r: 78 });
    if (A.type === 9)
      for (let i = -1; i <= 1; i++)
        o.push({
          x: B.x + Math.cos(E) * 140 + Math.sin(E) * i * 155,
          y: B.y + Math.sin(E) * 140 - Math.cos(E) * i * 155,
          delay: 1.25,
          r: 67,
        });
    if (A.type === 10)
      for (let i = 0; i < 4; i++) {
        const I = E + Math.PI * 0.55 + i * Math.PI * 0.3;
        o.push({ x: B.x + Math.cos(I) * 225, y: B.y + Math.sin(I) * 225, delay: 1.3, r: 64 });
      }
    if (A.type === 11) for (const i of [-1, 1]) o.push({ x: B.x + i * 165, y: B.y + 130, delay: 1.3, r: 66 });
    if (
      (this.rules.patterns >= 2 && o.push({ x: B.x, y: B.y, delay: 1.85, r: 65 }), this.rules.patterns >= 3)
    )
      for (const i of [-1, 1])
        o.push({
          x: B.x + Math.cos(E) * i * 210,
          y: B.y + Math.sin(E) * i * 210,
          delay: 2.25 + i * 0.15,
          r: 70,
        });
    for (const i of o)
      this.zones.push({
        x: V(i.x, -920, 920),
        y: V(i.y, -640, 640),
        r: i.r,
        delay: i.delay,
        life: i.delay + 0.45,
        max: i.delay + 0.45,
        damage: A.damage * 0.7,
        enemy: !0,
        tick: 0,
        color: A.type === 10 ? "#c8b6e6" : "#efb38c",
        style: "difficulty",
      });
    return o.length;
  }
  spawnStress(A = 400) {
    for (let g = 0; g < A; g++) {
      const B = p(0, Math.PI * 2),
        E = p(100, 850);
      this.spawn(
        g % 8,
        V(this.player.x + Math.cos(B) * E, -920, 920),
        V(this.player.y + Math.sin(B) * E, -640, 640),
        !0,
      );
    }
  }
  closest(A, g, B, E) {
    let o,
      i = B * B;
    for (const I of this.grid.query(A, g, B, this.near)) {
      if (I.spawn > 0 || E?.has(I)) continue;
      const C = (I.x - A) ** 2 + (I.y - g) ** 2;
      C < i && ((i = C), (o = I));
    }
    return o;
  }
  particle(A, g, B, E = 5, o = 1, i = 0) {
    const I = this.save.data.settings.particles * (this.save.data.settings.reducedMotion ? 0.2 : 1);
    if (!(I <= 0 || this.fxCount > (this.mobile ? 200 : this.enemies.count > 300 ? 500 : 1100)))
      for (let C = 0; C < Math.ceil(E * I); C++) {
        const Q = this.particles.get();
        if ((this.fxCount++, !Q)) break;
        const a = p(0, Math.PI * 2),
          t = p(30, 170) * o;
        Object.assign(Q, {
          x: A,
          y: g,
          vx: Math.cos(a) * t,
          vy: Math.sin(a) * t - 20,
          life: p(0.2, 0.55),
          max: 0.55,
          size: p(2, 6) * o,
          color: B,
          kind: i,
        });
      }
  }
  number(A, g, B, E = !1, o = "#fff0c7") {
    if (!this.save.data.settings.numbers) return;
    let i = this.numbers.get();
    !i && E && (i = this.numbers.objects.find((I) => I.active && !I.crit)),
      i &&
        Object.assign(i, {
          x: A + p(-10, 10),
          y: g - 15,
          vx: p(-40, 40),
          vy: E ? -150 : -105,
          life: E ? 0.9 : 0.62,
          max: E ? 0.9 : 0.62,
          text: Math.ceil(B).toString(),
          crit: E,
          color: o,
        });
  }
  beam(A, g, B, E, o, i = 3, I = 0.12) {
    this.beams.length > 160 && this.beams.shift(),
      this.beams.push({ x: A, y: g, tx: B, ty: E, life: I, max: I, color: o, wide: i });
  }
  shoot(A, g, B, E, o, i, I = !1, C = "#ffe1a0", Q = 0, a = 4) {
    let t = this.projectiles.get();
    if (t)
      return (
        t.hit.clear(),
        Object.assign(t, {
          x: A,
          y: g,
          px: A,
          py: g,
          vx: Math.cos(B) * E,
          vy: Math.sin(B) * E,
          life: i,
          damage: o,
          poison: 0,
          returning: !1,
          age: 0,
          pierce: !1,
          ownerIndex: this.actorIndex,
          r: a,
          enemy: I,
          bounce: Q,
          color: C,
        }),
        t
      );
  }
  hit(A, g, B, E = 0, o = !0, i = !1, I = 0) {
    if (!A.active || A.spawn > 0 || this.procBudget <= 0) return;
    this.procBudget--;
    const C = o && Math.random() < this.stats.crit,
      Q = g * (C ? 2 : 1) * (A.type === 7 && A.elite === 3 ? 0.65 : 1);
    (A.hp -= Q), (A.flash = 0.1);
    const a = (E + (o ? 35 : 0)) * (C ? 1.55 : 1) * (A.type >= 8 ? 0.15 : A.type === 7 ? 0.65 : 1);
    (A.vx += Math.cos(B) * a),
      (A.vy += Math.sin(B) * a),
      C &&
        ((this.shake = Math.max(this.shake, 2.6)),
        (this.heavyStop = Math.max(this.heavyStop, i ? 0.045 : 0.03)));
    const t = iB(A);
    (o || C) &&
      this.fx.impact(
        A.x - Math.cos(B) * A.r * 0.6,
        A.y - 8 - Math.sin(B) * A.r * 0.4,
        B,
        t,
        z[A.type].color,
        C,
        i ? 1.3 : 1,
      ),
      (this.runDamage += Q),
      this.number(A.x, A.y, Q, C, C ? "#ffcf86" : Q >= 100 ? "#c7e6ff" : o ? "#f6eddb" : "#f4a88f"),
      this.particle(A.x, A.y, C ? "#ffdc76" : z[A.type].color, C ? 6 : 2, 0.65),
      o &&
        (this.audio.sound(C ? "crit" : "hit_" + CB[t], A.type >= 8 ? 0.85 : 1, 1, this.pan(A.x)),
        this.stats.lifesteal && this.heal(Math.min(4, Q * this.stats.lifesteal)),
        this.stats.bleed > 0 &&
          ((A.bleed = Math.min(this.stats.bleed * 5, A.bleed + this.stats.bleed)),
          (A.bleedTime = 3),
          (A.bleedOwner = this.actorIndex))),
      i &&
        ((this.shake = Math.max(this.shake, C ? 7 : 4)),
        (this.heavyStop = Math.max(this.heavyStop, C ? 0.05 : 0.03))),
      A.hp <= 0 && this.kill(A, I);
  }
  kill(A, g = 0) {
    if (!A.active) return;
    if (
      ((A.active = !1),
      this.kills++,
      (this.killStreak = this.streakTime > 0 ? this.killStreak + 1 : 1),
      (this.streakTime = 2.6),
      (this.maxKillStreak = Math.max(this.maxKillStreak, this.killStreak)),
      this.killStreak % 20 === 0 &&
        ((this.shake = Math.max(this.shake, 4)), this.audio.sound("crit", 1.25, 0.6)),
      A.foe >= 0 && $[A.foe].attack === "explode")
    )
      this.foeBlast(A, !1);
    else if (this.save.data.settings.particles > 0 && this.deaths.count < (this.mobile ? 16 : 36)) {
      const o = this.deaths.get();
      o &&
        Object.assign(o, {
          x: A.x,
          y: A.y,
          type: A.type,
          elite: A.elite,
          foe: A.foe,
          face: A.face,
          life: A.type >= 8 ? 1.5 : 0.45,
          max: A.type >= 8 ? 1.5 : 0.45,
          angle: Math.atan2(A.vy, A.vx),
        });
    }
    if (
      (A.type === 7 &&
        this.wave >= 4 &&
        this.wave - this.lastCrateWave >= 4 &&
        Math.random() < 0.12 &&
        ((this.lastCrateWave = this.wave), this.drop(A.x, A.y, 1, 4, !0)),
      A.poisonTime > 0 && A.poisonGen < 2)
    ) {
      const o = A.poison,
        i = A.poisonGen + 1,
        I = this.grid
          .query(A.x, A.y, 155, [])
          .filter((C) => C.active && C !== A && H(C, A) < 155)
          .slice(0, 2);
      for (const C of I)
        (C.poison = Math.max(C.poison, o * 0.8)),
          (C.poisonTime = 4),
          (C.poisonGen = i),
          (C.poisonOwner = A.poisonOwner ?? this.actorIndex),
          this.beam(A.x, A.y, C.x, C.y, "#bbdf8e", 2, 0.2);
    }
    this.particle(
      A.x,
      A.y,
      z[A.type].color,
      A.type >= 8 ? 70 : A.type === 7 ? 24 : 8,
      A.type >= 7 ? 1.7 : 1.05,
      1,
    ),
      this.particle(A.x, A.y, "#f4dbaf", 4, 0.6);
    const B = iB(A),
      E = A.type >= 7;
    if (
      (B === 1
        ? (this.fx.sparks(A.x, A.y - 10, -Math.PI / 2, Math.PI, E ? 16 : 6, E ? 460 : 300, "#ffd896", 0.4),
          this.fx.chips(A.x, A.y, E ? 12 : 4, "#4d4743", E ? 1.3 : 0.9, E ? 6 : 4),
          this.fx.smoke(A.x, A.y - 6, E ? 4 : 1, E ? 22 : 12, "#4a4442", "#e8b98a", 0.9, A.r))
        : B === 2
          ? (this.fx.chips(A.x, A.y, E ? 16 : 6, "#a39a91", E ? 1.3 : 0.9, E ? 6 : 4),
            this.fx.smoke(A.x, A.y, E ? 5 : 2, E ? 24 : 12, "#9a9188", "#f0e4d0", 0.9, A.r))
          : (this.fx.sheet("poof", A.x, A.y + A.r * 0.55, E ? 1 : 0.6, 0, 0),
            this.fx.splat(A.x, A.y - 6, z[A.type].color, E ? 1.1 : 0.7, 0.22),
            this.fx.chips(A.x, A.y, E ? 10 : 4, z[A.type].color, E ? 1.2 : 0.8, E ? 5 : 3.5)),
      E && this.fx.explosion(A.x, A.y, A.type >= 8 ? 120 : 60, A.type >= 8 ? "#ff8a3d" : "#ffb062"),
      A.type >= 8)
    ) {
      for (let o = 1; o <= 3; o++)
        this.fx.explosion(A.x + p(-1, 1) * A.r, A.y + p(-1, 1) * A.r * 0.6, 70, "#ffa04d");
      this.heavyStop = Math.max(this.heavyStop, 0.12);
    }
    if (
      (this.audio.sound(
        A.type >= 8 ? "boss_death" : A.type === 7 ? "elite" : "death_" + CB[B],
        1,
        1,
        this.pan(A.x),
      ),
      A.type >= 7 &&
        ((this.shake = A.type >= 8 ? 18 : 9),
        (this.pulse = A.type >= 8 ? 0.8 : 0.2)),
      A.type >= 8
        ? ((this.bossDead = !0),
          this.drop(A.x, A.y, 60, 0, !0),
          this.drop(A.x, A.y, 20, 1, !0),
          this.drop(A.x, A.y, 1, 3))
        : (this.drop(A.x, A.y, A.foe >= 0 ? $[A.foe].xp : z[A.type].xp, 0),
          Math.random() < 0.88 && this.drop(A.x + p(-12, 12), A.y, 1 + (A.type === 7 ? 12 : 0), 1),
          Math.random() < 0.007 * (1 + this.stats.luck)
            ? this.drop(A.x, A.y, 1, 2)
            : Math.random() < 0.018 * (1 + this.stats.luck) && this.drop(A.x, A.y, 8, 3)),
      A.type === 5)
    )
      for (let o = 0; o < 2; o++) {
        const i = p(0, Math.PI * 2);
        let I = A.x + Math.cos(i) * 30,
          C = A.y + Math.sin(i) * 30;
        if (Math.hypot(I - this.player.x, C - this.player.y) < 70) {
          const a = Math.atan2(C - this.player.y, I - this.player.x);
          (I = this.player.x + Math.cos(a) * 75), (C = this.player.y + Math.sin(a) * 75);
        }
        const Q = this.spawn(0, I, C, !1, -1);
        Q && ((Q.r = 12), (Q.hp = Q.maxHp *= 0.5), (Q.speed *= 1.2));
      }
    if (A.burn > 0 && this.items.ember && g < 2) {
      this.zones.push({
        x: A.x,
        y: A.y,
        r: 65,
        life: 0.3,
        max: 0.3,
        delay: 0,
        damage: 0,
        enemy: !1,
        tick: 1,
        color: "#ffaf69",
      });
      const o = this.enemies.objects.filter((i) => i.active && H(i, A) < 90);
      for (const i of o)
        (i.burn = 2),
          (i.burnOwner = this.actorIndex),
          (i.burnDamage = Math.max(i.burnDamage, 8 * this.stats.burn)),
          this.hit(i, 10 * this.stats.burn * this.damageScale(), 0, 0, !1, !1, g + 1);
    }
  }
  get scrapBudget() {
    return this.rules.scrapBase + this.wave * this.rules.scrapPerWave;
  }
  get xpBudget() {
    return this.rules.xpBase + this.wave * this.rules.xpPerWave;
  }
  drop(A, g, B, E, o = !1) {
    if (!o && E === 1) {
      if (((B = Math.min(B, this.scrapBudget - this.scrapDropped)), B <= 0)) return;
      this.scrapDropped += B;
    }
    if (!o && E === 0) {
      if (((B = Math.min(B, this.xpBudget - this.xpDropped)), B <= 0)) return;
      this.xpDropped += B;
    }
    let i = this.loot.get();
    if (!i) {
      const I = this.loot.objects.find((C) => C.active && C.kind === E);
      I && (I.value += B);
      return;
    }
    return (
      Object.assign(i, {
        x: A,
        y: g,
        vx: p(-95, 95),
        vy: p(-95, 95),
        z: p(12, 22),
        vz: p(50, 100),
        value: B,
        kind: E,
        age: 0,
        magnet: !1,
        trail: 0,
      }),
      i
    );
  }
  get dashMax() {
    return Math.min(3, 1 + (this.items.phase || 0));
  }
  get dashCooldown() {
    return 2.2 / (1 + this.stats.dash);
  }
  get abilityCooldown() {
    return CA[this.character].cooldown / Math.sqrt(this.stats.ability);
  }
  dash() {
    if (this.phase !== "combat" || this.player.hp <= 0 || this.dashCharges <= 0 || this.dashTime > 0)
      return !1;
    let A = this.input.x,
      g = this.input.y;
    Math.hypot(A, g) < 0.1 && ((A = this.player.face || 1), (g = 0));
    const B = Math.max(0.01, Math.hypot(A, g));
    return (
      (this.dashX = A / B),
      (this.dashY = g / B),
      this.dashCharges--,
      (this.dashTime = this.dashDur = 0.17),
      (this.dashLand = 0),
      (this.ghostTimer = 0),
      (this.player.invuln = Math.max(this.player.invuln, 0.24)),
      this.dashRecharge <= 0 && (this.dashRecharge = this.dashCooldown),
      this.audio.sound("dash_" + this.character),
      Ui(this.fx, this.character, this.dashCtx()),
      !0
    );
  }
  finishDash() {
    this.dashLand = 1;
    const A = this.player;
    if ((Yi(this.fx, this.character, this.dashCtx()), this.character === 0 || this.character === 2)) {
      const g = this.character === 0 ? 74 : 96,
        B = A.x + (this.character === 0 ? this.dashX * 26 : 0),
        E = A.y + (this.character === 0 ? this.dashY * 26 : 0);
      for (const o of this.grid.query(B, E, g + this.maxEnemyRadius, [])) {
        if (!o.active || o.spawn > 0 || o.type >= 8 || Math.hypot(o.x - B, o.y - E) > g + o.r) continue;
        const I = Math.atan2(o.y - E, o.x - B),
          C = (this.character === 0 ? 300 : 230) * (o.type === 7 ? 0.5 : 1);
        (o.vx += Math.cos(I) * C), (o.vy += Math.sin(I) * C);
      }
      this.shake = Math.max(this.shake, this.character === 2 ? 5 : 2.5);
    }
  }
  ability() {
    return this.phase !== "combat" || this.player.hp <= 0 || this.abilityCd > 0
      ? !1
      : ((this.abilityCd = this.abilityCooldown),
        (this.abilityFlash = 0.55),
        (this.procBudget = 90),
        hi(this, this.character),
        !0);
  }
  weaponSlot(A, g = 0) {
    const B = this.weapons.filter((C) => C.id !== "turret" && C.id !== "summon"),
      E = Math.max(0, B.indexOf(A)),
      o = Math.max(1, B.length),
      I = (o === 3 || o === 5 ? -Math.PI / 2 : o === 4 ? Math.PI / 4 : 0) + (E * Math.PI * 2) / o;
    return { x: this.player.x + Math.cos(I) * 60, y: this.player.y - 12 + Math.sin(I) * 82, a: I };
  }
  weaponMuzzle(A, g = 0) {
    const B = this.weaponPosition(A, g),
      E = Fi(A.id, A.angle, A.kick, void 0, void 0, ig(A));
    return { x: B.x + E.x, y: B.y + E.y };
  }
  weaponPosition(A, g) {
    const B = this.weaponSlot(A, g),
      o =
        A.id === "axe"
          ? Math.sin(Math.PI * (A.id === "axe" && A.swing > 0 ? 1 - A.swing / y.swing : 1 - A.kick)) * 8
          : 0;
    return {
      x:
        B.x +
        Math.cos(A.angle) * Math.max(0, o) -
        Math.cos(A.angle) * (["saw", "boomerang"].includes(A.id) ? 0 : A.kick * 2.5),
      y:
        B.y +
        Math.sin(A.angle) * Math.max(0, o) -
        Math.sin(A.angle) * (["saw", "boomerang"].includes(A.id) ? 0 : A.kick * 2.5),
      a: B.a,
    };
  }
  updateWeaponAim(A, g, B) {
    if (A.id === "turret" || A.swing > 0) return;
    const E = this.weaponSlot(A, g);
    j.find((i) => i.id === A.id),
      (A.aimTimer -= B),
      A.aimTimer <= 0 &&
        ((A.target = this.closest(E.x, E.y, this.weaponRange(A))), (A.aimTimer = 0.08 + g * 0.007));
    const o = this.save.data.settings.manual && this.input.aimActive;
    if (o || (A.target?.active && A.target.spawn <= 0)) {
      const i = o
        ? Math.atan2(this.input.aimY, this.input.aimX)
        : Math.atan2(A.target.y - E.y, A.target.x - E.x);
      A.angle += fA(i, A.angle) * Math.min(1, B * 20);
    }
    ig(A);
  }
  updateClimb(A) {
    const g = this.climbState;
    g.advance(A, this.wave);
    for (const I of g.fresh)
      this.fx.chips(I.x, I.y, 10, I.kind === 0 ? "#8a6a48" : "#4f5f70", 1.3, 5),
        this.fx.smoke(I.x, I.y - I.h * 0.4, 5, 20, "#5d544e", "#e8c79a", 1, I.r * 1.5, 0, -18),
        this.fx.decal(aA.Crack, I.x, I.y + 4, I.r * 3, p(0, 6), 3),
        this.audio.sound("death_stone", 0.6, 0.8, this.pan(I.x));
    g.fresh.length && (this.shake = Math.max(this.shake, 3));
    const B = g.y - 660,
      E = g.y + 660;
    for (const I of this.coop ? this.coop.actors.map((C) => C.player) : [this.player])
      I.y < B && (I.y = B), I.y > E && (I.y = E);
    const o = g.y - 640,
      i = g.y + 640;
    this.loot.each((I) => {
      I.y < o && (I.y = o), I.y > i && (I.y = i);
    });
  }
  updateEnvironment(A) {
    if (((this.envTime -= A), !(this.envTime > 0))) {
      if (this.map === 0 || this.map === 1) {
        this.envTime = this.map === 0 ? 9 : 7;
        const g = [
          [-400, -260],
          [400, -260],
          [-400, 260],
          [400, 260],
        ];
        for (const [B, E] of g)
          this.zones.push({
            x: B,
            y: E,
            r: 93,
            life: 3,
            max: 3,
            delay: 1.2,
            damage: 9 + this.wave * 0.4,
            enemy: !0,
            tick: 0,
            color: "#f2ac74",
            style: "vent",
          });
        this.audio.sound("deploy", 0.7, 0.45);
      } else if (this.map === 2) {
        this.envTime = 10;
        const g = this.time * 0.4,
          B = V(this.player.x + Math.cos(g) * 160, -800, 800),
          E = V(this.player.y + Math.sin(g) * 160, -540, 540);
        this.zones.push({
          x: B,
          y: E,
          r: 115,
          life: 5,
          max: 5,
          delay: 0.5,
          damage: 0,
          enemy: !1,
          tick: 0,
          color: "#b9dec8",
          heal: !0,
          style: "flower",
        });
      } else if (this.map === 3) {
        this.envTime = 9;
        const g = this.time * 0.27;
        for (let B = 0; B < 3; B++)
          this.zones.push({
            x: V(this.player.x + Math.cos(g + B * 2.1) * 180, -780, 780),
            y: V(this.player.y + Math.sin(g + B * 2.1) * 180, -520, 520),
            r: 105,
            life: 5,
            max: 5,
            delay: 1,
            damage: 4,
            enemy: !0,
            tick: 2,
            color: "#ff3e52",
            style: "ice",
            chill: !0,
          });
      }
    }
  }
  attack(A, g) {
    const B = j.find((Y) => Y.id === A.id),
      E = ZA(A.tier),
      o = this.weaponRange(A),
      i = this.weaponSlot(A, g);
    let I = this.closest(i.x, i.y, this.weaponRange(A));
    if (B.kind === "turret") {
      if (this.turrets.some((Y) => Y.owner === A)) {
        A.cd = 0.1;
        return;
      }
      if (!this.turrets.some((Y) => Y.owner === A)) {
        this.turrets.push({
          x: this.player.x + Math.cos(g * 2) * 45,
          y: this.player.y + Math.sin(g * 2) * 45,
          life: A.mutation === "Wanderknecht" ? 24 : 18,
          hp: 90,
          maxHp: 90,
          broken: 0,
          cd: 0.1,
          tier: A.tier,
          angle: 0,
          owner: A,
          age: 0,
          deploy: 0.32,
          kick: 0,
        }),
          HA(this.turrets[this.turrets.length - 1], 26, this.map),
          this.audio.sound("deploy", 0.9);
        const Y = this.turrets[this.turrets.length - 1];
        this.fx.smoke(Y.x, Y.y + 10, 3, 12, "#8d8f96", "#e6eef2", 0.7, 20),
          this.fx.ring(Y.x, Y.y + 12, 8, 46, "#bfe9f2", 0.25, 3);
      }
      A.cd = Math.min(8, B.cooldown / this.stats.attackSpeed);
      return;
    }
    if (B.kind === "summon") {
      const Y = this.companions.filter((c) => c.owner === A).length;
      for (let c = Y; c < this.mothCount(A) && this.companions.length < 24; c++)
        this.companions.push({ x: i.x + p(-12, 12), y: i.y + 8, cd: 0.3, owner: A, angle: 0 });
      A.cd = 1;
      return;
    }
    if (A.id === "saw" || A.id === "boomerang") {
      this.launchBlades(A, g);
      return;
    }
    const C = this.save.data.settings.manual && this.input.aimActive;
    if (!I && !C) {
      A.cd = 0.08;
      return;
    }
    let Q = C ? Math.atan2(this.input.aimY, this.input.aimX) : Math.atan2(I.y - i.y, I.x - i.x);
    (A.angle = Q),
      (A.kick = 1),
      (A.swing = B.kind === "axe" ? y.swing : 0),
      (A.cd = B.cooldown / this.stats.attackSpeed);
    let a = B.damage * E * this.damageScale();
    const t = this.weaponPosition(A, g),
      h = t.x,
      s = t.y;
    !C && I && (Q = Math.atan2(I.y - s, I.x - h)), (A.angle = Q);
    const U = this.weaponMuzzle(A, g),
      M = U.x,
      r = U.y;
    if (B.kind === "poison") {
      const Y = this.shoot(M, r, Q, 510, a, o / 510, !1, B.color, 0, 6);
      Y && (Y.poison = 13 * E * this.stats.poison * this.damageScale()),
        this.audio.sound("poison", 1, 1, this.pan(M)),
        this.particle(M, r, B.color, 3, 0.5),
        this.fx.glow(M, r, 18, "#c9e68e", 0.08),
        this.fx.smoke(M, r, 1, 7, "#8a9a5c", "#e6f0b8", 0.45, 6, Math.cos(Q) * 50, Math.sin(Q) * 50);
    }
    if (B.kind === "laser") {
      const Y = Math.cos(Q),
        c = Math.sin(Q);
      this.beam(M, r, M + Y * o, r + c * o, B.color, 7, 0.22);
      for (const R of this.grid.query(this.player.x, this.player.y, o + this.maxEnemyRadius + 90, [])) {
        const G = R.x - M,
          n = R.y - r,
          D = G * Y + n * c;
        D > 0 && D < o + R.r && Math.abs(G * c - n * Y) < R.r + 8 && this.hit(R, a, Q, 40, !0);
      }
      this.audio.sound("laser", 1, 1, this.pan(M)),
        (this.shake = Math.max(this.shake, 2)),
        this.fx.star(M, r, Q, 30, "#9ce9ef", 0.08),
        this.fx.glow(M, r, 40, "#c8f6ff", 0.12);
      for (let R = 1; R <= 4; R++)
        this.fx.light(M + (Y * o * R) / 4.5, r + (c * o * R) / 4.5 + 16, 90, "#7fe3ff", 0.16);
      this.fx.sparks(M + Y * o, r + c * o, Q + Math.PI, 0.8, 5, 260, "#d8fbff", 0.25);
    }
    if ((B.kind === "fork" && this.forkShot(A, I, M, r, Q, a, o), B.kind === "frost")) {
      this.zones.push({
        x: M,
        y: r,
        r: o,
        life: 0.45,
        max: 0.45,
        delay: 0,
        damage: 0,
        enemy: !1,
        tick: 2,
        color: B.color,
        style: "pulse",
      });
      for (const Y of this.grid.query(M, r, o + this.maxEnemyRadius, []))
        Math.hypot(Y.x - M, Y.y - r) < o + Y.r && ((Y.slow = 2), this.hit(Y, a, Q, 60, !0));
      this.audio.sound("frost", 1, 1, this.pan(M)),
        this.fx.ring(M, r, 12, o, "#e2f2ff", 0.4, 3),
        this.fx.light(M, r + 10, o * 1.1, "#9cc9ff", 0.25),
        this.fx.twinkle(M, r, 8, "#eaf6ff", o * 0.5);
    }
    if (B.kind === "bullet" || B.kind === "shotgun") {
      let Y = B.kind === "shotgun" ? 4 : 1;
      (Y += Math.min(8, this.stats.projectiles)), A.mutation === "Dornsalve" && (Y += 2);
      for (let R = 0; R < Y; R++) {
        let G = (R - (Y - 1) / 2) * (B.kind === "shotgun" ? 0.14 : 0.07);
        this.shoot(
          M,
          r,
          Q + G,
          B.kind === "shotgun" ? 580 : 710,
          a,
          o / (B.kind === "shotgun" ? 580 : 710),
          !1,
          B.color,
          Math.min(5, this.stats.bounce + (A.mutation === "Irrläufer" ? 2 : 0)),
          B.kind === "shotgun" ? 4 : 4.5,
        );
      }
      this.particle(M + Math.cos(Q) * 16, r + Math.sin(Q) * 16, "#ffd887", 4, 0.6),
        this.audio.sound(B.kind === "shotgun" ? "shotgun" : "shot", 1, 1, this.pan(M)),
        (this.shake = Math.max(this.shake, B.kind === "shotgun" ? 2.3 : 0.6));
      const c = B.kind === "shotgun";
      this.fx.muzzle(M + Math.cos(Q) * 6, r + Math.sin(Q) * 6, Q, c ? "#ffb15c" : "#ffd27a", c ? 1.7 : 1),
        this.fx.casing(h, s, Q, c ? "#b8392f" : "#e2b35c"),
        c &&
          this.fx.smoke(
            M + Math.cos(Q) * 18,
            r + Math.sin(Q) * 18,
            2,
            11,
            "#6c6560",
            "#f2d2a0",
            0.8,
            10,
            Math.cos(Q) * 90,
            Math.sin(Q) * 90,
          );
    }
    if (B.kind === "axe") {
      const Y = o,
        c = this.grid.query(h, s, Y + this.maxEnemyRadius, []);
      let R = 0;
      for (const G of c) {
        const n = Math.atan2(G.y - s, G.x - h),
          D = Math.hypot(G.x - h, G.y - s);
        if (
          D < Y + G.r &&
          (A.mutation === "Blutmond" ||
            D <= G.r ||
            Math.abs(fA(n, Q)) < y.halfArc + Math.asin(Math.min(1, G.r / D)))
        ) {
          if (D > y.safeReach && PA(h, s, G.x, G.y, 0, this.map)) continue;
          this.hit(G, a, Q, 270 * this.stats.knockback, !0, !0),
            R < (this.enemies.count > 150 ? 2 : 6) &&
              (R++,
              this.fx.sparks(
                G.x,
                G.y - G.r * 0.5,
                n,
                0.9,
                this.enemies.count > 150 ? 2 : 4,
                260,
                "#fff4d8",
                0.22,
              )),
            A.mutation === "Schlächter" &&
              ((G.bleed = Math.max(G.bleed, 18 * E)), (G.bleedTime = 3), (G.bleedOwner = this.actorIndex));
        }
      }
      this.audio.sound("axe", 1, 0.96 + Math.min(0.12, (Y - y.base) / 1500), this.pan(h)),
        R && (this.shake = Math.max(this.shake, 1.2 + Math.min(2, Y / 170))),
        this.fx.settings.reduced ||
          this.fx.ring(
            h + Math.cos(Q) * Y * 0.5,
            s + Math.sin(Q) * Y * 0.5,
            Y * 0.3,
            Y * 0.55,
            "#f4f1e655",
            0.16,
            2,
          );
    }
    if (B.kind === "lightning") {
      if (!I) return;
      let Y = M,
        c = r;
      const R = new Set(),
        G = Math.min(12, 3 + this.stats.chain);
      for (let n = 0; n < G && I; n++)
        R.add(I),
          this.beam(Y, c, I.x, I.y, "#bcacff", 4),
          n < 3 && this.fx.sheet("zap", I.x, I.y - 8, 0.55, Math.atan2(I.y - c, I.x - Y), n === 0 ? 0.6 : 0),
          this.fx.glow(I.x, I.y - 8, 30, "#d7ccff", 0.1),
          this.fx.light(I.x, I.y + 10, 80, "#a493ff", 0.14),
          this.fx.sparks(I.x, I.y - 8, 0, Math.PI, 3, 240, "#e8e2ff", 0.2),
          this.hit(I, a * Math.pow(0.75, n), Q, 15, !0),
          (Y = I.x),
          (c = I.y),
          (I = this.closest(Y, c, 180 * this.stats.range, R));
      this.audio.sound("lightning", 1, 1, this.pan(M)), this.fx.star(M, r, Q, 18, "#cfc4ff", 0.06);
    }
    if (B.kind === "flame") {
      const Y = this.grid.query(M, r, o + 25, []);
      for (const c of Y)
        Math.hypot(c.x - h, c.y - s) < o &&
          Math.abs(fA(Math.atan2(c.y - s, c.x - h), Q)) < 0.42 &&
          (this.hit(c, a, Q, 8, !0),
          (c.burn = 2),
          (c.burnOwner = this.actorIndex),
          (c.burnDamage = 9 * E * this.stats.burn * this.damageScale()));
      this.zones.length < 180 &&
        this.zones.push({
          x: M + Math.cos(Q) * p(o * 0.32, o * 0.71),
          y: r + Math.sin(Q) * p(o * 0.32, o * 0.71),
          r: p(19, 29),
          life: 1.6,
          max: 1.6,
          delay: 0,
          ownerIndex: this.actorIndex,
          damage: a * this.stats.burn * 2,
          enemy: !1,
          tick: 0.2,
          color: "#ee9857",
        }),
        this.beam(M, r, M + Math.cos(Q) * o * 0.76, r + Math.sin(Q) * o * 0.76, "#ffb46b", 16, 0.09),
        this.particle(M + Math.cos(Q) * 80, r + Math.sin(Q) * 80, "#ffc577", 3, 0.7),
        this.audio.sound("flame", 1, 1, this.pan(M)),
        this.fx.glow(M + Math.cos(Q) * 40, r + Math.sin(Q) * 40, 40, "#ffad5c", 0.1),
        this.fx.light(M + Math.cos(Q) * 70, r + Math.sin(Q) * 70 + 14, 110, "#ff8a3a", 0.12),
        this.fx.embers(M + Math.cos(Q) * o * 0.5, r + Math.sin(Q) * o * 0.5, 2, "#ffb066", 24),
        this.fx.smoke(
          M + Math.cos(Q) * o * 0.7,
          r + Math.sin(Q) * o * 0.7,
          1,
          12,
          "#4e4542",
          "#f0a46a",
          0.8,
          14,
          Math.cos(Q) * 40,
          Math.sin(Q) * 40 - 20,
        );
    }
  }
  launchBlades(A, g) {
    const B = j.find((C) => C.id === A.id),
      E = this.weaponSlot(A, g),
      o = new Set(),
      i = new Set();
    this.blades.each((C) => {
      C.owner === A && C.target && o.add(C.target);
    });
    let I = 0;
    for (let C = this.bladesOut(A); C < this.bladeCount(A); C++) {
      const Q = this.closest(E.x, E.y, this.weaponRange(A), o);
      if (!Q) break;
      const a = this.blades.get();
      if (!a) break;
      o.add(Q),
        Object.assign(a, {
          active: !0,
          x: E.x,
          y: E.y,
          px: E.x,
          py: E.y,
          vx: 0,
          vy: 0,
          age: 0,
          traveled: 0,
          owner: A,
          ownerIndex: this.actorIndex,
          target: Q,
          returning: !1,
          budget: A.tier + Math.min(3, this.stats.bounce),
          damage: B.damage * ZA(A.tier) * this.damageScale(),
          sharedHits: i,
          curve: C % 2 ? -1 : 1,
          trailHead: 0,
        }),
        a.hits.clear(),
        a.trailX.fill(E.x),
        a.trailY.fill(E.y),
        I++;
    }
    (A.cd = I ? B.cooldown / this.stats.attackSpeed : 0.12),
      I &&
        ((A.kick = 1),
        this.audio.sound(A.id === "saw" ? "saw_throw" : "crescent", 1, 1, this.pan(E.x)),
        this.fx.glow(E.x, E.y, 22, A.id === "saw" ? "#ffd38b" : "#cdbaff", 0.08));
  }
  updateBlades(A) {
    this.blades.each((g) =>
      this.withActor(g.ownerIndex, () => {
        const B = g.owner;
        if (!B || !this.weapons.includes(B)) {
          g.active = !1;
          return;
        }
        const E = this.weaponSlot(B),
          o = this.weaponRange(B);
        (g.age += A),
          (g.age > 4 ||
            Math.hypot(g.x - this.player.x, g.y - this.player.y) > o * 1.12 ||
            g.traveled > o * 2.2) &&
            (g.returning = !0),
          !g.returning &&
            (!g.target?.active || g.sharedHits.has(g.target)) &&
            ((g.target = this.closest(g.x, g.y, o, g.sharedHits)), g.target || (g.returning = !0));
        const i = g.returning ? E : g.target,
          I = Math.hypot(i.x - g.x, i.y - g.y),
          C = g.returning ? 1050 : 780;
        if (g.returning && I < C * A + 13) {
          (g.active = !1),
            this.particle(E.x, E.y, B.id === "saw" ? "#edc382" : "#b7c9ff", 3, 0.25),
            B.id === "saw" && this.audio.sound("saw_catch", 1, 1, this.pan(E.x)),
            this.fx.twinkle(E.x, E.y, 2, B.id === "saw" ? "#ffe0a0" : "#e0d2ff", 8);
          return;
        }
        let Q = Math.atan2(i.y - g.y, i.x - g.x);
        if (
          (B.id === "boomerang" &&
            (Q += Math.sin(Math.min(1, I / o) * Math.PI) * 0.55 * g.curve * (g.returning ? -1 : 1)),
          (g.px = g.x),
          (g.py = g.y),
          (g.vx = Math.cos(Q) * C),
          (g.vy = Math.sin(Q) * C),
          (g.x += g.vx * A),
          (g.y += g.vy * A),
          (g.traveled += C * A),
          (g.trailHead = (g.trailHead + 1) % 8),
          (g.trailX[g.trailHead] = g.x),
          (g.trailY[g.trailHead] = g.y),
          B.id === "boomerang"
            ? Math.random() < 0.8 * this.fx.density &&
              this.fx.trail(g.x, g.y, Math.random() < 0.5 ? "#d9c6ff" : "#fff1d2", 2.6, 0.4, 4)
            : Math.random() < 0.25 * this.fx.density &&
              this.fx.sparks(g.x, g.y, Math.atan2(-g.vy, -g.vx), 0.6, 1, 160, "#ffd890", 0.16),
          g.returning)
        )
          return;
        if (PA(g.px, g.py, g.x, g.y, 8, this.map)) {
          g.returning = !0;
          return;
        }
        const a = g.x - g.px,
          t = g.y - g.py,
          h = a * a + t * t;
        for (const s of this.grid.query(
          (g.x + g.px) / 2,
          (g.y + g.py) / 2,
          Math.sqrt(h) / 2 + this.maxEnemyRadius + 16,
          [],
        )) {
          if (!s.active || s.spawn > 0 || g.sharedHits.has(s)) continue;
          const U = V(((s.x - g.px) * a + (s.y - g.py) * t) / Math.max(0.01, h), 0, 1);
          if (!(Math.hypot(s.x - g.px - a * U, s.y - g.py - t * U) > s.r + 15)) {
            g.hits.add(s),
              g.sharedHits.add(s),
              g.budget--,
              this.hit(s, g.damage, Q, 125 * this.stats.knockback, !0),
              this.particle(s.x, s.y, B.id === "saw" ? "#ffd38b" : "#b6caff", 9, 0.75),
              B.id === "saw"
                ? (this.fx.sparks(g.x, g.y, Q + Math.PI * 0.5, 0.9, 10, 420, "#ffe0a0", 0.32),
                  this.fx.glow(g.x, g.y, 30, "#ffcf7a", 0.08),
                  this.audio.sound("saw_hit", 1, 1, this.pan(g.x)))
                : (this.fx.ring(g.x, g.y, 6, 34, "#d9c6ff", 0.2, 3),
                  this.fx.twinkle(g.x, g.y, 4, "#efe4ff", 14)),
              (this.shake = Math.max(this.shake, 1.5)),
              g.budget <= 0
                ? (g.returning = !0)
                : ((g.target = this.closest(g.x, g.y, o * 0.72, g.sharedHits)),
                  g.target || (g.returning = !0));
            break;
          }
        }
      }),
    );
  }
  updateActorMotion(A) {
    (this.player.invuln = Math.max(0, this.player.invuln - A)),
      (this.player.flash = Math.max(0, this.player.flash - A));
    const g = this.player;
    this.fxCount = this.particles.count;
    const B = this.dashTime > 0;
    (this.dashTime = Math.max(0, this.dashTime - A)),
      (this.dashLand = Math.max(0, this.dashLand - A / 0.28)),
      (this.abilityCd = Math.max(0, this.abilityCd - A)),
      (this.abilityFlash = Math.max(0, this.abilityFlash - A)),
      (this.overdrive = Math.max(0, this.overdrive - A)),
      this.dashCharges < this.dashMax &&
        ((this.dashRecharge -= A),
        this.dashRecharge <= 0 &&
          (this.dashCharges++,
          (this.dashRecharge = this.dashCharges < this.dashMax ? this.dashCooldown : 0)));
    const E = this.zones.some((Q) => Q.chill && Q.delay <= 0 && H(Q, this.player) < Q.r),
      o = 300 * this.stats.speed * (E ? 0.75 : 1);
    if (
      ((g.vx = this.input.x * o + (g.pullX || 0)),
      (g.vy = this.input.y * o + (g.pullY || 0)),
      (g.pullX = 0),
      (g.pullY = 0),
      this.dashTime > 0)
    ) {
      (g.vx = this.dashX * 1050), (g.vy = this.dashY * 1050);
      const Q = this.dashStyle;
      ri(this.fx, this.character, this.dashCtx(A), 1 - this.dashTime / this.dashDur),
        (this.ghostTimer -= A),
        Q.ghost &&
          this.ghostTimer <= 0 &&
          ((this.ghostTimer = Q.ghostEvery), this.pushGhost(Q.ghostAlpha, Q.ghost));
    } else B && this.finishDash();
    const i = g.x,
      I = g.y;
    if (
      ((g.face = rg(g.vx, g.face)),
      (g.x = V(g.x + g.vx * A, -940, 940)),
      (g.y = V(g.y + g.vy * A, this.yMid - 660, this.yMid + 660)),
      this.coop)
    ) {
      const Q = this.coop.actors[1 - this.coop.current].player;
      Q !== g &&
        Q.hp > 0 &&
        g.hp > 0 &&
        ((g.x = V(g.x, Q.x - XA.x, Q.x + XA.x)), (g.y = V(g.y, Q.y - XA.y, Q.y + XA.y)));
    }
    Math.hypot(g.vx, g.vy) > 1 && HA(g, 14.5, this.map);
    const C = Math.hypot(g.x - i, g.y - I);
    this.dashTime <= 0 && (g.walk = Yg(g.walk, C)),
      (g.vx = A > 0 ? (g.x - i) / A : 0),
      (g.vy = A > 0 ? (g.y - I) / A : 0),
      (g.moveBlend += ((C > 0.01 ? 1 : 0) - g.moveBlend) * Math.min(1, A * 22)),
      g.moveBlend < 0.01 && (g.moveBlend = 0),
      g.moveBlend > 0.99 && (g.moveBlend = 1),
      this.heal(this.stats.regen * A),
      this.god && (g.hp = this.stats.hp);
  }
  updateActorWeapons(A) {
    const g = this.player;
    for (let B = 0; B < this.weapons.length; B++) {
      const E = this.weapons[B];
      this.updateWeaponAim(E, B, A),
        (E.cd -= A),
        (E.kick = Math.max(0, E.kick - A * 7)),
        (E.swing = Math.max(0, E.swing - A)),
        (E.glow = Math.max(0, E.glow - A)),
        E.cd <= 0 && this.attack(E, B);
    }
    for (const B of this.turrets) {
      (B.life -= A),
        (B.age += A),
        (B.deploy = Math.max(0, B.deploy - A)),
        (B.kick = Math.max(0, B.kick - A * 7)),
        (B.cd -= A);
      const E = B.owner.mutation === "Belagerer";
      if (B.broken > 0) {
        B.broken -= A;
        continue;
      }
      for (const o of this.grid.query(B.x, B.y, 110, []))
        o.spawn <= 0 && H(o, B) < o.r + 27 && (B.hp -= o.damage * A * 0.45);
      if (B.life <= 0 || B.hp <= 0) {
        (B.life = 0),
          (B.broken = 0.9),
          (B.owner.cd = 3.5),
          (B.kick = 0),
          this.particle(B.x, B.y, "#c8ad7f", 18, 1.2, 1),
          this.fx.explosion(B.x, B.y - 10, 44, "#ffb468"),
          this.fx.chips(B.x, B.y, 8, "#5d6670", 1.1, 5),
          this.audio.sound("turret_break", 1, 1, this.pan(B.x)),
          (this.shake = Math.max(this.shake, 2));
        continue;
      }
      if (B.cd <= 0 && B.deploy <= 0) {
        const o = this.closest(B.x, B.y, (E ? 550 : 450) * this.stats.range);
        if (o) {
          B.angle = Math.atan2(o.y - B.y, o.x - B.x);
          const i =
            15 *
            (1 + (B.tier - 1) * 0.7) *
            this.damageScale() *
            this.stats.engineering *
            (E ? 2 : 1) *
            (this.overdrive > 0 ? 1.5 : 1);
          B.kick = 1;
          const I = Gi(B);
          this.shoot(
            I.x,
            I.y,
            Math.atan2(o.y - I.y, o.x - I.x),
            720,
            i,
            (E ? 0.8 : 0.64) * this.stats.range,
            !1,
            "#b6e6df",
          ),
            (B.kick = 1);
          const C = Math.atan2(o.y - I.y, o.x - I.x);
          this.fx.muzzle(I.x, I.y, C, "#9fe8ff", E ? 1.5 : 0.8),
            this.fx.casing(B.x, B.y - 14, C),
            (B.cd = (E ? 0.78 : 0.34) / this.stats.attackSpeed / (this.overdrive > 0 ? 1.4 : 1)),
            this.audio.sound(E ? "shotgun" : "turret", E ? 1.15 : 1, E ? 0.6 : 1, this.pan(B.x));
        }
      }
      this.items.repair && H(B, g) < 110 && this.heal(2 * this.items.repair * A);
    }
    (this.turrets = this.turrets.filter(
      (B) => (B.life > 0 || B.broken > 0) && this.weapons.includes(B.owner),
    )),
      (this.companions = this.companions.filter((B) => this.weapons.includes(B.owner)));
    for (let B = 0; B < this.companions.length; B++) {
      const E = this.companions[B];
      E.cd -= A;
      const o = this.time * 1.5 + (B * Math.PI * 2) / this.companions.length,
        i = g.x + Math.cos(o) * 80 * this.stats.range,
        I = g.y + Math.sin(o) * 55 * this.stats.range - 12;
      !E.target && E.cd <= 0 && (E.target = this.closest(E.x, E.y, 380 * this.stats.range)),
        E.target && (!E.target.active || H(E.target, g) > 380 * this.stats.range) && (E.target = void 0);
      const C = E.target?.x ?? i,
        Q = E.target?.y ?? I,
        a = C - E.x,
        t = Q - E.y,
        h = Math.hypot(a, t);
      E.angle = Math.atan2(t, a);
      const s = E.target ? 750 : 330;
      (E.x += (a / Math.max(1, h)) * Math.min(h, s * A)),
        (E.y += (t / Math.max(1, h)) * Math.min(h, s * A)),
        Math.random() < (E.target ? 0.55 : 0.18) * this.fx.density &&
          this.fx.trail(E.x, E.y, B % 2 ? "#ffe2a0" : "#f2c6ff"),
        E.target &&
          h < 28 &&
          (this.hit(E.target, 15 * (1 + (E.owner.tier - 1) * 0.7) * this.damageScale(), E.angle, 40, !0),
          this.particle(E.x, E.y, "#e6ccf6", 5, 0.6),
          this.fx.glow(E.x, E.y, 26, "#f8d995", 0.12),
          this.fx.twinkle(E.x, E.y, 3, "#ffe7a8", 10),
          this.audio.sound("moth", 1, 1, this.pan(E.x)),
          (E.target = void 0),
          (E.cd = 0.85 / this.stats.attackSpeed));
    }
  }
  update(A) {
    (this.time += A),
      this.showcase && (this.showcase.life = Math.max(0, this.showcase.life - A)),
      this.deaths.each((C) => {
        (C.life -= A), C.life <= 0 && (C.active = !1);
      }),
      (this.shake *= Math.exp(-A * 16)),
      (this.pulse = Math.max(0, this.pulse - A)),
      (this.bannerTime = Math.max(0, this.bannerTime - A)),
      this.particles.each((C) => {
        (C.life -= A),
          C.life <= 0 && (C.active = !1),
          (C.x += C.vx * A),
          (C.y += C.vy * A),
          (C.vx *= Math.exp(-A * 5)),
          (C.vy = C.vy * Math.exp(-A * 5) + 40 * A);
      });
    const g = this.save.data.settings;
    this.fx.settings = {
      particles: g.particles,
      flashes: g.reducedMotion ? 0 : g.flashes,
      reduced: g.reducedMotion,
      mobile: this.mobile,
      enemies: this.enemies.count,
      quality: g.quality,
      views: this.coop ? 2 : 1,
    };
    const B = A * (this.showcase && this.showcase.life > 0 ? 0.32 : 1);
    this.fx.update(B);
    for (const C of this.ghosts) C.life -= B;
    if (
      (this.ghosts.length &&
        this.ghosts[0].life <= 0 &&
        (this.ghosts = this.ghosts.filter((C) => C.life > 0)),
      this.numbers.each((C) => {
        (C.life -= A), (C.vy = (C.vy ?? -35) + 300 * A), (C.y += Math.min(C.vy, 25) * A), (C.x += (C.vx ?? 0) * A), (C.vx = (C.vx ?? 0) * (1 - Math.min(1, A * 3))), C.life <= 0 && (C.active = !1);
      }),
      (this.beams = this.beams.filter((C) => (C.life -= A) > 0)),
      this.forkBolts.length && (this.forkBolts = this.forkBolts.filter((C) => (C.life -= A) > 0)),
      this.forkHits.length && (this.forkHits = this.forkHits.filter((C) => (C.life -= A) > 0)),
      this.phase === "hub" && this.updateHub(A),
      this.phase !== "combat")
    )
      return;
    if (this.coop && (!this.showcase || this.showcase.life <= 0)) {
      this.coop.save();
      const C = this.coop.actors.findIndex((Q) => !!Q.pendingShowcase);
      C >= 0 &&
        this.withActor(C, () => {
          const Q = this.pendingShowcase;
          (this.showcase = { ...Q, life: 1.85, max: 1.85, serial: ++this.purchaseSerial }),
            (this.pendingShowcase = void 0),
            this.acquisitionShockwave(Q.tier),
            this.audio.sound(Q.upgraded ? "upgrade" : "acquire"),
            this.onChange();
        });
    }
    this.coop && this.coop.activate(0), (this.procBudget = 90);
    const E = A * (this.showcase && this.showcase.life > 0 ? 0.32 : 1);
    (this.streakTime = Math.max(0, this.streakTime - A)),
      this.streakTime || (this.killStreak = 0),
      (this.runTime += E),
      (this.waveTime += E);
    const o = this.player;
    if (
      (this.forActors(() => this.updateActorMotion(A)),
      (this.spawnTimer -= E),
      this.spawnTimer <= 0 && this.waveTime < this.waveLength - 2 && this.enemies.count < 850)
    ) {
      const C = Math.min(7, 1 + Math.floor(this.wave / 2)),
        Q = Math.min(9, 1 + Math.floor(this.wave / 3));
      for (let a = 0; a < Q; a++) {
        let t = Math.random() < 0.42 ? 0 : Math.floor(p(0, C));
        this.wave >= 5 && Math.random() < this.eliteChance() && (t = 7), this.spawn(t);
      }
      this.spawnTimer =
        Math.max(0.2, 0.9 - this.wave * 0.023) / (this.danger ? 1.35 : 1) / this.enemyFactor("density");
    }
    if (
      ((this.formationTimer -= E),
      this.wave >= 3 &&
        this.formationTimer <= 0 &&
        this.waveTime < this.waveLength - 4 &&
        this.enemies.count < 820 &&
        (this.spawnFormation(), (this.formationTimer = this.rules.formationInterval)),
      this.bossWave && !this.bossSpawned && this.waveTime > 3)
    ) {
      const C = this.spawn(this.climb ? 8 + ((Math.floor(this.wave / 10) - 1) % 4) : IA[this.map].boss);
      (this.bossSpawned = !0),
        this.audio.loadBank?.("boss"),
        this.audio.sound("boss_roar", 0.9, 1, C ? this.pan(C.x) : 0),
        C && (this.fx.explosion(C.x, C.y, 110, "#ff6a4a"), this.fx.decal(aA.Crack, C.x, C.y + 20, 220, 0, 6)),
        (this.shake = Math.max(this.shake, 10));
    }
    this.grid.clear(),
      this.enemies.each((C) => this.grid.add(C)),
      this.climbState.active ? this.updateClimb(E) : this.updateEnvironment(E);
    const i = this.heavyStop > 0 ? 0.3 : 1;
    (this.heavyStop = Math.max(0, this.heavyStop - A)), this.enemies.each((C) => this.updateEnemy(C, E * i));
    for (const C of this.foeBursts) C.t += E;
    this.foeBursts.length &&
      this.foeBursts[0].t > this.foeBursts[0].dur &&
      (this.foeBursts = this.foeBursts.filter((C) => C.t <= C.dur)),
      this.forActors(() => this.updateActorWeapons(A)),
      this.updateBlades(A);
    const I = this.allTurrets;
    this.projectiles.each((C) => {
      const Q = C.enemy ? E : A;
      if (((C.life -= Q), (C.age += A), C.returning && C.age > 0.42)) {
        const t = Math.atan2(o.y - C.y, o.x - C.x);
        if (
          ((C.vx += (Math.cos(t) * 670 - C.vx) * Math.min(1, A * 11)),
          (C.vy += (Math.sin(t) * 670 - C.vy) * Math.min(1, A * 11)),
          H(C, o) < 24)
        ) {
          C.active = !1;
          return;
        }
      }
      if (C.life <= 0) {
        C.active = !1;
        return;
      }
      if (
        ((C.px = C.x),
        (C.py = C.y),
        (C.x += C.vx * Q),
        (C.y += C.vy * Q),
        PA(C.px, C.py, C.x, C.y, C.r, this.map))
      ) {
        C.active = !1;
        return;
      }
      if (C.enemy) {
        for (const t of I)
          if (t.broken <= 0 && H(t, C) < 28 + C.r) {
            (t.hp -= C.damage), (C.active = !1);
            return;
          }
      }
      if (C.enemy) {
        const t = this.coop
          ? this.coop.actors.findIndex((h) => h.player.hp > 0 && H(C, h.player) < C.r + 14.5)
          : H(C, o) < C.r + 14.5
            ? 0
            : -1;
        t >= 0 && (this.hurtActor(t, C.damage), (C.active = !1));
        return;
      }
      const a = this.grid.query(C.x, C.y, this.maxEnemyRadius + C.r, []);
      for (const t of a)
        if (
          !(t.spawn > 0 || C.hit.has(t) || H(t, C) > t.r + C.r) &&
          (C.hit.add(t),
          C.poison > 0 &&
            ((t.poison = Math.min(C.poison * 3, t.poison + C.poison)),
            (t.poisonTime = 4),
            (t.poisonOwner = C.ownerIndex ?? 0),
            (t.poisonGen = 0)),
          this.withActor(C.ownerIndex ?? 0, () =>
            this.hit(
              t,
              C.damage,
              Math.atan2(C.vy, C.vx),
              (C.color === "#fa9e64" ? 130 : 28) * this.stats.knockback,
            ),
          ),
          !C.pierce)
        ) {
          if (C.bounce > 0) {
            C.bounce--;
            const h = this.closest(t.x, t.y, 250, C.hit);
            if (h) {
              const s = Math.atan2(h.y - t.y, h.x - t.x),
                U = Math.hypot(C.vx, C.vy);
              (C.vx = Math.cos(s) * U),
                (C.vy = Math.sin(s) * U),
                (C.life = Math.max(C.life, 0.4)),
                (C.damage *= 0.85);
              break;
            }
          }
          C.active = !1;
          break;
        }
    });
    for (const C of this.zones) {
      const Q = C.delay > 0;
      if (
        ((C.life -= E),
        (C.delay -= E),
        Q &&
          C.delay <= 0 &&
          C.enemy &&
          (C.style === "boss-slam" || C.style === "difficulty") &&
          this.bossImpact(C.x, C.y, C.r, C.style === "boss-slam"),
        (C.tick -= E),
        C.delay <= 0 && C.tick <= 0)
      ) {
        if (((C.tick = 0.25), C.heal)) {
          this.forActors(() => {
            H(C, this.player) < C.r && this.heal(1);
          });
          continue;
        }
        if (C.enemy)
          this.forActors(() => {
            H(C, this.player) < C.r + 10.5 && this.hurt(C.damage);
          });
        else if (C.damage > 0)
          for (const a of this.grid.query(C.x, C.y, C.r + this.maxEnemyRadius, []))
            H(a, C) < C.r + a.r &&
              a.burn <= 0 &&
              ((a.burn = 1), (a.burnOwner = C.ownerIndex ?? 0), (a.burnDamage = C.damage));
      }
    }
    if (
      ((this.zones = this.zones.filter((C) => C.life > 0)),
      this.ults.length &&
        (this.ults = this.ults.filter((C) => this.withActor(C.owner, () => li(this, C, E)))),
      this.loot.each((C) =>
        this.withActor(this.nearestActor(C), () => {
          const Q = this.player;
          C.age += A;
          const a = H(C, Q);
          if (
            (C.z > 0 &&
              ((C.z += C.vz * A),
              (C.vz -= 360 * A),
              C.z < 0 && ((C.z = 0), (C.vz = 0), (C.vx *= 0.4), (C.vy *= 0.4))),
            C.magnet || (a < this.stats.pickup && C.age > 0.25))
          ) {
            const h = Math.atan2(Q.y - C.y, Q.x - C.x),
              s = V(220 + C.age * 250, 220, 1200);
            (C.vx += (Math.cos(h) * s - C.vx) * Math.min(1, A * 12)),
              (C.vy += (Math.sin(h) * s - C.vy) * Math.min(1, A * 12)),
              (C.z *= Math.exp(-A * 15)),
              (C.trail -= A),
              C.trail <= 0 &&
                this.loot.count < 500 &&
                ((C.trail = 0.06), this.particle(C.x, C.y, C.kind === 0 ? "#a6eee0" : "#ffdc8d", 1, 0.15));
          } else (C.vx *= Math.exp(-A * 5)), (C.vy *= Math.exp(-A * 5));
          if (((C.x += C.vx * A), (C.y += C.vy * A), Q.hp > 0 && a < 19 && C.age > 0.2)) {
            (C.active = !1),
              this.time - this.pickupAt > 1 && (this.combo = 0),
              this.combo++,
              (this.pickupAt = this.time);
            const h = [1, 1.125, 1.25, 1.5, 1.667, 2];
            if (
              (this.audio.sound(
                C.kind === 0 ? "pickup_xp" : "pickup",
                h[Math.min(5, Math.floor(this.combo / 3))],
                0.8,
              ),
              C.kind === 1 && this.fx.twinkle(Q.x, Q.y - 12, 1, "#ffe08a", 10),
              this.particle(Q.x, Q.y, C.kind === 0 ? "#a5e8da" : "#efce87", 2, 0.3),
              C.kind === 0 && this.gainXP(C.value),
              C.kind === 1 && (this.money += C.value * this.rules.economy),
              C.kind === 2 &&
                (this.loot.each((s) => (s.magnet = !0)),
                this.audio.sound("magnet", 1),
                (this.pulse = 0.2)),
              C.kind === 4 && this.collectCapsule(),
              C.kind === 3)
            ) {
              const s = this.heal(Math.max(10, C.value));
              this.number(Q.x, Q.y, s, !1, "#a4e5be");
            }
          }
        }),
      ),
      (this.highEnemies = Math.max(this.highEnemies, this.enemies.count)),
      this.coop)
    ) {
      if ((this.coop.tickRevive(A), this.phase !== "combat")) return;
      this.coop.save();
      const C = this.coop.actors.findIndex((Q) => Q.player.hp > 0 && Q.pendingLevels > 0);
      if (C >= 0) {
        this.coop.activate(C), this.openLevel();
        return;
      }
    } else {
      if (o.hp <= 0) {
        this.finish(!1);
        return;
      }
      if (this.pendingLevels > 0) {
        this.openLevel();
        return;
      }
    }
    this.waveTime >= this.waveLength && (!this.bossWave || this.bossDead) && this.endWave();
  }
  updateEnemy(A, g) {
    if (((A.age += g), (A.flash = Math.max(0, A.flash - g)), A.spawn > 0)) {
      A.spawn -= g;
      return;
    }
    if (
      ((A.cd -= g),
      (A.buff = Math.max(0, A.buff - g)),
      (A.burn = Math.max(0, A.burn - g)),
      (A.bleedTime = Math.max(0, A.bleedTime - g)),
      A.bleedTime <= 0 && (A.bleed = 0),
      (A.poisonTime = Math.max(0, A.poisonTime - g)),
      A.poisonTime <= 0 && (A.poison = 0),
      (A.slow = Math.max(0, A.slow - g)),
      (A.tick -= g),
      A.tick <= 0 &&
        ((A.tick = 0.25),
        A.burn > 0 && this.withActor(A.burnOwner ?? 0, () => this.hit(A, A.burnDamage * 0.25, 0, 0, !1)),
        A.bleed > 0 && this.withActor(A.bleedOwner ?? 0, () => this.hit(A, A.bleed * 0.25, 0, 0, !1)),
        A.poisonTime > 0 && this.withActor(A.poisonOwner ?? 0, () => this.hit(A, A.poison * 0.25, 0, 0, !1)),
        !A.active))
    )
      return;
    const B = this.nearestActor(A),
      E = this.actorPlayer(B),
      o = H(A, E),
      i = Math.atan2(E.y - A.y, E.x - A.x);
    let I = Math.cos(i),
      C = Math.sin(i),
      Q = A.speed * (A.buff > 0 ? 1.35 : 1) * (A.slow > 0 ? 0.6 : 1);
    if (A.foe >= 0) {
      const t = this.updateFoe(A, g, E, o, i, Q);
      if (!A.active) return;
      (I = t.mx), (C = t.my), (Q = t.speed);
    } else {
      if ((A.type === 0 || A.type === 5) && o > 190) {
        const t = 0.38 + this.runDifficulty * 0.1,
          h = E.x + E.vx * t - Math.sin(i) * A.flank * 110,
          s = E.y + E.vy * t + Math.cos(i) * A.flank * 110,
          U = Math.atan2(s - A.y, h - A.x);
        (I = Math.cos(U)), (C = Math.sin(U));
      }
      if (
        (A.type === 1 &&
          (A.state === 0 && o < 115 && A.cd <= 0 && ((A.state = 1), (A.timer = 0.85), (A.aim = i)),
          A.state === 1 &&
            ((Q = 0),
            (A.timer -= g),
            A.timer <= 0 &&
              (this.zones.push({
                x: A.x,
                y: A.y,
                r: 103,
                life: 0.3,
                max: 0.3,
                delay: 0,
                damage: A.damage,
                enemy: !0,
                tick: 0,
                color: "#f49b83",
              }),
              (A.state = 0),
              (A.cd = 3.2),
              this.particle(A.x, A.y, "#cca5a7", 12),
              (this.shake = Math.max(this.shake, 2))))),
        (A.type === 2 || (A.type === 7 && A.elite === 0)) &&
          (A.state === 0 && A.cd <= 0 && o < 540 && ((A.state = 1), (A.timer = 0.9), (A.aim = i)),
          A.state === 1
            ? ((Q = 0), (A.timer -= g), A.timer <= 0 && ((A.state = 2), (A.timer = 0.65)))
            : A.state === 2 &&
              ((A.timer -= g),
              (Q = 520),
              (I = Math.cos(A.aim)),
              (C = Math.sin(A.aim)),
              A.timer <= 0 && ((A.state = 0), (A.cd = 3)))),
        A.type === 3 &&
          (o < 260 ? ((I = -I), (C = -C)) : o < 360 && (Q = 0),
          A.cd <= 0
            ? ((A.cd = 2.25), this.shoot(A.x, A.y, i, 190, A.damage, 4, !0, "#ee8c99", 0, 7), (A.state = 0))
            : A.cd < 0.55
              ? ((A.state = 1), (A.aim = i))
              : (A.state = 0)),
        A.type === 4 && (o < 220 && (Q = 0), A.cd <= 0))
      ) {
        (A.cd = 4), this.beam(A.x, A.y, A.x, A.y, "#c6a1ec", 1, 0.5);
        for (const t of this.grid.query(A.x, A.y, 180, [])) t.buff = 3;
        this.particle(A.x, A.y, "#cda9ff", 15, 0.5);
      }
      if (
        (A.type === 6 &&
          A.cd <= 0 &&
          ((A.cd = 3.6),
          this.zones.push({
            x: E.x + E.vx * 0.35,
            y: E.y + E.vy * 0.35,
            r: 65,
            life: 3.1,
            max: 3.1,
            delay: 0.95,
            damage: A.damage,
            enemy: !0,
            tick: 0,
            color: "#cfb57d",
          })),
        A.type === 7 && A.elite === 1 && A.cd <= 0)
      ) {
        A.cd = 2.8;
        for (let t = 0; t < 6; t++)
          this.shoot(A.x, A.y, i + (t * Math.PI) / 3, 175, A.damage * 0.7, 4, !0, "#f088ad", 0, 7);
      }
      if (
        (A.type === 7 &&
          A.elite === 2 &&
          ((A.hp = Math.min(A.maxHp, A.hp + A.maxHp * 0.025 * g)), (Q *= 1.2)),
        A.type === 7 && A.elite === 3 && (Q *= 0.8),
        A.type === 7 && A.elite === 4 && A.cd <= 0)
      ) {
        A.cd = 4.5;
        const t = p(0, Math.PI * 2);
        this.particle(A.x, A.y, "#eddc9a", 10),
          (A.x = V(E.x + Math.cos(t) * 285, -900, 900)),
          (A.y = V(E.y + Math.sin(t) * 285, this.yMid - 620, this.yMid + 620)),
          (A.spawn = 0.7);
      }
    }
    if (A.type >= 8) {
      const t = this.withActor(B, () => Ki(this, A, g));
      (Q = t.speed), (I = t.mx), (C = t.my);
    }
    if (A.type < 8 && A.state !== 2 && !(A.foe >= 0 && A.state === pA) && this.enemies.count < 700) {
      let t = 0;
      for (const h of this.grid.query(A.x, A.y, A.r + this.maxEnemyRadius, [])) {
        if (h === A || ++t > 9) continue;
        const s = A.x - h.x,
          U = A.y - h.y,
          M = Math.hypot(s, U),
          r = (A.r + h.r) * 0.8;
        M > 0 && M < r && ((I += (s / M) * (r - M) * 0.055), (C += (U / M) * (r - M) * 0.055));
      }
    }
    (A.x = V(A.x + (I * Q + A.vx) * g, -980, 980)),
      (A.y = V(
        A.y + (C * Q + A.vy) * g,
        this.yMid - (this.climb ? 650 : 700),
        this.yMid + (this.climb ? 650 : 700),
      )),
      HA(A, A.r, this.map) && A.type >= 8 && A.bossMode === 2 && A.bossPattern === "charge" && (A.timer = 0),
      (A.vx *= Math.exp(-g * 9)),
      (A.vy *= Math.exp(-g * 9)),
      A.spawn <= 0 &&
        this.forActors(() => {
          H(A, this.player) < A.r + 12.75 &&
            this.hurt(
              A.foe >= 0 && !(A.state === pA && $[A.foe].attack === "charge") ? A.damage * 0.5 : A.damage,
            );
        });
  }
  lastFoeStrike = null;
  foeBursts = [];
  updateFoe(A, g, B, E, o, i) {
    const I = $[A.foe],
      C = B.x - A.x,
      Q = B.y - A.y;
    let a = Math.cos(o),
      t = Math.sin(o),
      h = i;
    if (A.state === 0) {
      Math.abs(C) > 6 && (A.face = C > 0 ? 1 : -1);
      let s = !1;
      if (I.attack === "shoot") E < 300 ? ((a = -a), (t = -t)) : E < 400 && (h = 0), (s = E < I.range);
      else if (I.attack === "whip") {
        const U = Dg(A.foe),
          M = B.x - Math.sign(C || 1) * U * 0.72,
          r = B.y,
          Y = Math.hypot(M - A.x, r - A.y);
        Y < 10 ? (h = 0) : ((a = (M - A.x) / Y), (t = (r - A.y) / Y)),
          (s = Math.abs(Q) < I.size + 12 && Math.abs(C) < U + 8);
      } else I.attack === "melee" ? (s = E < I.range + 12 && Math.abs(Q) < I.size + 14) : (s = E < I.range);
      if (I.base === 0 && I.attack !== "explode" && E > 190) {
        const U = B.x - Math.sin(o) * A.flank * 90,
          M = B.y + Math.cos(o) * A.flank * 90,
          r = Math.atan2(M - A.y, U - A.x);
        (a = Math.cos(r)), (t = Math.sin(r));
      }
      s &&
        A.cd <= 0 &&
        ((A.state = uA),
        (A.timer = I.windup),
        (A.aim = o),
        (A.face = C >= 0 ? 1 : -1),
        I.attack === "explode" && this.audio.sound("boss_warn", 0.55, 1.3, this.pan(A.x)));
    } else if (A.state === uA) {
      if (
        ((h = I.attack === "explode" ? i * 0.35 : 0),
        (I.attack === "charge" || I.attack === "shoot") &&
          ((A.aim = o), (A.face = Math.cos(o) >= 0 ? 1 : -1)),
        (A.timer -= g),
        I.attack === "explode" &&
          Math.random() < 0.5 &&
          this.fx.embers(A.x + A.face * 6, A.y - I.h * 0.9, 1, "#ffb15c", 50),
        A.timer <= 0 &&
          ((A.state = pA), (A.timer = I.strike), (A.beamTick = 0), this.foeStrike(A, I, B), !A.active))
      )
        return { mx: 0, my: 0, speed: 0 };
    } else
      A.state === pA
        ? ((A.timer -= g),
          (h = 0),
          I.attack === "charge"
            ? ((h = I.power * (A.slow > 0 ? 0.7 : 1)),
              (a = Math.cos(A.aim)),
              (t = Math.sin(A.aim)),
              Math.random() < 0.6 &&
                this.fx.smoke(
                  A.x - a * 14,
                  A.y + QA(A.foe),
                  1,
                  9,
                  "#9a8670",
                  "#f0dcc0",
                  0.4,
                  6,
                  -a * 40,
                  -t * 30,
                ),
              A.beamTick ||
                this.forActors(() => {
                  H(A, this.player) < A.r + 16 &&
                    (this.hurt(A.damage * 1.25),
                    (A.beamTick = 1),
                    this.lastFoeStrike && (this.lastFoeStrike.hit = !0));
                }))
            : I.attack === "melee" &&
              (I.id === "wolf" || I.id === "panzerkaefer" || I.id === "pilzkopf") &&
              ((h = (I.id === "wolf" ? 300 : 160) * (A.timer / I.strike)), (a = A.face), (t = 0)),
          A.timer <= 0 && ((A.state = Sg), (A.timer = I.recover)))
        : A.state === Sg &&
          ((h *= 0.25), (A.timer -= g), A.timer <= 0 && ((A.state = 0), (A.cd = I.cd * p(0.85, 1.15))));
    return { mx: a, my: t, speed: h };
  }
  foeStrike(A, g, B) {
    const E = (I, C, Q, a, t) =>
        (this.lastFoeStrike = { foe: A.foe, kind: I, x: C, y: Q, r: a, x2: t, time: this.time, hit: !1 }),
      o = (I, C, Q, a = 1) =>
        this.forActors(() => {
          Math.hypot(this.player.x - I, this.player.y - C) < Q + 13 &&
            (this.hurt(A.damage * a), this.lastFoeStrike && (this.lastFoeStrike.hit = !0));
        }),
      i = this.pan(A.x);
    switch (g.attack) {
      case "melee": {
        const I = A.x + A.face * g.power,
          C = A.y;
        E("melee", I, C, g.size),
          o(I, C, g.size),
          this.audio.sound(g.sound, 0.8, 0.85, i),
          g.id === "hammergolem"
            ? (this.fx.ring(I, C + QA(A.foe), 10, g.size + 30, "#f0e2c4", 0.25, 4),
              this.fx.chips(I, C + QA(A.foe), 7, "#7f8a86", 1, 4.5),
              this.fx.smoke(I, C + QA(A.foe), 3, 13, "#8a8178", "#e7dccb", 0.7, 20, 0, -10),
              (this.shake = Math.max(this.shake, 5)),
              this.audio.sound("explosion", 0.35, 0.6, i))
            : this.fx.sparks(I, C - 8, A.face > 0 ? 0 : Math.PI, 0.9, 4, 220, "#fff1d0", 0.18);
        break;
      }
      case "splash": {
        E("splash", A.x, A.y, g.power),
          o(A.x, A.y, g.power),
          this.fx.ring(A.x, A.y + QA(A.foe), 8, g.power + 10, "#c8f06a", 0.3, 4),
          this.fx.splat(A.x, A.y + 6, "#a6d84a", 0.8, 0.2),
          this.audio.sound(g.sound, 0.7, 1.2, i);
        break;
      }
      case "whip": {
        const I = Dg(A.foe),
          C = A.x + A.face * I;
        E("whip", A.x, A.y, g.size, C),
          this.forActors(() => {
            const Q = this.player.x,
              a = this.player.y,
              t = (Q - A.x) * A.face;
            t > -10 &&
              t < I + 13 &&
              Math.abs(a - A.y) < g.size + 13 &&
              (this.hurt(A.damage), this.lastFoeStrike && (this.lastFoeStrike.hit = !0));
          }),
          this.fx.sparks(C, A.y - g.h * 0.55, A.face > 0 ? 0 : Math.PI, 0.6, 4, 240, "#ffe28a", 0.2),
          this.audio.sound(g.sound, 0.8, 1.35, i);
        break;
      }
      case "shoot": {
        const I = A.x + A.face * g.h * 0.05,
          C = A.y + QA(A.foe) - g.fly - g.h * 0.5,
          Q = Math.atan2(B.y - C, B.x - I);
        E("shoot", I, C, g.size),
          this.shoot(I, C, Q, g.power, A.damage, 4, !0, "#7ff3ff", 0, g.size),
          this.fx.glow(I, C, 30, "#8ff6ff", 0.12),
          this.audio.sound(g.sound, 0.5, 1.4, i);
        break;
      }
      case "charge": {
        E("charge", A.x, A.y, A.r, A.x + Math.cos(A.aim) * g.power * g.strike),
          this.audio.sound(
            g.id === "fledermaus" ? "crescent" : "dash_2",
            0.6,
            g.id === "fledermaus" ? 1.5 : 0.9,
            i,
          );
        break;
      }
      case "explode": {
        E("explode", A.x, A.y, g.power), o(A.x, A.y, g.power), this.foeBlast(A, !0), (A.active = !1);
        break;
      }
    }
  }
  foeBlast(A, g) {
    const B = $[A.foe];
    this.foeBursts.push({ x: A.x, y: A.y, face: A.face, foe: A.foe, t: 0, dur: B.strike }),
      this.foeBursts.length > 24 && this.foeBursts.shift(),
      this.fx.light(A.x, A.y, 180, "#ff9a40", 0.25),
      this.fx.ring(A.x, A.y + QA(A.foe), 12, (g ? B.power : B.power * 0.6) + 10, "#ffcf8a", 0.28, 5),
      (this.shake = Math.max(this.shake, g ? 7 : 4)),
      this.audio.sound("explosion", g ? 0.9 : 0.6, 1, this.pan(A.x));
  }
  hurt(A) {
    this.player.invuln > 0 ||
      this.god ||
      this.player.hp <= 0 ||
      ((this.player.hp -= (A * 100) / (100 + Math.max(-15, this.stats.armor) * 5)),
      (this.player.hp = Math.max(0, this.player.hp)),
      (this.player.invuln = 0.65),
      (this.player.flash = 0.16),
      (this.shake = Math.max(this.shake, 7)),
      this.particle(this.player.x, this.player.y, "#e89ba4", 10),
      this.audio.sound("hurt"));
  }
  gainXP(A) {
    for (this.xp += A; this.xp >= this.xpNeed; )
      (this.xp -= this.xpNeed),
        this.level++,
        (this.xpNeed = Math.floor(8 + this.level * 4.5)),
        this.pendingLevels++;
  }
  openLevel() {
    this.pendingLevels--;
    const A = this.weapons.map((B) => B.id),
      g = Wg.filter((B) => B.stat !== "chain" || A.includes("lightning"))
        .filter((B) => B.stat !== "engineering" || A.includes("turret"))
        .filter((B) => B.stat !== "burn" || A.includes("flame"))
        .filter((B) => B.stat !== "poison" || A.includes("poison"));
    (this.levelOptions = [...g].sort(() => Math.random() - 0.5).slice(0, 3)),
      (this.pulse = 0.45),
      this.audio.sound("level"),
      this.setPhase("level");
  }
  chooseLevel(A) {
    const g = this.levelOptions[A];
    g &&
      ((this.bonus[g.stat] = (this.bonus[g.stat] || 0) + g.amount),
      this.recalc(),
      g.stat === "hp" && (this.player.hp = Math.min(this.stats.hp, this.player.hp + g.amount)),
      this.audio.sound("buy"),
      this.particle(this.player.x, this.player.y, "#a4f0d4", 22, 1.3),
      this.pendingLevels ? this.openLevel() : this.setPhase("combat"));
  }
  endCoopWave() {
    if (
      (this.loot.each((A) => {
        this.withActor(this.nearestActor(A), () => {
          A.kind === 0 && this.gainXP(A.value),
            A.kind === 1 && (this.money += A.value * this.rules.economy),
            A.kind === 4 && this.collectCapsule();
        }),
          (A.active = !1);
      }),
      this.forActors(() => {
        (this.money +=
          (12 + Math.floor(this.wave * 2) + this.stats.economy + this.riskBonus) * this.rules.economy),
          (this.turrets = []),
          this.player.hp <= 0 && ((this.player.hp = this.stats.hp * 0.4), (this.player.invuln = 2)),
          this.makeShop();
      }, !0),
      (this.riskBonus = 0),
      (this.danger = !1),
      this.enemies.clear(),
      (this.foeBursts = []),
      this.projectiles.clear(),
      this.blades.clear(),
      (this.zones = []),
      (this.ults = []),
      this.wave >= 20 && !this.endless)
    ) {
      this.finish(!0);
      return;
    }
    this.coop.beginShop(),
      [4, 9, 14].includes(this.wave) && this.setPhase("risk"),
      this.audio.sound("wave_clear", 0.9);
  }
  endWave() {
    if (this.coop) {
      this.endCoopWave();
      return;
    }
    if (
      (this.loot.each((A) => {
        if (
          (A.kind === 0 && this.gainXP(A.value),
          A.kind === 1 && (this.money += A.value * this.rules.economy),
          A.kind === 4)
        ) {
          const g = this.collectCapsule();
          g && (this.pendingShowcase = g);
        }
        A.active = !1;
      }),
      (this.money +=
        (12 + Math.floor(this.wave * 2) + this.stats.economy + this.riskBonus) * this.rules.economy),
      (this.riskBonus = 0),
      (this.danger = !1),
      this.enemies.clear(),
      (this.foeBursts = []),
      this.projectiles.clear(),
      this.blades.clear(),
      (this.zones = []),
      (this.ults = []),
      (this.turrets = []),
      this.wave >= 20 && !this.endless)
    ) {
      this.finish(!0);
      return;
    }
    nsMoment("WELLE " + String(this.wave).padStart(2, "0") + " ÜBERSTANDEN", "DIE WERKSTATT HAT GEÖFFNET", this.save.data.settings.reducedMotion),
      this.makeShop(),
      [4, 9, 14].includes(this.wave) ? this.setPhase("risk") : this.setPhase("shop"),
      this.audio.sound("wave_clear", 0.9);
  }
  makeShop() {
    for (
      this.rerolls = 0,
        this.shopOffers = this.shopOffers.map((A) => (A.locked && !A.sold ? A : this.newOffer()));
      this.shopOffers.length < 4;

    )
      this.shopOffers.push(this.newOffer());
  }
  newOffer() {
    const A = Math.random() < 0.45;
    return {
      kind: A ? "weapon" : "item",
      id: A ? j[Math.floor(p(0, j.length))].id : _[Math.floor(p(0, _.length))].id,
      locked: !1,
      sold: !1,
      tier: A ? Ri(this.wave) : 1,
    };
  }
  price(A) {
    const g = A.kind === "weapon" ? j.find((B) => B.id === A.id) : _.find((B) => B.id === A.id);
    return Math.round(
      g.price *
        (1 + this.wave * 0.035) *
        this.rules.prices *
        (A.kind === "weapon" ? 1 + (A.tier - 1) * 1.15 : 1),
    );
  }
  upgradePreview(A, g) {
    const B = this.weapons.filter((E) => E.id === A && E.tier < 4).sort((E, o) => o.tier - E.tier)[0];
    return B
      ? { target: B, from: B.tier, to: Math.min(4, Math.max(B.tier + 1, g)), index: this.weapons.indexOf(B) }
      : void 0;
  }
  grantWeapon(A, g) {
    const B = this.upgradePreview(A, g);
    if (!B && this.weapons.length >= 6) return;
    const E = B?.target ?? this.weapon(A, g);
    B ? (E.tier = B.to) : this.weapons.push(E), (E.glow = 1.8);
    for (const i of this.turrets) i.owner === E && (i.tier = E.tier);
    const o = { id: A, tier: E.tier, from: B?.from ?? 0, upgraded: !!B };
    return (
      (this.showcase = { ...o, life: 1.85, max: 1.85, serial: ++this.purchaseSerial }),
      this.phase === "combat" ? this.acquisitionShockwave(E.tier) : (this.pendingShowcase = o),
      this.discover(A),
      this.audio.sound(B ? "upgrade" : "acquire", 1, 0.85),
      this.onToast(
        B
          ? `${j.find((i) => i.id === A).name}: Stufe ${B.from} → ${B.to}`
          : `Neue Waffe: ${j.find((i) => i.id === A).name} · Stufe ${E.tier}`,
      ),
      this.phase === "combat" && this.onChange(),
      { ...o, index: this.weapons.indexOf(E) }
    );
  }
  collectCapsule() {
    const A = this.weapons.filter((B) => B.tier < 4).sort((B, E) => B.tier - E.tier),
      g = j.filter((B) => !this.weapons.some((E) => E.id === B.id));
    if (this.weapons.length < 6 && g.length)
      return this.grantWeapon(g[Math.floor(Math.random() * g.length)].id, 2);
    if (A.length) return this.grantWeapon(A[0].id, 2);
    (this.money += 35), this.onToast("Waffenkapsel: Arsenal maximal · +35 Schrott");
  }
  acquisitionShockwave(A) {
    const g = this.player,
      B = SA[A];
    (this.player.invuln = Math.max(this.player.invuln, 0.8)),
      (this.shake = Math.max(this.shake, 8)),
      (this.pulse = Math.max(this.pulse, 0.3)),
      this.zones.push({
        x: g.x,
        y: g.y,
        r: 350,
        delay: 0,
        life: 0.85,
        max: 0.85,
        damage: 0,
        enemy: !1,
        tick: 2,
        color: B,
        style: "pulse",
      }),
      this.particle(g.x, g.y, B, 40, 1.2, 1),
      this.enemies.each((E) => {
        const o = H(E, g);
        if (E.spawn <= 0 && o < 350) {
          const i = Math.atan2(E.y - g.y, E.x - g.x),
            I = (1 - o / 450) * 680 * (E.type >= 8 ? 0.12 : 1);
          (E.vx += Math.cos(i) * I), (E.vy += Math.sin(i) * I);
        }
      });
  }
  buy(A) {
    if (this.phase !== "shop") return;
    const g = this.shopOffers[A];
    if (!g || g.sold || this.money < this.price(g)) return;
    let B;
    if (g.kind === "weapon") {
      if (!this.upgradePreview(g.id, g.tier) && this.weapons.length >= 6) {
        this.onToast("Arsenal voll. Erst eine Waffe verkaufen.");
        return;
      }
      B = this.grantWeapon(g.id, g.tier);
    } else {
      const E = _.find((i) => i.id === g.id);
      this.items[g.id] = (this.items[g.id] || 0) + 1;
      const o = E.stats.hp || 0;
      this.recalc(),
        o > 0 && (this.player.hp = Math.min(this.stats.hp, this.player.hp + o)),
        this.audio.sound("buy"),
        this.onToast(E.name + " eingepackt!");
    }
    return (
      (this.money -= this.price(g)),
      (g.sold = !0),
      (g.result = B),
      this.discover(g.id),
      this.onChange(),
      B ?? { id: g.id, tier: 1, from: 0, upgraded: !1, index: -1 }
    );
  }
  discover(A) {
    this.save.data.seen.includes(A) || (this.save.data.seen.push(A), this.save.write());
  }
  get rerollCost() {
    return Math.ceil((5 + this.rerolls * 3) * this.rules.prices);
  }
  reroll() {
    const A = this.rerollCost;
    this.money < A ||
      ((this.money -= A),
      this.rerolls++,
      (this.shopOffers = this.shopOffers.map((g) => (g.locked && !g.sold ? g : this.newOffer()))),
      this.audio.sound("click", 0.8),
      this.onChange());
  }
  sellItem(A) {
    const g = _.find((B) => B.id === A);
    !g ||
      !this.items[A] ||
      (this.items[A]--,
      this.items[A] || delete this.items[A],
      (this.money += Math.round(g.price * 0.45)),
      this.recalc(),
      this.audio.sound("buy", 0.75),
      this.onToast(g.name + " verkauft"),
      this.onChange());
  }
  sell(A) {
    const g = this.weapons[A];
    if (!g || this.weapons.length <= 1) {
      this.onToast("Deine letzte Waffe bleibt bei dir.");
      return;
    }
    (this.money += Math.round(j.find((B) => B.id === g.id).price * (1 + (g.tier - 1) * 1.2) * 0.45)),
      this.weapons.splice(A, 1),
      this.weapons.some((B) => B.id === g.id) ||
        (this.pendingShowcase?.id === g.id && (this.pendingShowcase = void 0),
        this.showcase?.id === g.id && (this.showcase = void 0)),
      this.audio.sound("buy", 0.7),
      this.onChange();
  }
  combine(A) {
    const g = this.weapons[A];
    if (!g || g.tier >= 4 || g.mutation) return;
    const B = this.weapons.findIndex((o, i) => i !== A && o.id === g.id && o.tier === g.tier && !o.mutation);
    if (B < 0) return;
    const E = g.tier;
    g.tier++,
      (g.glow = 1.8),
      (this.showcase = {
        id: g.id,
        tier: g.tier,
        from: E,
        upgraded: !0,
        life: 1.85,
        max: 1.85,
        serial: ++this.purchaseSerial,
      }),
      (this.pendingShowcase = { id: g.id, tier: g.tier, from: E, upgraded: !0 }),
      this.weapons.splice(B, 1),
      this.audio.sound("mutate", 0.7),
      this.onToast("Verschmolzen: Qualität " + g.tier),
      this.onChange();
  }
  forkShot(A, g, B, E, o, i, I) {
    (A.shots = (A.shots ?? 0) + 1), this.forkShots++;
    const C = A.mutation === "Überspannung" || A.shots % 3 === 0;
    A.mutation === "Überspannung" && (A.cd *= 1.25);
    const Q = Math.cos(o),
      a = Math.sin(o);
    let t,
      h = I + 40;
    for (const c of this.grid.query(B, E, I + this.maxEnemyRadius + 40, [])) {
      if (!c.active || c.spawn > 0) continue;
      const R = c.x - B,
        G = c.y - 10 - E,
        n = R * Q + G * a;
      n <= 0 || n > I + c.r || (Math.abs(R * a - G * Q) < c.r + 10 && n < h && ((h = n), (t = c)));
    }
    !t && g && g.active && (t = g);
    const s = t ? t.x : B + Q * I,
      U = t ? t.y - 10 : E + a * I,
      M = Math.atan2(U - E, s - B);
    this.forkBolts.push({
      x: B,
      y: E,
      tx: s,
      ty: U,
      life: C ? 0.26 : 0.2,
      max: C ? 0.26 : 0.2,
      wide: C ? 1.35 : 1,
      seed: Math.random(),
    }),
      this.forkHits.push({
        x: s,
        y: U,
        life: C ? 0.34 : 0.26,
        max: C ? 0.34 : 0.26,
        size: C ? 132 : 78,
        angle: Math.random() * Math.PI * 2,
      }),
      this.forkBolts.length > 40 && this.forkBolts.shift(),
      this.forkHits.length > 40 && this.forkHits.shift();
    const r = C ? 92 : 52,
      Y = new Set();
    t &&
      (Y.add(t),
      this.hit(t, i * (C ? 1.35 : 1), M, C ? 70 : 30, !0, C),
      C && (t.slow = Math.max(t.slow, 0.9)));
    for (const c of this.grid.query(s, U, r + this.maxEnemyRadius, []))
      !c.active ||
        Y.has(c) ||
        c.spawn > 0 ||
        (c.x - s) ** 2 + (c.y - 10 - U) ** 2 > (r + c.r) ** 2 ||
        (Y.add(c),
        this.hit(c, i * (C ? 0.7 : 0.4), Math.atan2(c.y - U, c.x - s), C ? 45 : 18, !1),
        C && (c.slow = Math.max(c.slow, 0.9)));
    if (A.mutation === "Gabelsturm" && t) {
      let c = t;
      for (let R = 0; R < 2; R++) {
        const G = this.closest(c.x, c.y, 230, Y);
        if (!G) break;
        Y.add(G),
          this.forkBolts.push({
            x: c.x,
            y: c.y - 10,
            tx: G.x,
            ty: G.y - 10,
            life: 0.2,
            max: 0.2,
            wide: 0.75,
            seed: Math.random(),
          }),
          this.forkHits.push({
            x: G.x,
            y: G.y - 10,
            life: 0.24,
            max: 0.24,
            size: 64,
            angle: Math.random() * 6.28,
          }),
          this.hit(G, i * 0.6, Math.atan2(G.y - c.y, G.x - c.x), 20, !1);
      }
    }
    this.audio.sound("fork_fire", C ? 1.1 : 1, C ? 0.92 : 1, this.pan(B)),
      this.audio.sound(C ? "fork_over" : "fork_hit", 1, 1, this.pan(s)),
      this.fx.glow(B, E, C ? 46 : 32, "#c8f6ff", 0.1),
      this.fx.star(B, E, M, C ? 34 : 24, "#bff6ff", 0.07),
      this.fx.light(B, E + 14, 110, "#7fe3ff", 0.12);
    for (let c = 1; c <= 3; c++)
      this.fx.light(B + ((s - B) * c) / 4, E + ((U - E) * c) / 4 + 14, 80, "#7fe3ff", 0.12);
    this.fx.light(s, U + 16, C ? 200 : 130, "#9cefff", C ? 0.3 : 0.2),
      this.fx.sparks(s, U, M + Math.PI, C ? 1.2 : 0.8, C ? 9 : 5, C ? 340 : 240, "#e2fcff", 0.25),
      (this.shake = Math.max(this.shake, C ? 3.2 : 1.4)),
      C && (this.heavyStop = Math.max(this.heavyStop, 0.035));
  }
  canMutate(A) {
    return (
      A.tier >= 3 &&
      !A.mutation &&
      ((A.id === "pistol" && this.stats.crit >= 0.12) ||
        (A.id === "fork" && this.stats.chain >= 2) ||
        (A.id === "axe" && this.stats.bleed >= 3) ||
        (A.id === "turret" && this.stats.engineering >= 1.4))
    );
  }
  openMutation(A) {
    const g = this.weapons[A];
    this.canMutate(g) &&
      ((this.mutationWeapon = g),
      (this.mutationOptions = dg[g.id].map((B) => B.name)),
      this.setPhase("mutation"));
  }
  mutate(A) {
    if (this.mutationWeapon) {
      if (((this.mutationWeapon.mutation = A), A === "Wanderknecht"))
        for (const g of this.turrets)
          g.owner === this.mutationWeapon && g.broken <= 0 && (g.life = Math.min(24, g.life + 6));
      this.audio.sound("mutate"),
        (this.pulse = 0.6),
        this.discover("mutation"),
        this.onToast("Mutation erwacht: " + A),
        this.setPhase("shop");
    }
  }
  risk(A) {
    if (((this.danger = A), A))
      (this.riskBonus = 40),
        this.risks++,
        this.onToast("Nächste Welle: +35 % Spawns · +40 Schrott beim Überleben");
    else {
      const g = this.heal(this.stats.hp * 0.5);
      (this.money += 10 * this.rules.economy),
        this.onToast(`+${Math.round(g)} LP · +${(10 * this.rules.economy).toLocaleString("de-DE")} Schrott`);
    }
    this.setPhase("shop");
  }
  nextWave() {
    this.coop?.advanceShop() ||
      (this.wave++,
      (this.waveTime = 0),
      (this.envTime = 4),
      (this.formationTimer = 6),
      (this.scrapDropped = 0),
      (this.xpDropped = 0),
      (this.waveLength = Math.min(60, 40 + this.wave)),
      (this.bossSpawned = !1),
      (this.bossDead = !1),
      (this.spawnTimer = 0.4),
      this.forActors(() => {
        this.player.hp = Math.min(this.stats.hp, this.player.hp + this.stats.hp * this.rules.waveHeal);
      }, !0),
      this.pendingShowcase &&
        ((this.showcase = { ...this.pendingShowcase, life: 1.85, max: 1.85, serial: ++this.purchaseSerial }),
        this.acquisitionShockwave(this.pendingShowcase.tier),
        this.audio.sound(this.pendingShowcase.upgraded ? "upgrade" : "acquire"),
        (this.pendingShowcase = void 0)),
      this.setPhase("combat"),
      this.saveCheckpoint());
  }
  saveCheckpoint() {
    this.coop ||
      this.testRun ||
      this.god ||
      this.phase !== "combat" ||
      ((this.save.data.checkpoint = {
        version: 1,
        character: this.character,
        map: this.map,
        difficulty: this.runDifficulty,
        wave: this.wave,
        hp: this.player.hp,
        x: this.player.x,
        y: this.player.y,
        money: this.money,
        xp: this.xp,
        xpNeed: this.xpNeed,
        level: this.level,
        runTime: this.runTime,
        kills: this.kills,
        runDamage: this.runDamage,
        maxKillStreak: this.maxKillStreak,
        talents: { ...this.runTalents },
        bonus: { ...this.bonus },
        items: { ...this.items },
        weapons: this.weapons.map((A) => ({ id: A.id, tier: A.tier, mutation: A.mutation })),
        risks: this.risks,
        riskBonus: this.riskBonus,
        danger: this.danger,
        endless: this.endless,
        climb: this.climb,
        climbY: this.climbState.y,
      }),
      this.save.write(),
      this.save.error && this.onToast(this.save.error));
  }
  restoreCheckpoint() {
    const A = this.save.data.checkpoint;
    if (!A) return !1;
    const g = JSON.parse(JSON.stringify(A));
    (this.map = g.map),
      (this.climb = g.climb ?? 0),
      this.start(g.character, g.weapons[0].id, g.difficulty),
      this.climb && ((this.climbState.y = g.climbY ?? 0), this.climbState.refresh(!0)),
      (this.runTalents = { ...g.talents }),
      (this.bonus = { ...g.bonus }),
      (this.items = { ...g.items }),
      (this.weapons = g.weapons.map((B) => ({ ...this.weapon(B.id, B.tier), mutation: B.mutation }))),
      this.recalc(),
      (this.player.hp = V(g.hp, 1, this.stats.hp)),
      (this.player.x = g.x),
      (this.player.y = g.y),
      HA(this.player, 16, this.map);
    for (const B of [
      "wave",
      "money",
      "xp",
      "xpNeed",
      "level",
      "runTime",
      "kills",
      "runDamage",
      "maxKillStreak",
      "risks",
      "riskBonus",
      "danger",
      "endless",
    ])
      this[B] = g[B];
    return (
      (this.ended = g.endless),
      (this.waveLength = Math.min(60, 40 + this.wave)),
      (this.waveTime = 0),
      (this.save.data.checkpoint = g),
      this.save.write(),
      (this.previous = "combat"),
      this.setPhase("pause"),
      !0
    );
  }
  pause() {
    this.phase === "combat"
      ? ((this.previous = "combat"), this.setPhase("pause"))
      : this.phase === "pause" && this.setPhase(this.previous);
  }
  finish(A) {
    if (
      ((this.deathAt = this.time),
      this.testRun || (delete this.save.data.checkpoint, this.save.write()),
      this.testRun && (this.ended = !0),
      !this.ended)
    ) {
      this.ended = !0;
      const g = this.save.data;
      if (
        (delete g.checkpoint,
        (g.points += 2 + Math.floor(this.wave / 4) + (A ? 5 : 0)),
        (g.bestWave = Math.max(g.bestWave, this.wave)),
        (g.kills += this.kills),
        A &&
          (g.difficultyClears[String(this.character)] = Math.max(
            Qg(g.difficultyClears, this.character),
            this.runDifficulty,
          )),
        A && this.coop)
      )
        for (const E of this.coop.actors)
          g.difficultyClears[String(E.character)] = Math.max(
            Qg(g.difficultyClears, E.character),
            this.runDifficulty,
          );
      g.history.unshift({
        wave: this.wave,
        kills: this.kills,
        time: this.runTime,
        won: A,
        difficulty: this.runDifficulty,
        map: IA[this.map].name,
        character: J[this.character].name,
        damage: Math.floor(this.runDamage),
        date: new Date().toISOString(),
        weapons: this.weapons.map((E) => E.mutation || j.find((o) => o.id === E.id).name),
      }),
        (g.history = g.history.slice(0, 20));
      const B = [
        this.kills >= 100 ? "hundred" : "",
        A ? "crown" : "",
        this.risks >= 3 ? "risk" : "",
        this.weapons.length === 6 ? "six" : "",
      ];
      for (const E of B) E && !g.challenges.includes(E) && (g.challenges.push(E), (g.points += 2));
      this.save.write();
    }
    this.setPhase(A ? "victory" : "defeat"), A || this.audio.sound("boss", 0.4);
  }
  continueEndless() {
    (this.endless = !0),
      this.coop
        ? (this.forActors(() => this.makeShop(), !0), this.coop.beginShop())
        : (this.makeShop(), this.setPhase("shop"));
  }
}
const LA = [
    {
      id: "a",
      name: "Werkbank",
      short: "Creme · Rost · viel Luft",
      desc: "Warm und ruhig: cremefarbene Karten mit weichen Ecken, ein Rost-Akzent, Sora-Überschriften und Figtree-Text. Menü frei links, Held rechts; das HUD sitzt kompakt oben links, Waffen direkt darunter.",
      hero: { x: 0.68, y: 0.56, shade: "left", py: 0.8 },
      pitch: 1,
    },
  ],
  Ag = (e) => LA.find((A) => A.id === e) ?? LA[0];
function Wi(e) {
  typeof document > "u" || (document.body.dataset.theme = e);
}
function di(e, A, g) {
  const B =
      e === 0
        ? [
            [-A, -9],
            [A, -9],
            [A, 8],
            [-A, 8],
          ]
        : Array.from({ length: 24 }, (h, s) => [
            Math.cos((s * Math.PI) / 12) * A,
            Math.sin((s * Math.PI) / 12) * 10,
          ]),
    E = g * 0.52,
    o = g * 0.3,
    i = [...B, ...B.map(([h, s]) => [h + E, s + o])];
  e === 3 && i.push([-A * 0.65 + E, -10 + o], [A * 0.82 + E, o], [A * 0.82 + E, 12 + o]);
  const I = i.sort((h, s) => h[0] - s[0] || h[1] - s[1]),
    C = (h, s, U) => (s[0] - h[0]) * (U[1] - h[1]) - (s[1] - h[1]) * (U[0] - h[0]),
    Q = (h) => {
      const s = [];
      for (const U of h) {
        for (; s.length > 1 && C(s[s.length - 2], s[s.length - 1], U) <= 0; ) s.pop();
        s.push(U);
      }
      return s;
    },
    a = Q(I),
    t = Q([...I].reverse());
  return a.pop(), t.pop(), { contact: B, cast: [...a, ...t], dx: E, dy: o };
}
function pg(e, A, g) {
  const { contact: B, cast: E, dx: o, dy: i } = di(e, A, g);
  return d.make(
    `foot-shadow:${e}:${A}:${g}`,
    A * 2 + o + 40,
    i + 60,
    1.5,
    (I) => {
      const C = I.c,
        Q = (a, t, h) => {
          (C.filter = `blur(${h}px)`),
            (C.fillStyle = t),
            C.beginPath(),
            a.forEach(([s, U], M) => (M ? C.lineTo(s, U) : C.moveTo(s, U))),
            C.closePath(),
            C.fill();
        };
      Q(E, "#08060d66", 2.6), Q(B, "#06050b9c", 1.1), (C.filter = "none");
    },
    A + 20,
    26,
  );
}
function WB(e) {
  const A = document.createElement("canvas");
  (A.width = 2e3), (A.height = 1440);
  const g = A.getContext("2d", { alpha: !1 }),
    B = new X(g),
    E = Z.get("floor-" + e);
  (g.fillStyle = "#211d20"), g.fillRect(0, 0, 2e3, 1440), E && g.drawImage(E, 0, 0, 2e3, 1440);
  for (let i = 0; i < 2e3; i += 100)
    B.rect(i, 22, 99, 38, 3, "#100f12", F, 2),
      B.rect(i, 0, 99, 28, 4, ["#916039", "#36485b", "#6c6484", "#77504c", "#5d6a3a"][e], F, 3),
      B.line(i + 5, 4, i + 92, 4, "#e3c29b55", 2),
      B.rect(i, 1398, 99, 42, 3, "#1b151b", F, 2),
      B.rect(i, 1381, 99, 24, 4, ["#916039", "#36485b", "#6c6484", "#77504c", "#5d6a3a"][e], F, 3);
  for (let i = 45; i < 1400; i += 90)
    B.rect(0, i, 30, 87, 3, "#211b1f", F, 3), B.rect(1970, i, 30, 87, 3, "#211b1f", F, 3);
  const o = g.createRadialGradient(1e3, 650, 220, 1e3, 720, 1120);
  return (
    o.addColorStop(0, "#080b1400"),
    o.addColorStop(1, "#07091285"),
    (g.fillStyle = o),
    g.fillRect(0, 0, 2e3, 1440),
    A
  );
}
function IB(e) {
  return d.make(
    "cover:" + e.kind + ":" + e.r,
    e.r * 2 + 30,
    e.h + 60,
    1.6,
    (A) => {
      const g = e.r,
        B = e.h,
        E = A.c;
      if (e.kind === 4) {
        const o = g * 1.08,
          i = -B * 0.92;
        A.shape(
          `M${-o} 4Q${-o - 4} ${i * 0.45} ${-o * 0.55} ${i * 0.9}Q${-o * 0.1} ${i - 10} ${o * 0.45} ${i * 0.95}Q${o + 6} ${i * 0.55} ${o} 4Q0 14 ${-o} 4Z`,
          A.grad("#9a978a", "#4c4a45", i, 10),
          F,
          3,
        ),
          A.shape(
            `M${-o * 0.7} ${i * 0.55}Q${-o * 0.5} ${i * 0.98} ${o * 0.1} ${i * 0.96}Q${o * 0.55} ${i * 0.9} ${o * 0.62} ${i * 0.6}Q${o * 0.15} ${i * 0.72} ${-o * 0.7} ${i * 0.55}Z`,
            "#6f8a3a",
            F,
            2,
          ),
          A.shape(
            `M${-o * 0.45} ${i * 0.78}Q${-o * 0.1} ${i * 0.95} ${o * 0.3} ${i * 0.88}`,
            "#ffffff00",
            "#b8cf6e88",
            3,
          ),
          A.line(-o * 0.5, i * 0.35, -o * 0.2, i * 0.2, "#2a2925", 2),
          A.line(o * 0.25, i * 0.3, o * 0.5, i * 0.1, "#2a2925", 2),
          A.line(-o * 0.75, i * 0.25, -o * 0.62, i * 0.6, "#e9e4d055", 2);
        for (const [I, C] of [
          [-o * 0.95, 1],
          [-o * 0.55, 0.8],
          [o * 0.7, 1.1],
          [o * 0.15, 0.7],
        ]) {
          for (const Q of [-5, 0, 5]) A.line(I + Q * 0.6, 8, I + Q * 1.4 * C, 8 - 13 * C, "#4e6a26", 3);
          for (const Q of [-5, 0, 5]) A.line(I + Q * 0.6, 8, I + Q * 1.4 * C, 8 - 13 * C, "#8fae4a", 1.4);
        }
      } else if (e.kind === 0) {
        A.rect(-g, -B, g * 2, B + 7, 7, A.grad("#86613d", "#3f3025", -B, B), F, 3),
          A.shape(`M${-g} ${-B}l12-14 ${g * 2 - 24} 0 12 14Z`, "#bc925c", F, 3),
          A.line(-g + 5, -B + 3, g - 5, -B + 3, "#f4ca8077", 3);
        for (const o of [-1, 1]) A.rect(o * (g - 11) - 3, -B + 7, 6, B - 12, 1, "#433c34", F, 1);
        A.line(-g + 12, -B + 11, g - 12, -7, "#bd986b66", 3);
      } else {
        A.rect(-g, -B + 12, g * 2, B - 3, 10, A.grad(e.color, "#28252e", -B, B), F, 3),
          A.ellipse(0, -B + 12, g, 18, e.color, F, 3),
          A.ellipse(0, -B + 8, g - 8, 10, "#342c36", F, 2),
          A.rect(-g + 9, -B + 31, g * 2 - 18, 18, 4, e.light, F, 3);
        for (let o = 0; o < 3; o++)
          A.line(-g + 14 + o * 18, -B + 34, -g + 14 + o * 18, -B + 45, "#1f2638", 3);
        for (const o of [-g + 7, g - 7]) for (const i of [-B + 25, -10]) A.bolt(o, i, 2.5);
        if ((A.line(g - 7, -B + 35, g - 7, -7, "#f9dcac55", 2), e.kind === 3)) {
          A.ellipse(0, -B + 8, g - 5, 13, "#b88459", F, 2);
          for (let o = 0; o < 12; o++) {
            const i = (o * Math.PI) / 6;
            A.line(
              Math.cos(i) * (g - 13),
              -B + 8 + Math.sin(i) * 8,
              Math.cos(i) * (g - 7),
              -B + 8 + Math.sin(i) * 11,
              "#f2d39b",
              1.3,
            );
          }
          E.save(),
            E.translate(0, -B - 12),
            E.rotate(-0.28),
            A.rect(-g * 0.65, -10, g * 1.25, 19, 5, A.grad("#c69b66", "#735647"), F, 3),
            A.ellipse(g * 0.6, 0, 7, 10, "#b6d4e1", F, 2),
            A.line(-g * 0.45, -6, g * 0.3, -6, "#ffe7b988", 2),
            E.restore();
        }
      }
    },
    e.r + 15,
    e.h + 44,
  );
}
function ki(e) {
  return d.make(
    "lamp:" + e,
    220,
    160,
    1,
    (A) => {
      const g = A.c,
        B = g.createRadialGradient(0, 0, 0, 0, 0, 100);
      B.addColorStop(0, e + "2d"),
        B.addColorStop(1, e + "00"),
        (g.fillStyle = B),
        g.fillRect(-110, -80, 220, 160);
    },
    110,
    80,
  );
}
function xi() {
  return d.make(
    "edge-fog",
    1100,
    180,
    1,
    (e) => {
      const A = e.c,
        g = A.createLinearGradient(0, -90, 0, 90);
      g.addColorStop(0, "#9aa8b922"),
        g.addColorStop(0.4, "#778c9913"),
        g.addColorStop(1, "#14223700"),
        (A.fillStyle = g),
        A.fillRect(-550, -90, 1100, 180);
    },
    550,
    90,
  );
}
const Ji = {
  frames: 30,
  cols: 6,
  cw: 104,
  ch: 204,
  ax: 50,
  ay: 168,
  k: 2,
  dt: 0.0667,
  pillar: { w: 148, h: 400, k: 2, torchY: 112, foot: 4 },
};
function ji(e) {
  const A = cB(e);
  if (A) {
    const E = document.createElement("canvas");
    (E.width = A.w), (E.height = A.h);
    const o = Z.get("arena-" + A.id);
    return (
      o && E.getContext("2d", { alpha: !1 }).drawImage(o, 0, 0),
      (E.dataset.footprintShadows = "0"),
      (E.dataset.plate = A.id),
      E
    );
  }
  const g = WB(e),
    B = g.getContext("2d");
  for (const E of Gg[e]) {
    const o = pg(E.kind, E.r, E.h);
    B.drawImage(o.canvas, E.x + 1e3 - o.ox, E.y + 720 - o.oy, o.w, o.h);
  }
  return (g.dataset.footprintShadows = String(Gg[e].length)), g;
}
const ui = 1672,
  Oi = 941,
  Hi = { x: -324, y: -1389, w: 2320, h: 3720 },
  fi = JSON.parse(
    '[{"x":643,"y":117,"w":1,"h":6,"sort":122,"tag":"seilbahn","sx":0,"sy":0},{"x":644,"y":116,"w":1,"h":13,"sort":128,"tag":"seilbahn","sx":3,"sy":0},{"x":645,"y":115,"w":1,"h":21,"sort":135,"tag":"seilbahn","sx":6,"sy":0},{"x":646,"y":115,"w":1,"h":22,"sort":136,"tag":"seilbahn","sx":9,"sy":0},{"x":647,"y":114,"w":2,"h":24,"sort":137,"tag":"seilbahn","sx":12,"sy":0},{"x":649,"y":113,"w":1,"h":214,"sort":326,"tag":"seilbahn","sx":16,"sy":0},{"x":650,"y":112,"w":1,"h":216,"sort":327,"tag":"seilbahn","sx":19,"sy":0},{"x":651,"y":112,"w":1,"h":217,"sort":328,"tag":"seilbahn","sx":22,"sy":0},{"x":652,"y":111,"w":1,"h":220,"sort":330,"tag":"seilbahn","sx":25,"sy":0},{"x":653,"y":111,"w":1,"h":221,"sort":331,"tag":"seilbahn","sx":28,"sy":0},{"x":654,"y":110,"w":1,"h":223,"sort":332,"tag":"seilbahn","sx":31,"sy":0},{"x":655,"y":110,"w":1,"h":224,"sort":333,"tag":"seilbahn","sx":34,"sy":0},{"x":656,"y":106,"w":6,"h":230,"sort":335,"tag":"seilbahn","sx":37,"sy":0},{"x":662,"y":98,"w":14,"h":239,"sort":336,"tag":"seilbahn","sx":45,"sy":0},{"x":676,"y":97,"w":1,"h":239,"sort":335,"tag":"seilbahn","sx":61,"sy":0},{"x":677,"y":97,"w":1,"h":238,"sort":334,"tag":"seilbahn","sx":64,"sy":0},{"x":678,"y":96,"w":1,"h":237,"sort":332,"tag":"seilbahn","sx":67,"sy":0},{"x":679,"y":96,"w":1,"h":236,"sort":331,"tag":"seilbahn","sx":70,"sy":0},{"x":680,"y":95,"w":1,"h":236,"sort":330,"tag":"seilbahn","sx":73,"sy":0},{"x":681,"y":94,"w":1,"h":235,"sort":328,"tag":"seilbahn","sx":76,"sy":0},{"x":682,"y":94,"w":1,"h":234,"sort":327,"tag":"seilbahn","sx":79,"sy":0},{"x":683,"y":93,"w":1,"h":234,"sort":326,"tag":"seilbahn","sx":82,"sy":0},{"x":684,"y":93,"w":1,"h":232,"sort":324,"tag":"seilbahn","sx":85,"sy":0},{"x":685,"y":92,"w":1,"h":232,"sort":323,"tag":"seilbahn","sx":88,"sy":0},{"x":686,"y":78,"w":24,"h":245,"sort":322,"tag":"seilbahn","sx":91,"sy":0},{"x":710,"y":67,"w":19,"h":256,"sort":322,"tag":"seilbahn","sx":117,"sy":0},{"x":729,"y":66,"w":1,"h":255,"sort":320,"tag":"seilbahn","sx":138,"sy":0},{"x":730,"y":52,"w":24,"h":267,"sort":318,"tag":"seilbahn","sx":141,"sy":0},{"x":754,"y":38,"w":24,"h":281,"sort":318,"tag":"seilbahn","sx":167,"sy":0},{"x":778,"y":25,"w":24,"h":294,"sort":318,"tag":"seilbahn","sx":193,"sy":0},{"x":802,"y":0,"w":24,"h":319,"sort":318,"tag":"seilbahn","sx":219,"sy":0},{"x":826,"y":0,"w":24,"h":319,"sort":318,"tag":"seilbahn","sx":245,"sy":0},{"x":850,"y":0,"w":24,"h":319,"sort":318,"tag":"seilbahn","sx":271,"sy":0},{"x":874,"y":17,"w":24,"h":302,"sort":318,"tag":"seilbahn","sx":297,"sy":0},{"x":898,"y":33,"w":24,"h":286,"sort":318,"tag":"seilbahn","sx":323,"sy":0},{"x":922,"y":48,"w":19,"h":271,"sort":318,"tag":"seilbahn","sx":349,"sy":0},{"x":941,"y":60,"w":24,"h":263,"sort":322,"tag":"seilbahn","sx":370,"sy":0},{"x":965,"y":75,"w":12,"h":248,"sort":322,"tag":"seilbahn","sx":396,"sy":0},{"x":977,"y":83,"w":1,"h":241,"sort":323,"tag":"seilbahn","sx":410,"sy":0},{"x":978,"y":84,"w":1,"h":242,"sort":325,"tag":"seilbahn","sx":413,"sy":0},{"x":979,"y":84,"w":1,"h":243,"sort":326,"tag":"seilbahn","sx":416,"sy":0},{"x":980,"y":85,"w":1,"h":243,"sort":327,"tag":"seilbahn","sx":419,"sy":0},{"x":981,"y":86,"w":1,"h":244,"sort":329,"tag":"seilbahn","sx":422,"sy":0},{"x":982,"y":86,"w":1,"h":245,"sort":330,"tag":"seilbahn","sx":425,"sy":0},{"x":983,"y":87,"w":1,"h":245,"sort":331,"tag":"seilbahn","sx":428,"sy":0},{"x":984,"y":88,"w":1,"h":246,"sort":333,"tag":"seilbahn","sx":431,"sy":0},{"x":985,"y":88,"w":1,"h":247,"sort":334,"tag":"seilbahn","sx":434,"sy":0},{"x":986,"y":89,"w":21,"h":247,"sort":335,"tag":"seilbahn","sx":437,"sy":0},{"x":1007,"y":102,"w":1,"h":233,"sort":334,"tag":"seilbahn","sx":460,"sy":0},{"x":1008,"y":103,"w":1,"h":230,"sort":332,"tag":"seilbahn","sx":463,"sy":0},{"x":1009,"y":103,"w":1,"h":228,"sort":330,"tag":"seilbahn","sx":466,"sy":0},{"x":1010,"y":104,"w":1,"h":225,"sort":328,"tag":"seilbahn","sx":469,"sy":0},{"x":1011,"y":105,"w":1,"h":222,"sort":326,"tag":"seilbahn","sx":472,"sy":0},{"x":1012,"y":105,"w":1,"h":220,"sort":324,"tag":"seilbahn","sx":475,"sy":0},{"x":1013,"y":106,"w":1,"h":217,"sort":322,"tag":"seilbahn","sx":478,"sy":0},{"x":1014,"y":107,"w":1,"h":214,"sort":320,"tag":"seilbahn","sx":481,"sy":0},{"x":1015,"y":107,"w":1,"h":212,"sort":318,"tag":"seilbahn","sx":484,"sy":0},{"x":1016,"y":108,"w":1,"h":209,"sort":316,"tag":"seilbahn","sx":487,"sy":0},{"x":1017,"y":108,"w":1,"h":207,"sort":314,"tag":"seilbahn","sx":490,"sy":0},{"x":1018,"y":109,"w":4,"h":29,"sort":137,"tag":"seilbahn","sx":493,"sy":0},{"x":1022,"y":112,"w":1,"h":25,"sort":136,"tag":"seilbahn","sx":499,"sy":0},{"x":1023,"y":112,"w":1,"h":19,"sort":130,"tag":"seilbahn","sx":502,"sy":0},{"x":1024,"y":113,"w":1,"h":12,"sort":124,"tag":"seilbahn","sx":505,"sy":0},{"x":1025,"y":113,"w":1,"h":6,"sort":118,"tag":"seilbahn","sx":508,"sy":0},{"x":1173,"y":300,"w":1,"h":12,"sort":470,"tag":"unterkunft","sx":511,"sy":0},{"x":1174,"y":290,"w":1,"h":25,"sort":472,"tag":"unterkunft","sx":514,"sy":0},{"x":1175,"y":279,"w":1,"h":40,"sort":474,"tag":"unterkunft","sx":517,"sy":0},{"x":1176,"y":268,"w":1,"h":54,"sort":476,"tag":"unterkunft","sx":520,"sy":0},{"x":1177,"y":213,"w":18,"h":125,"sort":477,"tag":"unterkunft","sx":523,"sy":0},{"x":1195,"y":196,"w":24,"h":342,"sort":537,"tag":"unterkunft","sx":543,"sy":0},{"x":1219,"y":179,"w":24,"h":359,"sort":537,"tag":"unterkunft","sx":569,"sy":0},{"x":1243,"y":162,"w":24,"h":376,"sort":537,"tag":"unterkunft","sx":595,"sy":0},{"x":1267,"y":145,"w":24,"h":393,"sort":537,"tag":"unterkunft","sx":621,"sy":0},{"x":1291,"y":129,"w":24,"h":409,"sort":537,"tag":"unterkunft","sx":647,"sy":0},{"x":1315,"y":112,"w":24,"h":426,"sort":537,"tag":"unterkunft","sx":673,"sy":0},{"x":1339,"y":95,"w":24,"h":443,"sort":537,"tag":"unterkunft","sx":699,"sy":0},{"x":1363,"y":78,"w":24,"h":460,"sort":537,"tag":"unterkunft","sx":725,"sy":0},{"x":1387,"y":68,"w":24,"h":470,"sort":537,"tag":"unterkunft","sx":751,"sy":0},{"x":1411,"y":68,"w":24,"h":470,"sort":537,"tag":"unterkunft","sx":777,"sy":0},{"x":1435,"y":82,"w":24,"h":456,"sort":537,"tag":"unterkunft","sx":803,"sy":0},{"x":1459,"y":96,"w":24,"h":442,"sort":537,"tag":"unterkunft","sx":829,"sy":0},{"x":1483,"y":110,"w":24,"h":428,"sort":537,"tag":"unterkunft","sx":855,"sy":0},{"x":1507,"y":93,"w":24,"h":445,"sort":537,"tag":"unterkunft","sx":881,"sy":0},{"x":1531,"y":93,"w":16,"h":445,"sort":537,"tag":"unterkunft","sx":907,"sy":0},{"x":1547,"y":93,"w":24,"h":454,"sort":546,"tag":"unterkunft","sx":925,"sy":0},{"x":1571,"y":94,"w":22,"h":453,"sort":546,"tag":"unterkunft","sx":951,"sy":0},{"x":1593,"y":183,"w":24,"h":378,"sort":560,"tag":"unterkunft","sx":975,"sy":0},{"x":1617,"y":219,"w":9,"h":342,"sort":560,"tag":"unterkunft","sx":1001,"sy":0},{"x":1626,"y":247,"w":1,"h":83,"sort":329,"tag":"unterkunft","sx":1012,"sy":0},{"x":1627,"y":250,"w":1,"h":81,"sort":330,"tag":"unterkunft","sx":1015,"sy":0},{"x":1628,"y":253,"w":2,"h":79,"sort":331,"tag":"unterkunft","sx":1018,"sy":0},{"x":1630,"y":259,"w":2,"h":74,"sort":332,"tag":"unterkunft","sx":1022,"sy":0},{"x":1632,"y":265,"w":2,"h":69,"sort":333,"tag":"unterkunft","sx":1026,"sy":0},{"x":1634,"y":271,"w":2,"h":64,"sort":334,"tag":"unterkunft","sx":1030,"sy":0},{"x":1636,"y":277,"w":2,"h":59,"sort":335,"tag":"unterkunft","sx":1034,"sy":0},{"x":1638,"y":283,"w":2,"h":54,"sort":336,"tag":"unterkunft","sx":1038,"sy":0},{"x":1640,"y":289,"w":1,"h":47,"sort":335,"tag":"unterkunft","sx":1042,"sy":0},{"x":1641,"y":293,"w":1,"h":38,"sort":330,"tag":"unterkunft","sx":1045,"sy":0},{"x":1642,"y":296,"w":1,"h":30,"sort":325,"tag":"unterkunft","sx":1048,"sy":0},{"x":1643,"y":299,"w":1,"h":22,"sort":320,"tag":"unterkunft","sx":1051,"sy":0},{"x":1644,"y":302,"w":1,"h":15,"sort":316,"tag":"unterkunft","sx":1054,"sy":0},{"x":1645,"y":305,"w":1,"h":7,"sort":311,"tag":"unterkunft","sx":1057,"sy":0},{"x":1420,"y":637,"w":1,"h":98,"sort":734,"tag":"huette","sx":1060,"sy":0},{"x":1421,"y":636,"w":1,"h":100,"sort":735,"tag":"huette","sx":1063,"sy":0},{"x":1422,"y":635,"w":1,"h":102,"sort":736,"tag":"huette","sx":1066,"sy":0},{"x":1423,"y":635,"w":1,"h":103,"sort":737,"tag":"huette","sx":1069,"sy":0},{"x":1424,"y":634,"w":1,"h":105,"sort":738,"tag":"huette","sx":1072,"sy":0},{"x":1425,"y":623,"w":19,"h":245,"sort":867,"tag":"huette","sx":1075,"sy":0},{"x":1444,"y":608,"w":24,"h":261,"sort":868,"tag":"huette","sx":1096,"sy":0},{"x":1468,"y":594,"w":24,"h":275,"sort":868,"tag":"huette","sx":1122,"sy":0},{"x":1492,"y":579,"w":24,"h":290,"sort":868,"tag":"huette","sx":1148,"sy":0},{"x":1516,"y":565,"w":24,"h":304,"sort":868,"tag":"huette","sx":1174,"sy":0},{"x":1540,"y":561,"w":24,"h":308,"sort":868,"tag":"huette","sx":1200,"sy":0},{"x":1564,"y":561,"w":3,"h":308,"sort":868,"tag":"huette","sx":1226,"sy":0},{"x":1567,"y":561,"w":24,"h":309,"sort":869,"tag":"huette","sx":1231,"sy":0},{"x":1591,"y":561,"w":24,"h":309,"sort":869,"tag":"huette","sx":1257,"sy":0},{"x":1615,"y":505,"w":24,"h":365,"sort":869,"tag":"huette","sx":1283,"sy":0},{"x":1639,"y":491,"w":24,"h":379,"sort":869,"tag":"huette","sx":1309,"sy":0},{"x":1663,"y":486,"w":9,"h":384,"sort":869,"tag":"huette","sx":1335,"sy":0},{"x":17,"y":332,"w":4,"h":40,"sort":371,"tag":"werkstatt","sx":1346,"sy":0},{"x":21,"y":320,"w":4,"h":51,"sort":370,"tag":"werkstatt","sx":1352,"sy":0},{"x":25,"y":307,"w":4,"h":63,"sort":369,"tag":"werkstatt","sx":1358,"sy":0},{"x":29,"y":297,"w":3,"h":72,"sort":368,"tag":"werkstatt","sx":1364,"sy":0},{"x":32,"y":222,"w":24,"h":316,"sort":537,"tag":"werkstatt","sx":1369,"sy":0},{"x":56,"y":193,"w":10,"h":345,"sort":537,"tag":"werkstatt","sx":1395,"sy":0},{"x":66,"y":146,"w":24,"h":389,"sort":534,"tag":"werkstatt","sx":1407,"sy":0},{"x":90,"y":145,"w":24,"h":390,"sort":534,"tag":"werkstatt","sx":1433,"sy":0},{"x":114,"y":93,"w":24,"h":442,"sort":534,"tag":"werkstatt","sx":1459,"sy":0},{"x":138,"y":87,"w":24,"h":448,"sort":534,"tag":"werkstatt","sx":1485,"sy":0},{"x":162,"y":86,"w":24,"h":449,"sort":534,"tag":"werkstatt","sx":1511,"sy":0},{"x":186,"y":85,"w":24,"h":450,"sort":534,"tag":"werkstatt","sx":1537,"sy":0},{"x":210,"y":85,"w":24,"h":450,"sort":534,"tag":"werkstatt","sx":1563,"sy":0},{"x":234,"y":129,"w":24,"h":406,"sort":534,"tag":"werkstatt","sx":1589,"sy":0},{"x":258,"y":129,"w":24,"h":406,"sort":534,"tag":"werkstatt","sx":1615,"sy":0},{"x":282,"y":129,"w":24,"h":406,"sort":534,"tag":"werkstatt","sx":1641,"sy":0},{"x":306,"y":129,"w":24,"h":406,"sort":534,"tag":"werkstatt","sx":1667,"sy":0},{"x":330,"y":129,"w":24,"h":406,"sort":534,"tag":"werkstatt","sx":1693,"sy":0},{"x":354,"y":128,"w":24,"h":407,"sort":534,"tag":"werkstatt","sx":1719,"sy":0},{"x":378,"y":128,"w":24,"h":407,"sort":534,"tag":"werkstatt","sx":1745,"sy":0},{"x":402,"y":128,"w":24,"h":407,"sort":534,"tag":"werkstatt","sx":1771,"sy":0},{"x":426,"y":128,"w":24,"h":407,"sort":534,"tag":"werkstatt","sx":1797,"sy":0},{"x":450,"y":128,"w":11,"h":407,"sort":534,"tag":"werkstatt","sx":1823,"sy":0},{"x":461,"y":128,"w":1,"h":393,"sort":520,"tag":"werkstatt","sx":1836,"sy":0},{"x":462,"y":128,"w":1,"h":363,"sort":490,"tag":"werkstatt","sx":1839,"sy":0},{"x":463,"y":128,"w":24,"h":350,"sort":477,"tag":"werkstatt","sx":1842,"sy":0},{"x":487,"y":289,"w":1,"h":27,"sort":477,"tag":"werkstatt","sx":1868,"sy":0},{"x":722,"y":664,"w":40,"h":184,"sort":848,"tag":"aufrecht","sx":1871,"sy":0},{"x":884,"y":663,"w":38,"h":185,"sort":848,"tag":"aufrecht","sx":1913,"sy":0},{"x":0,"y":780,"w":145,"h":120,"sort":892,"tag":"aufrecht","sx":0,"sy":472},{"x":60,"y":585,"w":150,"h":83,"sort":668,"tag":"aufrecht","sx":147,"sy":472},{"x":0,"y":655,"w":195,"h":160,"sort":815,"tag":"aufrecht","sx":299,"sy":472},{"x":0,"y":470,"w":75,"h":185,"sort":668,"tag":"aufrecht","sx":496,"sy":472},{"x":195,"y":690,"w":45,"h":115,"sort":805,"tag":"aufrecht","sx":573,"sy":472},{"x":1318,"y":641,"w":104,"h":7,"sort":648,"tag":"boden","sx":620,"sy":472},{"x":1265,"y":648,"w":157,"h":12,"sort":660,"tag":"boden","sx":726,"sy":472},{"x":195,"y":660,"w":1228,"h":12,"sort":672,"tag":"boden","sx":0,"sy":659},{"x":195,"y":672,"w":1228,"h":12,"sort":684,"tag":"boden","sx":0,"sy":673},{"x":195,"y":684,"w":1228,"h":12,"sort":696,"tag":"boden","sx":0,"sy":687},{"x":240,"y":696,"w":1183,"h":12,"sort":708,"tag":"boden","sx":0,"sy":701},{"x":240,"y":708,"w":1183,"h":12,"sort":720,"tag":"boden","sx":0,"sy":715},{"x":240,"y":720,"w":1183,"h":12,"sort":732,"tag":"boden","sx":0,"sy":729},{"x":240,"y":732,"w":1191,"h":12,"sort":744,"tag":"boden","sx":0,"sy":743},{"x":240,"y":744,"w":1207,"h":12,"sort":756,"tag":"boden","sx":0,"sy":757},{"x":240,"y":756,"w":1207,"h":12,"sort":768,"tag":"boden","sx":0,"sy":771},{"x":240,"y":768,"w":1206,"h":12,"sort":780,"tag":"boden","sx":0,"sy":785},{"x":240,"y":780,"w":1206,"h":12,"sort":792,"tag":"boden","sx":0,"sy":799},{"x":240,"y":792,"w":1205,"h":12,"sort":804,"tag":"boden","sx":0,"sy":813},{"x":145,"y":804,"w":1300,"h":12,"sort":816,"tag":"boden","sx":0,"sy":827},{"x":145,"y":816,"w":1287,"h":12,"sort":828,"tag":"boden","sx":0,"sy":841},{"x":145,"y":828,"w":1194,"h":12,"sort":840,"tag":"boden","sx":0,"sy":855},{"x":145,"y":840,"w":901,"h":12,"sort":852,"tag":"boden","sx":0,"sy":869},{"x":145,"y":852,"w":1422,"h":12,"sort":864,"tag":"boden","sx":0,"sy":883},{"x":145,"y":864,"w":1527,"h":12,"sort":876,"tag":"boden","sx":0,"sy":897},{"x":145,"y":876,"w":1527,"h":12,"sort":888,"tag":"boden","sx":0,"sy":911},{"x":145,"y":888,"w":1527,"h":12,"sort":900,"tag":"boden","sx":0,"sy":925},{"x":0,"y":900,"w":1672,"h":12,"sort":912,"tag":"boden","sx":0,"sy":939},{"x":0,"y":912,"w":1672,"h":12,"sort":924,"tag":"boden","sx":0,"sy":953},{"x":0,"y":924,"w":1672,"h":12,"sort":936,"tag":"boden","sx":0,"sy":967},{"x":0,"y":936,"w":1672,"h":5,"sort":948,"tag":"boden","sx":0,"sy":981}]',
  ),
  zi = [
    { x: 583, y: -1242, w: 114, h: 102, base: -1143, amp: 1.56, k: "pine", sx: 1445, sy: 1396 },
    { x: 1060, y: -1203, w: 50, h: 105, base: -1101, amp: 1.59, k: "pine", sx: 1190, sy: 1396 },
    { x: 436, y: -1098, w: 89, h: 58, base: -1043, amp: 1.12, k: "pine", sx: 1934, sy: 1575 },
    { x: 1165, y: -1060, w: 56, h: 105, base: -958, amp: 1.59, k: "pine", sx: 1242, sy: 1396 },
    { x: 1131, y: -1012, w: 57, h: 65, base: -950, amp: 1.19, k: "pine", sx: 1522, sy: 1575 },
    { x: 555, y: -1052, w: 79, h: 132, base: -923, amp: 1.8, k: "pine", sx: 899, sy: 1396 },
    { x: 621, y: -991, w: 58, h: 105, base: -889, amp: 1.59, k: "pine", sx: 1300, sy: 1396 },
    { x: 574, y: -917, w: 55, h: 59, base: -861, amp: 1.13, k: "pine", sx: 1814, sy: 1575 },
    { x: 511, y: -899, w: 52, h: 44, base: -858, amp: 0.98, k: "pine", sx: 644, sy: 1666 },
    { x: 929, y: -946, w: 267, h: 230, base: -719, amp: 1.8, k: "pine", sx: 764, sy: 1117 },
    { x: 1287, y: -775, w: 104, h: 181, base: -597, amp: 1.8, k: "pine", sx: 1838, sy: 1117 },
    { x: 358, y: -962, w: 201, h: 375, base: -590, amp: 1.8, k: "pine", sx: 1296, sy: 694 },
    { x: 616, y: -601, w: 65, h: 72, base: -532, amp: 1.26, k: "pine", sx: 1117, sy: 1575 },
    { x: 169, y: -578, w: 53, h: 58, base: -523, amp: 1.12, k: "pine", sx: 0, sy: 1666 },
    { x: 1120, y: -682, w: 160, h: 209, base: -476, amp: 1.8, k: "pine", sx: 1033, sy: 1117 },
    { x: 1544, y: -514, w: 54, h: 108, base: -409, amp: 1.62, k: "pine", sx: 1134, sy: 1396 },
    { x: 435, y: -499, w: 140, h: 150, base: -352, amp: 1.8, k: "pine", sx: 541, sy: 1396 },
    { x: 1084, y: -362, w: 59, h: 41, base: -324, amp: 0.95, k: "pine", sx: 840, sy: 1666 },
    { x: 318, y: -300, w: 45, h: 62, base: -241, amp: 1.16, k: "pine", sx: 1619, sy: 1575 },
    { x: 1242, y: -365, w: 176, h: 196, base: -172, amp: 1.8, k: "pine", sx: 1412, sy: 1117 },
    { x: 1401, y: -278, w: 97, h: 173, base: -108, amp: 1.8, k: "pine", sx: 258, sy: 1396 },
    { x: 1407, y: -645, w: 268, h: 550, base: -98, amp: 1.8, k: "pine", sx: 239, sy: 0 },
    { x: -3, y: -591, w: 492, h: 522, base: -72, amp: 1.8, k: "pine", sx: 1029, sy: 0 },
    { x: 918, y: -141, w: 39, h: 82, base: -62, amp: 1.36, k: "pine", sx: 438, sy: 1575 },
    { x: 417, y: -215, w: 107, h: 209, base: -9, amp: 1.8, k: "pine", sx: 1195, sy: 1117 },
    { x: 1314, y: -89, w: 88, h: 111, base: 19, amp: 1.65, k: "pine", sx: 1044, sy: 1396 },
    { x: 344, y: 27, w: 58, h: 41, base: 65, amp: 0.95, k: "pine", sx: 901, sy: 1666 },
    { x: 1418, y: -212, w: 213, h: 326, base: 111, amp: 1.8, k: "pine", sx: 1791, sy: 694 },
    { x: 1584, y: -7, w: 148, h: 177, base: 167, amp: 1.8, k: "pine", sx: 0, sy: 1396 },
    { x: 593, y: 157, w: 68, h: 43, base: 197, amp: 0.97, k: "pine", sx: 770, sy: 1666 },
    { x: 371, y: 14, w: 246, h: 187, base: 198, amp: 1.8, k: "pine", sx: 1590, sy: 1117 },
    { x: 1008, y: 70, w: 77, h: 144, base: 211, amp: 1.8, k: "pine", sx: 683, sy: 1396 },
    { x: 1062, y: 161, w: 44, h: 53, base: 211, amp: 1.07, k: "pine", sx: 334, sy: 1666 },
    { x: 1615, y: 163, w: 62, h: 53, base: 213, amp: 1.07, k: "pine", sx: 380, sy: 1666 },
    { x: -324, y: -117, w: 551, h: 377, base: 257, amp: 1.8, k: "pine", sx: 556, sy: 694 },
    { x: -324, y: 170, w: 106, h: 202, base: 369, amp: 1.8, k: "pine", sx: 1304, sy: 1117 },
    { x: 1120, y: 336, w: 82, h: 38, base: 371, amp: 0.92, k: "pine", sx: 986, sy: 1666 },
    { x: 1614, y: 258, w: 95, h: 151, base: 406, amp: 1.8, k: "pine", sx: 444, sy: 1396 },
    { x: -324, y: 463, w: 106, h: 175, base: 635, amp: 1.8, k: "pine", sx: 150, sy: 1396 },
    { x: -145, y: 310, w: 185, h: 376, base: 683, amp: 1.8, k: "pine", sx: 1109, sy: 694 },
    { x: 1759, y: -3, w: 237, h: 692, base: 686, amp: 1.8, k: "pine", sx: 0, sy: 0 },
    { x: -265, y: 645, w: 78, h: 61, base: 703, amp: 1.15, k: "pine", sx: 1702, sy: 1575 },
    { x: -324, y: 639, w: 85, h: 155, base: 791, amp: 1.8, k: "pine", sx: 357, sy: 1396 },
    { x: -75, y: 733, w: 30, h: 61, base: 791, amp: 1.1, k: "lupin", sx: 1782, sy: 1575 },
    { x: -100, y: 743, w: 29, h: 58, base: 798, amp: 1.1, k: "lupin", sx: 140, sy: 1666 },
    { x: -53, y: 721, w: 48, h: 86, base: 804, amp: 1.1, k: "lupin", sx: 186, sy: 1575 },
    { x: -110, y: 777, w: 70, h: 44, base: 818, amp: 0.98, k: "pine", sx: 698, sy: 1666 },
    { x: -42, y: 773, w: 45, h: 51, base: 821, amp: 1.05, k: "pine", sx: 505, sy: 1666 },
    { x: 1735, y: 812, w: 78, h: 38, base: 847, amp: 0.92, k: "pine", sx: 1070, sy: 1666 },
    { x: 1821, y: 702, w: 175, h: 242, base: 941, amp: 1.8, k: "pine", sx: 587, sy: 1117 },
    { x: -324, y: 844, w: 115, h: 100, base: 941, amp: 1.54, k: "pine", sx: 1634, sy: 1396 },
    { x: -3, y: 1002, w: 132, h: 264, base: 1263, amp: 1.8, k: "pine", sx: 211, sy: 1117 },
    { x: 8, y: 1243, w: 31, h: 80, base: 1320, amp: 1.1, k: "lupin", sx: 605, sy: 1575 },
    { x: 36, y: 1235, w: 43, h: 94, base: 1326, amp: 1.1, k: "lupin", sx: 1895, sy: 1396 },
    { x: 76, y: 1264, w: 29, h: 66, base: 1327, amp: 1.1, k: "lupin", sx: 1491, sy: 1575 },
    { x: 1192, y: 1019, w: 290, h: 333, base: 1349, amp: 1.8, k: "pine", sx: 1499, sy: 694 },
    { x: 1301, y: 1331, w: 27, h: 59, base: 1387, amp: 1.1, k: "lupin", sx: 1871, sy: 1575 },
    { x: 92, y: 1312, w: 94, h: 89, base: 1398, amp: 1.43, k: "pine", sx: 0, sy: 1575 },
    { x: -3, y: 1313, w: 88, h: 88, base: 1398, amp: 1.42, k: "pine", sx: 96, sy: 1575 },
    { x: 1264, y: 1317, w: 40, h: 86, base: 1400, amp: 1.1, k: "lupin", sx: 236, sy: 1575 },
    { x: 1216, y: 1371, w: 23, h: 41, base: 1409, amp: 1.1, k: "lupin", sx: 961, sy: 1666 },
    { x: 1233, y: 1341, w: 33, h: 79, base: 1417, amp: 1.1, k: "lupin", sx: 680, sy: 1575 },
    { x: 1298, y: 1329, w: 71, h: 101, base: 1427, amp: 1.55, k: "pine", sx: 1561, sy: 1396 },
    { x: 1189, y: 1393, w: 115, h: 85, base: 1475, amp: 1.39, k: "pine", sx: 278, sy: 1575 },
    { x: -3, y: 1509, w: 83, h: 103, base: 1609, amp: 1.57, k: "pine", sx: 1360, sy: 1396 },
    { x: 480, y: 1594, w: 39, h: 76, base: 1667, amp: 1.1, k: "lupin", sx: 777, sy: 1575 },
    { x: 395, y: 1634, w: 29, h: 53, base: 1684, amp: 1.1, k: "lupin", sx: 444, sy: 1666 },
    { x: 402, y: 1654, w: 101, h: 55, base: 1706, amp: 1.09, k: "pine", sx: 171, sy: 1666 },
    { x: 1333, y: 1674, w: 28, h: 55, base: 1726, amp: 1.1, k: "lupin", sx: 274, sy: 1666 },
    { x: 1300, y: 1673, w: 35, h: 67, base: 1737, amp: 1.1, k: "lupin", sx: 1318, sy: 1575 },
    { x: -3, y: 1617, w: 62, h: 125, base: 1739, amp: 1.79, k: "pine", sx: 980, sy: 1396 },
    { x: 1275, y: 1691, w: 28, h: 55, base: 1743, amp: 1.1, k: "lupin", sx: 304, sy: 1666 },
    { x: 1148, y: 1738, w: 38, h: 75, base: 1810, amp: 1.1, k: "lupin", sx: 1039, sy: 1575 },
    { x: 1115, y: 1741, w: 36, h: 74, base: 1812, amp: 1.1, k: "lupin", sx: 1079, sy: 1575 },
    { x: 1157, y: 1291, w: 518, h: 545, base: 1833, amp: 1.8, k: "pine", sx: 509, sy: 0 },
    { x: 1068, y: 1797, w: 94, h: 66, base: 1860, amp: 1.2, k: "pine", sx: 1395, sy: 1575 },
    { x: 1482, y: 1843, w: 32, h: 59, base: 1899, amp: 1.1, k: "lupin", sx: 1900, sy: 1575 },
    { x: 1434, y: 1822, w: 51, h: 81, base: 1900, amp: 1.1, k: "lupin", sx: 552, sy: 1575 },
    { x: 359, y: 1830, w: 40, h: 80, base: 1907, amp: 1.1, k: "lupin", sx: 638, sy: 1575 },
    { x: 396, y: 1843, w: 38, h: 67, base: 1907, amp: 1.1, k: "lupin", sx: 1355, sy: 1575 },
    { x: -3, y: 1874, w: 71, h: 81, base: 1952, amp: 1.35, k: "pine", sx: 479, sy: 1575 },
    { x: 1375, y: 1880, w: 138, h: 75, base: 1952, amp: 1.29, k: "pine", sx: 818, sy: 1575 },
    { x: 313, y: 1877, w: 93, h: 92, base: 1966, amp: 1.46, k: "pine", sx: 1940, sy: 1396 },
    { x: 1585, y: 1940, w: 90, h: 47, base: 1984, amp: 1.01, k: "pine", sx: 552, sy: 1666 },
    { x: 1295, y: 1916, w: 60, h: 78, base: 1991, amp: 1.1, k: "lupin", sx: 715, sy: 1575 },
    { x: 1275, y: 1979, w: 79, h: 75, base: 2051, amp: 1.29, k: "pine", sx: 958, sy: 1575 },
    { x: 1240, y: 2068, w: 83, h: 58, base: 2123, amp: 1.12, k: "pine", sx: 55, sy: 1666 },
    { x: 1113, y: 2005, w: 135, h: 141, base: 2143, amp: 1.8, k: "pine", sx: 762, sy: 1396 },
    { x: 1353, y: 2125, w: 36, h: 68, base: 2190, amp: 1.1, k: "lupin", sx: 1220, sy: 1575 },
    { x: 1319, y: 2141, w: 34, h: 62, base: 2200, amp: 1.1, k: "lupin", sx: 1666, sy: 1575 },
    { x: 96, y: 1949, w: 209, h: 277, base: 2223, amp: 1.8, k: "pine", sx: 0, sy: 1117 },
    { x: 403, y: 2154, w: 41, h: 85, base: 2236, amp: 1.1, k: "lupin", sx: 395, sy: 1575 },
    { x: 440, y: 2178, w: 34, h: 72, base: 2247, amp: 1.1, k: "lupin", sx: 1184, sy: 1575 },
    { x: 148, y: 2213, w: 58, h: 67, base: 2277, amp: 1.21, k: "pine", sx: 1258, sy: 1575 },
    { x: 343, y: 2211, w: 142, h: 96, base: 2304, amp: 1.5, k: "pine", sx: 1751, sy: 1396 },
    { x: 1182, y: 2247, w: 36, h: 64, base: 2308, amp: 1.1, k: "lupin", sx: 1581, sy: 1575 },
    { x: 1218, y: 2263, w: 28, h: 53, base: 2313, amp: 1.1, k: "lupin", sx: 475, sy: 1666 },
    { x: 1121, y: 1910, w: 554, h: 421, base: 2331, amp: 1.8, k: "pine", sx: 0, sy: 694 },
    { x: -3, y: 2074, w: 240, h: 257, base: 2331, amp: 1.8, k: "pine", sx: 345, sy: 1117 },
  ],
  Zi = { x: 223, y: 766, w: 1206, h: 175, frames: 24, cols: 2, loop: 2.4 },
  Li = { x: 218, y: 941, w: 204, h: 300, frames: 24, cols: 2, loop: 2.4 },
  yi = { w: ui, h: Oi, plate: Hi, occluders: fi, sway: zi, water: Zi, waterRun: Li },
  Ni = "__ASSET_95__",
  bi = "__ASSET_96__",
  vi = "__ASSET_97__",
  Xi = "__ASSET_98__",
  Ti = "__ASSET_99__",
  Pi = "__ASSET_100__",
  $i = "__ASSET_101__",
  _i = [
    {
      x: -145,
      y: 310,
      w: 250,
      h: 376,
      sort: 668,
      base: 683,
      amp: 1.8,
      k: "pine",
      swayX: -145,
      swayY: 310,
      sx: 0,
      sy: 0,
    },
  ],
  AC = "__ASSET_102__",
  gC = "__ASSET_103__",
  BC = 46,
  EC = _i,
  BA = yi,
  dB = {
    ground: Ni,
    water: bi,
    waterRun: vi,
    occ: Xi,
    occUnder: Ti,
    front: Pi,
    frontUnder: $i,
    smoke: AC,
    sway: gC,
  },
  kB = new Map();
let QB = !1,
  xB = 0;
function oC() {
  if (!(QB || typeof Image > "u")) {
    QB = !0;
    for (const [e, A] of Object.entries(dB)) {
      const g = new Image();
      (g.onload = g.onerror =
        () => {
          xB++;
        }),
        (g.src = A),
        kB.set(e, g);
    }
  }
}
function iC() {
  return oC(), xB >= Object.keys(dB).length;
}
const cA = (e) => kB.get(e);
function kg(e) {
  const A = Math.min(e.w / BA.w, e.h / BA.h);
  return e.hubZoomOverride ? Math.max(A, e.hubZoomOverride) : A;
}
function CC(e, A, g) {
  const B = e.game,
    E = e.w / g,
    o = e.h / g,
    i = B.hubPartner,
    I = e.hubCamPlate
      ? { x0: BA.plate.x, y0: BA.plate.y, x1: BA.plate.x + BA.plate.w, y1: BA.plate.y + BA.plate.h }
      : YA,
    C = i ? (B.player.x + i.x) / 2 : B.player.x,
    Q = i ? (B.player.y + i.y) / 2 : B.player.y,
    a = E >= I.x1 - I.x0 ? (I.x0 + I.x1) / 2 : V(C, I.x0 + E / 2, I.x1 - E / 2),
    t = o >= I.y1 - I.y0 ? (I.y0 + I.y1) / 2 : V(Q, I.y0 + o / 2, I.y1 - o / 2),
    h = e.hubZoomOverride ? Math.min(1, A * 7) : 1;
  (e.camX += (a - e.camX) * h), (e.camY += (t - e.camY) * h);
}
const L = { t: 0, puffs: [], acc: [0, 0], motes: [] };
function IC(e, A) {
  const g = e.c,
    B = kg(e),
    E = iC();
  e.hubArtLoaded = E;
  if (!E) {
    // Fix: statt der Debug-Blockout-Ansicht einen ruhigen Ladezustand zeigen
    (e.hubFade = 0), (g.fillStyle = "#14110d"), g.fillRect(0, 0, e.w, e.h);
    const t = (performance.now() / 1e3) % 1.2;
    (g.font = "700 18px Figtree, sans-serif"), (g.textAlign = "center"), (g.fillStyle = "#e8d9b8");
    g.fillText("Der Hof wird geladen" + ".".repeat(1 + Math.floor(t / 0.4)), e.w / 2, e.h / 2);
    return;
  }
  CC(e, A, B),
    (g.fillStyle = "#1d2a1c"),
    g.fillRect(0, 0, e.w, e.h),
    g.save(),
    g.scale(B, B),
    g.translate(e.w / B / 2 - e.camX, e.h / B / 2 - e.camY),
    QC(e, A),
    e.hubBlockout && eB(e, !0),
    g.restore(),
    MC(e);
  if ((e.hubFade ?? 1) < 1)
    (e.hubFade = Math.min(1, (e.hubFade || 0) + Math.min(0.05, A) * 3)),
      (g.fillStyle = `rgba(20,17,13,${1 - e.hubFade})`),
      g.fillRect(0, 0, e.w, e.h);
}
typeof window < "u" && setTimeout(oC, 0);
function Mg(e, A, g, B, E = 26, o = "#fff6e0") {
  (e.font = `800 ${E}px Figtree, sans-serif`),
    (e.textAlign = "center"),
    (e.lineWidth = 6),
    (e.strokeStyle = "#16120e"),
    e.strokeText(A, g, B),
    (e.fillStyle = o),
    e.fillText(A, g, B);
}
function eB(e, A) {
  const g = e.c,
    B = e.game;
  A
    ? ((g.fillStyle = "#00000055"), g.fillRect(YA.x0, YA.y0, YA.x1, YA.y1))
    : ((g.fillStyle = "#3f4a35"), g.fillRect(YA.x0, YA.y0, YA.x1, YA.y1)),
    g.beginPath(),
    FB.forEach(([E, o], i) => (i ? g.lineTo(E, o) : g.moveTo(E, o))),
    g.closePath(),
    (g.fillStyle = A ? "#ffe9b22e" : "#b9ad93"),
    g.fill(),
    (g.strokeStyle = "#ffd36a"),
    (g.lineWidth = 4),
    g.setLineDash([14, 10]),
    g.stroke(),
    g.setLineDash([]);
  for (const E of yA)
    (g.fillStyle = E.id === B.hubNear ? "#e09a3a66" : "#e09a3a33"),
      (g.strokeStyle = "#e09a3a"),
      (g.lineWidth = 3),
      g.beginPath(),
      g.arc(E.x, E.y, E.r, 0, Math.PI * 2),
      g.fill(),
      g.stroke(),
      E.walkIn &&
        ((g.fillStyle = "#ff6a4a66"),
        g.fillRect(E.walkIn.x0, E.walkIn.y0, E.walkIn.x1 - E.walkIn.x0, E.walkIn.y1 - E.walkIn.y0)),
      Mg(
        g,
        E.id === "tor"
          ? "BRÜCKE ↓ Einsatz"
          : E.id === "werkstatt"
            ? "WERKSTATT → Talente"
            : "UNTERKUNFT → Helden",
        E.x,
        E.y - E.r - 8,
        24,
      );
  if (
    (Mg(g, "SPAWN", Rg.x, Rg.y + 30, 20, "#9fe3ff"), Mg(g, "Seilbahn (Kulisse)", 835, 250, 22, "#d8d8d8"), A)
  )
    for (const E of BA.occluders)
      E.tag !== "boden" &&
        ((g.strokeStyle = "#7fd0ff"),
        (g.lineWidth = 2),
        g.strokeRect(E.x, E.y, E.w, E.h),
        g.beginPath(),
        g.moveTo(E.x, E.sort),
        g.lineTo(E.x + E.w, E.sort),
        (g.strokeStyle = "#ff5fd0"),
        g.stroke());
  A ||
    e.player(
      B.player.x,
      B.player.y,
      B.character,
      B.player.walk,
      Math.hypot(B.player.vx, B.player.vy) > 1,
      !1,
      B.player.face,
      B.player.moveBlend,
    );
}
function QC(e, A) {
  const g = e.c,
    B = e.game,
    E = B.player;
  (L.t += Math.min(0.05, A)), (g.imageSmoothingEnabled = !0), (g.imageSmoothingQuality = "high");
  const o = BA.plate;
  g.drawImage(cA("ground"), o.x, o.y, o.w, o.h);
  for (const [r, Y] of [
    [BA.water, cA("water")],
    [BA.waterRun, cA("waterRun")],
  ]) {
    const c = ((L.t / r.loop) % 1) * r.frames,
      R = Math.floor(c) % r.frames,
      G = (R + 1) % r.frames,
      n = c - Math.floor(c),
      D = (k, l) => {
        (g.globalAlpha = l),
          g.drawImage(Y, (k % r.cols) * r.w, Math.floor(k / r.cols) * r.h, r.w, r.h, r.x, r.y, r.w, r.h);
      };
    D(R, 1), D(G, n);
  }
  g.globalAlpha = 1;
  const i = !B.save.data.settings.reducedMotion;
  i && sC(e);
  for (const r of yA) r.mark && tC(g, r.mark.x, r.mark.y, r.id === B.hubNear, L.t);
  const I = B.hubPartner,
    C = [
      {
        y: E.y,
        draw: () =>
          e.player(E.x, E.y, B.character, E.walk, Math.hypot(E.vx, E.vy) > 1, !1, E.face, E.moveBlend),
        x: E.x,
        tag: I ? 0 : -1,
      },
      ...(I ? [{ y: I.y, draw: () => lC(e, I), x: I.x, tag: 1 }] : []),
    ].sort((r, Y) => r.y - Y.y),
    Q = cA("occ"),
    a = cA("front"),
    t = C.map((r) => {
      const Y = r.y + wA,
        c = xA,
        R = Y - BC,
        G = r.x - c - 2,
        n = r.x + c + 2,
        D = Math.min(Y - 150, R - c - 2),
        k = Math.max(Y + 14, R + c + 2),
        l = [],
        w = [];
      let q = 0;
      if (!e.hubNoOcc) {
        for (const S of EC)
          S.sort <= Y + 2 ||
            S.x > n ||
            S.x + S.w < G ||
            S.y > k ||
            S.y + S.h < D ||
            (w.push(S),
            Lg(r.x, Y, 84, 24, S.x, S.y, S.w, S.h) &&
              (q += qg(a, S.sx, S.sy, S.w, S.h, S.x, S.y, S.w, S.h, r.x, Y, 84, 24)));
        for (const S of BA.occluders) {
          if (S.sort <= Y + 2) continue;
          const VA = Math.max(S.x, G),
            oA = Math.min(S.x + S.w, n),
            bA = Math.max(S.y, D),
            ug = Math.min(S.y + S.h, k);
          oA <= VA ||
            ug <= bA ||
            (l.push([S.sx + (VA - S.x), S.sy + (bA - S.y), oA - VA, ug - bA, VA, bA]),
            Lg(r.x, Y, 84, 24, S.x, S.y, S.w, S.h) &&
              (q += qg(Q, S.sx, S.sy, S.w, S.h, S.x, S.y, S.w, S.h, r.x, Y, 84, 24)));
        }
      }
      const m = !e.hubNoCut && wB(q, 84, 24) ? { x: r.x, y: R, r: c } : null;
      return { h: r, pieces: l, sways: w, hole: m, box: [G, D, n - G, k - D] };
    }),
    h = cA("occUnder"),
    s = cA("frontUnder");
  if (!e.hubNoUnder && h?.complete && s?.complete)
    for (const r of t)
      r.hole &&
        GB(g, [r.hole], (Y) => {
          for (const c of r.sways) Y.drawImage(s, c.sx, c.sy, c.w, c.h, c.x, c.y, c.w, c.h);
          for (const [c, R, G, n, D, k] of r.pieces) Y.drawImage(h, c, R, G, n, D, k, G, n);
        });
  const U = [];
  e.hubCut = 0;
  for (const r of t) {
    if ((r.h.draw(), r.hole && U.push(r.hole), !r.pieces.length && !r.sways.length)) continue;
    const [Y, c, R, G] = r.box,
      n = (D) => {
        if (r.sways.length) {
          D.save(), D.beginPath(), D.rect(Y, c, R, G), D.clip();
          for (const k of r.sways) eC(D, a, k, i ? JB({ ...k, x: k.swayX }) : 0);
          D.restore();
        }
        for (const [k, l, w, q, m, S] of r.pieces) D.drawImage(Q, k, l, w, q, m, S, w, q);
      };
    RB(g, r.box[0], r.box[1], r.box[2], r.box[3], U, n) && e.hubCut++;
  }
  if (I) {
    for (const r of C) hC(g, r.tag === 1 ? "P2" : "P1", r.x, r.y - 66, r.tag === 1 ? "#b6cff4" : "#edce91");
    I.spawn > 0 && UC(g, I);
  }
  const M = cA("smoke");
  $B.forEach((r, Y) => {
    for (L.acc[Y] += Math.min(0.05, A) * 1.6; L.acc[Y] >= 1; )
      (L.acc[Y] -= 1),
        L.puffs.push({
          x: r.x + (Math.random() - 0.5) * 8,
          y: r.y,
          vx: 6 + Math.random() * 8,
          vy: -20 - Math.random() * 10,
          age: 0,
          life: 4 + Math.random() * 2,
          size: 22 + Math.random() * 10,
          a: Math.random() * 6.28,
        });
  });
  for (const r of L.puffs)
    (r.age += Math.min(0.05, A)),
      (r.x += r.vx * Math.min(0.05, A)),
      (r.y += r.vy * Math.min(0.05, A)),
      (r.a += 0.2 * Math.min(0.05, A));
  L.puffs = L.puffs.filter((r) => r.age < r.life && r.y > -40).slice(-40);
  for (const r of L.puffs) {
    const Y = r.age / r.life,
      c = r.size * (0.6 + Y * 1.8);
    g.save(),
      (g.globalAlpha = Math.sin(Math.PI * Math.min(1, Y * 1.1)) * 0.22),
      g.translate(r.x, r.y),
      g.rotate(r.a),
      g.drawImage(M, -c / 2, -c / 2, c, c),
      g.restore();
  }
  i && B.save.data.settings.particles > 0 && YC(e, Math.min(0.05, A));
}
function JB(e) {
  const A = L.t,
    g = 0.65 + 0.35 * Math.sin(A * 0.37 - e.x * 0.002) + 0.2 * Math.sin(A * 0.91 + e.base * 0.01);
  return e.amp * g * Math.sin(A * (e.k === "pine" ? 1.25 : 2.1) - e.x * 0.006 + e.base * 0.003);
}
function eC(e, A, g, B) {
  const E = g.base - g.swayY || 1;
  e.save(),
    e.setTransform(
      e
        .getTransform()
        .translate(g.x, g.base)
        .multiply(new DOMMatrix([1, 0, -B / E, 1, 0, 0])),
    ),
    e.drawImage(A, g.sx, g.sy, g.w, g.h, 0, g.y - g.base, g.w, g.h),
    e.restore();
}
function aC(e, A, g, B) {
  const E = g.base - g.y || 1;
  e.save(),
    e.setTransform(
      e
        .getTransform()
        .translate(g.x, g.base)
        .multiply(new DOMMatrix([1, 0, -B / E, 1, 0, 0])),
    ),
    e.drawImage(A, g.sx, g.sy, g.w, g.h, 0, g.y - g.base, g.w, g.h),
    e.restore();
}
function sC(e) {
  const A = e.c,
    g = cA("sway"),
    B = kg(e),
    E = e.w / B / 2 + 40,
    o = e.h / B / 2 + 40;
  for (const i of BA.sway)
    i.x > e.camX + E ||
      i.x + i.w < e.camX - E ||
      i.y > e.camY + o ||
      i.y + i.h < e.camY - o ||
      aC(A, g, i, JB(i));
}
function tC(e, A, g, B, E) {
  const o = B ? 1 + 0.035 * Math.sin(E * 4.2) : 1,
    i = 50 * o,
    I = 19 * o;
  e.save(),
    (e.globalAlpha = 0.28),
    (e.fillStyle = "#4a3320"),
    e.beginPath(),
    e.ellipse(A + 2, g + 3, i + 6, I + 4, 0, 0, Math.PI * 2),
    e.fill(),
    (e.globalAlpha = B ? 0.98 : 0.86);
  const C = e.createLinearGradient(A - i, g - I, A + i, g + I);
  C.addColorStop(0, B ? "#fff6dc" : "#f7ead0"),
    C.addColorStop(0.55, B ? "#f4d79a" : "#e6d2a8"),
    C.addColorStop(1, B ? "#d9a85a" : "#c7ad83"),
    (e.fillStyle = C),
    e.beginPath(),
    e.ellipse(A, g, i, I, 0, 0, Math.PI * 2),
    e.ellipse(A, g, i - 9, I - 5, 0, 0, Math.PI * 2, !0),
    e.fill("evenodd"),
    (e.globalAlpha = B ? 0.95 : 0.8),
    (e.strokeStyle = "#3b2a1b"),
    (e.lineWidth = 2.4),
    e.beginPath(),
    e.ellipse(A, g, i, I, 0, 0, Math.PI * 2),
    e.stroke(),
    (e.lineWidth = 1.6),
    e.beginPath(),
    e.ellipse(A, g, i - 9, I - 5, 0, 0, Math.PI * 2),
    e.stroke();
  const Q = 10,
    a = B ? E * 0.6 : 0;
  e.fillStyle = "#6b4a2b";
  for (let t = 0; t < Q; t++) {
    const h = a + (t / Q) * Math.PI * 2;
    e.beginPath(),
      e.ellipse(A + Math.cos(h) * (i - 4.5), g + Math.sin(h) * (I - 2.5), 2.2, 1.3, 0, 0, Math.PI * 2),
      e.fill();
  }
  B &&
    ((e.globalAlpha = 0.22 + 0.08 * Math.sin(E * 4.2)),
    (e.fillStyle = "#fff1c4"),
    e.beginPath(),
    e.ellipse(A, g, i - 10, I - 6, 0, 0, Math.PI * 2),
    e.fill()),
    e.restore();
}
function hC(e, A, g, B, E) {
  e.save(),
    (e.font = "800 13px Figtree, sans-serif"),
    (e.textAlign = "center"),
    (e.lineWidth = 4),
    (e.strokeStyle = "#1f1710"),
    e.strokeText(A, g, B),
    (e.fillStyle = E),
    e.fillText(A, g, B),
    e.restore();
}
function lC(e, A) {
  const g = e.c,
    B = 1 - A.spawn / 0.9;
  if (A.spawn <= 0) {
    e.player(A.x, A.y, A.hero, A.walk, Math.hypot(A.vx, A.vy) > 1, !1, A.face, A.moveBlend);
    return;
  }
  const E = V(B / 0.55, 0, 1),
    o = V((B - 0.55) / 0.45, 0, 1),
    i = -150 * (1 - E) ** 2,
    I = o > 0 ? 1 - 0.18 * Math.sin(o * Math.PI) : 1,
    C = A.y + wA;
  g.save(),
    (g.globalAlpha = 0.25 * E),
    (g.fillStyle = "#2a1d12"),
    g.beginPath(),
    g.ellipse(A.x, C + 2, 20 * (0.5 + E * 0.5), 7 * (0.5 + E * 0.5), 0, 0, Math.PI * 2),
    g.fill(),
    (g.globalAlpha = Math.min(1, E * 1.6)),
    g.translate(A.x, C),
    g.scale(1 / I, I),
    g.translate(-A.x, -C),
    e.player(A.x, A.y + i, A.hero, 0, !1, !1, A.face, 0),
    g.restore();
}
function UC(e, A) {
  const g = 1 - A.spawn / 0.9,
    B = V((g - 0.55) / 0.45, 0, 1);
  if (B <= 0) return;
  const E = A.y + wA;
  e.save(),
    (e.globalAlpha = 0.6 * (1 - B)),
    (e.strokeStyle = "#fff4d8"),
    (e.lineWidth = 3),
    e.beginPath(),
    e.ellipse(A.x, E, 20 + 46 * B, 7 + 16 * B, 0, 0, Math.PI * 2),
    e.stroke(),
    (e.fillStyle = "#e9dcc0");
  for (let o = 0; o < 7; o++) {
    const i = (o / 7) * Math.PI * 2 + 0.3,
      I = 14 + 40 * B;
    (e.globalAlpha = 0.45 * (1 - B)),
      e.beginPath(),
      e.arc(A.x + Math.cos(i) * I, E + Math.sin(i) * I * 0.35 - 4 * B, 5 + 4 * B, 0, Math.PI * 2),
      e.fill();
  }
  e.restore();
}
// t105u: gemeinsame Bühne in Konzept-Koordinaten (1280 × 720, hoch: 390 breit) für Menü / HUD / Levelaufstieg.
function nsStage() {
  const vw = innerWidth || 1280,
    vh = innerHeight || 720,
    portrait = vw <= 600 && vh > vw;
  let k, W, H;
  portrait ? ((k = vw / 390), (W = 390), (H = vh / k)) : ((k = Math.min(vw / 1280, vh / 720)), (W = vw / k), (H = vh / k));
  // q: Hochformat mit wenig Höhe (iPhone SE) rückt Held + Menü nach oben
  const q = portrait ? Math.max(0, Math.min(120, 766 - H)) : 0;
  return { k, W, H, q, ox: portrait ? 0 : (W - 1280) / 2, oy: portrait ? 0 : (H - 720) / 2, portrait, flat: !portrait && vh < 560, vw, vh };
}
// t101u: Hof-Partikel = feiner Staub im Sonnenlicht (weich, leicht hell, schwebt und driftet langsam, glimmt sanft auf).
// Größe und Tempo in Bildschirm-Pixeln, damit der Staub bei jeder Zoomstufe gleich groß wirkt.
let hofGlow;
function hofGlowSprite() {
  if (hofGlow || typeof document > "u") return hofGlow;
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const x = c.getContext("2d"),
    r = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, "rgba(255,250,232,1)"), r.addColorStop(0.18, "rgba(255,238,200,0.85)"), r.addColorStop(0.45, "rgba(255,226,170,0.25)"), r.addColorStop(1, "rgba(255,220,160,0)");
  return (x.fillStyle = r), x.fillRect(0, 0, 64, 64), (hofGlow = c);
}
function YC(e, A) {
  const g = e.c,
    B = e.game,
    E = kg(e),
    sp = 1 / E,
    o = e.w / E / 2,
    i = e.h / E / 2,
    I = Math.round((B.mobile ? 55 : 85) * Math.min(1, B.save.data.settings.particles)),
    C = e.camX - o,
    Q = e.camX + o,
    a = e.camY - i,
    t = e.camY + i,
    glow = hofGlowSprite();
  if (!glow) return;
  for (; L.motes.length < I; )
    L.motes.push({
      x: C + Math.random() * (Q - C),
      y: a + Math.random() * (t - a),
      vx: 3 + Math.random() * 7,
      vy: -1.5 - Math.random() * 3,
      ph: Math.random() * 6.28,
      tw: 0.25 + Math.random() * 0.5,
      size: 2 + Math.random() * 2,
      far: Math.random() < 0.3,
    });
  L.motes.length > I && (L.motes.length = I);
  const gust = 1 + 0.35 * Math.sin(L.t * 0.21);
  g.save();
  for (const s of L.motes) {
    (s.ph += A),
      (s.x += (s.vx * gust + Math.sin(s.ph * 0.7) * 5 + Math.sin(s.ph * 1.9) * 2) * sp * A),
      (s.y += (s.vy + Math.cos(s.ph * 0.55) * 4) * sp * A),
      s.x > Q + 20 * sp && (s.x = C - 16 * sp),
      s.x < C - 22 * sp && (s.x = Q + 14 * sp),
      s.y < a - 20 * sp && (s.y = t + 14 * sp),
      s.y > t + 22 * sp && (s.y = a - 14 * sp);
    // sanftes Aufglimmen, wenn das Korn durchs Sonnenlicht dreht
    const lit = Math.max(0, Math.sin(s.ph * s.tw)) ** 6,
      R = s.size * sp * 1.3 * (s.far ? 0.75 : 1),
      k = R * (3.2 + lit * 2.4);
    // ganz weicher dunkler Hof, damit das helle Korn auch auf hellem Pflaster lesbar bleibt
    (g.globalCompositeOperation = "source-over"), (g.globalAlpha = s.far ? 0.07 : 0.12), (g.fillStyle = "#3a2a18"), g.beginPath(), g.arc(s.x, s.y + R * 0.3, R * 1.9, 0, Math.PI * 2), g.fill();
    (g.globalCompositeOperation = "lighter"), (g.globalAlpha = (s.far ? 0.36 : 0.55) + lit * 0.45), g.drawImage(glow, s.x - k, s.y - k, k * 2, k * 2);
    (g.globalCompositeOperation = "source-over"), (g.globalAlpha = (s.far ? 0.55 : 0.82) + lit * 0.18), (g.fillStyle = "#fffaf0"), g.beginPath(), g.arc(s.x, s.y, R * 0.55, 0, Math.PI * 2), g.fill();
  }
  g.restore();
}
function MC(e) {
  const A = e.game;
  if (A.hubReturn <= 0 || !A.hubWelcome) return;
  const g = e.c,
    B = A.hubReturn,
    E = Math.min(1, B / 0.8) * Math.min(1, (3.2 - B) / 0.4 + 0.2),
    o = e.scale || 1,
    i = innerWidth;
  let I = A.hubWelcome;
  let C = V(i * 0.045, 40, 68);
  g.save(), (g.globalAlpha = V(E, 0, 1));
  const Q = (l) => `900 ${l / o}px "Barlow Condensed", Sora, sans-serif`;
  I = I.toUpperCase();
  g.font = Q(C);
  const a = (i - 56) / o,
    t = C * 0.62,
    h = C * 0.34;
  let s = g.measureText(I).width;
  s + (t * 2) / o > a && ((C *= a / (s + (t * 2) / o)), (g.font = Q(C)), (s = g.measureText(I).width));
  const U = (C + h * 2) / o,
    M = s + (t * 2) / o,
    r = e.w / 2,
    Y = [...document.querySelectorAll(".hub-hud .hub-place, .hub-hud .hub-join, .hub-hud .hub-actions")]
      .map((l) => l.getBoundingClientRect())
      .filter((l) => l.height && l.bottom < innerHeight * 0.5),
    c = i / 2 - (M * o) / 2 - 12,
    R = i / 2 + (M * o) / 2 + 12,
    k =
      ((Y.every((l) => l.right < c || l.left > R) ? 16 - 18 : Math.max(16, ...Y.map((l) => l.bottom))) + 18) /
      o;
  {
    // Industrial Noir: abgeschrägte Stahlplatte mit Orange-Kante
    const x0 = r - M / 2, cut = 10 / o;
    (g.fillStyle = "rgba(16, 18, 21, 0.86)"),
      (g.strokeStyle = "rgba(255, 255, 255, 0.12)"),
      (g.lineWidth = 1 / o),
      g.beginPath(),
      g.moveTo(x0 + cut, k),
      g.lineTo(x0 + M, k),
      g.lineTo(x0 + M, k + U - cut),
      g.lineTo(x0 + M - cut, k + U),
      g.lineTo(x0, k + U),
      g.lineTo(x0, k + cut),
      g.closePath(),
      g.fill(),
      g.stroke(),
      (g.fillStyle = "#ff7a1a"),
      g.fillRect(x0 + M * 0.3, k + U - 3 / o, M * 0.4, 3 / o);
  }
    (g.textAlign = "center"),
    (g.textBaseline = "middle"),
    (g.lineJoin = "round"),
    (g.shadowColor = "rgba(0, 0, 0, 0.55)"),
    (g.shadowBlur = 4 / o),
    (g.shadowOffsetY = 2 / o),
    (g.lineWidth = 6 / o),
    (g.strokeStyle = "#0b0c0e"),
    g.strokeText(I, r, k + U / 2 + (C * 0.04) / o),
    (g.shadowColor = "transparent"),
    (g.fillStyle = "#ffffff"),
    g.fillText(I, r, k + U / 2 + (C * 0.04) / o),
    g.restore(),
    (e.hubBeatBox = { x: r - M / 2, y: k, w: M, h: U, px: C });
}
const cC = 14,
  aB = 0,
  sB = [
    [-430, -330],
    [420, -300],
    [-520, 150],
    [560, 120],
    [-260, 430],
    [300, 450],
    [40, -470],
  ].map(([e, A], g) => ({
    x: e,
    y: A,
    r: 36 + (g % 3) * 8,
    h: 42 + (g % 3) * 22,
    kind: 0,
    color: "#bd874d",
    light: "#ffcb79",
  }));
class FC {
  constructor(A, g) {
    (this.canvas = A),
      (this.game = g),
      (this.c = A.getContext("2d", { alpha: !1 })),
      d.warm(),
      this.resize(),
      window.addEventListener("resize", () => this.resize());
  }
  canvas;
  game;
  get fxFlashes() {
    return this.game.save.data.settings.reducedMotion ? 0 : this.game.save.data.settings.flashes;
  }
  dangerPattern;
  c;
  w = 1280;
  h = 720;
  dpr = 1;
  scale = 1;
  viewIndex = 0;
  viewportKey = "";
  get viewport() {
    return { x: 0, y: 0, width: innerWidth, height: innerHeight };
  }
  coopFit = 1;
  hubNoOcc = !1;
  hubNoCut = !1;
  hubNoUnder = !1;
  noCut = !1;
  noCoverSprites = !1;
  hubCut = 0;
  arenaCut = 0;
  hubBeatBox;
  camX = 0;
  camY = 0;
  mode = "menu";
  uiTheme = "a";
  menuHome = !0;
  hubBlockout = !1;
  hubArtLoaded = !1;
  hubZoomOverride = 0;
  hubCamPlate = !1;
  selected = 0;
  fps = 60;
  frameMs = 0;
  frameTimes = [];
  menuWeapon = "pistol";
  menuCache = null;
  menuCacheKey = "";
  floorCaches = new Map();
  vignette;
  flashOverlay;
  resize() {
    const A = this.viewport,
      g = A.width,
      B = A.height;
    (this.viewportKey = [A.x, A.y, g, B, this.mode].join(":")),
      Object.assign(this.canvas.style, {
        position: "fixed",
        left: A.x + "px",
        top: A.y + "px",
        width: g + "px",
        height: B + "px",
      });
    const E = matchMedia("(pointer:coarse)").matches;
    (this.game.mobile = E),
      (this.dpr = this.targetDpr),
      (this.canvas.width = Math.round(g * this.dpr)),
      (this.canvas.height = Math.round(B * this.dpr)),
      (this.scale = B > g ? g / 650 : Math.min(g / 1120, B / 680)),
      (this.w = g / this.scale),
      (this.h = B / this.scale);
    const o = (this.vignette = document.createElement("canvas"));
    (o.width = g), (o.height = B);
    const i = o.getContext("2d"),
      I = i.createRadialGradient(
        o.width / 2,
        o.height / 2,
        o.height * 0.15,
        o.width / 2,
        o.height / 2,
        o.width * 0.7,
      );
    I.addColorStop(0, "#0a152100"),
      I.addColorStop(1, "#07121b88"),
      (i.fillStyle = I),
      i.fillRect(0, 0, o.width, o.height);
    const C = (this.flashOverlay = document.createElement("canvas"));
    (C.width = g), (C.height = B);
    const Q = C.getContext("2d"),
      a = Q.createRadialGradient(
        C.width / 2,
        C.height / 2,
        C.height * 0.27,
        C.width / 2,
        C.height / 2,
        C.width * 0.68,
      );
    a.addColorStop(0, "#ffdfb800"),
      a.addColorStop(0.55, "#ffdfb800"),
      a.addColorStop(1, "#ffdfb877"),
      (Q.fillStyle = a),
      Q.fillRect(0, 0, C.width, C.height);
  }
  get targetDpr() {
    if (this.mode === "menu") return devicePixelRatio || 1;
    const A = this.game.save.data.settings.quality;
    return A === "low"
      ? this.game.coop
        ? 0.62
        : 0.75
      : A === "high"
        ? Math.min(2, devicePixelRatio || 1)
        : this.game.coop && this.game.enemies.count > 180
          ? this.game.enemies.count > 320
            ? 0.52
            : 0.6
          : this.game.enemies.count > 520
            ? 0.54
            : this.game.enemies.count > 320
              ? 0.6
              : this.game.enemies.count > 180
                ? 0.9
                : this.game.mobile
                  ? Math.min(1.2, devicePixelRatio || 1)
                  : Math.min(1.5, devicePixelRatio || 1);
  }
  get baseZoom() {
    const A = this.game.save.data.settings.cameraZoom;
    return (
      (Number.isFinite(A) ? V(A, 0.6, 1.2) : 0.75) *
      (this.game.coop && this.game.phase !== "hub" ? this.coopFit : 1)
    );
  }
  get paintedPlate() {
    const A = this.game;
    return this.mode !== "menu" && A.phase !== "hub" && !A.climbState.active ? cB(A.map) : void 0;
  }
  get cameraZoom() {
    const A = this.baseZoom,
      g = this.paintedPlate;
    return g ? Math.max(A, this.w / (g.w - 4), this.h / (g.h - 4)) : A;
  }
  get viewWidth() {
    return this.w / this.cameraZoom;
  }
  get viewHeight() {
    return this.h / this.cameraZoom;
  }
  worldMouse(A, g) {
    return {
      x: (A - this.viewport.x) / (this.scale * this.cameraZoom) - this.viewWidth / 2 + this.camX,
      y: (g - this.viewport.y) / (this.scale * this.cameraZoom) - this.viewHeight / 2 + this.camY,
    };
  }
  previewFace = 1;
  player(A, g, B, E, o = !1, i = !1, I = 1, C = o ? 1 : 0) {
    const Q = this.c,
      a = new X(Q);
    if ((Q.save(), Q.translate(A, g), this.game.phase === "defeat")) {
      const r = V((this.game.time - this.game.deathAt) / 0.7, 0, 1);
      Q.rotate(r * 1.15), Q.scale(1 - r * 0.2, 1 - r * 0.28), (Q.globalAlpha *= 1 - r * 0.35);
    }
    if (
      (this.mode === "game" && (Q.translate(0, 32), Q.scale(0.85, 0.85), Q.translate(0, -32)),
      d.hasPainted("hero-" + B))
    ) {
      const r = $A[B],
        Y = this.game.save.data.settings.reducedMotion ? 0 : 1,
        c = Math.sin(this.game.time * 1.7 + B * 0.2) * 0.012 * Y;
      (Q.imageSmoothingEnabled = !0),
        (Q.imageSmoothingQuality = "high"),
        Q.translate(0, 32),
        Q.scale(I < 0 ? -1 : 1, 1 - c * (1 - C)),
        Q.translate(0, -32);
      const R = Math.min(100 / r.maxHeight, 86 / r.maxWidth),
        G = -r.anchor[0] * R,
        n = 32 - r.anchor[1] * R,
        D = r.cell * R,
        k = r.cell * R,
        l = $g(E),
        w = Q.globalAlpha,
        q = (m, S) => {
          if (S <= 0) return;
          const VA = d.heroSource(B, !1, !1, m);
          (Q.globalAlpha = w * S),
            Q.drawImage(VA, G, n, D, k),
            i &&
              Y &&
              this.fxFlashes > 0 &&
              ((Q.globalAlpha = w * S * 0.35 * this.fxFlashes),
              Q.drawImage(d.heroSource(B, !1, !0, m), G, n, D, k));
        };
      q(0, 1 - C), q(l, C), Q.restore();
      return;
    }
    const t = o ? Math.sin(E) * 4 : 0,
      h = Math.sin(E * 1.7) * 0.012;
    Q.rotate(o ? Math.sin(E) * 0.035 : Math.sin(E * 0.9) * 0.018);
    for (let r = 0; r < 2; r++)
      a.rect(
        r ? 5 : -21,
        25 + (r ? t : -t),
        17,
        11,
        5,
        a.grad(B === 1 ? "#97c5bf" : "#aa8e8e", "#3e4d62"),
        F,
        2.5,
      ),
        a.line(r ? 9 : -18, 31 + (r ? t : -t), r ? 16 : -11, 31 + (r ? t : -t), "#dbd2b7", 1);
    Q.scale(1 + h, 1 - h),
      Q.translate(0, o ? Math.abs(Math.sin(E)) * -2 : Math.sin(E * 1.7)),
      a.ellipse(-26, 12 - t * 0.35, 7, 9, a.grad("#c7b0a0", "#6c7580"), F, 2.5),
      a.ellipse(26, 12 + t * 0.35, 7, 9, a.grad("#c7b0a0", "#6c7580"), F, 2.5),
      d.image(Q, d.player(B));
    const s = B === 1 ? -9 : B === 2 ? 3 : -1,
      U = I * 1.5,
      M = Math.sin(E * 0.7 + B) > 0.987;
    a.eye(-7 + U, s, B === 1 ? "#a6d9ff" : "#fff0cb", !1, M, 3.5),
      a.eye(8 + U, s, B === 1 ? "#a6d9ff" : "#fff0cb", !1, M, 3.5),
      i &&
        !this.game.save.data.settings.reducedMotion &&
        this.fxFlashes > 0 &&
        ((Q.globalAlpha = 0.2 * this.fxFlashes), a.ellipse(0, 0, 25, 26, "#ffffff", F, 0)),
      Q.restore();
  }
  weapon(A, g, B, E, o = 1, i = zA(A.id)) {
    const I = this.c,
      C = new X(I),
      Q = j.find((h) => h.id === A.id);
    I.save(), (I.globalAlpha = o), I.translate(g, B);
    const a = ig(A),
      t = jA(A.id).upright;
    if (
      (I.rotate(nB(A.id, E, A.kick, a)),
      I.scale(i * (t ? a : 1), i * (t ? 1 : a)),
      (I.imageSmoothingEnabled = !0),
      (I.imageSmoothingQuality = "high"),
      A.glow > 0 &&
        ((I.globalAlpha = o * Math.min(1, A.glow) * this.fxFlashes),
        C.ellipse(10, 0, 40, 34, "#ffffff08", SA[A.tier], 2),
        (I.globalAlpha = o)),
      A.mutation && C.ellipse(10, 0, 25, 20, "#c79bef15", F, 0),
      A.id === "fork")
    ) {
      const h = this.forkFrame(A);
      if ((this.forkFramesDrawn[h]++, (h === 1 || h === 2) && this.fxFlashes > 0)) {
        const s = jA("fork");
        I.save(), (I.globalCompositeOperation = "lighter"), (I.globalAlpha = o * (h === 2 ? 0.75 : 0.4));
        const U = dA("#7fe9ff"),
          M = h === 2 ? 34 : 24;
        I.drawImage(U, s.muzzleX - M / 2 - 6, s.muzzleY - M / 2, M, M), I.restore();
      }
      d.image(I, d.forkFrame(h));
    } else d.image(I, A.id === "saw" ? d.sawFrame(this.game.time * 2.6) : d.weapon(A.id));
    if (
      (A.mutation === "Dornsalve" && C.shape("M9-13L15-23 18-12M20-13L27-23 29-12", "#c6a5eb", F, 2),
      A.mutation === "Irrläufer" && C.ellipse(13, -4, 6, 6, "#b0d8e4", F, 2),
      A.id === "pistol" && A.cd > 0.1 && A.cd < 0.22 && C.rect(-11, 20, 10, 7, 2, "#a8aca0", F, 1.5),
      A.mutation === "Blutmond" && C.ellipse(26, -13, 5, 5, "#e8adc1", F, 1),
      A.mutation === "Schlächter" && C.shape("M32-23L43-28 38-16 47-15 39-8", "#dfb4cd", F, 1.5),
      A.kick > 0.55 && ["bullet", "shotgun", "poison", "laser", "flame"].includes(Q.kind))
    ) {
      const h = (A.kick - 0.55) / 0.45,
        s = jA(A.id);
      I.save(),
        I.translate(s.muzzleX, s.muzzleY),
        C.shape(
          `M0-4L${11 + 10 * h}-12 13-3 ${28 + 8 * h} 0 12 4 ${11 + 8 * h} 12 0 5Z`,
          Q.kind === "poison" ? "#d6f3a2" : Q.kind === "laser" ? "#c3f9ef" : "#ffe8b0",
          F,
          0,
        ),
        I.restore(),
        A.id === "shotgun" && C.rect(-9, -24 - (1 - A.kick) * 20, 8, 4, 1, "#dab88b", F, 1);
    }
    I.restore();
  }
  lastBodyCloud = null;
  bodyCloud(A, g, B) {
    const E = this.c,
      o = B.save.data.settings.reducedMotion,
      i = B.dashTime > 0,
      I = i ? 1 - B.dashTime / Math.max(0.01, B.dashDur) : 1,
      C = i ? Math.min(1, 0.35 + I / 0.12) : B.dashLand,
      Q = i ? 1 : 0.35 + 0.65 * B.dashLand,
      a = B.dashX || 0,
      t = B.dashY || 0,
      h = o ? 3 : 8,
      s = o ? 0 : B.time * (i ? 6 : 10);
    if (C <= 0.02) return;
    this.lastBodyCloud = { k: C, spread: Q, blobs: h };
    const U = [
      [0, 0, 34],
      [-11, -15, 27],
      [12, -11, 26],
      [-13, 11, 28],
      [11, 15, 27],
      [1, -26, 23],
      [-3, 24, 25],
      [15, 2, 23],
    ];
    for (let M = 0; M < h; M++) {
      const [r, Y, c] = U[o ? M * 2 : M],
        R = s + M * 1.7,
        G = (M % 3) * 6 * (i ? 1 : 0.3),
        n = (r + Math.sin(R) * 4) * Q - a * G,
        D = (Y + Math.cos(R * 0.8) * 4) * Q - t * G,
        k = c * (0.7 + 0.3 * Q),
        l = vg(M % 2 ? "#040404" : "#0b0a0a", "#4d4b49", M % 3);
      E.save(),
        (E.globalAlpha = (o ? 0.5 : M === 0 ? 0.98 : 0.85) * C),
        E.translate(A + n, g + 2 + D),
        E.rotate(M * 2.1 + s * 0.3),
        E.drawImage(l, -k, -k, k * 2, k * 2),
        E.restore();
    }
    E.globalAlpha = 1;
  }
  heldWeapon(A, g) {
    const B = this.game;
    if (
      (this.c,
      A.id === "summon" ||
        A.id === "turret" ||
        (B.character === 1 && (B.dashTime > 0 || B.dashLand > 0.45) && !B.save.data.settings.reducedMotion))
    )
      return;
    const E = A.id === "saw" || A.id === "boomerang" ? B.bladeCount(A) - B.bladesOut(A) : 1;
    if (E <= 0) return;
    const o = B.weaponPosition(A, g);
    for (let i = 1; i < E; i++)
      this.weapon(
        A,
        o.x + Math.cos(A.angle + Math.PI / 2) * i * 8,
        o.y + Math.sin(A.angle + Math.PI / 2) * i * 8,
        A.angle,
        0.72,
      );
    if (A.id !== "axe") {
      this.weapon(A, o.x, o.y, A.angle);
      return;
    }
    this.meleeWeapon(A, o.x, o.y);
  }
  forkFrame(A) {
    return A.kick > 0.7
      ? 3
      : A.kick > 0.35
        ? 4
        : A.kick > 0.02
          ? 5
          : A.target?.active && A.cd > 0 && A.cd < 0.32
            ? A.cd < 0.14
              ? 2
              : 1
            : 0;
  }
  forkFramesDrawn = [0, 0, 0, 0, 0, 0];
  forkVfx = { beam: [0, 0, 0, 0], hit: [0, 0, 0, 0] };
  forkEffects() {
    const A = this.game,
      g = this.c,
      B = Z.get("fx-fork-beam"),
      E = Z.get("fx-fork-hit");
    if (!B || !E || (!A.forkBolts.length && !A.forkHits.length)) return;
    const o = B.width,
      i = B.height / 4,
      I = E.height;
    g.save(), (g.globalCompositeOperation = "lighter"), (g.imageSmoothingEnabled = !0);
    for (const C of A.forkBolts) {
      const Q = 1 - C.life / C.max,
        a = Math.min(3, Math.floor(Q * 4)),
        t = Math.hypot(C.tx - C.x, C.ty - C.y),
        h = Math.min(1.2, 0.45 + t / 700) * C.wide;
      this.forkVfx.beam[a]++,
        g.save(),
        g.translate(C.x, C.y),
        g.rotate(Math.atan2(C.ty - C.y, C.tx - C.x)),
        C.seed > 0.5 && g.scale(1, -1);
      const s = i * h * 0.8;
      (g.globalAlpha = a === 3 ? 0.8 : 1), g.drawImage(B, 0, a * i, o, i, -6, -s / 2, t + 12, s), g.restore();
    }
    for (const C of A.forkHits) {
      const Q = 1 - C.life / C.max,
        a = Math.min(3, Math.floor(Q * 4)),
        t = C.size * (a === 0 ? 0.75 : a === 1 ? 1.1 : 1);
      this.forkVfx.hit[a]++,
        g.save(),
        g.translate(C.x, C.y),
        g.rotate(C.angle),
        (g.globalAlpha = a === 3 ? 0.75 : 1),
        g.drawImage(E, a * I, 0, I, I, -t / 2, -t / 2, t, t),
        g.restore();
    }
    g.restore();
  }
  lastMeleeArc = { reach: 0, outer: 0, facing: 1, angle: 0 };
  meleeWeapon(A, g, B) {
    const E = this.game,
      o = this.c,
      i = E.save.data.settings.reducedMotion,
      I = E.meleeReach(A),
      C = ig(A),
      Q = A.swing > 0 ? 1 - A.swing / y.swing : 0,
      a = A.swing <= 0 && A.cd < y.windup && A.target?.active && !i ? 1 - Math.max(0, A.cd) / y.windup : 0,
      t = ti(Q, a, i),
      h = 1 + Math.min(0.55, (I / y.base - 1) * 0.32),
      s = A.angle + t.angle * C;
    if (A.swing > 0) {
      const U = A.angle + t.smearFrom * C,
        M = A.angle + t.smearTo * C,
        r = Math.min(U, M),
        Y = Math.max(U, M);
      if (
        ((this.lastMeleeArc = { reach: I, outer: I, facing: C, angle: A.angle }),
        o.save(),
        o.translate(g, B),
        A.mutation === "Blutmond")
      )
        (o.globalAlpha = t.alpha * 0.8),
          (o.strokeStyle = "#e8adc1"),
          (o.lineWidth = 6),
          o.beginPath(),
          o.arc(0, 0, I, 0, Math.PI * 2),
          o.stroke();
      else if (i)
        (o.globalAlpha = t.alpha * 0.7),
          (o.strokeStyle = A.mutation ? "#d9b8f2" : "#ece8d0"),
          (o.lineWidth = 4),
          o.beginPath(),
          o.arc(0, 0, I, A.angle - y.halfArc, A.angle + y.halfArc),
          o.stroke();
      else if (Y - r > 0.02) {
        const c = I * 0.42,
          R = o.createRadialGradient(0, 0, c, 0, 0, I);
        if (
          (R.addColorStop(0, "#f4f1e600"),
          R.addColorStop(0.7, A.mutation ? "#d9b8f255" : "#f4f1e64d"),
          R.addColorStop(1, A.mutation ? "#efd9ffcc" : "#fffbeecc"),
          (o.globalAlpha = t.alpha),
          (o.fillStyle = R),
          o.beginPath(),
          o.arc(0, 0, I, r, Y),
          o.arc(0, 0, c, Y, r, !0),
          o.closePath(),
          o.fill(),
          (o.lineWidth = 5),
          (o.strokeStyle = "#2a1d1888"),
          o.beginPath(),
          o.arc(0, 0, I + 2, r, Y),
          o.stroke(),
          (o.lineWidth = 3),
          (o.strokeStyle = "#fffdf2"),
          o.beginPath(),
          o.arc(0, 0, I, r, Y),
          o.stroke(),
          Q < 0.5)
        ) {
          const G = 1 - Q / 0.5;
          (o.globalAlpha = G * 0.85),
            (o.strokeStyle = A.mutation ? "#efd9ff" : "#fffbee"),
            (o.lineCap = "round"),
            (o.lineWidth = 7 * G + 2),
            o.beginPath(),
            o.moveTo(Math.cos(s) * 40 * h, Math.sin(s) * 40 * h),
            o.lineTo(Math.cos(s) * I, Math.sin(s) * I),
            o.stroke(),
            (o.fillStyle = "#ffffff"),
            o.beginPath(),
            o.arc(Math.cos(s) * I, Math.sin(s) * I, 4 + 4 * G, 0, Math.PI * 2),
            o.fill();
        }
      }
      o.restore();
    }
    this.weapon(A, g, B, s, 1, zA(A.id) * h * t.stretch);
  }
  turret(A) {
    const g = this.c,
      B = new X(g);
    if ((g.save(), g.translate(A.x, A.y), g.scale(Cg, Cg), A.broken > 0)) {
      const i = 1 - A.broken / 0.9;
      g.globalAlpha = 1 - i;
      for (let I = 0; I < 5; I++) {
        g.save();
        const C = (I * Math.PI * 2) / 5;
        g.translate(Math.cos(C) * i * 46, Math.sin(C) * i * 28 - i * 20),
          g.rotate(C + i * 2),
          B.rect(-8, -5, 16, 10, 2, I % 2 ? "#87939b" : "#b89767", F, 2),
          g.restore();
      }
      g.restore();
      return;
    }
    const E = 1 - Math.max(0, A.deploy / 0.35);
    g.scale(0.7 + E * 0.3, 0.4 + E * 0.6),
      d.image(g, d.turretBase()),
      g.save(),
      g.translate(-Math.cos(A.angle) * A.kick * 4, -13 - Math.sin(A.angle) * A.kick * 4);
    const o = DB(A.angle);
    if ((d.image(g, d.turretHead(o)), A.kick > 0.65)) {
      const i = (o * Math.PI) / 8;
      g.translate(Math.cos(i) * 53, Math.sin(i) * 53),
        g.rotate(i),
        Math.cos(i) < -0.08 && g.scale(1, -1),
        B.shape("M0-5L14-11 10-2 24 0 10 3 14 10 0 5Z", "#ffe5aa", F, 0);
    }
    g.restore(),
      B.rect(-25, 27, 50, 3, 1, "#24272c", F, 0),
      B.rect(-25, 27, 50 * Math.max(0, A.hp / A.maxHp), 3, 1, "#e6bd69", F, 0),
      (g.globalAlpha = 0.8),
      B.rect(
        -25,
        32,
        50 * Math.max(0, Math.min(1, A.life / (A.owner.mutation === "Wanderknecht" ? 24 : 18))),
        2,
        1,
        "#9bb7c9",
        F,
        0,
      ),
      g.restore();
  }
  companion(A, g, B, E) {
    const o = this.c,
      i = new X(o);
    o.save(), o.translate(A, g), o.rotate(B + 0.4);
    const I = 0.35 + 0.65 * Math.abs(Math.sin(this.game.time * 18 + E * 2));
    o.save(),
      o.scale(1, I),
      i.shape("M-1 0Q-23-26-22-5Q-21 14-1 8Z", i.grad("#f6d4fa", "#9277bd"), F, 2),
      i.shape("M1 0Q23-26 22-5Q21 14 1 8Z", i.grad("#f6d4fa", "#9277bd"), F, 2),
      i.line(-6, -2, -16, -8, "#f5d69a", 1.5),
      i.line(6, -2, 16, -8, "#f5d69a", 1.5),
      o.restore(),
      i.ellipse(0, 3, 4, 10, i.grad("#f3d49e", "#a38a80"), F, 2),
      i.ellipse(0, -6, 5, 5, "#e6dbb5", F, 2),
      i.line(-2, -10, -6, -15, "#ecd8b5", 1.5),
      i.line(2, -10, 6, -15, "#ecd8b5", 1.5),
      o.restore();
  }
  enemy(A) {
    const g = this.c,
      B = new X(g);
    if (
      (g.save(),
      g.translate(A.x, A.y),
      B.ellipse(4, A.r * 0.52, A.r * (A.type >= 8 ? 1.12 : 0.9), A.r * 0.34, "#08061066", F, 0),
      A.spawn > 0)
    ) {
      const Q = A.type >= 8 ? 1.8 : 0.85,
        a = 1 - V(A.spawn / Q, 0, 1);
      B.ellipse(0, 10, A.r + 12, (A.r + 12) * 0.6, "#e1ca7b12", "#d7c39b", 1.5),
        B.line(-6, 10, 6, 10, "#eed49f", 2),
        (g.globalAlpha = 0.2 + a * 0.8),
        g.translate(0, -20 * (1 - a)),
        g.scale(0.4 + a * 0.6, 0.4 + a * 0.6);
    }
    if (A.foe >= 0) {
      this.drawFoe(A), g.restore(), this.enemyStatus(A);
      return;
    }
    if (A.type === 7) {
      const Q = yo[A.elite].color;
      B.ellipse(0, A.r * 0.6, A.r + 7, (A.r + 7) * 0.6, Q + "10", Q + "aa", 1.8),
        g.save(),
        g.translate(0, 43 - A.r * 1.5 - 14);
      const a = A.elite;
      a === 0
        ? B.shape("M-8-43L4-43 0-49 12-40 0-32 4-39-8-39Z", Q, F, 1)
        : a === 1
          ? B.shape("M0-49L4-43 11-40 4-37 0-30-4-37-11-40-4-43Z", Q, F, 1)
          : a === 2
            ? (B.rect(-3, -49, 6, 19, 2, Q, F, 1), B.rect(-10, -43, 20, 6, 2, Q, F, 1))
            : a === 3
              ? B.shape("M-9-48L9-48 10-36 0-29-10-36Z", Q, F, 1)
              : B.shape("M0-50L10-40 0-30-10-40Z", Q, F, 1),
        g.restore();
    }
    const E = A.type === 0 ? 10 : 5,
      o = Math.sin(A.age * E);
    g.translate(0, o * 1.5),
      g.scale(1 + o * 0.015, 1 - o * 0.02),
      ((A.type === 1 && A.state === 1) ||
        (A.type === 2 && A.state === 1) ||
        (A.type >= 8 && A.bossMode === 1)) &&
        (g.scale(1.05, 0.9), g.rotate(Math.cos(A.aim) * -0.07)),
      A.flash > 0 && !this.game.save.data.settings.reducedMotion && g.scale(1.09, 0.92);
    const I = A.r / z[A.type].radius;
    if ((g.scale(I, I), A.type >= 8)) {
      const Q = A.bossMode === 1 ? 1 - A.timer / A.windupMax : 0;
      if (
        (A.type === 11 && g.rotate(Math.sin(A.age * 0.45) * 0.06),
        (A.type === 8 || A.type === 9) && !d.hasPainted(`enemy-${A.type}`))
      )
        for (const a of [-1, 1]) {
          const t = a * (30 + Q * 9),
            h = 6 - Q * 12;
          B.line(a * 20, 0, t, h, "#101725", 11),
            B.line(a * 20, -1, t, h - 1, "#b0a6a1", 6),
            B.rect(t - 7, h - 9, 14, 23, 4, B.grad("#c5c3c1", "#647085"), F, 2),
            B.line(t - 5, h - 5, t + 5, h - 5, "#fff0ce66", 1);
        }
      g.translate(0, Math.sin(A.age * 2) * 1.3 - Q * 2.4);
    }
    const C = (Q) => d.enemy(A.type, A.elite, Math.floor(A.age * 7) % 4, Q);
    d.image(g, C(!1)),
      A.flash > 0 &&
        this.fxFlashes > 0 &&
        (g.save(), (g.globalAlpha = this.fxFlashes), d.image(g, C(!0)), g.restore()),
      A.type >= 8 &&
        A.phaseFlash > 0 &&
        ((g.globalAlpha = A.phaseFlash * 0.65 * this.fxFlashes),
        B.ellipse(0, -3, 36 + A.phaseFlash * 10, 34 + A.phaseFlash * 10, "#ffffff00", z[A.type].color, 1.5),
        (g.globalAlpha = 1)),
      g.restore(),
      this.enemyStatus(A);
  }
  enemyStatus(A) {
    const g = new X(this.c);
    if (
      (A.poisonTime > 0 && g.ellipse(A.x + A.r * 0.8, A.y - 8, 3, 5, "#bfde85", F, 1),
      A.burn > 0 &&
        g.shape(`M${A.x - A.r * 0.5 - 4} ${A.y + 14}q-3-9 3-15q-1 7 4 7q5 5-2 8Z`, "#f4be80", F, 0),
      A.slow > 0 && g.line(A.x - 5, A.y - A.r - 8, A.x + 5, A.y - A.r - 8, "#badcf2", 2),
      A.type === 7 || (A.hp < A.maxHp * 0.45 && A.r > 20))
    ) {
      const B = A.r * 1.7;
      g.rect(A.x - B / 2, A.y - A.r - 18, B, 4, 2, "#162a31", F, 0),
        g.rect(
          A.x - B / 2,
          A.y - A.r - 18,
          B * Math.max(0, A.hp / A.maxHp),
          4,
          2,
          A.type >= 8 ? "#efbc87" : "#e4a8ac",
          F,
          0,
        );
    }
  }
  foeTrace = null;
  drawFoe(A, g) {
    const B = this.c,
      E = $[A.foe],
      o = Ig[A.foe],
      i = Z.get("foe-" + A.foe);
    if (!i) return;
    const I = g ?? ni(E, A),
      C = oB(A.foe),
      Q = this.game.save.data.settings.reducedMotion;
    if (this.foeTrace) {
      const Y = (this.foeTrace[A.foe] ??= { frames: new Set(), faces: new Set() });
      Y.frames.add(I), Y.faces.add(A.face);
    }
    const a = E.fly ? Math.sin(A.age * 6 + A.flank) * (Q ? 1 : 3) : 0;
    B.translate(0, QA(A.foe) - E.fly + a),
      A.face < 0 && B.scale(-1, 1),
      A.flash > 0 && !Q && B.scale(1.07, 0.94),
      (B.imageSmoothingEnabled = !0);
    const t = (I % 6) * o.fw,
      h = Math.floor(I / 6) * o.fh,
      s = -o.ax * C,
      U = -o.ay * C,
      M = o.fw * C,
      r = o.fh * C;
    B.drawImage(i, t, h, o.fw, o.fh, s, U, M, r),
      A.flash > 0 &&
        this.fxFlashes > 0 &&
        (B.save(),
        (B.globalCompositeOperation = "lighter"),
        (B.globalAlpha = 0.45 * this.fxFlashes),
        B.drawImage(i, t, h, o.fw, o.fh, s, U, M, r),
        B.restore());
  }
  foeTelegraphs() {
    const A = this.c,
      g = this.game,
      B = new X(A);
    A.save(),
      g.enemies.each((E) => {
        if (
          E.foe < 0 ||
          (E.state !== uA && E.state !== pA) ||
          Math.abs(E.x - this.camX) > this.viewWidth / 2 + 200 ||
          Math.abs(E.y - this.camY) > this.viewHeight / 2 + 200
        )
          return;
        const o = $[E.foe],
          i = E.state === uA,
          I = i ? 1 - V(E.timer / o.windup, 0, 1) : 1,
          C = i ? `rgba(255,52,72,${(0.12 + 0.22 * I).toFixed(3)})` : "rgba(255,96,80,0.38)",
          Q = i ? "#ff5a66" : "#ffd0a0",
          a = E.y + QA(E.foe) * 0.4;
        if (!(!i && o.attack !== "melee" && o.attack !== "whip" && o.attack !== "splash")) {
          if (o.attack === "melee") {
            const t = E.x + E.face * o.power;
            B.ellipse(t, a, o.size * (0.4 + 0.6 * I), o.size * 0.62 * (0.4 + 0.6 * I), C, Q, 1.5);
          } else if (o.attack === "splash" || o.attack === "explode") {
            const t = o.power * (o.attack === "explode" ? 0.85 + 0.15 * Math.sin(E.age * 30) : 0.4 + 0.6 * I);
            B.ellipse(E.x, a, t, t * 0.62, C, Q, 1.5);
          } else if (o.attack === "whip") {
            const t = Dg(E.foe),
              h = E.x,
              s = t * (i ? 0.25 + 0.75 * I : 1);
            (A.fillStyle = C),
              (A.strokeStyle = Q),
              (A.lineWidth = 1.5),
              A.beginPath(),
              A.roundRect(E.face > 0 ? h : h - s, a - o.size, s, o.size * 2, o.size),
              A.fill(),
              A.stroke();
          } else if (o.attack === "charge") {
            const t = o.power * o.strike;
            A.save(),
              A.translate(E.x, E.y + QA(E.foe) * 0.6),
              A.rotate(E.aim),
              (A.fillStyle = C),
              A.fillRect(0, -E.r, t * (0.3 + 0.7 * I), E.r * 2),
              (A.strokeStyle = Q),
              (A.lineWidth = 1.5),
              A.strokeRect(0, -E.r, t, E.r * 2),
              A.restore();
          } else if (o.attack === "shoot") {
            const t = E.y + QA(E.foe) - o.fly - o.h * 0.5;
            (A.strokeStyle = `rgba(127,243,255,${(0.25 + 0.5 * I).toFixed(3)})`),
              (A.lineWidth = 1.5 + I * 1.5),
              A.beginPath(),
              A.moveTo(E.x, t),
              A.lineTo(E.x + Math.cos(E.aim) * 320, t + Math.sin(E.aim) * 320),
              A.stroke();
          }
        }
      }),
      A.restore();
  }
  foeBurstsDraw() {
    const A = this.c,
      g = this.game;
    for (const B of g.foeBursts) {
      const E = Ig[B.foe],
        o = Z.get("foe-" + B.foe);
      if (!o) continue;
      const i = Math.min(0.999, B.t / B.dur),
        I = i < 0.34 ? 9 : i < 0.67 ? 10 : 11,
        C = oB(B.foe) * (I === 9 ? 1.15 + 0.25 * i : 1.1);
      A.save(),
        A.translate(B.x, B.y + QA(B.foe)),
        B.face < 0 && A.scale(-1, 1),
        (A.globalAlpha = I === 11 ? 1 - (i - 0.67) / 0.33 : 1),
        A.drawImage(o, (I % 6) * E.fw, E.fh, E.fw, E.fh, -E.ax * C, -E.ay * C, E.fw * C, E.fh * C),
        A.restore();
    }
  }
  makeFloor(A) {
    return ji(A);
  }
  climbFloor() {
    const A = this.c,
      g = this.game,
      B = g.climbState,
      E = B.def,
      o = this.camY - this.viewHeight / 2 - 40,
      i = this.camY + this.viewHeight / 2 + 40,
      I = this.camX - this.viewWidth / 2;
    (A.fillStyle = "#0b0a0c"), A.fillRect(I, o, this.viewWidth, i - o);
    const C = Z.get(E.floor);
    if (C) for (let a = Math.floor(o / 1440); a * 1440 < i; a++) A.drawImage(C, -1e3, a * 1440, 2e3, 1440);
    E.id === "down" && ((A.fillStyle = "rgba(12,7,4,0.3)"), A.fillRect(I, o, this.viewWidth, i - o));
    for (const a of FA(g.map)) {
      if (a.y < o - 80 || a.y > i + 80) continue;
      const t = pg(a.kind, a.r, a.h);
      A.drawImage(t.canvas, a.x - t.ox, a.y - t.oy, t.w, t.h);
    }
    A.save(), (A.globalCompositeOperation = "lighter");
    const Q = dA("#ff9d4a");
    for (const a of FA(g.map)) {
      if (a.kind !== 5 || a.y < o - 260 || a.y > i + 260) continue;
      const t = this.torchFlicker(a),
        h = a.x - Math.sign(a.x) * 70,
        s = a.y - 6;
      (A.globalAlpha = 0.5 * t),
        A.drawImage(Q, h - 300, s - 170, 600, 340),
        (A.globalAlpha = 0.3 * t),
        A.drawImage(Q, a.x - 130, a.y - 70, 260, 140);
    }
    A.restore();
  }
  torchFlicker(A) {
    const g = this.game.time,
      B = A.y * 0.013 + A.x * 0.007;
    return (
      0.9 + Math.sin(g * 11.3 + B) * 0.07 + Math.sin(g * 23.7 + B * 2.1) * 0.05 + Math.sin(g * 3.1 + B) * 0.03
    );
  }
  torchStats = null;
  minePillar(A) {
    const g = this.c,
      B = Ji,
      E = B.pillar,
      o = Z.get("mine-pillar"),
      i = Z.get("mine-torch"),
      I = E.w / E.k,
      C = E.h / E.k;
    if (o && !this.noCoverSprites) {
      const Y = A.x - I / 2,
        c = A.y - C + E.foot,
        R = o;
      this.coverWithCircles(A, A.y, Y, c, I, C, R, [0, 0, R.width, R.height], (G) =>
        G.drawImage(o, Y, c, I, C),
      );
    }
    if (!i) return;
    const Q = Math.abs(Math.floor(A.y * 0.37 + A.x * 0.11)) % B.frames,
      a = (Math.floor(this.game.time / B.dt) + Q) % B.frames,
      t = (a % B.cols) * B.cw,
      h = Math.floor(a / B.cols) * B.ch,
      s = A.y - E.torchY,
      U = 1.45 / B.k;
    g.drawImage(i, t, h, B.cw, B.ch, A.x - B.ax * U, s - B.ay * U, B.cw * U, B.ch * U);
    const M = this.torchFlicker(A);
    g.save(), (g.globalCompositeOperation = "lighter"), (g.globalAlpha = 0.42 * M);
    const r = dA("#ffb35c");
    g.drawImage(r, A.x - 70 * M, s - 64 - 54 * M, 140 * M, 108 * M),
      (g.globalAlpha = 0.16 * M),
      g.drawImage(r, A.x - 120, s - 90, 240, 170),
      g.restore(),
      this.torchStats && (this.torchStats.drawn++, this.torchStats.frames.add(a));
  }
  climbEdges() {
    const A = this.c,
      g = this.game,
      B = g.climbState,
      E = B.def,
      o = E.dir,
      i = B.trailing(),
      I = B.leading(),
      C = 2200,
      Q = -1100,
      a = A.createLinearGradient(0, i, 0, i - o * 260);
    a.addColorStop(0, "#050406f0"),
      a.addColorStop(1, "#050406"),
      (A.fillStyle = "#050406"),
      A.fillRect(Q, o < 0 ? i : i - 2e3, C, 2e3);
    const t = new X(A);
    A.save(), A.beginPath();
    for (let Y = -1e3; Y <= 1e3; Y += 40) {
      const c = Math.sin(Y * 0.07 + Math.floor(B.y / 40)) * 9 + Math.sin(Y * 0.023) * 7;
      Y === -1e3 ? A.moveTo(Y, i + c * -o) : A.lineTo(Y, i + c * -o);
    }
    A.lineTo(1e3, i - o * 40),
      A.lineTo(-1e3, i - o * 40),
      A.closePath(),
      (A.fillStyle = "#1b1512"),
      A.fill(),
      (A.lineWidth = 4),
      (A.strokeStyle = F),
      A.stroke(),
      A.restore();
    const h = Math.min(
        ...(g.coop ? g.coop.actors.map((Y) => Math.abs(Y.player.y - i)) : [Math.abs(g.player.y - i)]),
      ),
      s = Math.max(0, 1 - h / 260),
      U = 0.5 + 0.5 * Math.sin(g.time * (4 + s * 10)),
      M = A.createLinearGradient(0, i, 0, i + o * 120);
    M.addColorStop(
      0,
      "#ff5a3a" +
        Math.round(60 + 120 * s * U)
          .toString(16)
          .padStart(2, "0"),
    ),
      M.addColorStop(1, "#ff5a3a00"),
      (A.fillStyle = M),
      A.fillRect(Q, o < 0 ? i - 120 : i, C, 120),
      t.line(-1e3, i + o * 6, 1e3, i + o * 6, "#ffb07a", 2);
    const r = A.createLinearGradient(0, I, 0, I - o * 180);
    r.addColorStop(0, "#0b0a0cc0"),
      r.addColorStop(1, "#0b0a0c00"),
      (A.fillStyle = r),
      A.fillRect(Q, o < 0 ? I - 400 : I - 180, C, 580);
  }
  floor() {
    const A = this.c;
    if (this.game.climbState.active) {
      this.climbFloor();
      return;
    }
    const g = this.paintedPlate,
      B = g && Z.get("arena-" + g.id);
    if (g && B) {
      const t = this.camX - this.viewWidth / 2,
        h = this.camY - this.viewHeight / 2,
        s = V(t - g.x, 0, g.w),
        U = V(h - g.y, 0, g.h),
        M = Math.min(this.viewWidth + 2, g.w - s),
        r = Math.min(this.viewHeight + 2, g.h - U);
      M > 0 && r > 0 && A.drawImage(B, s, U, M, r, s + g.x, U + g.y, M, r);
      return;
    }
    let E = this.floorCaches.get(this.game.map);
    E || ((E = this.makeFloor(this.game.map)), this.floorCaches.set(this.game.map, E));
    const o = this.camX - this.viewWidth / 2,
      i = this.camY - this.viewHeight / 2;
    (A.fillStyle = IA[this.game.map].floor[2]), A.fillRect(o, i, this.viewWidth, this.viewHeight);
    const I = V(o + 1e3, 0, 2e3),
      C = V(i + 720, 0, 1440),
      Q = Math.min(o + this.viewWidth + 1e3 - I, 2e3 - I),
      a = Math.min(i + this.viewHeight + 720 - C, 1440 - C);
    Q > 0 && a > 0 && A.drawImage(E, I, C, Q, a, I - 1e3, C - 720, Q, a);
  }
  telegraphs(A = !1) {
    const g = this.c,
      B = new X(g),
      E = this.game,
      o = (i) => g.setLineDash(E.coop && E.enemies.count > 120 ? [] : i);
    g.save();
    for (const i of E.zones) {
      if (A && !i.enemy) continue;
      const I = 1 - V(i.delay / (i.style === "vent" ? 1.2 : 1), 0, 1);
      if (i.enemy) {
        if (
          ((g.globalAlpha = A ? 0.95 : 0.65),
          B.ellipse(
            i.x,
            i.y,
            i.r,
            i.r,
            A ? "#ffffff00" : i.delay > 0 ? "#ff244f45" : "#ff183e88",
            i.delay > 0 ? "#ff455b" : "#ff2949",
            A ? 2.3 : 0,
          ),
          !A && E.save.data.settings.dangerContrast)
        ) {
          if (
            (g.save(), g.beginPath(), g.arc(i.x, i.y, i.r, 0, Math.PI * 2), g.clip(), !this.dangerPattern)
          ) {
            const C = document.createElement("canvas");
            C.width = C.height = 24;
            const Q = C.getContext("2d");
            (Q.strokeStyle = "#ffe7c342"),
              (Q.lineWidth = 3),
              Q.beginPath(),
              Q.moveTo(-12, 24),
              Q.lineTo(24, -12),
              Q.moveTo(0, 36),
              Q.lineTo(36, 0),
              Q.stroke(),
              (this.dangerPattern = g.createPattern(C, "repeat"));
          }
          (g.fillStyle = this.dangerPattern), g.fillRect(i.x - i.r, i.y - i.r, i.r * 2, i.r * 2), g.restore();
        }
        A &&
          (o([5, 8]),
          B.ellipse(i.x, i.y, i.r * I, i.r * I, "#ffffff00", "#ff7484", 1),
          g.setLineDash([]),
          g.save(),
          g.translate(i.x, i.y),
          B.shape("M0-13L13 10-13 10Z", "#40101b", "#ffe2c0", 1.5),
          B.line(0, -6, 0, 1, "#fff0d4", 2.5),
          B.ellipse(0, 5, 1.4, 1.4, "#fff0d4", F, 0),
          g.restore(),
          E.save.data.settings.dangerContrast &&
            (B.ellipse(i.x, i.y, i.r, i.r, "#ffffff00", "#08070b", 6),
            B.ellipse(i.x, i.y, i.r, i.r, "#ffffff00", "#ffe7c3", 2)));
      } else if (
        ((g.globalAlpha = V(i.life / i.max, 0, 1) * (i.style === "pulse" ? 0.65 : i.heal ? 0.34 : 0.23)),
        i.chill)
      ) {
        (g.globalAlpha = i.delay > 0 ? 0.28 : 0.38),
          B.ellipse(i.x, i.y, i.r, i.r * 0.8, "#abd9f615", "#d4eafb8a", 1.5),
          g.save(),
          g.translate(i.x, i.y),
          g.rotate(E.time * 0.07);
        for (let C = 0; C < 6; C++)
          g.rotate(Math.PI / 3),
            B.line(0, 0, 0, -25, "#dcf3fa88", 1.5),
            B.line(0, -17, 6, -23, "#dcf3fa88", 1);
        g.restore();
      } else if (i.style === "pulse") {
        const C = i.r * (1 - i.life / i.max);
        B.ellipse(i.x, i.y, C, C, "#ffffff00", i.color, 7);
      } else
        B.ellipse(i.x, i.y, i.r, i.r * 0.8, i.color, F, 0),
          i.heal &&
            (B.ellipse(i.x, i.y, i.r * 0.7, i.r * 0.55, "#ffffff00", "#d7f0d3", 2),
            B.line(i.x - 10, i.y, i.x + 10, i.y, "#e9f7d9", 4),
            B.line(i.x, i.y - 10, i.x, i.y + 10, "#e9f7d9", 4));
    }
    (g.globalAlpha = 1),
      E.enemies.each((i) => {
        if (
          !(i.spawn > 0) &&
          (i.state === 1 &&
            (i.type === 2 || (i.type === 7 && i.elite === 0)) &&
            (g.save(),
            g.translate(i.x, i.y),
            g.rotate(i.aim),
            (g.fillStyle = A ? "#00000000" : "#ff244f30"),
            g.fillRect(0, -18, 365, 36),
            A &&
              ((g.strokeStyle = "#ff5266"),
              (g.lineWidth = 2),
              o([10, 8]),
              g.strokeRect(0, -18, 365, 36),
              g.setLineDash([]),
              B.shape("M345-13L364 0 345 13", "#ff8794", F, 0)),
            g.restore()),
          A &&
            i.type === 1 &&
            i.state === 1 &&
            (B.ellipse(i.x, i.y, 103, 103, "#ff244f25", "#ff455b", 2),
            B.ellipse(
              i.x,
              i.y,
              103 * (1 - i.timer / 0.85),
              103 * (1 - i.timer / 0.85),
              "#ffffff00",
              "#ff7585",
              1,
            )),
          A && i.type >= 8 && i.bossMode === 1)
        ) {
          const I = "#ff3e58",
            C = 1 - i.timer / i.windupMax;
          if (
            (g.save(),
            g.translate(i.x, i.y),
            B.ellipse(0, 0, i.r + 22, i.r + 22, "#ffffff00", I + "a0", 2),
            g.beginPath(),
            g.arc(0, 0, i.r + 30, -Math.PI / 2, -Math.PI / 2 + C * Math.PI * 2),
            (g.strokeStyle = I),
            (g.lineWidth = 4),
            g.stroke(),
            i.bossPattern === "charge" || i.bossPattern === "laser")
          ) {
            g.rotate(i.aim);
            const Q = i.bossPattern === "charge" ? 505 : 780,
              a = i.bossPattern === "charge" ? i.r * 2 + 18 : 32;
            (g.fillStyle = "#ff244f22"),
              g.fillRect(0, -a / 2, Q, a),
              o([12, 9]),
              (g.strokeStyle = "#ff5369"),
              (g.lineWidth = 2),
              g.strokeRect(0, -a / 2, Q, a),
              g.setLineDash([]),
              B.shape(`M${Q - 22}-12L${Q} 0 ${Q - 22} 12`, "#ff96a0", F, 0),
              i.bossPattern === "laser" &&
                ((g.globalAlpha = 0.25),
                g.beginPath(),
                g.moveTo(0, 0),
                g.arc(0, 0, Q, 0, 0.75),
                g.closePath(),
                (g.fillStyle = I + "35"),
                g.fill());
          } else
            i.bossPattern === "ring" &&
              (g.rotate(i.aim),
              B.line(i.r + 20, -30, i.r + 125, -55, "#e4efffa0", 2),
              B.line(i.r + 20, 30, i.r + 125, 55, "#e4efffa0", 2));
          g.restore(),
            (g.font = "700 11px Figtree"),
            (g.textAlign = "center"),
            (g.fillStyle = "#ff8997"),
            g.fillText(mB[i.bossPattern], i.x, i.y - i.r - 58);
        }
      }),
      g.restore();
  }
  ghostCache = new Map();
  heroGhost(A, g) {
    const B = A + g;
    let E = this.ghostCache.get(B);
    if (!E) {
      const o = d.heroSource(A, !1, !1, 0);
      (E = document.createElement("canvas")), (E.width = E.height = 160);
      const i = E.getContext("2d");
      o && i.drawImage(o, 0, 0, 160, 160),
        (i.globalCompositeOperation = "source-atop"),
        (i.globalAlpha = 0.82),
        (i.fillStyle = g),
        i.fillRect(0, 0, 160, 160),
        this.ghostCache.set(B, E);
    }
    return E;
  }
  drawGhosts() {
    const A = this.game,
      g = this.c;
    if (A.ghosts.length) {
      for (const B of A.ghosts) {
        if (!d.hasPainted("hero-" + B.hero)) continue;
        const E = $A[B.hero],
          o = Math.min(100 / E.maxHeight, 86 / E.maxWidth),
          i = E.cell * o,
          I = -E.anchor[0] * o,
          C = 32 - E.anchor[1] * o;
        g.save(), (g.globalAlpha = B.alpha * V(B.life / B.max, 0, 1));
        const Q = B.y + 32 - B.pivot;
        g.translate(B.x, Q),
          g.rotate(B.rot),
          g.scale(B.sx, B.sy),
          g.translate(-B.x, -Q),
          g.translate(B.x, B.y + 32),
          g.scale(0.85 * (B.face < 0 ? -1 : 1), 0.85),
          g.translate(0, -32),
          g.drawImage(this.heroGhost(B.hero, B.tint), I, C, i, i),
          g.restore();
      }
      g.globalAlpha = 1;
    }
  }
  vfxGround() {
    const A = this.game,
      g = this.c,
      B = A.fx,
      E = this.viewWidth / 2 + 140,
      o = this.viewHeight / 2 + 140;
    if (B.count) {
      for (const i of B.items) {
        if (
          !i.active ||
          (i.kind !== u.Decal && i.kind !== u.Light) ||
          Math.abs(i.x - this.camX) > E ||
          Math.abs(i.y - this.camY) > o
        )
          continue;
        const I = i.life / i.max;
        if (i.kind === u.Decal) {
          g.globalAlpha = Math.min(1, i.life / 0.8);
          const C = Ei(i.tx, i.variant, i.color);
          i.tx === 1
            ? (g.save(),
              g.translate(i.x, i.y),
              g.rotate(i.rot),
              g.drawImage(C, -i.size / 2, -i.size / 2, i.size, i.size),
              g.restore())
            : g.drawImage(C, i.x - i.size / 2, i.y - i.size * 0.32, i.size, i.size * 0.64);
        } else
          (g.globalCompositeOperation = "lighter"),
            (g.globalAlpha = i.alpha * 0.5 * I),
            g.drawImage(dA(i.color), i.x - i.size, i.y - i.size * 0.55, i.size * 2, i.size * 1.1),
            (g.globalCompositeOperation = "source-over");
      }
      g.globalAlpha = 1;
    }
  }
  vfxTop() {
    const A = this.game,
      g = this.c,
      B = A.fx,
      E = this.viewWidth / 2 + 140,
      o = this.viewHeight / 2 + 140;
    if (!B.count) return;
    const i = !!A.coop,
      I = (C) =>
        Math.abs(C.x - this.camX) < E &&
        Math.abs(C.y - this.camY) < o &&
        !(i && (C.kind === u.Ember || C.kind === u.Twinkle || C.kind === u.Chip || C.kind === u.Casing));
    for (const C of B.items) {
      if (!C.active || !I(C)) continue;
      const Q = C.life / C.max;
      switch (C.kind) {
        case u.Smoke: {
          const a = Math.min(1, (C.max - C.life) / 0.07);
          g.globalAlpha = C.alpha * Math.pow(Q, C.ty ? 0.45 : 0.8) * a;
          const t = vg(C.color, C.rim || C.color, C.variant),
            h = C.size * 2;
          g.save(), g.translate(C.x, C.y), g.rotate(C.rot), g.drawImage(t, -h / 2, -h / 2, h, h), g.restore();
          break;
        }
        case u.Sheet:
          this.drawSheet(C, !1);
          break;
        case u.Splat: {
          g.globalAlpha = Math.pow(Q, 0.5);
          const a = C.size * 2;
          g.save(),
            g.translate(C.x, C.y),
            g.rotate(C.rot),
            g.drawImage(gi(C.color, C.variant), -a / 2, -a / 2, a, a * 0.8),
            g.restore();
          break;
        }
        case u.Casing:
        case u.Chip: {
          if (
            ((g.globalAlpha = Math.min(1, C.life / 0.3)),
            (g.fillStyle = "#0c101a40"),
            g.fillRect(C.x - 2, C.y + 1, 4, 1.5),
            g.save(),
            g.translate(C.x, C.y - C.z),
            g.rotate(C.rot),
            (g.fillStyle = C.color),
            (g.strokeStyle = F),
            (g.lineWidth = 1),
            g.beginPath(),
            C.kind === u.Casing)
          )
            g.rect(-3, -1.3, 6, 2.6);
          else {
            const a = C.size;
            g.moveTo(-a, -a * 0.4),
              g.lineTo(a * (0.6 + C.variant * 0.2), -a * 0.7),
              g.lineTo(a * 0.4, a * 0.8),
              g.closePath();
          }
          g.fill(),
            g.stroke(),
            C.kind === u.Casing && ((g.fillStyle = "#fff2c4"), g.fillRect(-2, -1, 3, 0.8)),
            g.restore();
          break;
        }
        case u.Ring: {
          if (C.size <= 0) break;
          (g.globalAlpha = C.variant === 1 ? C.alpha * Q : Math.min(1, Q * 1.6)),
            (g.strokeStyle = C.color),
            (g.lineWidth = Math.max(0.5, C.tx * (0.4 + Q * 0.6))),
            g.beginPath(),
            g.ellipse(C.x, C.y, C.size, C.size * 0.62, 0, 0, Math.PI * 2),
            g.stroke();
          break;
        }
        case u.Tracer:
          if (C.variant !== 1) break;
          (g.globalAlpha = Q),
            (g.strokeStyle = C.color),
            (g.lineWidth = C.size * Q),
            (g.lineCap = "round"),
            g.beginPath(),
            g.moveTo(C.x, C.y),
            g.lineTo(C.tx, C.ty),
            g.stroke();
          break;
      }
    }
    g.globalCompositeOperation = "lighter";
    for (const C of B.items) {
      if (!C.active || !I(C)) continue;
      const Q = C.life / C.max;
      switch (C.kind) {
        case u.Sheet:
          C.alpha > 0 && this.drawSheet(C, !0);
          break;
        case u.Glow:
          (g.globalAlpha = C.alpha * Q),
            g.drawImage(dA(C.color), C.x - C.size, C.y - C.size, C.size * 2, C.size * 2);
          break;
        case u.Ember:
          (g.globalAlpha = Math.min(1, Q * 1.5)),
            g.drawImage(dA(C.color), C.x - C.size * 2, C.y - C.size * 2, C.size * 4, C.size * 4);
          break;
        case u.Star: {
          g.globalAlpha = C.alpha * Math.min(1, Q * 1.4);
          const a = C.size * 2.6,
            t = C.size * 1.6;
          g.save(),
            g.translate(C.x, C.y),
            g.rotate(C.rot),
            g.drawImage(Bi(C.color), -a * 0.25, -t / 2, a, t),
            g.restore();
          break;
        }
        case u.Spark:
          (g.globalAlpha = Math.min(1, Q * 1.5)),
            (g.strokeStyle = C.color),
            (g.lineWidth = C.size),
            (g.lineCap = "round"),
            g.beginPath(),
            g.moveTo(C.x, C.y),
            g.lineTo(C.x - C.vx * 0.03, C.y - C.vy * 0.03),
            g.stroke();
          break;
        case u.Tracer:
          if (C.variant === 1) break;
          (g.globalAlpha = Q),
            (g.strokeStyle = C.color),
            (g.lineWidth = C.size),
            (g.lineCap = "round"),
            g.beginPath(),
            g.moveTo(C.x, C.y),
            g.lineTo(C.tx, C.ty),
            g.stroke();
          break;
        case u.Twinkle: {
          (g.globalAlpha = Math.sin(Math.PI * Q)), (g.strokeStyle = C.color), (g.lineWidth = 1.6);
          const a = C.size;
          g.beginPath(),
            g.moveTo(C.x - a, C.y),
            g.lineTo(C.x + a, C.y),
            g.moveTo(C.x, C.y - a),
            g.lineTo(C.x, C.y + a),
            g.stroke();
          break;
        }
      }
    }
    (g.globalCompositeOperation = "source-over"), (g.globalAlpha = 1);
  }
  drawSheet(A, g) {
    const B = Vg(A.variant);
    if (!B) return;
    const E = mA[A.variant],
      o = this.c,
      i = (A.max - A.life) / E.dt,
      I = Math.min(E.frames - 1, Math.floor(i)),
      C = g || I >= E.frames - 1 ? 0 : i - I,
      Q = A.size / E.k,
      a = g ? 1.18 : 1;
    o.save(),
      o.translate(A.x, A.y),
      o.rotate(A.rot),
      o.scale(Q * a, Q * a * (A.tx < 0 ? -1 : 1)),
      (o.imageSmoothingEnabled = !0),
      (o.imageSmoothingQuality = "medium"),
      (o.globalAlpha = g ? A.alpha * (1 - I / E.frames) : 1),
      o.drawImage(B[I], -E.ax, -E.ay),
      C > 0.05 && ((o.globalAlpha = C), o.drawImage(B[I + 1], -E.ax, -E.ay)),
      o.restore();
  }
  plateSprite(A, g = this.c) {
    const B = A.spr,
      E = Z.get("arena-" + A.plate + "-occ");
    !B || !E || (g.drawImage(E, B[0], B[1], B[2], B[3], B[4], B[5], B[2], B[3]), this.plateSprites++);
  }
  cutHoles = [];
  coverGeom(A) {
    if (A.kind === 6) {
      const B = A.spr;
      return {
        x: B[4],
        y: B[5],
        w: B[2],
        h: B[3],
        img: Z.get("arena-" + A.plate + "-occ"),
        src: [B[0], B[1], B[2], B[3]],
        paint: (E) => this.plateSprite(A, E),
      };
    }
    const g = IB(A);
    return {
      x: A.x - g.ox,
      y: A.y - g.oy,
      w: g.w,
      h: g.h,
      img: g.canvas,
      src: [0, 0, g.canvas.width, g.canvas.height],
      paint: (B) => d.image(B, g, A.x, A.y),
    };
  }
  drawCover(A) {
    if (this.noCoverSprites) return;
    const g = this.coverGeom(A);
    this.coverWithCircles(A, A.y, g.x, g.y, g.w, g.h, g.img, g.src, g.paint);
  }
  coverHoles = new Map();
  circlesFor(A, g, B, E, o, i, I) {
    const C = [];
    if (this.noCut) return C;
    for (const Q of this.cutHoles)
      Q.foot >= A ||
        Q.x + xA < g ||
        Q.x - xA > g + E ||
        Q.y + xA < B ||
        Q.y - xA > B + o ||
        (wB(qg(i, I[0], I[1], I[2], I[3], g, B, E, o, Q.x, Q.foot + 32, 80, 22), 80, 22) &&
          C.push({ x: Q.x, y: Q.y, r: xA }));
    return C;
  }
  prepareCircles() {
    const A = this.game;
    if (
      ((this.cutHoles = (A.coop ? A.coop.snapshot().map((g) => g.player) : [A.player])
        .filter((g) => g.hp > 0)
        .map((g) => ({ x: g.x, y: g.y - cC, foot: g.y }))),
      (this.arenaCut = 0),
      this.coverHoles.clear(),
      !(this.noCut || !this.cutHoles.length))
    )
      for (const g of FA(A.map)) {
        if (g.kind === 5 || (g.kind === 6 && (!g.spr || this.noCoverSprites || !this.plateSpriteVisible(g))))
          continue;
        const B = this.coverGeom(g),
          E = this.circlesFor(g.y, B.x, B.y, B.w, B.h, B.img, B.src);
        this.coverHoles.set(g, E);
        const o = g.kind === 6 && !this.noUnder && Z.get("arena-" + g.plate + "-under");
        if (E.length && o) {
          const i = g.spr;
          GB(this.c, E, (I) => I.drawImage(o, i[0], i[1], i[2], i[3], i[4], i[5], i[2], i[3]));
        }
      }
  }
  noUnder = !1;
  coverWithCircles(A, g, B, E, o, i, I, C, Q) {
    const a = this.coverHoles.get(A) ?? this.circlesFor(g, B, E, o, i, I, C);
    RB(this.c, B, E, o, i, a, Q) && this.arenaCut++;
  }
  plateSprites = 0;
  plateSpriteVisible(A) {
    const g = A.spr;
    return (
      g[4] + g[2] > this.camX - this.viewWidth / 2 &&
      g[4] < this.camX + this.viewWidth / 2 &&
      g[5] + g[3] > this.camY - this.viewHeight / 2 &&
      g[5] < this.camY + this.viewHeight / 2
    );
  }
  occluders(A, g) {
    const B = [];
    for (const E of FA(this.game.map)) {
      if (E.y <= g || (E.kind === 6 && !E.spr)) continue;
      const o = E.spr ? E.spr[4] : E.x - E.r - 4,
        i = E.spr ? E.spr[4] + E.spr[2] : E.x + E.r + 4,
        I = E.spr ? E.spr[5] : E.y - E.h - 18,
        C = E.spr ? E.spr[5] + E.spr[3] : E.y + 10;
      A + 22 < o || A - 22 > i || g + 30 < I || g - 62 > C || B.push({ x: o, y: I, w: i - o, h: C - I });
    }
    return B;
  }
  silhouetteCache = new Map();
  ghostSilhouette = !1;
  occludedSilhouette(A) {
    const g = this.game,
      B = g.player,
      E = this.c;
    if (B.hp <= 0 || !d.hasPainted("hero-" + g.character)) return;
    const o = this.occluders(B.x, B.y);
    if (((this.lastOccluded = o.length), !o.length || !this.ghostSilhouette)) return;
    const i = $A[g.character],
      I = B.moveBlend > 0.5 ? $g(B.walk) : 0,
      C = g.character + ":" + I + ":" + A;
    let Q = this.silhouetteCache.get(C);
    const a = d.heroSource(g.character, !1, !1, I);
    if (!Q && a) {
      (Q = document.createElement("canvas")), (Q.width = a.width), (Q.height = a.height);
      const M = Q.getContext("2d");
      M.drawImage(a, 0, 0),
        (M.globalCompositeOperation = "source-in"),
        (M.fillStyle = g.coop ? (A ? "#b6cff4" : "#f1d79a") : "#f1dcae"),
        M.fillRect(0, 0, Q.width, Q.height),
        this.silhouetteCache.set(C, Q);
    }
    if (!Q) return;
    E.save(), E.beginPath();
    for (const M of o) E.rect(M.x, M.y, M.w, M.h);
    E.clip(),
      E.translate(B.x, B.y),
      E.translate(0, 32),
      E.scale(0.85 * (B.face < 0 ? -1 : 1), 0.85),
      E.translate(0, -32);
    const t = Math.min(100 / i.maxHeight, 86 / i.maxWidth),
      h = -i.anchor[0] * t,
      s = 32 - i.anchor[1] * t,
      U = i.cell * t;
    (E.globalAlpha = 0.3),
      E.drawImage(Q, h, s, U, U),
      (E.globalAlpha = 0.16),
      (E.globalCompositeOperation = "lighter"),
      E.drawImage(Q, h, s, U, U),
      E.restore();
  }
  lastOccluded = 0;
  ultimates() {
    const A = this.game,
      g = this.c,
      B = new X(g),
      E = A.save.data.settings.reducedMotion;
    for (const o of A.ults) {
      const i = A.actorPlayer(o.owner);
      if ((g.save(), o.hero === 0)) {
        if (o.t < 0.15) {
          const C = o.t / 0.15,
            Q = (i.face < 0 ? Math.PI : 0) + Math.PI * (1 - C * 0.15);
          this.wreckingBall(i.x, i.y - 10, Q, 190 * (0.4 + 0.6 * C), 1);
        } else if (o.t < 0.92) {
          const C = i.face < 0 ? -1 : 1;
          if (!E) {
            g.globalCompositeOperation = "lighter";
            for (let Q = 0; Q < 6; Q++) {
              const a = o.a - C * (0.18 + Q * 0.16);
              (g.globalAlpha = 0.22 * (1 - Q / 6)),
                (g.strokeStyle = "#ffd9a8"),
                (g.lineWidth = 46 - Q * 5),
                g.beginPath(),
                g.ellipse(
                  i.x,
                  i.y - 10,
                  190,
                  190 * 0.62,
                  0,
                  Math.min(a, a + C * 0.17),
                  Math.max(a, a + C * 0.17),
                ),
                g.stroke();
            }
            (g.globalCompositeOperation = "source-over"), (g.globalAlpha = 1);
          }
          this.wreckingBall(i.x, i.y - 10, o.a, 190, 1);
        } else if (o.t < 1.05) {
          const C = (o.t - 0.92) / 0.13,
            Q = i.x + (i.face < 0 ? -1 : 1) * 70;
          this.wreckingBall(Q, i.y - 180 + C * 170, Math.PI / 2, 0, 1.25);
        }
      } else if (o.hero === 1) {
        const I = Math.min(1, o.t / 0.35, (o.dur - o.t) / 0.4),
          C = 300;
        g.globalAlpha = 0.5 * I;
        const Q = g.createRadialGradient(o.x, o.y, 20, o.x, o.y, C);
        Q.addColorStop(0, "#05040a"),
          Q.addColorStop(0.75, "#0d0a1ccc"),
          Q.addColorStop(1, "#1b153300"),
          (g.fillStyle = Q),
          g.beginPath(),
          g.ellipse(o.x, o.y, C, C * 0.62, 0, 0, Math.PI * 2),
          g.fill(),
          (g.globalAlpha = 0.75 * I),
          B.ellipse(o.x, o.y, C, C * 0.62, "transparent", "#cfc3f2", 3),
          g.setLineDash([10, 14]),
          (g.lineDashOffset = -A.time * 30),
          B.ellipse(o.x, o.y, C - 16, (C - 16) * 0.62, "transparent", "#8a7bb8", 2),
          g.setLineDash([]);
        const a = o.x,
          t = o.y - 170 - Math.sin(A.time * 2) * 4;
        (g.globalCompositeOperation = "lighter"), (g.globalAlpha = 0.5 * I);
        const h = g.createRadialGradient(a, t, 20, a, t, 90);
        h.addColorStop(0, "#e9e2ff"),
          h.addColorStop(1, "#6b58b000"),
          (g.fillStyle = h),
          g.fillRect(a - 90, t - 90, 180, 180),
          (g.globalCompositeOperation = "source-over"),
          (g.globalAlpha = I),
          B.ellipse(a, t, 34, 34, "#f3efff", F, 3),
          B.ellipse(a + 13, t - 5, 30, 30, "#120f1f", "transparent", 0);
      } else if (o.hero === 2)
        for (const I of o.targets) {
          if (I.done) continue;
          const C = Math.max(0, Math.min(1, 1 - (I.t - o.t) / 0.45));
          (g.globalAlpha = 0.35 + 0.5 * C),
            B.ellipse(I.x, I.y, 110, 68, "#ff5a3a18", "#ff8a5a", 2.5),
            B.ellipse(I.x, I.y, 110 * (1 - C * 0.85), 68 * (1 - C * 0.85), "transparent", "#ffd0a0", 2),
            (g.globalAlpha = 0.25 + 0.5 * C),
            B.ellipse(I.x, I.y, 30 + 30 * C, (30 + 30 * C) * 0.55, "#000000", "transparent", 0),
            (g.globalAlpha = 1);
          const Q = I.y - 520 * (1 - C) ** 1.6 - 30;
          if (
            (g.save(),
            g.translate(I.x, Q),
            g.rotate(A.time * 6 + I.x),
            B.shape("M-30-8L-14-30 14-28 32-6 26 22 0 32-24 22Z", B.grad("#a39486", "#4a3f39"), F, 4),
            B.line(-14, -18, 8, -20, "#e8d8c466", 3),
            g.restore(),
            !E)
          )
            for (let a = 1; a < 4; a++)
              (g.globalAlpha = 0.18 / a),
                B.ellipse(I.x, Q - a * 26, 22 - a * 4, 22 - a * 4, "#ffb070", "transparent", 0);
        }
      else if (o.hero === 3) {
        const I = Math.min(340, (o.t / 0.8) * 340),
          C = Math.min(1, (o.dur - o.t) / 0.6);
        o.t < 0.9 &&
          ((g.globalAlpha = 0.55 * (1 - o.t / 0.9)),
          (g.lineWidth = 34),
          (g.strokeStyle = "#9fcf4a"),
          g.beginPath(),
          g.ellipse(o.x, o.y, I, I * 0.62, 0, 0, Math.PI * 2),
          g.stroke(),
          (g.lineWidth = 6),
          (g.strokeStyle = "#e5f7a8"),
          g.beginPath(),
          g.ellipse(o.x, o.y, I, I * 0.62, 0, 0, Math.PI * 2),
          g.stroke()),
          o.t > 0.6 &&
            ((g.globalAlpha = 0.2 * C * (0.85 + 0.15 * Math.sin(A.time * 5))),
            B.ellipse(o.x, o.y, 340, 340 * 0.62, "#6f9a2a", "transparent", 0),
            (g.globalAlpha = 0.55 * C),
            g.setLineDash([16, 12]),
            (g.lineDashOffset = A.time * 24),
            B.ellipse(o.x, o.y, 340, 340 * 0.62, "transparent", "#c9e57a", 2.5),
            g.setLineDash([]));
      } else if (o.hero === 4) {
        if (o.t < 2) {
          (g.globalCompositeOperation = "lighter"), (g.globalAlpha = 0.28 * (1 - o.t / 2.2));
          const I = g.createRadialGradient(i.x, i.y - 14, 10, i.x, i.y - 14, 120);
          I.addColorStop(0, "#ffd774"),
            I.addColorStop(1, "#ffb34a00"),
            (g.fillStyle = I),
            g.fillRect(i.x - 120, i.y - 134, 240, 240);
        }
      } else if (o.t < 0.6) {
        const I = o.t / 0.6;
        (g.globalAlpha = 0.5 + 0.5 * I),
          B.ellipse(o.x, o.y, 95, 59, "#7fe6ff14", "#bff6ff", 2.5),
          g.save(),
          g.translate(o.x, o.y),
          g.scale(1, 0.62),
          g.rotate(A.time * 3);
        for (let C = 0; C < 4; C++)
          g.rotate(Math.PI / 2), B.line(60 - I * 30, 0, 110 - I * 30, 0, "#e4fdff", 3);
        g.restore();
      } else {
        const I = Math.min(1, (o.dur - o.t) / 0.3),
          C = E ? 0 : Math.sin(A.time * 40) * 4;
        g.globalCompositeOperation = "lighter";
        const Q = o.y - 1100;
        for (const [t, h, s] of [
          [120 + C, 0.18, "#4fd8ff"],
          [70 + C, 0.35, "#9ff0ff"],
          [26, 0.9, "#ffffff"],
        ]) {
          const U = g.createLinearGradient(o.x - t / 2, 0, o.x + t / 2, 0);
          U.addColorStop(0, s + "00"),
            U.addColorStop(0.5, s),
            U.addColorStop(1, s + "00"),
            (g.globalAlpha = h * I),
            (g.fillStyle = U),
            g.fillRect(o.x - t / 2, Q, t, o.y - Q);
        }
        g.globalAlpha = 0.55 * I;
        const a = g.createRadialGradient(o.x, o.y, 10, o.x, o.y, 130);
        a.addColorStop(0, "#ffffff"),
          a.addColorStop(0.35, "#7fe6ff"),
          a.addColorStop(1, "#1a6aff00"),
          (g.fillStyle = a),
          g.save(),
          g.translate(o.x, o.y),
          g.scale(1, 0.62),
          g.fillRect(-130, -130, 260, 260),
          g.restore();
      }
      g.restore();
    }
  }
  wreckingBall(A, g, B, E, o) {
    const i = this.c,
      I = new X(i),
      C = A + Math.cos(B) * E,
      Q = g + Math.sin(B) * E * 0.62;
    E > 0 &&
      (I.line(A, g, C, Q, F, 7), i.setLineDash([7, 5]), I.line(A, g, C, Q, "#9c9184", 4), i.setLineDash([])),
      i.save(),
      i.translate(C, Q),
      i.scale(o, o),
      I.ellipse(0, 0, 30, 30, I.grad("#7b746c", "#26221f"), F, 4),
      I.ellipse(-9, -10, 9, 6, "#d8cfc266", "transparent", 0),
      I.rect(-7, -38, 14, 12, 3, "#5d564f", F, 3),
      i.restore();
  }
  drawActor(A) {
    const g = this.game,
      B = this.c,
      E = new X(B),
      o = g.player;
    if (o.hp <= 0 && g.coop) {
      B.save(),
        B.translate(o.x, o.y),
        B.rotate(-Math.PI / 2),
        (B.globalAlpha = 0.55),
        this.player(0, 0, g.character, g.time, !1, !1, o.face),
        B.restore(),
        E.ellipse(o.x, o.y + 24, 27, 14, "#ff345511", "#ff7285", 1.5),
        (B.font = "bold 14px Figtree"),
        (B.textAlign = "center"),
        (B.fillStyle = "#ffe4c0"),
        B.fillText(`BELEBEN · ${Math.max(0, 3 - g.coop.revive[A]).toFixed(1)} s`, o.x, o.y - 42);
      return;
    }
    E.ellipse(
      o.x,
      o.y + 24,
      27.2,
      14.45,
      "#d5e5ff06",
      g.coop ? (A ? "#a9c6ee88" : "#eac57b88") : "#d5e5ff44",
      1.2,
    );
    const i = VB(
        g.character,
        g.dashTime > 0 ? 1 - g.dashTime / Math.max(0.01, g.dashDur) : -1,
        g.dashLand,
        Math.sign(g.dashX) || o.face,
        g.save.data.settings.reducedMotion,
        g.time,
      ),
      I = o.x + i.ox,
      C = o.y + i.oy,
      Q = C + 32 - i.pivot;
    B.save(),
      B.translate(I, Q),
      B.rotate(i.rot),
      B.scale(i.sx, i.sy),
      B.translate(-I, -Q),
      (B.globalAlpha = (o.invuln > 0 && g.dashTime <= 0 && Math.sin(g.time * 35) > 0 ? 0.76 : 1) * i.alpha),
      i.alpha > 0.01 &&
        this.player(I, C, g.character, o.walk, Math.hypot(o.vx, o.vy) > 0, o.flash > 0, o.face, o.moveBlend),
      B.restore(),
      (B.globalAlpha = 1),
      g.character === 1 && (g.dashTime > 0 || g.dashLand > 0) && this.bodyCloud(I, C, g),
      g.coop &&
        ((B.font = "bold 13px Figtree"),
        (B.textAlign = "center"),
        (B.fillStyle = A ? "#b6cff4" : "#edce91"),
        B.fillText(`P${A + 1}`, o.x, o.y - 69));
  }
  render(A) {
    const g = this.viewport;
    [g.x, g.y, g.width, g.height, this.mode].join(":") !== this.viewportKey && this.resize();
    const E = this.targetDpr;
    Math.abs(this.dpr - E) > 0.001 &&
      ((this.dpr = E),
      (this.canvas.width = Math.round(this.viewport.width * E)),
      (this.canvas.height = Math.round(this.viewport.height * E))),
      (this.c.imageSmoothingEnabled = !0),
      (this.c.imageSmoothingQuality = this.mode === "menu" ? "high" : "low");
    const o = performance.now(),
      i = this.c,
      I = this.game,
      C = I.player,
      Q = new X(i);
    if (
      ((this.fps = this.fps * 0.94 + 0.06 / Math.max(0.001, A)),
      i.setTransform(this.dpr * this.scale, 0, 0, this.dpr * this.scale, 0, 0),
      this.mode === "menu")
    ) {
      this.menu(), (this.frameMs = performance.now() - o);
      return;
    }
    if (I.phase === "hub") {
      IC(this, A), (this.frameMs = performance.now() - o);
      return;
    }
    let a = I.player.x,
      t = I.player.y;
    if (I.coop) {
      const l = I.coop
          .snapshot()
          .map((oA) => oA.player)
          .filter((oA) => oA.hp > 0),
        w = l.length ? l : I.coop.actors.map((oA) => oA.player),
        q = w.map((oA) => oA.x),
        m = w.map((oA) => oA.y);
      (a = (Math.min(...q) + Math.max(...q)) / 2), (t = (Math.min(...m) + Math.max(...m)) / 2);
      const S = this.baseZoom / this.coopFit,
        VA = Math.min(
          1,
          this.w / S / (Math.max(...q) - Math.min(...q) + 380),
          this.h / S / (Math.max(...m) - Math.min(...m) + 330),
        );
      this.coopFit += (V(VA, 0.5, 1) - this.coopFit) * Math.min(1, A * 4);
    } else this.coopFit = 1;
    const h = this.paintedPlate,
      s = h ? -h.x : 1e3,
      U = h ? -h.y : 720,
      M = V(a, Math.min(0, -s + this.viewWidth / 2), Math.max(0, s - this.viewWidth / 2)),
      r = V(t, I.yMid + Math.min(0, -U + this.viewHeight / 2), I.yMid + Math.max(0, U - this.viewHeight / 2));
    if (
      ((this.camX += (M - this.camX) * Math.min(1, A * 9)),
      (this.camY += (r - this.camY) * Math.min(1, A * 9)),
      h)
    ) {
      const l = Math.max(0, -h.x - this.viewWidth / 2),
        w = Math.max(0, -h.y - this.viewHeight / 2);
      (this.camX = V(this.camX, -l, l)), (this.camY = V(this.camY, -w, w));
    }
    i.save(), i.scale(this.cameraZoom, this.cameraZoom);
    const Y = h || I.save.data.settings.reducedMotion ? 0 : I.shake * I.save.data.settings.shake;
    if (h && !I.save.data.settings.reducedMotion && I.shake * I.save.data.settings.shake > 0.2) {
      const l = I.shake * I.save.data.settings.shake,
        w = 1 + Math.min(0.012, l * 0.0015);
      i.translate(this.viewWidth / 2, this.viewHeight / 2),
        i.scale(w, w),
        i.rotate(p(-1, 1) * Math.min(0.002, l * 3e-4)),
        i.translate(-this.viewWidth / 2, -this.viewHeight / 2);
    }
    if (
      (i.translate(this.viewWidth / 2 - this.camX + p(-Y, Y), this.viewHeight / 2 - this.camY + p(-Y, Y)),
      this.floor(),
      this.prepareCircles(),
      !I.save.data.settings.reducedMotion && I.save.data.settings.particles > 0)
    ) {
      const l = I.mobile ? 12 : 22;
      for (let w = 0; w < l; w++) {
        const q = ((w * 317.4 + I.time * (I.map === 3 ? 11 : 2)) % 1920) - 960,
          m = ((w * 191.7 - I.time * (I.map === 3 ? -8 : 4) + 5e3) % 1360) - 680 + I.yMid;
        (i.globalAlpha = (0.12 + Math.sin(I.time + w) * 0.07) * I.save.data.settings.particles),
          Q.ellipse(q, m, I.map === 3 ? 1.8 : 1.2, (I.map === 3, 1.2), IA[I.map].color, F, 0);
      }
      i.globalAlpha = 1;
    }
    (i.globalAlpha = 0.7),
      !I.climbState.active && !h && d.image(i, xi(), this.camX * 0.08, -635 + Math.sin(I.time * 0.12) * 7),
      (i.globalAlpha = 1),
      I.climbState.active && this.climbEdges(),
      this.vfxGround(),
      this.telegraphs(),
      this.foeTelegraphs(),
      I.loot.each((l) => {
        const w = ["#8bbcef", "#ebc98a", "#d4b2f0", "#ecb2b2", "#ffc36f"][l.kind],
          q = l.y - l.z,
          m = l.kind >= 2 ? 8 : (l.kind === 1, 5);
        (i.globalAlpha = 0.25),
          Q.ellipse(l.x, l.y + 3, 5, 2, F, F, 0),
          (i.globalAlpha = 1),
          l.kind === 0
            ? (Q.shape(`M${l.x} ${q - 6}l4 6-4 6-4-6Z`, w, F, 1),
              Q.line(l.x, q - 3, l.x + 1, q, "#ecf8cf", 1))
            : l.kind === 1
              ? (Q.rect(l.x - 4, q - 4, 8, 7, 2, w, F, 1),
                Q.line(l.x - 2, q - 2, l.x + 2, q - 2, "#fff0bf", 1))
              : (Q.rect(l.x - m, q - m, m * 2, m * 2, 5, w, F, 2),
                l.kind === 4
                  ? (i.save(),
                    i.translate(l.x, q),
                    i.rotate(Math.PI / 4),
                    Q.rect(-7, -7, 14, 14, 2, "#ffc36f", "#fdf0ce", 1.5),
                    i.restore(),
                    Q.shape(`M${l.x - 3} ${q - 4}l7 4-7 4Z`, "#66451c", F, 0))
                  : l.kind === 3
                    ? (Q.line(l.x - 4, q, l.x + 4, q, "#fff3dc", 2),
                      Q.line(l.x, q - 4, l.x, q + 4, "#fff3dc", 2))
                    : (Q.line(l.x - 4, q - 4, l.x - 4, q + 4, F, 2),
                      Q.line(l.x + 4, q - 4, l.x + 4, q + 4, F, 2),
                      Q.line(l.x - 4, q + 4, l.x + 4, q + 4, F, 2)));
      });
    const c = I.enemies.objects
      .filter(
        (l) =>
          l.active &&
          Math.abs(l.x - this.camX) < this.viewWidth / 2 + 130 &&
          Math.abs(l.y - this.camY) < this.viewHeight / 2 + 150,
      )
      .sort((l, w) => l.y - w.y);
    for (const l of I.deaths.objects) {
      if (
        !l.active ||
        Math.abs(l.x - this.camX) > this.viewWidth / 2 + 130 ||
        Math.abs(l.y - this.camY) > this.viewHeight / 2 + 150
      )
        continue;
      if (l.foe >= 0) {
        const m = 1 - l.life / l.max;
        i.save(),
          i.translate(l.x, l.y),
          (i.globalAlpha = (1 - m) * I.save.data.settings.particles),
          i.scale(1 + m * 0.15, 1 - m * 0.55),
          this.drawFoe(
            { foe: l.foe, face: l.face, age: 0, flash: 0, flank: 1, state: 0, timer: 0 },
            $[l.foe].frames.recover[0] ?? 0,
          ),
          i.restore();
        continue;
      }
      const w = d.enemy(l.type, l.elite, 0),
        q = 1 - l.life / l.max;
      if (l.type >= 8 && q < 0.32) {
        i.save(),
          i.translate(l.x, l.y),
          i.scale(1 + q * 0.25, 1 - q * 0.9),
          i.rotate(Math.sin(q * 40) * 0.035),
          (i.globalAlpha = (1 - q) * I.save.data.settings.particles),
          d.image(i, w),
          i.restore();
        continue;
      }
      for (let m = 0; m < 3; m++) {
        const S = l.angle + (m - 1) * 1.7;
        i.save(),
          (i.globalAlpha = (1 - q) * 0.65 * I.save.data.settings.particles),
          i.translate(l.x + Math.cos(S) * q * 52, l.y + Math.sin(S) * q * 38 - q * 25),
          i.rotate((m - 1) * q * 0.9),
          i.drawImage(
            w.canvas,
            (m * w.canvas.width) / 3,
            0,
            w.canvas.width / 3,
            w.canvas.height,
            -w.ox + (m * w.w) / 3,
            -w.oy,
            w.w / 3,
            w.h,
          ),
          i.restore();
      }
    }
    this.drawGhosts();
    const R = !!I.climb && I.climbState?.def.id === "down";
    for (const l of FA(I.map)) {
      if (l.kind === 5 || !l.light) continue;
      const w = ki(l.light);
      (i.globalAlpha = (0.8 + Math.sin(I.time * 2 + l.x) * 0.1) * (R ? 0.22 : 1)),
        d.image(i, w, l.x, l.y - l.h + 15);
    }
    i.globalAlpha = 1;
    const G = [
      ...(I.coop
        ? I.coop
            .snapshot()
            .flatMap((l, w) => [
              { y: l.player.y, draw: () => I.withActor(w, () => this.drawActor(w)) },
              ...l.weapons
                .filter((q) => q.id !== "turret" && q.id !== "summon")
                .map((q) => ({
                  y: I.withActor(w, () => I.weaponPosition(q, I.weapons.indexOf(q)).y) + 16,
                  draw: () => I.withActor(w, () => this.heldWeapon(q, l.weapons.indexOf(q))),
                })),
            ])
        : [
            { y: I.player.y, draw: () => this.drawActor(0) },
            ...I.weapons
              .filter((l) => l.id !== "turret" && l.id !== "summon")
              .map((l) => ({
                y: I.weaponPosition(l, I.weapons.indexOf(l)).y + 16,
                draw: () => this.heldWeapon(l, I.weapons.indexOf(l)),
              })),
          ]),
      ...I.allTurrets.map((l) => ({ y: l.y, draw: () => this.turret(l) })),
      ...FA(I.map)
        .filter((l) => l.kind !== 6 || (l.spr && this.plateSpriteVisible(l)))
        .map((l) => ({ y: l.y, draw: () => (l.kind === 5 ? this.minePillar(l) : this.drawCover(l)) })),
    ].sort((l, w) => l.y - w.y);
    let n = 0,
      D = 0;
    ((l) => {
      for (; n < c.length || D < G.length; ) {
        const w = c[n]?.y ?? 1 / 0,
          q = G[D]?.y ?? 1 / 0;
        if (Math.min(w, q) > l) break;
        if (w <= q && n < c.length) this.enemy(c[n++]);
        else if (D < G.length) G[D++].draw();
        else break;
      }
    })(1 / 0),
      I.ults.length && this.ultimates(),
      I.coop
        ? I.coop.snapshot().forEach((l, w) => I.withActor(w, () => this.occludedSilhouette(w)))
        : this.occludedSilhouette(0),
      I.allCompanions.forEach((l, w) => this.companion(l.x, l.y, l.angle, w)),
      I.blades.each((l) => {
        if (l.owner) {
          i.save(),
            (i.strokeStyle = l.owner.id === "saw" ? "#edc38288" : "#b7c9ff99"),
            (i.lineWidth = l.returning ? 2.5 : 1.5),
            i.beginPath();
          for (let w = 1; w <= 8; w++) {
            const q = (l.trailHead + w) % 8;
            w === 1 ? i.moveTo(l.trailX[q], l.trailY[q]) : i.lineTo(l.trailX[q], l.trailY[q]);
          }
          i.stroke(),
            i.translate(l.x, l.y),
            i.rotate(I.time * (l.owner.id === "saw" ? 21 : 12)),
            i.scale(zA(l.owner.id), zA(l.owner.id)),
            d.image(i, l.owner.id === "saw" ? d.sawFrame(0) : d.weapon("boomerang")),
            i.restore();
        }
      }),
      I.projectiles.each((l) => {
        if (l.returning)
          i.save(),
            i.translate(l.x, l.y),
            i.rotate(I.time * 17),
            i.scale(0.43, 0.43),
            d.image(i, d.weapon("boomerang")),
            i.restore();
        else if (l.enemy) {
          if (
            (Q.ellipse(l.x, l.y + 6, l.r + 2, (l.r + 2) * 0.45, "#110b1444", F, 0),
            I.save.data.settings.dangerContrast)
          ) {
            i.save(), i.translate(l.x, l.y - 3);
            const w = l.r + 6;
            Q.shape(`M0${-w}L${w} 0 0 ${w} ${-w} 0Z`, "#9f1738", "#ffe8cd", 2), i.restore();
          } else Q.ellipse(l.x, l.y - 3, l.r + 3, l.r + 3, "#4b0b1d", "#ff6178", 1.5);
          Q.ellipse(l.x, l.y - 3, l.r * 0.7, l.r * 0.7, "#ff9d9e", "#ff3155", 1),
            Q.ellipse(l.x - 2, l.y - 2, 2, 2, "#ffedc3", F, 0);
        } else
          I.enemies.count < 320 && Q.ellipse(l.x, l.y + 4, l.r + 2, l.r * 0.45, "#0d102244", F, 0),
            i.save(),
            i.translate(0, -6),
            Q.line(l.x - l.vx * 0.045, l.y - l.vy * 0.045, l.x, l.y, l.color + "50", l.r * 1.5),
            Q.line(l.x - l.vx * 0.022, l.y - l.vy * 0.022, l.x, l.y, "#fff6dccc", l.r * 0.55),
            Q.ellipse(l.x, l.y, l.r, l.r * 0.65, l.color, F, 1),
            i.restore();
      });
    for (const l of I.beams) {
      if ((i.save(), (i.globalAlpha = l.life / l.max), l.wide < 6)) {
        const w = l.tx - l.x,
          q = l.ty - l.y;
        i.beginPath(), i.moveTo(l.x, l.y);
        for (let m = 1; m < 5; m++)
          i.lineTo(
            l.x + (w * m) / 5 + Math.sin(m * 12 + I.time * 70) * 5,
            l.y + (q * m) / 5 + Math.cos(m * 4 + I.time * 80) * 5,
          );
        i.lineTo(l.tx, l.ty),
          (i.strokeStyle = l.color + "44"),
          (i.lineWidth = l.wide + 4),
          i.stroke(),
          (i.strokeStyle = l.color),
          (i.lineWidth = l.wide),
          i.stroke();
      } else
        Q.line(l.x, l.y, l.tx, l.ty, l.color + "33", l.wide + 7),
          Q.line(l.x, l.y, l.tx, l.ty, l.color, l.wide),
          Q.line(l.x, l.y, l.tx, l.ty, "#fff0c7aa", 2);
      i.restore();
    }
    if (
      (this.forkEffects(),
      I.particles.each((l) => {
        (i.globalAlpha = V(l.life / l.max, 0, 1)),
          l.kind === 1
            ? (i.save(),
              i.translate(l.x, l.y),
              i.rotate(l.life * 8),
              Q.rect(-l.size / 2, -l.size / 2, l.size * 1.5, l.size, 2, l.color, F, 1),
              i.restore())
            : l.kind === 3
              ? Q.line(l.x, l.y, l.x - I.dashX * 11, l.y - I.dashY * 11, l.color, l.size * 0.6)
              : Q.ellipse(l.x, l.y, l.size * Math.min(1, l.life * 5), l.size * 0.7, l.color, F, 0);
      }),
      (i.globalAlpha = 1),
      this.foeBurstsDraw(),
      this.vfxTop(),
      this.telegraphs(!0),
      I.numbers.each((l) => {
        // Game Feel: Zahlen ploppen auf, setzen sich und schrumpfen beim Ausblenden
        const age = l.max - l.life,
          rm = I.save.data.settings.reducedMotion,
          pop = rm ? 1 : 1 + Math.max(0, 1 - age / (l.crit ? 0.16 : 0.1)) * (l.crit ? 1.1 : 0.55),
          out = l.life < 0.18 ? 0.6 + (l.life / 0.18) * 0.4 : 1,
          w = pop * out * (l.crit ? 1.12 : 1),
          big = Number(l.text.replace(/[^0-9]/g, "")) >= 100;
        (i.globalAlpha = Math.min(1, l.life * 5)),
          i.save(),
          i.translate(l.x, l.y),
          i.scale(w, w),
          (i.font = `900 ${l.crit ? (big ? 34 : 29) : big ? 23 : 18}px "Barlow Condensed",Figtree,system-ui`),
          (i.textAlign = "center"),
          (i.lineJoin = "round"),
          (i.strokeStyle = l.crit ? "#2a0f00" : "#0b0c0e"),
          (i.lineWidth = l.crit ? 5 : 3.5),
          i.strokeText(l.text, 0, 0);
        if (l.crit) {
          const gr = i.createLinearGradient(0, -22, 0, 4);
          gr.addColorStop(0, "#fff3c4"), gr.addColorStop(0.45, "#ffc21a"), gr.addColorStop(1, "#ff7a1a");
          (i.fillStyle = gr), age < 0.25 && !rm && ((i.shadowColor = "#ff7a1acc"), (i.shadowBlur = 14));
        } else i.fillStyle = l.color;
        i.fillText(l.text, 0, 0), i.restore();
      }),
      (i.globalAlpha = 1),
      I.save.data.settings.manual && I.input.aimActive)
    ) {
      const l = Math.atan2(I.input.aimY, I.input.aimX),
        w = C.x + Math.cos(l) * 130,
        q = C.y + Math.sin(l) * 130;
      Q.ellipse(w, q, 8, 8, "#ffffff00", "#e3e9c899", 1.3),
        Q.line(w - 12, q, w - 5, q, "#e3e9c8", 1.3),
        Q.line(w + 5, q, w + 12, q, "#e3e9c8", 1.3);
    }
    (
      (i.restore(),
      this.vignette &&
        (this.paintedPlate && (i.globalAlpha = 0.3),
        i.drawImage(this.vignette, 0, 0, this.w, this.h),
        (i.globalAlpha = 1)),
      this.flashOverlay &&
        !I.save.data.settings.reducedMotion &&
        I.pulse > 0 &&
        this.fxFlashes > 0 &&
        (i.save(),
        (i.globalAlpha = Math.min(0.28, I.pulse * 0.55) * this.fxFlashes),
        i.drawImage(this.flashOverlay, 0, 0, this.w, this.h),
        i.restore()),
      I.abilityFlash > 0 &&
        !I.save.data.settings.reducedMotion &&
        ((i.strokeStyle = J[I.character].color + "66"),
        (i.globalAlpha = this.fxFlashes),
        (i.lineWidth = 3),
        i.strokeRect(3, 3, this.w - 6, this.h - 6),
        (i.globalAlpha = 1)))
    );
    // Keine Ereignis-Banner mehr während der Runde (Wunsch des Spielers)
    I.debug &&
      (Q.rect(14, this.h - 117, 276, 102, 8, "#121923ed", "#7b8da16b", 1),
      (i.font = "11px monospace"),
      (i.textAlign = "left"),
      (i.fillStyle = "#d6e4f8"),
      [
        `F3 · ${Math.round(this.fps)} FPS / ${this.frameMs.toFixed(2)} ms JS`,
        `Gegner ${I.enemies.count}  Geschosse ${I.projectiles.count}`,
        `Partikel ${I.particles.count}  Motten ${I.companions.length}`,
        `F4: +400 | F6: Testschutz ${I.god ? "AN" : "AUS"}`,
        `Qualität ${I.save.data.settings.quality} | ${this.dpr.toFixed(2)}×`,
      ].forEach((l, w) => i.fillText(l, 25, this.h - 97 + w * 17))),
      (this.frameMs = performance.now() - o);
  }
  menuBackdrop(A, g) {
    const B = `${this.w}x${this.h}:${Math.round(A)}:${Math.round(g)}`;
    if (this.menuCache && this.menuCacheKey === B) return this.menuCache;
    const E = document.createElement("canvas");
    (E.width = Math.max(1, Math.round(this.w))), (E.height = Math.max(1, Math.round(this.h)));
    const o = E.getContext("2d", { alpha: !1 });
    (o.imageSmoothingQuality = "high"), (o.fillStyle = "#181917"), o.fillRect(0, 0, E.width, E.height);
    const i = WB(aB);
    o.save(),
      (o.filter = "blur(1.2px) brightness(0.78) saturate(0.9)"),
      o.drawImage(i, A - this.w * 0.65, g - this.h * 0.65, this.w * 1.3, this.h * 1.3),
      o.restore(),
      o.save(),
      o.translate(A, g),
      o.scale((this.w * 1.3) / 2e3, (this.h * 1.3) / 1440);
    for (const I of sB) {
      const C = pg(I.kind, I.r, I.h);
      o.drawImage(C.canvas, I.x - C.ox, I.y - C.oy, C.w, C.h);
    }
    for (const I of [...sB].sort((C, Q) => C.y - Q.y)) d.image(o, IB(I), I.x, I.y);
    return o.restore(), Z.has("floor-" + aB) && ((this.menuCache = E), (this.menuCacheKey = B)), E;
  }
  // t99u: Noir-Partikel im Hauptmenü – aufsteigende Rostfunken/Glut + feiner Staub, der nur im Lichtkegel aufleuchtet.
  menuFx(A, i, I, E, B, G) {
    const S = this.mfx || (this.mfx = { t: B.time, emb: [], dust: [], glow: null }),
      ps = G ? G.ps : 1,
      dt = Math.max(0, Math.min(0.05, B.time - S.t)),
      W = this.w,
      H = this.h,
      P = Math.min(1, B.save.data.settings.particles),
      mob = B.mobile || W < 700,
      nE = Math.round((mob ? 30 : 52) * P),
      nD = Math.round((mob ? 46 : 80) * P),
      top = G ? G.top : -40,
      bot = G ? G.bot : I + 150,
      half = G ? G.half : (y) => 55 + ((y - top) / (bot - top)) * 140,
      ax = G ? G.ax : (y) => i + 20 + ((y - top) / (bot - top)) * 10;
    G && S.geo !== G.key && ((S.geo = G.key), (S.emb.length = 0), (S.dust.length = 0));
    S.t = B.time;
    if (!S.glow) {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const x = c.getContext("2d"),
        r = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      r.addColorStop(0, "rgba(255,200,120,1)"), r.addColorStop(0.22, "rgba(255,120,30,0.6)"), r.addColorStop(1, "rgba(200,60,10,0)");
      (x.fillStyle = r), x.fillRect(0, 0, 64, 64), (S.glow = c);
    }
    const ember = (y) => ({
      x: G ? G.ex0 + Math.random() * (G.ex1 - G.ex0) : Math.random() * W,
      y: y ?? (G ? G.ey + Math.random() * 30 * ps : H + 10 + Math.random() * 40),
      vx: (Math.random() - 0.5) * 14 * ps,
      vy: -(26 + Math.random() * 46) * ps,
      ph: Math.random() * 6.28,
      age: 0,
      life: 4 + Math.random() * 5,
      size: (1.9 + Math.random() * 2.2) * ps,
      hot: Math.random() < 0.3,
    });
    const dust = () => {
      const y = top + Math.random() * (bot - top + 120);
      return { x: ax(y) + (Math.random() * 2 - 1) * half(y) * 1.35, y, vx: (Math.random() - 0.5) * 8 * ps, vy: (Math.random() - 0.5) * 6 * ps, ph: Math.random() * 6.28, size: (1.1 + Math.random() * 1.6) * ps };
    };
    for (; S.emb.length < nE; ) S.emb.push(ember(G ? G.top + Math.random() * (G.ey - G.top) : Math.random() * H));
    for (; S.dust.length < nD; ) S.dust.push(dust());
    S.emb.length > nE && (S.emb.length = nE), S.dust.length > nD && (S.dust.length = nD);
    A.save();
    for (const d of S.dust) {
      (d.ph += dt * 0.9), (d.x += (d.vx + Math.sin(d.ph) * 4 * ps) * dt), (d.y += (d.vy + (Math.cos(d.ph * 0.7) * 3 + 2) * ps) * dt);
      if (d.y > bot + 140 || d.y < top - 10 || Math.abs(d.x - ax(d.y)) > half(d.y) * 1.6) Object.assign(d, dust());
      const k = Math.max(0, 1 - Math.abs(d.x - ax(d.y)) / half(Math.min(d.y, bot))),
        f = d.y > bot ? Math.max(0, 1 - (d.y - bot) / 140) : 1,
        a = Math.min(1, 0.1 + 1.1 * k) * f * (0.65 + 0.35 * Math.sin(d.ph * 3.1));
      if (a < 0.02) continue;
      (A.globalAlpha = a * P), (A.fillStyle = "#ffe6bd"), A.beginPath(), A.arc(d.x, d.y, d.size, 0, Math.PI * 2), A.fill();
    }
    A.globalCompositeOperation = "lighter";
    for (const e of S.emb) {
      (e.age += dt), (e.ph += dt * (2 + e.size / ps)), (e.x += (e.vx + Math.sin(e.ph) * 12 * ps) * dt), (e.y += e.vy * dt), (e.vy *= 1 - dt * 0.05);
      if (e.age > e.life || e.y < -20) {
        Object.assign(e, ember());
        continue;
      }
      const u = e.age / e.life,
        fl = 0.7 + 0.3 * Math.sin(e.ph * 4.3) * Math.sin(e.ph * 1.7),
        a = Math.min(1, u * 6) * (1 - u) ** 1.3 * fl,
        r = e.size * (e.hot ? 1.5 : 1),
        k = r * 9;
      (A.globalAlpha = a * P), A.drawImage(S.glow, e.x - k, e.y - k, k * 2, k * 2);
      (A.globalAlpha = a * P),
        (A.fillStyle = e.hot ? "#fff0c8" : u < 0.5 ? "#ffb35a" : "#e8622a"),
        A.beginPath(),
        A.ellipse(e.x, e.y, r * 0.8, r * 1.5, Math.sin(e.ph) * 0.4, 0, Math.PI * 2),
        A.fill();
    }
    A.restore();
    typeof window < "u" && (window.__menuEmbers = { n: S.emb.length, d: S.dust.length });
  }
  mnImage() {
    if (!this.mnImg) {
      const u = getComputedStyle(document.documentElement).getPropertyValue("--mn-bg").trim().replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
      if (!u) return null;
      (this.mnImg = new Image()), (this.mnImg.src = u);
    }
    return this.mnImg.complete && this.mnImg.naturalWidth ? this.mnImg : null;
  }
  // t105u: Hauptmenü nach Konzept A – Schiefer, Glühbirne mit Lichtkegel (flackert dauerhaft), NS-Stempel, Held zwischen Schrotthaufen, Glut.
  menuNoir(img) {
    const A = this.c,
      B = this.game,
      S = nsStage(),
      k = S.k,
      iw = img.naturalWidth,
      ih = img.naturalHeight;
    A.save(), A.setTransform(this.dpr, 0, 0, this.dpr, 0, 0), (A.fillStyle = "#050505"), A.fillRect(0, 0, S.vw, S.vh);
    let map, sc;
    if (S.portrait) {
      sc = 0.65 * k;
      const oy = (100 - S.q) * k;
      map = (x, y) => [(x - 640) * sc, oy + y * sc];
      A.drawImage(img, (640 * iw) / 1280, 0, (600 * iw) / 1280, ih, 0, oy, 600 * sc, 720 * sc);
      const f = A.createLinearGradient(0, oy + 560 * sc, 0, oy + 720 * sc);
      f.addColorStop(0, "rgba(5,5,5,0)"), f.addColorStop(1, "#050505"), (A.fillStyle = f), A.fillRect(0, oy + 540 * sc, S.vw, S.vh);
    } else {
      sc = k;
      const X0 = S.ox * k,
        Y0 = S.oy * k;
      map = (x, y) => [X0 + x * k, Y0 + y * k];
      A.drawImage(img, X0, Y0, 1280 * k, 720 * k);
    }
    // warmer Lichtfleck am Boden
    const [gx, gy] = map(921, 516),
      gr = A.createRadialGradient(gx, gy, 0, gx, gy, 190 * sc);
    gr.addColorStop(0, "rgba(255,170,90,0.26)"), gr.addColorStop(1, "rgba(255,150,70,0)");
    A.save(), A.translate(gx, gy), A.scale(1, 0.24), A.translate(-gx, -gy), (A.fillStyle = gr), A.fillRect(gx - 200 * sc, gy - 200 * sc, 400 * sc, 400 * sc), A.restore();
    const [hx, hy] = map(921, 433),
      hs = 3.05 * sc;
    A.save(), A.translate(hx, hy), A.scale(hs, hs), this.player(0, 0, B.character, B.time * 0.75, !1, !1, this.previewFace), A.restore();
    if (!B.save.data.settings.reducedMotion && B.save.data.settings.particles > 0) {
      const top = 30,
        bot = 560,
        P = (x, y) => map(x, y),
        [, tY] = P(0, top),
        [, bY] = P(0, bot),
        [ax0] = P(935, 0),
        u = (y) => (y - tY) / (bY - tY);
      this.menuFx(A, 0, 0, S.portrait, B, {
        key: [S.vw, S.vh].join("x"),
        ps: Math.max(0.8, sc * 1.05),
        top: tY,
        bot: bY,
        ax: (y) => ax0 + u(y) * 21 * sc,
        half: (y) => (18 + u(y) * 190) * sc,
        ex0: P(660, 0)[0],
        ex1: Math.min(S.vw, P(1240, 0)[0]),
        ey: P(0, 580)[1],
      });
    }
    // dauerhaftes Lampenflackern wie im Talentbaum
    const now = performance.now() / 1e3,
      F = this.mfl || (this.mfl = { next: now + 1.8 + Math.random() * 2.5, t0: -9, kind: 0 });
    if (!B.save.data.settings.reducedMotion && now >= F.next) {
      (F.t0 = now), (F.kind = Math.floor(Math.random() * 3)), (F.next = now + 2.6 + Math.random() * 5.2);
      try {
        !document.hidden && B.audio.buffers?.has("tb_flicker") && B.audio.sound("tb_flicker", 0.94 + Math.random() * 0.12, 0.45 + Math.random() * 0.25);
      } catch {}
    }
    const KF = [
        [[0, 0], [8, 0.32], [14, 0], [22, 0.42], [30, 0.06], [46, 0.22], [52, 0], [100, 0]],
        [[0, 0], [12, 0.5], [26, 0.5], [32, 0], [60, 0.15], [66, 0], [100, 0]],
        [[0, 0], [6, 0.2], [10, 0], [18, 0.55], [34, 0.55], [38, 0.1], [42, 0.45], [50, 0], [74, 0.18], [78, 0], [100, 0]],
      ][F.kind],
      pc = ((now - F.t0) / 0.9) * 100;
    let dim = 0;
    if (pc >= 0 && pc <= 100)
      for (let n = 1; n < KF.length; n++)
        if (pc <= KF[n][0]) {
          const [p0, v0] = KF[n - 1],
            [p1, v1] = KF[n];
          dim = v0 + ((v1 - v0) * (pc - p0)) / Math.max(1e-3, p1 - p0);
          break;
        }
    const hum = B.save.data.settings.reducedMotion ? 0 : now % 4.7 > 4.6 || (now % 4.7 > 1.45 && now % 4.7 < 1.55) ? 0.06 : 0;
    (dim = Math.max(dim, hum)) > 0 && ((A.globalAlpha = dim), (A.fillStyle = "#030303"), A.fillRect(0, 0, S.vw, S.vh), (A.globalAlpha = 1));
    (this.mnDim = dim), A.restore();
  }
  menu() {
    const A = this.c,
      g = new X(A),
      B = this.game,
      E = innerWidth <= 600 && innerHeight > innerWidth,
      o = this.menuHome ? Ag(this.uiTheme).hero : { x: 0.79, y: 0.4, shade: "left" },
      nimg = this.menuHome && this.mnImage();
    if (nimg) return this.menuNoir(nimg);
    const
      i = this.w * (E ? 0.5 : o.x),
      I = this.h * (E ? ("py" in o && o.py ? o.py : 0.68) : o.y);
    if ((A.drawImage(this.menuBackdrop(i, I), 0, 0, this.w, this.h), o.shade === "frame" && !E)) {
      const t = A.createRadialGradient(i, I, this.h * 0.12, i, I, Math.max(this.w, this.h) * 0.62);
      t.addColorStop(0, "#0a0b0900"),
        t.addColorStop(0.55, "#0a0b0999"),
        t.addColorStop(1, "#050606f2"),
        (A.fillStyle = t),
        A.fillRect(0, 0, this.w, this.h);
    } else {
      const t = A.createLinearGradient(0, 0, this.w, 0),
        h = o.shade === "right" && !E;
      t.addColorStop(h ? 1 : 0, "#070909eb"),
        t.addColorStop(h ? 0.57 : 0.43, "#0c0d0bbd"),
        t.addColorStop(h ? 0.35 : 0.65, "#0a0b090f"),
        t.addColorStop(h ? 0 : 1, "#06080763"),
        (A.fillStyle = t),
        A.fillRect(0, 0, this.w, this.h);
    }
    A.save();
    const C =
      1 -
      (this.game.save.data.settings.reducedMotion ? 0 : this.fxFlashes) *
        (0.13 + 0.09 * Math.sin(B.time * 17) + 0.055 * Math.sin(B.time * 43));
    (A.globalAlpha = C),
      A.beginPath(),
      A.moveTo(i - 35, -40),
      A.lineTo(i + 75, -40),
      A.lineTo(i + 205, I + 150),
      A.lineTo(i - 185, I + 150),
      A.closePath();
    const Q = A.createLinearGradient(i, 0, i, I + 160);
    Q.addColorStop(0, "#f4c57f35"), Q.addColorStop(1, "#edbb6b00"), (A.fillStyle = Q), A.fill();
    const a = A.createRadialGradient(i, I - 20, 10, i, I - 20, 230);
    if (
      (a.addColorStop(0, "#ffd89a19"),
      a.addColorStop(1, "#f5b75f00"),
      (A.fillStyle = a),
      A.fillRect(i - 240, I - 250, 480, 480),
      (A.globalAlpha = 1),
      A.translate(i, I),
      A.scale(innerHeight < 600 ? 1.8 : 2.5, innerHeight < 600 ? 1.8 : 2.5),
      (this.menuHome || (innerWidth > 900 && innerHeight > 600)) &&
        this.player(0, 0, B.character, B.time * 0.75, !1, !1, this.previewFace),
      A.restore(),
      !B.save.data.settings.reducedMotion && B.save.data.settings.particles > 0)
    ) {
      this.menuFx(A, i, I, E, B);
    }
    !B.save.data.settings.reducedMotion &&
      B.time % 3.7 < 0.2 &&
      B.save.data.settings.particles > 0 &&
      ((A.globalAlpha = (1 - (B.time % 3.7) / 0.2) * B.save.data.settings.particles),
      g.line(i + 70, -5, i + 76, 15, "#ffcd7b", 2),
      g.line(i + 80, 8, i + 92, 18, "#ffbb58", 1),
      (A.globalAlpha = 1)),
      this.vignette && A.drawImage(this.vignette, 0, 0, this.w, this.h);
  }
}
const tB = 8,
  hB = {
    play: 0,
    coop: 1,
    characters: 2,
    talents: 3,
    collection: 4,
    challenges: 5,
    stats: 6,
    settings: 7,
    quit: 8,
    fullscreen: 9,
    pause: 10,
    sound: 11,
    map: 12,
    reroll: 13,
    lock: 14,
    credits: 15,
    dash: 16,
    ability: 17,
    ult0: 18,
    ult1: 19,
    ult2: 20,
    ult3: 21,
    ult4: 22,
    ult5: 23,
    hp: 24,
    damage: 25,
    attackSpeed: 26,
    speed: 27,
    crit: 28,
    armor: 29,
    pickup: 30,
    regen: 31,
    lifesteal: 32,
    bleed: 33,
    burn: 34,
    chain: 35,
    economy: 36,
    luck: 37,
    engineering: 38,
    bounce: 39,
    projectiles: 40,
    knockback: 41,
    range: 42,
    poison: 43,
    xp: 44,
    wave: 45,
    boss: 46,
    shop: 47,
    edge: 48,
    coffee: 49,
    heart: 50,
    boots: 51,
    lens: 52,
    kettle: 53,
    magnet: 54,
    moss: 55,
    fang: 56,
    wire: 57,
    oil: 58,
    ember: 59,
    coil: 60,
    rubber: 61,
    barrel: 62,
    pig: 63,
    glass: 64,
    tool: 65,
    repair: 66,
    spring: 67,
    clover: 68,
    fury: 69,
    phase: 70,
    core: 71,
    spore: 72,
    moth: 73,
    scope: 74,
    mutation: 75,
    check: 76,
    back: 77,
    time: 78,
    endless: 79,
  },
  GC = {
    scope: "scope",
    ember: "ember",
    tool: "tool",
    rubber: "rubber",
    barrel: "barrel",
    clover: "clover",
    phase: "phase",
    core: "core",
    spore: "spore",
    dash: "dash",
    ability: "ability",
    economy: "economy",
    home: "back",
    help: "credits",
    coopSetup: "coop",
  },
  RC = (e) => hB[GC[e] ?? e] ?? hB.ability;
function x(e, A = "currentColor") {
  if (j.some((B) => B.id === e))
    return `<span class="icon weapon-icon"><img src="${d.thumb(e)}" alt="" draggable="false"></span>`;
  const g = RC(e);
  return `<span class="icon art-icon" data-icon="${e}" style="--ix:${g % tB};--iy:${Math.floor(g / tB)}" aria-hidden="true"></span>`;
}
const cg = (e, A) => x(e === "armor" ? "kettle" : e, A),
  Fg = (e) => x("ult" + Math.max(0, Math.min(5, e)));
class wC {
  constructor(A, g, B) {
    (this.root = A),
      (this.g = g),
      (this.r = B),
      (g.onChange = () => {
        const E = g.phase;
        (this.screen = E === "menu" ? "home" : E), this.render();
      }),
      (g.onToast = (E) => this.toast(E)),
      (g.onHubStation = (E) => this.openStation(E)),
      A.addEventListener("pointerdown", (E) => {
        const o = E.target.closest("[data-action]"),
          i = o?.dataset.action;
        E.pointerType === "touch" &&
          o &&
          (i === "dash" || i === "ability") &&
          (E.preventDefault(),
          (this.lastTouchAction = i),
          (this.lastTouchAt = performance.now()),
          g.audio.init(),
          this.action(i, o.dataset.id || "", o));
      }),
      A.addEventListener("click", (E) => {
        const o = E.target.closest("[data-action]");
        (o && o.dataset.action === this.lastTouchAction && performance.now() - this.lastTouchAt < 550) ||
          (o &&
            !o.hasAttribute("disabled") &&
            (g.audio.init(),
            (o.dataset.action.startsWith("tb") || g.audio.sound("click", Ag(g.save.data.settings.uiTheme).pitch)),
            this.action(o.dataset.action, o.dataset.id || "", o)));
      }),
      A.addEventListener("mouseover", (E) => {
        E.target.closest("button") &&
          !E.relatedTarget?.closest?.("button") &&
          g.audio.sound("hover", Ag(g.save.data.settings.uiTheme).pitch);
      }),
      A.addEventListener("input", (E) => this.setting(E.target)),
      this.render();
  }
  root;
  g;
  r;
  partnerRenderer;
  crewHeroes = [0, 1];
  crewWeapons = ["saw", "summon"];
  arenaThumbs = new Map();
  screen = "home";
  importCandidate;
  importError = "";
  returnScreen = "home";
  hubMenuOpen = !1;
  hubFrom = "tor";
  charMode = "full";
  tab = "weapons";
  selectedTalent = "root";
  treeZoom = 0.8;
  difficultyInfo = 0;
  treeX = 0;
  treeY = 0;
  treeInit = !1;
  toastTimer = 0;
  lastHud = 0;
  displayMoney;
  lastTouchAction = "";
  lastTouchAt = 0;
  button(A, g, B = "secondary", E = "", o = !1) {
    return `<button ${["fullscreen", "quit", "pause"].includes(A) ? `aria-label="${{ fullscreen: "Vollbild", quit: "Beenden", pause: "Pause" }[A]}"` : ""} class="${B}" data-action="${A}" data-id="${E}" ${o ? "disabled" : ""}>${g}</button>`;
  }
  header(A, g, B = "") {
    return `<header class="header"><div><div class="eyebrow">NACHTSCHROTT / ${g}</div><h2 style="margin-top:7px">${A}</h2></div><div class="row">${B}${this.button("back", "← Zurück", "secondary compact")}</div></header>`;
  }
  render() {
    const A = this.g;
    (this.tbIntro = this.screen === "talents" && this.tbWas !== "talents"), (this.tbWas = this.screen);
    (this.r.mode =
      [
        "home",
        "characters",
        "coopSetup",
        "talents",
        "collection",
        "challenges",
        "stats",
        "quit",
        "credits",
      ].includes(this.screen) ||
      (this.screen === "settings" && this.returnScreen === "home")
        ? "menu"
        : "game"),
      this.screen !== "hub" && (this.hubMenuOpen = !1),
      (A.hubPaused = this.screen !== "hub" || this.hubMenuOpen),
      Wi(A.save.data.settings.uiTheme),
      (this.r.uiTheme = A.save.data.settings.uiTheme),
      (this.r.menuHome = this.screen === "home"),
      (this.r.selected = A.character),
      (this.r.menuWeapon = A.startWeapon);
    let g = "";
    switch (this.screen) {
      case "home":
        g = this.home();
        break;
      case "hub":
        g = this.hubHud();
        break;
      case "coopSetup":
        g = this.coopSetup();
        break;
      case "characters":
        g = this.characters();
        break;
      case "combat":
        g = this.hud();
        break;
      case "level":
        g = this.hud() + this.level();
        break;
      case "shop":
        g = this.shop();
        break;
      case "pause":
        g = this.hud() + this.pause();
        break;
      case "settings":
        g = this.settings();
        break;
      case "talents":
        g = this.talents();
        break;
      case "collection":
        g = this.collection();
        break;
      case "challenges":
        g = this.challenges();
        break;
      case "stats":
        g = this.stats();
        break;
      case "risk":
        g = this.risk();
        break;
      case "mutation":
        g = this.mutation();
        break;
      case "defeat":
      case "victory":
        g = this.end();
        break;
      case "credits":
        g = this.credits();
        break;
      case "quit":
        g = `<section class="screen dim"><div class="quit panel" style="padding:40px"><div class="eyebrow">BIS ZUR NÄCHSTEN NACHT</div><h2 style="margin:15px 0">Feierabend.</h2><p class="muted">Dein Fortschritt ist gespeichert. Du kannst diesen Tab jetzt schließen.</p><div style="margin-top:25px">${this.button("home", "Doch noch eine Runde", "primary")}</div></div></section>`;
        break;
    }
    const B = document.activeElement,
      E = B?.dataset.action,
      o = B?.dataset.id;
    ["combat", "shop"].includes(this.screen) && (g += this.acquisition()),
      (document.body.dataset.motion = A.save.data.settings.reducedMotion ? "reduced" : "full"),
      A.coop &&
        ["level", "shop", "mutation", "risk"].includes(this.screen) &&
        (g =
          `<div class="coop-turn">SPIELER ${A.actorIndex + 1} · ${J[A.character].name} IST DRAN</div>` + g),
      (document.body.dataset.coop = A.coop && this.r.mode === "game" ? "true" : "false"),
      (this.root.innerHTML = g),
      (document.body.dataset.screen = this.screen),
      E &&
        Array.from(this.root.querySelectorAll("[data-action]"))
          .find((C) => C.dataset.action === E && C.dataset.id === o && !C.hasAttribute("disabled"))
          ?.focus({ preventScroll: !0 });
    const i = this.root.querySelector(".modal-wrap .modal");
    if (i) {
      i.setAttribute("role", "dialog"), i.setAttribute("aria-modal", "true");
      const I = i.querySelector("h2");
      I && ((I.id = "dialog-title"), i.setAttribute("aria-labelledby", "dialog-title"));
      const C = this.root.querySelector(".hud");
      C && (C.inert = !0),
        i.contains(document.activeElement) ||
          i.querySelector("button:not(:disabled),input,summary")?.focus({ preventScroll: !0 }),
        (i.onkeydown = (Q) => {
          if (Q.key !== "Tab") return;
          const a = Array.from(
              i.querySelectorAll("button:not(:disabled),input:not(:disabled),summary"),
            ).filter((s) => s.getBoundingClientRect().width > 0),
            t = a[0],
            h = a[a.length - 1];
          Q.shiftKey && document.activeElement === t
            ? (h?.focus(), Q.preventDefault())
            : !Q.shiftKey && document.activeElement === h && (t?.focus(), Q.preventDefault());
        });
    }
    this.nsFit(),
      (this.nmLast = this.screen),
      this.screen === "level" && this.nlBind(),
      this.screen === "talents" && this.tbBind(),
      ["combat", "level", "pause"].includes(this.screen) && this.updateHUD(!0),
      A.save.error && this.screen === "home" && this.toast(A.save.error);
  }
  credits() {
    const A = JSON.parse(document.getElementById("font-licenses")?.textContent || "{}"),
      g = (B) => B.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
    return `<section class="screen dim">${this.header("Gezeichnet für die Nachtschicht.", "Credits & Lizenzen")}<div class="panel rules"><h3>Nachtschrott / Stufe 11 · Drei Gesichter</h3><p style="margin:15px 0">Alle sechs Helden samt 54 Posen stammen aus deinen bereitgestellten Sprite-Sheets. Waffen und Gegner aus den Konzepten, drei Arenaböden wurden im gewünschten Stil erzeugt. Gecachte Rastergrafik, nahtlose Ganzfiguren-Animationen, Sprint-Effekte und prozedurale Arenadetails ergänzen sie. Keine Assets aus anderen Spielen.</p><p style="margin:0 0 15px">Geräusche: echte Aufnahmen ausschließlich unter CC0 1.0 (gemeinfrei) – Kenney (kenney.nl: Impact, Sci-Fi, RPG, Interface, Casino); The Free Firearm Sound Library (Jaszczak, Nelson, Heras, Nanney); Still North Media (Medieval Weapon Impacts/Textures); StarNinjas (Sword Sound Effects); artisticdude (Swishes); Ogrebane (Monster Sound Pack); rubberduck (Creature SFX, Bang SFX, SFX Loops); yd (Factory Ambiance); JaggedStone (Dungeon Ambience); SketchMan3 (Wind Whoosh Loop), alle über OpenGameArt.org. Geschichtet und bearbeitet für dieses Spiel.</p><p style="margin:0 0 15px">Stufe 10: Levelaufstieg-, Wellen- und Magnet-Klang mit „Chimey UI Sounds“ von MouseBYTE (CC0, OpenGameArt.org). Ultis aus denselben CC0-Bibliotheken neu geschichtet. Arenaböden, Schachtböden und das Eisen-und-Messing-Menü aus CC0-Texturen von ambientCG (Lennart Demes): PavingStones150/130, Tiles138/074, DiamondPlate008C, Metal053B/047B/038/009, MetalWalkway014, Planks040, Rock051/064, Ground054, Leather037, MetalPlates013, Rust004, PaintedMetal009 – gemalt nachbearbeitet. Die 13 neuen Gegner der Nachtschicht stammen aus deinen bereitgestellten Sprite-Sheets. Nachtwiese (Gras, Spur, Pfütze) sowie Schachtboden und Gleise des Abstiegs stammen aus deinen bereitgestellten Kacheln.</p><p style="margin:0 0 15px">Effekte: fünf Explosions-, Treffer-, Poof- und Blitz-Animationen basieren auf pixelfx von Patch (MIT; Teile nach Hugo Duprez’ Sprite Fusion VFX, MIT), von uns entpixelt, umgefärbt und mit Leuchten, Licht und eigenen Partikeln erweitert. Lizenz und Hinweis: licenses/pixelfx-LICENSE.txt, pixelfx-NOTICE.md.</p><p style="margin:0 0 15px">Stufe 11: Drei schlichte Oberflächen (Werkbank, Nachtschrift, Grafit) mit einem eigens erzeugten Symbolsatz, je Design umgefärbt. Lichtgabel samt Schuss- und Treffereffekt aus deinen bereitgestellten Sheets. Ihre Klänge sind eigene Synthese (Bogenentladung, Knistern, Raumhall), geschichtet mit Tesla-Funkenaufnahmen von BMacZero (Brian MacIntosh, „Electricity Sound Effects“, CC0, OpenGameArt.org) und Kenneys Impact Sounds (CC0). Die Grubenfackeln im Abstieg basieren auf dem pixelfx-Effekt „fire/torch“ von Patch (MIT; Flamme nach Hugo Duprez’ Sprite Fusion, MIT), entpixelt und warm umgefärbt; die Säulen sind aus ambientCG Rock051 (CC0) gemalt.</p><p style="margin:0 0 15px">Der Hof: Hof, Häuser, Seilbahn, Brücke und Bach sind deine eigene gemalte Hofszene samt Ebenen (Vordergrund, Gebäude, Wasser) – 1:1 übernommen. Das Wasser fließt als aus deiner Wasserebene gebackene Schleife; die feinen Rauchfahnen aus den Kaminen nutzen Kenneys „Particle Pack“ (CC0).</p><p style="margin:0 0 15px">Der Hof bei Tag: Pollen, Blütenblätter und Staubflocken sowie das leichte Wiegen von Bäumen und Blumen entstehen zur Laufzeit aus deinem eigenen Hofbild (keine neuen Texturen). Die Ringe vor Werkstatt und Unterkunft sind eigene Malerei.</p><p style="margin:0 0 15px">Arenen: Nachtwiese und Erzgrube sind deine beiden gemalten Kampfarenen, 1:1 und in voller Auflösung übernommen. Damit auf keinem Bildschirm ein Rand entsteht, wurden sie im selben Malstil nahtlos erweitert; Felsen, Mauern und Plateaus sind direkt aus deinen Bildern ausgeschnitten.</p><p style="margin:0 0 15px">Talentbaum (Werkstatt): Hintergrund mit Spotlicht und NS-Stempel, Kreide- und Wachssiegel-Knoten, Schrotthaufen für dieses Spiel nach Konzept B erzeugt und nachbearbeitet. Klänge eigene Synthese (Kreide, Röhrenbrummen, Flackern, Siegel-Schlag, Bröseln), geschichtet mit „RPG Sounds“ von Kenney (kenney.nl, CC0 1.0, über OpenGameArt.org).</p><p style="margin:0 0 15px">Hauptmenü, Kampf-HUD und Levelaufstieg (Noir-Kreide): Menü-Hintergrund mit Schrotthaufen, Tuscherahmen, Kartenrücken, Wachssiegel und HUD-Symbole für dieses Spiel nach den eigenen Konzepten erzeugt und nachbearbeitet.</p><p style="margin:0 0 15px">Musik (CC0 1.0, gemeinfrei, über OpenGameArt.org): Hof – „Quaint Town“ von neonarkade; Kampf – „Heavy Battle 1“ von MintoDog. Geschnitten, gemastert und als nahtlose Schleife kodiert.</p><p>Schriften: Sora – The Sora Project Authors (2019); Figtree – The Figtree Project Authors (2022); Barlow Condensed – The Barlow Project Authors (2017). Unverändert eingebettete WOFF2-Dateien via Fontsource, SIL Open Font License 1.1 (Lizenztexte unten und in licenses/).</p>${Object.entries(
      A,
    )
      .map(
        ([B, E]) =>
          `<details style="margin-top:20px;border-top:1px solid #7388a344;padding-top:15px"><summary>${B} / Lizenz lesen</summary><pre style="white-space:pre-wrap;font:11px Figtree;line-height:1.7;color:#a9b6cb">${g(E)}</pre></details>`,
      )
      .join("")}</div></section>`;
  }
  home() {
    // t105u: Hauptmenü 1:1 nach Konzept A (Noir-Kreide). Hintergrund, Lichtkegel, Held und Glut zeichnet der Renderer (menuNoir).
    const A = this.g,
      g = J[A.character],
      cp = A.save.data.checkpoint,
      nav = [
        ["coopSetup", "Zwei Spieler", "Ein Bildschirm · zu zweit", "coop"],
        ["talents", "Talentbaum", `${A.save.data.points} Punkte bereit`, "talents"],
        ["collection", "Sammlung", "Waffen & Synergien", "collection"],
        ["challenges", "Herausforderungen", "Vier Aufträge", "challenges"],
        ["stats", "Statistiken", "Deine Runs", "stats"],
        ["settings", "Einstellungen", "Klang & Effekte", "settings"],
      ];
    return `<section class="screen home nm ${cp ? "nm-cp" : ""} ${this.nmLast === "home" ? "nm-static" : ""}" id="nm-screen"><div class="nm-stage ns-stage"><div class="nm-box"><div class="nm-tools">${this.button("fullscreen", x("fullscreen"), "nm-tool")}${this.button("quit", x("quit"), "nm-tool")}</div><div class="nm-eyebrow">NACHTSCHROTT / HAUPTMENÜ</div><h1 class="nm-title">NACHTSCHROTT</h1><i class="nm-hazard"></i><p class="nm-tag">Schrott sammeln. Nacht überstehen.</p><div class="nm-actions">${cp ? `<button class="nm-play continue-run" data-action="continueRun" data-id=""><i class="nm-tri"></i><span>Fortsetzen · Welle ${cp.wave}</span></button>` : ""}<button class="nm-play play ${cp ? "nm-alt" : ""}" data-action="enterHub" data-id=""><i class="nm-tri"></i><span>${cp ? "Neuer Lauf" : "Spielen"}</span></button></div><nav class="nm-nav">${nav.map(([a, n, s, ic]) => `<button class="nm-link" data-action="${a}" data-id="" title="${s}" aria-label="${n} · ${s}">${x(ic)}<span>${n}</span></button>`).join("")}</nav><div class="nm-plate"><button class="nm-arrow" data-action="preview" data-id="-1" aria-label="Vorheriger Held">‹</button><div class="nm-plate-text"><small>${g.title}</small><h3>${g.name}</h3><span class="nm-dots" aria-label="Held ${A.character + 1} von ${J.length}">${J.map((i, I) => `<i class="${I === A.character ? "on" : ""}"></i>`).join("")}</span></div><button class="nm-arrow" data-action="preview" data-id="1" aria-label="Nächster Held">›</button></div><footer class="nm-counts"><span><b>06+2</b><small>ARENEN</small></span><span><b>${String(j.length).padStart(2, "0")}</b><small>WAFFEN</small></span><span><b>04</b><small>BOSSE</small></span></footer>${this.button("credits", "Credits & Lizenzen", "nm-credits")}</div></div></section>`;
  }
  themeSwitch() {
    return "";
    const A = this.g.save.data.settings.uiTheme;
    return `<div class="theme-switch" role="group" aria-label="Oberfläche wählen">${LA.map((g) => `<button class="theme-pill ${A === g.id ? "selected" : ""}" data-action="uiTheme" data-id="${g.id}" title="Oberfläche ${g.id.toUpperCase()}: ${g.name}" aria-pressed="${A === g.id}">${g.id.toUpperCase()}</button>`).join("")}</div>`;
  }
  themeChooser() {
    return "";
    const A = this.g.save.data.settings.uiTheme;
    return `<section class="theme-chooser"><h3>${x("settings")}Oberfläche</h3><p class="notice">Drei schlichte Designs mit eigenem Aufbau, eigener Schrift und Farbtemperatur. Wirkt sofort in Menüs und im Kampf.</p><div class="theme-cards">${LA.map((g) => `<button class="theme-card theme-card-${g.id} ${A === g.id ? "selected" : ""}" data-action="uiTheme" data-id="${g.id}" aria-pressed="${A === g.id}"><span class="theme-mini" data-mini="${g.id}"><i class="mini-bar"></i><i class="mini-icon" style="--ix:0;--iy:2"></i><i class="mini-icon" style="--ix:1;--iy:2"></i><i class="mini-icon" style="--ix:${2 + LA.indexOf(g)};--iy:2"></i></span><b><em>${g.id.toUpperCase()}</em>${g.name}</b><small>${g.short}</small><span class="theme-desc">${g.desc}</span><span class="theme-state">${A === g.id ? "AKTIV" : "WÄHLEN"}</span></button>`).join("")}</div></section>`;
  }
  climbCards() {
    const A = this.g;
    return `<div class="section-title">SONDERMODI · ENDLOS</div><div class="map-grid climb-grid">${GA.map((g, B) => `<button class="map-card climb-card climb-${g.id} ${A.climb === B + 1 ? "selected" : ""}" data-action="climb" data-id="${B + 1}" title="${g.desc}"><span class="map-art"><img src="${Bg[g.floor]}" alt=""></span><span><b>${g.dir < 0 ? "▲" : "▼"} ${g.name}</b><small>${g.short} · ${g.desc}</small></span><i>${A.climb === B + 1 ? "●" : "○"}</i></button>`).join("")}</div>`;
  }
  arenaThumb(A) {
    let g = this.arenaThumbs.get(A);
    if (g) return g;
    let B = this.r.floorCaches.get(A);
    B || ((B = this.r.makeFloor(A)), this.r.floorCaches.set(A, B));
    const E = document.createElement("canvas");
    return (
      (E.width = 220),
      (E.height = 130),
      B.dataset.plate
        ? E.getContext("2d").drawImage(
            B,
            (B.width - 1600) / 2,
            (B.height - 945) / 2,
            1600,
            945,
            0,
            0,
            220,
            130,
          )
        : E.getContext("2d").drawImage(B, 0, 0, 220, 130),
      (g = E.toDataURL("image/jpeg", 0.8)),
      this.arenaThumbs.set(A, g),
      g
    );
  }
  heroRoom() {
    const A = this.g,
      g = J[A.character];
    return `<section class="screen character-screen character2 char-hero">${this.header("Die Schlafbaracke.", "Unterkunft · Heldenwahl")}<div class="left"><div class="section-title">WER GEHT HEUTE NACHT RAUS?</div><div class="character-grid hero-roster">${J.map((B, E) => `<button class="char-card hero-tile ${A.character === E ? "selected" : ""}" data-action="character" data-id="${E}" aria-pressed="${A.character === E}" title="${B.name} · ${B.title}"><span class="tile-portrait"><img class="portrait" src="${d.thumb("hero" + E)}" alt=""></span><b>${B.name}</b></button>`).join("")}</div><p class="notice">Dein Held läuft mit dir durch den Hof. Arena, Startwaffe und Schwierigkeit wählst du an der Brücke.</p><div class="row start-row">${this.button("back", x("play") + " Mit " + g.name + " zurück in den Hof", "primary")}</div></div><div class="character-info hero-sheet"><div class="eyebrow">${g.title}</div><h2>${g.name}</h2><p class="sub">${g.desc}</p><div class="sheet-chips">${g.perk
      .split(" · ")
      .map((B) => `<span class="chip">${B}</span>`)
      .join(
        "",
      )}</div><div class="sheet-ability"><span class="ability-badge">${Fg(A.character)}</span><span><b>${CA[A.character].name}</b><small>${CA[A.character].desc}</small></span></div></div></section>`;
  }
  characters() {
    const A = this.g,
      g = J[A.character],
      B = j.find((o) => o.id === A.startWeapon);
    if (this.charMode === "hero") return this.heroRoom();
    const E =
      this.charMode === "run"
        ? this.header("Raus in die Nacht.", "Die Brücke · Einsatzvorbereitung")
        : this.header("Deine Nacht. Deine Regeln.", "Einsatzvorbereitung");
    return `<section class="screen character-screen character2 ${this.charMode === "run" ? "char-run" : ""}">${E}<div class="left"><div class="section-title">01 / WÄHLE DEINEN HELDEN</div><div class="character-grid hero-roster">${J.map((o, i) => `<button class="char-card hero-tile ${A.character === i ? "selected" : ""}" data-action="character" data-id="${i}" aria-pressed="${A.character === i}" title="${o.name} · ${o.title}"><span class="tile-portrait"><img class="portrait" src="${d.thumb("hero" + i)}" alt=""></span><b>${o.name}</b></button>`).join("")}</div><div class="section-title">02 / WÄHLE DEINE ARENA</div><div class="map-grid">${IA.map((o, i) => `<button class="map-card ${A.map === i && !A.climb ? "selected" : ""} map-${i}" data-action="map" data-id="${i}" title="${o.desc}"><span class="map-art"><img src="${this.arenaThumb(i)}" alt=""></span><span><b>${o.name}</b><small>${o.mechanic}</small></span><i>${A.map === i && !A.climb ? "●" : "○"}</i></button>`).join("")}</div>${this.climbCards()}<div class="section-title">03 / DEINE ERSTE WAFFE <span>1 / 6 PLÄTZE</span></div><div class="loadout">${j.map((o) => `<button class="weapon-choice ${A.startWeapon === o.id ? "selected" : ""}" data-action="startWeapon" data-id="${o.id}" title="${o.desc}">${x(o.id, o.color)}<span><b>${o.name}</b><small>${o.tag.split(" · ")[0]}</small></span></button>`).join("")}</div><div class="weapon-description"><b>${B.name}</b><p>${B.desc}</p></div>${this.difficultySelect()}${A.save.data.checkpoint ? '<p class="notice">Ein neuer Lauf ersetzt deinen gespeicherten Wellenbeginn.</p>' : ""}<div class="row start-row">${this.button("start", x("play") + " Rein in die Nacht · " + gA[A.difficulty].name, "primary")}${this.button("talents", x("talents") + A.save.data.points + " Talentpunkte", "secondary")}</div></div><div class="character-info hero-sheet"><div class="eyebrow">${g.title}</div><h2>${g.name}</h2><p class="sub">${g.desc}</p><div class="sheet-chips">${g.perk
      .split(" · ")
      .map((o) => `<span class="chip">${o}</span>`)
      .join(
        "",
      )}</div><div class="sheet-ability"><span class="ability-badge">${Fg(A.character)}</span><span><b>${CA[A.character].name}</b><small>${CA[A.character].desc}</small></span></div><span class="pill">${A.climb ? GA[A.climb - 1].name + " · endlos · Endgegner alle 10 Wellen" : IA[A.map].name + " · 20 Wellen"}</span></div></section>`;
  }
  coopSetup() {
    const A = this.g,
      g = Math.min(...this.crewHeroes.map((B) => A.maxDifficulty(B)));
    return `<section class="screen dim coop-setup">${this.header("Gemeinsam durch die Nacht.", "Zwei Spieler · ein Bildschirm, eine Kamera")}<div class="coop-crew">${[0, 1].map((B) => `<section class="panel crew-player"><div class="eyebrow">SPIELER ${B + 1} · ${B ? "PFEILTASTEN / IJKL · O / RECHTE UMSCHALT: SPRINT · U: FÄHIGKEIT" : "WASD · LEER: SPRINT · E: FÄHIGKEIT"}</div><h3>Dein Held. Dein Arsenal.</h3><div class="character-grid">${J.map((E, o) => `<button class="char-card ${this.crewHeroes[B] === o ? "selected" : ""}" data-action="coopHero" data-id="${B}:${o}"><img class="portrait" src="${d.thumb("hero" + o)}" alt=""><b>${E.name}</b></button>`).join("")}</div><p class="notice crew-identity"><b>${J[this.crewHeroes[B]].name}</b> · ${J[this.crewHeroes[B]].perk}<br>${CA[this.crewHeroes[B]].name}: ${CA[this.crewHeroes[B]].desc}</p><div class="section-title">STARTWAFFE</div><div class="crew-weapons">${j.map((E) => `<button class="weapon-choice ${this.crewWeapons[B] === E.id ? "selected" : ""}" data-action="coopWeapon" data-id="${B}:${E.id}" title="${E.desc}">${x(E.id)}<small>${E.name}</small></button>`).join("")}</div><p class="notice">${j.find((E) => E.id === this.crewWeapons[B]).desc}</p></section>`).join("")}</div><div class="coop-options panel"><div><div class="section-title">GEMEINSAME ARENA</div><div class="row wrap">${IA.map((B, E) => this.button("map", B.name, "secondary compact " + (A.map === E && !A.climb ? "selected" : ""), String(E))).join("")}${GA.map((B, E) => this.button("climb", B.name + " · endlos", "secondary compact climb-button " + (A.climb === E + 1 ? "selected" : ""), String(E + 1))).join("")}</div><div class="row wrap crew-difficulty">${gA.map((B, E) => this.button("coopDifficulty", B.name + (E > g ? " · gesperrt" : ""), "secondary compact " + (A.difficulty === E ? "selected" : ""), String(E), E > g)).join("")}</div></div><div><p>Getrennte LP, Waffen, EP und Werkstätten. Zum Wiederbeleben <b>3 Sekunden</b> beim Partner bleiben. Erst wenn beide fallen, endet die Nacht. Zwei Controller werden unterstützt. Auf Touch: ein gemeinsames Bild – Spieler 1 steuert mit dem linken Stick, Spieler 2 mit dem rechten, jeder mit eigenen Aktionstasten.</p><p class="notice">Gemeinsame Läufe gelten für diese Sitzung; Wellen-Fortsetzen ist derzeit im Solomodus verfügbar. ${A.save.data.checkpoint ? "Ein neuer Lauf ersetzt den gespeicherten Sololauf." : ""}</p><div class="row wrap coop-start-row">${this.button("startCoop", "Zwei Spieler · gemeinsam starten →", "primary")}${this.returnScreen === "hub" ? "" : this.button("coopHub", "Zu zweit in den Hof", "secondary")}</div></div></div></section>`;
  }
  nhSlots(W, owner = "") {
    return `<div class="hotbar nh-slots">${Array.from({ length: 6 }, (g, B) => {
      const E = W[B];
      return `<div class="slot nh-slot ${E ? "" : "empty"} ${E?.mutation ? "mutated" : ""} ${E && E.tier >= 3 ? "nh-seal" : ""}" ${owner === "" ? `data-weapon-slot="${B}"` : ""} style="--rarity:${SA[E?.tier || 1]}" title="${E ? j.find((o) => o.id === E.id).name + " · Stufe " + iA[E.tier] : "Freier Waffenplatz"}">${E ? x(E.id) : "<small>+</small>"}<span>${E ? iA[E.tier] : ""}</span>${E?.id === "turret" && owner === "" ? '<b class="ground-tag">AUTO</b>' : ""}</div>`;
    }).join("")}</div>`;
  }
  coopHud() {
    // t105u: Koop-HUD im Noir-Kreide-Stil des Kampf-HUD (P1 links, P2 rechts gespiegelt, Welle mittig).
    const A = this.g,
      S = A.coop.snapshot();
    return `<div class="hud nh nh-coop coop-hud" id="hud"><i class="nh-ink" aria-hidden="true"></i>${S.map(
      (B, E) =>
        `<section class="nh-pane nh-p${E}"><div class="nh-corner"><div class="nh-panel nh-hp"><div class="nh-r1"><i class="nsi nh-heart" style="--i:3"></i><b id="coop-hp-${E}"></b><span class="nh-lvl" id="coop-level-${E}"></span></div><div class="nh-bar nh-red"><i id="coop-hpbar-${E}"></i></div><div class="nh-r2"><span>P${E + 1} · ${J[B.character].name.toUpperCase()}</span><span class="nh-cmoney"><i class="nsi" style="--i:1"></i><b id="coop-money-${E}"></b></span></div><div class="nh-bar nh-cream"><i id="coop-xpbar-${E}"></i></div><small id="coop-xp-${E}" class="nh-cxp"></small></div>${this.nhSlots(B.weapons, E)}</div><div class="coop-edge nh-edge" id="coop-edge-${E}" hidden><i>➤</i> <b>BOSS</b></div><div class="coop-partner nh-edge" id="coop-partner-${E}" hidden><i>➤</i> <b>PARTNER</b></div><div class="coop-down nh-panel nh-down" id="coop-down-${E}" hidden></div><div class="ability-dock nh-dock"><button class="ability-button nh-ab" data-action="dash" data-id="${E}" aria-label="Spieler ${E + 1}: Ausweichsprint"><i class="nsi" style="--i:2"></i><span id="coop-dash-${E}"></span><kbd>${E ? "O" : "LEER"}</kbd></button><button class="ability-button nh-ab" data-action="ability" data-id="${E}" aria-label="Spieler ${E + 1}: Fähigkeit">${Fg(B.character)}<span id="coop-ability-${E}"></span><kbd>${E ? "U" : "E"}</kbd></button></div><div class="coop-help nh-help">${E ? "PFEILE / IJKL" : "WASD"} · NAH AM PARTNER: BELEBEN</div><div class="coop-boss nh-panel nh-boss" id="coop-boss-${E}" hidden><span id="coop-bossname-${E}"></span><div class="nh-bar nh-red"><i id="coop-bossbar-${E}"></i></div></div></section>`,
    ).join(
      "",
    )}<div class="nh-tc coop-wave"><span class="nh-night">${A.climb ? GA[A.climb - 1].name.toUpperCase() : IA[A.map].name.toUpperCase()}</span><div class="nh-wave">WELLE ${String(A.wave).padStart(2, "0")} / ${A.endless ? "∞" : 20}</div><strong class="nh-time" id="coop-time-0"></strong><b id="coop-time-1" hidden></b>${A.climb ? `<small class="nh-climb"><span class="coop-climb">${A.climbState.def.unit} ${A.climbState.metres} m</span></small>` : ""}</div><div class="coop-pause nh-cpause">${this.button("pause", '<i class="nh-pz">II</i><small>PAUSE</small>', "pause-btn nh-round")}</div></div>`;
  }
  updateCoopHUD() {
    const A = this.g,
      g = A.coop.snapshot(),
      B = A.enemies.objects.find((I) => I.active && I.type >= 8),
      E = Math.max(0, Math.ceil(A.waveLength - A.waveTime)),
      o = (I, C) => {
        const Q = document.getElementById(I);
        Q && (Q.textContent = C);
      },
      i = (I, C) => {
        const Q = document.getElementById(I);
        Q && (Q.style.width = V(C * 100, 0, 100) + "%");
      };
    g.forEach((I, C) => {
      o(`coop-level-${C}`, `STUFE ${I.level}`),
        o(`coop-hp-${C}`, `${Math.ceil(I.player.hp)} / ${Math.ceil(I.stats.hp)} LP`),
        o(`coop-money-${C}`, String(Math.floor(I.money))),
        i(`coop-hpbar-${C}`, I.player.hp / I.stats.hp),
        i(`coop-xpbar-${C}`, I.xp / I.xpNeed),
        o(
          `coop-xp-${C}`,
          `${Math.floor(I.xp)} / ${I.xpNeed} EP · Reichweite ${Math.round(I.stats.range * 100)} %`,
        ),
        o(`coop-time-${C}`, A.wave >= 20 && !A.bossDead && A.waveTime >= A.waveLength ? "BOSS" : String(E)),
        o(`coop-dash-${C}`, I.dashCharges ? "SPRINT" : I.dashRecharge.toFixed(1) + " s"),
        o(`coop-ability-${C}`, I.abilityCd ? Math.ceil(I.abilityCd) + " s" : "BEREIT");
      const Q = document.getElementById(`coop-down-${C}`);
      Q &&
        ((Q.hidden = I.player.hp > 0),
        I.player.hp <= 0 &&
          (Q.textContent = `AM BODEN · Partner muss 3 s in der Nähe bleiben · ${A.coop.revive[C].toFixed(1)} / 3 s`));
      for (const h of ["dash", "ability"]) {
        const s = this.root.querySelector(`[data-action=${h}][data-id="${C}"]`);
        s &&
          ((s.disabled = I.player.hp <= 0),
          s.classList.toggle("on-cooldown", h === "dash" ? !I.dashCharges : I.abilityCd > 0));
      }
      const a = C ? this.partnerRenderer : this.r;
      if (a)
        for (const [h, s] of [
          ["edge", B],
          ["partner", g[1 - C].player],
        ]) {
          const U = document.getElementById(`coop-${h}-${C}`);
          if (!U) continue;
          const M = (s?.x ?? 0) - a.camX,
            r = (s?.y ?? 0) - a.camY,
            Y = Math.abs(M) > a.viewWidth * 0.46 || Math.abs(r) > a.viewHeight * 0.44;
          if (((U.hidden = !s || !Y), !U.hidden)) {
            const c = Math.atan2(r, M);
            (U.style.left = 50 + Math.cos(c) * 42 + "%"),
              (U.style.top = 50 + Math.sin(c) * 22 + "%"),
              U.style.setProperty("--angle", c + "rad"),
              h === "partner" &&
                (U.querySelector("b").textContent = g[1 - C].player.hp <= 0 ? "BELEBEN" : "PARTNER");
          }
        }
      const t = document.getElementById(`coop-boss-${C}`);
      t && (t.hidden = !B),
        B &&
          (o(`coop-bossname-${C}`, `${z[B.type].name} · PHASE ${Math.max(1, B.state)}`),
          i(`coop-bossbar-${C}`, B.hp / B.maxHp));
    });
  }
  difficultySelect() {
    const A = this.g,
      g = gA[this.difficultyInfo],
      B = this.difficultyInfo > A.maxDifficulty(),
      E = [
        ["hp", "Gegner-LP", `+${rA(g.hp)} %`],
        ["damage", "Gegnerschaden", `+${rA(g.damage)} %`],
        ["speed", "Gegnertempo", `+${rA(g.speed)} %`],
        ["challenges", "Spawn-Dichte", `+${rA(g.density)} % + Formationen`],
        ["armor", "Elitechance", `×${g.elites.toLocaleString("de-DE")} · spät +35 %`],
        ["challenges", "Boss-LP", `+${rA(g.bossHp)} %`],
        ["regen", "Heilwirkung", `${Math.round(g.healing * 100)} %`],
        ["economy", "Schrottertrag", `${Math.round(g.economy * 100)} %`],
        ["economy", "Kauf-/Würfelpreise", `+${rA(g.prices)} %`],
        ["hp", "Wellenheilung", `${Math.round(g.waveHeal * 100)} % max. LP`],
        ["map", "Zange / Ring", `alle ${g.formationInterval} Sek. ab Welle 3`],
        [
          "ability",
          "Boss-Zusatzmuster",
          ["Zange / Fächer / Sichel", "+ verzögerter Mittelschlag", "+ gestaffelte Nachbeben"][
            this.difficultyInfo
          ],
        ],
      ];
    return (
      E.push(
        ["economy", "Beutevorrat / Welle", `${g.scrapBase} + ${g.scrapPerWave} × Welle Schrott`],
        ["pickup", "EP-Vorrat / Welle", `${g.xpBase} + ${g.xpPerWave} × Welle EP`],
      ),
      `<section class="difficulty-select"><div class="section-title">04 / WIE VIEL NACHT? <span>${gA[A.difficulty].name.toUpperCase()} GEWÄHLT</span></div><div class="difficulty-options">${gA.map((o, i) => `<button data-action="difficulty" data-id="${i}" class="difficulty-card ${A.difficulty === i ? "selected" : ""} ${this.difficultyInfo === i ? "viewing" : ""} ${i > A.maxDifficulty() ? "locked" : ""}" style="--difficulty-color:${o.color}" aria-pressed="${A.difficulty === i}"><span>${x(i === 0 ? "challenges" : i === 1 ? "damage" : "ability", o.color)}<b>${o.name}</b></span><small>${i > A.maxDifficulty() ? "GESPERRT · DETAILS ANSEHEN" : A.difficulty === i ? "FÜR DEN RUN GEWÄHLT" : "AUSWÄHLEN"}</small></button>`).join("")}</div><details class="difficulty-details" ${B ? "open" : ""} style="--difficulty-color:${g.color}"><summary>MODIFIKATOREN <span>+${rA(g.hp)} % LP · +${rA(g.speed)} % Tempo · +${rA(g.density)} % Gegner · ${Math.round(g.healing * 100)} % Heilwirkung</span></summary><div class="difficulty-title"><b>${g.name} · ${g.subtitle}</b><span>${B ? `Erst ${gA[this.difficultyInfo - 1].name} mit ${J[A.character].name} gewinnen.` : "Telegraphen bleiben unverändert lang. Kein Gegner erscheint direkt auf dir."}</span></div><div class="difficulty-modifiers">${E.map(([o, i, I]) => `<div>${x(o)}<span>${i}</span><b>${I}</b></div>`).join("")}</div><p>Werte relativ zur ursprünglichen Basis, zusätzlich zur Wellenskalierung. Schwer/Albtraum: Gegnerwerte wachsen von Normal (Welle 1) bis zu diesen Werten (Welle 8), damit Startwaffen fair bleiben. Beutevorrat vor Ertragsfaktor; Bossbeute zusätzlich. Heilung außer Startleben/Max-LP-Zuwachs. Zangen und Ringe lassen einen Fluchtkorridor offen.</p></details></section>`
    );
  }
  difficultyRecords() {
    const A = this.g.save.data;
    return `<div class="difficulty-records">${J.map((g, B) => {
      const E = Qg(A.difficultyClears, B);
      return `<div class="panel"><img src="${d.thumb("hero" + B)}" alt=""><span><b>${g.name}</b><small>HÖCHSTER GEMEISTERTER GRAD</small><strong style="color:${E >= 0 ? gA[E].color : "#97a7be"}">${E >= 0 ? gA[E].name : "Noch keiner"}</strong><small>${E === 2 ? "Alle Grade freigeschaltet" : gA[Math.min(2, E + 1)].name + " spielbar"}</small></span></div>`;
    }).join("")}</div>`;
  }
  hud() {
    // t105u: Kampf-HUD 1:1 nach Konzept A (Noir-Kreide): Lebens-Tafel oben links, Welle mittig, Schrott + Pause rechts, Sprint/Fähigkeit unten rechts, Tuscherahmen.
    const A = this.g;
    return A.coop
      ? this.coopHud()
      : `<div class="hud nh hud-${A.save.data.settings.uiTheme}" id="hud"><i class="nh-ink" aria-hidden="true"></i><div class="nh-corner nh-tl"><div class="nh-panel hp-block nh-hp"><div class="nh-r1"><i class="nsi nh-heart" style="--i:3"></i><b id="hp-text"></b><span id="level-text" class="nh-lvl"></span></div><div class="nh-bar nh-red"><i id="hp-bar"></i></div><div class="nh-r2"><span>ERFAHRUNG</span><span id="xp-text"></span></div><div class="nh-bar nh-cream"><i id="xp-bar"></i></div><b id="level-num" hidden></b><span id="supply-text" class="supply-hud" hidden></span></div>${this.nhSlots(A.weapons)}</div><div class="nh-tc wave-block"><span class="nh-night">${A.climb ? GA[A.climb - 1].name.toUpperCase() : IA[A.map].name.toUpperCase()}</span><div id="wave-text" class="nh-wave"></div><div id="time-text" class="nh-time"></div>${A.climb ? '<span id="climb-text" class="nh-climb"></span>' : ""}</div><div class="nh-tr hud-right"><div class="nh-panel currency nh-money"><i class="nsi" style="--i:1"></i><b id="money-text"></b><small>SCHROTT</small></div>${this.button("pause", '<i class="nh-pz">II</i><small>PAUSE</small>', "pause-btn nh-round")}${this.button("fullscreen", x("fullscreen"), "pause-btn fullscreen-btn nh-round nh-fs")}</div><div class="boss-edge nh-edge" id="boss-edge" hidden aria-label="Richtung zum Boss"><i>➤</i><b>BOSS</b></div><div class="boss-panel nh-panel nh-boss" id="boss-panel" hidden><div class="nh-r1"><span id="boss-name"></span><small id="boss-phase"></small></div><div class="nh-bar nh-red"><i id="boss-hp"></i></div><span class="boss-pattern" id="boss-pattern"></span></div><div class="streak-panel nh-panel nh-streak" id="streak-panel" hidden><strong id="streak-count"></strong><span>ABSCHUSS-SERIE</span><i id="streak-bar"></i></div><div class="ability-dock nh-dock"><button data-action="dash" class="ability-button nh-ab" id="dash-button" aria-label="Ausweichsprint"><i class="cd-ring" aria-hidden="true"></i><i class="nsi" style="--i:2"></i><span id="dash-text">SPRINT</span><kbd>LEER</kbd></button><button data-action="ability" class="ability-button nh-ab" id="ability-button" aria-label="${CA[A.character].name}"><i class="cd-ring" aria-hidden="true"></i>${Fg(A.character)}<span id="ability-text">BEREIT</span><kbd>E</kbd></button></div>${!A.save.data.tutorialSeen && A.wave <= 2 && this.screen === "combat" ? `<aside class="onboarding nh-panel nh-guide"><strong>DEINE ERSTE NACHT</strong><p>${A.mobile ? "Links ziehen: laufen. Rechts: Sprint & Fähigkeit." : "WASD: laufen · LEER: Sprint · E: Fähigkeit."}<br>Angriffe zielen automatisch. Schrott & EP einsammeln.<br><b>ROT + ! = GEFAHR.</b> Seitlich ausweichen.<br>Schraubenknecht bleibt stehen; Ersatz kommt automatisch.</p>${this.button("dismissGuide", "Verstanden ✓", "nh-guidebtn")}</aside>` : ""}<div class="combat-tip nh-tip" ${A.wave > 1 || !A.save.data.tutorialSeen ? "hidden" : ""}><kbd>WASD</kbd> Bewegen &nbsp; <kbd>LEER</kbd> Sprint<br><kbd>E</kbd> Fähigkeit &nbsp; <kbd>Q</kbd> Zielmodus</div><div class="touch-hint nh-touch">LINKS ZIEHEN ZUM BEWEGEN</div></div>`;
  }
  acquisition() {
    const A = this.g.showcase;
    if (!A || A.life <= 0) return "";
    const g = j.find((B) => B.id === A.id);
    return `<div class="acquisition ${this.screen === "shop" ? "in-shop" : ""}" id="acquisition" data-serial="${A.serial}" style="--rarity:${SA[A.tier]};--flash:${this.g.save.data.settings.reducedMotion ? 0 : this.g.save.data.settings.flashes}"><div class="acquisition-lines"></div><span class="acquisition-caption">${A.upgraded ? "WAFFE AUFGEWERTET" : "NEUE WAFFE"}</span><div class="showcase-art">${x(A.id)}</div><h3>${g.name}</h3><div class="showcase-tier">${A.upgraded ? `STUFE ${iA[A.from]} <b>→</b> ` : ""}STUFE ${iA[A.tier]} <span>${BB[A.tier]}</span></div></div>`;
  }
  updateHUD(A = !1) {
    const g = this.g.showcase,
      B = document.getElementById("acquisition");
    if (
      (B && (B.hidden = !g || g.life <= 0),
      g &&
        g.life > 0 &&
        ["combat", "shop"].includes(this.screen) &&
        B?.dataset.serial !== String(g.serial) &&
        (B?.remove(), this.root.insertAdjacentHTML("beforeend", this.acquisition())),
      (this.screen !== "combat" && !A) || (!A && performance.now() - this.lastHud < 65))
    )
      return;
    this.lastHud = performance.now();
    const E = this.g;
    if (E.coop) {
      this.updateCoopHUD();
      return;
    }
    const o = (Y, c) => {
      const R = document.getElementById(Y);
      R && (R.textContent = c);
    };
    E.weapons.forEach((Y, c) => {
      if (Y.id !== "turret") return;
      const R = this.root.querySelector(`[data-weapon-slot="${c}"] .ground-tag`);
      if (R) {
        const G = E.turrets.find((n) => n.owner === Y && n.broken <= 0);
        (R.textContent = G
          ? `${Math.ceil(G.life)}s`
          : Y.cd > 0
            ? `NEU ${Math.max(0, Y.cd).toFixed(1)}s`
            : "AUTO"),
          R.classList.toggle("rebuilding", !G);
      }
    }),
      o("hp-text", `${Math.ceil(E.player.hp)} / ${Math.ceil(E.stats.hp)}`),
      o("level-num", String(E.level));
    const i = document.getElementById("hud");
    i &&
      (i.style.setProperty("--hp", V(E.player.hp / E.stats.hp, 0, 1).toFixed(3)),
      i.style.setProperty("--xp", V(E.xp / E.xpNeed, 0, 1).toFixed(3)),
      i.style.setProperty(
        "--dash",
        (E.dashCharges ? 0 : V(E.dashRecharge / E.dashCooldown, 0, 1)).toFixed(3),
      ),
      i.style.setProperty("--ult", V(E.abilityCd / E.abilityCooldown, 0, 1).toFixed(3)),
      i.classList.toggle("hp-low", E.player.hp / E.stats.hp < 0.3)),
      o("level-text", `STUFE ${E.level}`),
      o("xp-text", `${Math.floor(E.xp)} / ${E.xpNeed} EP`),
      o("wave-text", `WELLE ${String(E.wave).padStart(2, "0")} / ${E.endless ? "∞" : "20"}`),
      E.climb &&
        o(
          "climb-text",
          `${E.climbState.def.dir < 0 ? "▲" : "▼"} ${E.climbState.def.unit} ${E.climbState.metres} m`,
        );
    const I = Math.max(0, Math.ceil(E.waveLength - E.waveTime));
    o("time-text", E.bossWave && !E.bossDead && E.waveTime >= E.waveLength ? "BOSS" : String(I));
    const C = Math.floor(E.money);
    if (A || this.displayMoney === void 0) this.displayMoney = C;
    else {
      const Y = C - this.displayMoney;
      this.displayMoney += Y > 0 ? Math.ceil(Y * 0.45) : Math.floor(Y * 0.45);
    }
    {
      // Game Feel: HUD reagiert auf Ereignisse
      const bump = (el, cls) => {
          el && (el.classList.remove(cls), void el.offsetWidth, el.classList.add(cls));
        },
        hud = document.getElementById("hud");
      if (A) this.feelMoney = this.displayMoney;
      if (!A && this.feelMoney !== void 0 && this.displayMoney > this.feelMoney)
        bump(hud?.querySelector(".currency"), "feel-bump");
      this.feelMoney = this.displayMoney;
      if (this.feelLevel !== void 0 && E.level > this.feelLevel && !A)
        bump(hud?.querySelector(".hp-block"), "feel-level");
      this.feelLevel = E.level;
      const wb = hud?.querySelector(".wave-block"),
        urgent = !E.bossWave && I > 0 && I <= 5 && E.phase === "combat";
      wb && wb.classList.toggle("feel-urgent", urgent);
      if (urgent && this.feelSec !== I) {
        bump(wb, "feel-tick");
        I <= 3 && E.audio.sound("click", 1.5 + (3 - I) * 0.12, 0.5);
      }
      this.feelSec = I;
      const sc = E.killStreak;
      if (sc >= 5 && sc !== this.feelStreak) bump(document.getElementById("streak-panel"), "feel-bump");
      this.feelStreak = sc;
    }
    o("money-text", this.displayMoney.toString()),
      o("supply-text", `VORRAT · ▱ ${E.scrapBudget - E.scrapDropped} / EP ${E.xpBudget - E.xpDropped}`);
    const Q = document.getElementById("hp-bar"),
      a = document.getElementById("xp-bar");
    Q && (Q.style.width = V((E.player.hp / E.stats.hp) * 100, 0, 100) + "%"),
      a && (a.style.width = V((E.xp / E.xpNeed) * 100, 0, 100) + "%");
    const t = document.getElementById("dash-button"),
      h = document.getElementById("ability-button");
    o(
      "dash-text",
      E.dashCharges > 0
        ? E.dashMax > 1
          ? E.dashCharges + " / " + E.dashMax
          : "SPRINT"
        : E.dashRecharge.toFixed(1) + " s",
    ),
      o("ability-text", E.abilityCd > 0 ? Math.ceil(E.abilityCd) + " s" : "BEREIT"),
      t &&
        (t.style.setProperty(
          "--cooldown",
          (E.dashCharges ? 0 : (E.dashRecharge / E.dashCooldown) * 100) + "%",
        ),
        t.classList.toggle("on-cooldown", E.dashCharges === 0)),
      h &&
        (h.style.setProperty("--cooldown", (E.abilityCd / E.abilityCooldown) * 100 + "%"),
        h.classList.toggle("on-cooldown", E.abilityCd > 0));
    const s = document.getElementById("streak-panel");
    s &&
      ((s.hidden = E.killStreak < 5),
      o("streak-count", String(E.killStreak).padStart(2, "0")),
      (document.getElementById("streak-bar").style.width = (E.streakTime / 2.6) * 100 + "%"));
    for (let Y = 0; Y < E.weapons.length; Y++) {
      const c = this.root.querySelector(`.slot[data-weapon-slot="${Y}"]`);
      c && c.classList.toggle("slot-upgrade", E.weapons[Y].glow > 0);
    }
    const U = E.enemies.objects.find((Y) => Y.active && Y.type >= 8),
      M = document.getElementById("boss-panel");
    if (M && ((M.hidden = !U), U)) {
      o("boss-name", z[U.type].name),
        o(
          "boss-pattern",
          U.bossMode === 1
            ? mB[U.bossPattern] + " · AUSWEICHEN"
            : U.bossMode === 3
              ? "ERSCHÖPFT · JETZT ANGREIFEN"
              : "",
        ),
        o("boss-phase", "PHASE " + Math.max(1, U.state) + " / 3");
      const Y = document.getElementById("boss-hp");
      Y && (Y.style.width = Math.max(0, (U.hp / U.maxHp) * 100) + "%");
    }
    const r = document.getElementById("boss-edge");
    if (r && ((r.hidden = !0), U)) {
      const Y = this.r,
        c = (U.x - Y.camX) * Y.scale * Y.cameraZoom,
        R = (U.y - Y.camY) * Y.scale * Y.cameraZoom;
      if (Math.abs(c) > innerWidth / 2 - 25 || Math.abs(R) > innerHeight / 2 - 25) {
        const G = (q) =>
            Array.from(this.root.querySelectorAll(q))
              .filter((m) => !m.hidden)
              .map((m) => m.getBoundingClientRect())
              .filter((m) => m.width > 0 && m.height > 0),
          n = Math.max(100, ...G(".nh-tl,.wave-block,.hud-right,#boss-panel").map((q) => q.bottom)) + 26,
          D = Math.min(innerHeight - 40, ...G(".nh-dock,#dash-button,#ability-button").map((q) => q.top)) - 26,
          k = innerWidth / 2,
          l = (n + D) / 2,
          w = Math.min((k - 28) / Math.max(1, Math.abs(c)), (D - n) / 2 / Math.max(1, Math.abs(R)));
        (r.hidden = D <= n + 24),
          (r.style.left = k + c * w + "px"),
          (r.style.top = l + R * w + "px"),
          r.style.setProperty("--aim", Math.atan2(R, c) + "rad");
      }
    }
  }
  level() {
    // t105u: Levelaufstieg 1:1 nach Konzept B – drei gefächerte Wachssiegel-Karten auf Stage 1280 × 720.
    const A = this.g,
      n = A.levelOptions.length,
      rot = n === 3 ? [-4, 0, 4] : n === 2 ? [-3, 3] : [0],
      hot = n === 3 ? 1 : -1;
    return `<div class="modal-wrap level-wrap nl" id="nl-screen" role="dialog" aria-modal="true" aria-label="Levelaufstieg"><i class="nl-shade" aria-hidden="true"></i><div class="nl-stage ns-stage"><div class="nl-box"><i class="nl-glow" aria-hidden="true"></i><i class="nl-bulb" aria-hidden="true"></i><i class="nl-ns" aria-hidden="true"></i><div class="nl-eyebrow">STUFE ${A.level} / NEUE MÖGLICHKEITEN</div><h2 class="nl-title">LEVELAUFSTIEG</h2><i class="nl-hazard" aria-hidden="true"></i><p class="nl-sub">Wähle eine Verbesserung.</p><div class="nl-cards cards n${n}">${A.levelOptions
      .map((o, g) => {
        const B = A.stats[o.stat],
          [sheet, idx, cells] = this.nlSeal(o.stat);
        return `<button data-action="upgrade" data-id="${g}" class="card nl-card ${g === hot ? "nl-hot" : ""}" style="--i:${g};--r:${rot[g]}deg;--x:${n === 3 ? [375, 636, 901][g] : n === 2 ? [505, 775][g] : 640}px" title="Profitiert davon: ${o.benefits}" aria-label="${o.name}: ${_A[o.stat]} ${lA(o.stat, B)} auf ${lA(o.stat, B + o.amount)}"><span class="nl-seal" style="background-image:var(${sheet});background-position:calc(${idx} * 100% / ${cells - 1}) 0;background-size:${cells * 100}% 100%"></span><h3>${o.name}</h3><p class="nl-label">${_A[o.stat]}</p><div class="nl-delta delta">${lA(o.stat, B)} → ${lA(o.stat, B + o.amount)}</div><span class="nl-btn choose">WÄHLEN</span><i class="nl-stampmark" aria-hidden="true"></i></button>`;
      })
      .join("")}</div><p class="nl-hint controller-hint">KEIN ZEITLIMIT</p></div></div></div>`;
  }
  nlSeal(stat) {
    // Wachssiegel: Talent-Siegelbogen (20) bzw. Zusatzbogen siegel-b (10)
    const a = { damage: 0, crit: 1, burn: 3, chain: 4, dash: 5, hp: 7, speed: 9, lifesteal: 11, economy: 13, pickup: 14, engineering: 16 },
      b2 = { attackSpeed: 0, bleed: 1, poison: 2, ability: 3, range: 4 };
    return stat in b2 ? ["--ns-siegel2", b2[stat], 10] : ["--tb-siegel", a[stat] ?? 15, 20];
  }
  nlBind() {
    // t105u: Karten fächern ein; Auswahl stempelt (tb_stamp) und wählt nach der Stempel-Animation. Logik bleibt chooseLevel.
    const root = document.getElementById("nl-screen");
    if (!root) return;
    this.nlBusy = !1;
    this.tbSound("tb_open", 0.6);
    root.querySelectorAll(".nl-card").forEach((c) => {
      c.addEventListener("click", (e) => {
        if (this.nlGo) return;
        e.preventDefault(), e.stopPropagation();
        if (this.nlBusy) return;
        this.nlBusy = !0;
        root.classList.add("nl-picked"), c.classList.add("nl-stamped");
        this.g.audio.init?.(), this.tbSound("tb_stamp", 1);
        const reduced = document.body.dataset.motion === "reduced";
        setTimeout(() => {
          if (this.screen !== "level" || !c.isConnected) return (this.nlBusy = !1);
          this.nlGo = !0;
          try { this.action("upgrade", c.dataset.id, c); } finally { this.nlGo = !1; }
        }, reduced ? 120 : 460);
      }, !0);
    });
  }
  shop() {
    const A = this.g,
      g = pB(A.wave),
      B = A.shopOffers
        .map((o, i) => {
          const I = o.kind === "weapon" ? j.find((M) => M.id === o.id) : void 0,
            C = I || _.find((M) => M.id === o.id),
            Q = o.sold
              ? o.result?.upgraded
                ? { from: o.result.from, to: o.result.tier }
                : void 0
              : I
                ? A.upgradePreview(o.id, o.tier)
                : void 0,
            a = !!I && !Q && A.weapons.length >= 6,
            t = I && Q ? I.damage * ZA(Q.from) * A.damageScale() : 0,
            h = I
              ? I.damage * ZA(o.sold ? (o.result?.tier ?? o.tier) : (Q?.to ?? o.tier)) * A.damageScale()
              : 0,
            s = h - t,
            U = I
              ? Q
                ? `<div class="upgrade-preview"><span>${o.sold ? "AUFGEWERTET" : "AUFWERTUNG"}</span><strong>Stufe ${iA[Q.from]} <b>→</b> ${iA[Q.to]}</strong><small>Schaden ${Math.round(t)} → ${Math.round(h)} <em>+${Math.round((s / Math.max(1, t)) * 100)} %</em></small></div>`
                : `<div class="new-preview"><span>${o.sold ? "KAUF ABGESCHLOSSEN" : A.weapons.some((M) => M.id === o.id) ? "ZUSÄTZLICHES EXEMPLAR" : "NEUE WAFFE"}</span><strong>${Math.round(h)} Schaden</strong><small>${((1 / I.cooldown) * A.stats.attackSpeed).toFixed(1).replace(".", ",")} Angriffe / Sek.</small></div>`
              : o.sold
                ? '<div class="new-preview"><span>GEGENSTAND AUSGERÜSTET</span><strong>Im Build aktiv</strong></div>'
                : `<div class="item-preview">${Object.entries(_.find((M) => M.id === o.id).stats)
                    .slice(0, 2)
                    .map(
                      ([M, r]) =>
                        `<span>${_A[M]}<b>${lA(M, A.stats[M])} → ${lA(M, A.stats[M] + r)}</b></span>`,
                    )
                    .join("")}</div>`;
          return `<article class="offer rarity-${I ? o.tier : 1} ${o.sold ? "sold" : ""}" style="--rarity:${SA[I ? o.tier : 1]};--i:${i}"><div class="offer-top"><span class="rarity">${I ? `STUFE ${iA[o.tier]} · ${BB[o.tier]}` : "GEGENSTAND"}</span>${this.button("lock", o.locked ? x("lock") + "GEHALTEN" : x("lock") + "HALTEN", "lock " + (o.locked ? "locked" : ""), String(i), o.sold)}</div><div class="offer-art">${I ? x(C.id, C.color) : cg(C.id, C.color)}${I ? `<b class="tier-badge">${iA[o.tier]}</b>` : ""}</div><h3>${C.name}</h3><p class="desc">${C.desc}</p>${U}<div class="buy">${this.button("buy", `<span>▱ ${A.price(o)}</span><b>${o.sold ? "GEKAUFT" : a ? "ARSENAL VOLL" : Q ? "AUFWERTEN ↑" : "KAUFEN +"}</b>`, "primary", String(i), o.sold || A.money < A.price(o) || a)}</div></article>`;
        })
        .join(""),
      E = Array.from({ length: 6 }, (o, i) => {
        const I = A.weapons[i];
        if (!I) return `<div class="empty-inv"><b>0${i + 1}</b><span>Freier Platz</span></div>`;
        const C = j.find((a) => a.id === I.id),
          Q =
            A.weapons.some((a, t) => t !== i && a.id === I.id && a.tier === I.tier && !a.mutation) &&
            I.tier < 4 &&
            !I.mutation;
        return `<article class="inv-weapon ${I.glow > 0 ? "inventory-upgrade" : ""}" data-weapon-slot="${i}" style="--rarity:${SA[I.tier]}">${x(I.id)}<div><h4>${I.mutation || C.name}</h4><span class="small">STUFE ${iA[I.tier]} <b>·</b> ${Math.round(C.damage * ZA(I.tier) * A.damageScale())} Schaden</span></div><div class="inv-actions">${this.button("sell", "Verkaufen", "textbtn", String(i), A.weapons.length === 1)}${Q ? this.button("combine", "↑ Kombinieren", "textbtn", String(i)) : ""}${A.canMutate(I) ? this.button("mutation", x("mutation") + "Mutation", "textbtn mutate", String(i)) : ""}</div></article>`;
      }).join("");
    return `<section class="screen dim shop-screen">${this.header(
      "Die Werkstatt.",
      "Welle " + A.wave + " überlebt · " + A.rules.name,
      `<div class="currency">${x("economy")} ${Math.floor(A.money)}</div>`,
    )
      .replace('data-action="back"', 'data-action="shopHelp"')
      .replace(
        "← Zurück",
        "? Regeln",
      )}<div class="shop-layout"><main><div class="section-title">ANGEBOTE <span>KEIN ZEITLIMIT · DOPPELTE WERTEN AUTOMATISCH AUF</span></div><div class="shop-offers">${B}</div><div class="shop-reroll"><small>Waffen-Chancen: ${g.map((o, i) => iA[i + 1] + " " + Math.round(o * 100) + " %").join(" · ")}</small>${this.button("reroll", `${x("reroll")}<span>Neu würfeln · ▱ ${A.rerollCost}</span>`, "secondary compact", "", A.money < A.rerollCost)}</div><section class="inventory"><div class="section-title">DEIN ARSENAL <span>${A.weapons.length} / 6 PLÄTZE</span></div><div class="inventory-list">${E}</div></section><div class="shop-footer"><p>Doppelte Waffe = mindestens +1 Stufe, maximal IV.<br><span>${Math.round(A.rules.waveHeal * 100)} % Wellenheilung · Mutationen bleiben erhalten.</span></p>${this.button("next", A.coop ? (A.actorIndex === 0 ? "Bereit · weiter zu Spieler 2 →" : `Gemeinsam in Welle ${A.wave + 1} →`) : `Welle ${A.wave + 1} starten →`, "primary")}</div></main><aside class="stat-panel panel"><div class="section-title">DEIN BUILD</div><div class="stat-list">${["hp", "damage", "range", "attackSpeed", "crit", "armor", "speed", "lifesteal", "bleed", "burn", "chain", "economy", "engineering"].map((o) => `<div class="stat-line"><span>${x(o)}${_A[o]}</span><b>${lA(o, A.stats[o])}</b></div>`).join("")}</div><div class="section-title">GEGENSTÄNDE</div><div class="owned-items">${
      Object.entries(A.items)
        .map(([o, i]) => {
          const I = _.find((C) => C.id === o);
          return this.button("sellItem", cg(o, I.color) + (i > 1 ? `<b>${i}</b>` : ""), "owned-item", o);
        })
        .join("") || '<p class="small muted">Noch keine Gegenstände.</p>'
    }</div><p class="notice">Antippen: ein Exemplar verkaufen.</p><div class="separator"></div><p class="notice">Mutationen ab III:<br>Nietenspucker: ≥12 % Krit.<br>Mondspalter: ≥3 Blutung<br>Schraubenknecht: ≥140 % Technik<br>Lichtgabel: ≥2 Blitzsprünge</p></aside></div></section>`;
  }
  pause() {
    return `<div class="modal-wrap pause-wrap"><div class="modal narrow panel pause-modal"><div class="eyebrow">ATME KURZ DURCH</div><h2>Die Nacht pausiert.</h2><p class="sub">Welle ${this.g.wave} · Stufe ${this.g.level}</p><div class="menu-buttons">${this.button("resume", "Weiterkämpfen", "primary")}${this.button("settings", "Einstellungen")}${this.button("help", "Steuerung & Regeln")}${this.button("abandon", "Run beenden", "danger")}</div><p class="notice">${this.g.coop ? "Gemeinsamer Lauf: diese Sitzung. P1 WASD / LEER / E · P2 Pfeile oder IJKL / O / U. Zum Beleben 3 Sekunden beim Partner bleiben." : "Wellenbeginn automatisch gesichert. Nach Neuladen im Hauptmenü fortsetzen; Fortschritt seit Wellenbeginn entfällt."} ESC / Controller B setzt fort.</p></div></div>`;
  }
  settings() {
    const A = this.g.save.data.settings,
      g = [
        ["master", "Gesamtlautstärke"],
        ["sfx", "Effektlautstärke"],
        ["music", "Musiklautstärke"],
        ["uiVolume", "Menülautstärke"],
        ["cameraZoom", "Kamera-Zoom", 60, 120],
        ["shake", "Bildschirmerschütterung"],
        ["flashes", "Trefferblitze"],
        ["particles", "Partikelstärke"],
      ];
    return `<section class="screen dim settings-screen">${this.header("Einstellungen", "Kamera, Klang & Effekte")}<div class="settings panel">${g.map(([B, E, o = 0, i = 100]) => `<label class="setting"><span>${E}</span><input data-setting="${B}" type="range" min="${o}" max="${i}" step="5" value="${Math.round(Number(A[B]) * 100)}"><output>${Math.round(Number(A[B]) * 100)} %</output></label>`).join("")}${[
      ["numbers", "Schadenszahlen"],
      ["manual", "Manuelles Zielen"],
      ["reducedMotion", "Reduzierte Bewegung & Blitze"],
      ["dangerContrast", "Gefahren: hoher Kontrast & Muster"],
      ["muteUnfocused", "Ton im Hintergrund stummschalten"],
    ]
      .map(
        ([B, E]) =>
          `<label class="setting"><span>${E}</span><input data-setting="${B}" type="checkbox" ${A[B] ? "checked" : ""}><span></span></label>`,
      )
      .join(
        "",
      )}<div class="quality-setting"><b>Darstellungsqualität</b><div class="row">${["auto", "high", "low"].map((B, E) => this.button("quality", ["Automatisch", "Hoch", "Leistung"][E], "secondary compact " + (A.quality === B ? "selected" : ""), B)).join("")}</div></div><p class="notice">Alles wird sofort lokal gespeichert. Kamera-Zoom: 60 % = mehr Übersicht, 75 % = Standard, 120 % = näher. Wirkt sofort im Spielfeld; HUD und Menüs bleiben unverändert groß. Manuelles Zielen: Maus oder rechter Stick. Q / Controller Y schaltet auch im Kampf um. Gegner-Warnungen bleiben immer sichtbar. Kein großflächiges Stroboskop-Flackern.</p><div class="separator"></div><div class="row between"><span class="small muted">Klangprobe</span>${this.button("soundtest", "♪ Sammelton", "secondary compact")}</div><div class="separator"></div><h3>Dein Spielstand</h3><p class="notice">Automatische lokale Sicherung. Fortsetzen startet am letzten Wellenbeginn, nicht mitten im Kampf. Exportierte JSON-Dateien bleiben bei dir. Import ersetzt den lokalen Fortschritt; nur im Hauptmenü verfügbar.</p><div class="row save-actions">${this.button("exportSave", "Sicherung exportieren", "secondary compact")}${this.button("importSave", "Sicherung importieren", "secondary compact", "", this.returnScreen !== "home")}${this.button("showGuide", "Kurzanleitung zeigen", "secondary compact")}</div>${this.importError ? `<p class="notice danger-text" role="alert">${this.importError}</p>` : ""}${this.importCandidate ? `<div class="import-preview panel" role="alert"><b>Sicherung wirklich übernehmen?</b><p>${this.importCandidate.points} Talentpunkte · ${this.importCandidate.history.length} gespeicherte Runs. Der bisherige Spielstand wird ersetzt.</p><div class="row">${this.button("confirmImport", "Übernehmen", "danger compact")}${this.button("cancelImport", "Abbrechen", "secondary compact")}</div></div>` : ""}</div></section>`;
  }
  setting(A) {
    const g = A.dataset.setting;
    if (!g) return;
    const B = this.g.save.data.settings;
    let E = A.type === "checkbox" ? A.checked : Number(A.value) / 100;
    g === "cameraZoom" && (E = V(Number.isFinite(E) ? Number(E) : 0.75, 0.6, 1.2)),
      (B[g] = E),
      this.g.save.write(),
      (document.body.dataset.motion = B.reducedMotion ? "reduced" : "full"),
      this.g.audio.update();
    const o = A.nextElementSibling;
    o?.tagName === "OUTPUT" && (o.textContent = Math.round(Number(E) * 100) + " %"),
      this.g.audio.init(),
      (g === "master" || g === "sfx") && this.g.audio.sound("pickup"),
      g === "uiVolume" && this.g.audio.sound("click");
  }
  // ===== t97u: Talentbaum im Noir-Kreide-Stil (Konzept B) – nur Präsentation, Talent-Logik/Speicherstand unverändert =====
  nsFit() {
    const S = nsStage(),
      r = this.root;
    if (!r) return;
    const hk = S.portrait ? 0.6 * (S.vw / 390) : S.flat ? Math.max(S.k, 0.64) : S.k;
    const v = { "--nsq": S.q.toFixed(1), "--nhk": hk.toFixed(5), "--nk": S.k.toFixed(5), "--nsw": S.W.toFixed(1), "--nsh": S.H.toFixed(1), "--nox": S.ox.toFixed(1), "--noy": S.oy.toFixed(1) };
    for (const n in v) r.style.setProperty(n, v[n]);
    document.body.dataset.ns = S.portrait ? "portrait" : S.flat ? "flat" : "wide";
    this.nsBound || ((this.nsBound = !0), addEventListener("resize", () => this.nsFit()), addEventListener("orientationchange", () => setTimeout(() => this.nsFit(), 150)));
  }
  tbLayout() {
    // t100u: 1:1 nach Konzept B – 3 Reihen × 7 Plätze (Stage 1280 × 720). Die echten 17 Talente, 4 Plätze bleiben leer (Schloss).
    const rows = [
        { name: "FEUERKRAFT", ids: ["might", "crit", "haste", "leech", "dash", "crown", null] },
        { name: "PANZERUNG", ids: ["root", "vigor", "feet", "armor", "regen", null, null] },
        { name: "SCHROTT & GLÜCK", ids: ["wealth", "collect", "luck", "tech", "spark", "coil", null] },
      ],
      icon = { might: 0, crit: 1, haste: 2, spark: 3, coil: 4, dash: 5, crown: 6, root: 7, vigor: 8, feet: 9, armor: 10, leech: 11, regen: 12, wealth: 13, collect: 14, luck: 15, tech: 16 },
      placed = new Set(rows.flatMap((r) => r.ids));
    // unbekannte (neue) Talente füllen freie Plätze, damit nichts verloren geht
    for (const t of b)
      if (!placed.has(t.id))
        for (const r of rows) {
          const k = r.ids.indexOf(null);
          if (k >= 0) {
            (r.ids[k] = t.id), placed.add(t.id);
            break;
          }
        }
    const X = (c) => 206 + c * 115.7,
      Y = [216, 379, 542],
      PX = (c) => 30 + c * 55,
      PY = [166, 300, 434],
      cells = [];
    rows.forEach((r, ri) => r.ids.forEach((id, c) => cells.push({ id, ri, c, x: X(c), y: Y[ri], px: PX(c), py: PY[ri] })));
    const at = (ri, c) => cells.find((o) => o.ri === ri && o.c === c),
      segs = [];
    // waagerechte gestrichelte Linien (Knotenrand zu Knotenrand)
    rows.forEach((r, ri) => {
      for (let c = 0; c < 6; c++) segs.push({ a: at(ri, c), b: at(ri, c + 1), p: [[X(c) + 37, Y[ri]], [X(c + 1) - 37, Y[ri]]], q: [[PX(c) + 26, PY[ri]], [PX(c + 1) - 26, PY[ri]]] });
      // V-Verzweigung unter Platz 1/2
      const vx = (X(0) + X(1)) / 2 + 3,
        pvx = (PX(0) + PX(1)) / 2 + 1;
      segs.push({ a: at(ri, 0), b: at(ri, 1), v: 1, p: [[X(0) + 13, Y[ri] + 31], [vx, Y[ri] + 84]], q: [[PX(0) + 9, PY[ri] + 22], [pvx, PY[ri] + 56]] });
      segs.push({ a: at(ri, 0), b: at(ri, 1), v: 1, p: [[vx, Y[ri] + 84], [X(1) - 9, Y[ri] + 31]], q: [[pvx, PY[ri] + 56], [PX(1) - 8, PY[ri] + 22]] });
    });
    // Diagonale wie im Konzept: Reihe 2 Platz 5 -> Reihe 3 Platz 6
    segs.push({ a: at(1, 4), b: at(2, 5), p: [[X(4) + 8, Y[1] + 37], [X(5) - 26, Y[2] - 26]], q: [[PX(4) + 6, PY[1] + 25], [PX(5) - 17, PY[2] - 19]] });
    return { rows, icon, cells, segs, Y, PY };
  }
  tbState(t) {
    const s = this.g.save.data,
      r = s.talents[t.id] || 0,
      open = !t.parent || (s.talents[t.parent] || 0) > 0;
    return { r, open, cls: r >= t.max ? "maxed" : r > 0 ? "learned" : open ? "available" : "locked" };
  }
  tbSegStyle(s) {
    const f = (p) => {
      const [[x1, y1], [x2, y2]] = p,
        len = Math.hypot(x2 - x1, y2 - y1),
        ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
      return [x1.toFixed(1), y1.toFixed(1), len.toFixed(1), ang.toFixed(2)];
    };
    const [x, y, w, a] = f(s.p),
      [px, py, pw, pa] = f(s.q);
    return `--x:${x}px;--y:${y}px;--w:${w}px;--a:${a}deg;--px:${px}px;--py:${py}px;--pw:${pw}px;--pa:${pa}deg`;
  }
  talents() {
    const A = this.g.save.data,
      L = this.tbLayout(),
      byId = (id) => b.find((t) => t.id === id);
    b.some((t) => t.id === this.selectedTalent) || (this.selectedTalent = "root");
    const segs = L.segs
      .map((s, i) => `<i class="tb-seg${s.v ? " tb-v" : ""}${!s.a.id || !s.b.id ? " tb-empty" : ""}" data-a="${s.a.id || ""}" data-b="${s.b.id || ""}" style="${this.tbSegStyle(s)};--d:${(0.25 + (s.a.c + s.a.ri * 0.5) * 0.13 + (s.v ? 0.1 : 0)).toFixed(2)}s"></i>`)
      .join("");
    const nodes = L.cells
      .map((o) => {
        const pos = `--x:${o.x.toFixed(1)}px;--y:${o.y}px;--px:${o.px}px;--py:${o.py}px;--d:${(0.3 + o.c * 0.13 + o.ri * 0.08).toFixed(2)}s`;
        if (!o.id) return `<div class="tb-node tb-slot" style="${pos};--i:17" aria-hidden="true" title="Noch kein Talent an diesem Platz"><span class="tb-spr"></span></div>`;
        const t = byId(o.id),
          S = this.tbState(t);
        return `<button class="tb-node ${S.cls} ${this.selectedTalent === t.id ? "selected" : ""}" data-action="tbNode" data-id="${t.id}" style="${pos};--i:${L.icon[t.id] ?? 17}" aria-label="${t.name}, Stufe ${S.r} von ${t.max}"><span class="tb-spr"></span><span class="tb-tip">${t.name}</span></button>`;
      })
      .join("");
    const labels = L.rows.map((r, i) => `<div class="tb-rowlabel${r.name.length > 12 ? " tb-long" : ""}" style="--y:${L.Y[i]}px;--py:${L.PY[i] - 44}px;--d:${(0.15 + i * 0.12).toFixed(2)}s">${r.name}</div>`).join("");
    const gear = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.3 1.5h3.4l.5 2.6a8.3 8.3 0 0 1 2.1.9l2.2-1.5 2.4 2.4-1.5 2.2c.4.7.7 1.4.9 2.1l2.6.5v3.4l-2.6.5a8.3 8.3 0 0 1-.9 2.1l1.5 2.2-2.4 2.4-2.2-1.5a8.3 8.3 0 0 1-2.1.9l-.5 2.6h-3.4l-.5-2.6a8.3 8.3 0 0 1-2.1-.9l-2.2 1.5-2.4-2.4 1.5-2.2a8.3 8.3 0 0 1-.9-2.1l-2.6-.5v-3.4l2.6-.5c.2-.7.5-1.4.9-2.1L3.1 5.9l2.4-2.4 2.2 1.5c.7-.4 1.4-.7 2.1-.9zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>`;
    return `<section class="screen tb-screen ${this.tbIntro ? "tb-intro" : ""}" id="tb-screen"><div class="tb-dim"></div><div class="tb-fit"><div class="tb-stage" id="tb-stage"><div class="tb-cone"></div><div class="tb-board" id="tb-board"><header class="tb-head"><div class="tb-eyebrow">NACHTSCHROTT / WERKSTATT</div><h2>TALENTBAUM</h2><i class="tb-hazard"></i></header>${labels}${segs}${nodes}<div class="tb-fx" id="tb-fx"></div></div><div class="tb-wallet" title="Talentpunkte"><b id="tb-points">${A.points}</b>${gear}</div><div class="tb-side"><aside class="tb-detail" id="tb-detail">${this.talentDetail()}</aside><footer class="tb-foot"><button class="tb-key" data-action="tbReset" data-id=""><i>▼</i>Zurücksetzen</button><button class="tb-key" data-action="back" data-id=""><i>←</i>Zurück</button></footer></div></div></div></section>`;
  }
  talentDetail() {
    const A = b.find((o) => o.id === this.selectedTalent) || b[0],
      g = this.g.save.data,
      S = this.tbState(A),
      par = A.parent ? b.find((o) => o.id === A.parent) : null,
      per = `${lA(A.stat, A.value, !0)} ${A.desc}`,
      max = S.r >= A.max,
      enough = g.points >= A.cost,
      L = this.tbLayout();
    let act;
    max
      ? (act = `<div class="tb-done">VOLL ERLERNT</div>`)
      : !S.open
        ? (act = `<div class="tb-warn" id="tb-warn">ANFORDERUNGEN NICHT ERFÜLLT</div>`)
        : !enough
          ? (act = `<div class="tb-warn" id="tb-warn">ZU WENIG TALENTPUNKTE</div>`)
          : (act = `<button class="tb-learn" data-action="tbLearn" data-id="${A.id}">ERLERNEN · ${A.cost} ${A.cost === 1 ? "PUNKT" : "PUNKTE"}</button>`);
    const ic = (i) => `<i class="tb-ri" style="--i:${i}"></i>`;
    return `<h3 class="tb-d-name">${A.name}</h3><div class="tb-d-level">Stufe <b class="tb-cnt" id="tb-rank">${S.r}</b> <b>/ ${A.max}</b></div><p class="tb-d-eff">${per}${A.max > 1 ? " pro Stufe" : ""}</p><div class="tb-d-hero"><i class="tb-junk l"></i><img src="${d.thumb("hero" + this.g.character)}" alt="" draggable="false"><i class="tb-junk r"></i></div><ul class="tb-d-req"><li class="${!par || (g.talents[par.id] || 0) > 0 ? "ok" : "no"}">${ic(par ? (L.icon[par.id] ?? 17) : 7)}${par ? "Voraussetzung: " + par.name : "Startpunkt · keine Voraussetzung"}</li><li class="${enough || max ? "ok" : "no"}">${ic(16)}Kosten: ${A.cost} ${A.cost === 1 ? "Talentpunkt" : "Talentpunkte"} je Stufe</li></ul><div class="tb-d-act">${act}</div>`;
  }
  tbSound(n, v = 1, r = 1) {
    try {
      const au = this.g.audio;
      if (!au.buffers?.has(n) && ["tb_flicker", "tb_open", "tb_chalk"].includes(n)) return;
      au.sound(n, r, v);
    } catch {}
  }
  tbRefresh(opts = {}) {
    const s = this.g.save.data,
      root = document.getElementById("tb-screen");
    if (!root) return;
    for (const t of b) {
      const el = root.querySelector(`.tb-node[data-id="${t.id}"]`);
      if (!el) continue;
      const S = this.tbState(t);
      el.classList.remove("locked", "available", "learned", "maxed"),
        el.classList.add(S.cls),
        el.classList.toggle("selected", t.id === this.selectedTalent),
        el.setAttribute("aria-label", `${t.name}, Stufe ${S.r} von ${t.max}`);
    }
    root.querySelectorAll(".tb-seg").forEach((e) => {
      e.classList.toggle("on", (s.talents[e.dataset.a] || 0) > 0 && (s.talents[e.dataset.b] || 0) > 0);
    });
    const pts = document.getElementById("tb-points");
    pts && (pts.textContent = String(s.points));
    opts.detail !== !1 && (document.getElementById("tb-detail").innerHTML = this.talentDetail());
  }
  tbPop(el) {
    el && (el.classList.remove("tb-pop"), void el.offsetWidth, el.classList.add("tb-pop"));
  }
  tbSelect(id, how = "click") {
    const t = b.find((o) => o.id === id);
    if (!t) return;
    const changed = this.selectedTalent !== id;
    (this.selectedTalent = id), this.tbRefresh();
    const S = this.tbState(t),
      el = document.querySelector(`.tb-node[data-id="${id}"]`);
    if (how === "click" && !S.open) {
      this.tbSound("tb_locked", 0.9), el && (el.classList.remove("tb-nope"), void el.offsetWidth, el.classList.add("tb-nope"));
      const w = document.getElementById("tb-warn");
      w && (w.classList.remove("tb-blink"), void w.offsetWidth, w.classList.add("tb-blink"));
    } else changed && this.tbSound("tb_paper", how === "focus" ? 0.55 : 0.85);
    const d = document.getElementById("tb-detail");
    d && changed && (d.classList.remove("tb-swap"), void d.offsetWidth, d.classList.add("tb-swap"));
    how === "click" && document.querySelector(".tb-learn")?.focus({ preventScroll: !0 });
  }
  tbFx(el, kind) {
    const fx = document.getElementById("tb-fx"),
      board = document.getElementById("tb-board");
    if (!fx || !el || document.body.dataset.motion === "reduced") return;
    const br = board.getBoundingClientRect(),
      r = el.getBoundingClientRect(),
      k = br.width / (board.offsetWidth || 1) || 1,
      cx = (r.left + r.width / 2 - br.left) / k,
      cy = (r.top + r.height / 2 - br.top) / k,
      n = kind === "ink" ? 16 : 12;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i"),
        a = Math.random() * Math.PI * 2,
        dist = (kind === "ink" ? 26 : 10) + Math.random() * (kind === "ink" ? 42 : 30);
      (p.className = kind === "ink" ? "tb-ink" : "tb-crumb"),
        p.style.setProperty("--x", cx + "px"),
        p.style.setProperty("--y", cy + "px"),
        p.style.setProperty("--dx", Math.cos(a) * dist + "px"),
        p.style.setProperty("--dy", (kind === "ink" ? Math.sin(a) * dist * 0.8 : 30 + Math.random() * 46) + "px"),
        p.style.setProperty("--s", (kind === "ink" ? 3 + Math.random() * 6 : 3 + Math.random() * 5).toFixed(1) + "px"),
        p.style.setProperty("--rot", (Math.random() * 360 - 180).toFixed(0) + "deg"),
        fx.append(p),
        setTimeout(() => p.remove(), 950);
    }
  }
  tbShake() {
    const b2 = document.getElementById("tb-board");
    b2 && document.body.dataset.motion !== "reduced" && (b2.classList.remove("tb-shake"), void b2.offsetWidth, b2.classList.add("tb-shake"));
  }
  tbLearn(id) {
    const o = b.find((C) => C.id === id),
      i = this.g.save.data;
    if (!o) return;
    if (!((!o.parent || i.talents[o.parent] > 0) && i.points >= o.cost && (i.talents[id] || 0) < o.max)) {
      this.tbSound("tb_locked", 0.9);
      return;
    }
    (i.points -= o.cost), (i.talents[id] = (i.talents[id] || 0) + 1), this.g.save.write();
    const el = document.querySelector(`.tb-node[data-id="${id}"]`);
    this.tbRefresh(),
      this.tbSound("tb_stamp", 1),
      el && (el.classList.remove("tb-stamped"), void el.offsetWidth, el.classList.add("tb-stamped")),
      this.tbFx(el, "ink"),
      this.tbShake(),
      this.tbPop(document.getElementById("tb-rank")),
      this.tbPop(document.getElementById("tb-points")),
      document.querySelectorAll(`.tb-seg[data-a="${id}"], .tb-seg[data-b="${id}"]`).forEach((e, k) => {
        e.classList.remove("tb-glow"), void e.getBoundingClientRect(), e.classList.add("tb-glow");
      }),
      (document.querySelector(".tb-learn") || el)?.focus({ preventScroll: !0 });
  }
  tbReset() {
    const o = this.g.save.data,
      learned = b.filter((t) => (o.talents[t.id] || 0) > 0);
    if (!learned.length) {
      this.tbSound("tb_locked", 0.7);
      return;
    }
    this.tbSound("tb_reset", 1);
    const reduced = document.body.dataset.motion === "reduced";
    learned.forEach((t, k) => {
      const el = document.querySelector(`.tb-node[data-id="${t.id}"]`);
      el &&
        (el.style.setProperty("--k", k * 0.04 + "s"),
        el.classList.add("tb-crumble"),
        setTimeout(() => this.tbFx(el, "crumb"), k * 40));
    });
    for (const i of b) o.points += (o.talents[i.id] || 0) * i.cost;
    (o.talents = {}), this.g.save.write();
    setTimeout(
      () => {
        document.querySelectorAll(".tb-crumble").forEach((e) => e.classList.remove("tb-crumble")),
          this.tbRefresh(),
          this.tbPop(document.getElementById("tb-points"));
      },
      reduced ? 0 : 520 + learned.length * 40,
    );
  }
  tbFit() {
    const sc = document.getElementById("tb-screen"),
      st = document.getElementById("tb-stage");
    if (!sc || !st) return;
    const vw = sc.clientWidth || innerWidth,
      vh = sc.clientHeight || innerHeight,
      portrait = matchMedia("(max-width: 600px) and (orientation: portrait)").matches;
    let k, W, H, oy = 0, ex = 0;
    if (portrait) (k = vw / 390), (W = 390), (H = Math.max(vh / k, 790));
    else {
      (k = Math.min(vw / 1280, vh / 720)), (W = vw / k), (H = vh / k), (oy = Math.max(0, (H - 720) / 2)), (ex = W - 1280);
    }
    const flat = !portrait && vh < 560,
      fz = flat ? 1.68 : 1,
      ex2 = flat ? Math.max(0, Math.min(ex - 20, 230)) : Math.min(Math.max(0, ex) * 0.3, 80),
      v = { "--k": k.toFixed(5), "--sw": W.toFixed(1), "--sh": H.toFixed(1), "--oy": oy.toFixed(1), "--oyb": oy.toFixed(1), "--ex2": ex2.toFixed(1) + "px", "--fz": fz };
    for (const n in v) sc.style.setProperty(n, v[n]);
  }
  tbBind() {
    const root = document.getElementById("tb-screen");
    if (!root) return;
    this.tbFit();
    this.tbFitBound || ((this.tbFitBound = !0), addEventListener("resize", () => this.tbFit()), addEventListener("orientationchange", () => setTimeout(() => this.tbFit(), 120)));
    root.querySelectorAll(".tb-node").forEach((n) => {
      n.addEventListener("focus", () => {
        n.matches(":focus-visible") && this.selectedTalent !== n.dataset.id && this.tbSelect(n.dataset.id, "focus");
      });
    });
    if (this.tbIntro) {
      this.tbSound("tb_open", 0.9);
      if (document.body.dataset.motion !== "reduced")
        for (let k = 0; k < 5; k++) setTimeout(() => document.getElementById("tb-screen") && this.tbSound("tb_chalk", 0.55, 0.92 + Math.random() * 0.16), 320 + k * 190);
      setTimeout(() => root.classList.remove("tb-intro"), 2600);
    }
    this.tbFlickerLoop();
  }
  tbFlick(k = Math.floor(Math.random() * 3)) {
    const root = document.getElementById("tb-screen");
    if (!root) return;
    root.classList.remove("tb-flick0", "tb-flick1", "tb-flick2"), void root.offsetWidth, root.classList.add("tb-flick" + k);
    this.tbSound("tb_flicker", 0.45 + Math.random() * 0.25, 0.94 + Math.random() * 0.12);
    setTimeout(() => root.classList.remove("tb-flick" + k), 900);
  }
  tbFlickerLoop() {
    clearTimeout(this.tbFlickT);
    const next = () => {
      const root = document.getElementById("tb-screen");
      if (!root) return;
      document.body.dataset.motion !== "reduced" && !document.hidden && this.tbFlick();
      this.tbFlickT = setTimeout(next, 2600 + Math.random() * 5200);
    };
    this.tbFlickT = setTimeout(next, this.tbIntro ? 3800 : 1800 + Math.random() * 2500);
  }
  bindTree() {
    const A = document.getElementById("tree-viewport"),
      g = document.getElementById("tree-world");
    this.treeInit || (this.centerTree(), (this.treeInit = !0));
    const B = () =>
      (g.style.transform = `translate(${this.treeX}px,${this.treeY}px) scale(${this.treeZoom})`);
    B();
    let E = !1,
      o = 0,
      i = 0;
    (A.onpointerdown = (Q) => {
      Q.target.closest("button") ||
        ((E = !0), (o = Q.clientX), (i = Q.clientY), A.setPointerCapture(Q.pointerId));
    }),
      (A.onpointermove = (Q) => {
        E &&
          ((this.treeX += Q.clientX - o),
          (this.treeY += Q.clientY - i),
          (o = Q.clientX),
          (i = Q.clientY),
          B());
      }),
      (A.onpointerup = () => (E = !1));
    const I = new Map();
    let C = 0;
    (A.onpointerdown = (Q) => {
      if (
        !Q.target.closest("button") &&
        (Q.preventDefault(),
        I.set(Q.pointerId, { x: Q.clientX, y: Q.clientY }),
        A.setPointerCapture(Q.pointerId),
        (o = Q.clientX),
        (i = Q.clientY),
        (E = !0),
        I.size === 2)
      ) {
        const a = [...I.values()];
        C = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
      }
    }),
      (A.onpointermove = (Q) => {
        if (I.has(Q.pointerId)) {
          if ((Q.preventDefault(), I.set(Q.pointerId, { x: Q.clientX, y: Q.clientY }), I.size === 2)) {
            const a = [...I.values()],
              t = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y),
              h = A.getBoundingClientRect(),
              s = (a[0].x + a[1].x) / 2 - h.left,
              U = (a[0].y + a[1].y) / 2 - h.top,
              M = this.treeZoom;
            (this.treeZoom = V((M * t) / Math.max(1, C), 0.4, 1.6)),
              (this.treeX = s - ((s - this.treeX) * this.treeZoom) / M),
              (this.treeY = U - ((U - this.treeY) * this.treeZoom) / M),
              (C = t);
          } else (this.treeX += Q.clientX - o), (this.treeY += Q.clientY - i);
          (o = Q.clientX), (i = Q.clientY), B();
        }
      }),
      (A.onpointerup = (Q) => {
        I.delete(Q.pointerId), (E = !1);
        const a = [...I.values()][0];
        a && ((o = a.x), (i = a.y));
      }),
      (A.onpointercancel = (Q) => I.delete(Q.pointerId)),
      A.addEventListener(
        "wheel",
        (Q) => {
          Q.preventDefault();
          const a = A.getBoundingClientRect(),
            t = Q.clientX - a.left,
            h = Q.clientY - a.top,
            s = this.treeZoom;
          (this.treeZoom = V(s * Math.exp(-Q.deltaY * 0.001), 0.45, 1.4)),
            (this.treeX = t - ((t - this.treeX) * this.treeZoom) / s),
            (this.treeY = h - ((h - this.treeY) * this.treeZoom) / s),
            B();
        },
        { passive: !1 },
      );
  }
  centerTree() {
    const A = document.getElementById("tree-viewport");
    A &&
      ((this.treeZoom = Math.min(0.85, (A.clientHeight - 105) / 830, (A.clientWidth - 85) / 820)),
      (this.treeZoom = V(this.treeZoom, 0.45, 0.85)),
      (this.treeX = A.clientWidth / 2 - 600 * this.treeZoom),
      (this.treeY = A.clientHeight - 75 - 850 * this.treeZoom),
      this.applyTree());
  }
  applyTree() {
    const A = document.getElementById("tree-world");
    A && (A.style.transform = `translate(${this.treeX}px,${this.treeY}px) scale(${this.treeZoom})`);
  }
  collection() {
    return `<section class="screen dim">${this.header("Sammlung", "Dein Arsenal & deine Gegner", `<span class="pill">${this.g.save.data.seen.filter((A) => _.some((g) => g.id === A) || j.some((g) => g.id === A)).length} ENTDECKT</span>`)}<div class="collection-tabs">${[
      ["heroes", "Helden"],
      ["weapons", "Waffen"],
      ["items", "Gegenstände"],
      ["enemies", "Gegner"],
      ["rules", "Effektregeln"],
    ]
      .map(([A, g]) => this.button("tab", g, "secondary compact " + (this.tab === A ? "selected" : ""), A))
      .join(
        "",
      )}</div>${this.tab === "rules" ? `<div class="panel rules"><h3>Klare Regeln. Keine Endlosschleifen.</h3><p style="margin-top:17px;color:#b5c0d3">${Lo}</p><div class="separator"></div><h3>Steuerung</h3><p style="margin-top:12px;color:#b5c0d3">WASD oder Pfeile: bewegen · Leertaste: Sprint · E: Fähigkeit · Q: Auto/Manuell · Maus: zielen · ESC: Pause · Enter: Auswahl.<br>Controller: linker Stick bewegen, rechter Stick zielen, Y Zielmodus, Start Pause, A/RB Sprint, X Fähigkeit, A wählen, B zurück, D-Pad oder Stick Menüs. Regler mit Links/Rechts ändern.<br>F3: Diagnose · F4: 400 Testgegner · F6: Testschutz. Diagnose-Tests zählen nicht als regulärer Balance-Nachweis.</p><div class="separator"></div><p class="small muted">Stufe 11: 6 frei spielbare Charaktere, 13 Waffen, 26 Gegenstände, 4 Arenen und 4 Bosse mit je 4 Angriffsmustern. Doppelte Käufe werten vorhandene Waffen automatisch auf. Seltene Waffenkapseln von Eliten (höchstens alle 4 Wellen) werten dein Arsenal im Kampf auf. Giftinfektionen: höchstens 2 Generationen, 2 Nachbarn pro Tod; maximal 3 Giftstapel. Motten: maximal 6. Frost: erneuert 2 Sek. Verlangsamung. Sprint: 0,24 Sek. unverwundbar; Aufladung 2,2 Sek. Die Charakterfähigkeit skaliert mit Fähigkeitskraft. Auf dem Handy: links ziehen, rechts Sprint/Fähigkeit antippen. Web-App unter HTTPS installierbar; Einzeldatei funktioniert ohne Server.</p></div>` : `<div class="collection-grid ${this.tab === "weapons" ? "weapons-grid" : this.tab === "enemies" ? "enemies-grid" : ""}">${this.tab === "heroes" ? J.map((A, g) => `<article class="collection-card panel hero-collection"><img class="portrait" src="${d.thumb("hero" + g)}" alt="${A.name}"><h3>${A.name}</h3><div class="tag">FREI SPIELBAR · ${A.title}</div><p>${A.desc}</p><p>${A.perk}</p><p><b>Startwaffe:</b> ${j.find((B) => B.id === A.weapon).name}</p><details class="weapon-details"><summary>${CA[g].name} · ${CA[g].cooldown} Sek.</summary><p>${CA[g].desc}</p></details></article>`).join("") : this.tab === "weapons" ? j.map((A) => `<article class="collection-card panel">${x(A.id, A.color)}<h3>${A.name}</h3><details class="weapon-details"><summary>Wirkung & Details</summary><p>${A.desc}</p><div class="tag">${A.tag.toUpperCase()} · ${this.g.save.data.seen.includes(A.id) ? "ENTDECKT" : "NOCH NICHT GEKAUFT"}</div></details></article>`).join("") : this.tab === "items" ? _.map((A) => `<article class="collection-card panel">${cg(A.id, A.color)}<h3>${A.name}</h3><p>${A.desc}</p><p style="margin-top:9px;color:#b5c0d3">${A.benefits}</p><div class="tag">${this.g.save.data.seen.includes(A.id) ? "ENTDECKT" : "NOCH NICHT GEKAUFT"} · STAPELBAR</div></article>`).join("") : z.map((A, g) => `<article class="collection-card panel ${g >= 8 ? "boss-card" : g === 7 ? "elite-card" : ""}"><span class="icon enemy-icon"><img src="${d.thumb("mob" + g)}" alt="" draggable="false"></span><h3>${A.name}</h3><details class="weapon-details"><summary>Verhalten & Details</summary><p>${["Verfolgt dich direkt. Klein, schnell und selten allein.", "Langsam und zäh. Warnt deutlich vor einem schweren Rundschlag.", "Zeigt seine Sturmrichtung. Weiche seitlich aus.", "Hält Abstand. Sichtbare Projektile und Ziellinie.", "Beschleunigt Nachbarn in einem Radius von 180.", "Zerfällt beim Tod in zwei kleine Verfolger.", "Platziert verzögert aktive Gefahrenzonen an deiner Position.", "Fünf Modifikatoren: Sturm, Artillerie, Regeneration, Eisenhaut oder Phasensprung.", "Welle 20. Drei Phasen bei 68 % und 35 % Leben. Bodenbruch, Salvenringe, Ansturm und Verstärkung.", "Pumpwerk: Laserfächer, Bodenbruch, Salvenringe und Ansturm.", "Mondkathedrale: Verstärkung, Salvenringe, Laserfächer und Bodenbruch.", "Kupfersternwarte: Ansturm, Salvenringe, Bodenbruch und Laserfächer."][g]}</p><div class="tag">${A.hp} BASIS-LP · ${g >= 8 ? "ENDGEGNER" : "SKALIERT PRO WELLE"}</div></details></article>`).join("") + $.map((A, g) => `<article class="collection-card panel foe-card"><span class="icon enemy-icon"><img src="${Bg["foe-idle-" + g]}" alt="" draggable="false"></span><h3>${A.name}</h3><details class="weapon-details"><summary>Verhalten & Details</summary><p>${A.desc}</p><div class="tag">${A.hp} BASIS-LP · AB WELLE ${A.unlock}${A.fly ? " · FLIEGT" : ""}</div></details></article>`).join("")}</div>`}</section>`;
  }
  challenges() {
    const A = [
      ["hundred", "Kohlrabenschwarz", "Besiege 100 Gegner in einem Run.", "✦"],
      ["six", "Gut behangen", "Beende einen Run mit sechs Waffen.", "⚒"],
      ["risk", "Schlechte Ideen", "Wähle alle drei Risikoangebote in einem Run.", "ϟ"],
      ["crown", "Feierabend für den König", "Besiege einen Endgegner in Welle 20.", "♛"],
    ];
    return `<section class="screen dim">${this.header("Für Ruhm. Und Altmetall.", "Herausforderungen")}<p class="sub">Jede abgeschlossene Herausforderung vergibt einmalig 2 Talentpunkte. Auswertung am Ende eines Runs.</p><div class="challenges">${A.map(
      ([g, B, E, o]) => {
        const i = this.g.save.data.challenges.includes(g);
        return `<article class="challenge panel ${i ? "" : "locked"}"><div class="badge">${o}</div><div><div class="eyebrow" style="font-size:9px;margin-bottom:8px">${i ? "ABGESCHLOSSEN" : "NOCH OFFEN"} · ✦ 2 PUNKTE</div><h3>${B}</h3><p>${E}</p></div></article>`;
      },
    ).join("")}</div></section>`;
  }
  stats() {
    const A = this.g.save.data;
    return `<section class="screen dim">${this.header("Jede Nacht hinterlässt Spuren.", "Statistiken")}<div class="summary-stats"><div><b>${A.history.length}</b><span>GESPEICHERTE RUNS</span></div><div><b>${A.bestWave}</b><span>BESTE WELLE</span></div><div><b>${A.kills}</b><span>GEGNER BESIEGT</span></div><div><b>${A.history.filter((g) => g.won).length}</b><span>SIEGE / LETZTE 20 RUNS</span></div></div>${this.difficultyRecords()}<div class="panel" style="overflow:auto;touch-action:pan-x pan-y"><table class="history-table"><thead><tr><th>DATUM · BERLIN</th><th>CHARAKTER</th><th>SCHWIERIGKEIT</th><th>ERGEBNIS</th><th>ZEIT</th><th>GEGNER</th><th>SCHADEN</th></tr></thead><tbody>${A.history.map((g) => `<tr><td>${new Date(g.date).toLocaleString("de-DE", { timeZone: "Europe/Berlin", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</td><td>${g.character}</td><td>${g.difficulty === void 0 ? "Archiv · vor Herausforderungsupdate" : gA[g.difficulty]?.name || "Archiv"}<small class="history-map">${g.map || ""}</small></td><td style="color:${g.won ? "#b8d0f0" : "#d8b1a6"}">${g.won ? "Sieg" : "Welle " + g.wave}</td><td>${Math.floor(g.time / 60)}:${String(Math.floor(g.time % 60)).padStart(2, "0")}</td><td>${g.kills}</td><td>${g.damage.toLocaleString("de-DE")}</td></tr>`).join("") || '<tr><td colspan="7" class="muted">Deine Geschichte beginnt mit dem ersten Run.</td></tr>'}</tbody></table></div><p class="notice">Es werden die letzten 20 abgeschlossenen Runs gespeichert. Aktive Runs können nach Neuladen ab dem letzten Wellenbeginn fortgesetzt werden. Zwischenfortschritt dieser Welle entfällt.</p></section>`;
  }
  risk() {
    return `<div class="modal-wrap"><div class="modal"><div class="eyebrow">EINE ENTSCHEIDUNG IM DUNKELN</div><h2>Wie viel Nacht verträgst du?</h2><p class="sub">Deine Wahl gilt für die nächste Welle. Keine Eile.</p><div class="cards two"><button class="card" data-action="risk" data-id="yes"><span class="card-icon" style="color:#f0bd87">ϟ</span><h3>Das knirscht so schön.</h3><p class="small muted">35 % mehr Gegner erscheinen.<br>Überleben bringt ${(40 * this.g.rules.economy).toLocaleString("de-DE")} zusätzlichen Schrott.</p><div class="delta gold" style="margin-top:20px">Risiko → ▱ ${(40 * this.g.rules.economy).toLocaleString("de-DE")}</div><span class="choose">HERAUSFORDERUNG ANNEHMEN ↗</span></button><button class="card" data-action="risk" data-id="no"><span class="card-icon">♥</span><h3>Erst mal durchatmen.</h3><p class="small muted">${(50 * this.g.rules.healing).toLocaleString("de-DE")} % des maximalen Lebens heilen.<br>${(10 * this.g.rules.economy).toLocaleString("de-DE")} Schrott sofort mitnehmen.</p><div class="delta" style="margin-top:20px">Sicher → Heilung + ▱ ${(10 * this.g.rules.economy).toLocaleString("de-DE")}</div><span class="choose">SICHEREN VORTEIL WÄHLEN ↗</span></button></div></div></div>`;
  }
  mutation() {
    return `<div class="modal-wrap"><div class="modal"><div class="eyebrow">WAFFENMUTATION / QUALITÄT III+</div><h2>Altmetall. Neue Natur.</h2><p class="sub">Deine Waffe verändert ihren Spielstil. Wähle ohne Zeitdruck.</p><div class="cards two">${this.g.mutationOptions.map((A) => `<button class="card mutation-card" data-action="mutate" data-id="${A}">${x(this.g.mutationWeapon.id)}<span class="rarity-label">MUTATION / EINZIGARTIG</span><h3>${A}</h3><p class="small muted">${dg[this.g.mutationWeapon.id].find((g) => g.name === A).desc}</p><span class="choose">MUTATION ERWECKEN ↗</span></button>`).join("")}</div>${this.button("cancelMutation", "Noch nicht entscheiden", "textbtn")}</div></div>`;
  }
  end() {
    const A = this.g,
      g = this.screen === "victory";
    return `<div class="modal-wrap end-wrap"><div class="modal end-modal ${g ? "end-won" : "end-lost"}" style="max-width:900px"><div class="eyebrow">${g ? "DER MORGEN GEHÖRT DIR" : "DIE NACHT HAT NOCH HUNGER"}</div><h2 style="font-size:48px">${g ? "Krone geklaut." : "Knapp daneben."}</h2><p class="sub">${g ? z[IA[A.map].boss].name + " ist Geschichte. Dein Build noch lange nicht." : "Dein nächster Run beginnt nicht bei null. Nur bei Welle 1."}</p><div class="summary-stats"><div><b>${A.wave}</b><span>WELLE</span></div><div><b>${A.kills}</b><span>GEGNER BESIEGT</span></div><div><b>${Math.floor(A.runTime / 60)}:${String(Math.floor(A.runTime % 60)).padStart(2, "0")}</b><span>KAMPFZEIT</span></div><div><b>+${A.testRun ? 0 : 2 + Math.floor(A.wave / 4) + (g ? 5 : 0)}</b><span>TALENTPUNKTE</span></div></div><p class="difficulty-result" style="color:${A.rules.color}">${A.rules.name} · ${A.climb ? GA[A.climb - 1].name + " · " + A.climbState.def.unit + " " + A.climbState.metres + " m" : IA[A.map].name}${g && !A.testRun ? " · Für diesen Helden gemeistert" : ""}</p><div class="run-extra-stats"><span>BESTE SERIE <b>${A.maxKillStreak}</b></span><span>SCHADEN <b>${Math.floor(A.runDamage).toLocaleString("de-DE")}</b></span></div><p class="end-build">DEIN BUILD<br><span style="color:#eadbb8">${A.weapons.map((B) => B.mutation || j.find((E) => E.id === B.id).name + " " + ["", "I", "II", "III", "IV"][B.tier]).join(" · ")}</span></p><div class="row" style="justify-content:center;flex-wrap:wrap">${this.button("hubReturn", "Zurück in den Hof", "primary hub-return")}${this.button("restart", "Noch eine Nacht →", "secondary")}${g ? this.button("endless", "Endlos weitermachen", "secondary") : ""}${this.button("talents", "✦ " + A.save.data.points + " Punkte ausgeben", "secondary")}${this.button("home", "Hauptmenü", "textbtn")}</div><p class="notice">${A.testRun ? "Testlauf: kein Fortschritt gespeichert." : "Fortschritt gespeichert · Herausforderungen können zusätzliche Punkte bringen."}</p></div></div>`;
  }
  openStation(A) {
    const g = this.g;
    (this.hubFrom = A),
      (this.hubMenuOpen = !1),
      (g.phase = "menu"),
      (this.returnScreen = "hub"),
      A === "werkstatt"
        ? (this.screen = "talents")
        : A === "tor" && g.hubPartner
          ? ((this.crewHeroes = [g.character, g.hubPartner.hero]),
            (this.crewWeapons = this.crewHeroes.map((B) => J[B].weapon)),
            (g.difficulty = Math.min(g.difficulty, ...this.crewHeroes.map((B) => g.maxDifficulty(B)))),
            (this.screen = "coopSetup"))
          : ((this.screen = "characters"), (this.charMode = A === "unterkunft" ? "hero" : "run")),
      this.render();
  }
  toggleHubMenu() {
    this.screen === "hub" && ((this.hubMenuOpen = !this.hubMenuOpen), this.render());
  }
  hubHud() {
    const A = this.g,
      g = J[A.character],
      B = A.hubNear ? wg(A.hubNear) : void 0,
      E = document.body.classList.contains("touch-device"),
      o = B
        ? `<button class="hub-prompt at-${B.id}" data-action="hubInteract" data-id="${B.id}"><kbd>${E ? "Tippen" : "E"}</kbd><span><b>${B.name}</b><small>${B.verb}</small></span></button>`
        : "",
      i = this.hubMenuOpen
        ? `<div class="modal-wrap hub-menu-wrap"><div class="modal narrow panel hub-menu"><div class="eyebrow">DER HOF</div><h2>Kurze Pause im Hof.</h2><p class="sub">${g.name} wartet im Hof.</p><div class="menu-buttons">${this.button("hubMenu", "Weiter", "primary")}${this.button("hubSettings", "Einstellungen")}${this.button("hubHelp", "Steuerung & Regeln")}${A.hubPartner ? this.button("hubLeave", "Spieler 2 verabschieden") : this.button("hubJoin", "Spieler 2 dazuholen")}${this.button("home", "Hauptmenü", "secondary")}</div><p class="notice">ESC / Controller B schließt dieses Menü.</p></div></div>`
        : "",
      I = A.hubPartner,
      C = I
        ? `<div class="hub-place hub-place-p2"><span class="eyebrow">SPIELER 2</span><b>${J[I.hero].name}</b><small>${J[I.hero].title}</small></div>`
        : `<button class="hub-join" data-action="hubJoin" aria-label="Spieler 2 kommt dazu"><span>＋</span><b>Spieler 2</b>${E ? "" : "<kbd>O</kbd>"}</button>`,
      Q = I
        ? E
          ? "Zu zweit, ein Bildschirm · P1: Stick links · P2: Stick rechts · zur Tür gehen und antippen"
          : "P1: WASD · E   ·   P2: Pfeile / IJKL · O   ·   ESC: Menü"
        : E
          ? "Links ziehen: laufen · Zur Tür gehen und antippen"
          : "WASD / Pfeile: laufen · E: benutzen · O: Spieler 2 · ESC: Menü";
    return `<section class="hub-hud${I ? " hub-duo" : ""}"><div class="hub-place hub-place-p1"><span class="eyebrow">${I ? "SPIELER 1" : "DER HOF"}</span><b>${g.name}</b><small>${g.title}</small></div>${C}<div class="hub-actions">${this.button("hubMenu", x("pause"), "icon-button hub-menu-btn")}</div>${o}<p class="hub-hint">${Q}</p></section>${i}`;
  }
  back() {
    if (
      (this.screen === "settings" && ((this.importCandidate = void 0), (this.importError = "")),
      this.screen === "collection" && this.returnScreen === "settings")
    ) {
      (this.screen = "settings"),
        (this.returnScreen = this.g.phase === "pause" ? "pause" : "home"),
        this.render();
      return;
    }
    if (this.screen === "talents" && document.activeElement?.closest(".tb-detail")) {
      this.root
        .querySelector(`[data-action=tbNode][data-id="${this.selectedTalent}"]`)
        ?.focus({ preventScroll: !0 });
      return;
    }
    if (["talents", "characters", "coopSetup"].includes(this.screen) && this.returnScreen === "hub") {
      (this.charMode = "full"), this.g.enterHub({ at: this.hubFrom });
      return;
    }
    if (this.screen === "settings" && this.returnScreen === "hub") {
      (this.screen = "hub"), (this.hubMenuOpen = !0), this.render();
      return;
    }
    if (this.screen === "settings") {
      (this.screen = this.returnScreen), this.render();
      return;
    }
    if (this.screen === "collection" && this.returnScreen === "hub") {
      (this.screen = "hub"), (this.hubMenuOpen = !0), this.render();
      return;
    }
    if (this.screen === "collection" && this.returnScreen === "pause") {
      (this.screen = "pause"), this.render();
      return;
    }
    if (this.screen === "pause") {
      this.g.pause();
      return;
    }
    ["level", "risk", "mutation", "shop", "defeat", "victory"].includes(this.screen) ||
      ((this.screen = "home"), (this.g.phase = "menu"), this.render());
  }
  action(A, g, B) {
    const E = this.g;
    switch (A) {
      case "coopSetup":
        (this.screen = "coopSetup"), (this.returnScreen = "home"), this.render();
        break;
      case "coopHero": {
        const [o, i] = g.split(":").map(Number);
        (this.crewHeroes[o] = i),
          (this.crewWeapons[o] = J[i].weapon),
          (E.difficulty = Math.min(E.difficulty, ...this.crewHeroes.map((I) => E.maxDifficulty(I)))),
          this.render();
        break;
      }
      case "coopWeapon": {
        const [o, i] = g.split(":");
        (this.crewWeapons[Number(o)] = i), this.render();
        break;
      }
      case "coopDifficulty":
        (E.difficulty = Number(g)), this.render();
        break;
      case "startCoop":
        E.startCoop(this.crewHeroes, this.crewWeapons);
        break;
      case "uiTheme": {
        const o = ["a", "b", "c"].includes(g) ? g : "a";
        (this.g.save.data.settings.uiTheme = o),
          this.g.save.write(),
          this.arenaThumbs.clear(),
          this.render(),
          this.root.querySelector(`[data-action="uiTheme"][data-id="${o}"]`)?.focus({ preventScroll: !0 }),
          document.body.classList.remove("theme-swap"),
          document.body.offsetWidth,
          document.body.classList.add("theme-swap");
        break;
      }
      case "credits":
        (this.screen = "credits"), this.render();
        break;
      case "dash":
        E.withActor(E.coop ? Number(g || 0) : 0, () => E.dash()), this.updateHUD(!0);
        break;
      case "ability":
        E.withActor(E.coop ? Number(g || 0) : 0, () => E.ability()), this.updateHUD(!0);
        break;
      case "difficulty":
        (this.difficultyInfo = Number(g)),
          E.selectDifficulty(Number(g)) ||
            this.toast(`Erst ${gA[Number(g) - 1].name} mit ${J[E.character].name} gewinnen.`),
          this.render();
        break;
      case "map":
        (E.map = Number(g)), (E.climb = 0), this.render();
        break;
      case "climb":
        (E.climb = Number(g) === 2 ? 2 : 1), this.render();
        break;
      case "preview":
        (E.character = (E.character + Number(g) + J.length) % J.length),
          (E.startWeapon = J[E.character].weapon),
          (E.difficulty = Math.min(E.difficulty, E.maxDifficulty())),
          (this.difficultyInfo = E.difficulty),
          this.render();
        break;
      case "quality":
        (E.save.data.settings.quality = g), E.save.write(), this.r.resize(), this.render();
        break;
      case "fullscreen": {
        document.fullscreenElement
          ? document.exitFullscreen?.()
          : document.documentElement.requestFullscreen
            ? document.documentElement
                .requestFullscreen()
                .catch(() => this.toast("Vollbild wird von diesem Browser nicht erlaubt."))
            : this.toast("Für Vollbild: im Browser zum Home-Bildschirm hinzufügen.");
        break;
      }
      case "home":
        (this.charMode = "full"),
          (E.hubPartner = void 0),
          (E.phase = "menu"),
          (this.screen = "home"),
          this.render();
        break;
      case "back":
        this.back();
        break;
      case "enterHub":
        (this.r.camX = this.r.camY = 0), E.enterHub(), (this.r.camX = E.player.x), (this.r.camY = E.player.y);
        break;
      case "hubJoin":
        (this.hubMenuOpen = !1), E.hubJoin(), this.render();
        break;
      case "hubLeave":
        E.hubLeave(), this.render();
        break;
      case "coopHub":
        (E.character = this.crewHeroes[0]),
          E.recalc(),
          (this.r.camX = this.r.camY = 0),
          E.enterHub({ partner: this.crewHeroes[1] }),
          (this.r.camX = E.player.x),
          (this.r.camY = E.player.y);
        break;
      case "hubReturn":
        E.enterHub({ fromRun: !0 }), (this.r.camX = E.player.x), (this.r.camY = E.player.y);
        break;
      case "hubInteract":
        E.hubInteract(g || void 0);
        break;
      case "hubMenu":
        this.toggleHubMenu();
        break;
      case "hubSettings":
        (this.hubMenuOpen = !1), (this.screen = "settings"), (this.returnScreen = "hub"), this.render();
        break;
      case "characters":
        (this.screen = "characters"), (this.returnScreen = "home"), this.render();
        break;
      case "character":
        (E.character = Number(g)),
          (E.startWeapon = J[E.character].weapon),
          (E.difficulty = Math.min(E.difficulty, E.maxDifficulty())),
          (this.difficultyInfo = E.difficulty),
          this.render();
        break;
      case "startWeapon":
        (E.startWeapon = g), this.render();
        break;
      case "continueRun":
        E.restoreCheckpoint() &&
          ((this.r.camX = E.player.x),
          (this.r.camY = E.player.y),
          this.toast("Wellenbeginn geladen. Bereit? Weiterkämpfen wählen."));
        break;
      case "dismissGuide":
        (E.save.data.tutorialSeen = !0), E.save.write(), this.render();
        break;
      case "showGuide":
        (this.tab = "rules"), (this.returnScreen = "settings"), (this.screen = "collection"), this.render();
        break;
      case "exportSave": {
        const o = new Blob([E.save.export()], { type: "application/json" }),
          i = URL.createObjectURL(o),
          I = document.createElement("a");
        (I.href = i),
          (I.download = "nachtschrott-sicherung.json"),
          I.click(),
          setTimeout(() => URL.revokeObjectURL(i), 1e3),
          this.toast("Sicherung exportiert.");
        break;
      }
      case "importSave": {
        if (this.returnScreen !== "home") break;
        const o = document.createElement("input");
        (o.type = "file"),
          (o.accept = ".json,application/json"),
          (o.onchange = async () => {
            const i = o.files?.[0];
            if (i) {
              (this.importCandidate = void 0), (this.importError = "");
              try {
                if (i.size > 1e6) throw new Error();
                this.importCandidate = JA.parse(await i.text());
              } catch {
                this.importError =
                  "Ungültige Sicherung. Erwartet wird eine NACHTSCHROTT-JSON-Datei unter 1 MB. Dein Spielstand bleibt unverändert.";
              }
              this.render();
            }
          }),
          o.click();
        break;
      }
      case "confirmImport":
        this.importCandidate &&
          this.returnScreen === "home" &&
          ((E.save.data = this.importCandidate),
          (this.importCandidate = void 0),
          E.save.write(),
          (E.phase = "menu"),
          (this.screen = "home"),
          this.render(),
          E.audio.update(),
          this.toast(E.save.error || "Sicherung übernommen."));
        break;
      case "cancelImport":
        (this.importCandidate = void 0), (this.importError = ""), this.render();
        break;
      case "start":
        (this.charMode = "full"), E.discover(E.startWeapon), (this.r.camX = 0), (this.r.camY = 0), E.start();
        break;
      case "restart":
        E.coop
          ? E.startCoop(
              E.coop.snapshot().map((o) => o.character),
              E.coop.actors.map((o) => o.startWeapon),
            )
          : E.start();
        break;
      case "pause":
        E.pause();
        break;
      case "resume":
        E.setPhase("combat");
        break;
      case "settings":
        (this.returnScreen = this.screen), (this.screen = "settings"), this.render();
        break;
      case "quit":
        (this.screen = "quit"), this.render();
        break;
      case "soundtest":
        E.audio.sound("pickup", 1.5);
        break;
      case "upgrade":
        E.chooseLevel(Number(g));
        break;
      case "buy": {
        const o = B.getBoundingClientRect(),
          i = E.buy(Number(g));
        if (!i) break;
        const C = (
            this.root.querySelector(`.inv-weapon[data-weapon-slot="${i.index}"] .icon`) ||
            this.root.querySelector(".owned-items")
          )?.getBoundingClientRect(),
          Q = document.createElement("div");
        (Q.className = "purchase-fly"),
          (Q.innerHTML = x(i.id)),
          (Q.style.left = o.x + o.width / 2 - 25 + "px"),
          (Q.style.top = o.y - 30 + "px"),
          Q.style.setProperty("--tx", (C ? C.x + C.width / 2 : o.x) - o.x - o.width / 2 + "px"),
          Q.style.setProperty("--ty", (C ? C.y + C.height / 2 : o.y + 100) - o.y + 30 + "px"),
          Q.style.setProperty("--rarity", SA[i.tier]),
          document.body.append(Q),
          setTimeout(() => Q.remove(), 850);
        break;
      }
      case "reroll":
        E.reroll();
        break;
      case "lock":
        (E.shopOffers[Number(g)].locked = !E.shopOffers[Number(g)].locked), this.render();
        break;
      case "sellItem":
        E.sellItem(g);
        break;
      case "sell":
        E.sell(Number(g));
        break;
      case "combine":
        E.combine(Number(g));
        break;
      case "mutation":
        E.openMutation(Number(g));
        break;
      case "mutate":
        E.mutate(g);
        break;
      case "cancelMutation":
        E.setPhase("shop");
        break;
      case "next":
        E.nextWave();
        break;
      case "risk":
        E.risk(g === "yes");
        break;
      case "endless":
        E.continueEndless();
        break;
      case "abandon":
        E.finish(!1);
        break;
      case "talents":
        ["defeat", "victory"].includes(this.screen)
          ? ((E.phase = "menu"), (this.hubFrom = "werkstatt"), (this.returnScreen = "hub"))
          : (this.returnScreen = "home"),
          (this.screen = "talents"),
          this.render();
        break;
      case "talent":
        (this.selectedTalent = g),
          this.root
            .querySelectorAll(".talent-node")
            .forEach((o) => o.classList.toggle("selected", o.dataset.id === g)),
          (document.getElementById("talent-detail").innerHTML = this.talentDetail()),
          this.root.querySelector("[data-action=learnTalent]:not(:disabled)")?.focus({ preventScroll: !0 });
        break;
      case "tbNode":
        this.tbSelect(g, "click");
        break;
      case "tbLearn":
        this.tbLearn(g);
        break;
      case "tbReset":
        this.tbReset();
        break;
      case "learnTalent": {
        const o = b.find((C) => C.id === g),
          i = E.save.data;
        (!o.parent || i.talents[o.parent] > 0) &&
          i.points >= o.cost &&
          (i.talents[g] || 0) < o.max &&
          ((i.points -= o.cost),
          (i.talents[g] = (i.talents[g] || 0) + 1),
          E.save.write(),
          E.audio.sound("level", 1.2),
          this.render(),
          this.toast(o.name + " leuchtet auf."));
        break;
      }
      case "resetTalents": {
        const o = E.save.data;
        for (const i of b) o.points += (o.talents[i.id] || 0) * i.cost;
        (o.talents = {}), E.save.write(), this.render(), this.toast("Alle Talentpunkte zurückerstattet.");
        break;
      }
      case "zoomIn":
      case "zoomOut": {
        const o = this.treeZoom;
        this.treeZoom = V(this.treeZoom * (A === "zoomIn" ? 1.2 : 1 / 1.2), 0.45, 1.4);
        const i = document.getElementById("tree-viewport"),
          I = i.clientWidth / 2,
          C = i.clientHeight / 2;
        (this.treeX = I - ((I - this.treeX) * this.treeZoom) / o),
          (this.treeY = C - ((C - this.treeY) * this.treeZoom) / o),
          this.applyTree();
        break;
      }
      case "centerTree":
        this.centerTree();
        break;
      case "collection":
        (this.screen = "collection"), (this.returnScreen = "home"), this.render();
        break;
      case "hubHelp":
        (this.screen = "collection"), (this.tab = "rules"), (this.returnScreen = "hub"), this.render();
        break;
      case "help":
        (this.screen = "collection"), (this.tab = "rules"), (this.returnScreen = "pause"), this.render();
        break;
      case "shopHelp":
        this.toast(
          "Gleiche Waffen kombinieren. Halten bewahrt Angebote. Mutation: Nietenspucker III +12 % Krit. / Mondspalter III +3 Blutung.",
        );
        break;
      case "tab":
        (this.tab = g), this.render();
        break;
      case "challenges":
      case "stats":
        (this.screen = A), this.render();
        break;
    }
  }
  toast(A) {
    clearTimeout(this.toastTimer), document.querySelector(".toast")?.remove();
    const g = document.createElement("div");
    (g.className = "toast"),
      (g.textContent = A),
      this.root.append(g),
      (this.toastTimer = window.setTimeout(() => g.remove(), 3600));
  }
  focusMove(A, g) {
    const B = Array.from(
      (this.root.querySelector('[aria-modal="true"]') || this.root).querySelectorAll(
        "button:not(:disabled),input:not(:disabled),summary",
      ),
    ).filter((a) => {
      const t = a.getBoundingClientRect();
      return t.width > 0 && t.height > 0;
    });
    if (!B.length) return;
    const E = document.activeElement;
    if (E?.tagName === "INPUT" && E.type === "range" && A) {
      const a = E;
      (a.value = String(
        V(Number(a.value) + A * Number(a.step || 5), Number(a.min || 0), Number(a.max || 100)),
      )),
        a.dispatchEvent(new Event("input", { bubbles: !0 }));
      return;
    }
    if (this.screen === "talents" && E?.classList.contains("talent-node")) {
      const a = b.find((s) => s.id === E.dataset.id);
      let t,
        h = 1 / 0;
      for (const s of b) {
        const U = s.x - a.x,
          M = s.y - a.y;
        if (U * A + M * g < 5) continue;
        const Y = Math.hypot(U, M) + Math.abs(U * g - M * A) * 2;
        Y < h && ((h = Y), (t = s));
      }
      if (t) {
        this.root.querySelector(`[data-action="talent"][data-id="${t.id}"]`).focus({ preventScroll: !0 }),
          (this.selectedTalent = t.id),
          this.root
            .querySelectorAll(".talent-node")
            .forEach((R) => R.classList.toggle("selected", R.dataset.id === t.id)),
          (document.getElementById("talent-detail").innerHTML = this.talentDetail());
        const U = document.getElementById("tree-viewport"),
          M = t.x + 600,
          r = t.y + 850,
          Y = M * this.treeZoom + this.treeX,
          c = r * this.treeZoom + this.treeY;
        Y < 60 && (this.treeX += 60 - Y),
          Y > U.clientWidth - 60 && (this.treeX -= Y - U.clientWidth + 60),
          c < 65 && (this.treeY += 65 - c),
          c > U.clientHeight - 110 && (this.treeY -= c - U.clientHeight + 110),
          this.applyTree();
        return;
      }
    }
    if (!B.includes(E)) {
      (this.screen === "home"
        ? this.root.querySelector("[data-action=continueRun],button.play")
        : this.screen === "characters"
          ? this.root.querySelector("[data-action=start]")
          : B[0]
      )?.focus();
      return;
    }
    const o = E.getBoundingClientRect(),
      i = o.x + o.width / 2,
      I = o.y + o.height / 2;
    let C,
      Q = 1 / 0;
    for (const a of B) {
      if (a === E) continue;
      const t = a.getBoundingClientRect(),
        h = t.x + t.width / 2 - i,
        s = t.y + t.height / 2 - I;
      if (h * A + s * g <= 4) continue;
      const M = Math.hypot(h, s) + Math.abs(h * g - s * A) * 2;
      M < Q && ((Q = M), (C = a));
    }
    C &&
      (C.focus({ preventScroll: !0 }),
      C.classList.contains("talent-node") || C.scrollIntoView({ block: "nearest" }),
      this.g.audio.sound("hover"));
  }
}
await Zo();
tE();
const eA = new JA(),
  T = new To(() => eA.data.settings),
  K = new mi(eA, T),
  OA = new FC(document.getElementById("game"), K),
  O = new wC(document.getElementById("ui"), K, OA),
  KC = OA;
O.partnerRenderer = OA;
const RA = new Set();
let jB = innerWidth / 2 + 100,
  uB = innerHeight / 2,
  xg = !1;
const lB = [new Set(), new Set()];
let UB = 0,
  TA = !1,
  rB = performance.now();
function v() {
  return K.phase === "combat" && O.screen === "combat";
}
function KA() {
  return K.phase === "hub" && O.screen === "hub" && !O.hubMenuOpen;
}
function ag() {
  return v() || KA();
}
window.addEventListener("keydown", (e) => {
  if (
    (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Tab"].includes(e.key) &&
      e.key !== "Tab" &&
      (e.key !== " " || ag()) &&
      e.preventDefault(),
    RA.add(e.code),
    !e.repeat)
  ) {
    if (
      (e.code === "Space" && v() && (e.preventDefault(), K.withActor(0, () => K.dash())),
      e.code === "KeyE" && v() && K.withActor(0, () => K.ability()),
      K.coop &&
        v() &&
        (["ShiftRight", "KeyO"].includes(e.code) && K.withActor(1, () => K.dash()),
        e.code === "KeyU" && K.withActor(1, () => K.ability())),
      K.phase === "hub" && O.screen === "hub")
    ) {
      e.code === "Escape"
        ? O.toggleHubMenu()
        : KA() && ["KeyE", "Enter", "Space", "NumpadEnter"].includes(e.code)
          ? (e.preventDefault(), K.hubInteract())
          : KA() &&
            ["KeyO", "KeyU", "ShiftRight"].includes(e.code) &&
            (K.hubPartner ? K.hubInteract() : K.hubJoin());
      return;
    }
    if (
      (e.code === "Escape" && (v() ? K.pause() : O.back()),
      e.code === "KeyQ" &&
        v() &&
        ((eA.data.settings.manual = !eA.data.settings.manual),
        eA.write(),
        O.render(),
        O.toast(eA.data.settings.manual ? "Manuelles Zielen aktiv" : "Automatisches Zielen aktiv")),
      e.code === "F3" && (e.preventDefault(), (K.debug = !K.debug)),
      e.code === "F4" &&
        (e.preventDefault(),
        v() && ((K.testRun = !0), K.spawnStress(), O.toast("Diagnose: 400 Gegner erzeugt"))),
      e.code === "F6" &&
        (e.preventDefault(),
        (K.god = !K.god),
        (K.testRun = !0),
        O.toast("Testschutz " + (K.god ? "an" : "aus"))),
      !v())
    ) {
      const A = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] };
      A[e.code] && O.focusMove(...A[e.code]),
        e.code === "Enter" && document.activeElement === document.body && O.focusMove(0, 1);
    }
  }
});
window.addEventListener("keyup", (e) => RA.delete(e.code));
window.addEventListener("blur", () => {
  (T.focused = !1), T.update(), RA.clear(), v() && K.pause();
});
window.addEventListener("focus", () => {
  (T.focused = !document.hidden), T.update();
});
document.addEventListener("visibilitychange", () => {
  (T.focused = !document.hidden && document.hasFocus()),
    T.update(),
    document.hidden && RA.clear(),
    document.hidden && v() && K.pause();
});
window.addEventListener("mousemove", (e) => {
  (jB = e.clientX), (uB = e.clientY), (xg = !0);
});
window.addEventListener("pointerdown", () => T.init());
function YB(e, A = 0) {
  const g = lB[A],
    B = Array.from(navigator.getGamepads?.() || []).filter(Boolean)[A];
  if (A === 1 && KA()) {
    const a = Array.from(navigator.getGamepads?.() || []).filter(Boolean)[1],
      t = lB[1];
    if (!a) return;
    const h = (U) => {
        const M = a.axes[U] || 0;
        return Math.abs(M) < 0.18 ? 0 : ((Math.abs(M) - 0.18) / 0.82) * Math.sign(M);
      },
      s = (U) => a.buttons[U]?.pressed && !t.has(U);
    if (((s(0) || s(9)) && !K.hubPartner ? K.hubJoin() : s(0) && K.hubInteract(), K.hubPartner)) {
      const U = h(0),
        M = h(1),
        r = Math.max(1, Math.hypot(U, M));
      (U || M) && ((K.hubPartner.input.x = U / r), (K.hubPartner.input.y = M / r));
    }
    a.buttons.forEach((U, M) => (U.pressed ? t.add(M) : t.delete(M)));
    return;
  }
  if (!v() && A !== (K.coop?.current ?? 0)) return;
  if (!B) {
    TA = !1;
    return;
  }
  const E = (a) => {
      const t = B.axes[a] || 0;
      return Math.abs(t) < 0.18 ? 0 : ((Math.abs(t) - 0.18) / 0.82) * Math.sign(t);
    },
    o = E(0),
    i = E(1),
    I = E(2),
    C = E(3);
  (o || i || I || C || B.buttons.some((a) => a.pressed)) && (TA = !0);
  const Q = (a) => B.buttons[a]?.pressed && !g.has(a);
  if (
    (Q(9) && (T.init(), (v() || O.screen === "pause") && K.pause()),
    K.phase === "hub" && O.screen === "hub" && ((Q(9) || Q(1)) && O.toggleHubMenu(), KA()))
  ) {
    if ((Q(0) && K.hubInteract(), TA && (o || i))) {
      const a = Math.max(1, Math.hypot(o, i));
      (K.input.x = o / a), (K.input.y = i / a);
    }
    B.buttons.forEach((a, t) => (a.pressed ? g.add(t) : g.delete(t)));
    return;
  }
  if (
    (Q(1) && !v() && O.back(),
    Q(3) &&
      v() &&
      ((eA.data.settings.manual = !eA.data.settings.manual),
      eA.write(),
      O.render(),
      O.toast(eA.data.settings.manual ? "Manuelles Zielen aktiv" : "Auto-Zielen aktiv")),
    v() && ((Q(0) || Q(5)) && K.dash(), Q(2) && K.ability()),
    v())
  ) {
    if (TA && (o || i)) {
      const a = Math.max(1, Math.hypot(o, i));
      (K.input.x = o / a), (K.input.y = i / a);
    }
    (I || C) && ((K.input.aimX = I), (K.input.aimY = C), (K.input.aimActive = !0), (xg = !1));
  } else {
    const a = B.buttons[15]?.pressed ? 1 : B.buttons[14]?.pressed ? -1 : Math.abs(o) > 0.5 ? Math.sign(o) : 0,
      t = B.buttons[13]?.pressed ? 1 : B.buttons[12]?.pressed ? -1 : Math.abs(i) > 0.5 ? Math.sign(i) : 0;
    if (
      ((a || t) &&
        e - UB > 190 &&
        (O.focusMove(Math.abs(a) > Math.abs(t) ? a : 0, Math.abs(t) >= Math.abs(a) ? t : 0), (UB = e)),
      Q(0))
    ) {
      T.init();
      const h = document.activeElement;
      h?.matches("button,input,summary") ? h.click() : O.focusMove(0, 1);
    }
  }
  B.buttons.forEach((a, t) => (a.pressed ? g.add(t) : g.delete(t)));
}
const mg = { active: !1, id: -1, ox: 0, oy: 0, x: 0, y: 0 },
  qA = [mg, { ...mg }],
  sg = document.createElement("div");
sg.className = "touch-controls";
sg.innerHTML =
  '<div class="virtual-joystick" id="virtual-joystick"><i></i></div><div class="virtual-joystick" id="virtual-joystick-2"><i></i></div><div class="orientation-hint">Für mehr Sicht: Handy quer halten ↻</div>';
document.body.append(sg);
const eg = Array.from(sg.querySelectorAll(".virtual-joystick")),
  OB = eg.map((e) => e.querySelector("i"));
matchMedia("(pointer:coarse)").matches &&
  ((eA.data.settings.manual = !1), document.body.classList.add("touch-device"));
const Jg = (e = 0) => {
  const A = qA[e];
  (A.active = !1),
    (A.x = A.y = 0),
    eg[e].classList.remove("active"),
    (OB[e].style.transform = "translate(0px,0px)");
};
window.addEventListener(
  "pointerdown",
  (e) => {
    if (e.pointerType !== "touch" || !ag() || e.target.closest("button,input")) return;
    let A = 0;
    if (K.coop || (KA() && K.hubPartner))
      A =
        innerWidth >= innerHeight
          ? e.clientX >= innerWidth / 2
            ? 1
            : 0
          : e.clientY >= innerHeight / 2
            ? 1
            : 0;
    else if (e.clientX > innerWidth * 0.58) return;
    const g = qA[A];
    g.active ||
      (e.preventDefault(),
      Object.assign(g, { active: !0, id: e.pointerId, ox: e.clientX, oy: e.clientY }),
      Object.assign(eg[A].style, { left: e.clientX - 54 + "px", top: e.clientY - 54 + "px" }),
      eg[A].classList.add("active"),
      e.target.setPointerCapture?.(e.pointerId));
  },
  { passive: !1 },
);
window.addEventListener(
  "pointermove",
  (e) => {
    const A = qA.findIndex((I) => I.active && I.id === e.pointerId);
    if (A < 0) return;
    if (!ag()) {
      Jg(A);
      return;
    }
    e.preventDefault();
    const g = qA[A],
      B = e.clientX - g.ox,
      E = e.clientY - g.oy,
      o = Math.hypot(B, E),
      i = 43;
    (g.x = o > 4 ? B / Math.max(i, o) : 0),
      (g.y = o > 4 ? E / Math.max(i, o) : 0),
      (OB[A].style.transform = `translate(${B / Math.max(1, o / i)}px,${E / Math.max(1, o / i)}px)`);
  },
  { passive: !1 },
);
for (const e of ["pointerup", "pointercancel"])
  window.addEventListener(e, (A) => {
    const g = qA.findIndex((B) => B.id === A.pointerId);
    g >= 0 && Jg(g);
  });
window.addEventListener("blur", () => qA.forEach((e, A) => Jg(A)));
document.addEventListener("contextmenu", (e) => e.preventDefault());
let jg;
if (
  location.protocol === "https:" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1"
) {
  const e = document.createElement("link");
  (e.rel = "manifest"), (e.href = "./manifest.webmanifest"), document.head.append(e);
  const A = document.createElement("link");
  (A.rel = "apple-touch-icon"),
    (A.href = "./icon-192.png"),
    document.head.append(A),
    (jg = oE({
      runActive: () => K.phase !== "menu" && K.phase !== "hub",
      toast: (g) => {
        K.onToast(g), document.querySelector(".toast")?.classList.add("update-toast");
      },
    }));
}
const nA = {
  frames: [],
  updates: [],
  renders: [],
  reset() {
    (this.frames = []), (this.updates = []), (this.renders = []);
  },
};
function HB(e) {
  const A = (e - rB) / 1e3;
  rB = e;
  const g = V(A, 0.001, 0.04),
    B = K.coop ? 2 : 1,
    E = !!K.coop || (K.phase === "hub" && !!K.hubPartner);
  for (let Q = 0; Q < B; Q++)
    K.withActor(Q, () => {
      const a = Q ? ["ArrowRight", "KeyL"] : E ? ["KeyD"] : ["KeyD", "ArrowRight"],
        t = Q ? ["ArrowLeft", "KeyJ"] : E ? ["KeyA"] : ["KeyA", "ArrowLeft"],
        h = Q ? ["ArrowDown", "KeyK"] : E ? ["KeyS"] : ["KeyS", "ArrowDown"],
        s = Q ? ["ArrowUp", "KeyI"] : E ? ["KeyW"] : ["KeyW", "ArrowUp"],
        U = Number(a.some((c) => RA.has(c))) - Number(t.some((c) => RA.has(c))),
        M = Number(h.some((c) => RA.has(c))) - Number(s.some((c) => RA.has(c))),
        r = Math.max(1, Math.hypot(U, M));
      (K.input.x = U / r), (K.input.y = M / r);
      const Y = qA[Q];
      Y.active && ag() && ((K.input.x = Y.x), (K.input.y = Y.y)), YB(e, Q);
    });
  if (K.phase === "hub" && K.hubPartner) {
    const Q = K.hubPartner.input,
      a = (M) => Number(M.some((r) => RA.has(r))),
      t = a(["ArrowRight", "KeyL"]) - a(["ArrowLeft", "KeyJ"]),
      h = a(["ArrowDown", "KeyK"]) - a(["ArrowUp", "KeyI"]),
      s = Math.max(1, Math.hypot(t, h));
    (Q.x = KA() ? t / s : 0), (Q.y = KA() ? h / s : 0);
    const U = qA[1];
    U.active && KA() && ((Q.x = U.x), (Q.y = U.y)), YB(e, 1);
  }
  if (xg) {
    const a = OA.worldMouse(jB, uB);
    K.withActor(0, () => {
      (K.input.aimX = a.x - K.player.x), (K.input.aimY = a.y - K.player.y), (K.input.aimActive = !0);
    });
  }
  jg?.tick(), (T.combat = v()), T.update();
  const o = K.phase !== "menu" && K.phase !== "hub" && K.phase !== "defeat" && K.phase !== "victory";
  T.setAmbience(o ? K.map : -1, K.phase === "combat" ? 1 : K.phase === "hub" ? 0.35 : 0.45),
    T.setMusic(o ? "combat" : "hub"),
    o && (K.wave >= 16 || K.bossSpawned) && T.loadBank("boss");
  const i = performance.now();
  K.update(g);
  const I = performance.now();
  OA.render(g), O.updateHUD();
  const C = performance.now();
  nA.frames.push(A * 1e3),
    nA.updates.push(I - i),
    nA.renders.push(C - I),
    nA.frames.length > 1200 && (nA.frames.shift(), nA.updates.shift(), nA.renders.shift()),
    requestAnimationFrame(HB);
}
requestAnimationFrame(HB);
Object.assign(window, {
  nachtschrott: {
    game: K,
    ui: O,
    renderer: OA,
    partnerRenderer: KC,
    save: eA,
    metrics: nA,
    touchState: mg,
    touchStates: qA,
    art: d,
    audio: T,
    AutoUpdater: KB,
    world: { covers: FA, resolveCover: HA, sweptCover: PA },
    hub: { HUB_STATIONS: yA },
    cut: Kg,
    get updater() {
      return jg;
    },
  },
});
// Ladebildschirm ausblenden, sobald das Spiel das erste Bild gezeichnet hat
requestAnimationFrame(() =>
  requestAnimationFrame(() => {
    const b = document.getElementById("boot");
    b && (b.classList.add("out"), setTimeout(() => b.remove(), 600));
  }),
);
// Game Feel: großer Moment als Einblendung über allem (überlebt UI-Neuaufbau)
function nsMoment(title, sub = "", reduced = !1) {
  if (typeof document > "u") return;
  document.querySelector(".ns-moment")?.remove();
  const el = document.createElement("div");
  (el.className = "ns-moment" + (reduced ? " reduced" : "")),
    (el.innerHTML = `<div class="ns-moment-band"><i></i><b></b><small></small><i></i></div>`),
    (el.querySelector("b").textContent = title),
    (el.querySelector("small").textContent = sub),
    document.body.append(el),
    setTimeout(() => el.remove(), 1700);
}
