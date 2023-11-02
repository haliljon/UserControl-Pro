import React from "react";
import Table from '../components/Table'
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";

const Home = (props) => {
    const handleSuccessfulAuth = (data) => {
        props.handleLogin(data);
    };
    return (
        <div className="container">
            <h2>Hello! {props.username}</h2>
            <p>Welcome to the home page!</p>
            {props.loggedInStatus === 'LOGGED_IN' ? (<Table striped bordered hover />) : (<><Registration handleSuccessfulAuth={handleSuccessfulAuth} /><Login handleSuccessfulAuth={handleSuccessfulAuth} /></>)}
        </div>
    );
};

export default Home;