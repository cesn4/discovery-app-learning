import React, { FunctionComponent, ReactChild } from 'react';
import classNames from 'classnames';

import NavigationItem from '~/components/NavigationItem';

import './DropdownMenu.scss';

const DropdownMenu: FunctionComponent<DropDownMenuProps> = ({
    isOpen = false,
}: DropDownMenuProps) => {
    const hardcodedList: Array<string> = [
        'World News',
        'Travel',
        'Technology',
        'City',
        'Culture',
        'More...',
    ];
    const renderList: Array<ReactChild> = hardcodedList.map((item, index) => {
        return (
            <div key={index.toString()} className="dropdown-menu__nav-item">
                <NavigationItem href="#" title={item} />
            </div>
        );
    });

    return (
        <div className={classNames('dropdown-menu', { '-isOpen': isOpen })}>
            <div className="dropdown-menu__nav">{renderList}</div>
        </div>
    );
};

interface DropDownMenuProps {
    isOpen?: boolean;
}

export default DropdownMenu;
