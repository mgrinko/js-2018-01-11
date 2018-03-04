"use strict"

class PhonesFilterControl extends Component {
	constructor({ container, }) {
		super();
		
		this._container = container;
		
		this._component = document.createElement(`p`);
		this._component.setAttribute(`data-component`, `phones-filter-control`);
		
		this._render();
	}
	
	_render() {
		this._component.innerHTML = `
			<label>
				Search:<input type="text" class="filter">
			</label>
		`;
		
		this._container.append(this._component);
	};
}