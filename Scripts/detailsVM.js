"use strict"

//Дефолтовые поля
let jsonData = null;
let imagesOtherPhones = '';

let mainPhone   = document.querySelector('#mainPhone');
let namePhone   = document.querySelector('#namePhone');
let descPhone   = document.querySelector('#descPhone');
let phoneThumbs = document.querySelector('.phone-thumbs');

//Считываем параметр с прошлого урла и подгружаем файл
function setLoadDetails(){

    let currUrl = window.location.href;
    let url = new URL(currUrl);
    
    let nameJson = url.searchParams.get("name").toLowerCase().split(' ').join('-');
    nameJson = nameJson.replace('™', '');

    var script = document.createElement('script');
    script.src = `Data/${nameJson}.json`;
    script.type = "text/javascript";
    
    document.getElementsByTagName('head')[0].appendChild(script);
}

//Присваиваем коллекции набор данных из подгруженного json-a
setTimeout( () => { 
    console.log(data); jsonData = data; SetDataFromJson();
}, 100 );

//Биндинг... Очень хочу angular 2+ :)
const SetDataFromJson = () => {

    mainPhone.src = jsonData.images[0];
    namePhone.innerHTML = jsonData.name;
    descPhone.innerHTML = jsonData.description;

    jsonData.images.forEach( (imj) => {

        imagesOtherPhones += `
            <li>
                <img src="${imj}">
            </li>
        `;
    });
    phoneThumbs.innerHTML = `<ul class="phone-thumbs"> ${imagesOtherPhones} </ul>`;

}