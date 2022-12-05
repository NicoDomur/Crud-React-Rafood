import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Logout } from './logout';

export const NavbarPrincipal = () => {
  return (
    <>
      <Navbar className='nav-per'>
        <Container>
          <Navbar.Brand href="/">
            <img src={require('../img/nLogo-blanco.png')} height="30" alt="" />
          </Navbar.Brand>
          <Nav className="items-navbar">
            <NavLink className="nav-itm btn-pers" to='/'>Principal</NavLink>
            <NavLink className="nav-itm btn-pers" to='/pruebas'>Pruebas</NavLink>
            <Logout />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
