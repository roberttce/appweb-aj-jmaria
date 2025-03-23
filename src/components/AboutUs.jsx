// src/components/AboutUs.jsx
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0056b3;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #00b8a9;
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompanyImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const TextWrapper = styled.div`
  flex: 1 1 500px;
  text-align: left;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
`;

const CompanyTitle = styled.h3`
  color: #00b8a9;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

const CompanyDescription = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #444;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    color: #00b8a9;
    width: 24px;
    height: 24px;
  }
`;

const FeatureText = styled.span`
  font-weight: 500;
  color: #333;
`;

const AboutUs = () => {
  return (
    <AboutSection>
      <SectionTitle>¿Quiénes Somos?</SectionTitle>
      <ContentWrapper>
        <ImageWrapper>
          <CompanyImage src="/src/assets/img/about.jpg" alt="JMaria Perú SAC" />
        </ImageWrapper>
        <TextWrapper>
          <CompanyTitle>AJ JMARIA PERU</CompanyTitle>
          <CompanyDescription>
            En JMaria Perú SAC, somos líderes en la industria de vidrios y aluminios. Con más de 30 años de experiencia, transformamos espacios
            a través de soluciones innovadoras y de alta calidad.
          </CompanyDescription>
          <CompanyDescription>
            Nuestro equipo de profesionales está comprometido con la excelencia, asegurando que cada proyecto supere las expectativas de nuestros clientes.
            Nos especializamos en la fabricación e instalación de productos de vidrio y aluminio de primera calidad, ofreciendo soluciones personalizadas
            para proyectos residenciales y comerciales.
          </CompanyDescription>
          <FeaturesGrid>
            <FeatureItem>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <FeatureText>Calidad Superior</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <FeatureText>Garantía Total</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <FeatureText>Equipo Profesional</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              <FeatureText>Diseño Personalizado</FeatureText>
            </FeatureItem>
          </FeaturesGrid>
        </TextWrapper>
      </ContentWrapper>
    </AboutSection>
  );
};

export default AboutUs;