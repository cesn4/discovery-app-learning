import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Sidebar from '~/components/Sidebar';
import ProfilePhoto from '~/components/ProfilePhoto';
import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';

import './Header.scss';

const Header: FunctionComponent<HeaderProps> = ({ homeButton }: HeaderProps) => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col>
                        <header className="header__box">
                            <div className="header__sidebar">
                                <Sidebar />
                            </div>
                            <Logo />
                            <MainNavigation homeButton={homeButton} />
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
    homeButton: VoidFunction;
};

export default Header;
