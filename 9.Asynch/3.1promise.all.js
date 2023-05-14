const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
    }, 2000);
});

// p1.then((msg) => {
//     console.log(msg);
// })

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2");
    }, 1000);
});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise3");
    }, 1000);
});

Promise.all([p2, p1, p3]).then((prMsgs) => {
    console.log(prMsgs); //[ 'promise2', 'promise1', 'promise3' ] ->  after 1 sec
})

