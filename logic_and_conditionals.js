console.log(5 === 5);  // true

let pears = 40 / 2;

console.log(20 === pears); // true

console.log(17 === 10); // false

console.log(9 !== 7);  //true

let oranges = 5 * 6;

console.log(30 !== oranges);  // false

console.log(57 !== 57);  // false

console.log(6 < 4);  // false
console.log(8 < 13); // true

let books = 32;
console.log(books > 30); // true
console.log(books > 50); // false

console.log(29 <= 94); // true
console.log(13 <= 9); // false

console.log(32 >= 32); // true
console.log(42 >= 85); // false

let candy = 110;

if (candy >= 100) {
    console.log("You got a cavity!");
};

candy = 80;
if (candy >= 100) {
    console.log("You got a cavity!");
} else {
    console.log("You didn't get a cavity! Nice!");
};

if (candy >= 100) {
    console.log("You got a cavity!");
} else if (candy >= 95) {
    console.log("You almost got a cavity. Be careful!")
} else if (candy >= 75) {
    console.log("You should eat less candy!");
} else {
    console.log("You didn't get a cavity! Nice!");
};

let number = 25;
let isEven = (number % 2 === 0) ? "Yes" : "No"; // ternary operator, one liner if-else statement

console.log(`Is ${number} an even number? ${isEven}`);

function getFruitByColor(color) {
    switch (color) {
        case "red":
            return "apple";
            break;
        case "yellow":
            return "banana";
            break;
        case "orange":
            return "orange";
            break;
        case "green":
            return "pear";
            break;
        default:
            return "grape";
    }
}

let favoriteColor = "yellow";
let fruit = getFruitByColor(favoriteColor);

console.log(`I want to eat a ${fruit}`);

let wearingShoes = true;
let needsTying = true;

if (wearingShoes && needsTying) {
    console.log("I should tie my shoes!");
}

let thereIsSnickers = false;
let thereIsSkittles = true;

if(thereIsSnickers || thereIsSkittles){
    console.log("I'm glad there's candy in this house!");
}

let temperature = 50;
let isHot = temperature > 70;

if (!isHot) {
    console.log("I will wear my boots today!");
}
