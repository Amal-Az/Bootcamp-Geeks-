# 1 
first= "Hello World"*4
print (first)
2# 
a= (99**3)*8
print(a)
# 3
# name= input("enter your name: ")
# if name == "amal":
#    print("ooh! we have the same name")
# else:
#    print("ooh! your name is so beautiful")
# 4
height= int(input("enter your height in centimeters: "))
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
# 6
# No, tuples are immutable, so you can't add integers directly to them. 
# You can create a new tuple by combining the old one with new values.
# 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print("Number of Apples:", apple_count)
basket.clear()
print(basket)
# 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich}")

