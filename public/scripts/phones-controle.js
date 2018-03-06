'use strict';

import Component from './component.js';

export default class PhonesControls extends Component {
  constructor({ element }) {
    super();
    this._element = element;

    this._render();

    this._sortEl = this._element.querySelector('[data-element="phones-sort"]');
    this._sortEl.addEventListener('change', event => {
      this._trigger('sort', event.target.value);
    });

    this._searchEl = this._element.querySelector('[data-element="phones-search"]');
    this._searchEl.addEventListener('keyup', event => {
      this._trigger('search', event.target.value);
    });
  }

  _render() {
    this._element.innerHTML =
      '<p>\n' +
      '   Search:\n' +
      '   <input data-element="phones-search">\n' +
      '</p>\n' +
      '\n' +
      '<p>\n' +
      '   Sort by:\n' +
      '   <select data-element="phones-sort">\n' +
      '       <option value="name">Alphabetical</option>\n' +
      '       <option value="age">Newest</option>\n' +
      '   </select>\n' +
      '</p>';
  }
}
