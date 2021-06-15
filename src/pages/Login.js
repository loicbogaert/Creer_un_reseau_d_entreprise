import React from 'react';
import Connect from '../components/Connect';
import Navigation from '../components/Navigation';


const Login = () => {
    return (
        <div className="login">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
        </div>
    );
};

export default Login;