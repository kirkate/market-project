import { h } from 'preact';

export const Products = ({ products }) => (
  <If condition={products}>
    <ul class="products">
      <For each="item" of={products}>
        <li key={item.id}>
          <p>{item.title}</p>
        </li>
      </For>
    </ul>
  </If>
);
