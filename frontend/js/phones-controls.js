import Component from './component.js';

export default class PhonesControls extends Component {
  constructor({ element }) {
    super(element);

    this._render();

    let filterElem = element.querySelector('[data-element="filter-control"]');
    let sortElem = element.querySelector('[data-element="sort-control"]');

    filterElem.addEventListener('input', () => {
      this._trigger('filter', filterElem.value);
    });

    sortElem.addEventListener('change', () => {
      this._trigger('sort', sortElem.value);
    });
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Search:
        <input data-element="filter-control">
      </p>

      <p>
        Sort by:
        <select data-element="sort-control">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
  }
}
