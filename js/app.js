"use strict"

let phonesList = new PhonesList(document.body.querySelector(`.col-md-10`), phones);

document.body.querySelector(`.sort`).addEventListener(`change`, () => {
	phonesList.sort(event.target.value);
});

document.body.querySelector(`.filtr`).addEventListener(`change`, () => {
	phonesList.filtr(event.target.value);
});

//классы компонентов боковой панели к сожалению не сделал - глаза слипаются(