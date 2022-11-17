y=33
function foo (a) {
    console.log("foo is called, a="+a);
    x = a;          // a global varible is defined
    var y = a * 2;  // a local variable is defined
    /*
     The scope of a variable declared with var is its current execution context, 
     which is either the enclosing function or, for variables declared outside 
     any function, global. */
  }
foo(5);
console.log("in global, x="+x);
console.log("in global, y="+y);  // Error:. y is not defined!