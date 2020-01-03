import React from 'react';

import './MainNavigation.scss';

const MainNavigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__menu">
                <li className="menu__home">Home</li>
                <li className="menu__discovery">Discovery</li>
                <li className="menu__photos">Photos</li>
                <li className="menu__contact">Contact</li>
            </ul>
        </div>
    );
};

export default MainNavigation;
