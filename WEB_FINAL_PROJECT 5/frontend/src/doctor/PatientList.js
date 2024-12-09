import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import patientImage from "./images/patient.jpeg"; // Adjust the path if necessary
import DoctorNavBar from "./DoctorNavbar.js";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [doctorId, setDoctorId] = useState(null); // Initially null for clarity

  // Fetch doctorId from local storage or session
  useEffect(() => {
    const storedDoctorId = localStorage.getItem("doctorId");
    if (storedDoctorId) {
      setDoctorId(storedDoctorId);
      console.log("Fetched doctorId from localStorage:", storedDoctorId); // Debugging log
    } else {
      console.error("Doctor ID not found. Please log in again.");
      setLoading(false); // Stop loading if no doctorId is found
    }
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      if (!doctorId) {
        console.warn("Cannot fetch patients without a valid doctorId");
        return;
      }

      try {
        console.log(`Fetching patients for doctorId: ${doctorId}`); // Debugging log
        const response = await axios.get(`http://localhost:3000/api/users/doctors/${doctorId}/patients`);
        
        if (response.status === 200) {
          console.log("Fetched patients:", response.data); // Debugging log
          // setPatients(response.data.patients || []); 
          setPatients(response.data);// Ensure response.data.patients is an array
        } else {
          console.error(`Failed to fetch patient list. Status code: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching patient list:", error.response || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [doctorId]); //
  return (
    <>
      <DoctorNavBar />
      <div style={styles.layout}>
        <div style={styles.listSection}>
          <Container>
            <h2>Patient List</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
               
 
                  {patients.map((patient, index) => (
                    
                    <tr key={patient._id}>
                      <td>{index + 1}</td>
                      <td>{patient.name}</td>
                      <td>{patient.age || "N/A"}</td>
                      <td>
                      <Link to={`/patient-profile/${patient._id}`}>
  <Button variant="info" size="sm">View Details</Button>
</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Container>
        </div>
        <div style={styles.imageSection}>
          <img src={patientImage} alt="Patient" style={styles.image} />
        </div>
      </div>
    </>
  );
};

const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "75% 25%",
    height: "100vh", // Full viewport height
  },
  listSection: {
    backgroundColor: "#f0fffb", // Background color for the left 75% section
    padding: "20px",
    overflowY: "auto",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    overflow: "hidden", // Ensures no overflow
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Makes the image fill the container while maintaining its aspect ratio
  },
};

export default PatientList;