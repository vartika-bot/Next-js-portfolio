import React from "react";
import { Link } from "react-router-dom";
import AdminNav from './AdminNav';
const AdminPanel = () => {
  return (
    <>
    <AdminNav />
    <div
      style={{
        height: "100vh",
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blurred Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)", // Apply blur (use a reasonable value)
          zIndex: -2,
        }}
      ></div>

      {/* Semi-transparent Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay to increase contrast
          zIndex: -1,
        }}
      ></div>

      {/* Centered Buttons */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#E2F1E7",
        }}
      >
        <h1 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>Admin Panel</h1>
        <div>
          <Link
            to="/admin/manage-doctors"
            className="btn btn-success btn-lg mx-3"
            style={{
              backgroundColor: "#629584",
              border: "none",
              padding: "1rem 2rem",
              fontSize: "1.2rem",
            }}
          >
            Manage Doctors
          </Link>
          <Link
            to="/admin/manage-patients"
            className="btn btn-success btn-lg mx-3"
            style={{
              backgroundColor: "#629584",
              border: "none",
              padding: "1rem 2rem",
              fontSize: "1.2rem",
            }}
          >
            Manage Patients
          </Link>
        </div>
      </div>

      {/* Welcome Message */}
      <main
        style={{
          position: "absolute",
          bottom: "2rem",
          width: "100%",
          textAlign: "center",
          color: "#E2F1E7",
          fontSize: "1.2rem",
        }}
      >
        Welcome to the Admin Panel. Use the navigation above to manage the system.
      </main>
    </div>
    </>
  );
};

export default AdminPanel;