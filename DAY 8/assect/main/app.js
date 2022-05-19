//CONDITIONS STATEMENTS

let rainy = false;

let cloud = true;

//------  LOGICAL OR check any one is true 
if (rainy || cloud) {
    console.log("STATUS =" + "DON'T FORGET TO TAKE UMBRELLA")
} else(
    console.log("STATUS = " + "DAY IS VERY CLEAR...SO...!.....LET'S ENJOY THE DAY")
);

//------  LOGICAL AND check any one is true 
if (rainy && cloud) {
    console.log("STATUS =" + "DON'T FORGET TO TAKE UMBRELLA")
} else(
    console.log("STATUS = " + "DAY IS VERY CLEAR...SO...!.....LET'S ENJOY THE DAY")
);


// IF & ELSE CONDITIONS

//if hour between 12 AM(0) to 1(13) PM-- -- - > GOOD MORNING
// Else if hour  between 1(13) PM to 5(17) PM-- -- -- -- -- - > GOOD AFTERNOON
// Else is between 5(17) PM to 12(0) AM-- -- -- -- -- > GOOD EVENING
let hour = new Date().getHours();
console.log(hour);
if (hour >= 0 && hour <= 12) {
    console.log("STATUS = " + "good morning")
} else if (hour >= 13 && hour <= 17) { console.log("STATUS = " + "good Afternoon"); } else { console.log("STATUS = " + "good evening"); }



let min = new Date().getMinutes();
console.log(min);

if (min >= 0 && min <= 20) {
    console.log("STATUS = " + "First 20 MINUTES")
} else if (min >= 20 && min <= 40)
    console.log("STATUS = " + "Second 20 MINUTES");
else
    console.log("STATUS = " + "Last 20 MINUTES");


// SWITCH CASE

// DEFAULT CODE



/*
switch (key) //KEY VALUE or CONDITION VALUE
{
    case 1:
        console.log("1");

        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
    default:
        console.log("DEFAULT BEHAVIOR");
}

*/

//Grade feed back system


let Grade = "a";

switch (Grade) {
    case "s":
        console.log("STATUS =" + "SUPER grade");
        break;

    case "a":
        console.log("STATUS =" + "EXCELLENT grade");
        break;

    case "e":
        console.log("STATUS =" + "JUST PASS");
        break;

    case "u":
        console.log("STATUS =" + "UNSATISFIED");
        break;

    default:
        console.log("STATUS =" + "GOOD");
        break;
}


// mark PASS FAIL system

let mark = 96;

switch (true) {
    case mark >= 95:
        console.log("EXCELLENT");
        break;

    case mark >= 80:
        console.log("GOOD");
        break;

    case mark >= 70:
        console.log("PERSON GETS AVERAGE");
        break;

    case mark >= 40:
        console.log("PERSON PASS");
        break;

    case mark >= 35:
        console.log("PERSON JUST PASS");
        break;



    default:
        console.log("FAIL");
        break;
}


// mobile buy example


let savingAmount = 70000;



switch (true) {

    case (savingAmount >= 60000):

        console.log("but iphone mobile");

        break;

    case (savingAmount >= 10000):

        console.log("buy android");

        break;

    case (savingAmount >= 5000 && savingAmount <= 10000):

        console.log("buy basic phone");

        break;

    default:
        console.log("no phone in this age")

}

// for (let index = 10; index >= 1; index++) {
//     console.log(index);

// }