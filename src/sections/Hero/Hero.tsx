import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
// import BackgroundContainer from '~/containers/BackgroundContainer';

import './Hero.scss';
import PostInfoContainer from '~/containers/PostInfoContainer';

const Hero: FunctionComponent = () => {
    return (
        <div className="hero">
            <Container>
                <div className="hero__box">
                    <Row>
                        <Col xs={12} md={12} lg={7}>
                            {/* <BackgroundContainer /> */}
                        </Col>
                        <Col xs={12} md={12} lg={5}>
                            <div className="hero__post-box">
                                <div className="hero__section-lable">
                                    <SectionNavigation title="Discoveries" />
                                </div>
                                <div className="hero__posts">
                                    <PostInfoContainer />
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
