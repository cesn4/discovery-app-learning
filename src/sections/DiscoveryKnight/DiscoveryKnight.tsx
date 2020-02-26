import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import AuthorNotes from '~/components/AuthorNotes';

import AuthorPhoto from '~/assets/img/author.jpg';
import './DiscoveryKnight.scss';

const DisocveryKNight: FunctionComponent = () => {
    const className = 'discovery-knight';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col>
                        <div className={`${className}__content`}>
                            <AuthorNotes
                                image={AuthorPhoto}
                                title="Phasellus eu nulla malesuada, luctus diam."
                                post="Dignissim rutrum ridiculus lacinia phasellus torquent ad aliquet, nisi dictum cubilia class habitasse commodo, semper potenti nec ac per egestas. Ac volutpat ullamcorper phasellus montes sollicitudin litora ridiculus mi conubia inceptos euismod odio curabitur, tortor eros porta venenatis facilisis quam blandit in ut lobortis consequat justo. Hac libero quisque tortor conubia iaculis. Nascetur himenaeos morbi gravida porta sapien justo aliquam pellentesque dapibus curae, cursus ultrices suspendisse cras ligula id aenean vulputate taciti, eleifend eros bibendum scelerisque lobortis venenatis nulla tristique tempus. Quisque eleifend vulputate."
                                time="2 min ago"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DisocveryKNight;
