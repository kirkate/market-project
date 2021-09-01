import { h } from 'preact';
import { Link } from 'react-router-dom';

export const SideBar = ({ categories }) => (
  <aside class="sidebar">
    <If condition={categories}>
      <ul>
        <For each="category" of={categories}>
          <li key={category.id}>
            <Link replace to={`/store/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        </For>
      </ul>
    </If>
  </aside>
);
