/*
// Dynamic Object

const person = {
    name: "VALLARASU K"
}

// in Const person value is not change but inner elements we can change or add new one!

person.age = 20;
person.greet = function f1(name, age) {}

delete(person.age); //--------DELETE key and values in dynamic object 
delete person.greet;


console.log(person);


*/

//FACTORY FUNCTIONS

function creatPerson(name) {
    return {
        name: name,
        greeting() {
            console.log(`My name is ${this.name}`)
        }
    };
};

const person1 = creatPerson("vallarasu k");


// CONSTRUCTOR PROPERTY

function Person(name) {
    this.name = name;
    this.greeting = function() {
        console.log(`My name is ${this.name}`);
    }

}

const person2 = new Person("VALLARASU K")

console.log(person2.constructor);


// CODE FORMATE IN JAVASCRIPT COMPILER

// ALSO called as LITERALS


/*

let name = "vallarasu k"; //let name = new String ("vallarasu k");

let age = 20; //let age = new Numbers(20);

let isAlive = true; // let is Alive = new Boolean ();

console.log(name, age, isAlive);

*/

// DEFAULT FORMATE

let name = new String("vallarasu k");

let age = new Number(20);

let isAlive = new Boolean(true);

console.log(name, age, isAlive);


// ANOTHER FORMATE

let name1 = String("vallarasu k");

let age1 = Number(20);

let isAlive1 = Boolean(true);

console.log(name1, age1, isAlive1);


/* CURRENT USING METHOD
               &
ADVANCE METHODS
*/
let name2 = "vallarasu k";

let age2 = 20;

let isAlive2 = true;

console.log(name2, age2, isAlive2);

// JAVASCRIPT's  FUNCTION are OBJECT

function demo(name) {
    this.name = name;
    this.age = 20;
    this.greeting = function() {
        console.log(`My name is ${name}, & My age is ${age}`);
    }
}

const Demo = new Person("vallarasu k")

console.log(new Person);



// PRIMITIVE VALUES & REFERENCE TYPES

// Primitive
let x = 10;
let y = x;

x = 20;
console.log(y);


// reference

let a = {
    key: 10
};

let b = x;

x.key = 20;


console.log(b);



//primitive type example

let cart = 5; //using primitive data type


function updateCart(cart) {
    cart++;
}

updateCart(cart);

console.log(cart);


//reference type example

let cartObj = { value: 5 }; //using reference data type


function updateCart(cart) {
    cart.value++;
}

updateCart(cartObj);

console.log(cartObj);


// ENUMERATING PROPERTIES OF AN OBJECTS

const user = {
    name: "VALLARASU K",
    getName() {
        console.log(`My Name is ${this.name}`);
    }
}


// For IN-LOOP

for (let key in user)
    console.log(key, user[key]);

// For OF-LOOP

for (let key of Object.keys(user)) //keys method
    console.log(key);

/* 
let  object = {};
 new Object();
 */

for (let key of Object.entries(user)) //entries method
    console.log(key);


if ("age " in user) {
    console.log("YES...!");
} else {
    console.log("NOT AVAILABLE.......?");
}


// JAVA SCRIPT CLONING


const user1 = {
    name: "VALLARASU K",
    getName() {
        console.log(`My Name is ${this.name}`);
    }
}

let another = {};

// FOR  LOOP

/*

One Method of CLONING

for (let key in user1) {
    another[key] = user[key];
}

*/

// Another METHOD CLONING

let another1 = Object.assign({ age: 20 }, { gender: "male" }, user);
console.log(another1);

// ADVANCE AND LATEST CLONING METHOD in modern javascript

// Spread Operators
// Use commonly 
// ------------------------------>let another = {...user }<-------------------------------




// JAVA SCRIPT MATH OBJECT

// DEFAULT VALUES
console.log("value = " + Math.SQRT2);
console.log("value = " + Math.E);
console.log("value = " + Math.PI);
console.log("value = " + Math.LN10);
console.log("value = " + Math.LN2);
console.log("value = " + Math.SQRT1_2);


// JAVA SCRIPT STRING OBJECT

// Primitive string values

// we can achieve three ways string
let firstName = "Vallarasu";
let middleName = 'kanthasamy';
let lastName = `Hasani`;

const firstName2 = new String("vallarasu");
console.log(firstName);

// To check type 

/*
typeof(firstName);
typeof(firstName2);
*/


// TEMPLATE LITERALS

const msg = `Hello Hasani ,
email @ = "vallarasuk143@gmail.com"
Thanks for visiting my page...!


Thanks,
love & support....!`

console.log(msg);




// DATE OBJECT

const date = Date();

const now = new Date();
console.log(now.getFullYear());



// ADDING ELEMENT TO AN JAVA SCRIPT ARRAY

let fruits = ["Mango", "apple", "orange"]
fruits[3] = ("lemon");


//push method
// fruits.push("orange", "monkey", "pink", "graps,")

//unshift
// fruits.unshift("orange", "monkey", "pink", "graps,")


//shift
fruits.shift("orange", "monkey", "pink", "graps,")

//splice
fruits.splice(0, 2)

console.log(fruits);