import { h } from 'preact';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { ProductDetails } from '../../components/ProductDetails';
import { AccessoriesList } from '../../components/AccessoriesList';
import { getProduct, getIdBySlug } from '../../services/api';
import { Container } from '../../components/Container';
import { CartService } from '../../services/cartService';
import { Notification } from '../../components/Notification';

export const Product = () => {
  const params = useParams();
  const [productDetails, setProductsDetails] = useState({});
  const [showAccessories, setShowAccessories] = useState(false);
  const [cartTrigger, setCartTrigger] = useState(false);

  useEffect(() => {
    const productID = getIdBySlug(params.productSlug, 'products');
    getProduct(productID).then((result) => setProductsDetails(result));
  }, []);

  const handleAddToCart = (product) => {
    CartService.addItem(product);

    setCartTrigger(true);
    setTimeout(() => setCartTrigger(false), 2000);
    setShowAccessories(true);
  };
  return (
    <Container>
      <section class="product">
        <ProductDetails product={productDetails} onHandleAddToCart={handleAddToCart} />
        <If condition={showAccessories}>
          <AccessoriesList />
        </If>
      </section>
      <Notification cartTrigger={cartTrigger} />
    </Container>
  );
};
