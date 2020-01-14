import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <div className="footer__text">
                        <Col sm={5}>
                        <div>
                            <ul className="footer__list-two">
                                <li>ABOUT</li>
                                <li>HELP</li>
                                <li>TERMS</li>
                                <li>GUIDLINES</li>
                            </ul>
                        </div>
                        </Col>
                        <Col sm={5}>
                            <ul className="footer__list-three">
                                <li>TESTIMONIALS</li>
                                <li>ADVERTISE</li>
                                <li>INTEGRATIONS</li>
                                <li>CAREERS</li>
                            </ul>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className="footer__media">
                            <img src="#" alt=""/>
                            <img src="#" alt=""/>
                            <img src="#" alt=""/>
                            <img src="#" alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
