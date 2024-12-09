import React from "react";

const YogaMeditation = () => {
  const sessions = [
    { name: "Morning Yoga", link: "https://www.youtube.com/watch?v=abcd1234" },
    { name: "Mindfulness Meditation", link: "https://www.youtube.com/watch?v=efgh5678" },
    { name: "Stress Relief Yoga", link: "https://www.youtube.com/watch?v=ijkl9101" },
  ];

  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#387478",
        color: "#E2F1E7",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">Yoga and Meditation</h5>
      <ul className="list-group">
        {sessions.map((session, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#243642", color: "#E2F1E7" }}
          >
            <span>&#9658; {session.name}</span>
            <a
              href={session.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-light"
            >
              View
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YogaMeditation;
