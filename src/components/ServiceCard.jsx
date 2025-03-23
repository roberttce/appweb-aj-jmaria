import React from 'react';
import styled from 'styled-components';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Content = styled.div`
  padding: 24px;
  background: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.3rem;
  color: #1a1a1a;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.95rem;
  color: #4a4a4a;
  line-height: 1.6;
  flex-grow: 1;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Feature = styled.span`
  background: #f8f9fa;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #2c3e50;
  border: 1px solid #e9ecef;
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
`;

const MainButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);
  }
`;

const SecondaryButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ContactButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  &.phone {
    background: linear-gradient(135deg, #0056b3 0%, #004b99 100%);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 86, 179, 0.2);
    }
  }

  &.email {
    background: linear-gradient(135deg, #00b8a9 0%, #00a192 100%);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 184, 169, 0.2);
    }
  }
`;

const ServiceCard = ({ title, description, features, image, onClick }) => {
  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const message = `Hola, me interesa cotizar el servicio de ${title}. ¿Podrían brindarme información sobre precios y disponibilidad?`;
    window.open(`https://wa.me/51972540043?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneClick = (e) => {
    e.stopPropagation();
    window.open('tel:+51972540043', '_blank');
  };

  const handleEmailClick = (e) => {
    e.stopPropagation();
    const subject = `Cotización - ${title}`;
    const body = `Hola, me interesa cotizar el servicio de ${title}. ¿Podrían brindarme información sobre precios y disponibilidad?`;
    window.open(`mailto:jmariaperusac@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <Card onClick={onClick}>
      <ImageContainer style={{ backgroundImage: `url(${image})` }}>
        <Overlay className="overlay" />
      </ImageContainer>
      <Content className="content">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Features>
          {features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </Features>
        <ContactOptions>
          <MainButton 
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            Cotizar por WhatsApp
          </MainButton>
          <SecondaryButtons>
            <ContactButton 
              className="phone" 
              onClick={handlePhoneClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={18} />
              Llamar
            </ContactButton>
            <ContactButton 
              className="email" 
              onClick={handleEmailClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} />
              Email
            </ContactButton>
          </SecondaryButtons>
        </ContactOptions>
      </Content>
    </Card>
  );
};

export default ServiceCard; 