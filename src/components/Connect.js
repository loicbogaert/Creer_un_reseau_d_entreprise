import React from 'react';
import { NavLink } from 'react-router-dom';

const Connect = () => {
    return (
        <div className="connect">
            <NavLink exact to="/signup" activeClassName = "nav-active">
                Signup
            </NavLink>
            <NavLink exact to="/login" activeClassName = "nav-active">
                Login
            </NavLink>
        </div>
    );
};

export default Connect;