import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatientNavBar from "./PatientNavBar";


const LandingPage = () => {
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    // Fetch patient name from localStorage
    const storedPatientName = localStorage.getItem("patientName");
    if (storedPatientName) {
      setPatientName(storedPatientName);
    } else {
      console.warn("Patient name not found in localStorage.");
    }
  }, []);
  return (
    <>
      <PatientNavBar />
    <div>
      {/* Hero Section */}
      
      <div>
  {/* Hero Section */}
  <header
    className="py-5"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      position: "relative", // Position relative for overlay text
      overflow: "hidden", // Ensure effects stay within the header
    }}
  >
    {/* Overlay for the text */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for the image
        zIndex: 1,
      }}
    ></div>

    {/* Text Container */}
    <div
      className="container text-center"
      style={{
        position: "relative",
        zIndex: 2, // Ensure text appears above the overlay
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <h2
        className="display-4 fw-bold mb-4"
        style={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Add shadow to text for popping effect
        }}
      >
        Hello, {patientName || "User"}!
      </h2>
      <h1
        className="display-5"
        style={{
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)", // Stronger shadow for main heading
        }}
      >
        Your journey to a healthier you starts here
      </h1>
      <p
        className="lead"
        style={{
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)", // Subtle shadow for the paragraph
        }}
      >
        Every small step counts. Together, we’ll create a positive path toward
        better mental health and well-being.
      </p>
      <div className="mt-4">
        <Link to="/bookings" className="btn btn-primary btn-lg me-3">
          Book an Appointment
        </Link>
        <Link to="/dashboard" className="btn btn-outline-light btn-lg">
          Explore Categories
        </Link>
      </div>
    </div>
  </header>
</div>

      {/* Statistics Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">Our Achievements</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=350"
                alt="Achievements"
                className="img-fluid mb-3"
                style={{
                  borderRadius: "10px",
                  height: "200px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <h3 className="display-5 fw-bold">12k+</h3>
              <p>Cases Handled</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/3184392/pexels-photo-3184392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=350"
                alt="Ratings"
                className="img-fluid mb-3"
                style={{
                  borderRadius: "10px",
                  height: "200px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <h3 className="display-5 fw-bold">4.9</h3>
              <p>Rating from 12k+ People</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/3184403/pexels-photo-3184403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=350"
                alt="Experience"
                className="img-fluid mb-3"
                style={{
                  borderRadius: "10px",
                  height: "200px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <h3 className="display-5 fw-bold">10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0">
                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=350"
                  className="card-img-top"
                  alt="Psychotherapy"
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Psychotherapy</h5>
                  <p className="card-text">Evidence-based therapeutic intervention for mental health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0">
                <img
                  src="https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=350"
                  className="card-img-top"
                  alt="Supervision"
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Supervision</h5>
                  <p className="card-text">Expert supervision for better mental health outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0">
                <img
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg"
                  className="card-img-top"
                  alt="Psychoeducation"
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Psychoeducation</h5>
                  <p className="card-text">
                    Educating patients to manage their mental health effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section
        className="py-5 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <blockquote className="blockquote">
            <p className="mb-4" style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
              “Mental health is not a destination, but a process. It's about how you drive, not where you're going.”
            </p>
            <footer className="blockquote-footer text-white">Noam Shpancer</footer>
          </blockquote>
        </div>
      </section>

     
    </div>
    </>
  );
};

export default LandingPage;
