import React, { FunctionComponent, ReactChild } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Video from '~/components/Video';
import Article from '~/components/Article';
import AuthorPost from '~/components/AuthorPost';

import './StoryKnight.scss';

const StoryKnight: FunctionComponent<StoryKnightProps> = ({
    paragraphTitle,
    paragraph,
    paragraphSubtitle,
    comments,
    videoURL,
}: StoryKnightProps) => {
    const className = 'story-knight';
    const renderComments: Array<ReactChild> = comments.map(
        (
            { commentAuthor, commentText, commentAuthorImage }: CommentObject,
            index
        ) => {
            return (
                <div
                    key={index.toString()}
                    className={`${className}__author-posts`}
                >
                    <AuthorPost
                        name={commentAuthor}
                        post={commentText}
                        time="2m ago"
                        image={commentAuthorImage}
                    />
                </div>
            );
        }
    );
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
                            {renderComments}
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
    videoURL: string;
    comments: Array<CommentObject>;
}

interface CommentObject {
    commentAuthor: string;
    commentAuthorImage: string;
    commentText: string;
}
export default StoryKnight;
