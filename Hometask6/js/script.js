'use strict';
//Задание 12
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function sortNumbers(a,b){
    if (a.length===b.length) return 0;
    if(a.length>b.length) return 1;
    return -1;
}
numbers.sort(sortNumbers);
console.log(numbers);

//Задание 14
let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];
function random(a,b){
    return Math.random()-0.5;
}
presents.sort(random);
console.log(presents);

//Задание 16 
let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
let indicator;
for (let i=0;i<temperatures.length;i++){
    if (temperatures[i].some(elem=>elem>500)){
        indicator=true;
    }
}

if (indicator) console.log("Температура поднималась выше 500")
else console.log("Температура не поднималась выше 500");

//Задание 15
let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];
let itogMassiv=second.filter(elem=>{
        return first.includes(elem);
});
console.log(itogMassiv);