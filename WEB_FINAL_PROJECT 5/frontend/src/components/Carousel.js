import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponent() {
  return (
    <Container fluid className="px-0"> {/* Use fluid container for full width */}
      <Carousel style={{ maxHeight: '400px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1679865370855-5a367b828f9a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.throughthewoodstherapy.com/wp-content/uploads/2020/03/shutterstock_413461849.jpg?fit=1000%2C662&ssl=1"
            alt="Second Slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/8436597/pexels-photo-8436597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://us.images.westend61.de/0000843790pw/smiling-women-talking-in-group-therapy-session-CAIF06868.jpg"
            alt="Fourth slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselComponent;
