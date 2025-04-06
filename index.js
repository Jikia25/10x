// Task 1 / 2

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

let markHasHigherBmi = markBmi > johnBmi;

let message1 =
  markBmi > johnBmi
    ? "Mark's BMI is higher than John's!"
    : "John's BMI is higher than Mark's!";

console.log("Mark's BMI: " + markBmi.toFixed(2));
console.log("John's BMI: " + johnBmi.toFixed(2));
console.log("Does Mark have a higher BMI? " + markHasHigherBmi);

// Task 3 ( რაამბავია :( )

let dolphinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

let dolphinsAvarage = Math.floor(
  (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2]) / 3
);
console.log(`Dolphins' average score: ${dolphinsAvarage}`);

let koalasAvarage = Math.floor(
  (koalasScore[0] + koalasScore[1] + koalasScore[2]) / 3
);
console.log(`Koalas' average score: ${koalasAvarage}`);

if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
  console.log("Dolphins win the trophy!");
} else if (koalasAvarage > dolphinsAvarage && koalasAvarage >= 100) {
  console.log("Koalas win the trophy!");
} else if (dolphinsAvarage === koalasAvarage && dolphinsAvarage >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy, as both teams scored below 100.");
}

// Task 4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);

// Task 5

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;

    case "%":
      if (b === 0) {
        return "Cannot modulo by zero";
      }
      return a % b;

    case "**":
      return a ** b;

    default:
      return "Invalid operator";
  }
}

// Task 6
function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a triangle";
  }

  if (a === b && b === c) {
    return "Equilateral";
  }

  if (a === b || a === c || b === c) {
    return "Isosceles";
  }

  return "Scalene";
}
console.log(triangleType(5, 5, 5));
console.log(triangleType(5, 5, 8));
console.log(triangleType(4, 5, 6));
console.log(triangleType(1, 2, 3));

// Task 7
function processTransaction(balance, amount, transactionType) {
  if (transactionType === "withdraw") {
    if (amount <= balance) {
      return balance - amount;
    } else {
      return "Insufficient funds";
    }
  } else if (transactionType === "deposit") {
    return balance + amount;
  } else {
    return "Invalid transaction type";
  }
}
console.log(processTransaction(500, 200, "withdraw"));
console.log(processTransaction(500, 600, "withdraw"));
console.log(processTransaction(500, 100, "deposit"));
console.log(processTransaction(500, 50, "transfer"));

// Task 8

function getRoomPrice(type, isWeekend, hasDiscount) {
  let price;
  if (type === "Standard") {
    price = isWeekend ? 120 : 100;
  } else if (type === "Deluxe") {
    price = isWeekend ? 180 : 150;
  } else if (type === "Suite") {
    price = isWeekend ? 250 : 200;
  } else {
    return "Invalid room type";
  }

  if (hasDiscount) {
    price *= 0.9;
  }

  return price;
}
console.log(getRoomPrice("Standard", false, false));
console.log(getRoomPrice("Deluxe", true, false));
console.log(getRoomPrice("Suite", true, true));
