import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Logo from '~/components/Logo';

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
                        <Col md={6}>
                            <Logo />
                        </Col>
                    </Hidden>
                    <Hidden xs>
                        <Col md={1.5}>
                            <ul className="footer__columns">
                                <li className="footer__item">Home</li>
                                <li className="footer__item">Discovery</li>
                                <li className="footer__item">Photos</li>
                                <li className="footer__item -lastItem">Contact</li>
                            </ul>
                        </Col>
                    </Hidden>
                    <Col xs={6} md={1.5} xl={4} >
                        <ul className="footer__columns">
                            <li className="footer__item">About</li>
                            <li className="footer__item">Help</li>
                            <li className="footer__item">Terms</li>
                            <li className="footer__item -lastItem">Guidlines</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3} xl={4} >
                        <ul className="footer__columns">
                            <li className="footer__item">Testimonials</li>
                            <li className="footer__item">Advertise</li>
                            <li className="footer__item">Integrations</li>
                            <li className="footer__item -lastItem">Careers</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="footer__media">
                            <a href="#" ><img src={instagram} alt="" className="footer__img"/></a>
                            <a href="#" ><img src={twitter} alt="" className="footer__img"/></a>
                            <a href="#" ><img src={facebook} alt="" className="footer__img"/></a>
                            <a href="#"><img src={web} alt="" className="footer__img"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
