import { h } from "preact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  App  from "../App/App";

export const Root = () => (
  <Router basename="/">
    <App />
  </Router>
);

export default Root;
