let result;
function customSqr(n, cb){
    setTimeout(()=> {
        // result = n*n;
        cb(n*n);

        // console.log(result);
    }, 2000);
}


customSqr(2, function(res){
    console.log(res);
});
console.log("program ended");
// console.log(result);