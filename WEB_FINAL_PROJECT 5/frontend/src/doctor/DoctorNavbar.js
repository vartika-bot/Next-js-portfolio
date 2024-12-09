import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const DoctorNavBar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Clear authentication tokens or session data
    localStorage.removeItem("authToken"); // Adjust according to your authentication method
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <Navbar
      style={{ backgroundColor: "#243642", minHeight: "70px" }}
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Doctor Dashboard
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/doctor-home">
            Home
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/appointments">
            Appointments
          </Nav.Link> */}
          <Nav.Link as={Link} to="/upcoming-appointments">
            Create Slots
          </Nav.Link>
          <Nav.Link as={Link} to="/patients">
            Patients
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews">
            Reviews
          </Nav.Link>
          <Nav.Link as={Link} to="/chat">
            Chat
          </Nav.Link>
          <Nav.Link onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DoctorNavBar;