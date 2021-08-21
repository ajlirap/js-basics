//Comment
console.log('Hello World');

//Best Practices you have to declare every variable in different line
let nameOne = 'Arturo';
let lastNameOne ='Lira';
console.log(nameOne +' ' +lastNameOne );

let firstName ='ArturoL';
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

let name = 'Arturo'; // String Literal 
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
//let firstNames = undefined; // It is not necessary to define undefined variable
let lastNames = null;
let selectedColor = null;
selectedColor = 'red';

/******VALUE TYPES ******/
/**
 * Object
 * Array
 * Function
 */
/**OBJECT */
let person = {name: 'Arturo', age: 38}; //Object Literal

//Dot Notation
person.name = 'Jose';
//Bracket Notation
let selection = 'name';
//person['name'] = 'Juan';
person[selection] ='Josh';

console.log(person);

/**ARRAY */

let selectedColors = ['red','blue'];
selectedColors[2]= 'green';
selectedColors[3] = 3;
console.log(selectedColors);
console.log(selectedColors[0]);

console.log(selectedColors.length);
/**FUNCTION */

/**Performing a task */
function greet(name,lastName) {
    console.log('Hello World inside of function declaration');
    console.log('Hello ' + name +' '+ lastName);
}
greet('Arturo', 'Lira');

/**Calculating a value */
function square(number)
{
    return number*number;
}

let number= square(2);
console.log(square(2));

/**OPERATOR **/
/**
 * Arithmetic
 * Assignment
 * Comparison
 * Logical
 * Bitwise
 */

/**Exercises  */


/**FizzBuzz*/

//Divisible by 3 ==> Fizz
//Divisible by 5 ==> Buzz
//Divisible by both 3 and 5 ==>FizzBuzz
//Not divisible by 3 or 5 ==> input
//Not a number ==> 'Not a number'

const output = fizzBuzz('valuea');
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (input % 3 === 0) {
        return 'Fizz';
    }
    else if (input % 5 === 0) {
        return 'Buzz';
    }
    else
        return input;
}

/***CHECKSPEED */

//Speed Limit = 70

checkSpeed(135);

function checkSpeed(speed) {
    const SpeedLimit = 70;
    const kmPerPoint = 5;
    if (speed < SpeedLimit + kmPerPoint)
        console.log('Ok');
    else {
        const Points = Math.floor((speed - SpeedLimit) / kmPerPoint);

        if (Points > 12)
            console.log('LICENSE SUSPENDED');
        else
            console.log('Points', Points);
    }

}