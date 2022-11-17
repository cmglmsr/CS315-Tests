sub foo {
    print "in foo\n";
    %args = @_; 

    foreach $key (keys %args) {
        print "$key => $args{$key}\n";
    }
}

%x =  ("a"=>3, "b"=>5) ;
%y =  ("c"=>7, "d"=>9) ;

foo( %x, %y);
