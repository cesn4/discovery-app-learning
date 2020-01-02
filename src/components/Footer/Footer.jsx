import React from 'react';

import image from '~/assets/image.jpg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            Footer
            <img className="footer__image" src={image} alt="" />
            <div className="footer__bgi"></div>
        </footer>
    );
};

export default Footer;
