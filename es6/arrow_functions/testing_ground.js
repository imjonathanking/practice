// Returns num times 2
const timesTwo = num => num * 2

// Returns the first parameter times the second parameter
const firstTimesSecond = (first, second) => first * second;

// "return" is required if you are writing code inside the curly brackets
const testingReturn = (string) => {
    return string + "Yeah"
}

// An empty set of parenthesis are required if no parameters are passed in
const logHello = () => console.log("hello");

// Return is not required in this function
const logGoodbye = () => {
    return console.log("goodbye");
}

const add3 = (one, two, three) => one + two + three;

const add4 = (a, b, c, d) => {
    return a + b + c + d
}

// This will add spaces between each letter in a string
const addSpaces = (string) => string.split("").join(" ");

// This will add underscores between each letter in a string
const addUnderscores = (string) => {
    return string.split("").join("_");
}

// class allows us to store a constructor, and pass parameters into it to create similar objects
class Band {
    constructor(name, genre){
        this.name = name,
        this.genre = genre
    }
}

const hum = new Band("Hum", "Etherial Post-Hardcore");
const fun = new Band("Fun.", "Broadway-inspired Pop/Rock");

