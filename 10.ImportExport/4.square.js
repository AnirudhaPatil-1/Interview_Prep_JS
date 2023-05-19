// 1.
export default function square(a){
    return a*a;
}

// 2.
export default function (a){
    return a*a;
}

// 3.
function sum(a){
    return a*a;
}
export default  sum;

//4.
function sum(a){
    return (a*a);
}

export {sum as default};


