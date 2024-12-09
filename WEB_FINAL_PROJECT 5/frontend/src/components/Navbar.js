import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#243642',
        padding: '15px 20px', // Add padding to the navbar
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for style
      }}
    >
      <Container>
        <Navbar.Brand
          href="/home"
          style={{
            color: '#E2F1E7',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          Mental Wellness
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" style={{ color: '#E2F1E7' }} />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link
              href="/user-creation"
              style={{
                color: '#E2F1E7',
                fontSize: '1.2rem',
                margin: '0 10px', // Add margin for spacing between links
              }}
            >
              Create Account
            </Nav.Link>
            <Nav.Link
              href="/login"
              style={{
                color: '#E2F1E7',
                fontSize: '1.2rem',
                margin: '0 10px',
              }}
            >
              Login
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;