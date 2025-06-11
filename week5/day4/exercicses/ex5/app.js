
const _ = require('lodash'); // Lodash importé
const math = require('./math'); // Module local importé

const numbers = [10, 20, 30, 40];

const sum = math.add(5, 3);
const product = math.multiply(4, 6);

console.log('Addition :', sum);          // 8
console.log('Multiplication :', product); // 24

// Utilisation de lodash pour calculer la somme de tous les éléments
const total = _.sum(numbers);
console.log('Somme avec lodash :', total); // 100
