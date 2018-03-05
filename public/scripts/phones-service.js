'use strict';

export default class PhonesService {
  static getPhones(callback) {
    PhonesService.sendRequest('/data/phones/phones.json', callback);
  }

  static getPhone(id) {
    return phoneDetails;
  }

  static sendRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.send(); // (1)

    xhr.onload = function() { // (3)
      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        let data = JSON.parse(xhr.responseText);

        callback(data);
      }
    };
  }
}
