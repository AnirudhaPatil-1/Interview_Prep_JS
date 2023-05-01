console.log(this); //{}


function test(){
    console.log(this);
}
// test();

let obj = {
    test (){
        console.log(this);
    },
    test1: () =>{
        console.log(this);
    }
}
obj.test(); //{ test: [Function: test] }
// obj.test1(); //{} 