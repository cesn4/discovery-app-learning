import React, { FunctionComponent } from 'react';

import PageLayout from '~/layouts/PageLayout';
import ExtraNavigation from '~/components/ExtraNavigation';

const Discovery: FunctionComponent = () => {
    const className = 'discovery';
    return (
        <div className={className}>
            <PageLayout content={<ExtraNavigation label="Discovery" />} />
        </div>
    );
};

export default Discovery;
