import React from 'react';
import { UserProvider } from './components/user';
import { Routes } from './routes/';
import GlobalStyle from './styles';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Routes />
      <GlobalStyle />
    </UserProvider>
  );
}

export default App;
