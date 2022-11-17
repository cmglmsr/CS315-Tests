sub foo {
  print "parameter is $_[0]\n";
  if ($_[0]%2==0) {
    print "even\n";
    sub bar {
      return 2*$_[0];
    }
  } else {
    print "odd\n";
    sub bar {
        print "defining bar for odd...\n";
	      return 2*$_[0]+100;
    }
  }
  return bar($_[0]);
}
print "Enter a number: ";
$num = <STDIN>;  
chomp $num;
$foo_num = foo($num);
print "number is $num foo(num) is $foo_num\n";


