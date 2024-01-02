import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import Login from './Login';
import Chat from './Chat';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={loggedInUser ? <Navigate to="/chat" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/chat"
            element={loggedInUser ? <Chat username={loggedInUser} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
