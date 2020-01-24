import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Logo from '~/components/Logo';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';
import '~/assets/img/woman.png';

import './Header.scss';

const Header: FunctionComponent = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col>
                        <header className="header__box">
                            <div className="header__menu-icon"></div>
                            <Logo />
                            <MainNavigation />
                            <div className="header__photo"></div>
                        </header>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
