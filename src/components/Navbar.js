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
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link className='navbar__links' to="/category/sciencefiction">Science Fiction</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='navbar__links' to="/category/health">Health</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='navbar__links' to="/category/literature">Literature</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='navbar__links' to="/category/business">Business</Link></NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </BNavbar.Collapse>
          <CartWidget />
      </Container>
    </BNavbar>
  )
}


/*


*/