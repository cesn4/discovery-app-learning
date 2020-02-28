import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Icon from '../Icons';

import Colors from '~/styles/export/colors.scss';
import './ExtraNavigation.scss';

const ExtraNavigation: FunctionComponent<ExtraNavigationProps> = ({
    label,
    href = '#',
}: ExtraNavigationProps) => {
    const className = 'extra-navigation';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className={`${className}__box`}>
                            <a
                                href={href}
                                className={`${className}__back-anchor`}
                            >
                                <Icon
                                    name="back"
                                    size={16}
                                    color={Colors.active}
                                />
                            </a>
                            <div className={`${className}__home-box`}>
                                <a
                                    href="#"
                                    className={`${className}__home-anchor`}
                                >
                                    <Icon
                                        name="home"
                                        size={16}
                                        color={Colors.active}
                                    />
                                </a>
                                <span className={`${className}__label`}>
                                    {label}
                                </span>
                            </div>
                            <a href="#" className={`${className}__filter-box`}>
                                <Icon
                                    name="filter"
                                    size={16}
                                    color={Colors.active}
                                />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export interface ExtraNavigationProps {
    label: string;
    href?: string;
}

export default ExtraNavigation;
