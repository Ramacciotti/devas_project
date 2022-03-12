import React, { useState } from 'react';
import axios from 'axios';
import { Container, Content, Boxes, Section, Fields } from './styles';
import { useHistory } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const [email, setemail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const handleSubmit = async () => {
    axios
      .post('http://localhost:8080/user/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));
        localStorage.setItem('logged', 'true');
        history.push('/painel');
        location.reload();
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        localStorage.setItem('logged', 'false');
        alert('Ops! Erro ao tentar logar!');
      });
  };

  return (
    <Container>
      <Content>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} method="POST">
          <Boxes>
            <Section>
              <Fields>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Fields>
            </Section>
            <Section>
              <button type="submit">Logar</button>
            </Section>
          </Boxes>
        </form>
      </Content>
    </Container>
  );
};
