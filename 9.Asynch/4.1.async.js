// 1.
function test(){
}
const fn = test();
console.log(fn); //undefined

// 2.
async function test1(){
}
const fn1 = test1();
console.log(fn1);  //Promise { undefined }

// 3.
async function test2(){
    throw new Error("Error1");
}
const f2 = test2();
console.log(f2); //Error: Error1 & the remaining error message