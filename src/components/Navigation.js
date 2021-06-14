import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">
                Acceuil
            </NavLink>
            <NavLink exact to="/forum">
                Forum
            </NavLink>
        </div>
    );
};

export default Navigation;