import { h } from 'preact';
import { NavLink, Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const Header = () => (
  <header>
    <nav class="header-navigation">
      <NavLink to={routes.home}>
        {' '}
        <h3>iProject</h3>
      </NavLink>
      <NavLink to={routes.store}>
        {' '}
        <h3>Store</h3>
      </NavLink>
      <Switch>
        <Route exact path={routes.home}>
          <h3>Contacts</h3>
        </Route>
        <Route path="*">
          <NavLink to={routes.cart}>
            {' '}
            <h3>Cart</h3>
          </NavLink>
        </Route>
      </Switch>
    </nav>
  </header>
);
