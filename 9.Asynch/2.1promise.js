const cSqr = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a * a);
        }, 2000);
    })
    // return pr;
}

cSqr(2).then((res) => {
    console.log(res); //4
    // return res;
    return cSqr(res);
}).then((res1) => {
    console.log(res1); //16
})