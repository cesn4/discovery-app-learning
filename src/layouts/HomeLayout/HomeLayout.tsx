import React, { FunctionComponent, ReactChild } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

const HomeLayout: FunctionComponent<HomeLayoutProps> = ({
    content,
}: HomeLayoutProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'home-layout';
    return (
        <div className={className}>
            <Header />
            <div className={`${className}__content`}>{content}</div>
            <Footer />
        </div>
    );
};

interface HomeLayoutProps {
    content?: ReactChild;
}

export default HomeLayout;
