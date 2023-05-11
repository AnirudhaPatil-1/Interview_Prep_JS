let data;
function fetchData(cb){
    setTimeout(()=> {
        data = {pCode: 1001, pName: "Orange"};
        console.log("program ends here");
        cb();
    }, 2000);
}

console.log("program starts here");
fetchData(function (){
    console.log(data);
});



// function FnInvocation(parameter, received); passed to fn is parameter
// FnInvocation (argument, passed); invocation -> argument