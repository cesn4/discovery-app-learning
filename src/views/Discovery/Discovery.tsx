import React, { FunctionComponent, Fragment } from 'react';

import DiscoveryLayout from '~/layouts/DsicoveryLayout';
import DiscoveryKnight from '~/sections/DiscoveryKnight';
import DiscoveryHero from '~/sections/DiscoveryHero';

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
                    </Fragment>
                }
            />
        </div>
    );
};

export default Discovery;
