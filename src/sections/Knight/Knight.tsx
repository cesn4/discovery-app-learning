import React, { FunctionComponent } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import TrendingCard from '~/components/TrendingCard';
import SectionNavigation from '~/components/SectionNavigation';

import sunflower from '~/assets/img/sunflower.jpg';
import road from '~/assets/img/road.jpg';
import bridge from '~/assets/img/bridge.jpg';
import './Knight.scss';

const Knight: FunctionComponent = () => {
    return (
        <div className="knight">
            <Container>
                <div className="knight__box">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="knight__navigation">
                                <SectionNavigation title="Trending" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="knight__trending-card -first">
                                <TrendingCard
                                    image={bridge}
                                    subtitle="Dolore magna aliqua"
                                    primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
                                    time="2m ago"
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="knight__trending-card -second">
                                <TrendingCard
                                    image={road}
                                    subtitle="Morbi eleifend a libero"
                                    primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
                                    time="1h ago"
                                />
                            </div>
                        </Col>
                        <Hidden sm md>
                            <Col lg={4}>
                                <div className="knight__trending-card -third">
                                    <TrendingCard
                                        image={sunflower}
                                        subtitle="Morbi eleifend a libero"
                                        primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
                                        time="3h ago"
                                    />
                                </div>
                            </Col>
                        </Hidden>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Knight;
