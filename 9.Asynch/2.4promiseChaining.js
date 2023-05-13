const cSqr = (n) => {
    return new Promise((resolve, request) => {
        setTimeout(() => {
            resolve(n*n);
        }, 2000);
    })
}

cSqr(2).then((res) => {
    console.log(res);
    cSqr(res).then((res1) => {
        console.log(res1);
    }).catch((err) => {
        console.log("Error" + err);
    })
}).catch((err) => {
    console.log("Error" + err);
})