'use strict';

export default class PhonesCatalogue {
  constructor({ element, phones,  }) {
    this._element = element;
    this._phones = phones;

    this._render();

    this.on('click', this._onPhoneItemClicked.bind(this));
  }

  on(eventName, callback) {
    this._element.addEventListener(eventName, callback);
  }

  of(eventName, callback) {
    this._element.removeEventListener(eventName, callback);
  }

  _trigger(eventName, data) {
    let customEvent = new CustomEvent(eventName, {
      detail: data,
    });

    this._element.dispatchEvent(customEvent);
  }

  _render() {
    let itemsHtml = '';

    for (let phone of this._phones) {
      itemsHtml += `
        <li class="thumbnail"
            data-element="phone-item"
            data-phone-id="${ phone.id }">
            
          <a href="#!/phones/${ phone.id }" class="thumb">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>
          <a href="#!/phones/${ phone.id }">${ phone.name }</a>
          <p>${ phone.snippet }</p>
        </li>
      `;
    }

    this._element.innerHTML = `
      <h2>Catalogue</h2>
      <ul class="phones">${ itemsHtml }</ul>
    `;
  }

  _onPhoneItemClicked(event) {
    let phoneElement = event.target.closest('[data-element="phone-item"]');

    if (!phoneElement) {
      return;
    }

    this._trigger('phoneSelected', phoneElement.dataset.phoneId);
  }
}