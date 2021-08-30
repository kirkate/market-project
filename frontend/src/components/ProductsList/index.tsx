import { h } from 'preact';
import { useState } from 'preact/hooks';
import { CartService } from '../../services/cartService';

export const ProductsList = ({ productList }) => (
  <aside class="checkoutList">
    <ul class="productsList">
      <For each="position" of={productList.positions}>
        <li key={index} class="productItem">
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
