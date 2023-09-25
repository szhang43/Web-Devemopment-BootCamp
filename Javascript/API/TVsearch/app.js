const form = document.querySelector("#searchForm");
const submitBtn = document.querySelector("#searchBtn");

form.addEventListener("submit", async function(e){
    try{
        e.preventDefault();
        const searchContent = form.elements.query.value;
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchContent}`)
        showDisplay(response.data, searchContent);
        form.elements.query.value = '';
    }
    catch(error){
        alert(`There was an error: ${error}`);
    }
})

const createShow = (result, imgURL) => {
    const mainDiv = document.querySelector(".container");
    const showName = result.show.name;

    const showContainer = document.createElement("div"); 
    const img = document.createElement("img"); 
    const titleTag = document.createElement("span");

    img.id = "showImg"; 
    titleTag.id = "title";
    showContainer.id = "showDisplay";

    img.src = imgURL;
    titleTag.innerText = showName;

    showContainer.append(img);
    showContainer.append(titleTag);

   mainDiv.appendChild(showContainer);
}

const noShow = (search) => {
    const msg = document.createElement("h2"); 
    msg.innerText = `Uh oh, no results for "${search}"`;
    document.body.append(msg);
    msg.id = "errorMsg";

}

const showDisplay = (shows, searchContent) => {
    const msg = document.querySelector("#errorMsg");
    console.log(msg);
    if(msg){
        msg.innerText = "";
    }
    const mainDiv = document.querySelector(".container");

    mainDiv.innerText = "";
    if(shows.length == 0){
        noShow(searchContent);
    }   
    for(result of shows){
        const imgURL = result.show.image;
        srcURL = "https://www.napaonline.com/_ui/responsive/common/images/missing-product-96x96_EN.svg";
        imgURL ? createShow(result, imgURL.medium) : createShow(result, srcURL);
    }
}