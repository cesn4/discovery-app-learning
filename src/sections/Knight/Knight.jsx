import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import TrendingCard from '~/components/TrendingCard';
import SectionNavigation from '~/components/SectionNavigation';

import sunflower from '~/assets/img/sunflower.jpg';
import road from '~/assets/img/road.jpg';
import bridge from '~/assets/img/bridge.jpg';
import './Knight.scss';

const Knight = () => {
    return (
        <div className="knight">
            <Container fluid className="knight__box">
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <SectionNavigation title="Trending" borderless/>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <TrendingCard firstItem image={bridge} title="Dolore magna aliqua" paragraphText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat." time="2m ago" />
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <TrendingCard image={road} title="Morbi eleifend a libero" paragraphText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat." time="1h ago"/>
                    </Col>
                    <Col sm={0} md={0} xl={4}>
                        <TrendingCard image={sunflower} notVisible title="Morbi eleifend a libero" paragraphText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat." time="3h ago"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Knight;
