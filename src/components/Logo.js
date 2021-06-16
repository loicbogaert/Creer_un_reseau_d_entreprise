import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            <img src="./img/logo-black.svg" alt="logo de Groupomania"></img>
            <p className="welcome">Dear employee, welcome to Groupomania's chatting app reserved to all of our employees. 
            In order to start chatting with everyone, you must create an account and then log in (you will find those features on the top-right corner of the app).
            <br></br><br></br>
            We sincerely hope you will enjoy our app, sharing content and chatting with your co-workers.
            </p>
            <h1 className="signature">Groupomania</h1>
        </div>
    );
};

export default Logo;