import React from 'react';
import { NavLink } from 'react-router-dom';

const Disconnect = () => {
    return (
        <div className="disconnect">
            <NavLink exact to ="/">
                Log out <i class="fas fa-sign-out-alt"></i>
            </NavLink>
        </div>
    );
};

export default Disconnect;