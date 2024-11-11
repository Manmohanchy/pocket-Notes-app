import React from 'react';
import './NoteList.css';

function NoteList({ notes }) {
  console.log('Rendering notes:', notes);
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          
          <p>{note.text}</p>
          
          <small> {note.updated}</small>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
