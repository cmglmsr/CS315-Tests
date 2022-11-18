function main() {
    var x;
    function bigsub() {
      var a, b, c, d;
  
      function sub1() {
        var a, d;
        d=40;
        a = b+c;
        console.log("In sub1, a="+a+" b="+b+" c="+c);
      } // sub1
  
      function sub2(x) {
        var b, e;
        function sub3() {
          var c, e;
          c = 50; e = 51;
          sub1();
          e = b + a;
          console.log("In sub3, e="+e+" b="+b+" a="+a);
        } // sub3
  
        b = 61; e=62;
        sub3();
        
        a = d + e;
        console.log("In sub2, a="+a+" d="+d+" e="+e);
      } // sub2
  
      a=30; b=31; c=32;
      sub2(7);  
    } // big sub
  
    x = 1;
    bigsub();
  } //main

  main();
  /*
In sub1, a=63 b=31 c=32
In sub3, e=91 b=61 a=30
In sub2, a=NaN d=undefined e=62 */