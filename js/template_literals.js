// TEMPLATE LITERALS

const name = "Javier";
const profession = "Software engineer";

// String concatenation with back-tick (`)
console.log(`${name}, ${profession}\n`); // Javier, Software engineer

// Use of templates inside strings
const text = `Hi there!
My name is ${name} and I'm ${profession}`; // Implicit carriage return
console.log(text); // Hi there!, My name is Javier and I'm Software engineer

// Embedded expressions
const price = 10;
var discount = 0.1;
console.log(`
The product has a price of $${10 * (1 - 0.1)} after applying the discount.`); // The product has a price of $9 after applying the discount.
