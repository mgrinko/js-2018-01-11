'use strict';

import Component from './component.js';

export default class PhonesDetails extends Component {
  constructor({ element }) {
    super();
    this._element = element;
    this._phonesCatalogue = document.querySelector('[data-page-phones-catalogue]');

    this.on('click', this._onBackButtonClicked.bind(this));
  }

  showElement(phone) {
    this.show();
    this._phone = phone;
    this._render();
  }

  _render() {
    this._element.innerHTML =
      '<div>\n' +
      '\n' +
      '    <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">\n' +
      '\n' +
      '    <button data-element="back">Back to list</button>\n' +
      '    <button>Add to basket</button>\n' +
      '\n' +
      '\n' +
      '    <h1>' +
      this._phone +
      '</h1>\n' +
      '\n' +
      '    <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>\n' +
      '\n' +
      '    <ul class="phone-thumbs">\n' +
      '      <li>\n' +
      '        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">\n' +
      '      </li>\n' +
      '    </ul>\n' +
      '\n' +
      '    <ul class="specs">\n' +
      '      <li>\n' +
      '        <span>Availability and Networks</span>\n' +
      '        <dl>\n' +
      '          <dt>Availability</dt>\n' +
      '          <dd></dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Battery</span>\n' +
      '        <dl>\n' +
      '          <dt>Type</dt>\n' +
      '          <dd>Other ( mAH)</dd>\n' +
      '          <dt>Talk Time</dt>\n' +
      '          <dd>24 hours</dd>\n' +
      '          <dt>Standby time (max)</dt>\n' +
      '          <dd>336 hours</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Storage and Memory</span>\n' +
      '        <dl>\n' +
      '          <dt>RAM</dt>\n' +
      '          <dd>1000MB</dd>\n' +
      '          <dt>Internal Storage</dt>\n' +
      '          <dd>32000MB</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Connectivity</span>\n' +
      '        <dl>\n' +
      '          <dt>Network Support</dt>\n' +
      '          <dd></dd>\n' +
      '          <dt>WiFi</dt>\n' +
      '          <dd>802.11 b/g/n</dd>\n' +
      '          <dt>Bluetooth</dt>\n' +
      '          <dd>Bluetooth 2.1</dd>\n' +
      '          <dt>Infrared</dt>\n' +
      '          <dd>✘</dd>\n' +
      '          <dt>GPS</dt>\n' +
      '          <dd>✓</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Android</span>\n' +
      '        <dl>\n' +
      '          <dt>OS Version</dt>\n' +
      '          <dd>Android 3.0</dd>\n' +
      '          <dt>UI</dt>\n' +
      '          <dd>Honeycomb</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Size and Weight</span>\n' +
      '        <dl>\n' +
      '          <dt>Dimensions</dt>\n' +
      '          <dd>249.1 mm (w)</dd>\n' +
      '          <dd>167.8 mm (h)</dd>\n' +
      '          <dd>12.9 mm (d)</dd>\n' +
      '          <dt>Weight</dt>\n' +
      '          <dd>708.0 grams</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Display</span>\n' +
      '        <dl>\n' +
      '          <dt>Screen size</dt>\n' +
      '          <dd>10.1 inches</dd>\n' +
      '          <dt>Screen resolution</dt>\n' +
      '          <dd>WXGA (1200 x 800)</dd>\n' +
      '          <dt>Touch screen</dt>\n' +
      '          <dd>✓</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Hardware</span>\n' +
      '        <dl>\n' +
      '          <dt>CPU</dt>\n' +
      '          <dd>1 GHz Dual Core Tegra 2</dd>\n' +
      '          <dt>USB</dt>\n' +
      '          <dd>USB 2.0</dd>\n' +
      '          <dt>Audio / headphone jack</dt>\n' +
      '          <dd>3.5mm</dd>\n' +
      '          <dt>FM Radio</dt>\n' +
      '          <dd>✘</dd>\n' +
      '          <dt>Accelerometer</dt>\n' +
      '          <dd>✓</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Camera</span>\n' +
      '        <dl>\n' +
      '          <dt>Primary</dt>\n' +
      '          <dd>5.0 megapixels</dd>\n' +
      '          <dt>Features</dt>\n' +
      '          <dd>Flash, Video</dd>\n' +
      '        </dl>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <span>Additional Features</span>\n' +
      '        <dd>Sensors: proximity, ambient light, barometer, gyroscope</dd>\n' +
      '      </li>\n' +
      '    </ul>\n' +
      '  </div>';
  }

  _onBackButtonClicked(event) {
    let backButton = event.target.closest('[data-element="back"]');

    this._trigger('backButtonClicked');
  }
}
