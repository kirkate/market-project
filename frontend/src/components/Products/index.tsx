import { h } from 'preact';
import { Button } from '../Button/index';

export const Products = ({ products, addToCart }) => (
  <If condition={products}>
    <ul class="products">
      <For each="product" of={products}>
        <li key={product.id} class="product">
          <p>{product.title}</p>
          <Button name="+" onClick={addToCart} />
        </li>
      </For>
    </ul>
  </If>
);
