// understanding simple primitives and complex primitives in JS
//if concept
let firstName = "Evelyn";
let age = 20;
let isMarried;
console.log("this person name is" + firstName + "and their age is" + age);
if (isMarried == true) {
  console.log(firstName + "is married");
}
if (isMarried == false) {
  console.log(firstName + "is not isMarried");
}
//loops concept
let answer = 0;
for (let i = 0; i <= 100; i++) {
  answer = answer + i;
}
console.log(answer);

const ages = [21, 22, 23, 24, 25];
const numberOfpeople = ages.length;

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

const personArray = ["rojina", "ram", "gita"];
const genderArray = [23, 33, 21];

const user = [1, 2, 3];
const users2 = ["rojina", "ram"];
const allUsers = [
  {
    firstName1: "rojina",
    gender: "female",
  },
  {
    firstName1: "riya",
    gender: "female",
    metadata: {
      age: 21,
      address: pokhara,
    },
  },
  {
    firstName1: "piya",
    gender: "female",
  },
];

for (let i = 0; i <= allUsers.length; i++) {
  if (allUsers[i]["metadata"]["age"] === "male") {
    console.log(allUsers[i]["firstName"]);
  }
}

//functions
function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}
const value = sum(1, 2);
const value2 = sum(1, 10);
console.log(value);

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + 1;
}
console.log(sum);

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result =" + data);
}

function displayResultPassive(data) {
  console.log("sum's result is" + data);
}
const ans = sum(1, 2, displayResult);

//call backs in javascripts
//***function to function call***
//we can think as we are passing the 3rd parameter (i.e the function - sum) as a refrence, when we say **refrence** it means the implementation is the thing that is passed down, and hence name can be anything and hence what showed is working...

function calculateArithmethic(a, b, arithmeticFinalFunction) {
  function arithmeticFinalFunction(a, b) {
    return a + b;
  }

  const ans = arithmeticFinalFunction(a, b);
  return ans;
}
function sum(a, b) {
  return a + b;
}

const value1 = calculateArithmethic(2, 3, sum);
console.log(value1);



