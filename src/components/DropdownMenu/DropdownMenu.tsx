import React, { FunctionComponent } from 'react';

import NavigationItem from '~/components/NavigationItem';

import './DropdownMenu.scss';

const DropdownMenu: FunctionComponent = () => {
    return (
        <div className='dropdown-menu' >
            <div className="dropdown-menu__nav">
                <div className="dropdown-menu__nav-item">
                    <NavigationItem href="#" title="World News"/>
                </div>
                <div className="dropdown-menu__nav-item">
                    <NavigationItem href="#" title="Travel"/>
                </div>
                <div className="dropdown-menu__nav-item">
                    <NavigationItem href="#" title="Technology"/>
                </div>
                <div className="dropdown-menu__nav-item">
                    <NavigationItem href="#" title="City"/>
                </div>
                <div className="dropdown-menu__nav-item">
                    <NavigationItem href="#" title="Culture"/>
                </div>
                <div className="dropdown-menu__nav-item">
                    <NavigationItem href="#" title="More..."/>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
