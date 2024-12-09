import React from "react";
import ActivityTracker from "./ActivityTracker";
import YogaMeditation from "./YogaMeditation";
import AppointmentScheduler from "./AppointmentScheduler";
import ChatWithTherapist from "./ChatWithTherapist";
import MedicationReminder from "./MedicationReminder";
import ProgressDashboard from "./ProgressDashboard";
import DailyJournal from "./DailyJournal";
import EducationalResources from "./EducationalResources";

const Dashboard = () => {
  const commonStyle = {
    minHeight: "300px",
    maxHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      style={{
        backgroundColor: "#E2F1E7",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="text-center fw-bold py-4" style={{ color: "#243642" }}>
        Patient Dashboard
      </h2>
      <div
        className="container-fluid"
        style={{
          maxWidth: "1200px",
        }}
      >
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <ActivityTracker />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <YogaMeditation />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <AppointmentScheduler />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <ChatWithTherapist />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <MedicationReminder />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <ProgressDashboard />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <DailyJournal />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div style={commonStyle}>
              <EducationalResources />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
