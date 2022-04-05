'use strict';
function range(xstart,xend,h=1){
    if (h<=0 || xend-xstart<=h || xstart>=xend){
        return "Неверно введенные данные"
    } else{
        let arr=[];
        while(xstart<=xend){
            arr.push(xstart);
            xstart+=h;
        }
        return arr;
    }
}
console.log(range(1,8,5));



function transformMassiv(sentence=String,...spam){
    let arr=sentence.split(' ');
    let count =0;
    for (let element of spam){
        for (let elem of arr){
            if (element===elem) count++;
        }
    }
    let procent=count/arr.length;
    if (procent>=0 && procent<=0.1) return "1";
    if (procent>0.1 && procent<=0.2) return "2";
    if (procent >0.2 && procent<=0.3) return "3";
    if (procent >0.3 && procent <=0.4) return "4";
    if (procent>0.4) return "5";
}
console.log(transformMassiv("Тут нет еще опа  каких либо спамов просто добавляю что то","нет","спамов","тут", "еще","опа","добавляю"));