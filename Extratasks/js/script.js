'use strict';
//Задание номер 1
let userCity=new Map();
userCity.set('Даниил',"Москва").set("Олег","Томск").set("Владимир","Москва").set("Роман","Москва").set("Валентина","Ставрополь");
let getUserCity=function(map,city="Москва"){
    let arr=[];
    for (let pair of userCity.entries()){
        if (pair[1]==city){
            arr.push(pair[0]);
        }
    }
    return arr;
}
console.log(getUserCity(userCity,"Москва"));


//Задание номер 2
let wordsList=new Map();
let mass=["слово","словечко","повтор","слово","словечко","слово",'проверка'];
let getWordList=function(mass){
    let index=1;
   mass.sort();
   for (let i=mass.length-1;i>=0;i--){
    if (mass[i]===mass[i-1]){
        index++;
    } else{
        wordsList.set(mass[i],index);
        index=1;
    }
   }
   for (let pair of wordsList.entries()){
       if (pair[1]===1) wordsList.delete(pair[0]);
   }
   return wordsList;
}
console.log(getWordList(mass));


//Задание номер 3
let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

let newCustomerMap=new Map();
let getNewMap=function(map,ageFrom,ageTo){
    for (let values of map.entries()){
        if (values[1].age>ageFrom && values[1].age<ageTo){
            newCustomerMap.set(values[0],values[1]);
        }
    }
}
getNewMap(customerMap,30,50);
console.log(newCustomerMap);