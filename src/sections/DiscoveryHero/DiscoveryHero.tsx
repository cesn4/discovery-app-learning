import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import DiscoveryTitle from '~/components/DiscoveryTitle';

import Dude from '~/assets/img/dude.jpg';
import '~/assets/img/DiscoveryMountain.jpg';
import './DiscoveryHero.scss';

const DiscoveryHero: FunctionComponent<DiscoveryHeroProps> = ({
    background,
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
                                    title="DISCOVERY"
                                    subtitle="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto vidit."
                                    image={Dude}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

interface DiscoveryHeroProps {
    background: string;
}

interface DiscoveryBackgroundObject {
    backgroundImage: string;
}

export default DiscoveryHero;
