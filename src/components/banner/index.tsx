import React from 'react';
import { Container, Content } from './styles';
import banner from '../../assets/banner.svg';
import { Link } from 'react-router-dom';

export const Banner: React.FC = () => {
  return (
    <Container>
      <Content>
        <span>
          <h2>Mulheres na tecnologia?</h2>
          <h2>Sim, com certeza!</h2>
          <h4>Conheça profissionais incríveis e promova um ambiente de trabalho mais diverso e inclusivo para sua empresa!</h4>
          <Link to="/cadastro">
            <button>Cadastre-se!</button>
          </Link>
        </span>
        <span>
          <img src={banner} alt="Woman Programming" />
        </span>
      </Content>
    </Container>
  );
};
