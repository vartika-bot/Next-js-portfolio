import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialGrid = () => {
  const testimonials = [
    {
      name: 'Gerard Patynama',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'On those really difficult days when you feel like you won\'t survive, I want to remind you that you have made it through.'
    },
    {
      name: 'Sayline Uvia',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'If up to now you are still able to survive what you have experienced, I am proud of you.'
    },
    {
      name: 'Wildansyah Sauqi',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'No need to worry, every problem in your life is God\'s way of showing his blessings and miracles.'
    },
    {
      name: 'Victoria Maulinda',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Don\'t start the day with regrets about yesterday, because it will disturb the greatness of today.'
    },
    {
      name: 'John Doe',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Your services have truly changed my life for the better. Thank you for your unwavering support!'
    },
    {
      name: 'Jane Smith',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600', // Updated image URL
      text: 'I feel incredibly grateful for the compassion and professionalism shown to me during my treatment.'
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#E2F1E7' }}> {/* Light background color */}
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#243642' }}> {/* Dark color for heading */}
          What Our Patients Say
        </h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card
                className="h-100 text-center"
                style={{
                  border: 'none',
                  backgroundColor: '#629584',
                  color: '#E2F1E7', /* Text color inside cards */
                }}
              >
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                    margin: '20px auto',
                    border: '3px solid #387478', /* Border around the image */
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: '#E2F1E7',
                    }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </Card.Text>
                  <Card.Title
                    className="mt-3"
                    style={{ fontWeight: 'bold', color: '#243642' }}
                  >
                    {testimonial.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button
            style={{
              backgroundColor: '#387478',
              borderColor: '#387478',
              color: '#E2F1E7',
            }}
          >
            Talk with us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialGrid;
