import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const handleLogoutClick = () => {
    const { handleLogout } = props;
    axios.delete('https://user-control-pro-6d69dacacf7c.herokuapp.com/logout', { withCredentials: true })
      .then((response) => {
        handleLogout();
        console.log('logout response', response);
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  };
  return (

    <div className="container">
      <p>
        Hello! |
        <button type="button" onClick={() => handleLogoutClick()}>Logout</button>
      </p>
    </div>
  );
};
export default Navbar;

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
