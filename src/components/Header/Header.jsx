import React from 'react';

import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';
import '~/assets/img/woman.png';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu-icon"></div>
            <div className="header__logo">LOGO</div>
            <MainNavigation />
            <div className="header__photo"></div>
        </header>
    );
};

export default Header;
