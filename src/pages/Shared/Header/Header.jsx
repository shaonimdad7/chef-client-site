import React from 'react';
import './Header.css'
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import chef from '../../../assets/chef.png'
import './Header.css'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className='container_header'>
                <Container className='pt-4'>
                    <Row >
                        <Col md={3} sm={4}>
                            <div className='img_class'>
                                <img className='img-fluid' src={chef} alt="" />
                                <p className='mt-1 text-white'>{moment().format('ddd, Do MMMM, YYYY')}</p>
                            </div>
                        </Col>
                        <Col md={9} sm={8} >
                            <div className='nav_btn_div'>
                                <Navbar expand="lg nav_div">
                                    <Container>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mx-auto">
                                                {/* <Nav.Link className='nav_container' href="#home">HOME</Nav.Link> */}
                                                <Link className='nav_container' to="/home" href="#home">HOME</Link>
                                                <Nav.Link className='nav_container' href="#about">ABOUT</Nav.Link>
                                                <Nav.Link className='nav_container' href="#blog">BLOG</Nav.Link>
                                                <Nav.Link className='nav_container' href="#blog">LOGIN</Nav.Link>

                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                                <Button className='btn btn_custom mt-1'>Sign Up</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Header;