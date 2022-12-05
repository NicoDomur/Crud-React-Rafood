import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Logout } from './logout';

export const NavbarPrincipal = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rafood</Navbar.Brand>
          <Nav className="items-navbar">
            <NavLink className="nav-item" to='/'>Principal</NavLink>
            <NavLink className="nav-item" to='/pruebas'>Pruebas</NavLink>
            <Logout />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
