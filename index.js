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

/**Sum function
 *
 */
console.log("*******Sum function******");

console.log(sumTwo(10));

function sumTwo(value) {
  let sum = 0;
  for (let i = 0; i <= value; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

/**Grades function
 * First Calculate the Average Grade
 * 1-59: F
 * 60-69: D
 * 70-79: C
 * 80-89: B
 * 90-100 : A
 */
console.log("*******Grade function******");

const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value in array) sum += marks[value];
  return sum / marks.length;
}

/**
 * function stars
 */

console.log("*****Show Stars******");
showStars(2);

function showStars(value) {
  let start = "";
  for (let i = 1; i <= value; i++) console.log((start += "*"));
}

/**
 * function Show Primes
 */

console.log("*****Show Primes******");
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

console.log("***** Arrays ********");
const numbers = [3, 4];

//End
numbers.push(5, 6);
console.log(numbers);
//Beginning
numbers.unshift(1, 2);
console.log(numbers);
//Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

console.log("******Find Primitive types***");
/**Find Primitive types */

const numbersTwo = [1, 2, 3, 4];

console.log("Not Found Value indexOf(0) Strict Equality");
console.log(numbersTwo.indexOf(0));

console.log("Found Value indexOf(3) Strict Equality");
console.log("Index=>", numbersTwo.indexOf(3));

console.log("Found Value lastIndexOf(4) Strict Equality");
console.log("Index=>", numbersTwo.lastIndexOf(4));

console.log("Get true or false If Found Value indexOf(3) Strict Equality");
console.log("IsTheValue=>", numbersTwo.indexOf(3) !== -1);

console.log("Get true or false If Found Value includes(1) Strict Equality");
console.log("IsTheValue=>", numbersTwo.includes(1));

console.log("Second Parameter Found Value indexOf(1, 2) Strict Equality");
console.log("SecondeParameter=>", numbersTwo.indexOf(1, 2));

console.log("Second Parameter Found Value includes(1, 2) Strict Equality");
console.log("IsTheValue=>", numbersTwo.includes(1, 2));

console.log("Finding Reference Types");
const courses = [
  { id: 1, name: "Arturo" },
  { id: 2, name: "Jose" },
  { id: 3, name: "Josh" },
];
console.log('courses.find() Found Element course.name === "Arturo"');
console.log(
  courses.find(function (course) {
    return course.name === "Arturo";
  })
);
console.log('courses.find() Not Found Element course.name === "A"');
console.log(
  courses.find(function (course) {
    return course.name === "A";
  })
);

console.log('courses.findIndex() Found Element course.name === "Arturo"');
console.log(
  "Index=>",
  courses.findIndex(function (course) {
    return course.name === "Arturo";
  })
);

console.log('courses.findIndex() Not Found Element course.name === "A"');
console.log(
  "Index=>",
  courses.findIndex(function (course) {
    return course.name === "A";
  })
);

console.log("***********Arrow functions***********");
console.log('courses.find() Found Element course.name === "Arturo"');
console.log(
  "object=>",
  courses.find((course) => course.name === "Arturo")
);

console.log('courses.findIndex() Found Element course.name === "Arturo"');
console.log(
  "Index=>",
  courses.findIndex((course) => course.name === "Arturo")
);

console.log("***********Remove Element in ARRAYS****************");
//End
console.log("Remove from End Element of Array");
const last = numbersTwo.pop();
console.log("Element removed from the Array => ", last);
console.log(numbersTwo);
// Beginning
console.log("Remove from Beginning Element of Array");
const first = numbersTwo.shift();
console.log("Element removed from the Array => ", first);
console.log(numbersTwo);

//Middle
const numbersThree = [1, 2, 3, 4];

console.log("Remove from Middle Element of Array");
const middle = numbersThree.splice(2, 1);
console.log("Element removed from the Array => ", middle);
console.log(numbersThree);

console.log("***********Emptying ARRAYS****************");

let emptedArray = [1, 2, 3, 4, 5];

//Reference
let another = emptedArray;
console.log("********Solution 1********");
emptedArray = [];
console.log(
  "This does not work with multiple reference to emptedArray".toUpperCase()
);
console.log("New Empted Array =>", emptedArray);
console.log("Reference Another Array =>", another);

console.log("********Solution 2********");

