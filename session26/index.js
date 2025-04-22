/* Hogwarts needs a digital Sorting Hat! Create an array of student names and randomly assign them to one of the four houses using the `map()` method.
Example input: `['Harry', 'Hermione', 'Ron', 'Draco']`
Expected output: `['Harry - Gryffindor', 'Hermione - Ravenclaw', 'Ron - Gryffindor', 'Draco - Slytherin']`
 */

const students = ["Harry", "Hermione", "Ron", "Draco"];
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const sdutentArry = students.map((studentName) => {
  const randomIndex = Math.floor(Math.random() * houses.length);
  const randomHouse = houses[randomIndex];
  return `${studentName} - ${randomHouse}`;
});
console.log(sdutentArry);

/*
2. The Pokémon Filter
Given an array of Pokémon with their combat power (CP), filter out Pokémon with CP less than 500 using the `filter()` method.
Example input: `[ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]`
Expected output: `[ {name: 'Charizard', CP: 900} ]`
 */

const pokemonsPower = [
  { name: "Pikachu", CP: 320 },
  { name: "Charizard", CP: 900 },
];
const filterPokemons = pokemonsPower.filter((pokemon) => {
  if (pokemon.CP > 500) {
    return pokemon;
  }
});
console.log(filterPokemons);

/*
3. Avengers Assemble (Reduce)
The Avengers need funding. Use the `reduce()` method to sum up the total budget required for each Avenger’s mission.
Example input: `[ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ]`
Expected output: `Total budget: 7000`

 */

const avengers = [
  { hero: "Iron Man", budget: 5000 },
  { hero: "Hulk", budget: 2000 },
];
const avengersBudget = avengers.reduce((acc, el) => acc + el.budget, 0);
console.log(avengersBudget);

/*
4. The Lost Treasure Map
A pirate captain needs help finding treasure! Convert an array of directions into a list of formatted instructions using `map()`.
Example input: `['left', 'right', 'forward']`
Expected output: `['Move left', 'Move right', 'Move forward']`
 */

const directions = ["left", "right", "forward"];
const instructions = directions.map((direction) => `Move ${direction}`);
console.log(instructions);

/*
5. The Jedi Archives
Create an array of Jedi names and search for 'Yoda' using the `find()` method. If found, return ‘Master found!’
Example input: `['Luke', 'Obi-Wan', 'Yoda', 'Anakin']`
Expected output: `'Master found!'`
 */

const JediNames = ["Luke", "Obi-Wan", "Yoda", "Anakin"];
const findMaster = JediNames.find((el) => el === "Yoda");
const result = findMaster === "Yoda" ? "Master found" : "error";
console.log(result);

/*
6. The One Ring Inventory
Frodo needs to keep track of his inventory. Implement an array where items can be added with `push()` and removed with `pop()`.
Example actions: `push('Lembas Bread')`, `push('Ring')`, `pop()`
Expected output: `['Lembas Bread']`
 */

const inventory = [];
inventory.push("Lembas Bread");
inventory.push("Ring");

inventory.pop();
console.log(inventory);

/*
7. Spider-Man’s Web of Crime
Given an array of crime locations, sort them alphabetically using `sort()`.
Example input: `['Times Square', 'Central Park', 'Brooklyn']`
Expected output: `['Brooklyn', 'Central Park', 'Times Square']`

 */

const crimeLocations = ["Times Square", "Central Park", "Brooklyn"];
const sortedLocations = crimeLocations.sort();
console.log(sortedLocations);

/*
8. The Time Stone (Array Slicing)
Doctor Strange wants to revisit only the last 3 events from an array of mystical occurrences. Use `slice()` to retrieve them.
Example input: `[ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ]`
Expected output: `['Ancient One’s Warning', 'Time Loop', 'Portal Opening']`
 */

const events = [
  "Dormammu Attack",
  "Multiverse Glitch",
  "Ancient One’s Warning",
  "Time Loop",
  "Portal Opening",
];
const lastThree = events.slice(-3);
console.log(lastThree);

/*
A hacker needs to process data from the Matrix. Given an array of numbers, transform each into binary format using `map()`, and then find the highest value using `reduce()`.
Example input: `[3, 7, 15, 22]`
Expected output (binary conversion): `['11', '111', '1111', '10110']`
Expected output (highest value): `22`

რა ხდება მამაო :( 
 */

let num = 10;

let binary = num.toString(2);

console.log(binary);
console.log(5 .toString(2));  
console.log(8 .toString(2));  
console.log(12 .toString(2));

/* ეს თუ ხშირად უნდა დამჭირდეს პირდაპირ მითხარით და ჩემით წავალ */

/*
10. Cyberpunk City Data Processing
A cyber-detective is analyzing risk levels in a futuristic city. Use multiple array methods to process the risk levels.
1. Use `map()` to convert each risk level to hexadecimal.
2. Use `filter()` to extract levels above 100.
3. Use `reduce()` to calculate the total risk level.
4. Use `find()` to locate the first risk level above 150.
5. Use `splice()` to remove corrupt data (risk levels below 80).
 */

const riskLevels = [45, 120, 88, 200, 65, 150, 99];
const hexLevels = riskLevels.map(level => level.toString(16));
const highRisks = riskLevels.filter(level => level > 100);
const totalRisk = riskLevels.reduce((sum, level) => sum + level, 0);
const firstAbove150 = riskLevels.find(level => level > 150);
const cleanedRisks = [...riskLevels]; 

for (let i = cleanedRisks.length - 1; i >= 0; i--) {
  if (cleanedRisks[i] < 80) {
    cleanedRisks.splice(i, 1);
  }
}
// ის არა ეს რაარის მამაო. მართლა ვერაფერი გავიგე მაგრამ 