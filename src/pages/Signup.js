import React from 'react';
import Connect from '../components/Connect';
import Navigation from '../components/Navigation';

const Signup = () => {
    return (
        <div className="signup">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
        </div>
    );
};

export default Signup;