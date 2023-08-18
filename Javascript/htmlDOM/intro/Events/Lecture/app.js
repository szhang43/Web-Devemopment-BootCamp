const btn = document.querySelector("#v1"); 

// btn.onclick = function(){
//     console.log("you clicked me!");
// }

btn.onmouseenter = function(){
    console.log("You are hovering over me");
}

btn.addEventListener("click", function(){
    console.log("You clicked me :)");

})