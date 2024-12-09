import React from 'react';
import CarouselComponent from './Carousel';
import Navigation from './Navbar';
import AccordionSection from './AccordionSection';
import TestimonialGrid from './TestimonialCarousel';
import ModalSection from './ModalSection';
import Chatbot from './Chatbot';
function Home() {
  return (
    <>
      <Navigation />
      <CarouselComponent />
      <AccordionSection />
      <TestimonialGrid />
      <ModalSection />
<Chatbot/>
    </>
  );
}

export default Home;