'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';
import PhonesControls from './phones-controle.js';

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
      phones: PhonesService.getPhones()
    });

    // Add phone in shopping cart
    this._phonesCatalogue.on('phoneSelected', event => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    // Phones control initialize
    this._phonesControls = new PhonesControls({
      element: document.querySelector('[data-component="phones-control"]')
    });

    // Sort method
    this._phonesControls.on('sort', event => {
      const sortName = event.detail;

      this._phonesCatalogue.sort(sortName);
    });

    // Search method
    this._phonesControls.on('search', event => {
      const searchText = event.detail;

      this._phonesCatalogue.search(searchText);
    });
  }

  _render() {
    // ... render page template
  }
}
