import { h } from 'preact';
import { useState } from 'preact/hooks';
import { CartService } from '../../services/cartService';

export const ProductsList = () => {
  const [productList] = useState(CartService.getItems());
  return (
    <aside className="checkoutList">
      <ul className="productsList">
        <For each="position" of={productList.positions}>
          <li key={index} className="productItem">
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
};
