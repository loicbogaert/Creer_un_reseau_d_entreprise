import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    const logged = localStorage.getItem("loggedIn");

    switch(logged) {
        case null: 
        /***************************** If localStorage is empty (user isn't logged) **************************************/
        return (
            <div className="navigation">
                <NavLink exact to="/" activeClassName="nav-active">
                    Home
                </NavLink>
            </div>
        )
        case logged:
           /***************************** If localStorage isn't empty (user is logged) **************************************/
        return(
            <div className="navigation">
                <NavLink exact to="/" activeClassName="nav-active">
                    Home
                </NavLink>
                <NavLink exact to="/forum" activeClassName="nav-active">
                    Forum
                </NavLink>
            </div>
        )
        default:
    };
};



export default Navigation;