'use strict';

import PhonesCatalogue from './phones-catalogue.js';
import PhonesService from './phones-service.js';
import PhonesFilter from './phones-filter.js';
import PhonesSort from './phones-sort.js';
import ShoppingCart from './shopping-cart.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    this._shoppingCart = new ShoppingCart({
      element: document.querySelector('[data-component="shopping-cart"]'),
      items: [1, 2, 3],
    });

    this._phonesFilter = new PhonesFilter({
      element: document.querySelector('[data-component="phones-filter"]')
    });

    this._phonesSort = new PhonesSort({
      element: document.querySelector('[data-component="phones-sort"]')
    });

    this._phonesCatalogue = new PhonesCatalogue({
      element: document.querySelector('[data-component="phones-catalogue"]'),
      phones: PhonesService.getPhones(),
    });

    this._phonesCatalogue.on('phoneSelected', (event) => {
      const phoneId = event.detail;

      this._shoppingCart.addItem(phoneId);
    });

    this._phonesFilter.on('phoneFiltered', (event) => {
      const searchedValue = event.detail;

      this._phonesCatalogue.searchPhone = this._phonesCatalogue.debounce(this._phonesCatalogue.filteredCatalog, 300);
      this._phonesCatalogue.searchPhone(searchedValue);
    });

    this._phonesSort.on('phoneSorted', (event) => {
      const sortedValue = event.detail;

        this._phonesCatalogue.sortedCatalog(sortedValue);
    });


  }

  _render() {
    // ... render page template
  }

}