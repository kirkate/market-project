import { h } from 'preact';
import { Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { getSideBarData } from '../../services/api';
import { Category } from '../Category';

export const SideBar = ({ match }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getSideBarData().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <aside class="sidebar">
      <If condition={categories}>
        <section class="categories">
          <ul>
            <For each="category" of={categories}>
              <li key={category.id} class="category">
                <NavLink to={`${match.url}${category.path}`}>
                  {category.title}
                </NavLink>
              </li>
            </For>
          </ul>

          <Route
            path={`${match.path}/:category`}
            render={(props) => {
              const subCategory = props.match.params.category;
              const category = categories.find(
                (model) => `/${subCategory}` === model.path,
              );
              return <Category category={category.models} />;
            }}
          />
        </section>
      </If>
    </aside>
  );
};
