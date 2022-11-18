function sub1() {
    var x;             // in static parent, deep binding
  
    function sub2() {  // passed as a parameter
      console.log("x="+x);   // which x is displayed ?
    } // sub2
  
    function sub3() {
      var x;           // in the env that included the call, ad hoc
      x=3;
      sub4(sub2);
    } // sub3
  
    function sub4(subx) {
      var x;          // in dynamic parent, shallow binding
      x = 1;
      subx();
    } // sub4
  
    x = 2;
    sub3();
  } //sub1

sub1();