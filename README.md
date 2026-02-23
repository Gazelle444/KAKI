# 📝 KAKI Notes - Die coole Notizen-App für Teens

Eine moderne, offline-first Notizen-App, die in deinem Browser läuft und OHNE Internet funktioniert! 🚀

## ✨ Features

✅ **Offline-First** - Funktioniert komplett ohne Internet  
✅ **Notizen erstellen, bearbeiten, löschen** - Full CRUD Operations  
✅ **Emojis für Stimmung/Kategorien** - 10 coole Emojis zur Auswahl  
✅ **Dark Mode** - Dunkel & gemütlich 🌙  
✅ **Responsive Design** - Perfekt auf Handy & Computer  
✅ **Lokale Speicherung** - Deine Daten bleiben bei dir!  
✅ **Cloud-Sync Ready** - Vorbereitet für zukünftige Cloud-Integration  

## 🚀 Installation & Start

### Voraussetzungen
- Node.js 18+ installiert
- npm oder yarn

### Schritt-für-Schritt

1. **Repository klonen**
   ```bash
   git clone https://github.com/Gazelle444/KAKI.git
   cd KAKI
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Entwicklungs-Server starten**
   ```bash
   npm run dev
   ```

4. **Im Browser öffnen**
   ```
   http://localhost:3000
   ```

## 📁 Projekt-Struktur

```
KAKI/
├── components/          # React Komponenten
│   ├── NotesApp.jsx    # Haupt-Komponente
│   ├── NoteInput.jsx   # Input-Formular
│   ├── NoteList.jsx    # Notizen-Liste
│   └── NoteCard.jsx    # Einzelne Notizen-Karte
├── lib/
│   └── storage.js      # LocalStorage Funktionen
├── pages/
│   ├── _app.jsx        # App-Layout
│   └── index.jsx       # Home-Page
├── globals.css         # Globale Styles
├── package.json        # Dependencies
└── README.md           # Diese Datei
```

## 🔒 Datenschutz

✨ **Deine Daten gehören dir!**
- Alle Notizen werden NUR lokal im Browser gespeichert
- Nichts wird zu unserem Server gesendet
- Du kannst die App offline nutzen

## 🎨 Technologien

- **Next.js** - Framework für React Apps
- **React** - UI Library
- **Tailwind CSS** - Styling
- **LocalStorage** - Offline Datenspeicherung

## 📞 Kontakt & Support

Questions? Issues? Feature-Wünsche?
→ Erstelle ein GitHub Issue!