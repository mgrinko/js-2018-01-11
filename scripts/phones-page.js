'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    // this._shoppingCart = new ShoppingCart({
    //   element: document.querySelector('[data-component="shopping-cart"]'),
    // });

    this._phonesCatalogue = new PhonesCatalogue({
      element: document.querySelector('[data-component="phones-catalogue"]'),
      phones: PhonesService.getPhones(),
    });

    this._phonesCatalogue._element.addEventListener('phoneSelected', (event) => {
      alert(event.detail);
    });


  }

  _render() {
    // ... render page template
  }
}