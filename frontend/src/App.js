import { h } from 'preact';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { NotFound } from './pages/NotFound';
import { Store } from './pages/Store';
import { routes } from './constants/routes';
import { Header } from './components/Header';
export const App = () => (h(Router, { basename: "/" },
    h(Header, null),
    h(Switch, null,
        h(Route, { exact: true, path: routes.home, component: Home }),
        h(Route, { path: routes.cart, component: Cart }),
        h(Route, { path: routes.checkout, component: Checkout }),
        h(Route, { path: routes.store, component: Store }),
        h(Route, { path: "*", exact: true, component: NotFound }),
        h(Redirect, { from: routes.store, to: routes.categories }))));
