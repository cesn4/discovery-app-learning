import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Icon from '../Icons';
import { Color } from '~/constants';

import './ExtraNavigation.scss';

const ExtraNavigation: FunctionComponent<ExtraNavigationProps> = ({
    label,
    backHref = '#',
    homeHref = '#',
}: ExtraNavigationProps) => {
    const className = 'extra-navigation';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className={`${className}__box`}>
                            <a
                                href={backHref}
                                className={`${className}__back-anchor`}
                            >
                                <Icon
                                    name="back"
                                    size={16}
                                    color={Color.active}
                                />
                            </a>
                            <div className={`${className}__home-box`}>
                                <a
                                    href={homeHref}
                                    className={`${className}__home-anchor`}
                                >
                                    <Icon
                                        name="home"
                                        size={16}
                                        color={Color.active}
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
                                    color={Color.active}
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
    backHref?: string;
    homeHref?: string;
}

export default ExtraNavigation;
