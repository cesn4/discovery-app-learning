import React, { FunctionComponent, ReactChild } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

const ClassicLayout: FunctionComponent<ClassicLayoutProps> = ({
    content,
}: ClassicLayoutProps) => {
    const className = 'classic-layout';
    return (
        <div className={className}>
            <Header />
            <div className={`${className}__content`}>{content}</div>
            <Footer />
        </div>
    );
};

interface ClassicLayoutProps {
    content?: ReactChild;
}

export default ClassicLayout;
