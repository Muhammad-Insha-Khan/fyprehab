import React from 'react';
import '../styles/AccountPopup.css';

const AccountPopup = ({ onClose, onEdit, onDelete }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h3>Account Options</h3>

        <button className="modal-option" onClick={onEdit}>
          Edit Profile
        </button>

        <button className="modal-option delete" onClick={onDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountPopup;
