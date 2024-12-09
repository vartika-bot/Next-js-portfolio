import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import DoctorNavBar from "./DoctorNavbar.js";
import axios from "axios";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [slots, setSlots] = useState([]);
  // const doctorId = "67516ef1b2ada87da62ea865"; // Replace with dynamic doctorId if needed
  const [doctorId, setDoctorId] = useState("Doctor"); // To store the doctor ID dynamically

  // Fetch doctorId from local storage or session
  useEffect(() => {
    const storedDoctorId = localStorage.getItem("doctorId");
    if (storedDoctorId) {
      setDoctorId(storedDoctorId);
    } else {
      console.error("Doctor ID not found. Please log in again.");
    }
  }, []);
 
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
          console.error("Doctor ID is not found in localStorage.");
          return;
        }
  
        const response = await axios.get(`http://localhost:3000/api/doctors/${doctorId}/bookings`);
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error.response?.data || error.message);
      }
    };
  
    fetchAppointments();
  }, []);

  // Fetch slots
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
          console.error("Doctor ID is not found in localStorage.");
          return;
        }
  
        const response = await axios.get(`http://localhost:3000/api/doctors/${doctorId}/slots`);
        setSlots(response.data);
      } catch (error) {
        console.error("Error fetching slots:", error.response?.data || error.message);
      }
    };
  
    fetchSlots();
  }, []);

  // Handle slot creation
  const handleCreateSlot = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/doctors/${doctorId}/slots`,
        { date: selectedDate, startTime, endTime }
      );
      alert("Slot created successfully!");
      setSlots([...slots, response.data.slot]);
      setShowSlotModal(false);
      setSelectedDate("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error("Error creating slot:", error);
      alert(error.response?.data?.error || "Failed to create slot.");
    }
  };

  return (
    <>
      <DoctorNavBar />
      <Container className="mt-4">
        <h2>Manage Slots</h2>
        <div className="mb-4">
          <Button
            variant="primary"
            onClick={() => setShowSlotModal(true)}
            style={{ backgroundColor: "#387478", border: "none" }}
          >
            Create Slot
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{slot.date}</td>
                <td>{slot.startTime}</td>
                <td>{slot.endTime}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2 className="mt-5">Upcoming Appointments</h2>
        <Table striped bordered hover>
          <thead>
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
                  <Button variant="success" size="sm">
                    Accept
                  </Button>{" "}
                  <Button variant="danger" size="sm">
                    Decline
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal for Slot Management */}
      <Modal show={showSlotModal} onHide={() => setShowSlotModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Slots</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSlotModal(false)}>
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#387478", border: "none" }}
            onClick={handleCreateSlot}
          >
            Save Slot
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpcomingAppointments;