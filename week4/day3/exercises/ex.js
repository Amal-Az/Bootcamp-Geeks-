// ex1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// ex2
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// ex3
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Convertir l'objet en tableau
const usersArray = Object.entries(users);
console.log(usersArray);
// Résultat attendu : [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// 2. Multiplier les ID par 2
const updatedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsersArray);
// Résultat attendu : [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// EX4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// ex5
// //  1 :  Incorrect - car elle tente d’utiliser this avant d’avoir appelé super(), on doit toujours appeler super() dans le constructeur d’une classe dérivée avant d’utiliser this.
//  2 :  Correct - Elle appelle super(name) dès le début du constructeur, ce qui permet d’hériter correctement des propriétés de la classe Dog
//  3 : Incorrect - elle appelle super(name) sans que la variable name ne soit définie dans les paramètres de la fonction
//  4 :  Incorrect - elle utilise this pour définir this.name avant d’appeler super(), ce qui provoque une erreur.

// EX6
// [2] === [2]        // false
// {} === {}          // false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// 1
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// 2
class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// 3
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));

