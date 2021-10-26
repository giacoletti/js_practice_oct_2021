let euler = Math.E;

console.log(euler);

let pi = Math.PI;

console.log(pi);

let a = 6;
let b = -13;

console.log(`Absolute value of a is ${Math.abs(a)}.`);
console.log(`Absolute value of b is ${Math.abs(b)}.`);

let decimal = 24.942;
let floor = Math.floor(decimal);

console.log(`The value of floor is ${floor}.`); //rounds down the number

decimal = 13.37;
let ceiling = Math.ceil(decimal);

console.log(`The value of ceiling is ${ceiling}.`); //rounds up

let number = Math.log(1);

console.log(`The value of number is ${number}.`);

number = Math.max(14, 349); //returns the maximum number

console.log(`The value of number is ${number}.`);

number = Math.min(53, 94);

console.log(`The value of number is ${number}.`);

number = Math.pow(3, 2);

console.log(`The value of number is ${number}.`);

let random = Math.random();
console.log(`The value of random is ${random}.`);

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

random = randomBetween(5, 25);

console.log(`The value of random is ${random}.`);

let rounded = Math.round(3.14159);

console.log(`The value of rounded is ${rounded}.`);

let root = Math.sqrt(49);

console.log(`The value of root is ${root}.`);
