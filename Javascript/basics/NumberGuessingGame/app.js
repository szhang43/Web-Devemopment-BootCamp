let maximum = parseInt(prompt("Enter the maximum number!"));
console.log("Maximum is", maximum);
let count = 1;
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log("The target number is ", targetNum);

let guess = parseInt(prompt("Enter a guess!"));

while(!maximum){
    maximum = parseInt(prompt("Please enter a valid response!"));
}

while(parseInt(guess) !== targetNum){
    if(guess == "q"){
        console.log("You quit!");
        count++;
        break;
    }
    if(guess > targetNum){
        guess = parseInt(prompt("Your guess is too high!"));
        count++;
    }
    else if(guess < targetNum){
        guess = parseInt(prompt("Your guess is too low!"));
        count++;
    }
}

console.log("Congrats, you got it!");
console.log(`Total Attempts: ${count}`)
