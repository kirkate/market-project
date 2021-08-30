import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { SideBar } from '../SideBar';
import { getCategoriesListData, getCategoryData } from '../../services/api';
import slugMap from '../../services/slugMap.json';

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
    const categoryID = slugMap.categories[params.categorySlug];
    getCategoryData(categoryID).then((result) => setSubCategories(result.products));
  }, [location.pathname]);

  const handleSubCategoryClick = useCallback((subCategorySlug, event) => {
    event.preventDefault();
    history.push(`${location.pathname}/${subCategorySlug}`);
  }, [location.pathname]);
  return (
    <div class="filter-categories">
      <SideBar categories={categories} />
      <If condition={subCategories}>
        <ul class="subCategories">
          <For each="subCategory" of={subCategories}>
            <li key={subCategory.id} class="subCategory">
              <figure class="subCategory-image">
                <img
                  src={subCategory.imageUrl}
                />
              </figure>
              <a
                href={`/store/${params.categorySlug}/${subCategory.id}`}
                onClick={handleSubCategoryClick.bind(null, subCategory.slug)}
              >
                {subCategory.title}
              </a>
            </li>
          </For>
        </ul>
      </If>
    </div>
  );
};
