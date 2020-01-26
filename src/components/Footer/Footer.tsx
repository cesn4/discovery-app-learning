import React, { FunctionComponent } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Logo from '~/components/Logo';
import Input from '~/components/Input';

import instagram from '~/assets/img/instagram.png';
import facebook from '~/assets/img/facebook.png';
import twitter from '~/assets/img/twitter.png';
import web from '~/assets/img/web.png';
import './Footer.scss';

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Hidden sm>
                        <Col md={6} lg={1}>
                            <Logo light />
                        </Col>
                    </Hidden>
                    <Hidden sm>
                        <Col md={2} lg={1}>
                            <ul className="footer__columns">
                                <li className="footer__item">Home</li>
                                <li className="footer__item">Discovery</li>
                                <li className="footer__item">Photos</li>
                                <li className="footer__item">Contact</li>
                            </ul>
                        </Col>
                    </Hidden>
                    <Col xs={6} md={2} lg={1}>
                        <ul className="footer__columns">
                            <li className="footer__item">About</li>
                            <li className="footer__item">Help</li>
                            <li className="footer__item">Terms</li>
                            <li className="footer__item">Guidlines</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={2} lg={3}>
                        <ul className="footer__columns">
                            <li className="footer__item">Testimonials</li>
                            <li className="footer__item">Advertise</li>
                            <li className="footer__item">Integrations</li>
                            <li className="footer__item">Careers</li>
                        </ul>
                    </Col>
                    <Hidden sm>
                        <Col md={6} lg={3}>
                            <div className="footer__input-box">
                                <Input />
                            </div>
                        </Col>
                    </Hidden>
                    <Col md={6} lg={3}>
                        <div className="footer__media">
                            <a href="#">
                                <img
                                    src={instagram}
                                    alt=""
                                    className="footer__media-img"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={twitter}
                                    alt=""
                                    className="footer__media-img"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={facebook}
                                    alt=""
                                    className="footer__media-img"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={web}
                                    alt=""
                                    className="footer__media-img"
                                />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
