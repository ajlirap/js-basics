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