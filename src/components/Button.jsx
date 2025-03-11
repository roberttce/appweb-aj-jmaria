import React from 'react';
import '../styles/css/Button.css'; // Estilos para el botón

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;