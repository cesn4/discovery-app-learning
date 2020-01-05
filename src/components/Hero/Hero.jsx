import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '~/assets/mount.jpg';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <Container>
                <Row >
                    <Col xl={6} className="background">
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
                    <Col sm={12} md={12} xl={6}>
                        <div className="hero__discoveries">
                            <div className="discoveries">
                                <h1 className="discoveries__title">DISCOVERIES</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
