import React, { FunctionComponent } from 'react';

import DiscoveryLayout from '~/layouts/DsicoveryLayout';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <DiscoveryLayout />
        </div>
    );
};

export default Discovery;
