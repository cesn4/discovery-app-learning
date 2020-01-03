import React from 'react';

import HeaderMenu from '../MainNavigation';

import '~/assets/img/menuIcon.png';
import '~/assets/img/woman.png';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu-icon"></div>
            <div className="header__logo">LOGO</div>
            <HeaderMenu />
            <div className="header__photo"></div>
        </header>
    );
};

export default Header;
