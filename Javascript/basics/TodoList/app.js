let response = prompt("Add a new todo below"); 

const todoList = [];

while(response != "quit" && response != "q"){
    response = prompt("What would you like to do?")
    if(response == "new"){
        newTodo = prompt("What would you like to add?");
        console.log(newTodo);
        todoList.push(newTodo);
    }
    else if(response == "list"){
        console.log("*****************************")
        for(let i = 1; i < todoList.length; i++){
            console.log(`${i} : ${todoList[i]}`);
        }
        console.log("*****************************")
        alert("Check console for list!")
    }
    else if(response == "delete"){
        console.log("*****************************")
        for(let i = 1; i < todoList.length; i++){
            console.log(`${i} : ${todoList[i]}`);
        }
        console.log("*****************************")
        
        const index = prompt(`What would you like to delete? Check console for list...`);
        if(!parseInt(index)){
            alert("Please enter a valid index...");
        }
        else if(index > todoList.length + 1){
            alert("That is not a valid index...")
        }
        else{
            todoList.splice(index - 1, 1);
        }
    }
    else{
        alert("That is not a valid response...");
    }
}

console.log("Quited App");