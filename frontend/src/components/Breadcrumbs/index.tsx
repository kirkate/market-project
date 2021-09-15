import { h } from 'preact';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Container } from '../Container';

export const Breadcrumbs = () => {
  const history = useHistory();
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((path) => path);

  return (
    <Container>
      <ul class="steps">
        {pathnames.length > 0 && (
          <li class="step">
            <Link onClick={() => history.push(routes.home)}>Home</Link>
          </li>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li class="step" key={name}>{name}</li>
          ) : (
            <li class="step">
              <Link key={name} onClick={() => history.push(routeTo)}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
