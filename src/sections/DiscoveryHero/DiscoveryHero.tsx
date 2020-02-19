import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import DiscoveryTitle from '~/components/DiscoveryTitle';

import Dude from '~/assets/img/dude.jpg';

const DiscoveryHero: FunctionComponent = () => {
    const className = 'discovery-hero';
    return (
        <div className={className}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col>
                            <DiscoveryTitle
                                title="DISCOVERY"
                                subtitle="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto vidit."
                                image={Dude}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default DiscoveryHero;
