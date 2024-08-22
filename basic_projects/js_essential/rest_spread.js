// spread operator 

const newArr = [5, 6, ...arr];
console.log("New array (after spread operator):", newArr); // [5, 6, 1, 2, 3]


function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums);
console.log("Result of sum:", result);



// rest operator 
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log("First element:", first); // 1
console.log("Rest of the elements:", rest); // [2, 3, 4, 5]


function logMessages(...messages) {
    messages.forEach(message => console.log(message));
  }
  
  // Usage
  logMessages("Hello", "World", "from", "React!");
  // Output:
  // Hello
  // World
  // from
  // React!