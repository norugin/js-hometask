'use strict';
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

let tableArea=document.querySelector('.table');
let table=document.createElement('table');
/*let makeTable=function(mass){
    let index=0;
    for (let elem in mass[0]) index++;
for (let i=0;i<=mass.length;i++){
    let row=table.insertRow(i);
   for (let g=0;g<index;g++){
       let cell=row.insertCell();
   }
}
}*/
let fillTable=function(mass){
    let keys=Object.keys(mass[0]);
    let index=0;
    for (let elem in mass[0]) index++;
    for (let i=0;i<=mass.length;i++){
        var tr=document.createElement('tr');
        for (let j=0;j<index;j++){
            var td=document.createElement('td');
            if (i===0){
                td.innerHTML=keys[j];
            } else{
                let values=Object.values(mass[i-1]);
                td.innerHTML=values[j];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
fillTable(articles);
tableArea.append(table);

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField (n){
    let tablitsa = document.createElement("table");
    tablitsa.classList.add("field");
    if (n < 3) return;
    for (let i = 0; i < n; i++){
        let row = tablitsa.insertRow();
        for (let j = 0; j < n; j++){
            row.insertCell();
        }
    }
    document.body.append(tablitsa);
    let cells = document.querySelectorAll(".field td");
    for (let i = 0; i < 3; i++){
        let index = Math.floor(Math.random() * cells.length);
        cells[index].innerText = Object.values(prises)[i];
    }

}

generateField(4);