import {franc} from 'franc';
import langs from "langs";
import process from "process"; 
import colors from "colors"

const input = process.argv[2]; 

const code = franc(`${input}`);

try{
    if(code == "und"){ // if code is undetermined
        console.log(`Your input is too short or invalid!`.red);
    }
    else{
        const language = langs.where("3", code);
        if(typeof language !== "undefined"){
            const result = language.name.blue;
            console.log(`Our best guess is: ${result}!`);
        }
        else{
            console.log(`We weren't able to guess the language...`.red);
        }
    }
}catch(error){
    console.log(`There was an error: ${error}`.red);
}
