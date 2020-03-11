import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import AuthorNotes from '~/components/AuthorNotes';
import Separator from '~/components/Separator';

import './DiscoveryKnight.scss';

const DiscoveryKnight: FunctionComponent<DiscoveryKnightProps> = ({
    noteAuthorImage,
    noteTitle,
    notePost,
}: DiscoveryKnightProps) => {
    const className = 'discovery-knight';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className={`${className}__content`}>
                            <Separator />
                            <AuthorNotes
                                image={noteAuthorImage}
                                title={noteTitle}
                                post={notePost}
                                time="2 min ago"
                            />
                            <Separator />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export interface DiscoveryKnightProps {
    noteAuthorImage: string;
    noteTitle: string;
    notePost: string;
}

export default DiscoveryKnight;
