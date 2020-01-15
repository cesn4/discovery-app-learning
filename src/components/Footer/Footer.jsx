import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

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
                    <Col xs={6} md={6} xl={4} >
                        <ul className="footer__columns">
                            <li className="footer__item">ABOUT</li>
                            <li className="footer__item">HELP</li>
                            <li className="footer__item">TERMS</li>
                            <li className="footer__item -lastItem">GUIDLINES</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={6} xl={4} >
                        <ul className="footer__columns">
                            <li className="footer__item">TESTIMONIALS</li>
                            <li className="footer__item">ADVERTISE</li>
                            <li className="footer__item">INTEGRATIONS</li>
                            <li className="footer__item -lastItem">CAREERS</li>
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
