import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import PostInfo from '~/components/PostInfo';
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
                        <PostInfo trending image={bridge} subtitle="Dolore magna aliqua" primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat." time="2m ago" />
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <PostInfo trending image={road} subtitle="Morbi eleifend a libero" primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat." time="1h ago"/>
                    </Col>
                    <Hidden sm md>
                        <Col xl={4}>
                            <PostInfo trending image={sunflower} subtitle="Morbi eleifend a libero" primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat." time="3h ago"/>
                        </Col>
                    </Hidden>
                </Row>
            </Container>
        </div>
    );
};

export default Knight;
