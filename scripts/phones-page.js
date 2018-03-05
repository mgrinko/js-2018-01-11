'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';
import PhonesControls from './phones-controle.js';
import PhonesDetails from './phones-details.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    // Phones catalogue initialize
    this._phonesCatalogue = new PhonesCatalogue({
      element: this._element.querySelector('[data-component="phones-catalogue"]'),
      phones: PhonesService.getPhones()
    });

    // Shopping cart initialize
    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3]
    });

    // Add phone in shopping cart
    this._phonesCatalogue.on('phoneAddButton', event => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    // Phones control initialize
    this._phonesControls = new PhonesControls({
      element: this._element.querySelector('[data-component="phones-control"]')
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

    // Phones details initialize
    this._phonesDetails = new PhonesDetails({
      element: this._element.querySelector('[data-component="phones-details"]')
    });

    this._phonesCatalogue.on('phoneSelected', event => {
      const phone = event.detail;

      this._phonesCatalogue.hide();
      this._phonesDetails.showElement(phone);
    });

    this._phonesDetails.on('backButtonClicked', event => {
      this._phonesDetails.hide();
      this._phonesCatalogue.show();
    });
  }

  _render() {
    // ... render page template
  }
}
