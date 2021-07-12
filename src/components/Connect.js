import React from 'react';
import { NavLink } from 'react-router-dom';

const Connect = () => {

    const logged = localStorage.getItem("loggedIn");

    switch(logged) {
        case null: 
        /***************************** If localStorage is empty (user isn't logged) **************************************/
        return(
            <div className="connect">
                <NavLink exact to="/delete" activeClassName = "nav-active">
                    Delete Account <i class="fas fa-times"></i>
                </NavLink>
                <NavLink exact to="/signup" activeClassName = "nav-active">
                    Signup <i className="fas fa-user-plus"></i>
                </NavLink>
                <NavLink exact to="/login" activeClassName = "nav-active">
                    Login <i className="fas fa-sign-in-alt"></i>
                </NavLink>
            </div>
        )
        case logged:
           /***************************** If localStorage isn't empty (user is logged) **************************************/
        return(
            <div className="disconnect">
                <NavLink exact to ="/" onClick={() => localStorage.removeItem("loggedIn")}>
               <p className="userName">{logged}</p>- Log out <i className="fas fa-sign-out-alt"></i>
                </NavLink>
            </div>
        )
        default:
    };
};

export default Connect;