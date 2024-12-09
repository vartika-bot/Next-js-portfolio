import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Table, Button } from "react-bootstrap";
import backgroundImage from "./images/background.jpg";
import DoctorNavBar from "./DoctorNavbar.js";
import axios from "axios";

const DoctorHome = () => {
  const [doctorName, setDoctorName] = useState("Doctor");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch doctor name from localStorage
    const storedDoctorName = localStorage.getItem("doctorName");
    if (storedDoctorName) {
      setDoctorName(storedDoctorName);
    } else {
      setDoctorName("Doctor");
    }

    // Fetch today's appointments
    const fetchAppointments = async () => {
      try {
        const doctorId = localStorage.getItem("doctorId");
        if (!doctorId) {
          setError("Doctor ID is not found. Please log in again.");
          setLoading(false);
          return;
        }

        const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
        const response = await axios.get(
          `http://localhost:3000/api/doctors/${doctorId}/bookings`
        );

        const todayAppointments = response.data.filter(
          (appointment) => appointment.date === today
        );
        setAppointments(todayAppointments);
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("Failed to fetch appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <DoctorNavBar />

      <div
        className="home-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "40px 20px",
          color: "#fff",
        }}
      >
        <Container>
          {/* Doctor Overview Card */}
          <Card
            className="mb-4"
            style={{
              backgroundColor: "rgba(36, 54, 66, 0.9)",
              color: "#fff",
              border: "none",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <h2>Good Morning, Dr. {doctorName}</h2>
                  <h5>Psychiatrist, MS, MD, MBBS</h5>
                  <p>
                    <strong>{appointments.length} appointments</strong> scheduled for today.
                  </p>
                  <p>⭐️⭐️⭐️⭐️⭐️ | Rating</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Today's Appointments Table */}
          <h3 className="text-center mb-4" style={{ color: "#243642" }}>
            Today's Appointments
          </h3>
          {loading ? (
            <p>Loading appointments...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : appointments.length > 0 ? (
            <Table
              striped
              bordered
              hover
              responsive
              className="bg-light"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <thead className="bg-dark text-white">
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={appointment._id}>
                    <td>{index + 1}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>
                      <Button variant="success" size="sm" className="me-2">
                        Accept
                      </Button>
                      <Button variant="danger" size="sm">
                        Decline
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center">No appointments for today.</p>
          )}
        </Container>
      </div>
    </>
  );
};

export default DoctorHome;