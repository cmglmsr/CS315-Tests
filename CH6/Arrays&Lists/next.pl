# find the position of the input integer

my @haystack = (10,40,33,25,15,69,81,17,29);

my $needle = 17;

my $pos = -1;
for my $i (@haystack){
    $pos++;
    next if($i != $needle);
    print("Found number $needle at position $pos\n");
}
