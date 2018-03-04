"use strict"

class PhonesList extends Component {
	constructor({ container, phones, filterControl, sortControl, }) {
		super();
		
		this._container = container;
		this._phones = phones;
		this._items = [];
		
		this._filterControl = filterControl;
		this._sortControl = sortControl;
		
		this._component = document.createElement(`ul`);
		this._component.className = `phones`;
		this._component.setAttribute(`data-component`, `phones-list`);
		
		this._render();
		
		this._filterControl.addEventListener(`input`, () => {
			this.filter(event.target.value);
		});
		
		this._sortControl.addEventListener(`change`, () => {
			this.sort(event.target.value);
		});
	}
	
	_render() {
		for (let phoneFeatures of this._phones) {
			this._items.push (new PhonesListItem({
				container: this._component,
				features: phoneFeatures,
			}));
			//window[`phonesListItem${i}`] = new PhonesListItem(this._component, this._phones[i]);
		}
		
		this._container.append(this._component);
	};
	
	sort(feature) {
		this._items.sort((a, b) => {
			if (a._features[`${feature}`] > b._features[`${feature}`]) {
				return -1;
			} else {
				return 1;
			}
		});
		
		for (let item of this._items) {
			this._component.prepend(item._component);
		}
	};
	
	filter(str) {
		str = str.toLowerCase();

		for (let item of this._items) {
			if (item._features.name.toLowerCase().includes(str)) {
				item.show();
			} else {
				item.hide();
			}
		}
	};
}