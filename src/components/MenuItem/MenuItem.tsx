import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import DropdownMenu from '~/components/DropdownMenu';
import './MenuItem.scss';

const MenuItem: FunctionComponent<MenuItemProps> = ({ lable, active= false, dropdownMenu= false }: MenuItemProps) => {
    return (
        <div className="menu-item">
            <div className={classNames('menu-item__lable', { '-active': active })}>{lable}</div>
            {dropdownMenu && <div className={classNames('menu-item__dropdown', { '-dropdown-menu': dropdownMenu })}>
                <DropdownMenu />
            </div>}
        </div>
    );
};

interface MenuItemProps {
    lable: string;
    active?: boolean;
    dropdownMenu?: boolean;
};

export default MenuItem;