let solutionTwo = [1, 2, 3, 4, 5];
console.log("Solution 2 Initial Array 'solutionTwo'", solutionTwo);
console.log("Solution 2 solutionTwo.length = 0");
solutionTwo.length = 0;
console.log("Solution 2", solutionTwo);

console.log("********Solution 3********");
let solutionThree = [1, 2, 3, 4, 5];
console.log("Solution 3 Initial Array 'solutionThree'", solutionThree);

solutionThree.splice(0, solutionThree.length);
console.log("Solution 3 Empty 'solutionThree' solutionThree.splice = 0");
console.log("Solution 3 solutionTwo.splice = 0");
console.log("Solution 3", solutionThree);

console.log("********Solution 4********");
let solutionFour = [1, 2, 3, 4, 5];
console.log("Solution 4 Initial Array 'solutionFour'", solutionFour);

while (solutionFour.length > 0) solutionFour.pop();

console.log("Solution 4 Empty 'solutionFour' solutionFour.pop() in Loop");
console.log("Solution 4 solutionFour.pop()");
console.log("Solution 4", solutionFour);

console.log("********Combine********");

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const resultArray = firstArray.concat(secondArray);
console.log("Function", "firstArray.concat(secondArray)");
console.log(resultArray);

const slice = resultArray.slice(2, 4);
console.log("Function", "resultArray.slice(2,4)");
console.log(slice);

console.log("*********Spread Operator*********");
const combine = [...firstArray, "a", ...secondArray, "b"];
console.log("[...firstArray, ...secondArray]");

console.log(combine);

console.log("********Copy with Slice()*****");
console.log(combine.slice());

console.log("********Copy with Spread Operaor ...*****");
console.log([...combine]);

console.log("********Iterating an Array*****");
const num = [1, 2, 3];
console.log("for (let number of num)");
for (let number of num) console.log(number);

console.log("foreach num.forEach(callback)");

num.forEach(function (number) {
  console.log(number);
});

console.log(" num.forEach Arrow callback function");
num.forEach((number) => console.log(number));

console.log(" num.forEach Arrow callback function with two parameters");
num.forEach((number, index) =>
  console.log("index=>", index, "value=>", number)
);

console.log("********Joining an Array*****");

const numbersJoin = [1, 2, 3, 4];

const join = numbersJoin.join(",");
console.log(" numbersJoin.join(',') function");
console.log(join);

console.log("function string split  message.split('') convert in array");
const message = "This is my first message";

const split = message.split(" ");

console.log(split);

console.log("Combine function to join split.join('-') ");
console.log(split.join("-"));

console.log("********function sort() in array primitive values********");

const numbersSort = [1, 3, 2, 4];
console.log("numbersSort Inital values", numbersSort);
console.log("numbersSort.sort()");
console.log(numbersSort.sort());

console.log("********function sort() in array references values********");

const coursesSort = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

console.log(coursesSort);

