import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
import './Featured.scss';
import FeaturedCardsContainer from '~/containers/FeaturedContainer';
import SmallCardsContainer from '~/containers/SmallCardsContainer';

const Featured: FunctionComponent = () => {
    return (
        <div className="featured">
            <Container>
                <div className="featured__box">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="featured__navigation">
                                <SectionNavigation
                                    borderless
                                    title="Happening Now"
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={8}>
                            <div className="featured__cards">
                                <FeaturedCardsContainer />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={4}>
                            <Row>
                                <SmallCardsContainer />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Featured;
