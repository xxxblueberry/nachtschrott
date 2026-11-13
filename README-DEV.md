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

Achtung: `split.py` überschreibt `src/*` mit dem Inhalt von `index.html`.
Nach einem frischen Klon also nur die Assets brauchen? Dann `split.py` laufen lassen
und danach `git checkout src/` ausführen.
