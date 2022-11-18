x=5;
{ 

  x = 9;
  console.log("x in local: "+x);   
  var x = 3; // with let gives an error, with var 9 3 3
  console.log("x in the block: "+x);
}

console.log("x in global: "+x);