var x = 10;

function a() {
  x = x + 5;
  console.log("value of x in function a: " + x); //15
}

function b() {
  console.log(x);
  console.log("function b: " + x); //15
}

a();
b();

console.log("global: " + x); //15

