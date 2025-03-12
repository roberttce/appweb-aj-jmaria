// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Projects from '../components/Projects';
import QuoteSection from '../components/QuoteSection';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSlider />
      <AboutUs />
      <Services />
      <Projects />
      <QuoteSection />
      <Stats />
    </HomeContainer>
  );
};

export default Home;
