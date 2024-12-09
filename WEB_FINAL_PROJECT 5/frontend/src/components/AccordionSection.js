import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {

  const navigate = useNavigate();
const handleClick = () => {
  navigate('/login'); // Redirect to login page
};
  return (
    
    <>
      <section className="py-5" style={{ backgroundColor: '#e9f7f5' }}> {/* Light greenish background */}
        <Container>
          <Row>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="mb-4">
                  <h4 className="d-flex align-items-center">
                    <span className="me-2" style={{ fontSize: '1.5rem', color: '#003300' }}>•</span> {/* Dark Green */}
                    Psychotherapy & Psychology
                    <span className="ms-auto" style={{ fontSize: '1.2rem', color: '#008c8c' }}>&#8599;</span> {/* Teal */}
                  </h4>
                  <p style={{ marginLeft: '1.8rem', color: '#005757' }}> {/* Darker Teal */}
                    Particularly when based on regular personal engagement.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="d-flex align-items-center">
                    <span className="me-2" style={{ fontSize: '1.5rem', color: '#003300' }}>•</span> {/* Dark Green */}
                    Supervision
                    <span className="ms-auto" style={{ fontSize: '1.2rem', color: '#008c8c' }}>&#8599;</span> {/* Teal */}
                  </h4>
                  <p style={{ marginLeft: '1.8rem', color: '#005757' }}> {/* Darker Teal */}
                    Act or instance of directing and managing effectively.
                  </p>
                </li>
                <li>
                  <h4 className="d-flex align-items-center">
                    <span className="me-2" style={{ fontSize: '1.5rem', color: '#003300' }}>•</span> {/* Dark Green */}
                    Psychoeducation
                    <span className="ms-auto" style={{ fontSize: '1.2rem', color: '#008c8c' }}>&#8599;</span> {/* Teal */}
                  </h4>
                  <p style={{ marginLeft: '1.8rem', color: '#005757' }}> {/* Darker Teal */}
                    Evidence-based therapeutic intervention strategies.
                  </p>
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://burnabyschools.ca/wp-content/uploads/2019/04/MentalHealthWell-beingforAll_graphic.png"
                alt="Mental health illustration"
                style={{ maxWidth: '100%', borderRadius: '10px' }}
              />
              <h2 className="mt-4" style={{ color: '#004d4d' }}> {/* Deep teal for heading */}
              "We empower your journey towards mental wellness."
              </h2>
              <p style={{ color: '#006666' }}> {/* Medium teal for text */}
              “Your story matters, and every step you take towards healing is a victory. Embrace each moment and trust in your strength to move forward.”
              </p>
              <Button
      style={{ backgroundColor: '#004d4d', borderColor: '#004d4d', color: '#fff' }}
      onClick={handleClick}
    >
      Book an Appointment
    </Button>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
