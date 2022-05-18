// alert("Welcome to my page ")

let num1 = 30;
let num2 = 50;
let num3 = 20;

const result = (num1 + num2 + num3);


let end = (result / 10);

console.log(end);


// JAVA SCRIPT OBJECTS

//             {}-----object
let name = "vallarasu k";

const age = 20;

let email = "vallarasuk143@gmail.com";

const gender = "male";

let sister = {
    brother: "abinash",
    sis: "Anish"
};

let address = "soulkottai (vill), Jagadab(post), Krishnagiri (dt & Tk)"

const person = { name, age, email, gender, address, sister }
console.log(person.sister.sis);
console.log(person.sister.brother);


// JAVA SCRIPT ARRAY

//             []---------------ARRAY

let favColors = [
    "red", "white", "black", "pink"
];


favColors[8] = "green"
console.log(favColors.length);
// To find LENGTH OF ARRAY use .length



// JAVA SCRIPT FUNCTIONS

function Person(name) {
    let msg = "Hello Dear " + name + " We are available 24/7 to solve yours issues"
    console.log(msg)
}

Person("vallarasu");

Person("Kanthasamy");

function add(num3, num4) {
    let result = num3 + num4;
    console.log(result * 20 - 300 - 100 / 20);
}

add(2, 3)


// JAVA SCRIPT ARITHMETICS OPERATORS

function operators(number1, number2) {
    let operators = number1 / number2
    console.log(operators);

}

operators(20, 10)

// Increments     [    ++  ]

let number1 = 20;
let number2 = 30;

let final = (number1 + number2)
console.log(final++);

console.log(--final);


// ASSIGNMENT OPERATORS

let x = 4;

let y = 6;

let z = x + y;

// ADD before the equal  symbol
z += 4
console.log(z);


//COMPARISON OPERATORS

let a = 10;
// relational operators 

console.log(a < 10); //LESS THAN

console.log(a <= 10); //LESS THAN OR EQUAL TOO

console.log(a > 10); //GREATER THAN

console.log(a >= 10); //GREATER THAN OR EQUAL TOO


// Equality operators

console.log(a === 10); // value A is equal to value 10   //10===10

console.log(a !== 10); //value A is NOT equal to 10      //10!==10


// Strict equality operators

//-------consol.log(1 === 1)   //condition = same data type + same value

// lose equality operators 

//------------consol.log("\                    1" == 1)   //conditions =  change date type automatically + same value

// Comparison od different data types

let d1 = 4;
let d2 = "5"; //string value is AUTOMATICALLY converts into numbers

let d = (d1 > d2);
console.log(d);


let c1 = true; //BOOLEAN is convert into 0 & 1  // true= 1 //false=0
let c2 = 0;

let c = c1 > c2;

console.log(c);


//TERNARY OPERATORS

let age1 = 18;

let type = age1 >= 18 ? "Adult tickets" : "Child tickets";

console.log(type);

let dob = "2001";

let type1 = dob <= "1999" ? "90s Kids" : "2K kids";

console.log(type1);

let bank = 8;

let bank_workingDays = bank <= 6 ? "WORKING DAYS" : "NOT WORKING DAYS"

console.log(bank_workingDays);

// logical operators
// Examples

// Logical AND (&&)
console.log(true && true); //-----------------Return TRUE if both are True

// Logical OR(||)
console.log(true || false); //--------------------Return TRUE if any one is true


// Not(!)
console.log(!true);


// LIVE EXAMPLE
// HighIncome, CI-BILL score-> Loan ELIGIBLE
//any one is low ->loan NOT ELIGIBLE


let HighIncome = true;
let ci_billScore = false;
// LOGICAL AND (&&)
let eligible = HighIncome && ci_billScore;
// LOGICAL AND (||)
let eligible1 = HighIncome || ci_billScore;
console.log("LOAN STATUS = " + eligible);
console.log(eligible1);

let application = !eligible1;

console.log("APPLICATION STATUS = " + application);