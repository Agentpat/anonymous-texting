import React, { useState } from 'react';

const Chat = ({ username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: username, text: message }]);
      setMessage('');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome, {username}!</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '5px', backgroundColor: '#f0f0f0' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleSendMessage} style={{ padding: '5px', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
