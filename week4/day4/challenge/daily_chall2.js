function allTruthy(...args) {
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) {  
      return false;  
    }
  }
  return true;
}

// test
console.log(allTruthy(1, "hello", true));   // true
console.log(allTruthy(1, 0, true));         // false (0 est falsy)