"use strict"
/*
т.к. у меня не получается посмотреть работу страницы через gh-pages,
то я залил то же самое себе в мастер в репозиторий muturgan.github.io

работу страницы можно посмотреть по ссылке:
https://muturgan.github.io/my_learning_project
*/

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