const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


const letters = document.querySelectorAll("span"); 

let i = 0;
for(let letter of letters){
    letter.style.color = colors[i]; 
    i++;
}

// ** Class List Exercise ** //
const liClass = document.querySelectorAll("li"); 
console.log(liClass);

for(let li of liClass){
    console.log(li)
    li.classList.toggle("highlight");
}

// ** Button Exercise ** //

 
const container = document.querySelector("#container");
for(let i = 0; i < 100; i++){
    const buttons = document.createElement("button");
    buttons.innerText = "I am a button";
    document.querySelector("#container").appendChild(buttons);
}