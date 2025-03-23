import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 32px;
  right: 32px;
  background-color: #25D366;
  color: white;
  padding: 24px;
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.3s;

  &:hover {
    background-color: #128C7E;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
    padding: 20px;
  }
`;

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    isVisible && (
      <WhatsAppButton
        href="https://wa.me/51972540043"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </WhatsAppButton>
    )
  );
};

export default FloatingWhatsApp;
