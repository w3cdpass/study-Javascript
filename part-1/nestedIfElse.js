// nested if else

// guess a number

let winningNumber = 29;
let userGuess = +prompt("Guess a Number")

if (userGuess == winningNumber) {
    document.write(`You Right it is ${userGuess}`)
} else if (userGuess <= 18) {
    document.write(`You guess is low ${userGuess}`)
} else if (userGuess >= 40) {
    document.write(`Guessed Number is too High ${userGuess}`)
}