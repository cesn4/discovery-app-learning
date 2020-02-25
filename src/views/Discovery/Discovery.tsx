import React, { FunctionComponent, Fragment } from 'react';

import PageLayout from '~/layouts/PageLayout';
import DiscoveryHero from '~/sections/DiscoveryHero';
import DiscoverySearch from '~/sections/DiscoverySearch';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <PageLayout
                content={
                    <Fragment>
                        <DiscoveryHero />
                        <DiscoverySearch />
                    </Fragment>
                }
            />
        </div>
    );
};

export default Discovery;
