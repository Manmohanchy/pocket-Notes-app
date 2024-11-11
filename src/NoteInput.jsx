import React, { useState } from 'react';
import './NoteInput.css';
import ButtonImage from './assets/Vector__3_-removebg-preview.png';

const NoteInput = ({ addNote, selectedGroup }) => {
  const [noteText, setNoteText] = useState('');

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      const formatDate = (date) => {
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const hours = (`0${date.getHours()}`).slice(-2);
        const minutes = (`0${date.getMinutes()}`).slice(-2);

        return `${day} ${month}. ${hours}:${minutes}`;
      };

      const formattedDate = formatDate(new Date());
      console.log(`Formatted Date in handleAddNote: ${formattedDate}`);

      addNote({
        text: noteText,
        group: selectedGroup?.name,
        date: formattedDate,
        updated: formattedDate,
      });
      setNoteText('');
    }
  };
 const handleKeyPress = (e) => { 
  if (e.key === 'Enter') {
     handleAddNote();
  }
};
  return (
    <div className="note-input">
      <input
        type="text"
        value={noteText}
        onChange={handleInputChange}
        placeholder="Type your note here..."
        onClick={(e) => e.stopPropagation()}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleAddNote}
        disabled={noteText.trim() === ''}
        style={{
          backgroundColor: noteText.trim() === '' ? 'gray' : 'blue',
          cursor: noteText.trim() === '' ? 'not-allowed' : 'pointer',
        }}
      >
        <img src={ButtonImage} alt="Arrow" />
      </button>
    </div>
  );
};

export default NoteInput;
