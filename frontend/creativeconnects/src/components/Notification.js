import React, { useState } from 'react';
import '../styles/Notification.css';
import Button from '../components/Botton'

const Notification = ({ Icon, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notiMessage, setNotiMessage] = useState("No Notification to show");

  const toggleButton = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false); // Function to close the dropdown

  return (
    <div className="notification">
      <div className="clickabletext" onClick={toggleButton}>
        {Icon && <Icon className="icon" />}
        {text}
      </div>
      {isOpen && (
        <div className="notification-dropdown">
          <h1>NOTIFICATION</h1>
          <div className="Divider"></div>
          <p>{notiMessage}</p>
          <div className='button'>
          <Button type="button" onClick={toggleButton} >
            Cancel
            </Button>            
            </div>
          </div>
      )}
    </div>
  );
};

export default Notification;
