import React from "react";
import Dashboard from "./Dashboard";
import PatientNavBar from "./PatientNavBar";

const DashboardPage = () => {
  return (
    <>
      <PatientNavBar />
      <div
        style={{
          backgroundColor: "#E2F1E7",
          minHeight: "100vh",
          margin: "0",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardPage;