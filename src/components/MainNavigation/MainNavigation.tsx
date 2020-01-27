import React, { FunctionComponent } from 'react';

import MenuItem from '~/components/MenuItem';

import './MainNavigation.scss';

const MainNavigation: FunctionComponent = () => {
    return (
        <div className="menu">
            <div className="menu__navigation">
                <div className="menu__item">
                    <MenuItem lable="Home" active/>
                </div>
                <div className="menu__item">
                    <MenuItem lable="Discovery" />
                </div>
                <div className="menu__item">
                    <MenuItem lable="Photos" />
                </div>
                <div className="menu__item">
                    <MenuItem lable="Contacs"/>
                </div>
            </div>
        </div>
    );
};

export default MainNavigation;
