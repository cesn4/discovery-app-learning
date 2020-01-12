import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import SectionNavigation from '~/components/SectionNavigation';
import PostInfo from '~/components/PostInfo';
import SimpleButton from '~/components/SimpleButton';

import '~/assets/mount.jpg';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <Container fluid>
                <Row >
                    <Col sm={12} md={12} xl={7} className="hero__background">
                        <div className="hero__news">
                            <div className="hero__news-box">
                                <div className="hero__title-box">
                                    <span className="hero_title">WORLD NEWS</span>
                                </div>
                                <span className="hero__subtitle">Amazing places in America to visit.</span>
                                <p className="hero__paragraph">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
                                <SimpleButton title="LEARN MORE" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} xl={5}>
                        <SectionNavigation title="Discoveries" />
                        <div className="hero__posts">
                            <PostInfo title="Travel" subtitle="Article title" primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…" time="2m ago"/>
                            <PostInfo title="Technology" subtitle="Article title" primaryText="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…" time="1h ago"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
