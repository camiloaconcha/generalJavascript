const obj = {
  name: "Camilo",
  age: "36",
  country: "COL",
};
/**
 * Spread Operator
 */
let { name, ...all } = obj;

console.log(all);
console.log(name, all);
/**
 * Propagation Properties
 */

const obj = {
  name: "Camilo",
  age: "25",
};

const obj1 = {
  ...obj,
  country: "COL",
};

console.log(obj1);

/**
 * Promise Finally
 */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

/**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-11-12");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
