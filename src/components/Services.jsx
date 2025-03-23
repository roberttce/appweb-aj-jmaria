// src/components/Services.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';
import { ChevronLeft, ChevronRight, CheckCircle2, Star } from 'lucide-react';

const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #0056b3;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 60px;
  scroll-margin-top: 100px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid #0056b3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectsCarousel = styled.div`
  margin: 40px 0;
  position: relative;
  overflow: hidden;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin: 30px 0;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  min-width: 350px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    min-width: 280px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: #ddd;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProjectFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Feature = styled.span`
  background: #f0f0f0;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 10px;
  }

  svg {
    color: #0056b3;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  z-index: 2;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    background: #0056b3;
    color: white;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 60px 0;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialsSection = styled.div`
  margin: 60px 0;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 20px;
    margin: 40px 0;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TestimonialCard = styled.div`
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TestimonialContent = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AuthorRole = styled.div`
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 5px;
  color: #ffd700;
  margin-top: 5px;
`;

const servicesData = [
  {
    category: "VIDRIOS Y ALUMINIOS",
    services: [
      {
        name: "Ventanas personalizadas",
        description: "Diseño y fabricación de ventanas a medida con los más altos estándares de calidad y eficiencia energética.",
        features: ["Aislación térmica", "Aislación acústica", "Diseño personalizado"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mamparas",
        description: "Mamparas de vidrio templado para baños y espacios interiores, combinando elegancia y funcionalidad.",
        features: ["Vidrio templado", "Diseño moderno", "Fácil limpieza"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Muro cortina",
        description: "Sistemas de fachada de vidrio para edificios comerciales y residenciales de alto standing.",
        features: ["Alta resistencia", "Eficiencia energética", "Diseño arquitectónico"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Puertas de aluminio y vidrio templado",
        description: "Puertas modernas y seguras que combinan la durabilidad del aluminio con la elegancia del vidrio.",
        features: ["Seguridad", "Diseño elegante", "Durabilidad"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    category: "MUEBLES Y ESPACIOS",
    services: [
      {
        name: "Muebles de melamina a medida",
        description: "Diseño y fabricación de muebles personalizados que se adaptan perfectamente a tus espacios.",
        features: ["Diseño personalizado", "Alta durabilidad", "Óptimo aprovechamiento"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Closets y roperos personalizados",
        description: "Soluciones de almacenamiento inteligentes y organizadas para maximizar el espacio.",
        features: ["Organización", "Diseño funcional", "Máximo aprovechamiento"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Cocinas (reposteros y alacenas)",
        description: "Diseño y fabricación de cocinas completas con los más altos estándares de calidad.",
        features: ["Diseño ergonómico", "Materiales resistentes", "Óptima organización"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    category: "CONSTRUCCIÓN ESPECIALIZADA",
    services: [
      {
        name: "Divisiones drywall",
        description: "Sistemas de división de espacios ligeros y resistentes para interiores.",
        features: ["Ligero", "Aislación acústica", "Fácil instalación"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Estructuras metálicas",
        description: "Diseño y construcción de estructuras metálicas para diversos proyectos.",
        features: ["Alta resistencia", "Durabilidad", "Diseño personalizado"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Barandas personalizadas",
        description: "Barandas de diseño para balcones, escaleras y terrazas.",
        features: ["Seguridad", "Diseño moderno", "Resistencia"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Puertas especiales",
        description: "Puertas de seguridad y diseño especial para diferentes necesidades.",
        features: ["Seguridad", "Diseño especial", "Durabilidad"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    category: "SERVICIOS COMPLEMENTARIOS",
    services: [
      {
        name: "Acabados",
        description: "Servicios de acabados y detalles finales para proyectos de construcción.",
        features: ["Calidad", "Durabilidad", "Diseño profesional"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Instalación profesional",
        description: "Servicio de instalación experto para todos nuestros productos.",
        features: ["Profesionalismo", "Garantía", "Soporte técnico"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Asesoría técnica",
        description: "Consultoría especializada para proyectos de construcción y diseño.",
        features: ["Experiencia", "Soluciones personalizadas", "Soporte continuo"],
        image: "https://images.unsplash.com/photo-1581092334247-ddef2a41fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Ventanas Personalizadas",
      description: "Diseño y fabricación de ventanas a medida con los más altos estándares de calidad.",
      image: "/src/assets/img/project1.jpg",
      features: ["Aluminio de alta calidad", "Vidrio templado", "Aislación térmica"]
    },
    {
      title: "Mamparas de Baño",
      description: "Mamparas elegantes y funcionales para baños modernos.",
      image: "/src/assets/img/project2.jpg",
      features: ["Vidrio templado", "Sistema anti-fugas", "Diseño minimalista"]
    },
    {
      title: "Muebles de Melamina",
      description: "Muebles personalizados con acabados de alta calidad.",
      image: "/src/assets/img/project3.jpg",
      features: ["Melamina premium", "Diseño personalizado", "Instalación profesional"]
    },
    {
      title: "Divisiones Drywall",
      description: "Divisiones modulares con excelente aislación acústica.",
      image: "/src/assets/img/project4.jpg",
      features: ["Aislación acústica", "Resistente al fuego", "Instalación rápida"]
    },
    {
      title: "Puertas de Aluminio",
      description: "Puertas modernas y seguras con acabados premium.",
      image: "/src/assets/img/project5.jpg",
      features: ["Aluminio de alta calidad", "Sistema de seguridad", "Diseño elegante"]
    },
    {
      title: "Cocinas Personalizadas",
      description: "Diseño y fabricación de cocinas a medida.",
      image: "/src/assets/img/project6.jpg",
      features: ["Diseño ergonómico", "Materiales resistentes", "Óptima organización"]
    },
    {
      title: "Closets Modernos",
      description: "Soluciones de almacenamiento inteligentes.",
      image: "/src/assets/img/project7.jpg",
      features: ["Sistema organizador", "Iluminación LED", "Diseño personalizado"]
    },
    {
      title: "Barandas de Seguridad",
      description: "Barandas de diseño para balcones y escaleras.",
      image: "/src/assets/img/project8.jpg",
      features: ["Alta resistencia", "Diseño moderno", "Instalación segura"]
    }
  ];

  // Duplicar los proyectos para crear el efecto infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      // Si llegamos al final de los proyectos duplicados, volvemos al inicio
      if (next >= projects.length * 2) {
        return projects.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      // Si llegamos al inicio de los proyectos duplicados, volvemos al final
      if (next < projects.length) {
        return projects.length * 2 - 1;
      }
      return next;
    });
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleServiceClick = (service) => {
    // Aquí puedes agregar la lógica para mostrar más detalles del servicio
    console.log('Servicio seleccionado:', service);
  };

  const categoryDescriptions = {
    "VIDRIOS Y ALUMINIOS": "Soluciones modernas en vidrio y aluminio para ventanas, puertas y fachadas, combinando estética y funcionalidad.",
    "MUEBLES Y ESPACIOS": "Diseño y fabricación de muebles personalizados que optimizan cada espacio con estilo y funcionalidad.",
    "CONSTRUCCIÓN ESPECIALIZADA": "Proyectos de construcción especializada con materiales de alta calidad y acabados profesionales.",
    "SERVICIOS COMPLEMENTARIOS": "Servicios adicionales que complementan nuestros proyectos principales con la máxima calidad."
  };

  const testimonials = [
    {
      content: "Excelente servicio y calidad en los trabajos realizados. El equipo es muy profesional y el resultado superó mis expectativas.",
      author: "María González",
      role: "Cliente Residencial",
      rating: 5,
      image: "/src/assets/img/testimonial1.jpg"
    },
    {
      content: "La mejor opción para proyectos comerciales. Su experiencia y profesionalismo son evidentes en cada detalle.",
      author: "Carlos Rodríguez",
      role: "Cliente Comercial",
      rating: 5,
      image: "/src/assets/img/testimonial2.jpg"
    },
    {
      content: "Muy satisfecho con la instalación de las ventanas. El servicio post-venta es excepcional.",
      author: "Ana Martínez",
      role: "Cliente Residencial",
      rating: 5,
      image: "/src/assets/img/testimonial3.jpg"
    }
  ];

  return (
    <ServicesSection>
      <Container>
        <Header>
          <Title>Nuestros Servicios</Title>
          <Subtitle>
            Descubre nuestra amplia gama de servicios profesionales en vidrios, aluminios y construcción especializada.
            Cada proyecto es único y merece una solución personalizada.
          </Subtitle>
        </Header>

        <ProjectsCarousel 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CarouselButton className="prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </CarouselButton>
          <CarouselButton className="next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </CarouselButton>
          <CarouselContainer 
            style={{ 
              transform: `translateX(-${currentSlide * 380}px)`,
              transition: isHovered ? 'none' : 'transform 0.5s ease',
              width: `${duplicatedProjects.length * 380}px`
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage style={{ backgroundImage: `url(${project.image})` }}>
                  <ProjectOverlay>Ver Detalles</ProjectOverlay>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectFeatures>
                    {project.features.map((feature, idx) => (
                      <Feature key={idx}>
                        <CheckCircle2 size={16} />
                        {feature}
                      </Feature>
                    ))}
                  </ProjectFeatures>
                </ProjectContent>
              </ProjectCard>
            ))}
          </CarouselContainer>
        </ProjectsCarousel>

        <StatsSection>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Proyectos Completados</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Clientes Satisfechos</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>15+</StatNumber>
            <StatLabel>Años de Experiencia</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Profesionales Certificados</StatLabel>
          </StatItem>
        </StatsSection>

        {servicesData.map((category) => (
          <CategorySection 
            key={category.category} 
            id={category.category.toLowerCase().replace(/\s+/g, '-')}
          >
            <CategoryTitle>{category.category}</CategoryTitle>
            <CategoryDescription>{categoryDescriptions[category.category]}</CategoryDescription>
            <ServicesGrid>
              {category.services.map((service) => (
                <ServiceCard
                  key={service.name}
                  title={service.name}
                  description={service.description}
                  features={service.features}
                  image={service.image}
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </ServicesGrid>
          </CategorySection>
        ))}

        <TestimonialsSection>
          <CategoryTitle>Lo que dicen nuestros clientes</CategoryTitle>
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <TestimonialContent>"{testimonial.content}"</TestimonialContent>
                <TestimonialAuthor>
                  <AuthorImage style={{ backgroundImage: `url(${testimonial.image})` }} />
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                    <Rating>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#ffd700" />
                      ))}
                    </Rating>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsSection>
      </Container>
    </ServicesSection>
  );
};

export default Services; 
