import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={9}>sm=9</Col>
                    <Col sm={3}>sm=3</Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;