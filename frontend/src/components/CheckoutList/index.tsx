import { h } from 'preact';

export const CheckoutList = ({ productList }) => (

  <aside class="checkout-list">
    <table>
      <For each="position" of={productList.positions}>
        <tr>
          <td>
            {position.product.title}
          </td>
          <td>
            {position.quantity}
          </td>
          <td>
            {position.total}
            $
          </td>
        </tr>
      </For>
    </table>
    <p>
      Total price $
      {productList.total}
    </p>
  </aside>
);
