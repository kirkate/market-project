import { h } from 'preact';
import { ProductsList } from '../../components/ProductsList';
import { CheckoutForm } from '../../components/CheckoutForm';

export const Checkout = () => (
  <section class="checkoutPage">
    <ProductsList />
    <CheckoutForm />
  </section>
);
