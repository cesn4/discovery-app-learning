import React from 'react';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="menu-icon"></div>
            <div className="logo">LOGO</div>
            <ul className="headerMenu">
                <li className="menuHome">Home</li>
                <li className="menuDiscovery">Discovery</li>
                <li className="menuPhotos">Photos</li>
                <li className="menuContact">Contact</li>
            </ul>
            <div className="photo"></div>
        </header>
    );
};

export default Header;
