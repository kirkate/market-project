import { h } from 'preact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { Checkout } from './pages/Checkout';
import { NotFound } from './pages/NotFound';
import { Store } from './pages/Store';
import { routes } from './constants/routes';

export const App = () => (
  <Router basename="/">
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.cart} component={Cart} />
      <Route path={routes.products} component={Products} />
      <Route path={routes.checkout} component={Checkout} />
      <Route path={routes.store} component={Store} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  </Router>
);
