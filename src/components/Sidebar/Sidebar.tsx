import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Logo from '~/components/Logo';
import NavigationItem from '~/components/NavigationItem';

import home from '~/assets/img/home.png';
import discover from '~/assets/img/discover.png';
import photos from '~/assets/img/photos.png';
import mail from '~/assets/img/mail.png';
import './Sidebar.scss';

const Sidebar: FunctionComponent<SidebarProps> = ({
    closeSidebar,
    isOpen = false
}: SidebarProps ) => {
    return (
        <div className={classNames('sidebar', { 'is-open': isOpen })}>
            <div className="sidebar__text-box">
                <div className="sidebar__logo">
                    <Logo accent/>
                </div>
                <div className="sidebar__nav">
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={home} title='Home' active />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={discover} title='Discovery' />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={photos} title='Photos' />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={mail} title='Contact' />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} title='Profile' profile />
                    </div>
                </div>
            </div>
            <button className="sidebar__backdraw" onClick= {() => {closeSidebar}}></button>
        </div>
    );
};

interface SidebarProps {
    closeSidebar: Function;
    isOpen: boolean;
}
export default Sidebar;
