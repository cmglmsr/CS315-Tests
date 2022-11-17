#include<stdio.h>
void foo () {
  int i= 99;
}
void bar () {
  int j;
  printf ("in bar, j=%d\n", j);
}
int main() {
  foo();
  bar(); // j = 99
  return 0;
}
