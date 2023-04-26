//1. 
let arr = [10, 20, 30, 40, 50];
let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); //10 20 30 40 50

//2. 
function test(){
    return [10, 30, 50, 70, 90];
}

let [f, g, h, i, j] = test();
console.log(f, g, h, i, j); //10 30 50 70 90

//3. avoid assignment during destructuring
let [k, , m , n, o] = test();
console.log(k, m, n, o); //10 50 70 90

//4. swapping values
a = 1;
b = 2;
[b, a] = [a, b];
console.log(a, b); //2 1

//5. collecting values in array
arr = [1, 2, 3, 4, 5];
[a, ...b] = arr;
console.log(a, b); //1 [ 2, 3, 4, 5 ]


//6. giving default values to variables
arr = [4];
[a, b] = arr;
console.log(a, b); //4 undefined
// solution
//DEFAULT VALUE IMPLEMENTATION
[a, b = 0] = arr;
console.log(a, b); //4 0 

arr = [4, 6];
[a, b = 0] = arr;
console.log(a, b); //4 6    