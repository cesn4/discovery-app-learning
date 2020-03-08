import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Paragraph.scss';

const Paragraph: FunctionComponent<ParagraphProps> = ({
    image,
    paragraph,
    comment,
}: ParagraphProps) => {
    const className = 'discovery-paragraph';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <img
                            src={image}
                            className={`${className}__image`}
                        ></img>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p className={`${className}__paragraph`}>{paragraph}</p>
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <span className={`${className}__comment`}>
                            {comment}
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

interface ParagraphProps {
    image: string;
    paragraph: string;
    comment: string;
}

export default Paragraph;
