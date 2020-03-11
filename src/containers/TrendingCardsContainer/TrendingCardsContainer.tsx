import React, { FunctionComponent, Fragment, ReactChild } from 'react';
import { connect } from 'react-redux';
import { Col, Hidden } from 'react-grid-system';

import TrendingCard from '~/components/TrendingCard';
import { ApplicationState } from '~/store/storeTypes';
import { StoryPages } from '~/containers/StoriesContainer';
import { fetchStoryContent } from '~/utils';

fetchStoryContent();

const TrendingCardsContainer: FunctionComponent<StoryPages> = ({
    storyContent,
}: StoryPages) => {
    const renderTrendingCards: Array<ReactChild> = storyContent.map(
        (
            {
                id,
                paragraphSubtitle,
                backgroundImage,
                title,
            }: TrendingCardItems,
            index
        ) => {
            // ClassName generator
            let className = '';
            if (id === 1) {
                className = 'knight__trending-card -first';
            } else if (id === 2) {
                className = 'knight__trending-card -second';
            } else if (id === 3) {
                className = 'knight__trending-card -third';
            }
            console.log(className);
            // Hidden Generator
            let hiddenState = false;
            if (id === 3) {
                hiddenState = true;
            }
            console.log(hiddenState);
            //Route generation
            const route = '#/story/' + id;
            return (
                <Fragment key={index.toString()}>
                    <Hidden sm={hiddenState} md={hiddenState}>
                        <Col xs={12} md={6} lg={4}>
                            <div className={className}>
                                <TrendingCard
                                    href={route}
                                    subtitle={title}
                                    image={backgroundImage}
                                    primaryText={paragraphSubtitle}
                                    time="2m ago"
                                />
                            </div>
                        </Col>
                    </Hidden>
                </Fragment>
            );
        }
    );
    return <Fragment>{renderTrendingCards}</Fragment>;
};

const mapStateToProps = (state: ApplicationState): StoryPages => {
    return {
        storyContent: state.storyContent,
    };
};

interface TrendingCardItems {
    id: number;
    paragraphSubtitle: string;
    backgroundImage: string;
    title: string;
}

export default connect(mapStateToProps)(TrendingCardsContainer);
