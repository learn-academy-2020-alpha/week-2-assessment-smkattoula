// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.


var num1 = 15
// Expected output: "15 is divisible by three" ,

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const evenDivide = (num) => {
    if (num % 3 === 0) {
        return `${num} is divisible by three`
    }       else {
        return `${num} is not divisible by three`
    }
}
    console.log(evenDivide(num1))
    console.log(evenDivide(num2))
    console.log(evenDivide(num3))




// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const wordsCapitalized = (array) => {
   return array.map(value => value.charAt(0).toUpperCase() + value.substr(1));
}
console.log(wordsCapitalized(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNumbers = (array) => {
    let newArr = []
    newArr = array.sort((a,b) => a - b).filter(value => typeof value === "number")
     return newArr 

}
console.log(onlyNumbers(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// create a function called vowelIndex that takes in a string and logs the index of the first vowel,
// create an array called vowelArray that contains only vowel letters.

const vowelIndex = (str) => {
   let vowelArray = ["a", "e", "i", "o", "u"]
    str.split("")
        for (let i= 0; i <str.length; i++)
            if (vowelArray.includes(str[i])) {
                return i
            }
console.log(vowelIndex(vowelTester1))
console.log(vowelIndex(vowelTester2))





// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, str, num2) => {
    if (str === "+") {
        return num1 + num2 
    }   else if (str === "-") {
        return num1 - num2
    }   else if (str === "*") {
        return num1 * num2
    }   else if (str === "/") {
        return num1 / num2
    }   else if (str === "/" && num2 === 0) {
        return "Can't divide by 0!"
    }
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9)) 
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

