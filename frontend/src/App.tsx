import { h } from 'preact';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { NotFound } from './pages/NotFound';
import { routes } from './constants/routes';
import { Header } from './components/Header';
import { Product } from './pages/Product';
import { Products } from './components/Products';
import { Categories } from './components/Categories';
import { Breadcrumbs } from './components/Breadcrumbs';

export const App = () => (
  <Router basename="/">
    <Header />
    <Breadcrumbs />
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.cart} component={Cart} />
      <Route path={routes.checkout} component={Checkout} />
      <Route path={routes.product} component={Product} />
      <Switch>
        <Route path={routes.products} component={Products} />
        <Route path={routes.categories} component={Categories} />
        <Redirect replace to="/store/iphone" />
      </Switch>
      <Route path="*" exact component={NotFound} />
      <Redirect from={routes.store} to={routes.categories} />
    </Switch>
  </Router>
);
