'use strict';

import Component from './component.js';

export default class PhonesCatalogue extends Component {
  constructor({ element, sortElement, searchElement, phones }) {
    super();
    this._element = element;
    this._sortEl = sortElement;
    this._searchEl = searchElement;
    this._phones = phones;

    // default sort and render
    this._render(this._sort(this._phones));

    // events
    this.on('click', this._onPhoneItemClicked.bind(this));
    this._sortEl.addEventListener('change', this._onSelectChange.bind(this));
    this._searchEl.addEventListener('keyup', this._onSearchInputKeyUp.bind(this));
  }

  // render method
  _render(data) {
    let itemsHtml = '';

    for (let phone of data) {
      itemsHtml += `
        <li class="thumbnail"
            data-element="phone-item"
            data-phone-id="${phone.id}">
            
          <a href="#!/phones/${phone.id}" class="thumb">
            <img alt="${phone.name}" src="${phone.imageUrl}">
          </a>
          <a href="#!/phones/${phone.id}">${phone.name}</a>
          <p>${phone.snippet}</p>
        </li>
      `;
    }

    this._element.innerHTML = `
      <h2>Catalogue</h2>
      <ul class="phones">${itemsHtml}</ul>
    `;
  }

  // Sort method
  _sort(data, sortBy) {
    let sortValue = sortBy || this._sortEl.value;

    // sort for age
    function compareAge(personA, personB) {
      return personA.age - personB.age;
    }
    // sort for name
    function compareName(personA, personB) {
      let pA = personA.name.toUpperCase();
      let pB = personB.name.toUpperCase();

      if (pA < pB) {
        return -1;
      }
      if (pA > pB) {
        return 1;
      }

      return 0;
    }
    // return sort data
    switch (sortValue) {
      case 'age':
        return data.sort(compareAge);
      case 'name': {
        return data.sort(compareName);
      }
      default:
        return data.sort(compareAge);
    }
  }

  // Search method
  _search(data, text) {
    let textUpper = text.toUpperCase();
    let phonesSearch = [];

    if (!data) {
      return;
    }

    if (textUpper.length > 0) {
      data.forEach(phone => {
        if (phone.snippet.toUpperCase().indexOf(textUpper) !== -1) {
          phonesSearch.push(phone);
        }
      });
    }
    return phonesSearch;
  }

  // search keyup events
  _onSearchInputKeyUp(event) {
    let inputText = event.target.value;
    let phonesSearch = this._search(this._phones, inputText);

    if (inputText.length === 0) {
      this._render(this._sort(this._phones));
      return;
    }

    if (inputText.length > 0 && phonesSearch.length !== 0) {
      this._render(this._sort(phonesSearch));
    } else {
      this._element.innerHTML = '<h4>По вашему запросу ничего не найдено!</h4>';
    }
  }

  // selected events
  _onSelectChange(event) {
    let inputSearchText = this._searchEl.value;
    let sortName = event.target.value;

    if (inputSearchText.length > 0) {
      this._render(this._sort(this._search(this._phones, inputSearchText), sortName));
      return;
    }

    this._render(this._sort(this._phones, event.target.value));
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
