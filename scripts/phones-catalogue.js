'use strict';

export default class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;
    this._phones = phones;

    this._render();
  }

  _render() {
    let itemsHtml = '';

    for (let phone of this._phones) {
      itemsHtml += `
        <li class="thumbnail">
          <a href="#!/phones/${ phone.id }" class="thumb">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>
          <a href="#!/phones/motorola-xoom-with-wi-fi">${ phone.name }</a>
          <p>${ phone.snippet }</p>
        </li>
      `;
    }

    this._element.innerHTML = `
      <ul class="phones">${ itemsHtml }</ul>
    `;
  }
}