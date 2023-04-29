// String basics - 
// '', "", ``,

let str = "hello  u00A9 world";
console.log(str);
str = "\u00A9";
console.log(str);  //©
str = "\{}";

//ES6 template literal
// ``
let name = "Gaurav";
console.log(`my name is ${name}`);
str = `my name
            is 
                Gaurav`;
// console.log(str);

//.length & search methods - indexOf(), lastIndexOf() and search

str = "hello world hello world";
console.log(str.indexOf("hello")); //0
console.log(str.indexOf("hello", 10)); //12

console.log(str.lastIndexOf("hello")); //12
console.log(str.lastIndexOf("hello")); //12

console.log(str[3]);

console.log(str.search("hello")); //0

console.log(str.length); //23


//extraction methods
console.log("-----extraction methods------");
//SUBSTRING - slice(), substr(), substring
//char - charAt(), charCodeAt()

//substring extraction methods
// 1.slice
console.log("-1.slice-");
str = "hello world";
console.log(str.slice(1, 3));
console.log(str.slice(1));
console.log(str.slice(-5, -1)); //worl

//2. substr
console.log(str.substr(1, 3)); //ell
console.log(str.substr(-5, 2)); //wo

//3. substring
console.log("---3. substring--------");
console.log(str.substring(1, 3)); 
console.log(str.substring(-3)); //hello world


//extracting char methods
// 1. charAt()
console.log(str.charAt(0)); //h
console.log(str.charCodeAt(0)); //104

//case conversion
str = "Gaurav";
console.log(str.toUpperCase()); //GAURAV
console.log(str.toLowerCase()); //gaurav


