let product = new WeakMap();
let obj = {
    'pCode': 1001
};
product.set(obj, 1 );
console.log(product.get(obj)); //1


//WeakSet
let product1 = new WeakSet();
let obj1 = {};
let obj2 = {};
let obj3 = {};
product1.add(obj1, 1001);
product1.add(obj2, 2002);
product1.add(obj3, 3003);
console.log(product1.has(obj1)); //true
console.log(product1.has(obj2)); //true
console.log(product1.has(obj3)); //true