const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("promise1");
    }, 1000);
});
const p2 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        reject("rejected promise2");
    }, 2000);
});
const p3 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("promise3");
    }, 3000);
});

Promise.all([p1, p2, p3]).then((prMsgs) => {
    console.log(prMsgs);
}).catch((err) => {
    console.log(err); //rejected promise2 -> Promise.all execution stops once an error is caught
})