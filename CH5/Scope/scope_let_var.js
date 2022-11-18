function foo() {
    var x = 7;
    let y = 3;
    function bar () {
      console.log("x="+x);
      console.log("y="+y);
      x = 10;
      y = 5
    } // bar
    bar ();
    console.log("x="+x);
    console.log("y="+y);  
}
foo();
