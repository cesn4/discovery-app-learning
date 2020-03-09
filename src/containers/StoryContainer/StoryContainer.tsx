import React, { FunctionComponent, Fragment } from 'react';

import StoryHero from '~/sections/StoryHero';
import StoryKnight from '~/sections/StoryKnight';
import { connect } from 'react-redux';
import { fetchStoryContent } from '~/utils';
import { ApplicationState } from '~/store/storeTypes';
import { StoryConentItems } from '~/store/storeTypes';

fetchStoryContent();

const StoryContainer: FunctionComponent<MappedProps> = ({
    storyContent,
}: MappedProps) => {
    console.log(storyContent[0]);
    const renderStory = storyContent[0] ? (
        <Fragment>
            <StoryHero title="" authorName="" authorPhoto="" />
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
    ) : (
        <Fragment>
            <StoryHero title="" authorName="" authorPhoto="" />
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
    storyContent: Array<StoryConentItems>;
}

export default connect(mapStateToProps)(StoryContainer);
