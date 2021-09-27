import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { SideBar } from '../SideBar';
import { getCategoriesListData, getCategoryData, getIdBySlug } from '../../services/api';
import { Container } from '../Container';

export const Categories = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const [categories, setCategories] = useState(null);
  const [subCategories, setSubCategories] = useState(null);

  useEffect(() => {
    getCategoriesListData().then((result) => setCategories(result));
  }, []);

  useEffect(() => {
    const categoryID = getIdBySlug(params.categorySlug, 'categories');
    getCategoryData(categoryID).then((result) => result && setSubCategories(result.products));
  }, [location.pathname]);

  const handleSubCategoryClick = useCallback((subCategorySlug, event) => {
    event.preventDefault();
    history.push(`${location.pathname}/${subCategorySlug}`);
  }, [location.pathname]);
  return (
    <Container>
      <div class="categories">
        <SideBar categories={categories} />
        <If condition={subCategories}>
          <ul class="categories__list">
            <For each="subCategory" of={subCategories}>
              <li key={subCategory.id} class="categories__category">
                <figure class="categories__image-block">
                  <img
                    class="categories__image"
                    src={subCategory.imageUrl}
                    alt="phone"
                  />
                </figure>
                <p class="categories__text">
                  {subCategory.priceRange.from}
                  {' '}
                  {' '}
                  -
                  {' '}
                  {' '}
                  {subCategory.priceRange.to}
                  {' '}
                  {' '}
                  $
                </p>

                <a
                  href={`/store/${params.categorySlug}/${subCategory.id}`}
                  onClick={handleSubCategoryClick.bind(null, subCategory.slug)}
                  class="categories__link"
                >

                  {subCategory.title}
                </a>

              </li>
            </For>
          </ul>
        </If>
      </div>
    </Container>
  );
};
