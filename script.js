let main = document.getElementById("para").innerHTML="hey ima change this text"
// comparison not data type.
// console.log(10==='10');
console.log(main + ' plus');

let a = 10
let b = 105
let c = "100"
let d = 100;
let fist = a!=b;
// console.log(fist);

let second = d!==c;
console.log(second);
let third = a>=b;
let forth = b<=a;
console.log(forth);
console.log(third);

// if use comparison
let age = 18;
if(age>=18){
    console.log('Adult');
}else{
    console.log('Minor');
}
let score = 75;
if(score>50){
    console.log('Pass');
}else{
    console.log('Fail');
}

let x = 20;
let y = 20;
console.log(x!==y);
let k = 0;
let l = false;
console.log(k==l);

console.log(null==undefined);
console.log("5">3);

let m = '';
let n = 0;
console.log(m==n);
console.log(m===n);

let year = 20;
if(year>18 & year>13){
    console.log('all okk');
}else{
    console.log('not ok');
}

// nested if else statement
let yourAge = 15;
let man = false;
if(yourAge>=15){
    console.log("ok tumi 1st condition puron korce");
    if(man==true){
        console.log("2nd condition right");
    }
else{
    console.log("2nd condition false");
}
}else{
    console.log("tumi 1st condition fali korco");
}

// if else entry
let myAge = 20;
let hasId = true;

if (myAge>=20 && hasId===true){
    console.log("Entry free");
}else{
    console.log("Not Entry");
}

// or || operation

let passWord = true;
let key = false;
if(passWord===true || key===true){
    console.log("ok done go now.");
}
// Complex condition
let salary = 5000;
let hasCar = true;
let isBCS = true;

if((salary>20000 || hasCar === true) && isBCS === true){
    console.log("your are sellected");
}else{
    console.log("you are not sellected");
}