import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Logo from '~/components/Logo';

import send from '~/assets/img/send.png';
import instagram from '~/assets/img/instagram.png';
import facebook from '~/assets/img/facebook.png';
import twitter from '~/assets/img/twitter.png';
import web from '~/assets/img/web.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Hidden xs>
                        <Col md={6} xl={1}>
                            <Logo footer/>
                        </Col>
                    </Hidden>
                    <Hidden xs>
                        <Col md={2} xl={1}>
                            <ul className="footer__columns">
                                <li className="footer__item">Home</li>
                                <li className="footer__item">Discovery</li>
                                <li className="footer__item">Photos</li>
                                <li className="footer__item">Contact</li>
                            </ul>
                        </Col>
                    </Hidden>
                    <Col xs={6} md={2} xl={1} >
                        <ul className="footer__columns">
                            <li className="footer__item">About</li>
                            <li className="footer__item">Help</li>
                            <li className="footer__item">Terms</li>
                            <li className="footer__item">Guidlines</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={2} xl={3} >
                        <ul className="footer__columns">
                            <li className="footer__item">Testimonials</li>
                            <li className="footer__item">Advertise</li>
                            <li className="footer__item">Integrations</li>
                            <li className="footer__item">Careers</li>
                        </ul>
                    </Col>
                    <Hidden xs>
                        <Col md={6} xl={3}>
                            <div className="footer__input-box">
                                <div className="footer__input-border">
                                    <input className="footer__input" placeholder="Email"/>
                                    <a href="#" className="footer__button-anchor">
                                        <div className="footer__input-button">
                                            <img src={send} className="footer__button-img"/>
                                        </div>
                                    </a>
                                </div>
                                <span className="footer__input-line">Stay in touch with us for the freshest products!</span>
                            </div>
                        </Col>
                    </Hidden>
                    <Col md={6} xl={3}>
                        <div className="footer__media">
                            <a href="#" ><img src={instagram} alt="" className="footer__media-img"/></a>
                            <a href="#" ><img src={twitter} alt="" className="footer__media-img"/></a>
                            <a href="#" ><img src={facebook} alt="" className="footer__media-img"/></a>
                            <a href="#"><img src={web} alt="" className="footer__media-img"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
