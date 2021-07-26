import React, { useState } from 'react'
import { Navbar, Nav, Card, Table, Form, Button, Col, Container } from 'react-bootstrap'
import './AddBook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusSquare, faSave, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
const AddBook = () => {

    let history = useHistory();

    const [book, setBook] = useState({

        title: "",
        author: "",
        isbnNumber: "",
        price: "",
        language: ""
    })
    const { title, author, isbnNumber, price, language } = book;

    const changeSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3006/books", book);
        history.push("/");
    }

    const changeTitle = e => {
        setBook({ title: e.target.value });
    }
    const changeAuthor = e => {
        setBook({ author: e.target.value });
    }
    const changeisbnNumber = e => {
        setBook({ isbnNumber: e.target.value });
    }
    const changePrice = e => {
        setBook({ price: e.target.value });
    }
    const changeLanguage = e => {
        setBook({ language: e.target.value });
    }
    return (
        <div>
            {/*NavBar*/}

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/chart">E-Book Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="float-right">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav className="justify-content-end">
                            <Nav.Item><Nav.Link href="/addBook">Store Add</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/storeList">Store List</Nav.Link></Nav.Item>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="navbar-right">
                    <Link to="/" className="nav-link" >
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </Link>
                </Nav>
            </Navbar>

            {/* List */}
            <Card className="border border-light bg-light text-dark">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add New Book</Card.Header>
                <Form id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" className="bg-dark text-white" placeholder="Enter Book Titel"
                                    value={title} onChange={changeTitle} required
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name="author" className="bg-dark text-white" placeholder="Enter Book Author"
                                    value={author} onChange={changeAuthor} required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>ISBN Number</Form.Label>
                                <Form.Control type="text" name="isbnNumber" className="bg-dark text-white" placeholder="Enter Book ISBN Number"
                                    value={isbnNumber} onChange={changeisbnNumber} required
                                />
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" className="bg-dark text-white" placeholder="Enter Book Price"
                                    value={price} onChange={changePrice} required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Language</Form.Label>
                                <Form.Control type="text" name="language" className="bg-dark text-white" placeholder="Enter Book Language"
                                    value={language} onChange={changeLanguage} required
                                />
                            </Form.Group>

                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "textAlign": "right" }}>
                        <Button variant="primary" type="submit" onSubmit={changeSubmit}><FontAwesomeIcon icon={faSave} />  Submit</Button>
                    </Card.Footer>
                </Form>
            </Card>

            {/*  
                  <div className="main-footer">
                    <div className="Tcontainer text-center">
                        <div className="row">
                            <p className="col-sm">
                                ©Copy 2021 | Book Store Inc | All Right Reserved
                            </p>
                        </div>
                    </div>
                </div>
            /*/}
            <Navbar fixed="bottom" bg="light" variant="dark">
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


export default AddBook;