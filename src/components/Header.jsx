import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import styled from "styled-components";
import logo from "../assets/img/logo.jpeg";

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: 'Orbitron', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
`;

const Logo = styled.div`
  img {
    width: 120px;
    height: auto;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 30px;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
      margin-top: 10px;
    }
  }

  li a {
    color: #333;
    text-decoration: none;
    font-size: 22px;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s ease;
  }

  li a:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #0056b3, #00b8a9);
    transition: width 0.3s ease;
  }

  li a:hover {
    color: #0056b3;
  }

  li a:hover:after {
    width: 100%;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Company Logo" />
      </Logo>
      <Nav>
        <ul>
          <li><a onClick={() => navigate("/")}>Inicio</a></li>
          <li><a onClick={() => navigate("/nosotros")}>Nosotros</a></li>
          <li><a onClick={() => navigate("/servicios")}>Servicios</a></li>
          <li><a onClick={() => navigate("/proyectos")}>Proyectos</a></li>
          <li><a onClick={() => navigate("/contacto")}>Contacto</a></li>
        </ul>
      </Nav>
      <ContactIcons>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={24} />
        </a>
        <a href="mailto:contact@company.com">
          <Mail size={24} />
        </a>
        <a href="tel:+1234567890">
          <Phone size={24} />
        </a>
      </ContactIcons>
    </HeaderContainer>
  );
};

export default Header;