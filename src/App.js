import React, { useState } from 'react';
import Login from './pages/Login';
import MainScreen from './pages/MainScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  }

  return (
    <Router>
      <h1>CodeLeap</h1>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Login
              username={username}
              setUsername={setUsername}
              handleChange={handleChange} />
          }
        />
        <Route
          exact
          path='/codeleap-network'
          element={
            <MainScreen
              username={username}
              handleChange={handleChange} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
