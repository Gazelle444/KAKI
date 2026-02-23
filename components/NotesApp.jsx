'use client';

import { useState, useEffect } from "react";
import { getAllNotes, addNote, deleteNote, updateNote } from "@/lib/storage";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = getAllNotes();
    setNotes(savedNotes);
    
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    setDarkMode(darkModeEnabled);
    
    setLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleAddNote = (text, emoji) => {
    const newNote = addNote(text, emoji);
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleUpdateNote = (id, text, emoji) => {
    updateNote(id, text, emoji);
    setNotes(notes.map(note => 
      note.id === id 
        ? { ...note, text, emoji, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  if (!loaded) {
    return <div className="text-center py-10">Lädt...</div>;
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"> 
        <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 shadow-lg">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">📝 KAKI Notes</h1>
              <p className="text-purple-100 mt-1">Deine Notizen-App für Teens • Funktioniert offline!</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <NoteInput onAddNote={handleAddNote} />

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Deine Notizen ({notes.length})
            </h2>
            {notes.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">Keine Notizen noch! ✨</p>
                <p className="text-sm mt-2">Erstelle deine erste Notiz oben 👆</p>
              </div>
            ) : (
              <NoteList 
                notes={notes}
                onDeleteNote={handleDeleteNote}
                onUpdateNote={handleUpdateNote}
              />
            )}
          </div>
        </main>

        <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 mt-12">
          <p>✨ Gebaut mit Next.js & React | Deine Daten bleiben bei dir! 🔒</p>
        </footer>
      </div>
    </div>
  );
}