import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarPrincipal = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rafood</Navbar.Brand>
          <Nav className="items-navbar">
            <Nav.Link href="#home">Inhabil</Nav.Link>
            <Nav.Link href="#features">Inhabil</Nav.Link>
            <Nav.Link href="#pricing">Inhabil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
