import { h, render } from 'preact';
import { App } from './App';
import { supportedThemes, themeAttributeName, themeNames } from './constants/themes';
// @ts-ignore
import css from './styles.css';

const mainEl = document.createElement('main');
const styleEl = document.createElement('style');
styleEl.textContent = css;

customElements.define('mfe-boilerplate', class extends HTMLElement {
  constructor() {
    super();

    const currentTheme = this.getAttribute(themeAttributeName);
    if (!supportedThemes.includes(currentTheme)) {
      this.setAttribute(themeAttributeName, themeNames.tui);
    }

    this.attachShadow({ mode: 'closed' }).append(styleEl, mainEl);
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
