console.log("1. ---------------------------------------");
let a = 5;
let b = "value";
let c = a*b;
console.log(c); //

// 2. isNaN gives boolean value - ie true or false
console.log("2. ---------------------------------------");
if(isNaN === false){
    console.log("number");
}else{
    console.log("not a number");
}

// 3. better way to write isNaN
console.log("3. ---------------------------------------");
if(!isNaN ){
    console.log("number");
}else{
    console.log("not a number");
}

// 4.
console.log("4. ---------------------------------------");

console.log(NaN == NaN); //gives false

//5. isFinite() method better than isNaN();
console.log("5. ---------------------------------------");

// 6. NaN == NaN ? & NaN ===NaN ?
console.log("6. ---------------------------------------");
console.log(NaN == NaN);
console.log(NaN === NaN);

