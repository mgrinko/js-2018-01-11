"use strict"

class Component {
	constructor(conteiner) {
		this._conteiner = conteiner;
	}
	
	hide() {
		this._component.classList.add(`hidden`);
	};
	
	show() {
		this._component.classList.remove(`hidden`);
	};
}

