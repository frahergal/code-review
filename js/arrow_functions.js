// ARROW FUNCTIONS

// Arrow function without parameters
var saySomething = () => console.log("Hello there!\n");
saySomething(); // Hello there!

// Arrow function with single parameter (no parenthesis needed)
var sayMyName = name => console.log(`Hello ${name}\n`);
sayMyName("Walter White"); // Hello Walter White

// Arrow function with two parameters and one statement
var applyDiscount = (price, discount) => price * (1 - discount);
console.log(`Price after discount: ${applyDiscount(15, 0.1)}\n`); // Price after discount: 13.5

// Arrow function with more than one statement
var applyDiscountAndLog = (price, discount) => {
  console.log(`Initial price: ${price}`);
  price * (1 - discount);
  console.log(`Price after discount: ${applyDiscount(15, 0.1)}`);
};
applyDiscountAndLog(20, 0.05); // Initial price: 20, Price after discount: 13.5
