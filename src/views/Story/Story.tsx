import React, { FunctionComponent } from 'react';

import Header from '~/components/Header';
import StoryHero from '~/sections/StoryHero';
import Footer from '~/components/Footer';

const Story: FunctionComponent = () => {
    return (
        <div className="story">
            <Header />
            <StoryHero />
            <Footer />
        </div>
    );
};

export default Story;
