"use strict"

let phonesFilterControl = new PhonesFilterControl(document.body.querySelector(`.controls`));

let phonesSortControl = new PhonesSortControl(document.body.querySelector(`.controls`));

let phonesList = new PhonesList({
								conteiner: document.body.querySelector(`.col-md-10`),
								phones: phones,
								filterControl: phonesFilterControl,
								sortControl: phonesSortControl,
							});

let shoppingCart = new ShoppingCart({
								conteiner: document.body.querySelector(`.shopping-cart`),
								goodsList: phonesList,
							});