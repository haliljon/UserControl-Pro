import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const handleLogin = (data) => {
    setLoggedInStatus('LOGGED_IN');
    setUser(data.user);
  }
  const handleLogout = () => {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUser({});
  }

  const checkLoginStatus = () => {
    axios.get('https://user-control-pro-6d69dacacf7c.herokuapp.com/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          setLoggedInStatus('LOGGED_IN');
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
          setLoggedInStatus('NOT_LOGGED_IN');
          setUser({});
        }
      })
      .catch(error => { console.log('check login error', error); });
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home username={user.username} handleLogin={handleLogin} loggedInStatus={loggedInStatus} />} />
      </Routes>
    </div>
  );
}

export default App;