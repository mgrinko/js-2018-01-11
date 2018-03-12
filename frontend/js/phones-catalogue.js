import Component from './component.js';

export default class PhonesCatalogue extends Component {
  constructor({element}) {
    super(element);

    this.on('click', this._onPhoneItemClicked.bind(this), '[data-element="phone-item"]');
  }

  setPhones(phones) {
    this._phones = phones;
    this._render();
  }

  _onPhoneItemClicked(event) {
    let phoneElement = event.target.closest('[data-element="phone-item"]');

    if (event.target.dataset.element === 'phone-add-btn') {
      this._trigger('phoneAdded', phoneElement.dataset.phoneId);

      return;
    }

    this._trigger('phoneSelected', phoneElement.dataset.phoneId);
  }

  _render() {
    let itemsHtml = '';
    let phones = this._filterTemplate ? this._filterByName() : this._phones;

    for (let phone of phones) {
      itemsHtml += `
        <li class="thumbnail"
            data-element="phone-item"
            data-phone-id="${ phone.id }">

          <a href="#!/phones/${ phone.id }" class="thumb">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>
          <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success" href="#!/add/${ phone.id }" data-element="phone-add-btn">Add</a>
          </div>
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
}
