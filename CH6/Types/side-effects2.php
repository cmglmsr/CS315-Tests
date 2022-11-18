<?php
echo "Functional side effects<br>";
$a=7;
function foo() {
  global $a;
  $a= 10;
  return $a;
}

// 1
 $x= $a + foo();    // run this

// 2
//$x= foo() + $a;   // or that

echo "x=$x<br>";
// since both of them return 20, 
// we conclude that function are called before variables
?>