# Nachtschrott – Entwicklung

Der ursprüngliche Quellcode existiert nicht mehr; `index.html` ist ein Vite-Build.
Damit man trotzdem sauber daran arbeiten kann, gibt es lesbare Quellen unter `src/`:

- `src/main.js` – Spiel-Code (formatiert)
- `src/vehicle.js` – opt-in Fahrzeugmodus, vor main.js eingebettet
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

- Gegnerlimit: `enemyLimit`; Spawn-Rhythmus: `spawnPressure` (7 s Druck / 2 s reduzierte Spawns).
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

### Bossmuster und Schwierigkeitskorrektur

Vier Bosse haben eigene angekündigte Spezialangriffe: Schrottkreuz mit freien
Quadranten, Ofenringe mit einer Lücke, drei verzögerte Mondjagd-Einschläge und
ein langsam rotierendes Strahlenkreuz. Phasenwechsel entfernen noch ausstehende
Bodenwarnungen. Während der Erschöpfung erhalten Bosse 115 % Schaden, sonst
75 %. Koop erhöht ihre Lebenspunkte zusätzlich um den Faktor 1,65.

`node tools/tests/bosses.cjs` prüft Muster, Warnzeiten, sichere Bereiche,
Phasenwechsel, Schadensfenster und Pause. Die bestehenden Nightshift-Tests
prüfen weiterhin Gegnerlimits, Sturm und Rundenabschluss.

Ein fester Vergleichsbuild mit sechs Stufe-IV-Waffen benötigte lokal ungefähr
32–55 statt 16–22 Sekunden pro Boss. Das ist ein automatisierter DPS-Vergleich
mit Unverwundbarkeit, keine Aussage über die Schwierigkeit sämtlicher Builds.
Das Normal-Balancing erhöht Gegner-LP und Angriffsdruck; die Gegnerlimits bleiben
bestehen. Weitere Feinabstimmung sollte anhand echter Läufe erfolgen.

### Phasen, Level und Lebensraub

Boss-LP skalieren beim Spawn mit sqrt(Spielerlevel / 20), begrenzt auf
0,85–2,5. Der Schadensfaktor steigt langsamer (sqrt dieses Faktors, 0,95–1,35).
Im Koop zählt das höchste Spielerlevel zusätzlich zum bestehenden Koop-Faktor.
Während des Kampfes wird nicht nachskaliert.

Schaden stoppt bei 67 % und 34 % Boss-LP, bis die aktuelle Phase mindestens
sechs Sekunden gedauert und ihren Spezialangriff beendet hat. Phase 3 schützt
entsprechend den letzten LP. Jede Phase beginnt mit dem eigenen Spezialangriff;
Phasenschutz wird im HUD benannt. Kein überschüssiger Schaden wird gespeichert.

Lebensraub zählt tatsächlichen Schaden ohne Overkill und hat je Spieler einen
waffenübergreifenden Puffer von 1 LP. Er regeneriert mit 2 % der maximalen LP
pro Simulationssekunde, höchstens 3 LP/Sek. Statusschaden heilt weiterhin nicht.
Regeneration und Heilgegenstände bleiben eigenständige Quellen. Die Boss-Tests
prüfen nun auch extremen Burst durch alle drei Phasen, begrenzte Levelskalierung
und 1.000 gleichzeitige sowie 6.000 anhaltende Lebensraubtreffer.

### Zwei spielbare Versionen

`?mode=classic` (auch die URL ohne Parameter) bleibt der klassische Modus.
`?mode=vehicle` startet Motor Nacht mit Bodo am Steuer und einer Montagepistole.
Der Umschalter steht im Hauptmenü, Pause und Ergebnis. Ein Wechsel lädt eine
neue Seite; Fortsetzen verwendet wie bisher den letzten Wellenbeginn.

Klassisch behält `nachtschrott-v1` und `nachtschrott-dev-v1`. Der Fahrzeugmodus
nutzt `nachtschrott-vehicle-v1` und `nachtschrott-vehicle-dev-v1`, jeweils mit
eigener Sicherung. Es gibt keine automatische Migration zwischen den Modi.

Fahrzeuge: 100 Start-LP als Ausgleich für größere Treffer-/Kollisionsfläche,
kurze exponentielle Beschleunigung und Bremsung, drehbare Karosserie, sechs feste
Waffenhalterungen, Boost in Bewegungs-/Blickrichtung. Überlastung: drei Sekunden
+20 % Fahrtgeschwindigkeit und +35 % Waffen-Abklingtempo, zwölf Sekunden Cooldown.
Turbolader verlängert die Dauer bis maximal fünf Sekunden und verkürzt den
Cooldown bis minimal sechs Sekunden. Fahrzeug-Shops und Kapseln bieten acht
passende Anbauwaffen; reine Geschütz-Technikgegenstände werden ausgefiltert.
Bestehende Wellen, Shop, Gegner und Bossmechaniken werden weiterverwendet.
Weitere Waffen werden gekauft; Kopien verbessern die vorhandene Waffe.
Rüstungswerte ab 3 ergänzen sichtbare Seitenplatten.

Die neue Fahrzeugtextur `assets/vehicle-bodo.png` wurde für dieses Spiel anhand
der vorhandenen Bodo-Referenz generiert. Federung, Reifen, Auspuff, Spuren,
Scheinwerfer und Halterungen werden animiert. Spuren sind auf 100 begrenzt;
reduzierte Bewegung deaktiviert Federbewegung, Rauch und Spuren. Der Motorsound
ist eigene Web-Audio-Synthese mit zwei dauerhaft wiederverwendeten Oszillatoren;
er läuft durch den vorhandenen Effektbus und verstummt in Pause/Hintergrund.
Schuss-, Treffer- und Werkstattsounds nutzen die bestehenden lizenzierten Assets.

Build: `python tools/build.py`. Tests: `node tools/tests/vehicles.cjs` plus
`bosses.cjs` und `nightshift.cjs`, auch mit URL `http://localhost:5178/?mode=vehicle`.
Die Fahrzeugtests prüfen reale Navigation, getrennte Spielstände, Fortsetzen,
Eingaben, Bewegung, Boost, Montageplätze, Shop-Upgrades und Touch.
