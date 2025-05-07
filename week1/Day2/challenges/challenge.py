word = input("Enter a word: ")
letter_indices = {}

for index, letter in enumerate(word):
    if letter in letter_indices:
        letter_indices[letter].append(index)
    else:
        letter_indices[letter] = [index]

print(letter_indices)