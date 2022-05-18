

import { useState } from 'react'
import '../App.css'
import {  Container, Nav, Navbar,  } from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Sign from '../../Public/img/SigniFy_.png'
import Home from '../../Public/img/home_.png'
import Cart from '../../Public/img/shoppingcart.png'



import Sign from "../../Public/img/SigniFy_.png";

function Header() {



  
  return (
    <div>

<Navbar  className='navbarColor'  expand="lg">
  <Container>
    <Navbar.Brand  href="#home"><img src={Sign} alt="logo"/>
    </Navbar.Brand> 
    <Navbar.Toggle   aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
      <Nav className="me-auto" style={{marginLeft:"250px"}} >
        <NavLink className="Link" bg="light" to="/Vaggskyltar">Väggskyltar</NavLink>
        <NavLink className="Link" to="/Hangandeskylt">Hängande skyltar</NavLink>
        <NavLink className="Link" to="/Flaggskylt">Flaggskylt</NavLink>
        <NavLink className="Link" to="/" > <img src={Home} alt="home"/> </NavLink>
        <NavLink className="Link" bg="light" to="/kundvagn"> <img src={Cart} alt="shoppingCart"/> </NavLink>

      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   

    </div>
  );
}

export default Header;
