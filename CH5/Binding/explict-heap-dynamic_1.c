#include<stdio.h>
#include<stdlib.h>  
void main() {
  int *x = malloc(sizeof(int));
  *x = 5;
  printf("x is %d\n", x);
  printf("*x is %d\n", *x);

  free(x);
  printf("x is freed\n");
  printf("*x is %d\n", *x);

  *x = 7;
  printf("*x is %d\n", *x);

  int *y = malloc(sizeof(int));
  printf("y is %d\n", y);
  printf("*y is %d\n", *y);
  *y = 9;

  printf("*x is %d\n", *x);
}
