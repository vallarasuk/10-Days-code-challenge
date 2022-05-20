//LOOPS


// FOR LOOP
console.log("DAY 9 = " + "JAVA SCRIPT LOOPS");

for (let index = 10; index >= 1; index--) //Works inline variable
    if (index % 2 !== 0) {
        console.log("NUMBER = " + index);
    }

    // WHILE LOOP
let i = 0;
while (i <= 10) {
    if (i % 2 == 0) {
        console.log("EVEN NUMBERS WHILE LOOP  = #" + i);
    }
    i++;
    console.log(i);
}

// DO- WHILE LOOP
do {
    // code

    if (i % 2 !== 0) {
        console.log("ODD NUMBERS  DO-WHILE = #" + i);
    }
    i++;
} while (i <= 10);

//FOR IN LOOP
let person = {
    Name: "vallarasuk",
    Age: 20
};

for (let key in person) {
    console.log(key = ":", person[key]);
}

// FOR IN LOOP ARRAY

let colors = ["red", "pink", "orange"]

for (let index in colors) {
    console.log("values: " + colors[index]);
}

// FOR OF LOOP ARRAY

for (let color of colors) {
    console.log("COLORS: " + color);
}

// FUNCTION DIFFERENT METHODS   EXAMPLE 1
/*
let Name = "Vallarasu k";
let age = 20;
let gender = "male";
let MaterialStatus = false;
let contact = 8122992143;
let email = "vallarasuk143@gmail.com";
let address = {
    doorNo: "4 / 46",
    village: "SoulKottai(vill)",
    city: "kaveripattnam",
    district: "Krishnagiri"
};

function Details() {
    let Details = `My name is ${Name}, Age is ${age} , my contact number = ${contact} , my email address:${email}, and my Contact ADDRESS: ${address.doorNo }`

    console.log(Details);
}

Details();
*/


// FUNCTION DIFFERENT METHODS   EXAMPLE TWO

let person1 = {
    Name: "vallarasu k",
    age: 20,
    MaterialStatus: false,
    gender: "male",
    contact: 8122992143,
    email: ["vallarasuk143@gmail.com"],
    address: {
        doorNo: "4 / 46",
        village: "SoulKottai(vill)",
        city: "kaveripattnam",
        district: "Krishnagiri"
    },

    greeting: function() {
        let dena1 = `My name is ${this.Name}, Age is ${this.age} , my contact number = ${this.contact} , my email address:${this.email}, and my Contact ADDRESS: ${this.address.doorNo }`;

        console.log(dena1);
    }

};

person1.greeting();

// FACTORY FUNCTIONS

function newPerson(name) { //using hear CAMEL CASE: newPerson
    return {
        Name: name,
        age: 20,
        contact: 8122992143,
        email: ["vallarasuk143@gmail.com"],
        greet: function() {
            let det = ` FACTORY FUNCTION = My name is ${this.Name}, My Age is ${this.age} , My contact number = ${this.contact} , My email address:${this.email}`;
            console.log(det);
        }
    }
}

let anbu = newPerson("ANBU");
let hasani = newPerson("HASANI")
let pinky = newPerson("PINKY")
let monkey = newPerson("monkey")
anbu.greet();
hasani.greet();
pinky.greet();
monkey.greet();


// CONSTRUCTOR FUNCTIONS

function NewPerson(name) { //pascal ->NewPerson
    this.Name = name;
    this.age = 20;
    this.contact = 8122992143;
    this.email = "vallarasuk143@gmail.com";
    this.greet = function() {
        console.log(` CONSTRUCTOR FUNCTION = My name is ${this.Name}, My Age is ${this.age} , My contact number = ${this.contact} , My email address:${this.email}`);
    }
}

let king = new NewPerson("vicky");
king.greet();