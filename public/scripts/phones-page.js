'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';
import PhonesControls from './phones-controls.js';
import PhoneDetails from './phone-details.js';

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
    });

    PhonesService.getPhones(this._showPhones.bind(this));

    this._phonesCatalogue.on('phoneAdded', (event) => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    this._phonesCatalogue.on('phoneSelected', (event) => {
      const phoneId = event.detail;
      const phone = PhonesService.getPhone(phoneId);

      this._phoneDetails.show(phone);
      this._phonesCatalogue.hide();
    });

    this._phoneDetails = new PhoneDetails({
      element: element.querySelector('[data-component="phone-details"]')
    });

    this._phoneDetails.on('addBtnClicked', e => {
      let phoneId = e.detail;

      this._shoppingCart.addItem(phoneId);
    });

    this._phoneDetails.on('backBtnClicked', () => {
      this._phonesCatalogue.show();
      this._phoneDetails.hide();
    });

    this._controls.on('filter', (event) => {
      PhonesService.getPhones(this._showPhones.bind(this), {
        query: event.detail
      });
    });

    this._controls.on('sort', (event) => {
      const fieldName = event.detail;

    });
  }

  _showPhones(phones) {
    this._phonesCatalogue.setPhones(phones);
  }

  _render() {
    // ... render page template
  }
}
