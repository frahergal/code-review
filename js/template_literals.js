// TEMPLATE LITERALS

const name = "Javier";
const profession = "Software engineer";

// String concatenation with back-tick (`)
console.log(`${name}, ${profession}\n`); // Explicit carriage return for code readability

// Use of templates inside strings
const text = `Hi there!
My name is ${name} and I'm ${profession}`; // Implicit carriage return
console.log(text);

// Embedded expressions
const price = 10;
var discount = 0.1;
console.log(`
The product has a price of $${10 * (1 - 0.1)} after applying the discount.`);
