import { h } from 'preact';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { CartService } from '../../services/cartService';
import { CartTable } from '../../components/CartTable';
import { routes } from '../../constants/routes';
import { Container } from '../../components/Container';

export const Cart = () => {
  const [cart, setCart] = useState(CartService.getItems());

  useEffect(() => {
    CartService.watch(setCart);
  }, []);

  const handleDeleteProduct = (id) => {
    CartService.deleteItem(id);
  };

  const handleChangeQuantity = (id, value) => {
    CartService.updateItemsQuantity(id, value);
  };

  return (
    <Container>
      <section class="cart">
        <CartTable cart={cart} onDelete={handleDeleteProduct} onQuantityChange={handleChangeQuantity} />
        <If condition={cart.positions?.length > 0}>
          <Link class="cart__link" to={routes.checkout}>Purchase</Link>
        </If>
      </section>
    </Container>
  );
};
