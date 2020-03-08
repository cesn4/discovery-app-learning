import React, { FunctionComponent, Fragment } from 'react';

import PageLayout from '~/layouts/PageLayout';
import DiscoveryHero from '~/sections/DiscoveryHero';

import Mountain from '~/assets/img/DiscoveryMountain.jpg';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <PageLayout
                content={
                    <Fragment>
                        <DiscoveryHero background={Mountain} />
                    </Fragment>
                }
            />
        </div>
    );
};

export default Discovery;
