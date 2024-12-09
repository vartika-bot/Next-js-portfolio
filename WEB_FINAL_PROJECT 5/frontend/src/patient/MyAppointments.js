import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientNavBar from "./PatientNavBar";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      try {
        const response = await fetch(`http://localhost:3000/api/doctors/bookings/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Appointment canceled successfully.");
          setAppointments(appointments.filter((appt) => appt._id !== id));
        } else {
          alert("Failed to cancel the appointment.");
        }
      } catch (error) {
        console.error("Error canceling appointment:", error);
        alert("An error occurred while canceling the appointment.");
      }
    }
  };

  const handleNewAppointment = () => {
    navigate("/bookings");
  };

  return (
    <>
      <PatientNavBar />
      <div
        style={{
          backgroundColor: "#E2F1E7",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          className="container shadow p-4 rounded"
          style={{
            backgroundColor: "#387478",
            color: "#E2F1E7",
          }}
        >
          <h4 className="mb-4">Scheduled Appointments</h4>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : appointments.length > 0 ? (
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#243642", color: "#E2F1E7" }}>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Doctor</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt._id}>
                    <td>{new Date(appt.date).toLocaleDateString()}</td>
                    <td>{appt.time}</td>
                    <td>{appt.doctorName}</td>
                    <td>{appt.location}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(appt._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No scheduled appointments found.</p>
          )}

          <button
            className="btn btn-light mt-4"
            onClick={handleNewAppointment}
          >
            Create New Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default MyAppointments;