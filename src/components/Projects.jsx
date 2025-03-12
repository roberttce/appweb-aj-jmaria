// src/components/Projects.jsx
import React from 'react';
import styled from 'styled-components';
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project2.jpg';
import project3 from '../assets/img/project3.jpg';

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background-color: #f2f2f2;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0056b3;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectItem = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 15px;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: #00b8a9;
`;

const ProjectDescription = styled.p`
  margin-top: 8px;
  font-size: 0.9rem;
  color: #666;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Proyectos Destacados</SectionTitle>
      <ProjectsContainer>
        <ProjectItem>
          <ProjectImage src={project1} alt="Proyecto Residencial" />
          <ProjectInfo>
            <ProjectTitle>Proyecto Residencial</ProjectTitle>
            <ProjectDescription>
              Soluciones de vidrio de alta eficiencia para hogares modernos.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src={project2} alt="Edificio Comercial" />
          <ProjectInfo>
            <ProjectTitle>Edificio Comercial</ProjectTitle>
            <ProjectDescription>
              Fachadas de aluminio que combinan elegancia y funcionalidad.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src={project3} alt="Proyecto Industrial" />
          <ProjectInfo>
            <ProjectTitle>Proyecto Industrial</ProjectTitle>
            <ProjectDescription>
              Implementamos soluciones robustas para entornos industriales.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectItem>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;