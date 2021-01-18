"use strict";


//alert('Hello!');

//const result = confirm('Are you here?');
//console.log(result);

/*const answer = +prompt('Do you have 18?','15');
if (answer >= 18){
    alert('Hello');
}else{
    alert('Sayonara');
}
    

console.log(answer+5);*/

//const answers = [];

/*answers[0] = prompt('You name?', '');
answers[1] = prompt('You sur?', '');
answers[2] = prompt('You age?', '');

document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));

const category = 'toys';

console.log('https://url.com/' + category);
console.log(`https://url.com/${category}/5`);

const user = 'Ivan';

alert (`Hello ${user}`);

console.log(`arr` + 7);

let incr = 10;
let decr = 10;

++incr;
--decr;

console.log(incr);
console.log(decr);



const isChecked = true,
    isClose = false;

console.log(isChecked || !isClose);


if (4==4) {
    console.log(`Ok!`);
}else{
    console.log(`error`);
}


const num = 60;
if (num<60) {
    console.log(`1!`);
}else if (num>=60){
    console.log(`2`);
}else if (num == 60){
    console.log(`3`);
}

(num == 60) ? console.log(`Ok!`) : console.log(`error!`);

let num = 50;

while (num <= 55){
    console.log(num);
    num++;

}
let num = 50;
do {
    console.log(num);
    num++;
}while(num <= 55);

for (let i = 1;  i < 8; i++){
    if(i == 6){
        //break;
        continue;
    }
        console.log(i);

}*/

function showFirstMessage(){
    console.log(`Hello world!`);

}

showFirstMessage();


function plusCalc(a, b){

    return(a + b);

}

console.log(plusCalc(5, 5));
console.log(plusCalc(15, 5));

function ret(){

    let num = 50;



    return num;

}

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log(`Hello`);
};

logger();


const calc = (a, b) => {
    return a + b;
};

let str = `Lol-Eto-Kek?`;

console.log (str.toLocaleUpperCase());

const logg = `Hello world!`;
console.log(logg.slice(6,11));
console.log(logg.substring(6,11));
console.log(logg.substr(6, 5));

const num = 12.5;
console.log(num.round(num));

const test = `15.6px`;
console.log(parseFloat(test));
