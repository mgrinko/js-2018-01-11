"use strict"

//Стартовые переменные
let typingTimer = null;
let doneTypingInterval = 500; 
let inputPhones = document.querySelector('#inSearch');
let typeOrderPhones = document.querySelector('#inOrderBy');

//Это коллекция данных, что тянется из подключенного JSON
const phonesDataToJson = data;

//Объявляем класс и метод рендерига
class PhonesList {
    
    constructor({ element } = {}) {
    
        this._element = element;
        this.render();
    }

    render( typeCompare, strForSearch ) {

        //Устанавливаем дефолтовые внутренние поля для метода рендеринга
        let optionsHtml = '';
        let optionsData = phonesDataToJson;

        //Если активен элемент сортировки
        if( typeCompare ){
            
            optionsData.sort(propComparator(typeCompare));
        }

        //Если активна строка поиска
        if( strForSearch ){

            optionsData = optionsData.filter(filterOfName(strForSearch));
        }

        //Если строка поиска пустая - рефреш!
        if ( strForSearch === '' ){

            optionsData = phonesDataToJson;
        }
        
        //Генерим разметку и заполняем данными
        optionsData.forEach((obj) => {

            optionsHtml += `<li class="thumbnail">
                                <a href="details.html?name=${obj.name}" class="thumb">
                                    <img alt="${obj.name}" src="${obj.imageUrl}">
                                </a>
                                <a href="#!/phones/${obj.id}">${obj.name}</a>
                                <p>${obj.snippet}</p>
                            </li>`;
        });

        this._element.innerHTML = `<ul class="phones"> ${optionsHtml} </ul>`;
    }
}
    
//Объявляем объект класса с параметром DOM объекта
const pList = new PhonesList({
    
    element: document.querySelector('.col-md-10')
});

//Функция для сортировки коллекции
const propComparator = (propName) => (a, b) => {

    if (a[propName] < b[propName])
        return -1;

    if (a[propName] > b[propName])
        return 1;

    return 0;
}

//Функция для фильтрации после строки поиска
const filterOfName = (inStr) => (inObj) => {

    return inObj.name.toUpperCase().includes(inStr.toUpperCase());
}

//Вызов рендеринга с текущими данными сортировки и фильтрации
const setRender = () => {

    pList.render( typeOrderPhones.value, inputPhones.value );
}

//Обработчик изменения положения для выпадающего списка для сортировки
typeOrderPhones.onchange = () => {

    setRender();
}

//Обработчики нажатия клавиш при активации строки поиска - даем печатать 0.5 сек, после кидаем запрос
inputPhones.onkeyup = () => {
    
    clearTimeout(typingTimer);
    typingTimer = setTimeout(setRender, doneTypingInterval);
};
  
inputPhones.onkeyudown = () => {
    
    clearTimeout(typingTimer);
};