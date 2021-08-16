import { h } from 'preact';
import { NavLink, Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
export const Header = () => (h("header", null,
    h("nav", { class: "header-navigation" },
        h(NavLink, { to: routes.home },
            h("h3", null, "Logo")),
        h(NavLink, { to: routes.store },
            h("h3", null, "Store")),
        h(Switch, null,
            h(Route, { exact: true, path: routes.home }, "Contacts"),
            h(Route, { path: "*" },
                h(NavLink, { to: routes.cart }, "Cart"))))));
