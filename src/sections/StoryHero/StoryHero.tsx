import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import IconLabel from '~/components/IconLabel';
import Author from '~/components/Author';

import './StoryHero.scss';

import AuthorPhoto from '~/assets/img/author.jpg';
import '~/assets/img/jungle.jpg';

const StoryHero: FunctionComponent = () => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'story-hero';

    return (
        <div className={className}>
            <Container>
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
                                <IconLabel label="WORLD NEWS" name="topic" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Author image={AuthorPhoto} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StoryHero;
