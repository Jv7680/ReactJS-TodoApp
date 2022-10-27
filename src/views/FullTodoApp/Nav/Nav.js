import React from "react";
import './Nav.scss';

import { NavLink } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/todo" end>Todo</NavLink>
                <NavLink to="/about" end>About</NavLink>
            </div>
        );
    }
}

export default Nav;