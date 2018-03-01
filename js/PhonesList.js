"use strict"

import Component from './Component';
import PhonesListItem from './PhonesListItem';

export default class PhonesList extends Component {
	constructor(conteiner, phones) {
		super();
		
		this._conteiner = conteiner;
		this._phones = phones;
		this._items = [];
		
		this._component = document.createElement(`ul`);
		
		this._render();
	}
	
	_render() {
		this._component.className = `phones`;
		
		for (let phone of this._phones) {
			this._items.push (new PhonesListItem(this._component, phone));
			//window[`phonesListItem${i}`] = new PhonesListItem(this._component, this._phones[i]);
		}
		
		this._conteiner.append(this._component);
	};
	
	sort(feature) {
		this._items.sort((a, b) => {
			if (a._options[`${feature}`] > b._options[`${feature}`]) return -1;
			if (a._options[`${feature}`] < b._options[`${feature}`]) return 1;
		});
		
		for (let item of this._items) {
			this._conteiner.prepend(item._component);
		}
		//почему он их ступеньками располагает - не понимаю(
	};
	
	filtr(feature) {
		for (let item of this._items) {
			item.show();
		}
		
		if (feature === `none`) {
			return;
		}
		
		for (let item of this._items) {
			if (item._options.android.os !== feature) {
				item.hide();
			}
		}
	};
}

