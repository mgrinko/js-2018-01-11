'use strict';

import Component from './component.js';

export default class PhonesControls extends Component {
  constructor({ element }) {
    super(element);
    this._element = element;

    this._render();

    let searchElem = element.querySelector('[data-element="phones-search"]');
    let sortElem = element.querySelector('[data-element="phones-sort"]');

    sortElem.addEventListener('change', () => {
      this._trigger('sort', sortElem.value);
    });

    searchElem.addEventListener('input', () => {
      this._trigger('search', searchElem.value);
    });
  }

  _render() {
    this._element.innerHTML = `
    <p>
        Search:
    <input data-element="phones-search">
    </p>
     <p>
        Sort by:
        <select data-element="phones-sort">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
     </p>
    `;
  }
}
