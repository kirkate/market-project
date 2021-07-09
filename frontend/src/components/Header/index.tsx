import { h } from 'preact';
import { NavLink, Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const Header = () => (
  <header>
    <nav class="header-navigation">
      <NavLink to={routes.home}>
        <h3>Logo</h3>
      </NavLink>
      <NavLink to={routes.store}>
        <h3>Store</h3>
      </NavLink>
      <Switch>
        <Route exact path={routes.home}>
          Contacts
        </Route>
        <Route path="*">Cart</Route>
      </Switch>
    </nav>
  </header>
);
