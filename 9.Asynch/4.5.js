async function test(){
    // resolve("result") -> ERROR - USE return for async
    return "result";
}
test().then((res) => {
    console.log("Runs: " + res);
}).catch((err) =>{
    console.log(err);
})