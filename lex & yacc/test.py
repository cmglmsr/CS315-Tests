day = "monday"
def foo():
    day = "31"
    global day
    print("day is:", day)
foo()
print(day)