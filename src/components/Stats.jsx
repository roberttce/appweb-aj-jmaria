// src/components/Stats.jsx
import React from 'react';
import styled from 'styled-components';
import { Award, Users, CheckCircle } from 'lucide-react';

const StatsSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const StatItem = styled.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatIcon = styled.div`
  color: #00b8a9;
  margin-bottom: 10px;
`;

const StatValue = styled.h3`
  font-size: 2.5rem;
  margin: 0;
  color: #0056b3;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Stats = () => {
  return (
    <StatsSection>
      <StatsContainer>
        <StatItem>
          <StatIcon>
            <Award size={48} />
          </StatIcon>
          <StatValue>260</StatValue>
          <StatLabel>Obras Entregadas</StatLabel>
        </StatItem>
        <StatItem>
          <StatIcon>
            <Users size={48} />
          </StatIcon>
          <StatValue>30</StatValue>
          <StatLabel>Años de Experiencia</StatLabel>
        </StatItem>
        <StatItem>
          <StatIcon>
            <CheckCircle size={48} />
          </StatIcon>
          <StatValue>80</StatValue>
          <StatLabel>Clientes Satisfechos</StatLabel>
        </StatItem>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;