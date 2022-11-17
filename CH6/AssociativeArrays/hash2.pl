#!/usr/bin/perl
my %color_of = (
    "apple"  => "red",
    "orange" => "orange",
    "grape"  => "purple",
    );

print "Color of apple is $color_of{apple} \n";

$color_of{"banana"} = "yellow";
print "\nAfter adding banana...\n";
for $fruit (keys %color_of) {
    print "The color of $fruit is $color_of{$fruit}\n";
}

delete $color_of{"orange"};
print "\nAfter deleting oragne...\n";
for $fruit (keys %color_of) {
    print "The color of $fruit is $color_of{$fruit}\n";
}
