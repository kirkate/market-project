import { h } from 'preact';
import { useState } from 'preact/hooks';
import { CheckoutList } from '../../components/CheckoutList';
import { CheckoutForm } from '../../components/CheckoutForm';
import { CartService } from '../../services/cartService';
import { Container } from '../../components/Container';

export const Checkout = () => {
  const [productList] = useState(CartService.getItems());
  return (
    <Container>
      <section class="checkout">
        <aside>
          <CheckoutList productList={productList} />
        </aside>
        <main>
          <CheckoutForm />
        </main>
      </section>
    </Container>
  );
};
