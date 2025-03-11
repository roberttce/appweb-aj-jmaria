import React from 'react';
import '../styles/css/Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección: Información de la empresa */}
        <div className="footer-section about">
          <h3>Vidrios y Aluminios S.A.</h3>
          <p>
            Somos líderes en el mercado de vidrios y aluminios, ofreciendo productos de alta calidad y soluciones innovadoras para proyectos residenciales y comerciales.
          </p>
          <div className="social-media">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
        
        {/* Sección: Enlaces Rápidos */}
        <div className="footer-section links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        
        {/* Sección: Información de Contacto */}
        <div className="footer-section contact-info">
          <h3>Contacto</h3>
          <ul>
            <li><MapPin size={20} className="icon" /> Calle Ficticia 123, Ciudad</li>
            <li><Phone size={20} className="icon" /> +123 456 789</li>
            <li><Mail size={20} className="icon" /> info@vidriosaluminios.com</li>
          </ul>
        </div>
        
        {/* Sección: Newsletter y Formulario de Suscripción */}
        <div className="footer-section newsletter">
          <h3>Suscríbete</h3>
          <p>Recibe nuestras últimas novedades y promociones.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Tu correo" required />
            <button type="submit">Suscribir</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Vidrios y Aluminios S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
