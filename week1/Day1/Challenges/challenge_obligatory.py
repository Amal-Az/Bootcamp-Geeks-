# 1
number= int(input("enter a number :"))
length= int(input("enter a length :"))
multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)
print(multiples)
# 2
word= input("enter a word who contains the double or triple letters: ")
correct_word=""
for i in range(len(word)):
    if i == 0 or word[i] != word[i-1]:
       correct_word += word[i]
print("This is the correct word => " + correct_word)
