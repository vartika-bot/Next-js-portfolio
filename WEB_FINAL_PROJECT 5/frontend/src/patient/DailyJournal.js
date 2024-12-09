import React, { useState } from "react";

const DailyJournal = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const addEntry = () => {
    if (entry) {
      setEntries([...entries, { text: entry, date: new Date().toLocaleString() }]);
      setEntry("");
    }
  };

  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#629584",
        color: "#243642",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">Daily Journal</h5>
      <ul
        className="list-group mb-3"
        style={{
          backgroundColor: "#387478",
          color: "#E2F1E7",
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        {entries.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{ backgroundColor: "#387478", color: "#E2F1E7" }}
          >
            <small className="text-muted">{item.date}</small>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="Write your journal entry"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      ></textarea>
      <button className="btn btn-light" onClick={addEntry}>
        Add Entry
      </button>
    </div>
  );
};

export default DailyJournal;
