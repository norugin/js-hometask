'use strict';
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//Задание номер 1
function getSubObject(obj,from,to){
    let SubObject={};
    for (let elem in obj){
        if (obj[elem].price>=from && obj[elem].price<=to){
            SubObject[elem]=obj[elem];
        }
    }
    return SubObject;
}
console.log(getSubObject(items,1000,2700));

//Задание номер 2
function buyItem(obj,itemTitle,countToCart){
    for (let elem in obj){
        if (obj[elem].title===itemTitle && obj[elem].count>=countToCart){
            obj[elem].count-=countToCart;
            return true;
        } 
    }
    return false;
}
console.log(buyItem(items,"Арфа",14));

//Задание номер 3
let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];

function sortirovka(a,b){
    if (a.title===b.title) return 0;
    if (a.title<b.title) return -1;
    return 1;
}
books.sort(sortirovka);
console.log(books);

