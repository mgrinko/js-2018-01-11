export class PhonesListItem {
	constructor(conteiner, options) {
		this._conteiner = conteiner;
		this._options = options;
		
		this._component = document.createElement(`li`);
		
		this._render();
	}
	
	_render() {		
		this._component.className = `thumbnail`;
		
		this._component.innerHTML = `
		<a href="#!/phones/${ this._options[id] }" class="thumb">
			<img alt="${ this._options[id] }" src="${ this._options[images][0] }">
		</a>
		<a href="#!/phones/${ this._options[id] }">${ this._options[name] }</a>
		<p>${ this._options[description] }</p>
		`; //описание не то, что в примере на странице, но переписывать это желания нет
		
		this._conteiner.append(this._component);
	};
}