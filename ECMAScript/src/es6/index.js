//Default params y concatenacion

function newFunction(name, age, country) {
  var name = name || "camilo";
  var age = age || 25;
  var country = country || "COL";
  console.log(name, age, country);
}
//ES6

function newFunction2(name = "camilo", age = 25, country = "CO") {
  console.log(name, age, country);
}

newFunction();
newFunction2("Andres", 26, "ARG");

//Template String

let hello = "Hello";
let world = "World";

let epicPhrase = `${hello} ${world}`;

console.log(epicPhrase);

//Let, const, multilinea
//multilinea

//Old
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit \n" +
  "another phrase one the dust";
//New Way
let lorem2 = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit 
another phrase one the dust`;

console.log(lorem);
console.log(lorem2);

//Destructuring
//old
let person = {
  personName: "camilo",
  age: 25,
  country: "COL",
};
console.log(person.personName, person.age, person.country);
//New
let { personName, age, country } = person;

console.log(personName, age, country);

//Spread operator

let team1 = ["Camilo", "Andrés", "Verónica"];
let team2 = ["Luisa", "Carlos", "Laura"];

let education = ["David", ...team2, ...team1];
console.log(education);

//Scope de las let, const, var

// LET
{
  var globalVar = "Global var";
}
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar);

// CONST
const a = "b";

//ES6

let nombre = "Camilo";
let age = 25;

obj = { nombre: nombre, age: age };
obj2 = { nombre, age };

console.log(obj);
console.log(obj2);

// Arrow functions
const names = [
  { nombre: "Camilo", age: 25 },
  { nombre: "Verónica", age: 20 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//Arrow are anonymous functions
let listOfNames2 = names.map((item) => console.log(item.name));

let listOfNames3 = (nombre, age) => {
  console.log(`${nombre}`);
};

let listOfNames4 = (nombre) => {
  console.log(nombre);
};

listOfNames4("camilo");

let square = (number) => number * number;

console.log(square(4));

//Promesas manejar asincronía repara callback hell
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey");
    } else {
      reject("¡Ouch!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

//Calculator\
//Clases Módulos y Generadores
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(3, 3));

//Modues
import { hello } from "./module";
console.log(hello());

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
