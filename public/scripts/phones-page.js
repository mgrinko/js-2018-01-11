'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';
import PhonesControls from './phones-controls.js';
import PhoneDetails from './phone-details.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;
    this._query = '';
    this._sortField = '';

    this._render();

    this._initPhonesCatalogue();
    this._initControls();
    this._initShoppingCart();
    this._initPhoneDetails();
  }

  _initPhonesCatalogue() {
    this._phonesCatalogue = new PhonesCatalogue({
      element: this._element.querySelector('[data-component="phones-catalogue"]'),
    });

    PhonesService.getPhones(this._showPhones.bind(this));

    this._phonesCatalogue.on('phoneAdded', (event) => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    this._phonesCatalogue.on('phoneSelected', (event) => {
      const phoneId = event.detail;

      PhonesService.getPhone(phoneId, (phone) => {
        this._phoneDetails.show(phone);
        this._phonesCatalogue.hide();
      });
    });
  }

  _initControls() {
    this._controls = new PhonesControls({
      element: this._element.querySelector('[data-component="phones-controls"]')
    });

    this._controls.on('filter', (event) => {
      this._query = event.detail;

      PhonesService.getPhones(this._showPhones.bind(this), {
        query: this._query,
        order: this._sortField,
      });
    });

    this._controls.on('sort', (event) => {
      this._sortField = event.detail;

      PhonesService.getPhones(this._showPhones.bind(this), {
        query: this._query,
        order: this._sortField,
      });
    });
  }

  _initShoppingCart() {
    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3],
    });
  }

  _initPhoneDetails() {
    this._phoneDetails = new PhoneDetails({
      element: this._element.querySelector('[data-component="phone-details"]')
    });

    this._phoneDetails.on('addBtnClicked', e => {
      let phoneId = e.detail;

      this._shoppingCart.addItem(phoneId);
    });

    this._phoneDetails.on('backBtnClicked', () => {
      this._phonesCatalogue.show();
      this._phoneDetails.hide();
    });
  }



  _showPhones(phones) {
    this._phonesCatalogue.setPhones(phones);
  }

  _render() {
    // ... render page template
  }
}
