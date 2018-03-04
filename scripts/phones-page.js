'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import ShoppingCart from './shopping-cart.js';
// import PhonesSearch from './phones-search.js';
// import PhonesSort from './phones-sort.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    // Shopping cart initialize
    this._shoppingCart = new ShoppingCart({
      element: document.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3]
    });

    // Phones sort initialize
    // this._phonesSort = new PhonesSort({
    //   element: document.querySelector('[data-component="phones-sort"]'),
    //   phones: PhonesService.getPhones()
    // });

    // Sort if selected
    // this._phonesSort.on('selectChangeBegin', event => {
    //   let phonesSort = event.detail;
    //
    //   this._phonesCatalogue.render(phonesSort);
    // });

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

    // Phones search initialize
    // this._phonesSearch = new PhonesSearch({
    //   element: document.querySelector('[data-component="phones-search"]'),
    //   phones: this._phonesSort.getDefaultSort()
    // });

    // if have search phone
    // this._phonesSearch.on('phonesSearch', event => {
    //   let phonesSearch = event.detail;
    //
    //   this._phonesCatalogue.render(phonesSearch);
    // });

    // not found search phone
    // this._phonesSearch.on('phonesSearchNotFound', event => {
    //   let message = event.detail;
    //
    //   this._phonesCatalogue.notification(message);
    // });

    // default phones list
    // this._phonesSearch.on('phonesDefault', event => {
    //   let phones = event.detail;
    //
    //   this._phonesCatalogue.render(phones);
    // });
  }

  _render() {
    // ... render page template
  }
}
