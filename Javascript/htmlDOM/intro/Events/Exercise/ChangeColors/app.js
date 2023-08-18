const btn = document.querySelector("#color"); 
const h1 = document.querySelector("h1"); 


function makeColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newColor = `rgb(${r},${g},${b})`; 
    return newColor;
}

btn.addEventListener("click", function(){
    
    const newColor = makeColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

})