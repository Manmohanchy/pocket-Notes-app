import React, { useState } from 'react';
import './Modal.css';

function Modal({ addGroup, setShowModal }) {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('#000000');
  const colorOptions = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFD433', '#33FFF4'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      addGroup({ name: groupName, color: groupColor });
      setGroupName('');
      setGroupColor('#000000');
      setShowModal(false);
    }
  };

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal') {
      setShowModal(false);
    }
  };

  return (
    <div className="modal" onClick={handleCloseModal}>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <h2>Create New Group</h2>
       Group Name  <input
           type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        /><br />
        <div className="color-options">
          <p>Choose Color</p>
          {colorOptions.map(color => (
            <div
              key={color}
              className={`color-circle ${color === groupColor ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setGroupColor(color)}
            ></div>
          ))}
        </div>
        <div className="button-group">
           <button type="submit" disabled={!groupName.trim()}> Create 
            </button> 
            </div>
      </form>
    </div>
  );
}

export default Modal;
