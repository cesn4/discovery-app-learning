import React, { FunctionComponent } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
import SmallCard from '~/components/SmallCard';

import castle from '~/assets/img/castle.jpg';
import wall from '~/assets/img/wall.jpg';
import random from '~/assets/img/random.jpg';
import './Featured.scss';
import FeaturedCardsContainer from '~/containers/FeaturedContainer';

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
                                <Col md={6} lg={12}>
                                    <div className="featured__small-card -first">
                                        <SmallCard
                                            firstItem
                                            image={wall}
                                            title="Small title"
                                            time="3h ago by Worldnews"
                                        />
                                    </div>
                                </Col>
                                <Col md={6} lg={12}>
                                    <div className="featured__small-card -second">
                                        <SmallCard
                                            image={castle}
                                            title="Small title"
                                            time="4h ago by Days"
                                        />
                                    </div>
                                </Col>
                                <Hidden sm md>
                                    <Col>
                                        <div className="featured__small-card -third">
                                            <SmallCard
                                                image={random}
                                                title="Small title"
                                                time="4h ago by Days"
                                            />
                                        </div>
                                    </Col>
                                </Hidden>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Featured;
