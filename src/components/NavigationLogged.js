import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLogged = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/logged" activeClassName="nav-active">
                Home
            </NavLink>
            <NavLink exact to="/forum/text/logged" activeClassName="nav-active">
                Forum
            </NavLink>
            <NavLink exact to="/forum/media/logged" activeClassName="nav-active">
                Medias
            </NavLink>
        </div>
    );
};

export default NavigationLogged;