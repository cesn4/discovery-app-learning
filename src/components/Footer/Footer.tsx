import React, { FunctionComponent } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import FooterList from '~/components/FooterList';
import SocialBar from '~/components/SocialBar';

import './Footer.scss';

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__box">
                    <Row>
                        <Hidden sm>
                            <Col md={6} lg={1}>
                                <Logo light />
                            </Col>
                        </Hidden>
                        <Hidden sm>
                            <Col md={2} lg={1}>
                                <FooterList
                                    list={[
                                        { label: 'Home' },
                                        { label: 'Discovery' },
                                        { label: 'Photos' },
                                        { label: 'Contact' },
                                    ]}
                                />
                            </Col>
                        </Hidden>
                        <Col xs={6} md={2} lg={1}>
                            <FooterList
                                list={[
                                    { label: 'About' },
                                    { label: 'Help' },
                                    { label: 'Terms' },
                                    { label: 'Guidlines' },
                                ]}
                            />
                        </Col>
                        <Col xs={6} md={2} lg={3}>
                            <FooterList
                                list={[
                                    { label: 'Testimonials' },
                                    { label: 'Advertise' },
                                    { label: 'Integrations' },
                                    { label: 'Careers' },
                                ]}
                            />
                        </Col>
                        <Hidden sm>
                            <Col md={6} lg={3}>
                                <div className="footer__input-box">
                                    <Input label="Stay in touch with us for the freshest products!" />
                                </div>
                            </Col>
                        </Hidden>
                        <Col md={6} lg={3}>
                            <SocialBar />
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
