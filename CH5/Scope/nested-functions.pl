sub bar() {
	print "31";
}
sub foo() {
    my $x;
    $x =7;
    sub bar() {
	print "in bar x=$x\n";
    }
    bar();
    $x= 9;
}

bar();
print("Calling foo\n");
foo();
print "Calling bar in main\n";
bar();

