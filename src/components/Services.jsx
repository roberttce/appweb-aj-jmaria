// src/components/Services.jsx
import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/img/service1.jpg';
import service2 from '../assets/img/service2.jpg';
import service3 from '../assets/img/service3.jpg';

const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0056b3;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ServiceItem = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ServiceTitle = styled.h3`
  margin-top: 15px;
  color: #00b8a9;
`;

const ServiceDescription = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
`;

const Services = () => {
  return (
    <ServicesSection>
      <SectionTitle>Nuestros Servicios</SectionTitle>
      <ServicesContainer>
        <ServiceItem>
          <ServiceImage src={service1} alt="Distribución" />
          <ServiceTitle>Distribución</ServiceTitle>
          <ServiceDescription>
            Amplia red de distribución que garantiza la entrega de productos de vidrio y aluminio de la mejor calidad.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src={service2} alt="Instalación" />
          <ServiceTitle>Instalación</ServiceTitle>
          <ServiceDescription>
            Servicios de instalación profesional, con precisión y seguridad en cada obra.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src={service3} alt="Comercialización" />
          <ServiceTitle>Comercialización</ServiceTitle>
          <ServiceDescription>
            Soluciones integrales y personalizadas, adaptadas a las necesidades del mercado.
          </ServiceDescription>
        </ServiceItem>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;