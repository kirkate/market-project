import { h } from 'preact';
import {
  Route, useHistory, useLocation, Switch,
} from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { Container } from '../../components/Container/index';
import { Categories } from '../../components/Categories/index';
import { Products } from '../../components/Products/index';

export const Store = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (history.location.pathname === '/store') {
      history.replace('/store/iphone');
    }
  }, []);

  const [activeSubIdCategory, setActiveSubIdCategory] = useState(null);
  function handleSubCategoryClick(subCategoryId, event) {
    event.preventDefault();

    history.push(`${location.pathname}/${subCategoryId}`);
    setActiveSubIdCategory(subCategoryId);
  }

  return (
    <Container>
      <section class="store">
        <Switch>
          <Route
            path="/store/:categorySlug"
            exact
            render={() => (
              <Categories onSubCategoryClick={handleSubCategoryClick} />
            )}
          />
          <Route
            path="/store/:categorySlug/:subCategorySlug"
            render={() => (
              <Products activeSubIdCategory={activeSubIdCategory} />
            )}
          />
        </Switch>
      </section>
    </Container>
  );
};
