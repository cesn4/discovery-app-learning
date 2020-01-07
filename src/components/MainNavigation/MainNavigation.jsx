import React from 'react';

import './MainNavigation.scss';

const MainNavigation = () => {
    return (
        <div className="menu">
            <ul className="menu__navigation">
                <li className="menu__home">Home</li>
                <li className="menu__item">Discovery</li>
                <li className="menu__item">Photos</li>
                <li className="menu__item">Contact</li>
            </ul>
        </div>
    );
};

export default MainNavigation;
