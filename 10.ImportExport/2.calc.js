// 1.
// export function sum (a, b){
//     return a + b;
// }
// export function cube(a){
//     return a*a*a;
// }

// 2.
// function sum (a, b){
//     return a + b;
// }
// function cube(a){
//     return a*a*a;
// }

// export {sum, cube};

//3.
function sum(a, b){
    return a + b;
}

function cube(a){
    return a*a*a;
}

// export {sum as total, cube as Cube};
export {sum, cube};