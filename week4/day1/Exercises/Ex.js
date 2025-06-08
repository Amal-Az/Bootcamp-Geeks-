//Ex1:
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();
// => inside the funcOne function 3

// #1.2 What will happen if the variable is declared with const instead of let ?
// const a = 5; dans ce cas, on ne pourra pas faire `a = 3`, car une variable déclarée avec `const` ne peut pas être réassignée. 
// Résultat : une erreur TypeError sera levée à l’exécution.


//#2
let C = 0;
function funcTwo() {
    C = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${C}`);
}

// #2.1 - run in the console:
funcThree(); // => inside the funcThree function 0
funcTwo();
funcThree(); // => inside the funcThree function 5

// #2.2 What will happen if the variable is declared with const instead of let ?
// Si `C` est déclaré avec const, alors `C = 5;` dans funcTwo() provoquera une erreur 
// car une constante ne peut pas être modifiée 



//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive(); // => inside the funcFive function hello

// Ici, on assigne une variable `a` au scope global via `window.a`, donc `funcFive` y a accès.
// Si on change cela pour `const a = "hello"`, il faudrait le déclarer globalement, 
// sinon la fonction `funcFive()` ne trouvera pas `a` et lèvera une erreur.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // => inside the funcSix function test

// #4.2 What will happen if the variable is declared with const instead of let ?
// Aucun changement. Le `a` dans la fonction `funcSix` est une variable locale "bloc local"
// On peut la déclarer avec `const` tant qu’on ne la réassigne pas

//#5
let b = 2;
if (true) {
    let b = 5;
    alert(`in the if block ${b}`);
}
alert(`outside of the if block ${b}`);

// #5.1 - run the code in the console:
// => in the if block 5
// => outside of the if block 2

// #5.2 What will happen if the variable is declared with const instead of let ?
// Aucun changement de comportement, tant qu’on ne réassigne pas les constantes
// Le `b` à l'intérieur du `if` est dans un *bloc scope*, donc il masque le `b` extérieur



//Ex2:

// function winBattle(){
//     return true;
// }
const winBattle = () => true
let experiencePoints = winBattle() ?  10 : 1;
console.log(experiencePoints);


//Ex3:
const isString = value => typeof value === 'string';
// Elle retourne directement le résultat de l'expression qui est soit true, soit false

console.log(isString('hello'));        // true
console.log(isString([1, 2, 4, 0]));   // false


//Ex4:
const sum = (a,b) => a+b;



//Ex5:
//Function Declaration
function kgToGrams (weight) { return weight*1000 };
console.log(kgToGram(2));
//Function Expression
const kgToGrams = function (weight) { 
    return weight*1000 
};
console.log(kgToGram(2));
// Les function declarations sont "hoistées", donc on peut les appeler avant leur définition.
// Les function expressions ne sont pas hoistées : on ne peut les appeler qu'après leur définition.

//One-line Arrow Function
const kgToGrams = weight => weight*1000; 
console.log(kgToGram(2));


//Ex6:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <title>Fortune Teller</title>
// </head>
// <body>
//     <h1>Fortune Teller</h1>

//     <script>
//         (function(numChildren, partnerName, location, jobTitle) {
//             const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
//             const p = document.createElement('p');
//             p.textContent = message;
//             document.body.appendChild(p);
//         })(3, "Alice", "Paris", "Developer");
//     </script>
// </body>
// </html>


//Ex7:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Welcome User</title>
// </head>
// <body>

//   <nav id="navbar"></nav>

//   <script>
//     (function(userName) {
//       const navbar = document.getElementById('navbar');

//       const userDiv = document.createElement('div');

//       const welcomeText = document.createElement('span');
//       welcomeText.textContent = `Welcome, ${userName}`;

//       const profilePic = document.createElement('img');
//       profilePic.src = 'https://randomuser.me/api/portraits/men/75.jpg';
//       profilePic.alt = `${userName}'s profile picture`;

//       userDiv.appendChild(profilePic);
//       userDiv.appendChild(welcomeText);
//       navbar.appendChild(userDiv);
//     })('John');
//   </script>

// </body>
// </html>


//Ex8:
// HTML 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Juice Bar</title>
// </head>
// <body>
//   <div id="juice"></div>
//   <script src="script.js"></script>
// </body>
// </html>

//Js
function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.getElementById("juice").textContent = sentence;
  }

  addIngredients("apple", "banana", "ginger");
}

makeJuice("large");

  //Part2:
 function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
    document.getElementById("juice").textContent = sentence;
  }

  addIngredients("apple", "banana", "ginger");
  addIngredients("lemon", "mint", "cucumber");
  displayJuice();
}

makeJuice("medium");
