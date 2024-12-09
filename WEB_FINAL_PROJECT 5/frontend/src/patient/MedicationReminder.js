import React, { useState } from "react";

const MedicationReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState("");

  const addReminder = () => {
    if (reminder) {
      setReminders([...reminders, reminder]);
      setReminder("");
    }
  };

  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#243642",
        color: "#E2F1E7",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">Medication Reminder</h5>
      <ul
        className="list-group mb-3"
        style={{
          backgroundColor: "#387478",
          color: "#E2F1E7",
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        {reminders.map((item, index) => (
          <li key={index} className="list-group-item" style={{ backgroundColor: "#387478", color: "#E2F1E7" }}>
            {item}
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Add a new reminder"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button className="btn btn-light" onClick={addReminder}>
        Add Reminder
      </button>
    </div>
  );
};

export default MedicationReminder;
