import Component from "./component.js";

export default class PhonesControls extends Component {
  constructor({element, sort, filter}) {
    super(element);

    this._render();

    element.querySelector('[data-element="filter-control"]')
      .addEventListener('input', (e) => {
        this._trigger('filter', e.target.value);
      });

    let sortElem = element.querySelector('[data-element="sort-control"]');

    sortElem.value = '';
    sortElem.addEventListener('change', (e) => {
      this._trigger('sort', e.target.value);
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
