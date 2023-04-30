//Date.now()
//returns milliseconds from 1 jan 1970 till now 
console.log(Date.now()); //1682844489744

let dt = new Date();
console.log(dt); //2023-04-30T08:49:15.206Z

//time methods
//get methods
console.log("---------get methods--------");
console.log(dt.getTime()); //1682844645770
console.log(dt.getHours()); //14
// value -> 0 - 23
console.log(dt.getMinutes()); //21
// value -> 0 - 59
console.log(dt.getSeconds()); //9
// value -> 0 - 59
console.log(dt.getMilliseconds); // 33
// value -> 0 - 999


//set methods
console.log("---------set methods--------");
dt.setTime(0);
console.log(dt); //1970-01-01T00:00:00.000Z
dt.setHours(11);
console.log(dt);
dt.setMinutes(11);
console.log(dt);
dt.setMinutes(30);
console.log(dt);
dt.setMilliseconds(100);
console.log(dt);

let dt1 = new Date(2023, 02, 10);
let dt2 = new Date(2023, 02, 08);
let milliSec = dt1 - dt2;
console.log(milliSec); //172800000
let hours = (milliSec/1000)/3600;
console.log(hours); //48
let days = hours/24;
console.log(days); //2 



