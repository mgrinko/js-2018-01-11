'use strict';

class PhonesPage extends Component {
	constructor({ container, }) {
		super();
		
		this._container = container;
		
		this._render();
		
		this._phonesFilterControl = new PhonesFilterControl({ container: document.body.querySelector(`[data-component="controls"]`), });
		
		this._phonesSortControl = new PhonesSortControl({ container: document.body.querySelector(`[data-component="controls"]`), });
		
		this._phonesList = new PhonesList({
			container: document.body.querySelector(`[data-component="phones-list"]`),
			phones: PhonesService.getPhones(),
		});
		
		this._shoppingCart = new ShoppingCart({
			container: document.body.querySelector(`[data-component="shopping-cart"]`),
			goodsList: document.body.querySelector(`[data-component="phones-list"]`),
		});
		
		this._phonesList.element.addEventListener(`goodSelected`, () => {
			this._shoppingCart.addGoodsItem({
					container: this._shoppingCart._addedGoods,
					good: event.detail,
				});
		});
	}
	
	_render() {
		this._container.insertAdjacentHTML(`afterBegin`, `
			<aside class="col-md-2">
				<!--Sidebar content-->
				<section data-component="controls"></section>
				
				<section data-component="shopping-cart"></section>
			</aside>
			
			<main class="col-md-10" data-component="phones-list">
				<!--Body content-->
				
				<!-- <div class="phones-list"></div>
				
				<div class="phone-details"></div> -->
			</main>
		`);
	};
}