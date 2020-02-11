import React, { FunctionComponent } from 'react';

import SVGIcon from '~/components/SVGIcon';

import './NextStory.scss';

const NextStory: FunctionComponent = () => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'next-story';
    return (
        <div className={className}>
            <a href="#/story" className={`${className}__anchor`}>
                <span className={`${className}__label`}>NEXT STORY</span>
                <SVGIcon name="rightArrow" />
            </a>
        </div>
    );
};

export default NextStory;
