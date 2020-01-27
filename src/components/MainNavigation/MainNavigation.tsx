import React, { FunctionComponent, ReactChild } from 'react';

import MenuItem from '~/components/MenuItem';

import './MainNavigation.scss';

const MainNavigation: FunctionComponent = () => {

    const list: Array<string> = ["Home", "Discovery", "Photos", "Contacts"];
    const renderList: Array<ReactChild> = list.map((item, index) => {
        return (<MenuItem key={index.toString()} lable={item}/>);
    });
    return (
        <div className="menu">
            <div className="menu__navigation">
                <div className="menu__item">
                    <MenuItem lable="Home" active dropdownMenu/>
                </div>
                <div className="menu__item">
                    {renderList[1]}
                </div>
                <div className="menu__item">
                    {renderList[2]}
                </div>
                <div className="menu__item">
                    {renderList[3]}
                </div>
            </div>
        </div>
    );
};

export default MainNavigation;
