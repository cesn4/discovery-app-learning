import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import TrendingCard from '~/components/TrendingCard';
import SectionNavigation from '~/components/SectionNavigation';

import './Knight.scss';

const Knight = () => {
    return (
        <div className="knight">
            <Container fluid>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <SectionNavigation title="Trending" knight/>
                        <TrendingCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Knight;
