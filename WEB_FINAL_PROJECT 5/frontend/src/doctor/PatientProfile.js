import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Table } from "react-bootstrap";
import DoctorNavBar from "./DoctorNavbar.js";

const PatientProfile = () => {
  const { patientId } = useParams(); // Get the patientId from the URL
  const [patientDetails, setPatientDetails] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const patientResponse = await fetch(
          `http://localhost:3000/api/users/patients/${patientId}`
        ); // Replace with your API endpoint for fetching patient details
        const appointmentResponse = await fetch(
          `http://localhost:3000/api/appointments/patient/${patientId}`
        ); // Replace with your API endpoint for appointments

        if (patientResponse.ok) {
          const patientData = await patientResponse.json();
          setPatientDetails(patientData);
        }

        if (appointmentResponse.ok) {
          const appointmentData = await appointmentResponse.json();
          setAppointments(appointmentData);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [patientId]);

  if (loading) {
    return <p>Loading patient details...</p>;
  }

  if (!patientDetails) {
    return <p>Patient not found.</p>;
  }

  return (
    <>
      <DoctorNavBar />
      <div style={{ backgroundColor: "#f0fffb", minHeight: "100vh" }}>
        <Container
          fluid
          className="mt-4"
          style={{ display: "flex", flexDirection: "row", height: "100vh" }}
        >
          {/* Left Section */}
          <Card
            style={{
              flex: 1,
              margin: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
            }}
          >
            <div>
              <h3>{patientDetails.name}</h3>
              <p>
                <strong>Age:</strong> {patientDetails.age || "N/A"}
              </p>
              <p>
                <strong>Contact:</strong> {patientDetails.contact || "N/A"}
              </p>
              <p>
                <strong>Condition:</strong> {patientDetails.condition || "N/A"}
              </p>
              <p>
                <strong>Doctor:</strong> {patientDetails.doctorName || "N/A"}
              </p>
            </div>
          </Card>

          {/* Right Section: Previous Appointments */}
          <Card
            style={{
              flex: 1,
              margin: "0 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "#ffffff",
            }}
          >
            <h4>Previous Appointments</h4>
            {appointments.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={appointment._id}>
                      <td>{index + 1}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.doctorName}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No previous appointments available.</p>
            )}
          </Card>
        </Container>
      </div>
    </>
  );
};

export default PatientProfile;