function main(n) {
    var x = 5;
    function foo (m) {
       var y = 7;
       // point 1
       console.log("m="+m+" n="+n+" x="+x+" y="+y);
    } // foo
    foo(x+10);
  }
  main();