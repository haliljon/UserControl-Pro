import React from "react";
import axios from "axios";

export default class Registration extends React.Component {
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
        axios.post("http://localhost:3001/registrations", {
            user: {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                position: this.state.position,
            }
        }, { withCredentials: true })
            .then(response => {
                if (response.data.status === 'created') {
                    this.props.handleSuccessfulAuth(response.data);
                    console.log('Created', response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Registration</h1>
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
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required /><br />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={this.state.position}
                        onChange={this.handleChange}
                        required />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required/>
                    <br />
                    <button button type="submit">Register</button>    
                </form >
            </div >
        ) 
    }
}
