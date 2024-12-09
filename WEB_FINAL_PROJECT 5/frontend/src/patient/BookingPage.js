import React, { useState, useEffect , Button } from "react";
import { useNavigate } from "react-router-dom";
import PatientNavBar from "./PatientNavBar";

const BookingPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    doctor: "",
    location: "Virtual Video Call", // Default value
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingId, setBookingId] = useState(null);
  const [assignedDoctor, setAssignedDoctor] = useState(null);

  
  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        // Fetch patient ID and name from localStorage
        const patientId = localStorage.getItem("patientId");
        const patientName = localStorage.getItem("patientName");
  
        if (!patientId || !patientName) {
          console.error("Patient ID or Name not found in localStorage.");
          return;
        }
  
        // Prepopulate the form with patient name
        setForm((prevForm) => ({
          ...prevForm,
          name: patientName, // Prepopulate the name field
        }));
  
        // Fetch assigned doctor
        const doctorResponse = await fetch(`http://localhost:3000/api/mappings/${patientId}`);
        if (doctorResponse.ok) {
          const doctor = await doctorResponse.json();
          setAssignedDoctor(doctor); // Set assigned doctor
          setForm((prevForm) => ({
            ...prevForm,
            doctor: doctor._id, // Prepopulate doctor field
          }));
          setSelectedDoctor(doctor._id); // Set selected doctor
  
          // Fetch all available slots for the doctor
          const response = await fetch(
            `http://localhost:3000/api/doctors/${doctor._id}/slots`
          );
          const slots = await response.json();
          setAvailableSlots(slots); // Store all slots initially
          console.log("All slots:", slots);
        } else {
          console.error("No assigned doctor found for the patient.");
        }
      } catch (error) {
        console.error("Error fetching patient details or assigned doctor:", error);
      }
    };
  
    fetchPatientDetails();
  }, []); // Runs only on initial load
  
  // Use another useEffect to filter available slots based on selected date
  useEffect(() => {
    if (selectedDate && availableSlots.length > 0) {
      const filteredSlots = availableSlots.filter(slot => slot.date === selectedDate);
      console.log("Filtered slots for selected date:", filteredSlots);
      setAvailableSlots(filteredSlots);
    } else {
      console.log("No slots available for the selected date.");
      setAvailableSlots([]);
    }
  }, [selectedDate]); // Runs whenever `selectedDate` changes
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure all necessary form fields are filled
      if (!form.name || !form.date || !form.time || !selectedDoctor) {
        alert("Please fill in all the required fields.");
        return;
      }
  
      // Get patient ID from localStorage
      const patientId = localStorage.getItem("patientId");
      const patientName = form.name;
  
      // Validate patient ID
      if (!patientId) {
        alert("Patient ID not found. Please log in again.");
        return;
      }
  
      // Prepare the request body
      const requestBody = {
        patientId: patientId,
        patientName: patientName,
        date: form.date,
        time: form.time,
        location: form.location,
      };
  
      // Make the API request to save the booking
      const response = await fetch(`http://localhost:3000/api/doctors/${selectedDoctor}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Appointment booked successfully!");
        setBookingId(data.booking._id); // Set the booking ID
        navigate(`/dashboard`); // Navigate to the appointments page or payment if applicable
      } else {
        alert(data.error || "Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred while booking the appointment. Please try again later.");
    }
  };
  return (
    <>
      <PatientNavBar />

      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5699435/pexels-photo-5699435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#E2F1E7",
            borderRadius: "20px",
            padding: "2rem",
            width: "90%",
            maxWidth: "1200px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="card shadow-sm p-4"
                style={{
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title mb-4" style={{ color: "#387478" }}>
                  Book an Appointment
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{ color: "#243642" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      style={{
                        backgroundColor: "#E2F1E7",
                        borderColor: "#387478",
                        color: "#243642",
                      }}
                      disabled // Disable if you don't want the user to edit their name
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="doctor" className="form-label" style={{ color: "#243642" }}>
                      Doctor
                    </label>
                    <select
                      className="form-select"
                      id="doctor"
                      value={selectedDoctor}
                      onChange={(e) => {
                        setSelectedDoctor(e.target.value);
                        setForm({ ...form, doctor: e.target.value });
                      }}
                      required
                      disabled={!!assignedDoctor} // Disable if doctor is already assigned
                      style={{
                        backgroundColor: "#E2F1E7",
                        borderColor: "#387478",
                        color: "#243642",
                      }}
                    >
                      <option value="">Select a doctor</option>
                      {assignedDoctor ? (
                        <option value={assignedDoctor._id}>
                          {assignedDoctor.name}
                        </option>
                      ) : null}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label" style={{ color: "#243642" }}>
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setForm({ ...form, date: e.target.value });
                      }}
                      required
                      style={{
                        backgroundColor: "#E2F1E7",
                        borderColor: "#387478",
                        color: "#243642",
                      }}
                    />
                  </div>
                 
                  <div className="mb-3">
  <label htmlFor="time" className="form-label" style={{ color: "#243642" }}>
    Available Time Slots
  </label>
  {availableSlots.length > 0 ? (
    <select
      className="form-select"
      id="time"
      value={form.time}
      onChange={(e) => setForm({ ...form, time: e.target.value })}
      required
      style={{
        backgroundColor: "#E2F1E7",
        borderColor: "#387478",
        color: "#243642",
      }}
    >
      <option value="">Select a time slot</option>
      {availableSlots.map((slot, index) => (
        <option key={index} value={`${slot.startTime} - ${slot.endTime}`}>
          {slot.startTime} - {slot.endTime}
        </option>
      ))}
    </select>
  ) : (
    <p style={{ color: "#243642" }}>
      No available slots for this date. Please select a different date.
    </p>
  )}
</div>
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#387478",
                      color: "#E2F1E7",
                      border: "none",
                      padding: "0.8rem",
                    }}
                    disabled={!form.time}
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
            {/* Right Section */}
            <div className="col-md-6">
            <div className="col-md-6">
  <div
    className="card shadow-sm p-4"
    style={{
      backgroundColor: "#FFFFFF",
      border: "none",
      height: "100%",
      borderRadius: "10px",
    }}
  >
    <h5 className="card-title mb-4" style={{ color: "#387478" }}>
      Doctor's Availability
    </h5>
    {availableSlots.length > 0 ? (
      <ul className="list-group">
        {availableSlots.map((slot, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "#E2F1E7",
              color: "#243642",
              borderColor: "#387478",
              marginBottom: "10px",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <div>
              <strong>Date:</strong> {slot.date} <br />
              <strong>Time:</strong> {slot.startTime} - {slot.endTime}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p style={{ color: "#243642" }}>
        No available slots for this date. Please select a different date.
      </p>
    )}
  </div>
</div>
 
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;