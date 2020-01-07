import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';

import '~/assets/mount.jpg';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <Container fluid>
                <Row >
                    <Col sm={12} md={12} xl={7} className="background">
                        <div className="hero__news">
                            <div className="news">
                                <div className="news__title">
                                    <span>WORLD NEWS</span>
                                </div>
                                <span className="news__subtitle">Amazing places in America to visit.</span>
                                <p className="news__paragraph">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
                                <a className="news__button">LEARN MORE</a>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} xl={5}>
                        <SectionNavigation section="Discoveries" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
