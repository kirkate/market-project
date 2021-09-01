import { h } from 'preact';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { ProductDetails } from '../../components/ProductDetails';
import { AccessoriesList } from '../../components/AccessoriesList';
import { getProduct, getIdBySlug } from '../../services/api';

export const Product = () => {
  const params = useParams();
  const [productDetails, setProductsDetails] = useState({});

  useEffect(() => {
    const productID = getIdBySlug(params.productSlug, 'products');
    getProduct(productID).then((result) => setProductsDetails(result));
  }, []);

  return (
    <section class="product-page">
      <ProductDetails product={productDetails} />
      <AccessoriesList />
    </section>
  );
};
