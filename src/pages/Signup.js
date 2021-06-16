import React from 'react';
import Connect from '../components/Connect';
import CreateAccount from '../components/CreateAccount';
import Navigation from '../components/Navigation';

const Signup = () => {
    return (
        <div className="signup">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
            <CreateAccount />
        </div>
    );
};

export default Signup;