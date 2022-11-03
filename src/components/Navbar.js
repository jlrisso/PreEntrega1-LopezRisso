import React from 'react'
import '../css/Navbar.css';

//Bs imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//Can directly rename when importing (because default export)
import BNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom';

import logo from '../img/logo.png'
import CartWidget from './CartWidget';


export default function Navbar() {
    

  return (
    <BNavbar bg="light" expand="lg">
      <Container>
          <BNavbar.Brand><Link className='navbar__links' to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bookspot</Link>
          </BNavbar.Brand>
          <BNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link" disabled={true}>About Us</Nav.Link>
              <Nav.Link href="#link" disabled={true}>News</Nav.Link>
              <Nav.Link href="#link" disabled={true}>Store</Nav.Link>
              <Nav.Link href="#link" disabled={true}>Contact</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} className='navbar__links' to="/category/sciencefiction">Science Fiction</NavDropdown.Item>
                <NavDropdown.Item as={Link} className='navbar__links' to="/category/health">Health</NavDropdown.Item>
                <NavDropdown.Item as={Link} className='navbar__links' to="/category/education">Education</NavDropdown.Item>
                <NavDropdown.Item as={Link} className='navbar__links' to="/category/business" disabled={true}>Business</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </BNavbar.Collapse>
          <CartWidget />
      </Container>
    </BNavbar>
  )
}


/*

EL AS DENTRO DEL NAVDROPDOWN ES PARA HACER QUE ESE COMPONENTE PASE 
A SER --EN ESTE CASO-- EL COMPONENTE "LINK"; SINO HAGO ESTO REACT
ME TIRA UN ERROR AVISANDOME QUE ESTOY DEFINIENDO DOS TAGS "<a>"

*/