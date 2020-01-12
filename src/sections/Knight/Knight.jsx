import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import TrendingCard from '~/components/TrendingCard';

import './Knight.scss';

const Knight = () => {
    return (
        <div className="knight">
            <Container>
                <Row>
                    <Col>
                        <TrendingCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Knight;
