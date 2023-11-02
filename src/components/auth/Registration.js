import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
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
    const { handleSuccessfulAuth } = this.props;
    /* eslint-disable */
        const {
            email, username, password, password_confirmation, position,
        } = this.state;

        axios.post('https://user-control-pro-6d69dacacf7c.herokuapp.com/registrations', {
            user: {
                email,
                username,
                password,
                password_confirmation,
                position,
            },
        }, { withCredentials: true })
            .then((response) => {
                if (response.data.status === 'created') {
                    handleSuccessfulAuth(response.data);
                    console.log('Created', response.data);
                }
            })
            .catch((error) => {
                console.log('registration error', error);
            });
        /* eslint-enable */
    e.preventDefault();
  }

  render() {
    /* eslint-disable */
        const {
            email, username, password, password_confirmation, position,
        } = this.state;
        /* eslint-enable */

    return (
      <div>
        <h1>Registration</h1>
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
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={position}
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
          {/* eslint-disable */}
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                        required
                    />
                    {/* eslint-enable */}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
