import React, { FunctionComponent } from 'react';

import SVGIcon from '~/components/SVGIcon';

import './NextStory.scss';

const NextStory: FunctionComponent<NextStoryProps> = ({
    subtitle,
}: NextStoryProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'next-story';
    return (
        <div className={className}>
            <a href="#/story" className={`${className}__anchor`}>
                <div className={`${className}__text-box`}>
                    <span className={`${className}__label`}>NEXT STORY</span>
                    <span className={`${className}__subtitle`}>{subtitle}</span>
                </div>
                <SVGIcon name="rightArrow" />
            </a>
        </div>
    );
};

interface NextStoryProps {
    subtitle: string;
}

export default NextStory;
