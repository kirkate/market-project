import { h } from 'preact';
import { NavLink } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const Header = () => (
  <nav class="header">
    <NavLink to={routes.home}><h3>Logo</h3></NavLink>
    <NavLink to={routes.store}><h3>Store</h3></NavLink>
    <NavLink to={routes.cart}><h3>Cart</h3></NavLink>
  </nav>
);
