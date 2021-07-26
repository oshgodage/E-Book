import React, { Component } from 'react';
import { Col, Container, Button, Form, Row } from 'react-bootstrap';
import img5 from '../Images/user.png'
import './Login.css'
import img6 from '../Images/login.png';
import { Navbar, Nav } from 'react-bootstrap'
class Login extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="/">E-Book Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>


                <Container className="mt-5">
                    <Row>
                        <Col lg={4} md={6} sn={12} className="text-center mt-5 p-3">
                            <img className="icon-img" src={img5} alt="icon"></img>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="User Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary btn-block" type="submit" href="/chart"> Login</Button>
                            </Form>
                        </Col>
                        <Col lg={8} md={6} sn={12}>
                            <img className="w-100" src={img6} alt=""></img>
                        </Col>
                    </Row>
                </Container>

                <Navbar  bg="light" variant="dark">
                    <Container>
                        <Col lg={12} className="text-center text-muted">
                            <div>
                                ©Copy 2021 | E-Book Store Inc | All Right Reserved
                            </div>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Login;