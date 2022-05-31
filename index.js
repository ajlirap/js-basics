//Comment
console.log("Hello World");

//Best Practices you have to declare every variable in different line
let nameOne = "Arturo";
let lastNameOne = "Lira";
console.log(nameOne + " " + lastNameOne);

let firstName = "ArturoL";
console.log(firstName);

const interestRate = 0.3;
//interestRate =1; Bad Practices
console.log(interestRate);

/*******PRIMITIVE TYPES ******/
/**
 * String
 * Number
 * Boolean
 * Undefined
 * null
 */

let name = "Arturo"; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
//let firstNames = undefined; // It is not necessary to define undefined variable
let lastNames = null;
let selectedColor = null;
selectedColor = "red";

/******VALUE TYPES ******/
/**
 * Object
 * Array
 * Function
 */
/**OBJECT */
let person = { name: "Arturo", age: 38 }; //Object Literal

//Dot Notation
person.name = "Jose";
//Bracket Notation
let selection = "name";
//person['name'] = 'Juan';
person[selection] = "Josh";

console.log(person);

/**ARRAY */

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
selectedColors[3] = 3;
console.log(selectedColors);
console.log(selectedColors[0]);

console.log(selectedColors.length);
/**FUNCTION */

/**Performing a task */
function greet(name, lastName) {
  console.log("Hello World inside of function declaration");
  console.log("Hello " + name + " " + lastName);
}
greet("Arturo", "Lira");

/**Calculating a value */
function square(number) {
  return number * number;
}

let number = square(2);
console.log(square(2));

/**OPERATOR **/
/**
 * Arithmetic
 * Assignment
 * Comparison
 * Logical
 * Bitwise
 */
/**Arithmetic */

let x = 10;
let y = 3;

// console.log(x + y);  /**addition */
// console.log(x - y); /**Subtraction */
// console.log(x * y); /**Multiplication */
// console.log(x / y); /**Division */
// console.log(x % y); /**Remainder of Division */
// console.log(x ** y); /**Exponentiation */

//Increment (++)
console.log(++x);
console.log(x++);

//Decrement (--);
/*console.log(--x);
console.log(x--);*/

/**Assignment operator */

/**Exercises  */

/**FizzBuzz*/

//Divisible by 3 ==> Fizz
//Divisible by 5 ==> Buzz
//Divisible by both 3 and 5 ==>FizzBuzz
//Not divisible by 3 or 5 ==> input
//Not a number ==> 'Not a number'

const output = fizzBuzz("value");
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else return input;
}

// /***CHECK SPEED */

//Speed Limit = 70

checkSpeed(135);

function checkSpeed(speed) {
  const SpeedLimit = 70;
  const kmPerPoint = 5;
  if (speed < SpeedLimit + kmPerPoint) console.log("Ok");
  else {
    const Points = Math.floor((speed - SpeedLimit) / kmPerPoint);

    if (Points > 12) console.log("LICENSE SUSPENDED");
    else console.log("Points", Points);
  }
}

// document.getElementById("a").innerHTML();

let NameOne = "Arturo".toUpperCase();

console.log(NameOne);

let txt = "I can eat bananas all day";
let result = txt.slice(10, 17);
console.log(result);

const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
fruits.push("Kiwi");

const d = new Date();
d.setFullYear(2001);

console.log(d);

let max = Math.max(10, 20);

let round = Math.round(5.3);

// document.getElementById("image").src = "pic_mountain.jpg";

// document.getElementsByTagName("p")[0].innerHTML = "Hello from JS";

// document.getElementById("myText").value = "Have a nice day!";

// document.getElementById("demo").style.color = "red";

// document.getElementById("demo1").style.fontSize = "70px";

// document.getElementById("demo1").style.display = "none";

function normalize(param) {
  param.replace();
  return console.log(param.replace("/-/", "/"));
}
normalize("20-05-2017");

console.log(Math.ceil(856.12));

function dice() {
  return Math.ceil(Math.random() * 6);
}
console.log(dice());

