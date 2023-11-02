import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: '',
        };
        /* eslint-enable */
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('handle change', e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    const { handleSuccessfulAuth } = this.props;
    axios.post('https://user-control-pro-6d69dacacf7c.herokuapp.com/sessions', {
      user: {
        email,
        password,
      },
    }, { withCredentials: true })
      .then((response) => {
        console.log('Logged In', response);
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
    e.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
