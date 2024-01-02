import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== '') {
      onLogin(username);
      navigate('/chat');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px', cursor: 'pointer' }}>
        Login
      </button>
    </div>
  );
};

export default Login;
