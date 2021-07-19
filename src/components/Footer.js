import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerRow1">
            <img src="./img/logo-black.svg" alt="logo de Groupomania" className="logo"></img>
                <ul>
                    <a href="mailto:moderator@gmail.com"><li>Contact a moderator</li></a>
                    <a href="mailto:Groupomania@gmail.com"><li>Contact us</li></a>
                </ul>
            </div>
            <div class="logo-list">
                <i class="fab fa-twitter-square media twitter"></i>
                <i class="fab fa-facebook-square media facebook"></i>
                <i class="fab fa-google-plus-square media google"></i>
                <i class="fab fa-instagram-square media instagram"></i>
                <i class="fas fa-share-alt-square media share"></i>
            </div>
        </div>
    );
};

export default Footer;