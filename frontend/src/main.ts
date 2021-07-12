import 'preact/debug';
import { h, render } from 'preact';
import { App } from './App';
import css from './styles.css';

const mainEl = document.createElement('main');
const styleEl = document.createElement('style');
styleEl.textContent = css;

customElements.define('mfe-boilerplate', class extends HTMLElement {
  constructor() {
    super();

    this.append(styleEl, mainEl);
  }

  // eslint-disable-next-line class-methods-use-this
  connectedCallback() {
    render(h(App, null), mainEl);
  }

  // eslint-disable-next-line class-methods-use-this
  disconnectedCallback() {
    render(null, mainEl);
  }
});
