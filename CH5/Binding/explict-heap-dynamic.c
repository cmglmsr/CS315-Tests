#include<stdio.h>
#include<stdlib.h>  
void main() {
  float *x = malloc(sizeof(float));  // allocation
  *x = 5.7;
  printf("x is %d, *x is %f\n", x, *x);

  free(x);                       // deallocation
  printf("x is freed\n");

  printf("*x is %f\n", *x);
  printf("x is %d\n", x);
} // main
