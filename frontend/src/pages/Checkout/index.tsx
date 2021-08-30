import { h } from 'preact';
import { ProductsList } from '../../components/ProductsList';
import { CheckoutForm } from '../../components/CheckoutForm';

export const Checkout = () => (
  <section class="checkout">
    <aside class="product-list">
      <ProductsList />
    </aside>
    <main class="checkout-form">
      <CheckoutForm />
    </main>
  </section>
);
