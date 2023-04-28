//1. .length property
let str = "Anirudha";
console.log(str.length);
str = "Anirudha Patil";
console.log(str.length); //also counts no of spaces inbetween

//2. search methods - indexOf() & lastIndexOf()
console.log("------2. search methods---");
str = "This is a test to check string methods";
console.log(str.indexOf("is", 5)); //5
console.log(str.lastIndexOf("is", 4)); //2

//3. search method
console.log("----3. search method--------");
console.log(str.search("is")); //2
//diff  between indexOf() and search() -> 1.indexOf() can take starting position 
//2.indexOf() method cannot be used for advanced search operations such as REGEX( regular expression)


