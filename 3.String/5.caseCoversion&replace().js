//1. Case Conversion methods
console.log("-------1. Case Conversion methods-------");

//.toLowerCase() & .toUpperCase()

let str = "Test";
console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase()); //test
//use

console.log(str == "test"); //false
console.log(str.toLowerCase() === "test"); //true

console.log(str.toUpperCase() === "TEST"); //true

// 2. replace method
console.log("-------2. replace method-----------------");
//.replace(substr or regex, newSubstr);

str = "Test23";
console.log(str.replace("23", "!")); //Test!


//Q. check whether given char is vowel or consonant
let ch;
function getVal(){
    ch = prompt("Enter char: ");
    ch = ch.toLowerCase();
    if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
        console.log(`${ch} is Vowel`);
    }else{
        console.log(`${ch} is Consonant`);
    }
}
// getVal();