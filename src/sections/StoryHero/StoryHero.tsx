import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import IconLabel from '~/components/IconLabel';
import Author from '~/components/Author';
import NextStory from '~/components/NextStory';
import AuthorPhoto from '~/assets/img/author.jpg';

import '~/assets/img/jungle.jpg';
import './StoryHero.scss';

const StoryHero: FunctionComponent = () => {
    const className = 'story-hero';

    return (
        <div className={className}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className={`${className}__title`}>
                                AMAZING PLACES IN AMERICA TO VISIT
                            </div>
                        </Col>
                        <Col>
                            <div className={`${className}__icon-box`}>
                                <div className={`${className}__icon-label`}>
                                    <IconLabel label="TRAVELGUIDE" name="web" />
                                </div>
                                <div className={`${className}__icon-label`}>
                                    <IconLabel
                                        label="WORLD NEWS"
                                        name="topic"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={`${className}__bottom-row`}>
                                <Author
                                    image={AuthorPhoto}
                                    name="by Steven Voorhees"
                                />
                                <NextStory
                                    subtitle="Morbi eleifend a libero"
                                    paragraph="Quisque viverra interdum velit, et cursus magna sagittis in. In dui dui."
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default StoryHero;
