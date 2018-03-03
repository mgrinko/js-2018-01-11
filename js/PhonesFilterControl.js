"use strict"

class PhonesFilterControl extends Component {
	constructor(conteiner) {
		super();
		
		this._conteiner = conteiner;
		
		this._component = document.createElement(`p`);
		
		this._render();
	}
	
	_render() {
		this._component.innerHTML = `
			<label>
				Search:<input type="text" class="filter">
			</label>
		`;
		
		this._conteiner.append(this._component);
	};
}