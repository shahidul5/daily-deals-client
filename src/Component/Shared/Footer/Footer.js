import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="d-flex align-items-center bg-dark py-5 text-white mt-5">
            <Container>
                <Row>
                    <Col lg={4} sm={6} className="my-auto">
                        <p>&copy; {new Date().getFullYear()} ema-john</p>
                        <p>All right reserved.</p>
                    </Col>
                    <Col lg={2} sm={4}>
                        {/* <ul >
                            <p><strong>ABOUT US</strong></p>
                            <li>
                                <Link to={`/#`}>About us</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Store location</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Contact</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Orders tracking</Link>
                            </li>
                        </ul> */}
                    </Col>
                    <Col lg={2} sm={6}>
                        {/* <ul >
                            <p><strong>ABOUT US</strong></p>
                            <li className="text-decoration-none">
                                <Link to={`/#`}>About us</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Store location</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Contact</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Orders tracking</Link>
                            </li>
                        </ul> */}
                    </Col>
                    <Col lg={2} sm={6}>
                        <ul style={{listStyleType:'none'}}>
                            <li className="text-decoration-none">
                                <Link to={`/myAccount`} style={{color:'white'}}>My Account</Link>
                            </li>
                            <li>
                                <Link to={`/sellerPortal`} style={{color:'white'}}>Seller Portal</Link>
                            </li>
                            <li>
                                <Link to={`/superAdmin`} style={{color:'white'}}>Super Admin</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;