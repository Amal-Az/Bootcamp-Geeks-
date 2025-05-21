// ex 1
function displayNumbersDivisible() {
  let sum = 0; 
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);  
      sum += i;         
    }
  }
  console.log("Sum :", sum);
}
displayNumbersDivisible();
// bonus
function displayNumbersDivisible(divisor) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum :", sum);
}

displayNumbersDivisible(2);
displayNumbersDivisible(39);
displayNumbersDivisible(50);

// 2
const stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
};  

const prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
}; 

const shoppingList = ["banana", "orange", "apple"];
function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];       
      stock[item] -= 1;            
    }
  }
  return total;
}
console.log("Total à payer :", myBill());

// 3
function changeEnough(itemPrice, amountOfChange) {
  const coinValues = [0.25, 0.10, 0.05, 0.01];
  let total = 0;

  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * coinValues[i];
  }

  return total >= itemPrice;
}

// 4
function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
  } while (isNaN(nights) || nights.trim() === "");

  return Number(nights) * 140;
}
function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination.trim() === "");

  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}
function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days would you like to rent a car?");
  } while (isNaN(days) || days.trim() === "");

  days = Number(days);
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95; // 5% discount
  }
  return cost;
}
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return car + hotel + plane;
}
// bonus
function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95;
  }
  return cost;
}

function totalVacationCost() {
  let nights, destination, days;

  // Demander les valeurs une seule fois
  do {
    nights = prompt("How many nights will you stay?");
  } while (isNaN(nights) || nights.trim() === "");
  nights = Number(nights);

  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination.trim() === "");

  do {
    days = prompt("How many days will you rent the car?");
  } while (isNaN(days) || days.trim() === "");
  days = Number(days);

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return hotel + plane + car;
}
totalVacationCost();