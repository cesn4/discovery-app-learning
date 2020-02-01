import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import ProfilePhoto from '~/components/ProfilePhoto';
import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';

import './Header.scss';

const Header: FunctionComponent<HeaderProps> = ({
    drawSidebar,
}: HeaderProps) => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col>
                        <header className="header__box">
                            <button
                                className="header__menu-icon"
                                onClick={drawSidebar}
                            ></button>
                            <Logo />
                            <MainNavigation />
                            <div className="header__photo">
                                <ProfilePhoto medium />
                            </div>
                        </header>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

interface HeaderProps {
    drawSidebar: VoidFunction;
}

export default Header;
