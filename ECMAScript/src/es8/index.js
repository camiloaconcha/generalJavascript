const data = {
  frontend: "camilo",
  backend: "Luis",
  design: "Valentina",
};

//entries transforma un objeto a matriz

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo.

const data = {
  frontend: "camilo",
  backend: "Luis",
  design: "Valentina",
};
const values = Object.values(data);
console.log(values);
console.log(values.length);

//PAD

const string = "Hello";

console.log(string.padStart(7, "hi"));
console.log(string.padEnd(8, "end"));

//Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
