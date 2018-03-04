'use strict';

export default class Component {
  constructor(element) {
    this._element = element;
  }

  on(eventName, callback) {
    this._element.addEventListener(eventName, callback);
  }

  off(eventName, callback) {
    this._element.removeEventListener(eventName, callback);
  }

  _trigger(eventName, data) {
    let customEvent = new CustomEvent(eventName, {
      detail: data
    });

    this._element.dispatchEvent(customEvent);
  }
}
