const form = document.querySelector("#shelterForm"); 

const formInfo = document.querySelectorAll("#catInfo");


form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent page refresh
    const row = document.createElement("tr");  // create a new row
    for(let info of formInfo){ // loop through responses
        const element = document.createElement("td"); // create an individual cell
        element.innerText = info.value; // set the cell value
        
        document.querySelector("#cats").append(element); // add cell to table
        info.value = " ";
    }
    document.querySelector("#cats").append(row); // add a new row
});

