import React from 'react';

import './HeaderMenu.scss';

const HeaderMenu = () => {
    return (
        <div className="header-menu-box">
            <ul className="header__menu">
                <li className="menu__home">Home</li>
                <li className="menu__discovery">Discovery</li>
                <li className="menu__photos">Photos</li>
                <li className="menu__contact">Contact</li>
            </ul>
        </div>
    );
};

export default HeaderMenu;
