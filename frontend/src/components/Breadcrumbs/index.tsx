import { h } from 'preact';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Container } from '../Container';

export const Breadcrumbs = () => {
  const history = useHistory();
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((path) => path);

  return (
    <Container>
      <ul class="breadcrumbs">
        {pathnames.length > 0 && (
          <li class="breadcrumbs__step">
            Home
          </li>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li class="breadcrumbs__step" key={name}>{name}</li>
          ) : (
            <li class="breadcrumbs__step">
              <Link class="breadcrumbs__link" key={name} onClick={() => history.push(routeTo)}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
