import categories from './categories.json';
import products from './products.json';
import bannerImages from './bannerImages.json';
import subCategoies from './subCategories.json';
import slugMap from './slugMap.json';

export const getIdBySlug = (slug, type) => slugMap[type][slug];
export const getBannerData = () => new Promise((resolve) => {
  resolve(bannerImages);
});

export const getCategoriesListData = () => new Promise((resolve) => {
  resolve(categories);
});

export const getCategoryData = (id) => new Promise((resolve) => {
  resolve(categories.find((item) => item.id === id));
});

export const getProductsData = (id) => new Promise((resolve) => {
  resolve(subCategoies.find((item) => item.id === id));
});

export const getProduct = (id) => new Promise((resolve) => {
  const productDetails = products[id];
  resolve(productDetails);
});
