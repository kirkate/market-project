import { h } from 'preact';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { CartService } from '../../services/cartService';
import { CartTable } from '../../components/CartTable';
import { routes } from '../../constants/routes';

export const Cart = () => {
  const [cart, setCart] = useState(CartService.getItems());
  useEffect(() => {
    CartService.watch(setCart);
  }, []);
  return (
    <section>
      <p>
        Cart (
        {cart.positions.length}
        )
      </p>
      <CartTable cart={cart} />
      <If condition={cart.positions?.length > 0}>
        <Link to={routes.checkout}>Purchase</Link>
      </If>
    </section>
  );
};
