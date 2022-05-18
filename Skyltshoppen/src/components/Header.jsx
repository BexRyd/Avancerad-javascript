import { useState } from 'react'
import '../App.css'
import {  Container, Nav, Navbar,  } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
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
        <NavLink bg="light" to="/Vaggskyltar" style={{color:"white",marginRight:"20px"}}>Väggskyltar</NavLink>
        <Nav.Link to="/Hangandeskylt" style={{color:"white",marginRight:"20px"}}>Hängande skyltar</Nav.Link>
        <Nav.Link to="/Flaggskylt" style={{color:"white",marginRight:"20px"}}>Flaggskylt</Nav.Link>
        <Nav.Link to="/" > <img src={Home} alt="home"/> </Nav.Link>
        <Nav.Link bg="light" to="/kundvagn"> <img src={Cart} alt="shoppingCart"/> </Nav.Link>

      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    </div>
  )
}

export default Header