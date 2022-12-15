import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Logout } from './logout';
import { useAuth0 } from '@auth0/auth0-react';

export const NavbarPrincipal = () => {
  const { user } = useAuth0();
  return(
    <Navbar className='nav-bar-per' expand="lg">
      <Container>
        <Navbar.Brand>
            <img src={require('../img/nLogo-blanco.png')} height="30" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle style={{color:'#008080'}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="btn-pers nav-itm" to='/'>Principal</NavLink>
            <NavLink className="btn-pers nav-itm" to='/pedidos'>Pedidos</NavLink>
          </Nav>
          <Nav>
            <Logout />
            <NavLink className='btn-perfil' to='/perfil'>
              <img className='img-perfil' src={user.picture} alt='Imagen de perfil'/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  /*
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#008080" }}>
      <a className="navbar-brand" href="/">
        <img src={require('../img/nLogo-blanco.png')} height="25" alt="" style={{ margin: "0 15px 0 15px" }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to='/'>Principal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/pruebas'>Pruebas</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
  */
  /*
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
  );
  */
}
