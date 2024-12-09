import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";

const ManagePatients = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Fetch patients and doctors from the backend
  useEffect(() => {
    const fetchPatientsAndMappings = async () => {
      try {
        // Fetch patients
        const patientsResponse = await fetch("http://localhost:3000/api/users/patients");
        const patientsData = await patientsResponse.json();
        
        // Fetch mappings
        const mappingsResponse = await fetch("http://localhost:3000/api/mappings");
        const mappingsData = await mappingsResponse.json();
        
        // Fetch doctors
        const doctorsResponse = await fetch("http://localhost:3000/api/users/doctors");
        const doctorsData = await doctorsResponse.json();
        
        // Combine mappings into patient data
        const updatedPatients = patientsData.map((patient) => {
          const mapping = mappingsData.find((m) => m.patientId === patient._id);
          return {
            ...patient,
            doctor: mapping ? mapping.doctorId : null,
          };
        });
  
        setPatients(updatedPatients);
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Failed to fetch patients, mappings, or doctors:", error);
      }
    };
  
    fetchPatientsAndMappings();
  }, []);
  // Assign a doctor to a patient
  const handleAssignDoctor = async (patientId, doctorId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/assign-doctor/${patientId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doctorId }), // Sending doctorId in the body
      });

      if (response.ok) {
        const updatedPatient = await response.json();
        setPatients(
          patients.map((patient) =>
            patient._id === updatedPatient.patientId ? { ...patient, doctor: updatedPatient.doctorId } : patient
          )
        );
        alert("Doctor assigned successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to assign doctor: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error assigning doctor:", error);
      alert("An error occurred while assigning the doctor.");
    }
  };

  // Function to get doctor name by ID
  const getDoctorNameById = (doctorId) => {
    const doctor = doctors.find((doc) => doc._id === doctorId);
    return doctor ? doctor.name : "Not Assigned";
  };

  return (
    <>
      <AdminNav />

      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#E2F1E7",
        }}
      >
        {/* Left Section - Table */}
        <div
          style={{
            flex: 3, // 75% width
            padding: "2rem",
            backgroundColor: "#FFFFFF",
            borderRight: "2px solid #387478",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ color: "#387478", textAlign: "center", marginBottom: "1rem" }}>Manage Patients</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // 3D shadow effect
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <thead
              style={{
                backgroundColor: "#387478",
                color: "#E2F1E7",
                textAlign: "left",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 3D header shadow
              }}
            >
              <tr>
                <th style={{ padding: "1rem" }}>Name</th>
                <th style={{ padding: "1rem" }}>Email</th>
                <th style={{ padding: "1rem" }}>Contact</th>
                <th style={{ padding: "1rem" }}>Assigned Doctor</th>
                <th style={{ padding: "1rem" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={patient._id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alternating row colors
                    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for rows
                    transition: "transform 0.2s", // Hover effect
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{patient.name}</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{patient.email}</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                    {patient.contact || "Not Provided"}
                  </td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                    {getDoctorNameById(patient.doctor)}
                  </td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                    <select
                      className="form-select"
                      onChange={(e) => handleAssignDoctor(patient._id, e.target.value)}
                      defaultValue=""
                      style={{
                        backgroundColor: "#E2F1E7",
                        borderColor: "#387478",
                        color: "#243642",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Slight 3D effect on select
                        borderRadius: "5px",
                      }}
                    >
                      <option value="" disabled>
                        Select Doctor
                      </option>
                      {doctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Section - Image */}
        <div
          style={{
            flex: 1, // 25% width
            backgroundImage: `url("https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default ManagePatients;