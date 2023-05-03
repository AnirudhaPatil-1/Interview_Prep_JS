let product = new Map();
//key has its own data type
product.set('pCode', '1001');
product.set(1, "Apple");
product.set(true, 'Available');

// console.log(product.get(pCode)); //error - pCode is not defined - ie mention data type too
console.log(product.get('pCode')); //1001
console.log(product.get(true)); //Available
console.log(product); //Map(3) { 'pCode' => '1001', 1 => 'Apple', true => 'Available' }

//2. SIZE property
console.log("----------2. SIZE property------------");
//just like in array -> .length . in map -> .size
console.log(product.size); //3

//3. wrong way
console.log("----------3. wrong way------------");
product["ObjKey"] = 500; //NOT TO USE THIS WAY AS WE USE IN object as the key will be normal key -> use set()
console.log(product.size); //show 3 even when we have 4 key value pair
console.log(product);
/*
OUTPUT -> 
Map(3) {
    'pCode' => '1001',
    1 => 'Apple',
    true => 'Available',
    ObjKey: 500
}
*/


//4. set() RETURNS THE MAP itself so we can chain it eg
console.log("----------4. set() RETURNS THE MAP itself so we can chain it eg------------");
let product1 = new Map();
product1.set('pCode', '2002')
.set(1, 'Banana')
.set(true, 'NotAvailable');

console.log(product1); //Map(3) { 'pCode' => '2002', 1 => 'Banana', true => 'NotAvailable' }

//5. MAP is iterable
console.log("----------5. MAP is iterable- values(), keys(), entries()-----------");
//methods - values(), keys(), entries()

for(let k of product1.keys()){
    console.log(k);
}
/*
pCode
1
true
*/
for(let v of product1.values()){
    console.log(v);
}
/*
2002
Banana
NotAvailable
*/

for(let e of product1.entries()){
    console.log(e);
}
/*
[ 'pCode', '2002' ]
[ 1, 'Banana' ]
[ true, 'NotAvailable' ]
*/

//entries can be used to destructure eg. 
for(let [k, v] of product1.entries()){
    console.log(`${k}-${v}`);
}
/*
pCode-2002
1-Banana
true-NotAvailable
*/

//6. Object method -> Object.entries()
console.log("---6. Object method -> Object.entries()---");

let obj = {
    pCode: 3003,
    pName: 'Papaya',
    price: 50
}
console.log(obj); //{ pCode: 3003, pName: 'Papaya', price: 50 }
console.log(Object.entries(obj)); //[ [ 'pCode', 3003 ], [ 'pName', 'Papaya' ], [ 'price', 50 ] ] -> creates an array 


//Object.entries can be used to convert normal object to Map
let product3 = new Map(Object.entries(obj));
console.log(product3); //Map(3) { 'pCode' => 3003, 'pName' => 'Papaya', 'price' => 50 }

//7. Object.fromEntries()
//converts map to obj
console.log("---7. Object.fromEntries() - convert8. .has() in Maps Map to obj---");

let product4 = new Map();
product4.set('pCode', 4004)
.set('pName', 'Orange')
.set('price', 60);

let obj4 = Object.fromEntries(product4.entries());
console.log(obj4); //{ pCode: 4004, pName: 'Orange', price: 60 }


//8. .has() in Map -> returns boolean value if the key exists
console.log("---7. Object.fromEntries() - converts Map to obj---");
console.log(product4.has('pCode')); //true

//8. forEach() in Map
console.log("---8. forEach() in Map---");

product4.forEach((value, key, map) => {
    console.log(`${value}-${key}`);
});
/*
4004-pCode
Orange-pName
60-price
*/

//9. delete() & clear()
console.log("-------9. delete() & clear()----");
//delete needs key mentioned and deletes a single value
//clear will empty the whole map

product4.delete('pCode');
console.log(product4); //Map(2) { 'pName' => 'Orange', 'price' => 60 }
product4.clear();
console.log(product4); //Map(0) {}
