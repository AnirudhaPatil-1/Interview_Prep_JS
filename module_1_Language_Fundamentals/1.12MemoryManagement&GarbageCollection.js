// 1.
let obj = {
    color: "orange"
}
console.log(obj); //{ color: 'orange' }

obj = null;
console.log(obj); //null

// 2. Mark and Sweep Algorithm
// starts with root node ie global object
// checks for references for the elements
// mark operation - 
// if reference found - marks it
// if unlocated unmarks it
// sweep operation - 
// marked elements are kept and unmarked or unlocated elements are deleted (memory released)


