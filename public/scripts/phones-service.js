'use strict';

export default class PhonesService {
  // send request
  static sendRequest(url) {
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .catch(function(error) {
        console.error(error.message);
      });
  }

  // get phone by Id
  static getPhone(phoneId) {
    let url = `/data/phones/${phoneId}.json`;
    return PhonesService.sendRequest(url);
  }

  // get all phones
  static getPhones(params = {}) {
    let url = `/data/phones/phones.json`;

    if (!params.query && !params.sort) {
      // default
      return PhonesService.sendRequest(url)
        .then(phones => {
          return PhonesService.sort(phones, params);
        })
        .catch(error => console.error(error.message));
    }

    // filter
    if (params.query) {
      url += '?query=' + params.query;

      return PhonesService.sendRequest(url)
        .then(phones => {
          return PhonesService.filter(phones, params);
        })
        .catch(error => console.error(error.message));
    }

    // sort
    if (params.sort) {
      url += '?sort=' + params.sort;

      return PhonesService.sendRequest(url)
        .then(phones => {
          return PhonesService.sort(phones, params);
        })
        .catch(error => console.error(error.message));
    }
  }

  // filter method
  static filter(phones, params) {
    return phones.filter(phone => {
      return phone.name.toLowerCase().includes(params.query);
    });
  }

  // sort method
  static sort(phones, params) {
    // sort for age
    function compareAge(personA, personB) {
      return personA.age - personB.age;
    }
    // sort for name
    function compareName(personA, personB) {
      let pA = personA.name.toUpperCase();
      let pB = personB.name.toUpperCase();

      return pA > pB ? 1 : -1;
    }
    // return sort data
    switch (params.sort) {
      case 'age':
        return phones.sort(compareAge);
      case 'name': {
        return phones.sort(compareName);
      }
      default:
        return phones.sort(compareName);
    }
  }
}
