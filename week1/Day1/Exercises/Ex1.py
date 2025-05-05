# 1 
first= "Hello World"*4
print (first)
2# 
a= (99**3)*8
print(a)
# 3
name= input("enter your name: ")
if name == "amal":
   print("ooh! we have the same name")
else:
   print("ooh! your name is so beautiful")
# 4
height= input(int("enter your height in centimeters: "))
if height > 145:
   print("your tall is enough to ride.")
else:
   print("you need to grow some more to ride.")
# 5
my_fav_numbers= {2,5,8}
my_fav_numbers.update([0, 15])
my_fav_numbers.pop()
friend_fav_numbers= {6,1,9}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
