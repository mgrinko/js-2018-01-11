'use strict';

class PhonesPage extends Component {
	constructor({ container, }) {
		super();
		
		this._container = container;
		
		this._render();
	}
	
	_phonesFilterControl({ container, }) {
		new PhonesFilterControl({ container, });
	}
	
	_phonesSortControl({ container, }) {
		new PhonesSortControl({ container, });
	}
	
	_phonesList({ container, phones, }) {
		new PhonesList({ container, phones, });
	}
	
	_shoppingCart({ container, goodsList, }) {
		new ShoppingCart({ container, goodsList, });
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
		  
		this._phonesFilterControl({ container: document.body.querySelector(`[data-component="controls"]`), });
		
		this._phonesSortControl({ container: document.body.querySelector(`[data-component="controls"]`), });
		
		this._phonesList({
			container: document.body.querySelector(`[data-component="phones-list"]`),
			phones: PhonesService.getPhones(),
		});
		
		this._shoppingCart({
			container: document.body.querySelector(`[data-component="shopping-cart"]`),
			goodsList: document.body.querySelector(`[data-component="phones-list"]`),
		});
	};
}