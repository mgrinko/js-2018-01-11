'use strict';

import Component from './component.js';

export default class PhonesCatalogue extends Component {
  constructor({ element, phones }) {
    super(element);
    this._element = element;

    // events
    this.on('click', this._onPhoneItemClicked.bind(this), '[data-element="phone-item"]');
  }

  setPhones(phones) {
    this._phones = phones;
    this._render();
  }

  _onPhoneItemClicked(event) {
    let phoneElement = event.target.closest('[data-element="phone-item"]');

    if (event.target.dataset.element === 'add-btn') {
      this._trigger('phoneAdded', phoneElement.dataset.phoneId);

      return;
    }

    this._trigger('phoneSelected', phoneElement.dataset.phoneId);
  }

  // render method
  _render() {
    let itemsHtml = '';

    this._phones.forEach(phone => {
      itemsHtml += `
          <li class="thumbnail" data-element="phone-item" data-phone-id="${phone.id}">
            <a href="#!/phones/${phone.id}" class="thumb">
              <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>
            <a href="#!/phones/${phone.id}">${phone.name}</a>
            <p>${phone.snippet}</p>
            <button data-element="add-btn">add in cart</button>
          </li>
        `;
    });

    this._element.innerHTML = `
      <h2>Catalogue</h2>
      <ul class="phones">${itemsHtml}</ul>
    `;
  }
}
