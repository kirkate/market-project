import { h } from 'preact';
// import { NavLink } from 'react-router-dom';

export const SideBar = ({ categories, onCategoryClick }) => (
  <aside class="sidebar">
    <If condition={categories}>
      <ul class="categories">
        <For each="category" of={categories}>
          <li key={category.id} class="category">
            <a
              href={`/store/${category.slug}`}
              onClick={onCategoryClick.bind(null, category.id)}
            >
              {category.title}
            </a>
          </li>
        </For>
      </ul>
    </If>
  </aside>
);
