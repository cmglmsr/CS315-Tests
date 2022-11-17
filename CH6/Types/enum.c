/* enumeration type in C */
#include<stdio.h>
main () {
  enum day {mo, tu, we, th, fr, sa, su};
  enum day today;
  //enum mday {moo, tuo, wee, th, frr, saa, suu};
  today = th;
  today++;
  today++;
  if ((today == sa) || (today == su))
    printf ("weekend\n");
  else printf ("weekday\n");
}
