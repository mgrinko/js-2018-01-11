'use strict';

const BASE_API_URL = 'https://mgrinko.github.io/js-2018-01-11/data';
// const BASE_API_URL = 'http://localhost:3000/data';

export default class PhonesService {
  static getPhones(callback, { query, order: orderField } = {}) {
    let url = BASE_API_URL + '/phones/phones.json';
    const requestParts = [];

    if (query) {
      requestParts.push(`query=${ query }`);
    }

    if (orderField) {
      requestParts.push(`order=${ orderField }`);
    }

    if (requestParts.length > 0) {
      url += '?' + requestParts.join('&');
    }

    PhonesService.sendRequest(url, (phones) => {
      let filteredPhones = phones;

      if (query) {
        const normalizedQuery = query.toLowerCase();

        filteredPhones = filteredPhones.filter((phone) => {
          return phone.name.toLowerCase().includes(normalizedQuery);
        });
      }

      if (orderField) {
        filteredPhones = filteredPhones.sort((a, b) => a[orderField] > b[orderField]);
      }

      callback(filteredPhones);
    });
  }

  static getPhone(phoneId, callback) {
    let url = BASE_API_URL + `/phones/${ phoneId }.json`;

    PhonesService.sendRequest(url, callback);
  }

  static sendRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.send();

    xhr.onload = function() {
      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        let data = JSON.parse(xhr.responseText);

        callback(data);
      }
    };
  }
}
