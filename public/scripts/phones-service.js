'use strict';

export default class PhonesService {
  static getPhones(params = {}) {
    return new Promise((resolve) => {
      let url = '/data/phones/phones.json';

      if (params.query) {
        url += '?query=' + params.query;
      }

      PhonesService.sendRequest(url)
        .then((phones) => {
          if (!params.query) {

            resolve(phones);
          }

          let filteredPhones = phones.filter((phone) => {
            return phone.name.toLowerCase().includes(params.query);
          });

          resolve(filteredPhones);
        }).catch(error => console.log(error));
    }).catch(error => console.log(error))
  }

  static getPhone(phoneId) {
    return new Promise((resolve) => {
      let url = `/data/phones/${phoneId}.json`;

      resolve(PhonesService.sendRequest(url));
    }).catch(error => console.log(error))
  }

  static sendRequest(url) {
    return new Promise((resolve) => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.send();

      xhr.onload = function () {
        if (xhr.status !== 200) {
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          let data = JSON.parse(xhr.responseText);

          resolve(data);
        }
      };
    }).catch(error => console.log(error))
  }
}
