"use strict"

class PhonesListItem extends Component {
	constructor({ conteiner, features, }) {
		super();
		
		this._conteiner = conteiner;
		this._features = features;
		
		this._component = document.createElement(`li`);
		this._component._features = features;
		
		this._render();
	}
	
	_render() {
		this._component.className = `thumbnail`;
		
		this._component.innerHTML = `
		<a href="#!/phones/${ this._features['id'] }" class="thumb">
			<img alt="${ this._features['id'] }" src="${ this._features['imageUrl'] }">
		</a>
		<a href="#!/phones/${ this._features['id'] }">${ this._features['name'] }</a>
		<p>${ this._features['snippet'] }</p>
		`;
		
		this._conteiner.append(this._component);
	};
}