function add(str) {
  str.substr;
  return parseInt(str, 10) + parseInt(str.substr(str.indexOf("+")), 10);
}
console.log(add("102+17"));

function getLastElement(vArray) {
  let len = vArray.length;
  return vArray[len];
}
console.log(getLastElement([1, 2]));

let abcd = ["a", "b", "c", "d"];
let ab = abcd.slice(0, 2);
let bc = abcd.slice(1, 3);
let bcd = abcd.slice(1, 4);
console.log(ab);
console.log(bc);
console.log(bcd);

function cutComment(value) {
  if (value.indexOf("//") != -1) {
    let comm = value.indexOf("//") + 2;
    return value.slice(comm, value.length);
  }
  return null;
}

console.log(cutComment("let foo; // bar"));

function gcd(a, b) {
  let numgcd = 0;
  let restA = 0;
  let restB = 0;
  do {
    numgcd++;
    restA = numgcd % a;
    restB = numgcd % b;
  } while (!(restA >= 0 && restB >= 0));
  return numgcd;
}
gcd(6, 15);

function maxi() {
  let array = [arguments.length];
  for (let i = 0; i < arguments.length; i++) {
    array[i] = arguments[i];
  }
  return Math.max(...array);
}
maxi(1, 2);
maxi(2, 3, 1);

function parseFirstInt(value) {
  let inputToParse = value;
  for (let i = 0; i < value.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
      return firstInt;
    }
    inputToParse = inputToParse.substr(1);
  }
  return NaN;
}

console.log(parseFirstInt("No. 10"));
console.log(parseFirstInt("Babylon"));

function sum(value) {
  let sumArray = 0;
  for (let i = 0; i < value.length; i++) {
    sumArray += value[i];
  }
  return sumArray;
}

function mean(value) {
  if (value.length == 0) {
    return 0;
  }
  return sum(value) / value.length;
}
mean([0]);

function arabic(value) {
  let valueGetArabic = value;
  let romanValue = 0;

  for (let i = 0; i < value.length; i++) {
    switch (valueGetArabic[i]) {
      case "I": {
        if (valueGetArabic[i + 1] == "V") {
          romanValue += 4;
          i++;
          continue;
        } else if (valueGetArabic[i + 1] == "X") {
          romanValue += 9;
          i++;
          continue;
        }
        romanValue += 1;
        break;
      }
      case "V":
        romanValue += 5;
        break;
      case "X": {
        if (valueGetArabic[i + 1] == "L") {
          romanValue += 40;
          i++;
          continue;
        } else if (valueGetArabic[i + 1] == "C") {
          romanValue += 90;
          i++;
          continue;
        }
        romanValue += 10;
        break;
      }
      case "L":
        romanValue += 50;
        break;
      case "C": {
        if (valueGetArabic[i + 1] == "D") {
          romanValue += 400;
          i++;
          continue;
        } else if (valueGetArabic[i + 1] == "M") {
          romanValue += 900;
          i++;
          continue;
        }
        romanValue += 100;
        break;
      }
      case "D":
        romanValue += 500;
        break;
      case "M":
        romanValue += 1000;
        break;
    }
  }
  return romanValue;
}
arabic("CDLXXXIII");
arabic("X");

const roman = (num, result = "") => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const key in map) {
    if (num >= map[key]) {
      if (num !== 0) {
        return roman(num - map[key], result + key);
      }
    }
  }
  return result;
};

roman(483);

function sumMultiples(value) {
  let sum = 0;
  for (let i = 1; i < value; i++) {
    if (i >= 3) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
  }
  return sum;
}
sumMultiples(3);

//Digit Sum

function digitSum(value) {
  let sum = 0;
  let len = value.toString().length;
  for (let i = 0; i < len; i++) {
    sum += parseInt(value[0]);
  }
  return sum;
}
digitSum(1);

//Swapping Variables

let a = "red";
let b = "blue";

let c = "";

c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//If Statement Conditions
/**** 
 * Hour
 * If hour is between 6 AM and 12 PM: Good morning!
 * If It is between 12PM and 6PM : Good afternoon!
 * Otherwise: Good evening!

*/

