// DEFAULT FUNCTION PARAMETERS

function applyDiscount(price, discount = 0.05) {
  return price * (1 - discount);
}

const price = 50;
var discount = 0.1;
// Use of function without default parameter
console.log("Applying discount of 10%:", applyDiscount(price, discount)); // Applying discount of 10%: 45
// Use of function with default parameter
console.log("Applying the default discount (5%):", applyDiscount(price)); // Applying the default discount (5%): 47.5
// Passing undefined value
console.log("Applying an undefined discount:", applyDiscount(price, undefined)); // Applying an undefined discount: 47.5
// Passing null value
console.log("Applying a null discount:", applyDiscount(price, null)); // Applying a null discount: 50
