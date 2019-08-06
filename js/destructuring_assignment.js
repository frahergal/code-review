// DESTRUCTURING ASSIGNMENT

// Destructuring object
var person = {
  name: "John",
  surname: "Doe",
  age: 50,
  profession: "Software engineer"
};
var { name, surname } = person;
console.log(name, surname); // John Doe

// Destructuring arrays
var colors = ["Red", "White", "Yellow", "Pink", "Orange"];
var [colorA, colorB] = colors;
console.log(colorA, colorB); // Red White

var movies = ["Scarface", "The Mummy", "The Godfather"];
var [firstMovie] = movies;
console.log(firstMovie); // Scarface

var [, , thirdMovie] = movies;
console.log(thirdMovie); // The Godfather

// Default value (useful for undefined values)
var [, , thirdMovie = "Confessions", fourthMovie = "Inception"] = movies;
console.log(thirdMovie, fourthMovie); // The Godfather Inception

var [firstMovie, ...restOfMovies] = movies;
console.log(restOfMovies); // [ 'The Mummy', 'The Godfather' ]
