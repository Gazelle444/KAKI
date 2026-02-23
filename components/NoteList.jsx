"use client";

import { useState } from "react";
import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDeleteNote, onUpdateNote }) {
  const [editingId, setEditingId] = useState(null);

  const sortedNotes = [...notes].sort((a, b) => 
    new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          isEditing={editingId === note.id}
          onEdit={() => setEditingId(note.id)}
          onCancel={() => setEditingId(null)}
          onSave={(text, emoji) => {
            onUpdateNote(note.id, text, emoji);
            setEditingId(null);
          }}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
}