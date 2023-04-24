//1. Array
// 1.1 structure & traversing
// - loops types - for, for in, for of, forEach - done


let arr1 = [5, 6, 7, 8, 9];

//for loop
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}


//for in loop 
console.log("for in loop");
for (let i in arr1){
    console.log(i);
    // console.log(arr1[i]);
}

// for of loop
console.log("for of loop");
for(let i of arr1){
    if(i == 5){
        i = 7;
    }
    console.log(i);
    
}
console.log(arr1);

//forEach
/*Disadvantages
-We can't jump over an element as it traverses through each element.
-Traversing in reverse order is not possible.
-We can't modify the array if we're using a for-each loop.
-It's not possible to keep track of the index.
-It has some performance overhead over the for a loop.
*/
console.log("forEach");
arr1.forEach(function (value, index, arr){
    console.log(value, index, arr);
})
