import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import DiscoveryTitle from '~/components/DiscoveryTitle';

import Dude from '~/assets/img/dude.jpg';

import '~/assets/img/DiscoveryMountain.jpg';
import './DiscoveryHero.scss';

const DiscoveryHero: FunctionComponent = () => {
    const className = 'discovery-hero';
    return (
        <div className={className}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col>
                            <div className={`${className}__content`}>
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

export default DiscoveryHero;
