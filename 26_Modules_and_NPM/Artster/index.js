var figlet = require("figlet"); 
var color = require("colors");

figlet("Brina", function(e, data){
    if(e){
        console.log("Uhh oh, something went wrong...")
    }
    console.log(data.rainbow);
})