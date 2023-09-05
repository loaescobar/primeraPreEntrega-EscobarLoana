import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


const NavBar1 = () => {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
         <Container>
          <Navbar.Brand href="#home">DISCORDIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#indumentaria">Indumentaria</Nav.Link>
            <Nav.Link href="#conocenos">Conocenos</Nav.Link>
            <Nav.Link href="#cartwidget"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default NavBar1