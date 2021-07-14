import { h } from 'preact';
import { Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { getSideBarData } from '../../services/api';
import { Products } from '../Products';

export const SideBar = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getSideBarData().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <section class="store">
      <aside class="sidebar">
        <If condition={categories}>
          <ul class="categories">
            <For each="category" of={categories}>
              <li key={category.id} class="category">

                <NavLink to={`/store/${category.id}`}>
                  {category.title}
                </NavLink>
              </li>
            </For>
          </ul>

        </If>
      </aside>
      <ul class="products">
        <Route
          path="/store/:id"
          component={Products}
        />
      </ul>
    </section>

  );
};
