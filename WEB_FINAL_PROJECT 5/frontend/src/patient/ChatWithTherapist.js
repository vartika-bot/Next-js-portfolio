import React, { useState } from "react";

const ChatWithTherapist = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#387478",
        color: "#E2F1E7",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">Chat with Therapist</h5>
      <ul
        className="list-group mb-3"
        style={{
          backgroundColor: "#243642",
          color: "#E2F1E7",
          overflowY: "auto",
          maxHeight: "150px",
        }}
      >
        {messages.map((msg, index) => (
          <li key={index} className="list-group-item" style={{ backgroundColor: "#243642", color: "#E2F1E7" }}>
            {msg}
          </li>
        ))}
      </ul>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="btn btn-light" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatWithTherapist;
