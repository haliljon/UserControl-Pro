import React from "react";
import axios from "axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('handle change', e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        axios.post("https://user-control-pro-6d69dacacf7c.herokuapp.com/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }, { withCredentials: true })
            .then(response => {
                console.log('Logged In', response);
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <button type="submit">Login</button>
                </form>
            </div >
        )
    }
}
