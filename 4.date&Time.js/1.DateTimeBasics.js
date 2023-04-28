//date basic
//WAYS TO CREATE DATE:
//1. date
let dt = new Date();
console.log(dt); //2023-04-28T15:35:17.193Z
console.log(new Date()); //2023-04-28T15:35:51.001Z

// 2.
// Syntax ->  new Date(year, month, date, hour, min, sec, millisec);
//month -> 0 = jan, 11 = dec (like index in array)
//have to provide parameters at least till month

console.log(new Date(2020)); //1970-01-01T00:00:02.020Z 

//3. getTime();
let milli = dt.getTime();
console.log(milli); //1682696653196
console.log(new Date(milli)); // 2023-04-28T15:44:41.011Z


// 4.ISO format
let date1 = new Date("2023-3-28T11:25:00Z");
console.log(date1);