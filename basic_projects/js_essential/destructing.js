// Destructuring Objects and Arrays


// objects
const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

// Destructuring
const { name: personName, age, city } = person;

console.log(personName); // Alice
console.log(age); // 25
console.log(city); // Wonderland


// destructing array has differnt syntax 


//arrays
const fruits = ["apple", "banana", "cherry"];

const numbers = [1, 2, 3];
// Destructuring
const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3



