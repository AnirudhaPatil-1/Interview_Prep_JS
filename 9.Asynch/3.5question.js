const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("promise1");
    }, 1000);
});
const p2 = "Normal String"
const p3 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("promise3");
    }, 3000);
});

Promise.all([p1, p2, p3]).then((prMsgs) => {
    console.log(prMsgs);
}).catch((err) => {
    console.log(err); 
})

//[ 'promise1', 'Normal String', 'promise3' ]