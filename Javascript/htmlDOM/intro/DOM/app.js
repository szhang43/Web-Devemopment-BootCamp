const links = document.querySelectorAll("p a"); 
for(let link of links){
    console.log(link.href);
}

const text = document.querySelector("p").innerText;
console.log(text);

const allLinks = document.querySelectorAll("a"); 

// for(let link of allLinks){
//     link.innerText = "I am a link!";
// }

document.querySelector("h1").innerHTML = '<i>Silkie Chickens</i>';
const mainHeading = document.querySelector("h1")
document.querySelector("h1").innerHTML += "<sup>Are so cute!</sup>";

for(let link of allLinks){
    link.style.textDecorationColor = "pink";
    link.style.textDecorationStyle = 'wavy';
}

// *** Manipulating Classes *** // 

const h2 = document.querySelector("h2"); 

console.log(h2.getAttribute("class")); // null originally

h2.setAttribute("class", "purple"); // changed null to a class purple     

console.log(h2.getAttribute("class")); // Changes to purple

// ** Adding Multiple Classes ** // 

h2.classList.add("border") // add a new class 
h2.classList.remove("border") // remove class 

// ** toggle classes ** // 

h2.classList.toggle("purple") // on and off 
h2.classList.toggle("purple")


// ** Parent/Children/Sibling ** //

const firstBold = document.querySelector("b"); 

console.log(firstBold.parentElement);
console.log(firstBold.children);

const silkieImg = document.querySelector(".square")

console.log(silkieImg.nextSibling) // This would be #text due to whitespace
console.log(silkieImg.nextElementSibling); // The next element, img

// ** Creating + Removing Elements ** // 

const greySilkie = document.createElement("img"); // create wanted object 
greySilkie.src = "silkie.jpg"; // add source/path

document.body.appendChild(greySilkie); // append the img to body
greySilkie.classList.add("square") // add class square

// Create + Add Text //
const newSilkie = document.createElement("h3"); 
newSilkie.innerText = "We got a new Silkie!!!"; 

document.body.appendChild(newSilkie);

// ** Practice ** //

const hist = document.createElement("h4"); 
hist.innerText = "(A Mysterious Creature)"; 

document.querySelector("#History").appendChild(hist);

// ** Append + Prepend ** //
 
const p = document.querySelector("p"); 
p.append("I am new p text!");

p.prepend("I am a new prepend text! ");


// ** Adjacent Element ** //

const heading = document.querySelector("h1"); 

const newHeading1 = document.createElement("h2"); 
newHeading1.innerText = "beforebegin"

const newHeading2 = document.createElement("h2"); 
newHeading2.innerText = "afterbegin"

const newHeading3 = document.createElement("h2"); 
newHeading3.innerText = "beforeend"

const newHeading4 = document.createElement("h2"); 
newHeading4.innerText = "afterend "

heading.insertAdjacentElement("beforebegin", newHeading1);
heading.insertAdjacentElement("afterbegin", newHeading2);
heading.insertAdjacentElement("beforeend", newHeading3);
heading.insertAdjacentElement("afterend", newHeading4);


// ** Remove ** //

// have to call the parent element to remove the child element //

const li = document.querySelector("li"); 
const ul = document.querySelector("ul"); 
ul.removeChild(li)

// ** newer method ** //

const chickenImg = document.querySelector("img"); 
// chickenImg.remove()