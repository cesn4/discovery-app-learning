import React from 'react';

import HeaderMenu from '../HeaderMenu';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="menu-icon"></div>
            <div className="logo">LOGO</div>
            <HeaderMenu />
            <div className="photo"></div>
        </header>
    );
};

export default Header;
