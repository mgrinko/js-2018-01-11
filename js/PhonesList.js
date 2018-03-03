﻿"use strict"

class PhonesList extends Component {
	constructor({ conteiner, phones, filterControl, sortControl, }) {
		super();
		
		this._conteiner = conteiner;
		this._phones = phones;
		this._items = [];
		
		this._filterControl = filterControl;
		this._sortControl = sortControl;
		
		this._component = document.createElement(`ul`);
		
		this._render();
		
		this._filterControl.element.addEventListener(`input`, () => {
			this.filter(event.target.value);
		});
		
		this._sortControl.element.addEventListener(`change`, () => {
			this.sort(event.target.value);
		});
	}
	
	_render() {
		this._component.className = `phones`;
		
		for (let phoneFeatures of this._phones) {
			this._items.push (new PhonesListItem({
											conteiner: this._component,
											features: phoneFeatures,
										}));
			//window[`phonesListItem${i}`] = new PhonesListItem(this._component, this._phones[i]);
		}
		
		this._conteiner.append(this._component);
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