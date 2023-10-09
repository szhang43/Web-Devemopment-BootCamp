const form = document.querySelector("#shelterForm"); 
const formInfo = document.querySelectorAll("#catInfo");

function createButton(){
    const remove = document.createElement("button");
    remove.innerText = "X";
    remove.classList.add("removeBtn");
    return remove;
}

function deleteRow(row){
    const deleteBtn = document.querySelectorAll(".removeBtn"); 
    for(let btn of deleteBtn){
        btn.addEventListener("click", function(e){
            row.remove();
        })
    }
}

function createRow(){
    const row = document.createElement("tr");  // create a new row
    const deleteBtn = createButton(); 

    for(let info of formInfo){ // loop through responses
        const element = document.createElement("td"); // create an individual cell
        element.innerText = info.value; // set the cell value
        row.append(element); // add cell to table
        info.value = " ";
    }
    row.append(deleteBtn); 
    return row;
}

form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent page refresh
    const newRow = createRow();

    document.querySelector("#cats").append(newRow); // add the row
    deleteRow(newRow);
});


// e.stopPropagation stops bubbling on events