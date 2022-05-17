import { useState } from 'react'
import '../App.css'
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Sign from '../../Public/img/SigniFy_.png'



function Header() {


  

  return (
    <div>
<div></div>
<Navbar className='navbarColor'  expand="lg">
  <Container>
    <Navbar.Brand  href="#home"><img src={Sign} alt="logo"/>
    </Navbar.Brand> 
    <Navbar.Toggle   aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link bg="light"  href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    </div>
  )
}

export default Header