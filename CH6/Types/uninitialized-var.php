<!DOCTYPE html>
<html>
<body>

<h1 style="color:#6d0ad6"> Test Php </h1>

<?php

$a = 10;
function test() {
  echo "in test a is $a<br>";
  $a = $a + 10;
  echo "in test after assignment a is $a<br>"; // 10
}
test();
echo $a;
?>
</body>
</html>
