'use strict';

class PhoneCatalogue {
  constructor({ catalogueElement, phoneData, searchFields }) {
    this._element = catalogueElement;
    this._searchFields = searchFields;
    this._searchEl = document.querySelector('.phone__list--search');
    this._sortEl = document.querySelector('.phone__list--sort');

    let data = phoneData;
    let changeSortSelected = this._sortEl.options[this._sortEl.options.selectedIndex].text;

    let dataSort, dataSearch;

    // default render
    dataSort = this._sort(data, changeSortSelected);
    this._render(dataSort);

    // user type text in input search
    this._searchEl.onkeyup = event => {
      this._inputText = event.target.value;
      changeSortSelected = this._sortEl.options[this._sortEl.options.selectedIndex].text;

      if (this._inputText.length > 0) {
        dataSearch = this._search(data);
        dataSort = this._sort(dataSearch, changeSortSelected);
        this._render(dataSort);
      }

      if (this._inputText === '') {
        dataSort = this._sort(data, changeSortSelected);
        this._render(dataSort);
      }
    };

    // sort selected
    this._sortEl.onchange = event => {
      changeSortSelected = this._sortEl.options[this._sortEl.options.selectedIndex].text;

      if (this._searchEl.value.length > 0) {
        dataSearch = this._search(data);
        dataSort = this._sort(dataSearch, changeSortSelected);
        this._render(dataSort);
        return;
      }

      dataSort = this._sort(data, changeSortSelected);
      this._render(dataSort);
    };

    // show name
    this._element.onclick = event => {
      if (event.target.tagName === 'A') {
        this._showName(event.target.text);
      }

      if (event.target.tagName === 'IMG') {
        this._showName(event.target.alt);
      }
    };
  }

  // render phoneList method
  _render(data) {
    // if not data return
    if (data.length === 0) {
      this._element.innerHTML = '<span>По вашему запросу ничего не нашлось!</span>';
      return;
    }

    //create ul
    let list = document.createElement('ul');
    list.classList.add('phones');

    // add li in ul
    data.forEach(item => {
      list.innerHTML +=
        '' +
        '<li class="thumbnail">' +
        '<a href="" class="thumb">' +
        '<img alt="' +
        item.name +
        '" src="' +
        item.imageUrl +
        '">' +
        '</a>' +
        '<a href="#">' +
        item.name +
        '</a>' +
        '<p>' +
        item.snippet +
        '</p>' +
        '</li>';
    });

    // clear element
    this._element.innerHTML = '';

    // add ul in element
    this._element.appendChild(list);
  }

  // search phone method
  _search(data) {
    let searchResult = [];
    let inputTextUpper = this._inputText.toUpperCase();

    data.forEach(phone => {
      for (let key in phone) {
        this._searchFields.forEach(field => {
          if (key === field) {
            if (phone[key].toUpperCase().indexOf(inputTextUpper) !== -1) {
              if (searchResult.indexOf(phone) === -1) {
                searchResult.push(phone);
              }
            }
          }
        });
      }
    });

    return searchResult;
  }

  // sort phone method
  _sort(data, sortBy) {
    // sort for age
    function compareAge(personA, personB) {
      return personA.age - personB.age;
    }
    // sort for name
    function compareName(personA, personB) {
      let pA = personA.name.toUpperCase();
      let pB = personB.name.toUpperCase();

      if (pA < pB) {
        return -1;
      }

      if (pA > pB) {
        return 1;
      }

      return 0;
    }
    // return sort data
    switch (sortBy) {
      case 'Newest':
        return data.sort(compareAge);
      case 'Alphabetical': {
        return data.sort(compareName);
      }
      default:
        return data.sort(compareAge);
    }
  }

  // show alert name
  _showName(name) {
    alert(name);
  }
}

// show catalogue
let catalogue = new PhoneCatalogue({
  catalogueElement: document.querySelector('.phone-list'),
  phoneData: phones,
  searchFields: ['name', 'snippet']
});
