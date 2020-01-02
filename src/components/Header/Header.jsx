import React from 'react';

import image from '~/assets/image.jpg';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            Header
            <img className="header__image" src={image} alt=""/>
            <div className="header__bgi"></div>
        </header>
    );
};

export default Header;
