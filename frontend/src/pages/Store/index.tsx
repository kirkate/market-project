import { h } from 'preact';
import {
  Route,
  useHistory,
  useParams,
  useLocation,
  Switch,
} from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import {
  getCategoryData,
  getCaterogiesData,
  getProductsData,
} from '../../services/api';
import { Container } from '../../components/Container/index';
import { Categories } from '../../components/Categories/index';
import { Products } from '../../components/Products/index';

export const Store = () => {
  const [categories, setCategories] = useState(null);
  const [subCategories, setSubCatgories] = useState(null);
  const [products, setProducts] = useState(null);
  const [activeIdCategory, setActiveIdCategory] = useState('1');
  const [activeSubIdCategory, setActiveSubIdCategory] = useState(null);
  const params = useParams();
  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
    getCaterogiesData().then((result) => {
      setCategories(result);
    });
  }, []);

  useEffect(() => {
    getCategoryData(activeIdCategory).then((data) => {
      if (history.location.pathname === '/store') {
        history.replace('/store/iphone');
      }
      data && setSubCatgories(data);
    });
  }, [params]);

  useEffect(() => {
    getProductsData(activeSubIdCategory).then((data) => {
      data && setProducts(data.products);
    });
  }, [activeSubIdCategory]);

  function handleCategoryClick(categorySlug, event) {
    event.preventDefault();
    history.replace(categorySlug);
    setActiveIdCategory(event.target.dataset.id);
  }

  function handleSubCategoryClick(subCategoryId, event) {
    event.preventDefault();

    history.push(`${location.pathname}/${subCategoryId}`);
    setActiveSubIdCategory(subCategoryId);
  }

  const handleAddToCart = () => {
  };

  return (
    <Container>
      <section class="store">
        <Switch>
          <Route
            path="/store/:categorySlug"
            exact
            render={() => (
              <Categories
                categories={categories}
                handleCategoryClick={handleCategoryClick}
                subCategories={subCategories}
                onSubCategoryClick={handleSubCategoryClick}
              />
            )}
          />

          <Route
            path="/store/:categorySlug/:subCategorySlug"
            render={() => (
              <Products products={products} addToCart={handleAddToCart} />
            )}
          />
        </Switch>
      </section>
    </Container>
  );
};
