import React, { useState } from 'react';
import '../styles/ChatMessage.css';

const ChatMessage = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([
    { sender: 'User 1', content: 'Hello! How can I help you?' },
    { sender: 'You', content: 'Hi, I need some assistance.' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const selectUser = (user) => {
    setActiveUser(user);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', content: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-app">
      {/* Chat Button */}
      <div className={`chat-button ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        <span className="chat-icon">💬</span>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <span>Chat with Us</span>
            <button className="close-btn" onClick={toggleChat}>X</button>
          </div>
          <div className="chat-content">
            {/* User List Column */}
            <div className="user-list">
              <div className="user-item" onClick={() => selectUser('User 1')}>
                User 1
              </div>
              <div className="user-item" onClick={() => selectUser('User 2')}>
                User 2
              </div>
              <div className="user-item" onClick={() => selectUser('User 3')}>
                User 3
              </div>
            </div>
            
            {/* Chat Messages Column */}
            <div className="chat-box">
              {activeUser ? (
                <div className="messages-container">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
                    >
                      <div className="message-sender">{msg.sender}:</div>
                      <div className="message-content">{msg.content}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>Please select a user to chat with.</div>
              )}
            </div>
          </div>

          {/* Chat Input Box at the bottom */}
          {activeUser && (
            <div className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default ChatMessage;
