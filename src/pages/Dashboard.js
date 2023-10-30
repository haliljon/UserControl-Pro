import React from "react";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard page!</p>
            <h2>Status: {props.loggedInStatus}</h2>
        </div>
    );
}

export default Dashboard;