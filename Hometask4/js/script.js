'use strict';
//Задание номер 1
let massiv= new Array();
let otrizMassiv= new Array();
for (let i=0;i<10;i++){
    massiv[i]=Math.floor(Math.random()*201)-100;
}
for(let element of massiv){
    if (element<0){
        otrizMassiv.push(element);
    }
}
console.log(massiv);
console.log(otrizMassiv);

//Задание номер 2

massiv.splice(0,massiv.length); //обнуление массива
for (let i=0;i<7;i++){
    massiv[i]=Math.floor(Math.random()*296)+5;
}
console.log(massiv);
for (let i=0,buffer,min=301,indexMin,indexMax,max=0;i<7;i++){
    if (massiv[i]<min){
        min=massiv[i];
        indexMin=i;
    }
    if (massiv[i]>max){
        max=massiv[i];
        indexMax=i;
    }
    if (i===6){
        buffer=massiv[indexMin];
        massiv[indexMin]=massiv[indexMax];
        massiv[indexMax]=buffer;
    }
}
console.log(massiv);


//Задание номер 3
massiv.splice(0,massiv.length);
let sentence;
let el;
massiv[0]=undefined;
let n=0;
let g=0;
let lastElement;
while(true){
    sentence=prompt("Введите строку или 0 для выхода");
    g++;
    if(sentence==='0'){
        if (g===1){
            lastElement=massiv.pop();
        }
        break;
    }else{
        if (massiv[0]===undefined){
            massiv[0]=sentence;
        } else{
        if(!massiv.includes(sentence)){
            massiv[massiv.length]=sentence;
        }
    }
    }
}
console.log(massiv);
