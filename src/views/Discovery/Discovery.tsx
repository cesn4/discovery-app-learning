import React, { FunctionComponent } from 'react';

import DiscoveryLayout from '~/layouts/DsicoveryLayout';
import DiscoveryKnight from '~/sections/DiscoveryKnight';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <DiscoveryLayout content={<DiscoveryKnight />} />
        </div>
    );
};

export default Discovery;
