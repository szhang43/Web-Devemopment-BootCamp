const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


const mainContainer = document.querySelector(".container");

for(let i = 1; i < 151; i++){

    const pokemonContainer = document.createElement("div");
    const pokemonImg = document.createElement("img"); //create img tag for pokemon
    const figCaption = document.createElement("span"); 
    
    pokemonImg.src = `${baseURL}${[i]}.png`; //include source link
    figCaption.innerText = `#${i}`; 

    pokemonContainer.style.display = "inlineBlock";
    pokemonContainer.append(pokemonImg);
    pokemonContainer.append(figCaption); 
    mainContainer.appendChild(pokemonContainer);
    
}
