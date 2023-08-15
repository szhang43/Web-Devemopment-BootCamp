// *** Default Args *** //

function rollDie(numSides){
    return Math.floor(Math.random() * numSides) + 1;
}

function greets(person, msg = "Hello!", msg2 = "How are you?"){
    return `${msg}, ${person}! ${msg2}`; 
}


// **** Spread with Strings and Arrays**** // 

const maxPrice = [2.99, 8.99, 19.99, 2.98, 5.98, 7.98, 4.25, 4.65, 8.90]

let word = "hello"

console.log(...word)
console.log(...maxPrice)


const catList = ["Rusty", "Doraemon", "Blazy"]
const dogList = ["Oreo", "Charlie", "Bear", "Bella"]

const allList = [...catList, ...dogList]; 
console.log(allList)


// **** Spread with Objects **** //

const aGoose = {
    name : "Emperor Goose", 
    family : "Anser Anser",
    type : "Goose"
}

const aSwan = {
    name : "Mute Swan", 
    family : "Cygnus Olor", 
    type : "Swan"
}

const birds = {...aGoose, ...aSwan}
console.log(birds)  // aSwan wins


const random = ["birds", "Toys", "Books", "Supplies", "Food"]; 
console.log({...random})


// *** Used to copy objects instead of mutating them *** //

// *** Example *** //

const userEntry = {
    firstName : "Andrew", 
    lastName : "Chan", 
    username: "sushi",
    password : "*******"
}

// *** Manipulate Data *** //

const user1 = {
    ...userEntry, 
    id: 888, 
    isAdmin : false
}
console.log(user1)

// *** Rest *** // 

function sum(...nums){
    return nums.reduce((count, num) =>{ 
        return count + num; 
    })
}

function addPrice(){
    console.log(arguments[2]);
    return true;
}

// *** Destructuring Arrays *** //

const raceResults = ["Andrew", "Sophie", "Misa", "Ryusaki", "Matsuda", "Light"]; 

const [gold, silver, bronze, ...everyoneElse] = raceResults; // Direct access


// *** Destructuring Objects *** //

const someUser = {
    email : "misamisa@gmail.com", 
    password : "********", 
    firstName : "Misa", 
    lastName : "Amane", 
    born : 2000, 
    bio : "Second Kira", 
    city : "Tokyo", 
    country: "Japan"
}

const {status = "Alive"} = someUser;