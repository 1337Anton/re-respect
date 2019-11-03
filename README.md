# re:respect
Ein Firefox Add-On für den einfachen Gebrauch von "respect!",
einem Demokratiezentrum-BW Ticketsystems.

Weitere Informationen können [diesem Erklärvideo](https://www.youtube.com/watch?v=5tP-hdJgUxQ) entnommen werden.  
Noch mehr Infos gibt's [hier](https://demokratiezentrum-bw.de/).  

re:respect Alpha bei [Firefox Add-ons](https://addons.mozilla.org/de/firefox/addon/re-respect/).  
Projektpräsentation auf [media.ccc.de](https://media.ccc.de/v/jh19-hd-1013-re_respect#l=deu&t=0).  

**Why do you use the German language for description?**  
'respekt!' is an german service provided by the democracy centrum of Baden-Württemberg.  
With the fact, that the registration office only allows reports from germany,  
is there no need for an internationalization.  
So we decided to document the Extension in german.

## Ziele
Das primäre Ziel dieses Projekts ist eine allgemeine Verbesserung der Umgangsweise im Internet/World Wide Web.

## Umsetzung
In der aktuellen Version (2.3-Alpha) wurde erfolgreich die Implementierung für den Kurznachrichtendienst "Twitter" vorgenommen und auf ein funktionales Level gebracht. Dabei wird beim Öffnen eines Beitrags ein Button hinzugefügt, welcher die Funktion der Anzeigenerstattung bei "respekt!" mit einer einfachen One-Click-Action liefert.

Mit dem Drücken des Buttons werden zuerzeit fast alle benötigten Informationen selektiert und an "demokratiezentrum-bw.de" weitergeleitet. Dort angekommen werden diese Informationen in das gegebene Formular gefüllt.


# TODO
1. Code Cleanup => wir mussten für die erste Instanz ein funktionales Endprodukt abliefern, wodurch u.a. viel Trashcode entstand. Dieser darf nun aufgeräumt werden.
2. html2canvas => Screenshots werden für die Verfolgung gebraucht, können aktuell jedoch noch nicht automatisch erstellt und versendet werden. 
3. Universalisierung => einen einfachen/universellen Weg finden, um auf jeder Website im WWW die aktuelle Seite ganz zu screenshoten, um diese anschließend mitsamt URL ans Demokratiezentrum weiterzuleiten.
4. Geotagging der IP zum Identifizieren des Standortes || ein Feld zur manuellen Eingabe.

##### Bitte neue Branches || Forks für größere Änderungen anlegen.

## Verzeichnisstruktur

re-respect  
├ background_page/ => führen Langzeitprozesse aus  
│  
├ browser_action/ =>   
│  └ popup/ => Dateien für G-/UI  
│  
├ content_scripts/ => Scripts, welche in Webseiten eingefügt werden.  
│  
├ icons/ => für die Extension und jegliche Buttons können festgelegt werden.  
│  
├ options_page/  
│  
├ page_action/  
│  └ popup/ => Dateien für G-/UI  
│  
└ web_accessible_ressources/  

[Quelle](https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)

## Links
[Development Practices](https://extensionworkshop.com/documentation/publish/add-on-policies#development-practices)
[Security Best Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/)
[Sicherheitsleitfaden bei Erweiterungen](https://developer.mozilla.org/de/docs/Mozilla/Add-ons/Security_best_practices_in_extensions)  
[Benutzung von JS Code Modulen](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using)

Für Firefox 4+:
[Chrome Registrierung](https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration)  
  
// Zum Kopieren:  
├  
└  
─  
┬  
│  
