// OBJECT LITERAL ENHACENMENT

// Building objects
var name = "Javier";
var role = "Software Engineer";
var person = { name, role };
console.log(person); // { name: 'Javier', role: 'Software Engineer' }

// Building objects with functions
var print = function() {
  console.log(`Hello ${this.name}, I know you work as a ${this.role}`);
};
person = { name, role, print };
person.print(); // Hello Javier, I know you work as a Software Engineer
