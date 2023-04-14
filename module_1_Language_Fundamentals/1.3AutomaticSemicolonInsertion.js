// Adding semicolon
function test() {
    return;
    {
      name: "test"
    };
  }
  console.log(test());
  
  // Moving object literal to the same line
  function test() {
    return {
      name: "test"
    };
  }
  console.log(test());