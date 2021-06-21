import React from 'react';
import { NavLink } from 'react-router-dom';

const Connect = () => {
    return (
        <div className="connect">
            <NavLink exact to="/signup" activeClassName = "nav-active">
                Signup <i className="fas fa-user-plus"></i>
            </NavLink>
            <NavLink exact to="/login" activeClassName = "nav-active">
                Login <i className="fas fa-sign-in-alt"></i>
            </NavLink>
        </div>
    );
};

export default Connect;