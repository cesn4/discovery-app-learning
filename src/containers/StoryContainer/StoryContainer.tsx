import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import StoryHero from '~/sections/StoryHero';
import StoryKnight from '~/sections/StoryKnight';
import { fetchStoryContent } from '~/utils';
import { ApplicationState } from '~/store/storeTypes';
import { StoryConentItems } from '~/store/storeTypes';

fetchStoryContent();

const StoryContainer: FunctionComponent<MappedProps> = ({
    storyContent,
}: MappedProps) => {
    const story = storyContent;
    console.log(story.paragraphComment[0].commentAuthorImage);
    const renderStory = story ? (
        <Fragment>
            <StoryHero
                title={story.title}
                authorName={story.authorName}
                authorPhoto={story.authorImage}
                background={story.backgroundImage}
            />
            <StoryKnight
                paragraphTitle={story.paragraphTitle}
                paragraph={story.paragraph}
                paragraphSubtitle={story.paragraphSubtitle}
                // Pass an array to component //
                commentAuthorName={story.paragraphComment[0].commentAuthor}
                comment={story.paragraphComment[0].commentText}
                commentImage={story.paragraphComment[0].commentAuthorImage}
                commentAuthorNameSecond=""
                commentImageSecond=""
                commentSecond=""
                videoURL={story.videoURL}
            />
        </Fragment>
    ) : (
        <Fragment>
            <StoryHero title="" authorName="" authorPhoto="" background="" />
            <StoryKnight
                paragraphTitle=""
                paragraph=""
                paragraphSubtitle=""
                commentAuthorName=""
                comment=""
                commentImage=""
                commentAuthorNameSecond=""
                commentImageSecond=""
                commentSecond=""
                videoURL=""
            />
        </Fragment>
    );
    return <Fragment>{renderStory}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): MappedProps => {
    return {
        storyContent: state.storyContent,
    };
};

interface MappedProps {
    storyContent: StoryConentItems;
}

export default connect(mapStateToProps)(StoryContainer);
