import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Card, Table, Col, Container } from 'react-bootstrap'
import { } from '@fortawesome/fontawesome-svg-core'
import { faList, faEdit, faTrash, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const StoreList = () => {

    const [books, setBook] = useState([]);

    useEffect(() => {
        console.log("Hii friend");
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:3006/books");
        setBook(result.data);
    }
    const deleteUser = async id => {
        await axios.delete('http://localhost:3006/books/${id}');
        loadBooks();
    }
    return (
        <div>
            {/* NavBar */}
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
            <br />
            {/* Table */}
            <Card className={"border border-dark bg-light text-white"}>
                <Card.Header className="bg-dark"><FontAwesomeIcon icon={faList} /> Book List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped varient="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN Number</th>
                                <th>Price</th>
                                <th>Language </th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.isbnNumber}</td>
                                        <td>{book.price}</td>
                                        <td>{book.language}</td>
                                        <td>
                                            <Link class="btn btn-primary m-2" /*to={'/books/storeUpdate/${book.id}'}*/><FontAwesomeIcon icon={faEdit} />Edit</Link>
                                            <Link class="btn btn-danger m-2" /*onClick={()=>deleteUser(book.id)}*/><FontAwesomeIcon icon={faTrash} />Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
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


export default StoreList;