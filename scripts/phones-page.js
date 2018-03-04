'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';
import PhonesControls from './phones-controls.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    this._shoppingCart = new ShoppingCart({
      element: document.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3],
    });

    this._controls = new PhonesControls({
      element: element.querySelector('[data-component="phones-controls"]')
    });

    this._phonesCatalogue = new PhonesCatalogue({
      element: document.querySelector('[data-component="phones-catalogue"]'),
      phones: PhonesService.getPhones(),
    });

    this._phonesCatalogue.on('phoneSelected', (event) => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    this._controls.on('filter', (event) => {
      const filterStr = event.detail;

      this._phonesCatalogue.filterByName(filterStr);
    });

    this._controls.on('sort', (event) => {
      const fieldName = event.detail;

      this._phonesCatalogue.sort(fieldName);
    });
  }

  _render() {
    // ... render page template
  }
}