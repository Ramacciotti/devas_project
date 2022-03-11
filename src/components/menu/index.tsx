import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button>
              <Link to="/cadastro">Cadastre-se</Link>
            </button>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ol>
      </nav>
    </Container>
  );
};
