function big() {  // Static scoping with var
    console.log("1. x=" + x);
    function sub1() {
    var x = 7;
    console.log("3. x=" + x);
    sub2();
    }
    function sub2() {
    var y = x;
    console.log("4. x=" + x);
    }
    var x = 3;
    console.log("2. x=" + x);
    sub1();
}

big();