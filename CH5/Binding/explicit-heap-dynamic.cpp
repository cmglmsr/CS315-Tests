#include <iostream>
using namespace std;

int main(){
  float *floatnode;
  floatnode = new float;
  *floatnode = 5.7;
  cout << *floatnode << '\n';

  delete floatnode; 
  cout << *floatnode << '\n';
}
