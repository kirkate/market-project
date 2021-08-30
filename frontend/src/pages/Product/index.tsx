import { h } from 'preact';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { ProductDetails } from '../../components/ProductDetails';
import { AccessoriesList } from '../../components/AccessoriesList';
import { getProduct } from '../../services/api';
import slugMap from '../../services/slugMap.json';

export const Product = () => {
  const params = useParams();
  const [productDetails, setProductsDetails] = useState({});

  useEffect(() => {
    const productID = slugMap.products[params.productSlug];
    getProduct(productID).then((result) => setProductsDetails(result));
  }, []);

  return (
    <section class="productPage">
      <ProductDetails product={productDetails} />
      <AccessoriesList />
    </section>
  );
};
