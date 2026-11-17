# Nachtschrott – Entwicklung

Der ursprüngliche Quellcode existiert nicht mehr; `index.html` ist ein Vite-Build.
Damit man trotzdem sauber daran arbeiten kann, gibt es lesbare Quellen unter `src/`:

- `src/main.js` – Spiel-Code (formatiert)
- `src/style.css` – Styles (formatiert)
- `src/head.html`, `src/mid.html`, `src/tail.html` – HTML-Rahmen

Eingebettete Bilder/Schriften stehen als Platzhalter `__ASSET_n__` in den Dateien.

## Arbeitsablauf

```bash
python tools/split.py   # nur einmalig / nach frischem Klon: holt Assets aus index.html nach src/assets/
# ... src/main.js oder src/style.css bearbeiten ...
python tools/build.py   # baut index.html neu
python -m http.server 5178   # lokal testen
```

Nach einem frischen Klon fehlt `src/assets/`. Am einfachsten wiederherstellen mit:

```bash
python tools/recover_assets.py   # liest Assets aus index.html, passend zu den Platzhaltern in src/
```

Das klappt nur, solange `index.html` aus dem aktuellen `src/` gebaut wurde (also vor eigenen Änderungen).

Achtung: `split.py` überschreibt `src/*` mit dem Inhalt von `index.html`.
Nach einem frischen Klon also nur die Assets brauchen? Dann `split.py` laufen lassen
und danach `git checkout src/` ausführen.


## Nachtschicht-Update

- Gegnerlimit: `enemyLimit`; Spawn-Rhythmus: `spawnPressure` (6 s Druck / 3 s reduzierte Spawns).
- Eliten: Wellen 5, 10, 15. Abschlussboss: 20; Endlos danach alle 10 Wellen.
- Schrottsturm: Wellen 4, 8, 12, 16 (im Endlosmodus alle vier Nicht-Boss-Wellen).
  Drei Sekunden Warnung, zehn Sekunden Schrumpfen, vier Sekunden Halten,
  zwei Sekunden Abzug. Schaden nur an Spielern, einmal pro Sekunde außerhalb.
- Arenen behalten IDs und Spielstände; der erste Hof heißt nun Schrotthof.
- Desktop-Menühintergrund: `assets/menu-workshop.webp` muss mit veröffentlicht werden.

### Browser-Funktionstest

Benötigt Node.js, das Paket `playwright` und Chromium. Zunächst lokal auf Port
5178 starten, dann `node tools/tests/nightshift.cjs` ausführen. Eine andere URL
kann als erstes Argument übergeben werden; `CHROMIUM_PATH` überschreibt den
Browserpfad. Optional speichert `SCREENSHOT_PATH` eine Sturm-Vorschau.
Der Test verwendet einen isolierten Browser-Spielstand und prüft Gegnerlimits,
Sturm/Schaden/Pause, Koop, Bossabschluss und Wiederaufnahme.

### Performance-Prüfung

`window.nachtschrott.metrics` enthält Frame-, Update- und Render-Zeiten.
Mit derselben Bildschirmgröße und denselben Gegnern vergleichen. Headless-
Messungen sind keine FPS-Garantie für einen Spieler-PC. Der Start erzeugt keine
stumme Synthesemusik mehr; Musik-Fallback wird nur bei Ladefehlern in kleinen
Abschnitten aufgebaut. Audio-Bänke laden mit zwei Decodier-Aufgaben gleichzeitig.
