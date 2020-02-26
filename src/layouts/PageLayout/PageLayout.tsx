import React, { FunctionComponent, ReactChild } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import './PageLayout.scss';

const PageLayout: FunctionComponent<PageLayoutProps> = ({
    content,
}: PageLayoutProps) => {
    const className = 'page-layout';
    return (
        <div className={className}>
            <Header />
            <div className={`${className}__content`}>{content}</div>
            <Footer />
        </div>
    );
};

interface PageLayoutProps {
    content?: ReactChild;
}

export default PageLayout;
