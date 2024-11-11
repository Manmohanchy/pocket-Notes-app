import React from 'react';
import './Sidebar.css';

function Sidebar({ groups, setShowModal, setSelectedGroup, selectedGroup }) {
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

  return (
    <div className="sidebar">
      <h2>Pocket Notes</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index} className={group.name === (selectedGroup && selectedGroup.name) ? 'active' : ''} onClick={() => setSelectedGroup(group)}>
            <span style={{ backgroundColor: group.color }} className="group-icon">{getInitials(group.name)}</span>
            {group.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowModal(true)}>+ </button>
    </div>
  );
}

export default Sidebar;
