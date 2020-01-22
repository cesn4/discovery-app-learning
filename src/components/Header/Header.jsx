import React from 'react';
import PropTypes from 'prop-types';

import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';
import '~/assets/img/woman.png';

import './Header.scss';

const Header = ({ homeButton }) => {
    return (
        <header className="header">
            <div className="header__menu-icon"></div>
            <Logo />
            <MainNavigation homeButton={homeButton} />
            <div className="header__photo"></div>
        </header>
    );
};

Header.propTypes = {
    homeButton: PropTypes.func.isRequired
};

export default Header;
