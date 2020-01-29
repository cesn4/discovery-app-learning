import React, { FunctionComponent } from 'react';

import './MainNavigation.scss';

const MainNavigation: FunctionComponent<MainNavigationProps> = ({
    homeButton,
}: MainNavigationProps) => {
    return (
        <div className="menu">
            <ul className="menu__navigation">
                <li onClick={homeButton} className="menu__item -active">
                    Home
                </li>
                <li className="menu__item">Discovery</li>
                <li className="menu__item">Photos</li>
                <li className="menu__item">Contact</li>
            </ul>
        </div>
    );
};

interface MainNavigationProps {
    homeButton: VoidFunction;
}

export default MainNavigation;
