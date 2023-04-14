//1. 
console.log("1. ---------------");

let infinity = Number.POSITIVE_INFINITY;
let negInfinity = Number.NEGATIVE_INFINITY;

console.log(infinity);//Infinity
console.log(negInfinity); //-Infinity

// 2.
console.log("2. ---------------");

let num1 = (9e2); // e= 1, next number represents number of 0 ie 9e2 = 9*100 => 900
console.log(num1); //900

let num2 = (-9e2);
console.log(num2); //-900

let num3 = (9e4000);
console.log(num3); // Infinity

let num4 = (-9e3000);
console.log(num4); //-Infinity

// 3.
console.log("3. ---------------");

let maxValue = Number.MAX_VALUE;
console.log(maxValue); //1.7976931348623157e+308

let negMaxValue = -Number.MAX_VALUE;
console.log(negMaxValue); //-1.7976931348623157e+308

console.log(maxValue*2); //Infinity
console.log(negMaxValue*2); //-Infinity

//4. Use is for conditionals
console.log("4. ------------------");

let value1 = (9e200);
// console.log(value1)
if(value1 === Number.POSITIVE_INFINITY){
    return "Positive Infinity";
}else{
    return value1*3;
}

// 5. Q 1/0
console.log(1/0);

