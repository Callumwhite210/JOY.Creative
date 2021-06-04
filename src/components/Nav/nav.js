import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './style.css';
function NavigationBar() {
  return (
  <Navbar className='NavBar' variant="dark">
  <Container>
    <Navbar.Brand href="#home">JOY.Creative</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Services</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <NavDropdown title="Socials" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavigationBar;