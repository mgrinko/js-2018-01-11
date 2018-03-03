"use strict"

class PhonesSortControl extends Component {
	constructor(conteiner) {
		super();
		
		this._conteiner = conteiner;
		
		this._component = document.createElement(`p`);
		
		this._render();
	}
	
	_render() {
		this._component.innerHTML = `
			<b> Sort by: </b>
			<select class="sort">
				<option value="age">Newest</option>
				<option value="name">Alphabetical</option>
			</select>
		`;
		
		this._conteiner.append(this._component);
	};
}