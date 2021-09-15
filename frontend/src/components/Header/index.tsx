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
    <header>
      <Container>
        <nav class="header-navigation">
          <NavLink to={routes.home}>
            <img src="/images/apple-logo.png" width="40" alt="logo" />
          </NavLink>
          <nav class="header-navigation__activity">
            <NavLink to={routes.store}>
              <h3>Store</h3>
            </NavLink>

            <Switch>
              <Route exact path={routes.home}>
                <h3>Contacts</h3>
              </Route>
              <Route path="*">
                <NavLink
                  to={routes.cart}

                >
                  <div class={classnames('cart-icon', {
                    activeCart: lengthCart > 0,
                  })}
                  />
                  { lengthCart > 0 && <span class="cart-length">{lengthCart}</span>}
                </NavLink>
              </Route>
            </Switch>
          </nav>
        </nav>
      </Container>
    </header>
  );
};
