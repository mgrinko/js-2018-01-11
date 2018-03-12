'use strict';

const BASE_API_URL = 'https://mgrinko.github.io/js-2018-01-11/data';
// const BASE_API_URL = 'http://localhost:3000/data';

export default class PhonesService {
  static getPhones({ query, order: orderField } = {}) {
    let url = BASE_API_URL + '/phones/phones.json';

    return fetch(url)
      .then((response) => response.json())
      .then((phones) => {
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

        return filteredPhones;
      });
  }

  static getPhone(phoneId) {
    let url = BASE_API_URL + `/phones/${ phoneId }.json`;

    return fetch(url)
      .then((response) => response.json());
  }
}


