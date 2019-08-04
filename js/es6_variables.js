// ES6 VARIABLES

// Classic way: var
var changeme = true;
console.log("Var value before modifying it:", changeme);
changeme = false;
console.log("Var value after modifying it:", changeme, "\n");

// Constants: const
const unmodifiable = "You cannot modify me!";
// unmodifiable = "This would throw an error";

// Scope variables: let
// Old case - no scope
var name = "Javier";
console.log("Var initial value:", name);
if (name) {
  var name = "John";
  console.log("Var modified inside block if:", name);
}
console.log("Var value outside block if:", name, "\n");
// Scope var with let
var name = "Javier";
console.log("Var initial value:", name);
if (name) {
  let name = "John";
  console.log("Let variable inside block if:", name);
}
console.log("Var value outside block if:", name, "\n");
