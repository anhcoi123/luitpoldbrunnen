# Bürgerinitiative Luitpoldbrunnen

Eine statische, mobilfähige Website ohne Build-Schritt und ohne eigenen Server. Sie kann lokal geöffnet und kostenlos über GitHub Pages veröffentlicht werden.

## Lokal ansehen

`index.html` direkt im Browser öffnen. Es werden keine Pakete installiert.

## Vor einer Veröffentlichung

- In `script.js` die leere Variable `contactEmail` durch die offizielle Kontaktadresse ersetzen. Das Formular öffnet dann das lokale E-Mail-Programm der Besucherin oder des Besuchers; es sendet keine Daten an einen Webserver.
- Texte, Ort und Termine in `index.html` mit bestätigten Informationen ergänzen. Die aktuellen Beispielmeldungen sind klar als Platzhalter formuliert.
- `impressum.html` und `datenschutz.html` mit den Angaben der Initiative vervollständigen. Beide Dateien sind Vorlagen mit sichtbaren Platzhaltern und müssen vor Veröffentlichung rechtlich geprüft werden.
- Prüfen, ob das Bild des Luitpoldbrunnens in Edenkoben zum tatsächlichen Projekt gehört. Das Bild ist gemeinfrei und stammt von Immanuel Giel: [Dateiseite bei Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Prinzregent_Lutipold_Edenkoben_1.jpg). Wenn es nicht der richtige Brunnen ist, durch ein eigenes Foto mit geklärten Nutzungsrechten ersetzen und Bildnachweis aktualisieren.
- Die Google Fonts werden von Google geladen. Für eine datensparsame Veröffentlichung die Schriftdateien lokal einbinden oder auf Systemschriften umstellen.

## Kostenlos mit GitHub Pages veröffentlichen

1. Ein GitHub-Repository anlegen und diese Projektdateien hochladen.
2. In den Repository-Einstellungen unter **Pages** als Quelle den Branch `main` und den Ordner `/ (root)` auswählen.
3. Die angezeigte `github.io`-Adresse aufrufen. Ein eigener Server und eine Datenbank sind nicht erforderlich.

GitHub Pages stellt statische Dateien kostenlos bereit. Eine eigene Domain ist optional und in der Regel kostenpflichtig. Updates an Texten und Terminen erfolgen direkt in `index.html`, danach die geänderte Datei wieder hochladen.
