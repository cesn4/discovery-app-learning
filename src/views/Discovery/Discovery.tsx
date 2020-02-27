import React, { FunctionComponent } from 'react';

import PageLayout from '~/layouts/PageLayout';
import DiscoveryParagraph from '~/sections/DiscoveryParagraph';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <PageLayout content={<DiscoveryParagraph />} />
        </div>
    );
};

export default Discovery;
