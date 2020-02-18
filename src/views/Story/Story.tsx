import React, { FunctionComponent, Fragment } from 'react';

import StoryHero from '~/sections/StoryHero';
import StoryKnight from '~/sections/StoryKnight';
import PageLayout from '~/layouts/PageLayout';

const Story: FunctionComponent = () => {
    return (
        <div className="story">
            <PageLayout
                content={
                    <Fragment>
                        <StoryHero />
                        <StoryKnight />
                    </Fragment>
                }
            />
        </div>
    );
};

export default Story;
