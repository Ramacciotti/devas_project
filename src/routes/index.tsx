import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { Painel } from '../pages/painel';
import { Header } from '../components/header';
import { Register } from '../pages/register';
import { Footer } from '../components/footer';
import { Candidates } from '../pages/candidates';
import { UserContext } from '../components/user';
import { Login } from '../pages/login';
import { Ops } from '../components/ops';

export const Routes: React.FC = () => {
  const { logged } = useContext(UserContext);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/candidatas" component={Candidates} />
        <Route path="/cadastro" component={Register} />
        <Route path="/login" component={Login} />
        {logged ? (<Route path="/painel" component={Painel} />) : (<Ops />)}
        <Route>404</Route>
      </Switch>
      <Footer />
    </Router>
  );
};
