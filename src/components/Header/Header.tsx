import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Sidebar from '~/components/Sidebar';
import ProfilePhoto from '~/components/ProfilePhoto';
import MainNavigation from '~/components/MainNavigation';

import '~/assets/img/menuIcon.png';

import './Header.scss';
import LogoContainer from '~/containers/LogoContainer';

const Header: FunctionComponent = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col lg={12} xl={8}>
                        <header className="header__box">
                            <div className="header__sidebar">
                                <Sidebar />
                            </div>
                            <LogoContainer />
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

export default Header;
