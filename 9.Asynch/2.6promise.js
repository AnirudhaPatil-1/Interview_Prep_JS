const pr = new Promise((resolve, reject) => {
    resolve("Over");
    setTimeout(() => {
        resolve("Again");
    }, 2000);
})

pr.then((msg) => {
    console.log(msg);
    return pr;
}).then((msg) => {
    console.log(msg);
})

//Over
//Over