'use strict';

export default class PhonesFilter {
  constructor({element}) {
    this._element = element;

    this._render();

    this.on('keyup', this._onPhoneFilterEntered.bind(this));
  }

  _render() {
    this._element.innerHTML = `
      <p>
        <label>Search:</label>
        <input type="text" data-element="phone-filter">
      </p>
    `
  }

  on(eventName, callback) {
    this._element.addEventListener(eventName, callback);
  }

  _trigger(eventName, data) {
    let customEvent = new CustomEvent(eventName, {
      detail: data,
    });

    this._element.dispatchEvent(customEvent);
  }

  _onPhoneFilterEntered(event) {
    let searchField = event.target.closest('[data-element="phone-filter"]');

    if (!searchField) {
      return;
    }

    this._trigger('phoneFiltered', searchField.value);
  }
}
