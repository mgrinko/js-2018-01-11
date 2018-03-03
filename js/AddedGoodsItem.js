"use strict"

class AddedGoodsItem extends Component {
	constructor({ conteiner, good, }) {
		super();
		
		this._conteiner = conteiner;
		this._good = good;
		
		this._component = document.createElement(`li`);
		
		this._render();
	}
	
	addGood({ goodsList, good, }) {
		for (let existentGood of goodsList.querySelectorAll(`li`)) {
			if (existentGood.firstElementChild.textContent === good.firstElementChild.textContent) {
				existentGood.querySelector(`.goods-amount`).textContent = (
					good.querySelector(`.goods-amount`).textContent[0] +
					( +existentGood.querySelector(`.goods-amount`).textContent.substring(1) + 1 ) );
				return;
			}
		}
		
		goodsList.append(good);
	};
	
	removeGood({ goodsList, good, }) {
		if (+good.querySelector(`.goods-amount`).textContent.substring(1) > 1) {
			good.querySelector(`.goods-amount`).textContent = (
				good.querySelector(`.goods-amount`).textContent[0] +
				( +good.querySelector(`.goods-amount`).textContent.substring(1) - 1 ) );
		} else {
			goodsList.removeChild(good);
		}
	};
	
	_render() {
		this._component.innerHTML = `
			<span>${ this._good._features['name'] }</span>
			<span class="goods-amount">x1</span>
			<span class="remove-good">x</span>
			`;
		
		this.addGood({
				goodsList: this._conteiner,
				good: this._component,
			});
	};
}