// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import slider1 from '../assets/img/slider1.jpg';
import slider2 from '../assets/img/slider2.jpg';
import slider3 from '../assets/img/slider3.jpg';

const sliderData = [
  {
    image: slider1,
    title: "Bienvenido a JMaria Perú SAC: Vidrios y Aluminios",
    subtitle: "Innovación y calidad en cada proyecto",
    button: { text: "Contáctanos", url: "/contact" },
  },
  {
    image: slider2,
    title: "Instalación Profesional",
    subtitle: "Expertos en instalaciones precisas y seguras",
    button: { text: "Solicita Presupuesto", url: "/contact" },
  },
  {
    image: slider3,
    title: "Soluciones Integrales",
    subtitle: "Trámites, presupuestos y más, todo en uno",
    button: { text: "Contáctanos", url: "/contact" },
  },
];

const SliderSection = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

const SliderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  
  @media (max-width:768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  
  @media (max-width:768px) {
    font-size: 1rem;
  }
`;

const SliderButton = styled.a`
  background: linear-gradient(90deg, #0056b3, #00b8a9);
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(90deg, #004b99, #00a192);
  }
`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SliderSection>
      <SliderImage style={{ backgroundImage: `url(${sliderData[currentSlide].image})` }} />
      <SliderOverlay>
        <Title>{sliderData[currentSlide].title}</Title>
        <Subtitle>{sliderData[currentSlide].subtitle}</Subtitle>
        <SliderButton href={sliderData[currentSlide].button.url}>
          {sliderData[currentSlide].button.text}
        </SliderButton>
      </SliderOverlay>
    </SliderSection>
  );
};

export default HeroSlider;