'use strict';

export default class PhonesService {
  static getPhones() {
    return fetch('./phones/phones.json')
      .then(function (response) {
        return response.json();
      });
  }

  static getPhone(id) {
    return fetch(`./phones/${id}.json`)
      .then(function (response) {
        return response.json();
      });
  }
}
