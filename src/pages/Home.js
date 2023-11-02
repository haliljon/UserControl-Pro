import React from 'react';
import PropTypes from 'prop-types';
import Table from '../components/Table';
import Registration from '../components/auth/Registration';
import Login from '../components/auth/Login';

const Home = ({ handleLogin, username, loggedInStatus }) => {
  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
  };
  return (
    <div className="container">
      <h2>
        Hello!
        {username}
      </h2>
      <p>Welcome to the home page!</p>
      {loggedInStatus === 'LOGGED_IN' ? (<Table striped bordered hover />) : (
        <>
          <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
          <Login handleSuccessfulAuth={handleSuccessfulAuth} />
        </>
      )}
    </div>
  );
};

export default Home;

Home.propTypes = {
  username: PropTypes.string.isRequired,
  loggedInStatus: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
