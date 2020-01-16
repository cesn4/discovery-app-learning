import React from 'react';

import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';
import '~/assets/img/woman.png';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <button className="header__menu-icon"></button>
            <Logo />
            <MainNavigation />
            <div className="header__photo"></div>
        </header>
    );
};

export default Header;
