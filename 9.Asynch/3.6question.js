const obj = Promise.race([]);
console.log(obj);

setTimeout(()=>{
    console.log(obj);
}, 2000);

// Promise { <pending> }
// Promise { <pending> }