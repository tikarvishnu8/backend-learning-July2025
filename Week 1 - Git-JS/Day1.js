console.log("My name is Mahesh and i am learning Javascript.");
console.log("Variables");

//Variables are container for data.

fullName = "Mahesh Vishnu Tikar";
age = 25;
price = 20000;
x = null;
y = undefined;

console.log(fullName, age, price, x, y);
console.log(typeof fullName);

let name = "Mahesh";  // let- Variable cannot be re-declared but can be updated. A block scope variable.
var age = 25.00;     // var- Variable can be re-declared and updated. A global scope variable.
const PI = 3.14;      // const- Variable cannot be re-declared or update. A block scope variable.

console.log(name, age, PI);


//       Primptive Data Types                 Non Primptive Data Types
//Data Types  NNBBSSU                     // Objects - Collection of key value pairs, Collection of different variables.
// NUmber                                 // Objects - sub catagory (Arrays, function)
// Null
// Boolean
// Bigint
// String
// Symbol
// Undefined



// Objects
let fullDetails = {
    name :"Mahesh",
    age : 24,
    cgpa : 7.0,
    degree : "MSC",
};
console.log(fullDetails);
fullDetails["age"] = fullDetails["age"] + 1;
console.log(fullDetails["age"])

const product = {
    title : "Ball Pen",
    rating : 4,
    price : 270,
    offerOfTheDay : 5,
};

console.log(product)
