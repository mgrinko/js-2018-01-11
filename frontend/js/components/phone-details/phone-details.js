import Component from '../../component.js';
import compiledTemplate from './phone-details.hbs';

console.log(compiledTemplate);

export default class PhoneDetails extends Component {
  constructor({element}) {
    super(element);

    this.on('click', this._triggerBack.bind(this), '[data-element="back-btn"]');
    this.on('click', this._triggerAdd.bind(this), '[data-element="add-btn"]');
    this.on('click', this._onImgClick.bind(this), 'img');
  }

  show(phone) {
    this._render(phone);
    super.show();
  }

  _triggerBack() {
    this._trigger('backBtnClicked');
  }

  _triggerAdd() {
    this._trigger('addBtnClicked', this._element.dataset.phoneId);
  }

  _onImgClick(e) {
    this._element.querySelector('img.phone').src = e.target.src;
  }

  _render(phone) {
    let phoneHtml = compiledTemplate({ phone: phone });

    this._element.innerHTML = phoneHtml;
    this._element.dataset.phoneId = phone.id;
  }

}
