# 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
combinaison = zip(keys, values)
print(dict(combinaison))
# 2
name= input("enter your name: ")
age= int(input("enter your age: "))
def ticket_price(age):
    if age <3:
        print("the ticket is free")
        return 0
    elif 3 <= age <= 12:
        print("the ticket is $10")
        return 10
    else:
         print ("the ticket is $15")
         return 15
    
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
total_cost = 0

for name, age in family.items():
    price = ticket_price(age)
    print(f"{name} has to pay ${price}")
    total_cost += price

print(f"Total cost for the family is: ${total_cost}")

# 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print("Zara's clients are:", ", ".join(brand["type_of_clothes"]))
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand["number_stores"])
# ==> La méthode update() a écrasé la valeur précédente de number_stores qui était 2
# avec la nouvelle valeur 10000 du dictionnaire more_on_zara

# 4
def describe_city(city,country="morocco"):
    print(city + " is in " + country)
describe_city("rabat")

# 5
import random
def user_number(number):

    if not 1 <= number <= 100:
        print("Please enter a number between 1 and 100")
        return
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Great, you guessed the number correctly")
    else:
        print("Fail Your guess was incorrect")
        print(f"Your number: {number} | Random number: {random_number}")
user_number(65)

# 6
def make_shirt(size= "L",text= "I love Python") :
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt("M", "Hi Geeks")
make_shirt()
make_shirt("S")
make_shirt("M", "Code like a hacker")
make_shirt (text= "I'm Python engineer",size= "L")

# 7
def get_random_temp():
     return random.randint(-10, 40)

for _ in range(5):
    temp = get_random_temp()
    print(f"Température générée : {temp}°C")

def main():
    temperature = get_random_temp()
    print(f"The temperature right now is  {temperature} °C")

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 17 <= temperature <= 23:
        print("The weather is mild, a light jacket is enough")
    elif 24 <= temperature <= 32:
        print("It's hot! Remember to drink plenty of water")
    elif 33 <= temperature <= 40:
        print("Heatwave! Stay cool and avoid the sun as much as possible")
main()

import random

# Fonction qui génère une température aléatoire en fonction de la saison
def get_random_temp(season):
    if season == "winter":
        lower, upper = -10, 16
    elif season == "spring":
        lower, upper = 0, 20
    elif season == "summer":
        lower, upper = 16, 35
    elif season == "autumn" or season == "fall":
        lower, upper = 5, 18
    else:
        return "Invalid season"  

# Fonction qui donne des conseils en fonction de la température
def main():
    temp = get_random_temp()
    print(f"La température actuelle est de {temp}°C.")
    if temp < 0:
        return "Brrr, that's freezing! Wear some extra layers today."
    elif temp <= 16:
        return "Quite chilly! Don't forget your coat."
    elif temp <= 23:
        return "Nice weather, but a light jacket might be nice."
    elif temp <= 32:
        return "Perfect for a warm day! A t-shirt should be enough."
    else:
        return "It's hot! Stay hydrated and wear light clothing."
main()    

# Fonction principale qui gère l'interaction avec l'utilisateur
import random

def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(0, 20)
    elif season == "summer":
        return random.randint(16, 35)
    elif season == "autumn" or season == "fall":
        return random.randint(5, 18)
    else:
        return "Invalid season"

def main():
    season = input("Enter the season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp(season)
    if isinstance(temp, str):
        print(temp)
        return
    print(f"The temperature is {temp}°C.")
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("Nice weather, but a light jacket might be nice.")
    elif temp <= 32:
        print("Perfect for a warm day! A t-shirt should be enough.")
    else:
        print("It's hot! Stay hydrated and wear light clothing.")

import random

def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(10, 22), 1)
    elif season == 'summer':
        return round(random.uniform(20, 40), 1)
    elif season == 'autumn' or season == 'fall':
        return round(random.uniform(10, 24), 1)
    else:
        return round(random.uniform(-10, 40), 1)
    
def main():
    try:
        month = int(input("Entrez le numéro du mois (1 = janvier, 12 = décembre) : "))
        if month in [12, 1, 2]:
            season = 'winter'
        elif month in [3, 4, 5]:
            season = 'spring'
        elif month in [6, 7, 8]:
            season = 'summer'
        elif month in [9, 10, 11]:
            season = 'autumn'
        else:
            print("Mois invalide.")
            return

        temp = get_random_temp(season)
        print(f"La température actuelle ({season}) est de {temp}°C.")
        ...
    except ValueError:
        print("Veuillez entrer un chiffre valide.")