import React, { useState } from 'react';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import Modal from './Modal';
import useLocalStorage from './hooks/useLocalStorage';
import VectorImage from './assets/Vector (4).png';
import HomeImage from './assets/image-removebg-preview 1.png';
import './App.css';

function App() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [groups, setGroups] = useLocalStorage('groups', []);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, { ...note, group: selectedGroup.name, date: note.date, updated: note.updated }]);
  };

  const addGroup = (group) => {
    setGroups([...groups, group]);
    setSelectedGroup(group);
  };

  const formatGroupName = (name) => {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getInitials = (name) => {
    const words = name.split(' ');
    if (words.length === 2) {
      return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
    } else if (words.length > 2) {
      return words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
    } else {
      return words[0].charAt(0).toUpperCase();
    }
  };

  const filteredNotes = notes.filter(note => note.group === (selectedGroup && selectedGroup.name));

  return (
    <div className="app">
      <Sidebar groups={groups} setShowModal={setShowModal} setSelectedGroup={setSelectedGroup} selectedGroup={selectedGroup} />
      <div className="main-content">
        {selectedGroup ? (
          <>
            <div className="group-container">
              <div className="group-icon" style={{ backgroundColor: selectedGroup.color }}>
                {getInitials(selectedGroup.name)}
              </div>
              <h2>{formatGroupName(selectedGroup.name)}</h2>
            </div>

            <NoteList notes={filteredNotes} />
            <NoteInput addNote={addNote} selectedGroup={selectedGroup} />
          </>
        ) : (
          <div className="placeholder">
            <img src={HomeImage} alt="Welcome Illustration" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <h4><img src={VectorImage} className="lockimage"alt="" />end-to-end encrypted</h4>
          </div>
        )}
      </div>
      {showModal && <Modal addGroup={addGroup} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
