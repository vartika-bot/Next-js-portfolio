import React, { useState } from "react";

const EducationalResources = () => {
  const resources = [
    {
      category: "Mindfulness",
      links: [
        { name: "Mindfulness Basics", url: "https://www.mindfulness.org" },
        { name: "Mindful Breathing", url: "https://www.mindfulbreathing.com" },
      ],
    },
    {
      category: "Stress Management",
      links: [
        { name: "Coping with Stress", url: "https://www.stressrelief.org" },
        { name: "Stress Reduction Techniques", url: "https://www.stressreduction.com" },
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#243642",
        color: "#E2F1E7",
        minHeight: "300px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h5 className="fw-bold mb-3">Educational Resources</h5>
      <div>
        {resources.map((resource, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              position: "relative",
            }}
          >
            <button
              className="btn btn-block w-100 text-start"
              style={{
                backgroundColor: "#387478",
                color: "#E2F1E7",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
              }}
              onClick={() => toggleAccordion(index)}
            >
              {resource.category}
            </button>
            <div
              style={{
                maxHeight: expandedIndex === index ? "150px" : "0",
                overflow: "hidden",
                backgroundColor: "#629584",
                color: "#E2F1E7",
                transition: "max-height 0.5s ease-in-out",
                padding: expandedIndex === index ? "10px" : "0 10px",
                marginTop: expandedIndex === index ? "5px" : "0",
                borderRadius: "5px",
                boxShadow: expandedIndex === index ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              {resource.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block mb-2 text-light"
                  style={{ textDecoration: "none" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
