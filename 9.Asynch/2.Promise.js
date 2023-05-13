let pr = new Promise(( resolve, reject) =>{
    //statement
    // resolve();
    // resolve("Data Processed");
    reject("data not processed");
    

})

// console.log(pr); //Promise { undefined }
// console.log(pr); //Promise { 'Data Processed' }
// console.log(pr); //Promise { <rejected> 'data not processed' }  -> also throws error

pr.then((msg) => {
    console.log(msg); //Data Processed
}).catch((err) => {
    console.log(err); //data not processed
}).finally(() => { //finally to run either resolve or reject should be meet 
    console.log("Finishing process"); //Data Processed
    //Finishing process
})
