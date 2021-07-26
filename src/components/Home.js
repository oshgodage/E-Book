import React, { Component } from 'react';
import './Home.css';
import { Carousel, Card, CardGroup, Nav, Navbar, Container, Col } from 'react-bootstrap'
import img1 from '../Images/store1.jpg'
import img2 from '../Images/store2.jpg'
import img3 from '../Images/store3.jpg'
import img4 from '../Images/vision.jpg'
import img5 from '../Images/team.jpg'
import img6 from '../Images/online.png'
import img7 from '../Images/store4.jpg'

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand >E-Book Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="float-right">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav className="justify-content-end">
                                <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="First slide" />
                        <Carousel.Caption>
                            <br />
                            <h3>E-Book Store</h3>
                            <p>“There is nothing like the smell of a bookstore. If you ask me,
                                it’s actually a combination of smells: part library, part new book, and part expectation for what you might find.” – Kathryn Fitzmaurice</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />

                        <Carousel.Caption>
                            <h3>E-Book Store</h3>
                            <p>“Bookshops are dreams built of wood and paper.
                                They are time travel and escape and knowledge and power. They are, simply put, the best of places.” – Jen Campbell</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>E-Book Store</h3>
                            <p>“Every book in a bookstore is a fresh beginning. Every book is the next iteration of a very old story. Every bookstore, therefore,
                                is like a safe-deposit box for civilization.” – Liam Callanan</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
                <div class="tcontainer">
                    <div class="text-center">
                        <h1>Resources for the New Millennium</h1>
                    </div>
                </div>
                <br/>
                <CardGroup>
                    <Card border="light " className="text-center">
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title >Our Vision</Card.Title>
                            <Card.Text>
                            Our vision is to become the largest and leading book distributor 
                            in Sri Lanka and to be the bookselling household name in the all around the Region.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card border="light" className="text-center">
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Team</Card.Title>
                            <Card.Text>
                            You can relay on our amazing features list and also our customer services 
                            will be great experience.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card border="light" className="text-center">
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>Our Stores</Card.Title>
                            <Card.Text>
                            E Book Store operates two stores in Sri Lanka,
                             Colombo, and one in nearby Kaluthara. 
                             We also have a number of warehouses and book sources locally and nationally.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

                <Navbar bg="light" variant="dark">
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

export default Home;