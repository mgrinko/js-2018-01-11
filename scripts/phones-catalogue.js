'use strict';

import Component from './component.js';

export default class PhonesCatalogue extends Component {
  constructor({ element, sortElement, searchElement, phones }) {
    super();
    this._element = element;
    this._sortBy = 'name';
    this._searchEl = searchElement;
    this._phones = phones;

    // default sort and render
    this._render(this._sort(this._phones));

    // events
    this.on('click', this._onPhoneItemClicked.bind(this));
  }

  // render method
  _render() {
    let itemsHtml = '';
    let phones = this._searchText ? this._search() : this._phones;

    for (let phone of phones) {
      itemsHtml += `
        <li class="thumbnail">
          <a href="#!/phones/${phone.id}" class="thumb">
            <img alt="${phone.name}" src="${phone.imageUrl}">
          </a>
          <a href="#!/phones/${phone.id}">${phone.name}</a>
          <p>${phone.snippet}</p>
          <button data-element="phone-item"
            data-phone-id="${phone.id}">add in cart</button>
        </li>
      `;
    }

    this._element.innerHTML = `
      <h2>Catalogue</h2>
      <ul class="phones">${itemsHtml}</ul>
    `;
  }

  // Sort method
  sort(sortBy) {
    this._sortBy = sortBy;
    this._sort();
    this._render();
  }

  _sort() {
    // sort for age
    function compareAge(personA, personB) {
      return personA.age - personB.age;
    }
    // sort for name
    function compareName(personA, personB) {
      let pA = personA.name.toUpperCase();
      let pB = personB.name.toUpperCase();

      return pA > pB ? 1 : -1;
    }
    // return sort data
    switch (this._sortBy) {
      case 'age':
        return this._phones.sort(compareAge);
      case 'name': {
        return this._phones.sort(compareName);
      }
      default:
        return this._phones.sort(compareAge);
    }
  }

  // Search method
  search(inputText) {
    this._searchText = inputText.toUpperCase();
    this._search();
    this._render();
  }

  _search() {
    let phonesSearch = [];

    this._phones.forEach(phone => {
      if (phone.snippet.toUpperCase().indexOf(this._searchText) !== -1) {
        phonesSearch.push(phone);
      }
    });

    return phonesSearch;
  }

  // item click events
  _onPhoneItemClicked(event) {
    let phoneElement = event.target.closest('[data-element="phone-item"]');

    if (!phoneElement) {
      return;
    }

    this._trigger('phoneSelected', phoneElement.dataset.phoneId);
  }
}
