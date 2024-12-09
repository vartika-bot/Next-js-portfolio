import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppointmentScheduler = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const patientId = localStorage.getItem("patientId");
  
        if (!patientId) {
          setError("Patient ID not found. Please log in again.");
          setLoading(false);
          return;
        }
  
        const response = await fetch(`http://localhost:3000/api/doctors/patients/${patientId}/bookings`);
        const data = await response.json();
  
        if (response.ok) {
          setAppointments(data); // Assuming `data` contains the appointments array
        } else {
          setError(data.error || "Failed to fetch appointments.");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setError("An error occurred while fetching appointments.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchAppointments();
  }, []);
  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#629584",
        color: "#243642",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">My Appointments</h5>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : appointments.length > 0 ? (
        <div>
          <p>
            <strong>Upcoming Appointment:</strong> <br />
            <span>Date: {new Date(appointments[0].date).toLocaleDateString()}</span> <br />
            <span>Time: {appointments[0].time}</span> <br />
            <span>Doctor: {appointments[0].doctorName}</span>
          </p>
          <Link to="/bookings" className="btn btn-light">
            Manage Appointments
          </Link>
        </div>
      ) : (
        <p>No upcoming appointments found.</p>
      )}
    </div>
  );
};

export default AppointmentScheduler;