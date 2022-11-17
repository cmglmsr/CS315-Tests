#include <stdio.h>
#include <string.h>
int main() {
  char str[5] = "abc";

  int i;
  for(i=0; i<10; i++)
    printf("%d-",str[i]);
  printf("\nlength=%d\n", strlen(str));

  strcpy(str, "abcdef");
  for(i=0; i<10; i++)
    printf("%d-",str[i]);
  printf("\nlength=%d\n", strlen(str));
  return 0;
}
