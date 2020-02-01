import React, { FunctionComponent, ReactChild } from 'react';

import MenuItem, { MenuItemProps } from '~/components/MenuItem/MenuItem';

import './MainNavigation.scss';

const MainNavigation: FunctionComponent = () => {

    const list: Array<MenuItemProps> = [{ label: "Home", active: true, dropdownMenu: true }, {label: "Discovery"}, {label: "Photos"}, {label: "Contacts"}];
    const renderList: Array<ReactChild> = list.map(({ label, active=false, dropdownMenu=false }: MenuItemProps, index) => {
        return (
            <div key={index.toString()} className="menu__item">
                <MenuItem label={label} active={active} dropdownMenu={dropdownMenu} />
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
