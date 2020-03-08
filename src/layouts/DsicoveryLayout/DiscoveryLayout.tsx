import React, { FunctionComponent, ReactChild } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ExtraNavigation from '~/components/ExtraNavigation';

import './DiscoveryLayout.scss';

const DiscoveryLayout: FunctionComponent<DiscoveryLayoutProps> = ({
    content,
}: DiscoveryLayoutProps) => {
    const className = 'discovery-layout';
    return (
        <div className={className}>
            <div className={`${className}__header`}>
                <Header />
            </div>
            <div className={`${className}__content`}>
                <ExtraNavigation label="Discovery" />
                {content}
            </div>
            <Footer />
        </div>
    );
};

interface DiscoveryLayoutProps {
    content?: ReactChild;
}

export default DiscoveryLayout;
