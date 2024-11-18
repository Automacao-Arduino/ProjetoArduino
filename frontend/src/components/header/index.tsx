// components/header/index.tsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function HeaderPage() {
  return (
    <Navbar expand="lg" className="bg-white text-white rounded-md p-3">
      <Container>
        <Navbar.Brand className="text-black font-bold mx-3 text-xl">
          Cômodos:
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            as={NavLink}
            to="/sala"
            className="text-black hover:text-green-500 mx-3"
          >
            Sala
          </Nav.Link>
          {/* Removemos os outros links por enquanto */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderPage;
