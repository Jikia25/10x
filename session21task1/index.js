//Task1

let gandalfPower = 80;
let umbledorePower = 180;

gandalfPower += 50;
umbledorePower -= 50;

console.log(gandalfPower, umbledorePower);

if (gandalfPower > umbledorePower) {
  console.log("Gandal Power." + gandalfPower);
} else if (gandalfPower < umbledorePower) {
  console.log("umbledore Power." + umbledorePower);
} else {
  console.log(" They are equally powerful!" + umbledorePower, umbledorePower);
}

// Task 2

let goldCoin = 80;
let treasureMap = "old map";
let cursedAmulet = true;

console.log(typeof goldCoin === "number?");
console.log(typeof treasureMap === "string?");
console.log(typeof cursedAmulet === "boolean");

if (goldCoin > 50) {
  console.log("this is great treasure!");
} else {
  console.log("This is too little for a pirate!");
}

if (cursedAmulet) {
  console.log("The amulet is cursed! Be careful.");
} else {
  console.log("The amulet is safe.");
}

let oldMap = treasureMap;
treasureMap = "New map";

console.log(
  oldMap !== treasureMap
    ? "The map has been updated!"
    : "The map remains the same."
);

//Task 3

let healthPotionPrice = 15;
let manaPotionPrice = 12;
let totalCost = healthPotionPrice * 3 + manaPotionPrice * 2;
if (totalCost > 50) {
  totalCost *= 0.9;
  console.log("Discount Applied!");
}
console.log("Total Cost:", totalCost, "Gold Coins");

//Task 4

let swordPower = 50;
let armor = "Dragon Scale Armor";
let hasShield = true;
console.log(
  `Sir Debugalot is reddy for battle! ${swordPower}, He call ${armor}, he has a shield ${hasShield}.`
);

//Task 5

let breadPrice = 5;
let cackePrice = 10;
let breadSold = 50;
let cackeSold = 25;
let totalEarnings = breadPrice * breadSold + cackePrice * cackeSold;
console.log(`The Bakery's Daily Earnings ${totalEarnings} Gold Coins Today`);

// Task 6

let fuelCapacity = 1000;
let currentFuel = 850;
let requiredFuel = fuelCapacity * 0.8;
if (currentFuel >= requiredFuel) {
  console.log("Ready for launch! Fuel levels are sufficient.");
} else {
  console.log("Not enough fuel! Please refuel before launch.");
}

// Task 7 მელუღება თვალები

let currentYear = 2025;
let yearsJump = 30;
let newYear = currentYear + yearsJump;
console.log(
  "You traveled " +
    yearsJump +
    " years and arrived in the year " +
    newYear +
    "."
);

// Task 8 რომელი საათია :(

let fireSpell = 50;
let iceSpell = 60;
let lightningSpell = 60;

if (fireSpell > iceSpell && fireSpell > lightningSpell) {
  console.log(" Fire Spell is the strongest!");
} else if (iceSpell > fireSpell && iceSpell > lightningSpell) {
  console.log(" Ice Spell is the strongest!");
} else if (lightningSpell > fireSpell && lightningSpell > iceSpell) {
  console.log(" Lightning Spell is the strongest!");
} else {
  console.log("Some spells have equal power!");
}

// Task 9

let kuxna = true;
let zala = false;

if (kuxna && zala) {
  console.log("Danger! The house is NOT safe. Ghosts detected!");
} else {
  console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
}

// Task 10

let batarryTotalyPower = 1000;
let batarryPowerNow = 450;
let requiredPower = batarryTotalyPower * 0.3;

if (batarryPowerNow > requiredPower) {
  console.log("Battery sufficient");
} else {
  console.log("Low battery");
}

//Task 11

let dragonHealth = 100;
let knightAttackDamage = 25;
let dragonHealthafter = (dragonHealth -= knightAttackDamage);
console.log(`Dragon's Health After Attack: ${dragonHealthafter}`);

// Task 12

let speedLimit = 50;
let carSpeed = 30;
let currentSpeed = (carSpeed += 25);
console.log(`Current Speed: ${currentSpeed}`);

if (currentSpeed >= speedLimit) {
  console.log("Speed Warning: You are going too fast!");
} else {
  console.log("Speed is okay.");
}

// Task 13

let heroStrength = 95;
let villainStrength = 90;

if (heroStrength > villainStrength + 10) {
  console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
} else if (villainStrength > heroStrength + 10) {
  console.log("Malakor's power is overwhelming! Valiant is soundly defeated!");
} else if (heroStrength === villainStrength) {
  console.log(
    "It's a strength stalemate! Neither Valiant nor Malakor can overpower the other."
  );
} else if (heroStrength > villainStrength) {
  console.log(
    "Valiant barely edges out! A close call victory against Malakor!"
  );
} else {
  console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
}

// Task 14

let hasTreasureMap = true;
let foundAncientKey = false;
let solvedRiddleScroll = true;
let hasCompass = true;
let isFullMoon = false;
let canFindTreasure =
  hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));
if (canFindTreasure) {
  console.log("Success! Alex can find the legendary treasure!");
} else {
  console.log(
    "Alas, Alex is missing crucial clues and cannot find the treasure yet."
  );
}

// Task 15

const conePrice = 4;
const sundaePrice = 8;

let conesSoldToday = 250;
let sundaesSoldToday = 120;

let totalEarning = conePrice * conesSoldToday + sundaePrice * sundaesSoldToday;
let discount = totalEarning >= 1000 ? totalEarning * 0.05 : 0;
let finalEarnings = totalEarning - discount;

console.log(`Total earnings before discount: $${totalEarning}`);
console.log(`Discount applied: $${discount}`);
console.log(`Final total daily earnings: $${finalEarnings}`);
console.log(`Volume Discount Applied: ${discount > 0 ? "Yes" : "No"}`);

//Task 16

const ticketPrice = 20;
const ticketsSold = 500;
const concertCosts = 8000;

const totalEarn = ticketPrice * ticketsSold;
const profit = totalEarn - concertCosts;

if (profit > 0) {
  console.log(`Concert Profit: $${profit}. Great success!`);
} else {
  console.log(
    `Concert did not cover costs. Earnings: $${totalEarn}, Costs: $${concertCosts}.`
  );
}
