import React, { FunctionComponent } from 'react';

import Icon from '~/components/Icons';

import './NextStory.scss';

const NextStory: FunctionComponent<NextStoryProps> = ({
    subtitle,
    paragraph,
}: NextStoryProps) => {
    const className = 'next-story';
    return (
        <div className={className}>
            <a href="#/story" className={`${className}__anchor`}>
                <div className={`${className}__text-box`}>
                    <span className={`${className}__label`}>NEXT STORY</span>
                    <span className={`${className}__subtitle`}>{subtitle}</span>
                </div>
                <Icon name="rightArrow" className={`${className}__icon`} />
            </a>
            <span className={`${className}__paragraph`}>{paragraph}</span>
        </div>
    );
};

export interface NextStoryProps {
    subtitle: string;
    paragraph: string;
}

export default NextStory;
