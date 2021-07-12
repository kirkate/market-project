import { h } from 'preact';

export const Category = ({ category }) => (
  <section class="models">
    <ul>
      <For each="item" of={category}>
        <li key={item.id}>
          <h2>{item.title}</h2>
        </li>
      </For>
    </ul>
  </section>
);
