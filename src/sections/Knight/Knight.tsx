import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';

import './Knight.scss';
import TrendingCardsContainer from '~/containers/TrendingCardsContainer';

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
                        <TrendingCardsContainer />
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Knight;
