console.log("---------------- 1. ----------");
let obj = {
    pCode: 1,
    pName: "Apple"
}

let {pCode, pName} = obj; //NOTE -> USE THE SAME NAME OF KEY AS IN PARENT OBJECT
console.log(pCode, pName); //  1 Apple

console.log("---------------- object inside a function ----------");
function func1(){
    let obj1 = {
        pCode1: 2,
        pName1: "Yellow",
        // pPrice1: 100
    }
    return obj1;
}

let {pCode1, pName1, pPrice1 = 10 } = func1(); // pPrice1 will get value 10 if pPrice in parent object does not exist else pPrice1 = 100
console.log(pCode1, pName1, pPrice1); //2 Yellow 10


console.log("---------------- 2. ----------");