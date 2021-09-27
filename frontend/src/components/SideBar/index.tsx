import { h } from 'preact';
import { Link } from 'react-router-dom';

export const SideBar = ({ categories }) => (
  <aside class="sidebar">
    <If condition={categories}>
      <ul class="sidebar__list">
        <For each="category" of={categories}>
          <li key={category.id} class="sidebar__item">
            <Link replace to={`/store/${category.slug}`} class="sidebar__link">
              {category.title}
            </Link>
          </li>
        </For>
      </ul>
    </If>
  </aside>
);
