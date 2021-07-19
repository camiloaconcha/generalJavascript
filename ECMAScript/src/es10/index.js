//El metodo recibe la profundidad para aplanar el array
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

//trimStart
let hello = "    hello";
console.log(hello.trimStart());

//trimEnd
let hello = "hello     ";
console.log(hello.trimEnd());

//Error no se necesita pasar
try {
} catch {
  error;
}
//Convierte de objeto
//Object.fromEntries() lo inverso a Object.entries(),
//es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(),
// y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().

let entries = [
  ["name", "oscar"],
  ["age", "22"],
];

console.log(Object.fromEntries(entries));

//Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)