let hour = 19;

if (hour >= 6 && hour <= 12) console.log("Good morning");
else if (hour >= 12 && hour <= 18) console.log("Good afternoon");
else console.log("Good evening");

//Switch Statement

let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}

//If Statement
if (role === "guest") console.log("Guest");
else if (role === "moderator") console.log("moderator");
else console.log("Unknown");

// for Loop Statement
for (let i = 1; i <= 5; i++) {
  //console.log("Hello Word", i);
  //Odd Numbers
  if (i % 2 !== 0) console.log(i);
}
console.log("*****Odd Number reverse order*****");
//Odd Number reverse order
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}
console.log("*****While statement*****");
//While statement
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

console.log("*****Do-While statement*****");
// Do-while statement occur at least once.
let iw = 0;
do {
  if (iw % 2 !== 0) console.log(iw);
  iw++;
} while (iw <= 5);

console.log("*****for-in statement*****");
//for-in
const personNew = {
  name: "Arturo",
  age: 39,
};

for (let key in personNew) console.log(key, personNew[key]);

const colors = ["red", "green", "blue"];

for (let index in colors) console.log(colors[index]);

// for-of
console.log("*****for-in statement*****");
for (let color of colors) console.log(color);

//Break and continue
console.log("*****Break and continue statement*****");
console.log("*****Break statement*****");

let variable = 0;
while (variable <= 10) {
  if (variable === 5) break;
  console.log(variable);
  variable++;
}

console.log("*****Continue statement*****");

let variableDos = 0;
while (variableDos <= 10) {
  if (variableDos % 2 === 0) {
    // Get Even Numbers
    variableDos++;
    continue;
  }
  console.log(variableDos);
  variableDos++;
}

/**
 * Write a function that takes two numbers and returns
 * the maximum of the two.
 */
console.log("*****function MaxTwoNumbers statement*****");
function maxTwoNumbers(numberUno, numberTwo) {
  return numberUno > numberTwo ? numberUno : numberTwo;
}
console.log(maxTwoNumbers(25, 10));

/**
 * Landscape function
 */
console.log("*****function isLandscape*****");

function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(11, 8.5));

/**
 * FizzBuzz function
 * Divisible by 3 => 'Fizz'
 * Divisible by 5 => 'Buzz'
 * Divisible by 3 and 5 => 'FizzBuzz'
 * Not Divisible by 3 or 5 => input
 * Not a Number => 'Not a Number'
 *
 */
console.log("*****function FizzBuzz*****");

const outputTwo = fizzBuzzTwo(true);
console.log(outputTwo);

function fizzBuzzTwo(input) {
  if (typeof input === "number") {
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
  }
  return NaN;
}

/**
 * CheckSpeed function
 * Speed Limit = 70 <= 'Ok'
 * Every 5 km that you above of the limit
 * You will get 1 point
 * Math.floor(1.3) => 1
 * More than 12 point 'License suspended'
 *
 */
console.log("*****function CheckSpeed*****");
CheckSpeedTwo(130);

function CheckSpeedTwo(speed) {
  const SpeedLimit = 70;
  const kmPerPoint = 5;
  if (speed < SpeedLimit + kmPerPoint) {
    return console.log("OK");
  }
  const passLimit = speed - SpeedLimit;
  const calculationPoints = Math.floor(passLimit / kmPerPoint);

  if (calculationPoints >= 12) return console.log("License suspended");
  else return console.log(calculationPoints + " " + "Point");
}

/**
 * Show Number function
 */
console.log("*****function Show Number*****");
showNumber(10);

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
    // if (i % 2 === 0) {
    //   console.log(i, "EVEN");
    // } else console.log(i, "ODD");
  }
}

/**
 * countTruthy
 */
console.log("****** Count Truthy function*****");

console.log(countTruthy([0, 2, 3]));
function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count += 1;
  }
  return count;
}

/**Show Properties
 *
 */
console.log("*******Show Properties function******");
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
