"use strict"

import Component from './Component';

export default class PhonesListItem extends Component {
	constructor(conteiner, options) {
		super();
		
		this._conteiner = conteiner;
		this._options = options;
		
		this._component = document.createElement(`li`);
		this._component._options = options;
		
		this._render();
		
		this._component.addEventListener(`click`, () => {
			alert(this._options['id']);
		});
	}
	
	_render() {
		this._component.className = `thumbnail`;
		
		this._component.innerHTML = `
		<a href="#!/phones/${ this._options['id'] }" class="thumb">
			<img alt="${ this._options['id'] }" src="${ this._options['images'][0] }">
		</a>
		<a href="#!/phones/${ this._options['id'] }">${ this._options['name'] }</a>
		<p>${ this._options['description'] }</p>
		`; //описание не то, что в примере на странице, но переписывать это желания нет
		
		this._conteiner.append(this._component);
	};
}



