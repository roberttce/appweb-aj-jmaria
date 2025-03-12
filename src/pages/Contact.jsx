import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contacto</h1>
      <p>Esta es la página de Contacto.</p>
    </Container>
  );
};

export default Contact;
