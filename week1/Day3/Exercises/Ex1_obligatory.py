# 1
class cat :
    def _init_(self, name, age):
        self.name = name
        self.age = age
chat1 = cat("Mimi", 2)
chat2 = cat("rimi", 6)
chat3 = cat("luna", 7)
def chat_plus_age(chat_a, chat_b, chat_c):
    chats = [chat_a, chat_b, chat_c]
    plus_vieux = chat_a
    for chat in chats:
        if chat.age > plus_vieux.age:
            plus_vieux = chat
    return plus_vieux
vieux_chat = chat_plus_age(chat1, chat2, chat3)
print(f"The oldest cat is {vieux_chat.name} and it has {vieux_chat.age} years old")
# 2
class Dog:
    def _init_(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
         print(f"{self.name} fait ouaf !")
    def jump(self):
        saut = self.height * 2
        print(f"{self.name} saute de {saut} cm de haut !")

davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("poki", 35)
print(f"David's dog is called {davids_dog.name} is measure {davids_dog.height} cm .")
davids_dog.bark()
davids_dog.jump()
print(f"Sarah's dog is called  {sarahs_dog.name} is measure{sarahs_dog.height} cm .")
sarahs_dog.bark()
sarahs_dog.jump()
if davids_dog.height > sarahs_dog.height:
            print(f"{davids_dog.name} is greater than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
            print(f"{sarahs_dog.name} is greater than {davids_dog.name}.")
else:
            print("Both dogs are the same size.")

# 3
class Song:
        def _init_(self, lyrics):
            self.lyrics = lyrics

        def sing_me_a_song(self):
            for line in self.lyrics:
                print(line)
stairway = Song([
    "There's a lady who's sure",
    "all that glitters is gold",
    "and she's buying a stairway to heaven"
])

stairway.sing_me_a_song()
# 4
class Zoo:
    def _init_(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo: ", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped:
                grouped[first_letter] = [animal]
            else:
                grouped[first_letter].append(animal)

        self.grouped_animals = grouped
        return grouped

    def get_groups(self):
        if hasattr(self, 'grouped_animals'):
            for letter, group in self.grouped_animals.items():
                print(f"{letter}: {group}")
        else:
            print("The animals are not yet grouped")