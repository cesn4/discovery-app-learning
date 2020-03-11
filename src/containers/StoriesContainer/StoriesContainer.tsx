import React, { FunctionComponent, Fragment, ReactChild } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { ApplicationState, StoryContentItems } from '~/store/storeTypes';
import Story from '~/views/Story';
import { fetchStoryContent } from '~/utils';

fetchStoryContent();

const StoriesContainer: FunctionComponent<StoryPages> = ({
    storyContent,
}: StoryPages) => {
    const renderStoryPages: Array<ReactChild> = storyContent.map(
        (
            {
                id,
                title,
                paragraphTitle,
                paragraph,
                paragraphSubtitle,
                authorName,
                authorImage,
                videoURL,
                backgroundImage,
                paragraphComment,
            }: StoryContentItems,
            index
        ) => {
            const route = '/story/' + id;
            console.log(route);
            return (
                <Route exact path={route} key={index.toString()}>
                    <Story
                        title={title}
                        paragraphTitle={paragraphTitle}
                        paragraph={paragraph}
                        paragraphSubtitle={paragraphSubtitle}
                        authorName={authorName}
                        authorPhoto={authorImage}
                        videoURL={videoURL}
                        background={backgroundImage}
                        comments={paragraphComment}
                    />
                </Route>
            );
        }
    );
    return <Fragment>{renderStoryPages}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): StoryPages => {
    return {
        storyContent: state.storyContent,
    };
};

export interface StoryPages {
    storyContent: Array<StoryContentItems>;
}

export default connect(mapStateToProps)(StoriesContainer);
