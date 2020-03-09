import React, { FunctionComponent, Fragment } from 'react';

import StoryHero from '~/sections/StoryHero';
import StoryKnight from '~/sections/StoryKnight';
import { connect } from 'react-redux';
import { fetchStoryContent } from '~/utils';

fetchStoryContent();

const StoryContainer: FunctionComponent<MappedProps> = ({
    storyContent,
}: MappedProps) => {
    // console.log(storyContent);
    console.log(storyContent);
    console.log(storyContent.title);
    console.log(storyContent.paragraph);
    const renderStory = storyContent ? (
        <Fragment>
            <StoryHero
                title={storyContent.title}
                authorName=""
                authorPhoto=""
            />
            <StoryKnight
                paragraphTitle={storyContent.paragraphTitle}
                paragraph={storyContent.paragraph}
                paragraphSubtitle={storyContent.paragraphSubtitle}
                commentAuthorName=""
                comment=""
                commentImage=""
                commentAuthorNameSecond=""
                commentImageSecond=""
                commentSecond=""
                videoURL={storyContent.videoURL}
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

interface ApplicationState {
    storyContent: StoryConentItems;
}

interface MappedProps {
    storyContent: StoryConentItems;
}

interface StoryConentItems {
    title: string;
    paragraphTitle: string;
    paragraph: string;
    paragraphSubtitle: string;
    videoURL: string;
    author: AuhtorProfile;
    comments: Array<AuthorComment>;
    backgroundImage: string;
}

interface AuhtorProfile {
    name: string;
    profile: string;
}

interface AuthorComment {
    name: string;
    comment: string;
    profile: string;
}

export default connect(mapStateToProps)(StoryContainer);
