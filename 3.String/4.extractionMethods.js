//Extraction methods

//SUBSTRING EXTRACTION METHODS

//1. slice method 
console.log("--------1. slice method  ------------");
//syntax -> str.slice(strtIdx, endIdx - 1); 
//if endIdx not given will run till end 
//returns the string from strIdx to endIdx - 1

let str = "first second third fourth";
console.log(str.slice(10)); //nd third fourth
console.log(str.slice(10, 10)); // will print nothing
console.log(str.slice(10, 15)); //nd th -> runs till 14th index

// 1.2 negative index values
console.log("---1.2 negative index values------");

//if -ve value given strIdx it will count from right left 1 to 10 and then execute to end of string 
console.log(str.slice(-10)); //ird fourth -> "i" will be the 10 index from right to left

console.log(str.slice(-10, -5));  //ird f

//2. substr method 
//  method -> str.substr(startIdx, noOfCharacters)
console.log("---------2. substr method------");

console.log(str.substr(10, 5)); //nd th
console.log(str.substr(-10, 5)); //ird f


// 3. substring
console.log("---------3. substring ------------");
// str.substring(startIdx, endIdx);
//similar to slice method -> difference is CANNOT TAKE NEGATIVE VALUES

console.log(str.substring(10)); //nd third fourth
console.log(str.substring(10, 10)); // will print nothing
console.log(str.substring(10, 15)); //nd th -> prints till endIdx - 1
// console.log(str.substring)
console.log(str.substring(-10)); //cannot take -ve value and will return entire string -> first second third fourth


//CHARACTER EXTRACTIONS METHODS
//charAt() & charCodeAt()

// 1. charAt()
console.log("--------1. charAt()---------");
//takes idx -> returns char


str = "First second";
console.log(str.charAt()); //F -> by default takes 0th index
console.log(str.charAt(3)); //s

//2. charCodeAt() 
console.log("----2. charCodeAt()---------");
//takes idx -> returns unicode - UTF-16

console.log(str.charCodeAt()); //70 -> F
console.log(str.charCodeAt(3)); //115 -> s

//CONVENTIONAL WAY -> don't use
console.log(str[3]);


