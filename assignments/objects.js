// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
// const example = {
//   "id": 0,
//   "name": "Example",
//   "email": "examples@you.edu",
//   "gender": "F"
// }

// Write your intern objects here:

const mitzi_F = {
  "id": 010,
  "name": "Mitzi Franz",
  "email": "mmelloy0@psu.edu",
  "gender": "F"
}
const kennan_M = {
  "id": 010,
  "name": "Kennan Malcolm",
  "email": "kdiben1@tinypic.com",
  "gender": "M"
}
const keven_M = {
  "id": 011,
  "name": "Keven Marsh",
  "email": "kmummery2@wikimedia.org",
  "gender": "M"
}
const gennie_M = {
  "id": 012,
  "name": "Gennie Alba",
  "email": "gmartinson3@illinois.edu",
  "gender": "F"
}
const antonie_E = {
  "id": 013,
  "name": "Anntonette Ezra",
  "email": "adaine5@samsung.com",
  "gender": "F"
}


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi_F.name)//?
// Kennan's ID
kennan_M.id//?
// Keven's email
kennan_M.email//?
// Gannie's name
gennie_M.name//?
// Antonietta's Gender
antonie_E.gender//?


// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
kennan_M.greeting = function(greet) {
  console.log(`Hello ${greet}, my name is ${kennan_M.name}`)
}
// kennan_M.greeting('ariel') Why am I getting undefined? 


// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
antonie_E.multiplies = function(num1, num2) {
  return num1 * num2;
}

// antonie_E.multiplies(5,2)//?

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
