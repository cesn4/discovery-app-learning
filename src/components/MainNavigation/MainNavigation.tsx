import React, { FunctionComponent, ReactChild } from 'react';

import MenuItem from '~/components/MenuItem';

import './MainNavigation.scss';

const MainNavigation: FunctionComponent = () => {

    const list: Array<string> = ["Home", "Discovery", "Photos", "Contacts"];
    const renderList: Array<ReactChild> = list.map((item, index) => {
        return (
            <div key={index.toString()} className="menu__item">
                <MenuItem lable={item}/>
            </div>);
    });
    return (
        <div className="menu">
            <div className="menu__navigation">
                {renderList}
            </div>
        </div>
    );
};

export default MainNavigation;
