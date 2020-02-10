import React, { FunctionComponent } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Story: FunctionComponent = () => {
    return (
        <div className="story">
            <Header />
            <Footer />
        </div>
    );
};

export default Story;
