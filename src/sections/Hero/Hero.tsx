import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
import PostInfo from '~/components/PostInfo';
import Background from '~/components/Background';

import '~/assets/mount.jpg';
import './Hero.scss';

const Hero: FunctionComponent = () => {
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col xs={12} md={12} xl={7} className="hero__background">
                        <Background />
                    </Col>
                    <Col xs={12} md={12} xl={5}>
                        <div className="hero__section-lable">
                            <SectionNavigation title="Discoveries" />
                        </div>
                        <div className="hero__posts">
                            <PostInfo
                                title="Travel"
                                subtitle="Article title"
                                primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…"
                                time="2m ago"
                            />
                            <PostInfo
                                title="Technology"
                                subtitle="Article title"
                                primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…"
                                time="1h ago"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
