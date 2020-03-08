import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Author from '~/components/Author';
import Article from '../Article';

import './AuthorNotes.scss';

const AuthorNotes: FunctionComponent<AuthorNotesProps> = ({
    image,
    title,
    post,
    time,
}: AuthorNotesProps) => {
    const className = 'author-notes';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <div className={`${className}__title-box`}>
                            <Author image={image} big />
                            <span className={`${className}__title`}>
                                {title}
                            </span>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <Article content={post} time={time} notes />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export interface AuthorNotesProps {
    image: string;
    title: string;
    post: string;
    time: string;
}

export default AuthorNotes;
