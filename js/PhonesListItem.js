"use strict"

class PhonesListItem extends Component {
	constructor({ container, features, }) {
		super();
		
		this._container = container;
		this._features = features;
		
		this._component = document.createElement(`li`);
		this._component.className = `thumbnail`;
		this._component.setAttribute(`data-element`, `phone-item`);
		this._component.setAttribute(`data-phone-name`, `${ this._features['name'] }`);
		this._component._features = features;
		
		this._render();
	}
	
	_render() {
		this._component.innerHTML = `
		<a href="#!/phones/${ this._features['id'] }" class="thumb">
			<img alt="${ this._features['id'] }" src="${ this._features['imageUrl'] }">
		</a>
		<a href="#!/phones/${ this._features['id'] }">${ this._features['name'] }</a>
		<p>${ this._features['snippet'] }</p>
		`;
		
		this._container.append(this._component);
	};
}