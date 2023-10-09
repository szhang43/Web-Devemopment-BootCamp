// ** Helper Functions ** //

function makeColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newColor = `rgb(${r},${g},${b})`; 
    return newColor;

}

function applyColor(){
    this.style.backgroundColor = makeColor();
}

const btns = document.querySelectorAll("button"); 

for(let btn of btns){
    btn.addEventListener("click", applyColor);
}

// for(let btn of btns){
//     btn.addEventListener("click", function(){
//         const newColor = makeColor(); 
//         console.log(newColor);
//         btn.style.backgroundColor = newColor;
//     })
// }

// for(let btn of btns){
//     btn.addEventListener("click", function(){
//         const newColor = makeColor(); 
//         console.log(newColor);
//         this.style.backgroundColor = newColor;
//     })
// }



