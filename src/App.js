import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const handleLogin = (data) => {
    setLoggedInStatus('LOGGED_IN');
    setUser(data.user);
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home handleLogin={handleLogin} loggedInStatus={loggedInStatus} />} />
        <Route path="/login" element={<Login loggedInStatus={loggedInStatus} />} />
        <Route path="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
      </Routes>
    </div>
  );
}

export default App;
