import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/css/Home.css';

// Importa las imágenes para el slider
import slider1 from '../assets/img/slider1.jpg';
import slider2 from '../assets/img/slider2.jpg';
import slider3 from '../assets/img/slider3.jpg';

// Importa las imágenes para los servicios
import service1 from '../assets/img/service1.jpg';
import service2 from '../assets/img/service2.jpg';
import service3 from '../assets/img/service3.jpg';

// Importa las imágenes para los proyectos
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project2.jpg';
import project3 from '../assets/img/project3.jpg';

// Importamos algunos iconos para las estadísticas
import { Award, Users, CheckCircle } from 'lucide-react';

const Home = () => {
  // Datos dinámicos para el slider: cada objeto contiene imagen, título, subtítulo y botón
  const sliderData = [
    {
      image: slider1,
      title: "Bienvenido a JMaria Perú SAC: Vidrios y Aluminios",
      subtitle: "Innovación y calidad en cada proyecto",
      button: { text: "Contáctanos", url: "/contact" },
    },
    {
      image: slider2,
      title: "Instalación Profesional",
      subtitle: "Expertos en instalaciones precisas y seguras",
      button: { text: "Solicita Presupuesto", url: "/contact" },
    },
    {
      image: slider3,
      title: "Soluciones Integrales",
      subtitle: "Trámites, presupuestos y más, todo en uno",
      button: { text: "Contáctanos", url: "/contact" },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [sliderData.length]);

  return (
    <div className="home">
      <Header />

      {/* HERO SLIDER */}
      <section className="hero-slider">
        <div
          className="slider-image"
          style={{ backgroundImage: `url(${sliderData[currentSlide].image})` }}
        ></div>
        <div className="slider-overlay">
          <h1>{sliderData[currentSlide].title}</h1>
          <p>{sliderData[currentSlide].subtitle}</p>
          <a href={sliderData[currentSlide].button.url} className="slider-button">
            {sliderData[currentSlide].button.text}
          </a>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="about-us">
        <h2>¿Quiénes Somos?</h2>
        <div className="about-content">
          <div className="about-image">
            {/* Placeholder para la imagen de la empresa o trabajadores */}
            <div className="placeholder-image">[Imagen de la Empresa]</div>
          </div>
          <div className="about-text">
            <h3>AJ jMARIA PERU</h3>
            <p>
              En JMaria Perú SAC, somos líderes en la industria de vidrios y aluminios. Con más de 30 años de experiencia, transformamos espacios
              a través de soluciones innovadoras y de alta calidad.
            </p>
            <p>
              Nuestro equipo de profesionales está comprometido con la excelencia, asegurando que cada proyecto supere las expectativas de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={service1} alt="Distribución" />
            <h3>Distribución</h3>
            <p>
              Amplia red de distribución que garantiza la entrega de productos de vidrio y aluminio de la mejor calidad.
            </p>
          </div>
          <div className="service-item">
            <img src={service2} alt="Instalación" />
            <h3>Instalación</h3>
            <p>
              Servicios de instalación profesional, con precisión y seguridad en cada obra.
            </p>
          </div>
          <div className="service-item">
            <img src={service3} alt="Comercialización" />
            <h3>Comercialización</h3>
            <p>
              Soluciones integrales y personalizadas, adaptadas a las necesidades del mercado.
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="projects">
        <h2>Proyectos Destacados</h2>
        <div className="projects-container">
          <div className="project-item">
            <img src={project1} alt="Proyecto Residencial" />
            <div className="project-info">
              <h3>Proyecto Residencial</h3>
              <p>Soluciones de vidrio de alta eficiencia para hogares modernos.</p>
            </div>
          </div>
          <div className="project-item">
            <img src={project2} alt="Edificio Comercial" />
            <div className="project-info">
              <h3>Edificio Comercial</h3>
              <p>Fachadas de aluminio que combinan elegancia y funcionalidad.</p>
            </div>
          </div>
          <div className="project-item">
            <img src={project3} alt="Proyecto Industrial" />
            <div className="project-info">
              <h3>Proyecto Industrial</h3>
              <p>Implementamos soluciones robustas para entornos industriales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PRESUPUESTO */}
      <section className="quote-section">
        <div className="quote-content">
          <h2>¿Estás buscando un presupuesto?</h2>
          <p>¡Contáctanos y descubre cómo podemos ayudarte a transformar tu espacio!</p>
          <a href="/contact" className="quote-button">Contáctanos</a>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <Award size={48} className="stat-icon" />
            <h3>260</h3>
            <p>Obras Entregadas</p>
          </div>
          <div className="stat-item">
            <Users size={48} className="stat-icon" />
            <h3>30</h3>
            <p>Años de Experiencia</p>
          </div>
          <div className="stat-item">
            <CheckCircle size={48} className="stat-icon" />
            <h3>80</h3>
            <p>Clientes Satisfechos</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
