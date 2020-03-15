import React, { FunctionComponent, Fragment, useEffect } from 'react';

import PageLayout from '~/layouts/PageLayout';
import StoryHero, { StoryHeroProps } from '~/sections/StoryHero';
import StoryKnight, { StoryKnightProps } from '~/sections/StoryKnight';

const Story: FunctionComponent<StoryPropsCombined> = ({
    title,
    authorName,
    authorPhoto,
    background,
    paragraph,
    paragraphSubtitle,
    paragraphTitle,
    comments,
    videoURL,
}: StoryPropsCombined) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="story">
            <PageLayout
                content={
                    <Fragment>
                        <StoryHero
                            title={title}
                            authorName={authorName}
                            authorPhoto={authorPhoto}
                            background={background}
                        />
                        <StoryKnight
                            paragraph={paragraph}
                            paragraphSubtitle={paragraphSubtitle}
                            paragraphTitle={paragraphTitle}
                            comments={comments}
                            videoURL={videoURL}
                        />
                    </Fragment>
                }
            />
        </div>
    );
};

type StoryPropsCombined = StoryHeroProps & StoryKnightProps;

export default Story;
