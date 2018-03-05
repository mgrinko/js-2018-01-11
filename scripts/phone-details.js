import Component from "./component.js";

export default class PhoneDetails extends Component {
  constructor({element}) {
    super(element);

    this._element.addEventListener('click', this._onClick.bind(this));
  }

  show(phone) {
    this._render(phone);
    super.show();
  }

  _onClick(e) {
    if (e.target.dataset.element === 'back-btn') {
      this._trigger('backBtnClicked');

      return;
    }

    if (e.target.dataset.element === 'add-btn') {
      this._trigger('addBtnClicked', this._element.dataset.phoneId);

      return;
    }

    if (e.target.tagName === 'IMG') {
      this._element.querySelector('img.phone').src = e.target.src;
    }
  }

  _render(phone) {
    let phoneHtml = `
      <div>

        <img class="phone" src="${phone.images[0]}">

        <button data-element="back-btn">Back to list</button>
        <button data-element="add-btn">Add to basket</button>


        <h1>${phone.name}</h1>

        <p>${phone.description}</p>

        <ul class="phone-thumbs">
          ${ phone.images.map(imgSrc => `
              <li>
                <img src="${ imgSrc }">
              </li>
            `).join('') }
        </ul>

        <ul class="specs">
          <li>
            <span>Availability and Networks</span>
            <dl>
              <dt>Availability</dt>
              <dd>${phone.availability || '-'}</dd>
            </dl>
          </li>
          <li>
            <span>Battery</span>
            <dl>
              <dt>Type</dt>
              <dd>${phone.battery.type}</dd>
              <dt>Talk Time</dt>
              <dd>${phone.battery.talkTime || '-' }</dd>
              <dt>Standby time (max)</dt>
              <dd>${phone.battery.standbyTime || '-'}</dd>
            </dl>
          </li>
          <li>
            <span>Storage and Memory</span>
            <dl>
              <dt>RAM</dt>
              <dd>${phone.storage.ram}</dd>
              <dt>Internal Storage</dt>
              <dd>${phone.storage.flash}</dd>
            </dl>
          </li>
          <li>
            <span>Connectivity</span>
            <dl>
              <dt>Network Support</dt>
              <dd>${phone.connectivity.cell}</dd>
              <dt>WiFi</dt>
              <dd>${phone.connectivity.wifi}</dd>
              <dt>Bluetooth</dt>
              <dd>${phone.connectivity.bluetooth}</dd>
              <dt>Infrared</dt>
              <dd>${phone.connectivity.infrared ? '✓' : '✘' }</dd>
              <dt>GPS</dt>
              <dd>${phone.connectivity.gps ? '✓' : '✘' }</dd>
            </dl>
          </li>
          <li>
            <span>Android</span>
            <dl>
              <dt>OS Version</dt>
              <dd>${phone.android.os}</dd>
              <dt>UI</dt>
              <dd>${phone.android.ui}</dd>
            </dl>
          </li>
          <li>
            <span>Size and Weight</span>
            <dl>
              <dt>Dimensions</dt>
              ${phone.sizeAndWeight.dimensions.map(item => `<dd>${item}</dd>`).join('')}
              <dt>Weight</dt>
              <dd>${phone.sizeAndWeight.weight}</dd>
            </dl>
          </li>
          <li>
            <span>Display</span>
            <dl>
              <dt>Screen size</dt>
              <dd>${phone.display.screenSize}</dd>
              <dt>Screen resolution</dt>
              <dd>${phone.display.screenResolution}</dd>
              <dt>Touch screen</dt>
              <dd>${phone.display.touchScreen ? '✓' : '✘' }</dd>
            </dl>
          </li>
          <li>
            <span>Hardware</span>
            <dl>
              <dt>CPU</dt>
              <dd>${phone.hardware.cpu}</dd>
              <dt>USB</dt>
              <dd>${phone.hardware.cpu}</dd>
              <dt>Audio / headphone jack</dt>
              <dd>${phone.hardware.cpu}</dd>
              <dt>FM Radio</dt>
              <dd>${phone.hardware.cpu ? '✓' : '✘' }</dd>
              <dt>Accelerometer</dt>
              <dd>${phone.hardware.cpu ? '✓' : '✘' }</dd>
              ${phone.hardware.physicalKeyboard ? '<dt>Physical keyboard</dt><dd>✓</dd>' : ''}
            </dl>
          </li>
          <li>
            <span>Camera</span>
            <dl>
              <dt>Primary</dt>
              <dd>${phone.camera.primary}</dd>
              <dt>Features</dt>
              <dd>${phone.camera.features}</dd>
            </dl>
          </li>
          <li>
            <span>Additional Features</span>
            <dd>${phone.additionalFeatures}</dd>
          </li>
        </ul>
      </div>
    `;

    this._element.innerHTML = phoneHtml;
    this._element.dataset.phoneId = phone.id;
  }

}
