#! /usr/bin/env node
console.log("guess a number between 1 to 10");
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number", message: "enter your guess number:" });
    let ans = input.guess;
    if (a == ans) {
        console.log("congralution your guess number is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
    if (a > ans) {
        console.log("hint: number is higher");
    }
    else {
        console.log("hint: number is lower");
    }
    console.log("GAME OVER");
}
