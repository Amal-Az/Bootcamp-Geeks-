import { people } from './data.js';

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  console.log(`Âge moyen : ${averageAge.toFixed(2)} ans`);
}

calculateAverageAge(people);