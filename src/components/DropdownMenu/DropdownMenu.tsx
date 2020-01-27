import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import NavigationItem from '~/components/NavigationItem';

import './DropdownMenu.scss';

const DropdownMenu: FunctionComponent<DropDownMenuProps> = ({ isOpen= false }: DropDownMenuProps) => {
    return (
        <div className={classNames('dropdown-menu', { '-isOpen': isOpen })}>
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

interface DropDownMenuProps {
    isOpen?: boolean;
};


export default DropdownMenu;