coursesSort.sort(function (a, b) {
  // a<b => -1
  // a>b => 1
  // a===b =>0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(coursesSort);

const numbersEvery = [1, 3, 2, 4];
console.log("********function every Array********");

console.log(
  numbersEvery.every(function (value) {
    return value >= 0;
  })
);

const numbersSome = [-1, 3, 2, 4];
console.log("********function every Array********");

console.log(
  numbersSome.some(function (value) {
    return value >= 0;
  })
);

const numbersFilter = [-1, 3, 2, 4];
console.log("********function filter Array********");

const filtered = numbersFilter.filter(function (number) {
  return number >= 0;
});

console.log(filtered);

console.log("********function filter Array********");

const filteredArrow = numbersFilter.filter((number) => number >= 0);
console.log(filteredArrow);

console.log("********function map Array********");

const mapfilter = [1, 2, 3];

const filtering = mapfilter.map((number) => "<li>" + number + "</li>");

console.log(filtering);

const html = "<ul>" + filtering.join(" ") + "</ul>";

console.log(html);

const item = filtered.map((n) => ({ value: n }));
console.log(item);

console.log("chain the methods");
const chain = numbersFilter
  .filter((number) => number >= 0)
  .map((n) => ({ value: n }));
console.log(chain);

console.log("********function Reduce Array********");
console.log("Normal sum using for (let)");
const reduceNumbers = [1, -1, 2, 3];

let sumReduce = 0;
for (let n of reduceNumbers) sumReduce += n;
console.log(sumReduce);

//a =0, c=1 =>a = 1
//a=1, c=-1 =>a = 0
//a=0, c=2 => a=2
//a=2 c= 3 => a= 5

console.log("using reduce function");
const reduce = reduceNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(reduce);

console.log("*********FUNCTIONS*********");

console.log("Declaration of functions");
console.log("Function Declaration");
//Function Declaration
function walk() {
  console.log("walk");
}

//Anonymous Function Expression
console.log("Anonymous Function Expression");
let run = function () {
  console.log("run");
};

//Named Function Expression

console.log("Named Function");
let rundos = function fun() {
  console.log("rundos");
};
let move = run;
run();
move();

console.log("*******HOSTING*******");
/**
 * We can call a function before its declaration from Function Declaration
 * The engine put and move all the declaration of definition function on the top
 */
console.log("What is Hosting?");
console.log(`Hoisting is the process of moving function declaration to the top of the file.
And this is done automatically by the JavaScript Engine that is executing this code. So that
is the reason that we can call functions that are defined using the function declaration syntax`);

console.log("*******Arguments of functions*******");

//Normal parameters
console.log("*******Normal Arguments of functions*******");

function summ(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(summ(1, 2));
console.log(summ(1, 2, 3, 4, 5));

console.log("*******Using Arguments of functions*******");
//Argument parameters

function summArg() {
  let total = 0;
  for (let argument of arguments) total += argument;
  return total;
}
console.log(summArg(1, 2));
console.log(summArg(1, 2, 3, 4, 5, 10));

console.log("*******Using Rest Operator functions*******");
//Argument parameters

function summArgDos(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(summArgDos(1, 2, 3));

console.log("*******Using Rest Operator functions Next Level*******");
//Argument parameters

function summArgNextLevel(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(summArgNextLevel(0.1, 20, 30, 10));

console.log("*******Using Default Paramenters in a function*******");
console.log("Without  Default values options");
function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000));

console.log("With Default values in Truthy options");
function interestTruthy(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(interestTruthy(10000));

console.log("With Default values in EC6 new options");
function interestNewWayEC6(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(interestNewWayEC6(10000));

console.log("******GETTERS AND SETTERS OBJECTS******");

console.log("Normal call");
const personGetSetNormal = {
  firstName: "Arturo",
  lastName: "Lira",
  fullName() {
    return `${firstName} ${this.lastName}`;
  },
};

console.log(personGetSetNormal.fullName());

console.log("Getters and Setters Application");

const personGetSet = {
  firstName: "Arturo",
  lastName: "Lira",
  get fullName() {
    return `${personGetSet.firstName} ${personGetSet.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

personGetSet.fullName = "Jose Perez";
console.log(personGetSet);

console.log("Try Catch ");

const personTryCatch = {
  firstName: "Arturo",
  lastName: "Lira",
  get fullName() {
    return `${personTryCatch.firstName} ${personTryCatch.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  personTryCatch.fullName = "";
} catch (e) {
  console.log(e);
}
console.log(personTryCatch);

/**Exercise
 * Create an array for a range min and max
 */
console.log(arrayFromRange(-10, 2));

function arrayFromRange(min, max) {
  const newArray = [];

  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }

  return newArray;
}

/**Exercise
 * Create a include function
 */

const elArray = [1, 2, 3, 6, 7];
console.log(includeswithError(elArray, 7));

function includeswithError(array, searchElement) {
  for (let el of array) {
    if (el === searchElement) {
      return true;
    }
    return false;
  }
}
console.log(includes(elArray, 8));
function includes(array, searchElement) {
  return array.indexOf(searchElement) !== -1;
}

const excerptArray = [1, 2, 3, 1];

console.log(excerpt(excerptArray, [1, 2]));
function excerpt(originArray, excludeArray) {
  const output = [];

  for (let element of originArray)
    if (!excludeArray.includes(element)) output.push(element);
  return output;
}

const moveArray = [1, 2, 3, 4];

const outputMove = moveFunction(moveArray, 0, -1);
console.log(outputMove);

function moveFunction(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error("Invalid Offset.");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

const reduceExercise = [2, 3, 6, 4];
console.log(countOcurrences(reduceExercise, 1));
function countOcurrences(array, element) {
  return array.reduce((accumulator, current) => {
    const occurance = current === element ? 1 : 0;
    return accumulator + occurance;
  }, 0);
}

const getMaxArray = [1, 2, 3, 4, 5, 7];
console.log(getMax(getMaxArray));

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}
