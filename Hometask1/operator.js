'use strict'
let sum=80000;
let result=sum > 100000 ? sum=0.9*sum : sum=sum;
let resultInfo=`Сумма с учетом скидки - ${result}`;
console.log(resultInfo);
let chislo=99;
let c=chislo%10;
let result1=c+(chislo-c)/10;
let result1Info=`Сумма цифр двухзначного числа - ${result1}`;
console.log(result1Info);
let a=3,b=18;
a=a+b; 
b=b-a;
b=-b;
a=a-b;
let aInfo=`Число a - ${a}`;
let bInfo=`Число b - ${b}`;
console.log(aInfo, bInfo); 