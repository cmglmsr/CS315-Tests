<?php
function foo() {
    static $x = 5;
    static $y;
    $y=5;
    echo "x=$x, y=$y <br>";
    $x++;
    $y++;
}
foo(); // 5 5
foo(); // 6 5
foo(); // 7 5
?>