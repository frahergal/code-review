// ES6 VARIABLES

// === Classic way: var ===
var changeme = true;
console.log("Var value before modifying it:", changeme); // Var value before modifying it: true
changeme = false;
console.log("Var value after modifying it:", changeme, "\n"); // Var value after modifying it: false

// === Constants: const ===
const unmodifiable = "You cannot modify me!";
// unmodifiable = "This would throw an error";

// However, it's possible to modify constant object properties
const order = { items: ["pizza", "fries"], price: 15 };
console.log("Const object initialization:", order); // Const object initialization: { items: [ 'pizza', 'fries' ], price: 15 }
order.price = 12.5;
console.log("Const object modified:", order, "\n"); // Const object modified: { items: [ 'pizza', 'fries' ], price: 12.5 }

// === Scope variables: let ===
// Old case - no scope
var name = "Javier";
console.log("Var initial value:", name); // Var initial value: Javier
if (name) {
  var name = "John";
  console.log("Var modified inside block if:", name); // Var modified inside block if: John
}
console.log("Var value outside block if:", name, "\n"); // Var value outside block if: John

// Scope var with let
var name = "Javier";
console.log("Var initial value:", name); // Var initial value: Javier
if (name) {
  let name = "John";
  console.log("Let variable inside block if:", name); // Let variable inside block if: John
}
console.log("Var value outside block if:", name, "\n"); // Var value outside block if: Javier
