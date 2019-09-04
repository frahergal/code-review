// SPREAD OPERATOR

// Arrays combination
const seasons = ["Spring", "Summer", "Autumn", "Winter"];
const weather = ["Sunny", "Windy", "Snowy", "Rainy"];
const seasonCocktail = [...seasons, ...weather];
console.log(seasonCocktail.join(", ")); // Spring, Summer, Autumn, Winter, Sunny, Windy, Snowy, Rainy

// Copy of arrays to avoid mutation on operations
const [lastSeason] = [...seasons].reverse(); // seasons.reverse() would mutate the array and change its order
console.log(lastSeason); // Winter
console.log(seasons); // [ 'Spring', 'Summer', 'Autumn', 'Winter' ]

// Getting certain elements
var [firstSeason, ...lastSeasons] = seasons;
console.log(firstSeason); // Spring
console.log(lastSeasons); // [ 'Summer', 'Autumn', 'Winter' ]

// Functions with n arguments
function movieMarathon(...args) {
  var [firstMovie, ...lastMovies] = args;
  var numberOfMovies = args.length;
  console.log(`The first movie I watched was ${firstMovie}.`);
  console.log(`After that, I watched: ${lastMovies.join(", ")}.`);
  console.log(`That makes a total of ${numberOfMovies} movies!`);
}
movieMarathon("Toy Story", "The Mummy", "Pulp Fiction", "Gastby");
// The first movie I watched was Toy Story.
// After that, I watched: The Mummy, Pulp Fiction, Gastby.
// That makes a total of 4 movies!

// Spread operator with objects
var data = { name: "Jane", familyName: "Doe" };
var age = 27;
var person = { ...data, age };
console.log(person); // { name: 'Jane', familyName: 'Doe', age: 27 }
