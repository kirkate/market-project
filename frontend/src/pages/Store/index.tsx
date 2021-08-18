import { h } from 'preact';
import {
  Route, useHistory, useLocation, Switch,
} from 'react-router-dom';
import { useEffect, useState, useCallback } from 'preact/hooks';
import { Container } from '../../components/Container';
import { Categories } from '../../components/Categories';
import { Products } from '../../components/Products';

export const Store = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (history.location.pathname === '/store') {
      history.replace('/store/iphone');
    }
  }, []);

  const [activeSubIdCategory, setActiveSubIdCategory] = useState(null);
  const handleSubCategoryClick = useCallback((subCategoryId, event) => {
    event.preventDefault();

    history.push(`${location.pathname}/${subCategoryId}`);
    setActiveSubIdCategory(subCategoryId);
  }, []);

  return (
    <Container>
      <section class="store">
        <Switch>
          <Route
            path="/store/:categorySlug/:subCategorySlug"
            render={() => (
              <Products activeSubIdCategory={activeSubIdCategory} />
            )}
          />
          <Route
            path="/store/:categorySlug"
            exact
            render={() => (
              <Categories onSubCategoryClick={handleSubCategoryClick} />
            )}
          />
        </Switch>
      </section>
    </Container>
  );
};
