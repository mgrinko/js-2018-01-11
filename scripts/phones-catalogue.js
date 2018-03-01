'use strict';

export default class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;
    this._phones = phones;

    this._render();
  }

  _render() {
    this._element.innerHTML = 'Hello phones Catalogue';
  }
}