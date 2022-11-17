#include<stdio.h>
void foo() {
  static int n = 5;
  printf("in foo: n=%d\n", n);
  n++;
} // foo

void bar() {
  static int i = 7;
  printf("in bar: i=%d\n", i);
  i = i + 3;
}
void main() {
  foo();
  foo();
  foo();
  bar();
  bar();
  bar();
} // main
