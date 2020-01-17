import React from 'react';
import PropTypes from 'prop-types';

import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';
import '~/assets/img/woman.png';

import './Header.scss';

const Header = ({ drawSidebar }) => {
    return (
        <header className="header">
            <button className="header__menu-icon" onClick={drawSidebar}></button>
            <Logo />
            <MainNavigation />
            <div className="header__photo"></div>
        </header>
    );
};

Header.propTypes = {
    drawSidebar: PropTypes.string.isRequired
};

export default Header;
