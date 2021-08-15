import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import Home from './Home/Home';
import Login from './Login/Login';
import Cadastro from './Cadastro';
import RoutesPrivate from 'components/Routes/Private/Private';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <RoutesPrivate path="/" component={Home} />

      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
