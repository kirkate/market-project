import { h } from 'preact';
import { Route, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { getProductsData, getSideBarData } from '../../services/api';
import { SideBar } from '../../components/SideBar';
import { Container } from '../../components/Container/index';
import { Products } from '../../components/Products/index';

export const Store = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getSideBarData().then((result) => {
      setCategories(result);
    });
  }, []);

  useEffect(() => {
    getProductsData().then((result) => {
      if (history.location.pathname === '/store') {
        history.replace('/store/1');
      }
      const findProducts = result.find((item) => params.categoryId === item.id);
      findProducts && setProducts(findProducts.products);
    });
  }, [params.categoryId]);

  return (
    <Container>
      <section class="store">
        <SideBar categories={categories} />
        <Route
          path="/store/:categoryId"
          render={() => <Products products={products} />}
        />
      </section>
    </Container>
  );
};
