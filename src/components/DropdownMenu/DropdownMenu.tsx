import React, { FunctionComponent, ReactChild } from 'react';

import NavigationItem from '~/components/NavigationItem';

import './DropdownMenu.scss';

const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({
    dropdownMenu,
}: DropdownMenuProps) => {
    if (!dropdownMenu) {
        return null;
    }
    const renderList: Array<ReactChild> = dropdownMenu.map((item, index) => {
        return (
            <div key={index.toString()} className="dropdown-menu__nav-item">
                <NavigationItem href="#" title={item} />
            </div>
        );
    });
    return (
        <div className="dropdown-menu">
            <div className="dropdown-menu__nav">{renderList}</div>
        </div>
    );
};

interface DropdownMenuProps {
    dropdownMenu?: Array<string> | undefined;
}

export default DropdownMenu;
