import React, { FunctionComponent } from 'react';

import './MainNavigation.scss';

const MainNavigation: FunctionComponent = () => {
    return (
        <div className="menu">
            <ul className="menu__navigation">
                <li onClick={homeButton} className="menu__item -active">Home</li>
                <li className="menu__item">Discovery</li>
                <li className="menu__item">Photos</li>
                <li className="menu__item">Contact</li>
            </ul>
        </div>
    );
};

MainNavigation.propTypes = {
    homeButton: PropTypes.string.isRequired
};

export default MainNavigation;
