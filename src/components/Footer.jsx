import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 40px 20px 20px;
  font-family: 'Orbitron', sans-serif;
  overflow-x: hidden;
`;

const FooterInner = styled.div`
  /* Ocupa el 100% del ancho con padding para separar el contenido de los bordes */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid #444;
`;

const FooterSection = styled.div`
  flex: 1 1 250px;
  margin: 10px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 20px;
  background: linear-gradient(90deg, #0056b3, #00b8a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutText = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;

const SocialMedia = styled.div`
  margin-top: 15px;
  
  a {
    margin-right: 10px;
    color: #fff;
    transition: color 0.3s;
    
    &:hover {
      color: #00b8a9;
    }
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 10px;
    
    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;
      
      &:hover {
        color: #00b8a9;
      }
    }
  }
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    
    .icon {
      margin-right: 8px;
      color: #00b8a9;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  
  input, textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #555;
    border-radius: 3px;
    font-size: 14px;
    outline: none;
    background-color: #444;
    color: #fff;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    background: linear-gradient(90deg, #0056b3, #00b8a9);
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
      background: linear-gradient(90deg, #004b99, #00a192);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: #bbb;
  padding: 0 20px;
`;

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar el envío real del formulario (por API o mailto)
    alert('Mensaje enviado');
  };

  return (
    <FooterContainer>
      <FooterInner>
        {/* Información de la Empresa */}
        <FooterSection>
          <SectionTitle>JMaria Perú SAC</SectionTitle>
          <AboutText>
            Somos una empresa líder en el mercado de vidrios y aluminios en Apurimac, ofreciendo productos de alta calidad y soluciones innovadoras para proyectos residenciales y comerciales.
          </AboutText>
          <SocialMedia>
            <a href="https://wa.me/51972540043" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
            <a href="mailto:jmariaperusac@gmail.com"><Mail size={20} /></a>
            <a href="tel:+51972540043"><Phone size={20} /></a>
          </SocialMedia>
        </FooterSection>
        
        {/* Enlaces Rápidos */}
        <FooterSection>
          <SectionTitle>Enlaces Rápidos</SectionTitle>
          <QuickLinks>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </QuickLinks>
        </FooterSection>
        
        {/* Información de Contacto */}
        <FooterSection>
          <SectionTitle>Contacto</SectionTitle>
          <ContactInfoList>
            <li><MapPin size={20} className="icon" /> Tintay, Apurimac y Abancay, Apurimac</li>
            <li><Phone size={20} className="icon" /> +51 972 540 043</li>
            <li><Mail size={20} className="icon" /> jmariaperusac@gmail.com</li>
          </ContactInfoList>
        </FooterSection>
        
        {/* Formulario de Contacto */}
        <FooterSection>
          <SectionTitle>Envíanos un Mensaje</SectionTitle>
          <ContactForm onSubmit={handleSubmit}>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu correo" required />
            <textarea placeholder="Tu mensaje" rows="4" required />
            <button type="submit">Enviar</button>
          </ContactForm>
        </FooterSection>
      </FooterInner>
      <FooterBottom>
        <p>&copy; 2024 JMaria Perú SAC. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
