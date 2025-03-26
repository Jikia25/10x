// Task 1

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  if (attack1 > attack2) {
    return `${pokemon1} is stronger!`;
  } else if (attack2 > attack1) {
    return `${pokemon2} is stronger!`;
  } else {
    return `both pokemon have equal attack power!`;
  }
}
console.log(compareAttack("Pikachu", 55, "Charizard", 84));

// Task 2

function castSpell(spell, wizard) {
  return `${wizard} casts ${spell}!`;
}

console.log(castSpell("Expelliarmus", "Hermione"));

// Task 3

function calculateBounty(currentBounty, increase) {
  return currentBounty, increase;
}

const newBounty = calculateBounty(1_500_000_000, 500_000_000);
console.log(newBounty);

// Task 4

function trainJedi(name, strength = 50) {
  return `${name} has ${strength} power`;
}
console.log(trainJedi("luke", 100));
console.log(trainJedi("rey"));

// Task 5

function gollumSays(phrase) {
  return `${phrase}... ${phrase}... ${phrase}`;
}
console.log(gollumSays("My precious"));

// Task 6

const powerUp = function (jumpHeight) {
  return jumpHeight * 2;
};
console.log(powerUp(5));

// Task 7

const shadowClone = (count) => count * 5;
console.log(`${shadowClone(10)} clones created!`);

// Task 8

function sortStudent(name, callback) {
  console.log(`Sorting ${name} into...`);
  const house = callback();
  console.log(house);
}
sortStudent("Harry", () => "Gryffindor");

// Task 9

function snapFingers() {
  let stones = 6;
  function checkStones() {
    console.log("Thanos has " + stones + " stones. The universe trembles!");
  }
  checkStones();
}
snapFingers();

// Task 10

turnBackTime();
function turnBackTime() {
  console.log("Going back in time!");
}

// Task 11 (my fav task)

function batman() {
  function secretIdentity() {
    return "I am Batman!";
  }
  return secretIdentity;
}
const revealBatman = batman();
console.log(revealBatman());
