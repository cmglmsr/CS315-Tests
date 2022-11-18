var b = 1;
function outer(){
    var b = 22
    function inner(){
        b++;
        console.log(b)
    }
    inner();
    console.log(b)
}
outer();
console.log(b)