#include <stdio.h>
#include <stdlib.h>
int *p, *q, *r;

main() {
  p =  malloc(sizeof(int));
  *p = 5;  // A value is assigned to variable whose address is in p
  q = p;
  free(q); // Now q is null, p is dangling
  r =  malloc(sizeof(int));
  *r = 313131;  // A value is assigned to variable whose address is in r
  printf("*p is %d\n", *q);  // Value of *p is shown as 7 !!!
}
