import { h } from 'preact';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import classnames from 'classnames';
import { routes } from '../../constants/routes';
import { Container } from '../Container/index';
import { CartService } from '../../services/cartService';

export const Header = () => {
  const [cart, setCart] = useState(CartService.getItems());
  const [lengthCart, setLengthCart] = useState(0);

  useEffect(() => {
    CartService.watch(setCart);
  }, []);

  useEffect(() => {
    setLengthCart(cart.positions.reduce((acc, item) => (Number(item.quantity) + acc), 0));
  }, [cart]);

  return (
    <header class="header">
      <Container>
        <nav class="header__navigation">
          <NavLink to={routes.home}>
            <img src="/images/apple-logo.png" width="40" alt="logo" />
          </NavLink>
          <nav class="header__links">
            <NavLink to={routes.store}>
              <h3 class="header__title">Store</h3>
            </NavLink>
            <Switch>
              <Route exact path={routes.home}>
                <h3 class="header__title">Contacts</h3>
              </Route>
              <Route path="*">
                <NavLink
                  to={routes.cart}
                >
                  <div class={classnames('header__icon', {
                    activeCart: lengthCart > 0,
                  })}
                  />
                  { lengthCart > 0 && <span class="header__icon--length">{lengthCart}</span>}
                </NavLink>
              </Route>
            </Switch>
          </nav>
        </nav>
      </Container>
    </header>
  );
};
