'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    // Shopping cart initialize
    this._shoppingCart = new ShoppingCart({
      element: document.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3]
    });

    // Phones catalogue initialize
    this._phonesCatalogue = new PhonesCatalogue({
      element: document.querySelector('[data-component="phones-catalogue"]'),
      sortElement: document.querySelector('[data-component="phones-sort"]'),
      searchElement: document.querySelector('[data-component="phones-search"]'),
      phones: PhonesService.getPhones()
    });

    // Add phone in shopping cart
    this._phonesCatalogue.on('phoneSelected', event => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });
  }

  _render() {
    // ... render page template
  }
}
