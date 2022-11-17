#include <stdio.h>

int x = 1;
foo() {
  printf("x in foo is %d\n",x);
  int x = 7;
  printf("x in foo is %d\n",x);
}

main() {
  foo();
  printf("x in main is %d\n",x);
}
