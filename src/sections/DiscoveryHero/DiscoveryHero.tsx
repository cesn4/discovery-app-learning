import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import DiscoveryTitle from '~/components/DiscoveryTitle';
import DiscoverySearch from '~/components/DiscoverySearch';

import './DiscoveryHero.scss';

const DiscoveryHero: FunctionComponent<DiscoveryHeroProps> = ({
    background,
    title,
    subtitle,
    author,
}: DiscoveryHeroProps) => {
    const styleBackground: DiscoveryBackgroundObject = {
        backgroundImage: 'url(' + background + ')',
    };
    const className = 'discovery-hero';
    return (
        <div className={className}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <div
                                className={`${className}__content`}
                                style={styleBackground}
                            >
                                <DiscoveryTitle
                                    title={title}
                                    subtitle={subtitle}
                                    image={author}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <div className={`${className}__search`}>
                                <DiscoverySearch />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export interface DiscoveryHeroProps {
    background: string;
    title: string;
    subtitle: string;
    author: string;
}

interface DiscoveryBackgroundObject {
    backgroundImage: string;
}

export default DiscoveryHero;
