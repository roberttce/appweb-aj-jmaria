import React from 'react';
import '../styles/css/Header.css';
import logo from '../assets/img/logo.jpeg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de la empresa" />
      </div>
      <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div>
        iconos contactos
      </div>
    </header>
  );
};

export default Header;