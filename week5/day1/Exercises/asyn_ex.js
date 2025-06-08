// ex1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`The number ${num} is less than or equal to 10`);
    } else {
      reject(`The number ${num} is greater than 10`);
    }
  });
}

// Test avec un nombre > 10 (devrait rejeter)
compareToTen(18)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(6)
  .then(result => console.log(result))
  .catch(error => console.log(error));


// 2
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

promise
  .then(result => console.log(result)) 
  .catch(error => console.log(error));

// 3
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise.then(value => console.log("Resolved with:", value));
rejectedPromise.catch(error => console.log("Rejected with:", error));

