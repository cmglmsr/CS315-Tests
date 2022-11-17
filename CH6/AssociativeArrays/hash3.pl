#!/usr/bin/perl
%notlar = ("Ali" => 95, "Veli" => 80, "Selami" => 95);
print "Veli’nin notu $notlar{Veli}\n";
$notlar{"Hulki"} = 75;
delete $notlar{"Veli"};
foreach $anahtar (keys %notlar) {
    print "$anahtar $notlar{$anahtar}\n";
}
