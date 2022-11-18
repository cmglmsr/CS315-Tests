# Return a function that returns its argument incremented by 'n'
def make_incrementer(n):
    def increment(x, n=n):
        return x+n
    return increment

add1 = make_incrementer(1)
print( add1(3))  # This prints '4'
