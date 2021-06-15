import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/forum/text" activeClassName="nav-active">
                Forum
            </NavLink>
            <NavLink exact to="/forum/media" activeClassName="nav-active">
                Medias
            </NavLink>
        </div>
    );
};

export default Navigation;