import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()

  const searchByKeyword = (event) => {
    event.preventDefault()
    //url을 바꿔주기
    navigate(`/movies?q=${keyword}&t=${Date.now()}`);
    setKeyword("");
  }
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar expand="lg" variant="dark" bg="black">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/netflix-logo.svg"
              height="30"
              className="d-inline-block align-top"
              alt="Netflix Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                style={{
                  backgroundColor: 'gray',
                  borderColor: '#444'
                }}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default AppLayout