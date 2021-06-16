import React from 'react';
import Connect from '../components/Connect';
import Navigation from '../components/Navigation';
import LoginForm from '../components/LoginForm';


const Login = () => {
    return (
        <div className="login">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
                <LoginForm />
        </div>
    );
};

export default Login;