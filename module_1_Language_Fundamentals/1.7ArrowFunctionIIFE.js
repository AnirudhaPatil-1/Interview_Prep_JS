//IIFE -> Immediately Invoked Function Execution
// regular IIFE function(
(function(){
    console.log("regular IIFE");
})();

//IIFE used to avoid global leakages

//IIAF
(() => {
    console.log("arrow IIAF");
})();


// ***this

function test(){
    console.log(this);
}
test(); //this will point to local environment or reference

const test1 = () => {
    console.log(this);
}
test1(); //this will point to global environment

// arguments cannot be used so use rest operator

const sum = (...nums) => { //rest operator
    // console.log(arguments); //does not work
    console.log(nums);
    console.log(nums[0] + nums[1] + nums[2]);

}

sum(5, 6, 7);


// ***new

// const obj = new sum(); new does not work with arrow function as it is not a class