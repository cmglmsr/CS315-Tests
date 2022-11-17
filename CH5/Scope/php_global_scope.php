$day = "Monday";
$month = "January";
function calendar() {
    $day = "Tuesday";
    global $month;
    print "local day is $day ";
    $gday = $GLOBALS['day'];
    print "global day is $gday";
    print "global month is $month ";
}
calendar();


OUTPUT:

local day is Tuesday
global day is Monday
global month is January