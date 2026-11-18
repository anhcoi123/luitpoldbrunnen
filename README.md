# Bürgerinitiative Luitpoldbrunnen

Eine statische, mobilfähige Website ohne Build-Schritt und ohne eigenen Server. Sie kann lokal geöffnet und kostenlos über GitHub Pages veröffentlicht werden.

## Lokal ansehen

`index.html` direkt im Browser öffnen. Es werden keine Pakete installiert.

## Vor einer Veröffentlichung

- Die Kontaktadresse und Bankdaten stammen aus dem Spendenflyer. Das Kontaktformular öffnet das lokale E-Mail-Programm und sendet nicht direkt vom Browser aus. Für eine serverseitige Zustellung ist ein Formular-Dienst oder eine Function nötig.
- Die Originalbilder, Logos, Zeichnungen und Flyer liegen in `assets/originale/`. Die Fotos aus Google Drive wurden direkt heruntergeladen, nicht als Screenshots erfasst. Die vier WebP-Dateien in `assets/web/` sind hochauflösende Darstellungsvarianten; die unveränderten Originale bleiben verlinkt.
- `assets/originale/Bild1.jpg` ist das nachgereichte, korrekte Logo mit dem Schriftzug „Bürgerinitiative“ und wird auf der Website verwendet. `Logo_Initiative_Zuschnitt-1.jpg` aus der ersten Mail ist überholt.
- Vor Veröffentlichung die rechtlichen Platzhalter in `impressum.html` und `datenschutz.html` vervollständigen und rechtlich prüfen lassen. Der Vereins-Sitz und die vertretungsberechtigte Person sind in den übermittelten Unterlagen nicht angegeben.
- Die Flyer schreiben die 3D-Visualisierungen Andre Gansel zu. Bitte die Nutzungsrechte für Fotos, Logo und Visualisierungen vor der Veröffentlichung bestätigen.

## Kontaktformular

Die Datei `functions/api/kontakt.js` ist eine Cloudflare Pages Function. Für direkten Versand:

1. Das Repository mit Cloudflare Pages verbinden. Der Projekt-Root ist das Repository-Verzeichnis; es gibt keinen Build-Schritt.
2. In den Cloudflare-Pages-Variablen `CONTACT_EMAIL` auf `suedpfalz@stadtbild-deutschland.org` setzen und `MAIL_FROM` auf eine Absenderadresse einer eigenen, bei Resend verifizierten Domain setzen.
3. `RESEND_API_KEY` im Cloudflare-Dashboard als Secret hinterlegen, nicht in einer Datei oder im Repository.
4. Die Datenschutzhinweise mit den aktuellen Bedingungen und Aufbewahrungsfristen von Cloudflare und Resend vervollständigen.

GitHub Pages führt die Function nicht aus. Dort bleibt der Formular-Fallback auf einen E-Mail-Entwurf im lokalen Mailprogramm. Der Onlineversand funktioniert erst nach der Cloudflare-/Resend-Konfiguration. Beide Dienste haben kostenlose Nutzungskontingente; aktuelle Limits bitte vor Aktivierung prüfen.
- Die Google Fonts werden von Google geladen. Für eine datensparsame Veröffentlichung die Schriftdateien lokal einbinden oder auf Systemschriften umstellen.

## Kostenlos mit GitHub Pages veröffentlichen

1. Ein GitHub-Repository anlegen und diese Projektdateien hochladen.
2. In den Repository-Einstellungen unter **Pages** als Quelle den Branch `main` und den Ordner `/ (root)` auswählen.
3. Die angezeigte `github.io`-Adresse aufrufen. Ein eigener Server und eine Datenbank sind nicht erforderlich.

GitHub Pages stellt statische Dateien kostenlos bereit. Eine eigene Domain ist optional und in der Regel kostenpflichtig. Updates an Texten und Terminen erfolgen direkt in `index.html`, danach die geänderte Datei wieder hochladen.
