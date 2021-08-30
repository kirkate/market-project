import { h } from 'preact';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { Container } from '../../components/Container';
import { Categories } from '../../components/Categories';
import { Products } from '../../components/Products';
import { routes } from '../../constants/routes';

export const Store = () => (
  <Container>
    <Switch>
      <Route path={routes.products} component={Products} />
      <Route path={routes.categories} component={Categories} />
      <Redirect replace to="/store/iphone" />
    </Switch>
  </Container>
);
