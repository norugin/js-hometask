'use strict';
let count=prompt("Введите количество товара");
let lastSymbols=count.substring(count.length-2);
let lastSymbol=count.substring(count.length-1);
if (isNaN(count)){
    console.log("Неверно введенные данные")
} else{
if (lastSymbols==="11" || lastSymbols==="12" || lastSymbols==="13"
|| lastSymbols==="14"){
console.log(count+" "+"товаров");
} else{
switch(lastSymbol){
case "1":
    console.log(count+" "+"товар");
    break;
case "2":
case "3":
case "4":
    console.log(count+" "+"товара");
    break;
default:
    console.log(count+" "+"товаров");
    break;
}
}
}