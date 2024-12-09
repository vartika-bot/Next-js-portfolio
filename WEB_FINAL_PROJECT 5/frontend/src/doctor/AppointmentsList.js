import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import backgroundImage from "./images/appointments.jpeg"; // Ensure this path is correct
import DoctorNavBar from "./DoctorNavbar.js";


//TEST
const AppointmentsList = () => (
  <>
  <DoctorNavBar />

  
  <div style={styles.pageContainer}>
    <Container className="mt-4" style={styles.container}>
      <h2>Appointments List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Consulting Doctor</th>
            <th>Department</th>
            <th>Date</th>
            <th>Time</th>
            <th>Disease</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Deena Cooley</td>
            <td>65</td>
            <td>Dr. Vicki Walsh</td>
            <td>Surgeon</td>
            <td>05/23/2024</td>
            <td>9:30 AM</td>
            <td>Diabetes</td>
            <td>
              <Button variant="success" size="sm">✔</Button>{" "}
              <Button variant="danger" size="sm">✘</Button>{" "}
              <Button variant="primary" size="sm">✎</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </div>
  </>
);

const styles = {
  pageContainer: {
    backgroundImage: `url(${backgroundImage})`, // Background image
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the background image
    backgroundAttachment: 'fixed', // Fixes the background while scrolling
    height: '100vh', // Full viewport height
    display: 'flex', // Ensures content aligns properly
    alignItems: 'center', // Centers content vertically
    justifyContent: 'center', // Centers content horizontally
    color: 'white', // Text color for readability
    paddingTop: '56px', // Adjust for navbar height if fixed (Bootstrap default is 56px)
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a translucent background to the content
    padding: '20px', // Adds padding inside the content area
    borderRadius: '10px', // Optional: rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow
  },
};

export default AppointmentsList;
