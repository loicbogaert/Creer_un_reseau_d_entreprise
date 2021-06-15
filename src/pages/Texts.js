import React from 'react';
import Navigation from '../components/Navigation';
import Connect from '../components/Connect';

const Texts = () => {
    return (
        <div className="texts">
            <div className="globalNavi">
                <Navigation />
                <Connect />
            </div>
            <h1>Forum</h1>
        </div>
    );
};

export default Texts;