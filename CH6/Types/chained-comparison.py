"""
Python: Comparisons can be chained arbitrarily;
for example, x < y <= z is equivalent to x < y and y <= z, 
except that y is evaluated only once 
(but in both cases z is not evaluated at all when x < y is found to be false).
"""

def foo():
  print( "  in foo")
  return 2
def bar():
  print( "  in bar")
  return 5
def baz():
  print( "  in baz")
  return 3

print( foo() < bar() <= baz() ) # foo() < bar() and bar() <= baz()
print( foo() < bar() >= baz()  )# foo() < bar() and bar() >= baz()
 
