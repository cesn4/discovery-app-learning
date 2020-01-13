import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';

import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
            <Container>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <SectionNavigation borderless title="Happening Now"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Featured;
