import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors from the backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/doctors"); // Ensure this endpoint filters by role
        if (!response.ok) {
          throw new Error("Failed to fetch doctors.");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
        alert("Unable to load doctors. Please try again later.");
      }
    };

    fetchDoctors();
  }, []);

  // Delete a doctor
  const handleDeleteDoctor = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        const response = await fetch(`http://localhost:3000/api/doctors/delete/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setDoctors(doctors.filter((doctor) => doctor._id !== id));
          alert("Doctor deleted successfully!");
        } else {
          alert("Failed to delete doctor.");
        }
      } catch (error) {
        console.error("Error deleting doctor:", error);
        alert("An error occurred while deleting the doctor.");
      }
    }
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
            flex: 3.5, // 80% width
            padding: "4rem",
            backgroundColor: "#FFFFFF",
            borderRight: "2px solid #387478",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ color: "#387478", textAlign: "center", marginBottom: "1rem" }}>
            Manage Doctors
          </h2>

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
                <th style={{ padding: "1rem" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr
                  key={doctor._id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alternating row colors
                    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for rows
                    transition: "transform 0.2s", // Hover effect
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{doctor.name}</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{doctor.email}</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                    <button
                      className="btn btn-link"
                      onClick={() => handleDeleteDoctor(doctor._id)}
                      style={{
                        color: "#387478",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Section - Image */}
        <div
          style={{
            flex: 1.5, // 20% width
            backgroundImage: `url("https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default ManageDoctors;