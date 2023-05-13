function fetchData(){
    return  new Promise((resolve, reject)=> {
        setTimeout(() => {
            let data = {pCode: 1001, pName: "Orange"};
            resolve(data);
        }, 2000);
    })
    // return pr;
}

console.log("program starts here....");
fetchData().then((data) => {
    console.log(data);
    console.log("program ends here....")
}).catch((err) => {
    console.log("error -> " + err);
})

/*
OUTPUT -> 
program starts here....
{ pCode: 1001, pName: 'Orange' }
program ends here....
*/