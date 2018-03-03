"use strict"

class Component {
	constructor(conteiner) {
		this._conteiner = conteiner;
	}
	
	hide() {
		this._component.classList.add(`js-hidden`);
	};
	
	show() {
		this._component.classList.remove(`js-hidden`);
	};
		
	get element() {
		return this._component;
	};
}