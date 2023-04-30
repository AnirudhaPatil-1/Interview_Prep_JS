//new Date() is both used for date and time

let dt = new Date();
console.log(dt); //2023-04-29T18:18:58.297Z

// 1. getFullYear()
console.log(dt.getFullYear()); //2023

//2. getMonth()
console.log(dt.getMonth()); //3 -> INDEX so the month is April

//3. getDate();
console.log(dt.getDate()); //29

// 4.getDay()
console.log(dt.getDay()); //6 -> DAY OF THE WEEK -> Saturday

//getUTC methods
// 1. getUTCYear()
// 2. getUTCMonth()

//.setFullYear()
console.log("--------.setFullYear()----------");
console.log(dt);
console.log(dt.setFullYear(2024,00,01)); //1704133681541
console.log(dt); //2024-01-01T18:28:01.541Z

//.setMonth()
console.log("--------.setMonth()----------");
dt.setMonth(01);
console.log(dt);  //2024-01-31T18:36:11.703Z

//.setDate()
console.log("--------.setDate()----------");
dt.setDate(02);
console.log(dt); //2024-02-01T18:37:19.066Z

//Date.parse
console.log("--------.Date.parse----------");
//converts the date into milliseconds
dt = Date.parse("2020-01-02");
console.log(dt); //1577923200000


//.getMonth()
console.log("--------.getMonth()----------");
dt = new Date();
console.log(dt); //2023-04-29T18:45:40.762Z
let arrMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(dt.getMonth()); //3
console.log(`present month: ${arrMonths[dt.getMonth()]}`); //present month: April//.setDate()
console.log("--------.setDate()----------");
dt = new Date();
console.log(`present Date: ${dt}`); //present Date: Sun Apr 30 2023 00:21:41 GMT+0530 (India Standard Time)
dt.setDate(dt.getDate() - 50 );
console.log(`condition date: ${dt}`); //condition date: Sat Mar 11 2023 00:21:41 GMT+0530 (India Standard Time)

//autoCorrection in date
dt = new Date("2020-01-35");
console.log(dt); //Invalid Date


