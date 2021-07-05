import { h } from 'preact';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

export const Root = () => (
  <Router basename="/">
    <App />
  </Router>
);
