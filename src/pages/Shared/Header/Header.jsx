import React, { useContext } from 'react';
import './Header.css'
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import chef from '../../../assets/chef.png'
import './Header.css'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.error(error));
    }

    return (
        <div >
            <div className='container_header'>
                <Container className='pt-4 '>
                    <Row className='custom_container'>
                        <div className='row_custom'>
                            <Col md={6}>
                                <div className='img_class'>
                                    <img className='img-fluid' src={chef} alt="" />
                                    <p className='mt-1 text-white'>{moment().format('ddd, Do MMMM, YYYY')}</p>
                                </div>
                            </Col>
                            <Col md={6}  >
                                <div className='nav_btn_div'>
                                    <Navbar expand="lg nav_div">
                                        <Container>
                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                            <Navbar.Collapse id="basic-navbar-nav ">
                                                <Nav className="me-auto">
                                                    <Nav.Link className='' href="#home">
                                                        <Link className='nav_container' to="/home" href="#home">HOME</Link>
                                                    </Nav.Link>
                                                    <Nav.Link className='' href="#about">
                                                        <Link className='nav_container' to="/about" href="#home">ABOUT</Link>
                                                    </Nav.Link>
                                                    <Nav.Link className='' href="#blog">
                                                        <Link className='nav_container' to="/blog" href="#home">BLOG</Link>
                                                    </Nav.Link>

                                                    <Nav.Link className='' href="#SignUp">
                                                        <Link className='nav_container' to="/signup" href="#signup">SIGNUP</Link>
                                                    </Nav.Link>

                                                    <Nav.Link className='' href="#SignUp">
                                                        <Link className='nav_container' to="/login" href="#signup">LOGIN</Link>
                                                    </Nav.Link>


                                                </Nav>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                </div>
                            </Col>
                            <Col className='last_child' md={3}>
                            </Col>
                        </div>
                        <div>
                            {user
                                && <img className='img_dispaly' src={user.photoURL
                                } alt="" />
                            }


                            {user &&
                                <span className='custom_welcome text-white '>
                                    <p>{user.displayName}</p>
                                    <p>{user.email}</p>
                                    <button className='btn btn_custom' onClick={handleLogOut}>LogOut</button>
                                </span>}

                        </div>
                    </Row>
                </Container >
            </div >
        </div >
    );
};

export default Header;