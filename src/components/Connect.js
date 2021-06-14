import React from 'react';
import { NavLink } from 'react-router-dom';

const Connect = () => {
    return (
        <div className="connect">
            <NavLink exact to="/signup">
                Signup
            </NavLink>
            <NavLink exact to="/login">
                Login
            </NavLink>
        </div>
    );
};

export default Connect;