import React, { FunctionComponent, ReactChild } from 'react';
import classNames from 'classnames';

import Logo from '~/components/Logo';
import NavigationItem, {
    NavigationItemProps,
} from '~/components/NavigationItem';

import home from '~/assets/img/home.png';
import discover from '~/assets/img/discover.png';
import photos from '~/assets/img/photos.png';
import mail from '~/assets/img/mail.png';
import './SidebarMenu.scss';

const SidebarMenu: FunctionComponent<SidebarMenuProps> = ({
    closeSidebar,
    isOpen = false,
}: SidebarMenuProps) => {
    const list: Array<NavigationItemProps> = [
        { title: 'Home', icon: home, active: true },
        { title: 'Discovery', icon: discover },
        { title: 'Photos', icon: photos },
        { title: 'Contact', icon: mail },
        { title: 'Profile', profile: true },
    ];
    const renderList: Array<ReactChild> = list.map(
        (
            {
                title,
                icon,
                active = false,
                profile = false,
                href = '#',
            }: NavigationItemProps,
            index
        ) => {
            return (
                <div key={index.toString()} className="sidebar-menu__nav-item">
                    <NavigationItem
                        href={href}
                        icon={icon}
                        title={title}
                        active={active}
                        profile={profile}
                    />
                </div>
            );
        }
    );
    return (
        <div className={classNames('sidebar-menu', { 'is-open': isOpen })}>
            <div className="sidebar-menu__text-box">
                <div className="sidebar-menu__logo">
                    <Logo accent />
                </div>
                <div className="sidebar-menu__nav">{renderList}</div>
            </div>
            <button
                className={classNames('sidebar-menu__backdraw', {
                    '-isOpen': isOpen,
                })}
                onClick={closeSidebar}
            ></button>
        </div>
    );
};

interface SidebarMenuProps {
    closeSidebar: VoidFunction;
    isOpen?: boolean;
}
export default SidebarMenu;
