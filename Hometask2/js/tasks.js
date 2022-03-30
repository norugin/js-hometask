'use strict';

//Задание номер 1
let count=50;
if (count>=0 && count<40){
    console.log("Попробуйте еще раз")
} else if(count>=40 && count<60){
console.log("Удовлетворительно");
} else if(count>=60 && count<90){
    console.log("Хорошо");
} else if(count>=90 && count<=100){
    console.log("Отлично");
} else{
    console.log("Неверно введенные данные");
}


//Задание номер 2
let sum=23000,code=6113;
switch(code){
case 4653:
    sum=Math.round(sum*0.7);
    console.log(`Ваша скидка 30%, сумма заказа - ${sum}`);
    break;
case 5698:
case 5111:
    sum=Math.round(sum*0.8);
    console.log(`Ваша скидка 20%, сумма заказа - ${sum}`);
    break;
case 6922:
case 6113:
case 6099:
    sum=Math.round(sum*0.9);
    console.log(`Ваша скидка 10%, сумма заказа - ${sum}`);
    break;
default:
    console.log(`Скидка не предусмотрена, сумма заказа - ${sum}`);
}


//Задание номер 3
let fairy=3, dish=4;
while(fairy>0 && dish>0){
    fairy=fairy-0.5;
    dish=dish-1;
    console.log(`Осталось моющего средства ${fairy}`);
}
if (fairy>dish){
    console.log(`Все тарелки вымыты, осталось средства на ${fairy*2} тарелок`);
} else {
    console.log(`Не хватило средства, осталось ${dish} тарелок`);
}
if (fairy===0 && dish===0){
    console.log('Средства хватило ровно');
}


//Задание номер 4
let numberGuessed=Math.floor(Math.random()*9+1),number=1;
while(true){
    let number= prompt("Попытайтесь угадать число или введите 0 если сдаетесь");
    if (number==='0') break;
    if (number>numberGuessed){
        console.log("Загаданное число меньше");
    } else{
        if (number<numberGuessed){
            console.log("Загаданное число больше");
        } else{
            console.log("Вы угадали число!");
            break;
        }
    }
}



