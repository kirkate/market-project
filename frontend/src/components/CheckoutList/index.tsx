import { h } from 'preact';

export const CheckoutList = ({ productList }) => (
  <aside class="checkout-list">
    <ul>
      <For each="position" of={productList.positions}>
        <li key={index}>
          <p>{position.product.title}</p>
          <p>{position.quantity}</p>
          <p>
            {position.total}
            $
          </p>
        </li>
      </For>
    </ul>
    <p>
      Total price $
      {productList.total}
    </p>
  </aside>
);
