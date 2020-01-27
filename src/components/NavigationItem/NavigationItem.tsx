import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import ProfilePhoto from '~/components/ProfilePhoto';

import './NavigationItem.scss';

const NavigationItem: FunctionComponent<NavigationItemProps> = ({
    href,
    icon = undefined,
    title,
    active = false,
    profile = false
}: NavigationItemProps) => {
    return (
        <div className="navigation-item">
            <a href={href} className="navigation-item__anchor">
                { profile && <div className={classNames('navigation-item__icon', { '-profile': profile })}>
                    <ProfilePhoto />
                </div> }
                { icon && <img src={icon} className="navigation-item__icon"/> }
                <span className={classNames('navigation-item__title', { '-active': active })}>{title}</span>
            </a>
        </div>
    );
};

interface NavigationItemProps {
    href: string;
    icon?: string;
    title: string;
    active?: boolean;
    profile?: boolean;
};

export default NavigationItem;
