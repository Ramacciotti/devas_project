import React, { useState, useContext, useEffect } from 'react';
import { Container, Content } from './styles';
import { Error } from '../../components/error';
import { UserContext } from '../../components/user';
import { useHistory } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const [email, setemail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const { loginUser, logged } = useContext(UserContext);
  const history = useHistory();

  const teste = () => {
    const lo = localStorage.getItem('logged');
    const em = localStorage.getItem('email');
    if (lo != null && em != null) {
      history.push('/painel');
      location.reload();
    }
  };

  const handleLogin = () => {
    setErrorMessage('');
    setHasError(false);
    loginUser(email, password);
    setTimeout(teste, 3000);
  };

  useEffect(() => {
    if (logged) {
      console.log('LOGGED TRUE');
    }
  }, [logged]);

  return (
    <Container>
      <Content>
        <h2>Login</h2>
        <form>
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
          <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {hasError && <Error message={errorMessage} />}
      </Content>
    </Container>
  );
};
