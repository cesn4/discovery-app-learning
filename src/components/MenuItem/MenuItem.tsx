import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import DropdownMenu from '~/components/DropdownMenu';
import './MenuItem.scss';

const MenuItem: FunctionComponent<MenuItemProps> = ({
    label,
    active = false,
    dropdownMenu = undefined,
}: MenuItemProps) => {
    return (
        <div className="menu-item">
            <div
                className={classNames('menu-item__label', {
                    '-active': active,
                })}
            >
                {label}
            </div>
            {dropdownMenu && (
                <div className="menu-item__dropdown">
                    <DropdownMenu dropdownMenu={dropdownMenu} />
                </div>
            )}
        </div>
    );
};

export interface MenuItemProps {
    label: string;
    active?: boolean;
    dropdownMenu?: Array<string> | undefined;
}

export default MenuItem;
