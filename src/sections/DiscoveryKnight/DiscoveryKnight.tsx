import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './DiscoveryKnight.scss';

const DisocveryKNight: FunctionComponent = () => {
    const className = 'discovery-knight';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className={`${className}__content`}>Hello</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DisocveryKNight;
