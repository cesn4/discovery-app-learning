import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
import PostInfo from '~/components/PostInfo';
import BackgroundContainer from '~/containers/BackgroundContainer';

import './Hero.scss';

const Hero: FunctionComponent = () => {
    return (
        <div className="hero">
            <Container>
                <div className="hero__box">
                    <Row>
                        <Col xs={12} md={12} lg={7}>
                            <BackgroundContainer />
                        </Col>
                        <Col xs={12} md={12} lg={5}>
                            <div className="hero__post-box">
                                <div className="hero__section-lable">
                                    <SectionNavigation title="Discoveries" />
                                </div>
                                <div className="hero__posts">
                                    <div className="hero__first-post">
                                        <PostInfo
                                            title="Travel"
                                            subtitle="Article title"
                                            primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…"
                                            time="2m ago"
                                        />
                                    </div>
                                    <div className="hero__second-post">
                                        <PostInfo
                                            title="Technology"
                                            subtitle="Article title"
                                            primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…"
                                            time="1h ago"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
