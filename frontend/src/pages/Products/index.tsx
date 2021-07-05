import { h } from 'preact';
import { Switch, Route } from 'react-router-dom';
import { ProductsCatalog } from './ProductsCatalog';
import { ProductDetails } from './ProductDetails';

export const Products = () => (
  <Switch>
    <Route path="/products" component={ProductsCatalog} />
    <Route path="/products/:productId" component={ProductDetails} />
  </Switch>
);
