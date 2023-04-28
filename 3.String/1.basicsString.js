//1. string basics
// '', "", ``
let str = "hello this is Anirudha";
console.log(str);

str = "hello this isn't Anirudha";
console.log(str);

//2. ESCAPE SEQUENCE IN JS
str = 'hello this isn\'t Anirudha'; //escape sequence
console.log(str);


//3. \u
//16 bit unicode to 4 digit hexadecimal number -> to display special characters

str = "00A9";
console.log(str); //00A9
str = "\u00A9";
console.log(str); //©

// 4. longer for emoticons - 5 digit
str = "1F601";
console.log(str); //1F601
str = "\u{1F601}";
console.log(str); //😁

