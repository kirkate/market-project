import { h } from 'preact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { Checkout } from './pages/Checkout';
import { NotFound } from './pages/NotFound';
import { Store } from './pages/Store';

export const App = () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/products" component={Products} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/store" component={Store} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  </Router>
);
