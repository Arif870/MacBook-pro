// factorial number calculation  by increment

let fact = 1;
let number = 4;
for (i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(`The factorial of ${number} is ${fact}.`);

function fact(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

// factorial number calculation  by dicrement

let factorial = fact(5);

console.log(factorial);

function fact(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

console.log(fact(5));

for (i = 10; i >= 1; i--) {
  console.log(i);
}

// celciouis to farenhite

function celcious(cel) {
  return cel * (9 / 5) + 32;
}

let findCelcius = celcious(10);

console.log(findCelcius);

// farenheight to celcious

function farenheight(far) {
  return ((far - 32) * 5) / 9;
}

let showFrenheight = farenheight(10);
console.log(showFrenheight);

// grade calculation

function grade(number) {
  if (number < 0 && number > 100) {
    console.log("Please enter valid number ");
  } else if (number >= 0 && number <= 33) {
    console.log("You  failed !");
  } else if (number >= 34 && number <= 50) {
    console.log("Your grade is B");
  } else if (number >= 51 && number <= 60) {
    console.log("Your grade is A-");
  } else if (number >= 61 && number <= 80) {
    console.log("Your grade is A");
  } else if (number >= 81 && number <= 100) {
    console.log("Your grade is A+");
  } else {
    console.log("Please enter valid number");
  }
}
grade(90);

// simple interest calculation

function interest(p, r, t) {
  let interest = (p * r * t) / 100;

  totalTaka = interest + p;
  return totalTaka;
}

totalInterest = interest(500, 5, 3);

console.log(totalInterest);

// swapping

let num1 = 10;
let num2 = 20;

let swap;

console.log(num1, num2);

swap = num1;
num1 = num2;
num2 = swap;

console.log(num1, num2);

// destracture

[num1, num2] = [num2, num1];

console.log(num1, num2);

// largest number and lowest number

let largest = Math.max(20, 30, 10);

function largetNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

let myNumber = largetNumber(30, 300, 2010);
console.log("largest number is ", myNumber);

function lowest(x, y, z) {
  if (x < y && x < z) {
    return x;
  } else if (y < x && y < z) {
    return y;
  } else {
    return z;
  }
}

let myNUmber = lowest(5, 4, 2);
console.log("Lowest number is ", myNUmber);
