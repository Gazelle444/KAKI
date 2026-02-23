"use client";

import { useState } from "react";

const EMOJI_OPTIONS = ["📝", "😊", "😢", "💡", "⭐", "🎯", "🔥", "💪", "🎨", "🎵"];

export default function NoteInput({ onAddNote }) {
  const [text, setText] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📝");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text.trim() === "") {
      alert("Schreib etwas auf! 📝");
      return;
    }

    onAddNote(text, selectedEmoji);
    setText("");
    setSelectedEmoji("📝");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2 dark:text-white">
          Was möchtest du notieren? ✍️
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Schreib hier deine Gedanken, Aufgaben oder Ideen..."
          className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white resize-none"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2 dark:text-white">
          Emoji wählen (Stimmung/Kategorie) 😊
        </label>
        <div className="flex flex-wrap gap-2">
          {EMOJI_OPTIONS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => setSelectedEmoji(emoji)}
              className={`text-3xl p-2 rounded-lg transition ${
                selectedEmoji === emoji
                  ? "bg-purple-500 scale-110"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105"
      >
        💾 Notiz speichern
      </button>
    </form>
  );
}