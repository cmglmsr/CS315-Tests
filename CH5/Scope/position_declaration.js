x=5;

function foo () {

  console.log("in foo, x="+x);

  x = 7;
  console.log("in foo, x="+x);

  var x=3; // local variable x is defined at the end of the function definition !
         // Hoisting: all var declaration are executed as the first statements of their scope.
         // and initialized to 'undefined'
}

foo();
console.log("in global x="+x);

y=5;

function boo () {

  //console.log("in foo, x="+y);


  let y; // local variable x is defined at the end of the function definition !
         // Hoisting: all let declaration are executed as the first statements of their scope.
         // but are NOT initialized. The error message can be seen in the console.
    y = 7;

    console.log("in foo, x="+y);


}

boo();
console.log("in global x="+y);