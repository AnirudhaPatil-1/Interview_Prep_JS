//SET
//set does not have keys, takes unique values
//use .add to add values
//.size to get size
let names = new Set();
names.add("first");
names.add("second");
names.add("third");
names.add("first");

console.log(names); //Set(3) { 'first', 'second', 'third' }
console.log(names.size); //3

//can pass an array
let names1  = new Set(["first", "fourth", "fifth", "first"]);
console.log(names1); //Set(3) { 'first', 'fourth', 'fifth' }
console.log(names1.size); //3

//Set is iterable -> for of loop, forEach Loop
for(let v of names1){
    console.log(v);
}
/*
first
fourth
fifth
*/

//for of -> .keys(), .values() and .entries() methods are not used in Set but can be 
//implemented to make it compatible with Map 
for(let k of names1.keys()){
    console.log(k);
}
/*
first
fourth
fifth
*/
for(let v of names1.values()){
    console.log(v);
}
/*
first
fourth
fifth
*/
for(let e of names1.entries()){
    console.log(e);
}
/*
[ 'first', 'first' ]
[ 'fourth', 'fourth' ]
[ 'fifth', 'fifth' ]
*/


names1.forEach((v, k, set) => {
    console.log(v, k, set);
})
/*
first first Set(3) { 'first', 'fourth', 'fifth' }
fourth fourth Set(3) { 'first', 'fourth', 'fifth' }
fifth fifth Set(3) { 'first', 'fourth', 'fifth' }
*/

//.delete() & .clear()
names1.delete("first");
console.log(names1); //Set(2) { 'fourth', 'fifth' }

names1.clear();
console.log(names1); //Set(0) {}