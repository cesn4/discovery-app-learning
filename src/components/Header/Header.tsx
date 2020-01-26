import React, { FunctionComponent } from 'react';

import ProfilePhoto from '~/components/ProfilePhoto';
import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';

import './Header.scss';

const Header: FunctionComponent<HeaderProps> = ({ drawSidebar }: HeaderProps) => {
    return (
        <header className="header">
            <button className="header__menu-icon" onClick={drawSidebar}></button>
            <Logo />
            <MainNavigation />
            <div className="header__photo">
                <ProfilePhoto medium />
            </div>
        </header>
    );
};

interface HeaderProps {
    drawSidebar: VoidFunction;
}

export default Header;
