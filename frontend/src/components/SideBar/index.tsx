import { h } from 'preact';
import { NavLink } from 'react-router-dom';

export const SideBar = ({ categories }) => (
  <aside class="sidebar">
    <If condition={categories}>
      <ul class="categories">
        <For each="category" of={categories}>
          <li key={category.id} class="category">
            <NavLink to={`/store/${category.id}`}>{category.title}</NavLink>
          </li>
        </For>
      </ul>
    </If>
  </aside>
);
