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

    // get all phones
    PhonesService.getPhones()
      .then(this._showPhones.bind(this))
      .catch(error => console.error(error.message));

    // Shopping cart initialize
    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3]
    });

    // Add phone in shopping cart
    this._phonesCatalogue.on('phoneAdded', event => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    // Phones control initialize
    this._phonesControls = new PhonesControls({
      element: this._element.querySelector('[data-component="phones-control"]')
    });

    // Sort method
    this._phonesControls.on('sort', event => {
      PhonesService.getPhones(event.detail)
        .then(this._showPhones.bind(this))
        .catch(error => console.error(error.message));
    });

    // Search method
    this._phonesControls.on('search', event => {
      PhonesService.getPhones(event.detail)
        .then(this._showPhones.bind(this))
        .catch(error => console.error(error.message));
    });

    // Phones details initialize
    this._phonesDetails = new PhonesDetails({
      element: this._element.querySelector('[data-component="phones-details"]')
    });

    // Show selected phone
    this._phonesCatalogue.on('phoneSelected', event => {
      const phoneId = event.detail;

      let phonePromise = PhonesService.getPhone(phoneId);

      phonePromise.then(phone => {
        this._phonesCatalogue.hide();
        this._phonesDetails.showElement(phone);
      });
    });

    // Phone details back btn
    this._phonesDetails.on('backBtnClicked', () => {
      this._phonesDetails.hide();
      this._phonesCatalogue.show();
    });

    // Phone details add btn
    this._phonesDetails.on('addBtnClicked', event => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });
  }

  _showPhones(phones) {
    this._phonesCatalogue.setPhones(phones);
  }

  _render() {
    // ... render page template
  }
}
