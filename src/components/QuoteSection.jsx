// src/components/QuoteSection.jsx
import React from 'react';
import styled from 'styled-components';

const QuoteSectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #0056b3;
  text-align: center;
  color: #fff;
`;

const QuoteContent = styled.div``;

const QuoteTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const QuoteButton = styled.a`
  background: #00b8a9;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #008a87;
  }
`;

const QuoteSection = () => {
  return (
    <QuoteSectionContainer>
      <QuoteContent>
        <QuoteTitle>¿Estás buscando un presupuesto?</QuoteTitle>
        <QuoteText>
          ¡Contáctanos y descubre cómo podemos ayudarte a transformar tu espacio!
        </QuoteText>
        <QuoteButton href="/contacto">Contáctanos</QuoteButton>
      </QuoteContent>
    </QuoteSectionContainer>
  );
};

export default QuoteSection;