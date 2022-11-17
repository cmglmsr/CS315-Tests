day = "Monday"
def calendar():
  # print(day) # gives error
  day = "Tuesday"  # day is local, because of this assignment
  print ("local day is", day)

calendar()
print ("global day is", day)
