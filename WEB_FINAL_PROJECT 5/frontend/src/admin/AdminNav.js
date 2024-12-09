import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogout = () => {
    // Clear authentication tokens or session data
    localStorage.removeItem("authToken"); // Adjust according to your authentication method
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#243642" }} variant="dark">
      <Navbar.Brand
        as={Link}
        to="/admin"
        style={{ color: "#E2F1E7", fontWeight: "bold" }}
      >
        MentalWellness
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="admin-navbar-nav" />
      <Navbar.Collapse id="admin-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/admin/manage-doctors"
            style={{ color: "#E2F1E7" }}
          >
            Manage Doctors
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/admin/manage-patients"
            style={{ color: "#E2F1E7" }}
          >
            Manage Patients
          </Nav.Link>
         
        </Nav>
        {/* Logout Link */}
        <Nav>
          <Nav.Link
            onClick={handleLogout}
            style={{ color: "#E2F1E7", cursor: "pointer" }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNav;