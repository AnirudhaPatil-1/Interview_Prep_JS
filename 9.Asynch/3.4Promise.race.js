const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ResPromise1");
    }, 2000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ResPromise2");
    }, 3000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("ErrorPromise3");
    }, 1000);
})

Promise.race([p1, p2, p3]).then((prMsgs) =>{
    console.log(prMsgs);
}).catch((err) => {
    console.log("Error:" + err); //Error:ErrorPromise3
})

// whichever  promise completes first will be returned