// DEFAULT FUNCTION ARGS

function applyDiscount(price, discount = 0.05) {
  return price * (1 - discount);
}

const price = 50;
var discount = 0.1;
// Use of function without default argument
console.log("Applying discount of 10%:", applyDiscount(price, discount));
// Use of function with default argument
console.log("Applying the default discount (5%):", applyDiscount(price));
