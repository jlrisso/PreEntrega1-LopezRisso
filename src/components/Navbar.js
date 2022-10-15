import React from 'react'

//Bs imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//Can directly rename when importing (because default export)
import BNavbar from 'react-bootstrap/Navbar';



import logo from '../img/logo.png'

export default function Navbar() {
  return (
    <BNavbar bg="light" expand="lg">
      <Container>
          <BNavbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bookspot
          </BNavbar.Brand>
          <BNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#link">Novedades</Nav.Link>
              <Nav.Link href="#link">Tienda</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </BNavbar.Collapse>
      </Container>
    </BNavbar>
  )
}
