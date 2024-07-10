import React from 'react';
import RemoveButton from './RemoveButton';
import ArchiveButton from './ArchiveButton';
import NotesTitle from './NotesTitle';
import NotesBody from './NotesBody';
import NotesCreated from './NotesCreated';

export default function NotesCard({ notes, onRemove, onArchive }) {
  return (
    <>
      <div>
        <h1>Card</h1>
        {notes.map((note) => (
          <div key={note.id}>
            <NotesTitle>{note.title}</NotesTitle>
            <NotesCreated>{note.created}</NotesCreated>
            <NotesBody>{note.body}</NotesBody>
            <div className="actions">
              <RemoveButton onClick={() => onRemove(note.id)} />
              <ArchiveButton onClick={() => onArchive(note.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
