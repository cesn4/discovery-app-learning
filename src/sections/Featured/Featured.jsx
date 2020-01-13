import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import FeaturedCard from '~/components/FeaturedCard';
import SectionNavigation from '~/components/SectionNavigation';

import house from '~/assets/img/house.jpg';
import hand from '~/assets/img/hand.jpg';
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
            <Container>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <SectionNavigation borderless title="Happening Now"/>
                    </Col>
                    <Col sm={12} md={12} xl={8}>
                        <FeaturedCard firstItem background={hand} theme="CITY" title="Large article title mobile layout" paragraph="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam." time="2m ago"/>
                    </Col>
                    <Col sm={12} md={12} xl={8}>
                        <FeaturedCard firstItem background={house} theme="TRAVEL" title="Large article title mobile layout" paragraph="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam." time="2m ago" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Featured;
