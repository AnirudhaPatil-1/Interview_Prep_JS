// 1.
console.log("1...........................")
let arr = [4, 5, 6, 7];
for(let i of arr){
    console.log(i);
}

// 2.Iterator
console.log("2...........................")
let arr1 = [4, 5, 6, 7];
let itr = arr[Symbol.iterator]();
console.log(itr); //Object [Array Iterator] {}
console.log(itr.next()); //{ value: 4, done: false }
console.log(itr.next()); //{ value: 5, done: false }
console.log(itr.next()); //{ value: 6, done: false }
console.log(itr.next()); //{ value: 7, done: false }
console.log(itr.next()); //{ value: undefined, done: true }

// 3. Trying to run for of loop on an object
console.log("3...........................")
let obj = {
    start: 10,
    end: 15
}
// for(let i of obj){
//       console.log(i); // TypeError: obj is not iterable
// }

// 4.
console.log("4...........................");
let obj1 = {
    start: 10,
    end: 15
}

obj1[Symbol.iterator] = function(){
    const itr = {
        next(){
            if(obj1.start <= obj1.end){
                return {value: obj1.start++, done: false}
            }else{
                return {done: true}
            }
        }
    }
    return itr;
}

for(let i of obj1){
    console.log(i);
}

// 5. simplified
console.log("5...........................")

let obj2 = {
    start: 10,
    end: 15,
    [Symbol.iterator]: function(){
        return {
            next(){
                if(obj2.start <= obj2.end){
                    return {value: obj2.start++, done: false}
                }else{
                    return {done: true}
                }
            }
        }
        // return itr;
    }
}

for(let i of obj2){
    console.log(i);
}

// 6. better way but with limitations
console.log("6...........................")
let obj3 = {
    start: 10,
    end: 15,
    [Symbol.iterator](){
        return this;
    },
    next(){
        if(obj3.start <= obj3.end){
            return {value: obj3.start++, done: false}
        }else{
            return {done: true}
        }
    }
}

for(let i of obj3){
    console.log(i);
}