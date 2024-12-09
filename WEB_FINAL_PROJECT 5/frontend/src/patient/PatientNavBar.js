import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const PatientNavBar = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogout = () => {
    // Clear authentication tokens or session data
    localStorage.removeItem('authToken'); // Adjust according to your authentication method
    alert('Logged out successfully!');
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#243642' }} variant="dark">
      <Navbar.Brand as={Link} to="/landing-page" style={{ color: '#E2F1E7', fontWeight: 'bold' }}>
        Patient Dashboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard" style={{ color: '#E2F1E7' }}>
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/my-appointments" style={{ color: '#E2F1E7' }}>
            My Appointments
          </Nav.Link>
          <Nav.Link as={Link} to="/my-profile" style={{ color: '#E2F1E7' }}>
            My Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/landing-page" style={{ color: '#E2F1E7' }}>
            Home
          </Nav.Link>
        </Nav>
        {/* Add Logout Button */}
        <Nav>
          <Nav.Link onClick={handleLogout} style={{ color: '#E2F1E7', cursor: 'pointer' }}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PatientNavBar;