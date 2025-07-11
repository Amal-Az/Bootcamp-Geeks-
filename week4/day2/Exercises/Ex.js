// ex1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Affichage des choix avec leur position
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Vérification si "Violet" est présent
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


// ex2
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const position = index + 1;
    let suffix;

    suffix = (position === 1) ? ordinal[1] :
             (position === 2) ? ordinal[2] :
             (position === 3) ? ordinal[3] :
             ordinal[0];

    console.log(`${position}${suffix} choice is ${color}.`);
});

// ex3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

const country = "USA";
console.log([...country]);

let newArray = [...[,,]];
console.log(newArray);

// ex4
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

const lastNamesOfFSR = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);

console.log(lastNamesOfFSR);

// ex5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const story = epic.reduce((acc, word) => acc + " " + word);
console.log(story);

// ex6
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true},
  {name: "Liam", course: "Computer Science", isPassed: false},
  {name: "Jenner", course: "Information Technology", isPassed: true},
  {name: "Marco", course: "Robotics", isPassed: true},
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
  {name: "Jamie", course: "Big Data", isPassed: false}
];
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Bon travail ${student.name}, tu as réussi le cours en ${student.course}`);
  });