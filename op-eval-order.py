def foo ():
  global a
  a = 10
  return a

a = 7
print (a + foo())

a = 7
print (foo() + a)
