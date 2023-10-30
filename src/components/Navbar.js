import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <div>
        <p>Hello! | <NavLink to="/login">Logout</NavLink> </p>
        {/* <Navlink>${username}</Navlink> */}
    </div>
)

export default Navbar;