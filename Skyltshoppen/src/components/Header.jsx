import { useState } from 'react'
import '../App.css'
import {  Container, Nav, Navbar,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Sign from '../../Public/img/SigniFy_.png'
import Home from '../../Public/img/home_.png'
import Cart from '../../Public/img/shoppingcart.png'



function Header() {


  

  return (
    <div>

<Navbar  className='navbarColor'  expand="lg">
  <Container>
    <Navbar.Brand  href="#home"><img src={Sign} alt="logo"/>
    </Navbar.Brand> 
    <Navbar.Toggle   aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
      <Nav className="me-auto" style={{marginLeft:"300px"}} >
        <Nav.Link bg="light" href="#link" style={{color:"white",marginRight:"20px"}}>Väggskyltar</Nav.Link>
        <Nav.Link href="#link" style={{color:"white",marginRight:"20px"}}>Hängande skyltar</Nav.Link>
        <Nav.Link href="#link" style={{color:"white",marginRight:"20px"}}>Flaggskylt</Nav.Link>
        <Nav.Link bg="light" > <img src={Home} alt="home"/> </Nav.Link>
        <Nav.Link bg="light"> <img src={Cart} alt="shoppingCart"/> </Nav.Link>

      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    </div>
  )
}

export default Header