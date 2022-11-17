x=5;
{  // var does not create local scope 
   // for its variables in the block.
  var x = 3;
}
console.log("x="+x);


y = 33;
while (x==3){
  let y = 99;
  x=4;
  console.log("x="+x);
}
console.log("y="+y);