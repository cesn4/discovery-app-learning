import React, { FunctionComponent, Fragment } from 'react';

import DiscoveryLayout from '~/layouts/DsicoveryLayout';
import DiscoveryKnight from '~/sections/DiscoveryKnight';
import DiscoveryHero from '~/sections/DiscoveryHero';
import DiscoveryParagraph from '~/sections/DiscoveryParagraph';

import Mountain from '~/assets/img/DiscoveryMountain.jpg';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <DiscoveryLayout
                content={
                    <Fragment>
                        <DiscoveryHero background={Mountain} />
                        <DiscoveryKnight />
                        <DiscoveryParagraph />
                    </Fragment>
                }
            />
        </div>
    );
};

export default Discovery;
