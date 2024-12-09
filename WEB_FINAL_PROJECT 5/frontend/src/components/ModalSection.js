import React from 'react';
import { Accordion, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* FAQ Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ color: '#243642' }}> {/* Dark color for heading */}
          Frequently Asked Questions
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}> {/* Dark color for text */}
              What is Mental Health Wellness Website?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              We are a comprehensive wellness platform designed to advance health by providing accessible and innovative wellness solutions. Our services include personalized nutrition plans, lifestyle coaching, and expert medical guidance to help you achieve optimal health and well-being.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}>
              How can I access MHW’s services?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              You can access our services by signing up on our platform and choosing the wellness plan that suits your needs. We offer virtual consultations, in-person sessions, and on-demand resources.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}>
              Who are the experts behind Mental Health Wellness?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              Our team includes certified nutritionists, mental health professionals, and wellness coaches dedicated to your health and wellness journey.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}>
              What makes us different from other wellness platforms?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              combines evidence-based interventions with a personalized approach to health and wellness. Our platform integrates physical, mental, and emotional wellness for holistic care.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

    
    </div>
  );
}

export default App;
