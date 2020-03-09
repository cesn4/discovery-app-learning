import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Video from '~/components/Video';
import Article from '~/components/Article';
import AuthorPost from '~/components/AuthorPost';

import './StoryKnight.scss';

const StoryKnight: FunctionComponent<StoryKnightProps> = ({
    paragraphTitle,
    paragraph,
    paragraphSubtitle,
    commentAuthorName,
    commentImage,
    comment,
    commentAuthorNameSecond,
    commentImageSecond,
    commentSecond,
    videoURL,
}: StoryKnightProps) => {
    const className = 'story-knight';
    return (
        <div className={className}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <div className={`${className}__article`}>
                                <Article
                                    title={paragraphTitle}
                                    content={paragraph}
                                    subtitle={paragraphSubtitle}
                                    time="3h ago by Worldnews"
                                />
                            </div>
                        </Col>
                        <div className={`${className}__separator`}>&nbsp;</div>
                        <Col xs={12} md={12} lg={6}>
                            <div className={`${className}__author-posts`}>
                                <AuthorPost
                                    name={commentAuthorName}
                                    post={comment}
                                    time="2m ago"
                                    image={commentImage}
                                />
                            </div>
                            <div className={`${className}__author-posts`}>
                                <AuthorPost
                                    name={commentAuthorNameSecond}
                                    post={commentSecond}
                                    time="2m ago"
                                    image={commentImageSecond}
                                />
                            </div>
                            <div className={`${className}__video`}>
                                <Video url={videoURL} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

interface StoryKnightProps {
    paragraphTitle: string;
    paragraph: string;
    paragraphSubtitle: string;
    commentAuthorName: string;
    commentImage: string;
    comment: string;
    commentAuthorNameSecond: string;
    commentImageSecond: string;
    commentSecond: string;
    videoURL: string;
}

export default StoryKnight;
