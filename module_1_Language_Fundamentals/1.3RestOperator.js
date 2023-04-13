//1.
function print1(a, b){
    console.log(a + " " + b);
};

print(2, 3);
print(2, 3, 4, 5)

//2. REST OPERATOR
function print2(...nums){
    console.log(nums);
    console.log(nums[0]);
}

print(2, 3);
print(3, 4, 5);
/*
Output -> [ 2, 3 ]
2
[ 3, 4, 5 ]
3
*/

//3. ARGUMENT (ES5)
function print3(){
        console.log(arguments);
        console.log(arguments[0]);
}
    
    print(2, 3);
    print(3, 4, 5);
/* Output -> 
[Arguments] { '0': 2, '1': 3 }
2
[Arguments] { '0': 3, '1': 4, '2': 5 }
3
*/

// 4. 
// Argument takes parameters and put them in Object like array structure
// Argument does not work with arrow function

const print4 = () => {
    console.log(arguments); //gives error as argument function doesn't work with arrow function
}

print(2, 3);
print(3, 4, 5);

// 5. REST operator works with arrow function
const print5 = (...nums) => {
    console.log(nums);
}
print(2, 3);
print(3, 4, 5);
// Output -> 
// [ 2, 3 ]
// [ 3, 4, 5 ]


// 6.

