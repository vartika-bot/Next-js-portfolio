import React from "react";

const ProgressDashboard = () => {
  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#387478",
        color: "#E2F1E7",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">Progress Dashboard</h5>
      <p>Therapy Sessions: 3/10</p>
      <div className="progress mb-3" style={{ backgroundColor: "#243642" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "30%", backgroundColor: "#E2F1E7" }}
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p>Mindfulness Goals: 5/7</p>
      <div className="progress" style={{ backgroundColor: "#243642" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "71%", backgroundColor: "#E2F1E7" }}
          aria-valuenow="71"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
