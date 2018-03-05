'use strict';

export default class PhonesSort {
    constructor({element}) {
        this._element = element;

        this._render();

        this.on('change', this._onPhoneSorted.bind(this));
    }

    _render() {
        this._element.innerHTML = `
          <p>
              <label>Sort by:</label>
              <select data-element="phone-sort">
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
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

    _onPhoneSorted(event) {
        let sortField = event.target.closest('[data-element="phone-sort"]');

        if (!sortField) {
            return;
        }

        this._trigger('phoneSorted', sortField.value);
    }
}