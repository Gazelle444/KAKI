"use client";

import { useState } from "react";

const EMOJI_OPTIONS = ["📝", "😊", "😢", "💡", "⭐", "🎯", "🔥", "💪", "🎨", "🎵"];

export default function NoteCard({
  note,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  onDelete,
}) {
  const [editText, setEditText] = useState(note.text);
  const [editEmoji, setEditEmoji] = useState(note.emoji);

  const handleSave = () => {
    if (editText.trim() === "") {
      alert("Notiz kann nicht leer sein!");
      return;
    }
    onSave(editText, editEmoji);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Gestern";
    } else {
      return date.toLocaleDateString("de-DE");
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border-2 border-purple-500">
        <div className="mb-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {EMOJI_OPTIONS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setEditEmoji(emoji)}
                className={`text-2xl p-2 rounded transition ${
                  editEmoji === emoji
                    ? "bg-purple-500 scale-110"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white resize-none"
            rows="3"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded transition"
          >
            ✓ Speichern
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 rounded transition"
          >
            ✕ Abbrechen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition border-l-4 border-purple-500 dark:border-pink-500">
      <div className="flex justify-between items-start mb-2">
        <span className="text-3xl">{note.emoji}</span>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="text-blue-500 hover:text-blue-700 font-bold text-lg"
          >
            ✏️
          </button>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 font-bold text-lg"
          >
            🗑️
          </button>
        </div>
      </div>

      <p className="text-gray-800 dark:text-gray-100 mb-3 line-clamp-4">
        {note.text}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        {formatDate(note.createdAt)}
      </p>
    </div>
  );
}