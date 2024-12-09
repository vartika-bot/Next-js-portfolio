import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ActivityTracker = () => {
  const [timeRange, setTimeRange] = useState("daily");

  const getData = () => {
    switch (timeRange) {
      case "weekly":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            { label: "Mood", data: [7, 6, 8, 7], borderColor: "#E2F1E7", fill: false },
            { label: "Sleep (Hours)", data: [7.5, 8, 7, 6.5], borderColor: "#629584", fill: false },
          ],
        };
      case "monthly":
        return {
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [
            { label: "Mood", data: [7, 6.5, 8, 7.5], borderColor: "#E2F1E7", fill: false },
            { label: "Sleep (Hours)", data: [7.5, 8, 7.2, 6.8], borderColor: "#629584", fill: false },
          ],
        };
      default:
        return {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            { label: "Mood", data: [6, 7, 8, 5, 9, 7, 8], borderColor: "#E2F1E7", fill: false },
            { label: "Sleep (Hours)", data: [7, 8, 6, 8, 9, 7, 6], borderColor: "#629584", fill: false },
          ],
        };
    }
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#E2F1E7",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#E2F1E7",
        },
      },
      y: {
        ticks: {
          color: "#E2F1E7",
        },
      },
    },
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
      <h5 className="fw-bold mb-3">Activity Tracker</h5>
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${timeRange === "daily" ? "btn-light" : "btn-outline-light"} me-2`}
          onClick={() => setTimeRange("daily")}
        >
          Daily
        </button>
        <button
          className={`btn ${timeRange === "weekly" ? "btn-light" : "btn-outline-light"} me-2`}
          onClick={() => setTimeRange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`btn ${timeRange === "monthly" ? "btn-light" : "btn-outline-light"}`}
          onClick={() => setTimeRange("monthly")}
        >
          Monthly
        </button>
      </div>
      <Line data={getData()} options={options} />
    </div>
  );
};

export default ActivityTracker;
