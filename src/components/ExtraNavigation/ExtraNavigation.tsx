import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './ExtraNavigation.scss';
import Icon from '../Icons';

const ExtraNavigation: FunctionComponent = () => {
    const className = 'extra-navigation';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className={`${className}__box`}>
                            <a href="#" className={`${className}__back-box`}>
                                <Icon name="back" size={16} color="#343638" />
                            </a>
                            <a href="#" className={`${className}__filter-box`}>
                                <Icon name="filter" size={16} color="#343638" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExtraNavigation;
