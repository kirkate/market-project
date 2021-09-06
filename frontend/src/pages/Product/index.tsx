import { h } from 'preact';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { ProductDetails } from '../../components/ProductDetails';
import { AccessoriesList } from '../../components/AccessoriesList';
import { getProduct, getIdBySlug } from '../../services/api';
import { Container } from '../../components/Container';
import { CartService } from '../../services/cartService';

export const Product = () => {
  const params = useParams();
  const [productDetails, setProductsDetails] = useState({});

  useEffect(() => {
    const productID = getIdBySlug(params.productSlug, 'products');
    getProduct(productID).then((result) => setProductsDetails(result));
  }, []);
  const handleAddToCart = (product) => {
    CartService.addItem(product);
  };

  return (
    <Container>
      <section class="product-page">
        <ProductDetails product={productDetails} onHandleAddToCart={handleAddToCart} />
        <AccessoriesList />
      </section>
    </Container>
  );
};
