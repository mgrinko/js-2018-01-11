'use strict';

const BASE_API_URL = 'https://mgrinko.github.io/js-2018-01-11/data';
// const BASE_API_URL = 'http://localhost:3000/data';

export default class PhonesService {
  static getPhones({ query, order: orderField } = {}) {
    let url = BASE_API_URL + '/phones/phones.json';

    const result = PhonesService.sendRequest(url);

    result.then((phones) => {
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

      console.log(filteredPhones);
    });

    return result;
  }

  static getPhone(phoneId) {
    let url = BASE_API_URL + `/phones/${ phoneId }.json`;

    return PhonesService.sendRequest(url);
  }

  static sendRequest(url) {
    return new Promise(
      (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onload = function() {
          if (xhr.status !== 200) {
            reject(xhr.status + ': ' + xhr.statusText);
          } else {
            resolve(JSON.parse(xhr.responseText));
          }
        };
      }
    );
  }
}


