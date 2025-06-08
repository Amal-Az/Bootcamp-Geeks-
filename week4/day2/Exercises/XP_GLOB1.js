// ex1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

// ex2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// ex3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// ex4
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const flatArray = array.flat(2);
console.log(flatArray);  

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const joined = greeting.map(sentence => sentence.join(" "));
console.log(joined); 
// // ["Hello young grasshopper!", "you are", "learning fast!"]

const fullGreeting = joined.join(" ");
console.log(fullGreeting); 
// "Hello young grasshopper! you are learning fast!"

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const freed = trapped.flat(Infinity);
console.log(freed); // [3]