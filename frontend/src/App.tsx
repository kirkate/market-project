import { h } from 'preact';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { NotFound } from './pages/NotFound';
import { Store } from './pages/Store';
import { routes } from './constants/routes';
import { Header } from './components/Header';

export const App = () => (

  <Router basename="/">
    <Header />
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.cart} component={Cart} />
      <Route path={routes.checkout} component={Checkout} />
      <Route path={routes.store} component={Store} />
      <Route path="*" exact component={NotFound} />
      <Redirect from={routes.store} to={routes.categories} />
    </Switch>
  </Router>
);
