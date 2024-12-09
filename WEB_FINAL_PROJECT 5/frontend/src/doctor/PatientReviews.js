import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import DoctorNavBar from "./DoctorNavbar.js";

// Import images
import wendiImage from "./images/wendi.jpg";
import nickImage from "./images/nick.jpg";
import reviewsImage from "./images/reviews.jpeg"; // New image for the right section

const PatientReviews = () => (
  <>
    <DoctorNavBar />
  <div style={styles.layout}>
    <div style={styles.reviewsSection}>
      <Container className="mt-4">
        <h2>Patient Reviews</h2>
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col xs={2} md={1}>
                <Image
                  src={wendiImage}
                  roundedCircle
                  alt="Wendi Combs"
                  width={50} // Optional: Adjust image size
                  height={50}
                />
              </Col>
              <Col>
                <h5>Wendi Combs</h5>
                <p>
                  I had a very good experience here. I got the best psychiatrist and
                  a therapist. They analyzed my case very deeply and their
                  medicines helped me a lot.
                </p>
                <p>⭐⭐⭐⭐⭐</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={2} md={1}>
                <Image
                  src={nickImage}
                  roundedCircle
                  alt="Nick Morrow"
                  width={50} // Optional: Adjust image size
                  height={50}
                />
              </Col>
              <Col>
                <h5>Nick Morrow</h5>
                <p>
                  Dr. Jessica listens to you very patiently & gives you sufficient
                  time to say your problems.
                </p>
                <p>⭐⭐⭐⭐⭐</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
    <div style={styles.imageSection}>
      <img src={reviewsImage} alt="Reviews" style={styles.image} />
    </div>
  </div>
  </>
);

const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "75% 25%", // 75% for reviews section, 25% for image
    height: "100vh", // Full viewport height
  },
  reviewsSection: {
    backgroundColor: "#f0fffb", // Background color for the left 75% section
    padding: "20px",
    overflowY: "auto",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    overflow: "hidden", // Ensures no overflow
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Makes the image fill the container while maintaining its aspect ratio
  },
};

export default PatientReviews;
