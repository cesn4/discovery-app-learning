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
                <Row>
                    <Col xs={12} md={12} xl={12}>
                        <SectionNavigation title="Trending" borderless />
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <TrendingCard
                            image={bridge}
                            subtitle="Dolore magna aliqua"
                            primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
                            time="2m ago"
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <TrendingCard
                            image={road}
                            subtitle="Morbi eleifend a libero"
                            primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
                            time="1h ago"
                        />
                    </Col>
                    <Hidden xs md>
                        <Col xl={4}>
                            <TrendingCard
                                image={sunflower}
                                subtitle="Morbi eleifend a libero"
                                primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
                                time="3h ago"
                            />
                        </Col>
                    </Hidden>
                </Row>
            </Container>
        </div>
    );
};

export default Knight;
