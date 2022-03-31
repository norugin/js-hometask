'use strict';

//Задание номер 5
let chislo=Math.floor(Math.random()*491+10);
if (chislo>25 && chislo<200){
    console.log(`Число ${chislo} содержится в интервале (25;200)`);
} else{
    console.log(`Число ${chislo} не содержится в интервале (25;200)`);
}


//Задание номер 6
let number,response, n=50;
let max=101, min=1;
while (n/2>0){
    n=Math.floor((max+min)/2);
    response=prompt(`Это число больше, меньше или равно ${n}`);
    if (response==="больше"){
        min=n;
    } else{
    if (response==="меньше"){
        max=n;
    } else{
        if (response==="равно"){
            console.log("Я угадал число");
            break;
        } else console.log("Неверно введенные данные");
    }
} 
}

