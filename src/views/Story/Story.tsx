import React, { FunctionComponent, Fragment } from 'react';

import PageLayout from '~/layouts/PageLayout';
import StoryContainer from '~/containers/StoryContainer';

const Story: FunctionComponent = () => {
    return (
        <div className="story">
            <PageLayout
                content={
                    <Fragment>
                        <StoryContainer />
                    </Fragment>
                }
            />
        </div>
    );
};

export default Story;
