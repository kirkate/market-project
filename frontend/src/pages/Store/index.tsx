import { h } from 'preact';
import { Route, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { getCategoryData, getCaterogiesData } from '../../services/api';
import { SideBar } from '../../components/SideBar';
import { Container } from '../../components/Container/index';
import { Products } from '../../components/Products/index';

export const Store = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [activeIdCategory, setActiveIdCategory] = useState('1');
  const params = useParams();
  const history = useHistory();

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
      data && setProducts(data);
    });
  }, [params.categorySlug]);

  function handleCategoryClick(categorySlug, event) {
    event.preventDefault();
    history.replace(categorySlug);
    setActiveIdCategory(event.target.dataset.id);
  }
  return (
    <Container>
      <section class="store">
        <SideBar
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <Route
          path="/store/:categorySlug"
          render={() => <Products products={products} />}
        />
      </section>
    </Container>
  );
};
