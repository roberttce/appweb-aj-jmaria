// src/components/AboutUs.jsx
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background-color: #f2f2f2;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0056b3;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ImageWrapper = styled.div`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImage = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 1.2rem;
  border-radius: 8px;
`;

const TextWrapper = styled.div`
  flex: 1 1 400px;
  text-align: left;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width:768px) {
    text-align: center;
  }
`;

const AboutUs = () => {
  return (
    <AboutSection>
      <SectionTitle>¿Quiénes Somos?</SectionTitle>
      <ContentWrapper>
        <ImageWrapper>
          <PlaceholderImage>[Imagen de la Empresa]</PlaceholderImage>
        </ImageWrapper>
        <TextWrapper>
          <h3 style={{ color: '#00b8a9', marginTop: '5px' }}>AJ jMARIA PERU</h3>
          <p>
            En JMaria Perú SAC, somos líderes en la industria de vidrios y aluminios. Con más de 30 años de experiencia, transformamos espacios
            a través de soluciones innovadoras y de alta calidad.
          </p>
          <p>
            Nuestro equipo de profesionales está comprometido con la excelencia, asegurando que cada proyecto supere las expectativas de nuestros clientes.
          </p>
        </TextWrapper>
      </ContentWrapper>
    </AboutSection>
  );
};

export default AboutUs;