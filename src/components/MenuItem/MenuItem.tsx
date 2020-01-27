import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import DropdownMenu from '~/components/DropdownMenu';
import './MenuItem.scss';

const MenuItem: FunctionComponent<MenuItemProps> = ({ lable, active= false }: MenuItemProps) => {
    return (
        <div className="menu-item">
            <div className={classNames('menu-item__lable', { '-active': active })}>{lable}</div>
            <DropdownMenu />
        </div>
    );
};

interface MenuItemProps {
    lable: string;
    active?: boolean;
};

export default MenuItem;
