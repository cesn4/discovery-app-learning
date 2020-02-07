import React, { FunctionComponent } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import FeaturedCard from '~/components/FeaturedCard';
import SectionNavigation from '~/components/SectionNavigation';
import SmallCard from '~/components/SmallCard';

import castle from '~/assets/img/castle.jpg';
import wall from '~/assets/img/wall.jpg';
import house from '~/assets/img/house.jpg';
import hand from '~/assets/img/hand.jpg';
import random from '~/assets/img/random.jpg';
import './Featured.scss';

const Featured: FunctionComponent = () => {
    return (
        <div className="featured">
            <Container>
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
                            <FeaturedCard
                                firstItem
                                background={hand}
                                theme="CITY"
                                title="Large article title mobile layout"
                                paragraph="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
                                time="2m ago"
                            />
                            <FeaturedCard
                                lastItem
                                background={house}
                                theme="TRAVEL"
                                title="Large article title mobile layout"
                                paragraph="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
                                time="2m ago"
                            />
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
            </Container>
        </div>
    );
};

export default Featured;
