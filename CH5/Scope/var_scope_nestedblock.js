b = 1;
function outer(){
  var a = 2;
  console.log("in outer, a="+a+" b="+b);
  {
     var c = 3;
     console.log("a="+a+" b="+b+" c="+c);
     {
        var b= 4;  // try by commenting out
        console.log("a="+a+" b="+b+" c="+c);
     }
  }
  console.log("end of outer, a="+a+" b="+b+" c="+c);
} // outer
outer();