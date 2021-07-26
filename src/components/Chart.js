
import React from "react";
import { Navbar, Nav, NavDropdown,Container,Col } from 'react-bootstrap'
import { } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Chart() {
  return (
    <div>

      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/panel">E-Book Store</Navbar.Brand>
        <Navbar.Toggle aria-aria-controls="basic-navbar-nav"></Navbar.Toggle>
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
      <div class="tcontainer">
        <div class="text-center">
          <h1>Welcome to the E- Book Store Dashboard</h1>
        </div>
      </div>
      <br />
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>



      <Navbar fixed="bottom"bg="light" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            <div>
              ©Copy 2021 | E-Book Store Inc | All Right Reserved
            </div>
          </Col>
        </Container>
      </Navbar>

    </div >
  );
}
