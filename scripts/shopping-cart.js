'use strict';

export default class ShoppingCart {
  constructor({ element, items = [] }) {
    this._element = element;

    this._items = items;

    this._render();
  }

  addItem(item) {
    this._items.push(item);

    this._render();
  }

  _render() {
    let itemsHtml = this._items
      .map((item) => `<li>${ item }</li>`)
      .join('');

    this._element.innerHTML = `
      <p>Shopping Cart</p>
      <ul>
        ${ itemsHtml }
      </ul>
    `;
  }
}