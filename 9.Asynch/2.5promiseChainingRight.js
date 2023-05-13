const cSqr = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (n*n);
        }, 2000);
    })
}

cSqr(2).then((res) => {
    console.log(res);
    return cSqr(res);
}).then((res1) => {
    console.log(res1);
}).catch((err) => {
    console.log(err);
})

//4
//16