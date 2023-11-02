import React from "react";
import axios from "axios";

const Navbar = (props) => {
    const handleLogoutClick = () => {
        axios.delete("https://user-control-pro-6d69dacacf7c.herokuapp.com/logout", { withCredentials: true })
            .then(response => {
                props.handleLogout();
            })
            .catch(error => {
                console.log("logout error", error);
            });
    }
    return (

        <div className="container">
            <p>Hello! | <button onClick={() => handleLogoutClick()}>Logout</button></p>
        </div>
    )
}
export default Navbar;