import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
import PostInfo from '~/components/PostInfo';
import Background from '~/components/Background';

import './Hero.scss';

const Hero: FunctionComponent = () => {
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={7}>
                        <Background />
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
            </Container>
        </div>
    );
};

export default Hero;
