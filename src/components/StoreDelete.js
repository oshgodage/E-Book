import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Col } from 'react-bootstrap'
class StoreDelete extends Component {


    render() {

        return (
            <div>

                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="/panel">E-Book Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="float-right">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav className="justify-content-end">
                                <Nav.Item><Nav.Link href="/addBook">Store Add</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/storeUpdate">Store Update</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/storeDelete">Store Delete</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/storeList">Store List</Nav.Link></Nav.Item>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <h2>Store Delete</h2>


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
}

export default StoreDelete;